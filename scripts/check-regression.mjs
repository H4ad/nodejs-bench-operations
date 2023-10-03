import fs from 'node:fs/promises';

const versions = ['v16'];

async function parseMD(path) {
  const content = await fs.readFile(path, 'utf-8');
  const strData = content.match(/<!--([\s\S]*?)-->/);
  if (!strData) {
    console.warn(`Returning empty results for ${path}`);
    return null;
  }
  return JSON.parse(strData[1].trim());
}

async function readResult (path) {
  const dir = await fs.opendir(path);
  const results = {};
  for await (const file of dir) {
    if (file.isFile()) {
      results[file.name] = await parseMD(file.path);
    }
  }
  return results;
}

async function checkRegression(a, b) {
  const aResult = a.data;
  const bResult = b.data;
  const benchmarks = Object.keys(aResult.data);
  for (const bench of benchmarks) {
    if (!bResult[bench]) {
      console.warn(`${bench} does not exist in ${b.name}`);
      continue;
    }
    const aBench = aResult[bench];
    const bBench = bResult[bench];
    if (aBench.environment !== bBench.environment) {
      console.warn(`${bench} does have the same environment in ${a.name} and ${b.name}`);
      continue;
    }

    // calculate ops/secs
    const aOpsSec = aBench.benchmark.opsSec;
    const bOpsSec = bBench.benchmark.opsSec;
    if (aOpsSec === bOpsSec) {
      console.info(`${bench} - ${a.name} and ${b.name} are equals`);
      continue;
    }

    // regression
    if (aOpsSec - bOpsSec > 0) {
      const threshold = aOpsSec - (aOpsSec * 0.10);
      if (bOpsSec < threshold) {
        console.warn(`[REGRESSION DETECTED] - ${bench} - ${a.name} -> ${b.name}`);
      }
    } else {
      const threshold = aOpsSec + (aOpsSec * 0.10);
      if (bOpsSec > threshold) {
        console.warn(`[IMPROVEMENT DETECTED] - ${bench} - ${a.name} -> ${b.name}`);
      }
    }
  }
}

async function main (versions) {
  for (const version of versions) {
    const dir = await fs.opendir(version);
    let previous;
    let previousName;
    // TODO: readdir alphabetically
    for await (const dirent of dir) {
      if (dirent.isDirectory()) {
        const content = await readResult(dirent.path);
        if (!previous) {
          previous = content;
          previousName = dirent.name;
          continue;
        }
        console.info(`Checking regression between ${previousName} and ${dirent.name}`);
        await checkRegression(previous, content);
        previous = content;
        previousName = dirent.name;
      }
    }
  }
}

main(versions)

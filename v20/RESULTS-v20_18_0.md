## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|108,188,193|54100299|
|Using dot notation|66,411,065|33217082|
|Using define property (writable)|4,255,099|2127550|
|Using define property initialized (writable)|5,674,180|2837633|
|Using define property (getter)|2,128,752|1067070|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:43:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":108188193.57447752,"samples":54100299},{"name":"Using dot notation","opsSec":66411065.30173314,"samples":33217082},{"name":"Using define property (writable)","opsSec":4255099.080898598,"samples":2127550},{"name":"Using define property initialized (writable)","opsSec":5674180.109455734,"samples":2837633},{"name":"Using define property (getter)","opsSec":2128752.5870128293,"samples":1067070}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.084ms
new Array(length)|100|0.007ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.285ms
new Array(length)|10,000|0.317ms
array.push|1,000,000|32.133ms
new Array(length)|1,000,000|7.056ms
array.push|100,000,000|1,768.426ms
new Array(length)|100,000,000|4,427.88ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.013ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.248ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|25.401ms
new Array(length)|1,000,000|4.618ms
array.push|100,000,000|2,475.612ms
new Array(length)|100,000,000|4,115.02ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|258|130|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:57:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":258.92845359478474,"samples":130},{"name":"Array.from","opsSec":22.32475793367294,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,413|2207|
|new Blob (1024)|576|289|
|text (128)|4,489|2245|
|text (1024)|564|284|
|arrayBuffer (128)|4,541|2275|
|arrayBuffer (1024)|567|284|
|slice (0, 64)|63,916|36623|
|slice (0, 512)|24,690|12346|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:03:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4413.217033513217,"samples":2207},{"name":"new Blob (1024)","opsSec":576.642355544675,"samples":289},{"name":"text (128)","opsSec":4489.486232174562,"samples":2245},{"name":"text (1024)","opsSec":564.3592081339233,"samples":284},{"name":"arrayBuffer (128)","opsSec":4541.335903123943,"samples":2275},{"name":"arrayBuffer (1024)","opsSec":567.0394906726706,"samples":284},{"name":"slice (0, 64)","opsSec":63916.070685914005,"samples":36623},{"name":"slice (0, 512)","opsSec":24690.84970269405,"samples":12346}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|390,674|195503|
|[True conditional] Using constructor name|317,239|158620|
|[True conditional] Check if property is valid then instanceof |316,449|158225|
|[False conditional] Using instanceof only|97,094,140|48547929|
|[False conditional] Using constructor name|97,085,882|48542946|
|[False conditional] Check if property is valid then instanceof |97,105,488|48552806|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:09:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":390674.87803767086,"samples":195503},{"name":"[True conditional] Using constructor name","opsSec":317239.634539941,"samples":158620},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":316449.57279307675,"samples":158225},{"name":"[False conditional] Using instanceof only","opsSec":97094140.2104714,"samples":48547929},{"name":"[False conditional] Using constructor name","opsSec":97085882.29141177,"samples":48542946},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":97105488.28760792,"samples":48552806}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.05 ms|1|
|Gzip|136.19 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Apr 30 2025 20:36:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597869873046875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134054001},{"name":"Gzip","samples":1,"totalTime":0.136194655}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,643|3322|
|crypto.verify('RSA-SHA256')|6,710|3356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:15:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6643.616025568185,"samples":3322},{"name":"crypto.verify('RSA-SHA256')","opsSec":6710.885831890646,"samples":3356}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,396,202|698353|
|fromUnixToISOString(new Date())|2,099,075|1049858|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:20:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1396202.2613937072,"samples":698353},{"name":"fromUnixToISOString(new Date())","opsSec":2099075.173340331,"samples":1049858}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,736|8869|
|Intl.DateTimeFormat().format(new Date())|17,362|8697|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,192|9097|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,880|8941|
|Reusing Intl.DateTimeFormat()|545,233|315115|
|Date.toLocaleDateString()|912,065|456033|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,203|10602|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:26:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17736.69592716865,"samples":8869},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17362.89451338243,"samples":8697},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18192.115296855245,"samples":9097},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17880.531865289606,"samples":8941},{"name":"Reusing Intl.DateTimeFormat()","opsSec":545233.3458135821,"samples":315115},{"name":"Date.toLocaleDateString()","opsSec":912065.4983639759,"samples":456033},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21203.82667992072,"samples":10602}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,023,260|511669|
|Using brackets {}|1,039,678|519840|
|Using '' + |1,041,182|520856|
|Using date.toString()|1,156,117|578089|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:32:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1023260.0173540774,"samples":511669},{"name":"Using brackets {}","opsSec":1039678.6733700127,"samples":519840},{"name":"Using '' + ","opsSec":1041182.9437108121,"samples":520856},{"name":"Using date.toString()","opsSec":1156117.0587575987,"samples":578089}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,655,915|1828162|
|Using delete property (proto: null)|16,003,078|8001549|
|Using delete property (cached proto: null)|3,620,518|1810459|
|Using undefined assignment|73,322,871|36665539|
|Using undefined assignment (proto: null)|16,971,252|8486424|
|Using undefined property (cached proto: null)|73,312,508|36656261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:38:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3655915.897420203,"samples":1828162},{"name":"Using delete property (proto: null)","opsSec":16003078.95633604,"samples":8001549},{"name":"Using delete property (cached proto: null)","opsSec":3620518.960882208,"samples":1810459},{"name":"Using undefined assignment","opsSec":73322871.70419887,"samples":36665539},{"name":"Using undefined assignment (proto: null)","opsSec":16971252.227095593,"samples":8486424},{"name":"Using undefined property (cached proto: null)","opsSec":73312508.51049843,"samples":36656261}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|367,731|183991|
|NodeError|315,507|157754|
|NodeError Range|308,188|154105|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:44:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":367731.8202752485,"samples":183991},{"name":"NodeError","opsSec":315507.1134250113,"samples":157754},{"name":"NodeError Range","opsSec":308188.5020028543,"samples":154105}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,672,523|836263|
|Function returning explicitly undefined|1,576,618|788805|
|Function returning implicitly undefined|1,612,441|806293|
|Function returning string|1,596,578|798330|
|Function returning integer|1,623,309|811655|
|Function returning float|1,609,957|805021|
|Function returning functions|1,556,193|778150|
|Function returning arrow functions|1,563,626|781895|
|Function returning empty object|1,618,813|809407|
|Function returning empty array|1,625,682|812842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:49:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1672523.7186776476,"samples":836263},{"name":"Function returning explicitly undefined","opsSec":1576618.3638074263,"samples":788805},{"name":"Function returning implicitly undefined","opsSec":1612441.5478114977,"samples":806293},{"name":"Function returning string","opsSec":1596578.641545584,"samples":798330},{"name":"Function returning integer","opsSec":1623309.7597501555,"samples":811655},{"name":"Function returning float","opsSec":1609957.9054587663,"samples":805021},{"name":"Function returning functions","opsSec":1556193.6746233753,"samples":778150},{"name":"Function returning arrow functions","opsSec":1563626.2289160357,"samples":781895},{"name":"Function returning empty object","opsSec":1618813.216494403,"samples":809407},{"name":"Function returning empty array","opsSec":1625682.9303006318,"samples":812842}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|77,350,595|38748307|
|using Array.includes (first item)|73,508,985|36786647|
|Using raw comparison|97,666,529|48864719|
|Using raw comparison (first item)|98,183,655|49092563|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:55:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":77350595.41350815,"samples":38748307},{"name":"using Array.includes (first item)","opsSec":73508985.10543443,"samples":36786647},{"name":"Using raw comparison","opsSec":97666529.81614706,"samples":48864719},{"name":"Using raw comparison (first item)","opsSec":98183655.99430245,"samples":49092563}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,578,540|24791235|
|Using Object.getOwnPropertyNames()|42,417,080|21211765|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:01:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":49578540.206589065,"samples":24791235},{"name":"Using Object.getOwnPropertyNames()","opsSec":42417080.14362752,"samples":21211765}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|131,854,685|65927390|
|Length = 10_000 - Array.at|91,730,058|45865955|
|Length = 1_000_000 - Array.at|97,514,925|48757472|
|Length = 100 - Array[length - 1]|95,092,439|47546442|
|Length = 10_000 - Array[length - 1]|95,418,296|47714963|
|Length = 1_000_000 - Array[length - 1]|95,371,580|47693982|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:06:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":131854685.59204513,"samples":65927390},{"name":"Length = 10_000 - Array.at","opsSec":91730058.52049881,"samples":45865955},{"name":"Length = 1_000_000 - Array.at","opsSec":97514925.08210453,"samples":48757472},{"name":"Length = 100 - Array[length - 1]","opsSec":95092439.53793761,"samples":47546442},{"name":"Length = 10_000 - Array[length - 1]","opsSec":95418296.6088459,"samples":47714963},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":95371580.30696222,"samples":47693982}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|140,595,610|70297844|
|~ (small)|97,605,146|48802584|
|Math.floor (long)|99,300,443|49665174|
|~ (long)|99,576,514|49806921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:12:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":140595610.67241412,"samples":70297844},{"name":"~ (small)","opsSec":97605146.52686776,"samples":48802584},{"name":"Math.floor (long)","opsSec":99300443.47284727,"samples":49665174},{"name":"~ (long)","opsSec":99576514.94676009,"samples":49806921}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|44,299,270|22210241|
|Object.create({})|1,910,672|955337|
|Cached Empty.prototype|82,621,637|41310864|
|Empty.prototype|2,197,915|1102864|
|Empty class|1,366,466|683234|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:18:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":44299270.33650526,"samples":22210241},{"name":"Object.create({})","opsSec":1910672.3988565297,"samples":955337},{"name":"Cached Empty.prototype","opsSec":82621637.77717155,"samples":41310864},{"name":"Empty.prototype","opsSec":2197915.715194419,"samples":1102864},{"name":"Empty class","opsSec":1366466.9997461562,"samples":683234}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|119,513,569|59768289|
|Using optional chain (obj.field?.field2) (undefined)|96,443,879|48221952|
|Using and operator (obj.field && obj.field.field2) (Valid)|97,884,533|48942559|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,696,965|48848876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:24:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":119513569.7256107,"samples":59768289},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":96443879.5032546,"samples":48221952},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":97884533.04203054,"samples":48942559},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97696965.34403504,"samples":48848876}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|142,155,753|71077900|
|Using parseInt(x, 10) - big number (10 len)|89,211,357|44666124|
|Using + - small number (2 len)|99,812,366|49939813|
|Using + - big number (10 len)|98,944,329|49488636|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:29:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":142155753.94153574,"samples":71077900},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":89211357.86737663,"samples":44666124},{"name":"Using + - small number (2 len)","opsSec":99812366.03977099,"samples":49939813},{"name":"Using + - big number (10 len)","opsSec":98944329.07929903,"samples":49488636}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|896,336|449372|
|Using ? operator to avoid rejection|983,602|493444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:35:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":896336.2704736165,"samples":449372},{"name":"Using ? operator to avoid rejection","opsSec":983602.3863917257,"samples":493444}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|130,292,510|65146272|
|Raw usage underscore usage|97,973,350|48986684|
|Manipulating private properties using #|98,753,864|49430946|
|Manipulating private properties using underscore(_)|98,015,379|49047991|
|Manipulating private properties using Symbol|97,744,238|48872130|
|Manipulating private properties using PrivateSymbol|35,776,522|17893614|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:40:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":130292510.12394737,"samples":65146272},{"name":"Raw usage underscore usage","opsSec":97973350.16885027,"samples":48986684},{"name":"Manipulating private properties using #","opsSec":98753864.55504006,"samples":49430946},{"name":"Manipulating private properties using underscore(_)","opsSec":98015379.83651449,"samples":49047991},{"name":"Manipulating private properties using Symbol","opsSec":97744238.10529065,"samples":48872130},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35776522.94880326,"samples":17893614}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,772,339|3886177|
|Adding property in the object creation - small object|7,124,070|3562100|
|Adding property after the function creation - small class|222,099|111921|
|Adding property in the function creation - small class|241,599|121572|
|Adding property after the class creation - small class|239,210|119824|
|Adding property in the class creation - small class|235,354|117685|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:46:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7772339.869886116,"samples":3886177},{"name":"Adding property in the object creation - small object","opsSec":7124070.042714282,"samples":3562100},{"name":"Adding property after the function creation - small class","opsSec":222099.30623341314,"samples":111921},{"name":"Adding property in the function creation - small class","opsSec":241599.66498306976,"samples":121572},{"name":"Adding property after the class creation - small class","opsSec":239210.7863126896,"samples":119824},{"name":"Adding property in the class creation - small class","opsSec":235354.72971442668,"samples":117685}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|148,265,593|74132864|
|Getter|51,646,375|25823192|
|Method|97,946,824|48973419|
|DefineProperty (getter)|90,069,849|45034932|
|DefineProperty (getter & enumerable=false)|52,421,940|26210975|
|DefineProperty (getter & configurable=false)|100,569,791|50309062|
|DefineProperty (getter & enumerable=false & configurable=false)|52,392,813|26204187|
|DefineProperty (writable)|88,445,484|44238623|
|DefineProperty (writable & enumerable=false)|99,814,832|49907843|
|DefineProperty (writable & enumerable=false & configurable=false)|100,306,301|50153156|
|DefineProperties (getter)|52,275,398|26137761|
|DefineProperties (getter & enumerable=false)|50,151,395|25075722|
|DefineProperties (getter & enumerable=false & configurable=false)|51,276,475|25638245|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:53:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":148265593.3748412,"samples":74132864},{"name":"Getter","opsSec":51646375.323408954,"samples":25823192},{"name":"Method","opsSec":97946824.4833382,"samples":48973419},{"name":"DefineProperty (getter)","opsSec":90069849.76896374,"samples":45034932},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52421940.35436298,"samples":26210975},{"name":"DefineProperty (getter & configurable=false)","opsSec":100569791.5661504,"samples":50309062},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52392813.96296676,"samples":26204187},{"name":"DefineProperty (writable)","opsSec":88445484.87260032,"samples":44238623},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99814832.98243733,"samples":49907843},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100306301.36753204,"samples":50153156},{"name":"DefineProperties (getter)","opsSec":52275398.42095813,"samples":26137761},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50151395.75435728,"samples":25075722},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51276475.33492806,"samples":25638245}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|137,161,971|68587772|
|Setter|10,527,517|5263762|
|Method|96,767,704|48384217|
|DefineProperty (setter)|101,667,890|50838182|
|DefineProperty (setter & enumerable=false)|10,746,459|5373360|
|DefineProperty (setter & configurable=false)|10,554,131|5277223|
|DefineProperty (setter & enumerable=false & configurable=false)|10,633,629|5316817|
|DefineProperty (writable)|85,477,974|42738993|
|DefineProperty (writable & enumerable=false)|99,929,469|49964753|
|DefineProperty (writable & enumerable=false & configurable=false)|102,969,485|51508148|
|DefineProperties (setter)|94,588,396|47305120|
|DefineProperties (setter & enumerable=false)|10,247,373|5124160|
|DefineProperties (setter & enumerable=false & configurable=false)|10,564,062|5282047|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:59:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":137161971.82288814,"samples":68587772},{"name":"Setter","opsSec":10527517.22027891,"samples":5263762},{"name":"Method","opsSec":96767704.56504299,"samples":48384217},{"name":"DefineProperty (setter)","opsSec":101667890.59132655,"samples":50838182},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10746459.634775968,"samples":5373360},{"name":"DefineProperty (setter & configurable=false)","opsSec":10554131.71906567,"samples":5277223},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10633629.236134103,"samples":5316817},{"name":"DefineProperty (writable)","opsSec":85477974.54595141,"samples":42738993},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99929469.02609646,"samples":49964753},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":102969485.45409566,"samples":51508148},{"name":"DefineProperties (setter)","opsSec":94588396.70154971,"samples":47305120},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10247373.511592977,"samples":5124160},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10564062.033148289,"samples":5282047}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,355,528|1680284|
|Using replaceAll()|2,850,673|1425338|
|Using replaceAll(//g)|2,880,638|1440321|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:05:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3355528.7005527965,"samples":1680284},{"name":"Using replaceAll()","opsSec":2850673.5313167223,"samples":1425338},{"name":"Using replaceAll(//g)","opsSec":2880638.6930267806,"samples":1440321}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,801,506|10901717|
|{ ...object, __proto__: null }|20,396,555|10198400|
|{ ...object, newProp: true }|832,027|417344|
|structuredClone|282,228|141168|
|JSON.parse + JSON.stringify|189,441|94724|
|loop + object.keys starting with {}|1,519,765|761739|
|loop + object.keys starting with { __proto__: null }|825,459|412746|
|loop + object.keys starting with { randomProp: true }|606,857|303429|
|object.keys + reduce(FN, {})|1,553,783|776896|
|object.keys + reduce(FN, { __proto__: null })|839,812|420268|
|object.keys + reduce(FN, { newProp: true })|603,199|301600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:12:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":21801506.13641537,"samples":10901717},{"name":"{ ...object, __proto__: null }","opsSec":20396555.404507592,"samples":10198400},{"name":"{ ...object, newProp: true }","opsSec":832027.8886918918,"samples":417344},{"name":"structuredClone","opsSec":282228.7835429623,"samples":141168},{"name":"JSON.parse + JSON.stringify","opsSec":189441.9317960407,"samples":94724},{"name":"loop + object.keys starting with {}","opsSec":1519765.0528807167,"samples":761739},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":825459.4884525877,"samples":412746},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":606857.5387882704,"samples":303429},{"name":"object.keys + reduce(FN, {})","opsSec":1553783.7680535968,"samples":776896},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":839812.7599696163,"samples":420268},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":603199.13863163,"samples":301600}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|260,828|130416|
|Sort using first char|1,314,441|657313|
|Sort using localeCompare|1,231,980|616071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:17:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":260828.4073495172,"samples":130416},{"name":"Sort using first char","opsSec":1314441.4051068325,"samples":657313},{"name":"Sort using localeCompare","opsSec":1231980.3888125957,"samples":616071}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,830|916|
|{...smallObject} - Total keys: 2|52,604,953|26302479|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,075|538|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,255|3128|
|{ ...bigObject, ...anotherBigObject }|1,132|568|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,083,950|6543279|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,966,563|13983293|
|{ ...smallObject, ...anotherSmallObject }|19,691,487|9848228|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:23:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1830.4969460086872,"samples":916},{"name":"{...smallObject} - Total keys: 2","opsSec":52604953.1603443,"samples":26302479},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1075.1030673134142,"samples":538},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6255.628253035436,"samples":3128},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1132.784062296231,"samples":568},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13083950.865782583,"samples":6543279},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27966563.123351365,"samples":13983293},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19691487.16827688,"samples":9848228}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,066|1034|
|streams.web.Readable reading 1e3 * "some data"|1,631|817|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:29:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2066.8533015209027,"samples":1034},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1631.5336073826525,"samples":817}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,709|3883|
|streams.web.WritableStream writing 1e3 * "some data"|1,344|674|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:35:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":7709.259663851819,"samples":3883},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1344.4241410024858,"samples":674}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|147,149,157|73574648|
|Using backtick (`)|99,543,128|49772167|
|Using array.join|10,297,759|5149287|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:40:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":147149157.67979178,"samples":73574648},{"name":"Using backtick (`)","opsSec":99543128.33362962,"samples":49772167},{"name":"Using array.join","opsSec":10297759.900293324,"samples":5149287}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|58,271,105|29135610|
|(short string) (true) String#slice and strict comparison|61,066,079|30533043|
|(long string) (true) String#endsWith|49,939,022|24973598|
|(long string) (true) String#slice and strict comparison|55,815,457|27909560|
|(short string) (false) String#endsWith|56,610,848|28305802|
|(short string) (false) String#slice and strict comparison|60,245,761|30122886|
|(long string) (false) String#endsWith|53,708,325|26858667|
|(long string) (false) String#slice and strict comparison|55,342,813|27672756|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:47:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":58271105.08938076,"samples":29135610},{"name":"(short string) (true) String#slice and strict comparison","opsSec":61066079.52699556,"samples":30533043},{"name":"(long string) (true) String#endsWith","opsSec":49939022.97949918,"samples":24973598},{"name":"(long string) (true) String#slice and strict comparison","opsSec":55815457.72455686,"samples":27909560},{"name":"(short string) (false) String#endsWith","opsSec":56610848.4716163,"samples":28305802},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60245761.035271496,"samples":30122886},{"name":"(long string) (false) String#endsWith","opsSec":53708325.28776619,"samples":26858667},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55342813.373734266,"samples":27672756}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|139,008,515|69504300|
|Using indexof|15,209,156|7604580|
|Using RegExp.test|12,561,162|6280583|
|Using RegExp.text with cached regex pattern|13,492,392|6746299|
|Using new RegExp.test|4,262,539|2131502|
|Using new RegExp.test with cached regex pattern|5,061,726|2530903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:53:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":139008515.2048057,"samples":69504300},{"name":"Using indexof","opsSec":15209156.106456036,"samples":7604580},{"name":"Using RegExp.test","opsSec":12561162.055795114,"samples":6280583},{"name":"Using RegExp.text with cached regex pattern","opsSec":13492392.780705806,"samples":6746299},{"name":"Using new RegExp.test","opsSec":4262539.485497029,"samples":2131502},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5061726.429660526,"samples":2530903}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|114,299,970|57150030|
|(short string) (true) String#slice and strict comparison|60,068,350|30035966|
|(long string) (true) String#startsWith|60,630,056|30315332|
|(long string) (true) String#slice and strict comparison|54,617,744|27309042|
|(short string) (false) String#startsWith|97,885,755|48943436|
|(short string) (false) String#slice and strict comparison|60,185,785|30237981|
|(long string) (false) String#startsWith|89,080,914|44540557|
|(long string) (false) String#slice and strict comparison|55,365,572|27683104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:59:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":114299970.38882321,"samples":57150030},{"name":"(short string) (true) String#slice and strict comparison","opsSec":60068350.244411625,"samples":30035966},{"name":"(long string) (true) String#startsWith","opsSec":60630056.6080929,"samples":30315332},{"name":"(long string) (true) String#slice and strict comparison","opsSec":54617744.60533503,"samples":27309042},{"name":"(short string) (false) String#startsWith","opsSec":97885755.71084186,"samples":48943436},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60185785.26421636,"samples":30237981},{"name":"(long string) (false) String#startsWith","opsSec":89080914.63691305,"samples":44540557},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55365572.40322881,"samples":27683104}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|122,079,232|61039643|
|Using this|99,197,628|49599680|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:08:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using super","opsSec":122079232.52929614,"samples":61039643},{"name":"Using this","opsSec":99197628.20780674,"samples":49599680}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,996,025|5498017|
|Date.now()|19,679,418|9841293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:13:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":10996025.577044407,"samples":5498017},{"name":"Date.now()","opsSec":19679418.4008142,"samples":9841293}]}-->

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|414|84|
|Array.from|16|45|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:02:33 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|164,237|54|
|NodeError|129,741|97|
|NodeError Range|129,356|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:28:22 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,953,623|88|
|Using replaceAll()|1,910,818|93|
|Using replaceAll(//g)|1,775,505|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 18:55:35 GMT+0000 (Coordinated Universal Time)
</details>

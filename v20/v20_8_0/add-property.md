## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|769,033,732|80|
|Using dot notation|663,245,107|79|
|Using define property (writable)|2,937,010|83|
|Using define property initialized (writable)|3,754,436|83|
|Using define property (getter)|1,588,469|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":769033732.0840257,"cycles":6,"stats":{"deviation":2.4038055735216086e-10,"mean":1.3003330780953813e-9,"moe":5.267571213745441e-11,"rme":4.050939949525038,"sem":2.6875363335435924e-11,"variance":5.77828123529355e-20}},{"name":"Using dot notation","hz":663245107.0705248,"cycles":8,"stats":{"deviation":1.2844954862176432e-10,"mean":1.5077382242846565e-9,"moe":2.8325338474616187e-11,"rme":1.8786642149405668,"sem":1.4451703303375606e-11,"variance":1.6499286541135e-20}},{"name":"Using define property (writable)","hz":2937010.4986294126,"cycles":7,"stats":{"deviation":3.8768998386509724e-8,"mean":3.404822694595953e-7,"moe":8.340682820136008e-9,"rme":2.4496673008477434,"sem":4.255450418436739e-9,"variance":1.5030352358931934e-15}},{"name":"Using define property initialized (writable)","hz":3754435.5693027554,"cycles":4,"stats":{"deviation":2.5421145532150424e-8,"mean":2.663516210469187e-7,"moe":5.46905312575636e-9,"rme":2.0533207585746096,"sem":2.7903332274267143e-9,"variance":6.462346401667715e-16}},{"name":"Using define property (getter)","hz":1588469.0187195742,"cycles":4,"stats":{"deviation":7.406918164413298e-8,"mean":6.295369870078268e-7,"moe":1.6031962617590167e-8,"rme":2.5466275927312347,"sem":8.179572764076615e-9,"variance":5.486243669431566e-15}}]}-->

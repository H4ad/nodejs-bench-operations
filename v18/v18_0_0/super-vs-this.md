## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,930,136|97|
|Using this|114,391,217|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 10 2023 22:00:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":"[{\"timeStamp\":1696975246620,\"currentTarget\":{\"0\":{\"name\":\"Using super\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":2.99683253036237e-10,\"rme\":0.5972728070746338,\"sem\":1.528996188960393e-10,\"deviation\":1.5058866044559076e-9,\"mean\":5.017527158218494e-8,\"sample\":[4.9969024484169826e-8,4.943287732888678e-8,4.981168209476861e-8,4.9592547756304863e-8,4.92277112185242e-8,4.8546152868676345e-8,4.88286311815472e-8,4.8764511194467806e-8,4.887393286132362e-8,4.8659066592557456e-8,4.9066732239737475e-8,4.9010869997507056e-8,4.9165101546108247e-8,4.9546796959194345e-8,4.940032650733186e-8,4.900912396899441e-8,4.9986985297469906e-8,4.918799294992487e-8,4.950566925757898e-8,4.908895530264009e-8,4.917974781528182e-8,4.967221806732104e-8,4.993082138031314e-8,4.952371155220965e-8,4.9245222914490194e-8,4.9299736834702517e-8,4.960101987465455e-8,4.941507074810532e-8,4.9724501921116374e-8,4.9158408436809776e-8,5.023142540917693e-8,4.9877277475941185e-8,5.0789661765176624e-8,4.998785734171039e-8,4.983294872205263e-8,4.957958349459847e-8,4.9865540284272843e-8,4.9868256328625843e-8,4.990618297796803e-8,4.959878980823757e-8,5.048498463979917e-8,4.9437672117185675e-8,4.884975230645517e-8,4.893181564654951e-8,4.898167349072811e-8,4.9129598966351125e-8,4.876342186667908e-8,4.955184201158005e-8,4.8951602999676986e-8,4.983226874094854e-8,4.93427085364304e-8,5.1063106320526213e-8,4.9716063753321097e-8,5.5961816296460125e-8,5.051175610697723e-8,5.018709665528838e-8,5.0821575286324423e-8,4.959781979239721e-8,5.032832902161292e-8,5.009484911888611e-8,5.072777669459342e-8,4.918750794200469e-8,5.0214160097234386e-8,4.95426258910808e-8,4.9549610005131384e-8,4.958326955479183e-8,4.904656658043226e-8,5.014790801533789e-8,4.980452725793013e-8,5.081003306784e-8,5.3994844365808494e-8,5.09474814023713e-8,5.187849096575747e-8,5.016953936857789e-8,5.0186417644200136e-8,5.020135588814166e-8,5.108367065634181e-8,5.1006943373385285e-8,5.273616830162837e-8,5.0767255369280186e-8,5.0854846829648726e-8,5.0609823738421646e-8,5.041116740436371e-8,5.2190056173617313e-8,5.081255413900909e-8,5.196152335167633e-8,5.056374895602045e-8,5.082380632275725e-8,5.138214065035682e-8,5.0143834918824226e-8,5.0773075464322334e-8,5.1041959975206395e-8,5.046500231348778e-8,5.0503219967582073e-8,5.991564742252241e-8,5.1049623100345227e-8,5.241073186725139e-8],\"variance\":2.2676944654797433e-18},\"times\":{\"cycle\":0.05172623940206186,\"elapsed\":5.553,\"period\":5.017527158218494e-8,\"timeStamp\":1696975241067},\"running\":false,\"count\":1030911,\"cycles\":8,\"hz\":19930136.269657113},\"1\":{\"name\":\"Using this\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":5.03253747461827e-11,\"rme\":0.5756780871317235,\"sem\":2.5676211605195256e-11,\"deviation\":2.541815267770001e-10,\"mean\":8.741929886010672e-9,\"sample\":[8.638985996372728e-9,8.621609291686465e-9,8.634112204336917e-9,8.648078804567312e-9,8.704531610502385e-9,8.639537096532255e-9,8.80453768982602e-9,8.90549097254884e-9,9.022563934937804e-9,8.857545775326453e-9,8.630650434241093e-9,8.979070488628318e-9,9.00588211201207e-9,8.680683749916965e-9,8.674832614504138e-9,8.666864744809612e-9,8.60742512525732e-9,8.614480562011882e-9,8.608577971025866e-9,9.682539936580576e-9,8.61511747531079e-9,8.63943376153319e-9,8.799959145307441e-9,8.625460045521834e-9,8.657033288486103e-9,8.72666111152987e-9,8.72354624238363e-9,8.699229956161229e-9,8.674208091844928e-9,8.68482600960481e-9,8.642784397018124e-9,8.687545066649595e-9,8.673261584645794e-9,8.846521964646064e-9,8.719192481359833e-9,8.655983698048371e-9,8.65200836781201e-9,8.633646300241032e-9,8.620911648199452e-9,8.634644435105573e-9,8.634661816419594e-9,8.673880944538464e-9,8.648514895786116e-9,8.7439906257927e-9,8.674534894966956e-9,8.651595518580968e-9,8.989202073780064e-9,8.673330421533004e-9,8.621341878744512e-9,8.677839065553025e-9,8.676737847449885e-9,8.607299325845945e-9,8.731152718420303e-9,8.668253701101287e-9,8.646346533839009e-9,8.637105353823321e-9,8.661697159686778e-9,8.62932695766084e-9,8.667169520127735e-9,8.6504080822766e-9,8.62862137956694e-9,8.637277446041347e-9,8.671230896473108e-9,8.664932493385636e-9,8.732374573168276e-9,9.166351737907681e-9,8.915444209595932e-9,1.0687371081417173e-8,9.073422972727857e-9,8.660939781835254e-9,8.644987177408835e-9,8.654400449642548e-9,8.611894015974976e-9,8.973989121706714e-9,8.988547951259354e-9,8.617435557487579e-9,8.619758802430906e-9,8.661335766028926e-9,9.009078552869654e-9,8.660612978713226e-9,8.675171808265865e-9,8.668683931646347e-9,8.64085696417625e-9,8.632028633391604e-9,8.698472750401923e-9,8.71069112578943e-9,8.692002083004206e-9,8.630239046416368e-9,8.660974372371076e-9,9.0059979300748e-9,8.647878326671643e-9,8.647379259239373e-9,8.647757690026809e-9,8.997565583483828e-9,8.674173673401324e-9,8.642078818924224e-9,8.684499034390564e-9,8.668305328766695e-9],\"variance\":6.460824855468683e-20},\"times\":{\"cycle\":0.05079793837496648,\"elapsed\":5.372,\"period\":8.741929886010672e-9,\"timeStamp\":1696975246632},\"running\":false,\"count\":5810838,\"cycles\":6,\"hz\":114391217.16135658},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"Using super\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":2.99683253036237e-10,\"rme\":0.5972728070746338,\"sem\":1.528996188960393e-10,\"deviation\":1.5058866044559076e-9,\"mean\":5.017527158218494e-8,\"sample\":[4.9969024484169826e-8,4.943287732888678e-8,4.981168209476861e-8,4.9592547756304863e-8,4.92277112185242e-8,4.8546152868676345e-8,4.88286311815472e-8,4.8764511194467806e-8,4.887393286132362e-8,4.8659066592557456e-8,4.9066732239737475e-8,4.9010869997507056e-8,4.9165101546108247e-8,4.9546796959194345e-8,4.940032650733186e-8,4.900912396899441e-8,4.9986985297469906e-8,4.918799294992487e-8,4.950566925757898e-8,4.908895530264009e-8,4.917974781528182e-8,4.967221806732104e-8,4.993082138031314e-8,4.952371155220965e-8,4.9245222914490194e-8,4.9299736834702517e-8,4.960101987465455e-8,4.941507074810532e-8,4.9724501921116374e-8,4.9158408436809776e-8,5.023142540917693e-8,4.9877277475941185e-8,5.0789661765176624e-8,4.998785734171039e-8,4.983294872205263e-8,4.957958349459847e-8,4.9865540284272843e-8,4.9868256328625843e-8,4.990618297796803e-8,4.959878980823757e-8,5.048498463979917e-8,4.9437672117185675e-8,4.884975230645517e-8,4.893181564654951e-8,4.898167349072811e-8,4.9129598966351125e-8,4.876342186667908e-8,4.955184201158005e-8,4.8951602999676986e-8,4.983226874094854e-8,4.93427085364304e-8,5.1063106320526213e-8,4.9716063753321097e-8,5.5961816296460125e-8,5.051175610697723e-8,5.018709665528838e-8,5.0821575286324423e-8,4.959781979239721e-8,5.032832902161292e-8,5.009484911888611e-8,5.072777669459342e-8,4.918750794200469e-8,5.0214160097234386e-8,4.95426258910808e-8,4.9549610005131384e-8,4.958326955479183e-8,4.904656658043226e-8,5.014790801533789e-8,4.980452725793013e-8,5.081003306784e-8,5.3994844365808494e-8,5.09474814023713e-8,5.187849096575747e-8,5.016953936857789e-8,5.0186417644200136e-8,5.020135588814166e-8,5.108367065634181e-8,5.1006943373385285e-8,5.273616830162837e-8,5.0767255369280186e-8,5.0854846829648726e-8,5.0609823738421646e-8,5.041116740436371e-8,5.2190056173617313e-8,5.081255413900909e-8,5.196152335167633e-8,5.056374895602045e-8,5.082380632275725e-8,5.138214065035682e-8,5.0143834918824226e-8,5.0773075464322334e-8,5.1041959975206395e-8,5.046500231348778e-8,5.0503219967582073e-8,5.991564742252241e-8,5.1049623100345227e-8,5.241073186725139e-8],\"variance\":2.2676944654797433e-18},\"times\":{\"cycle\":0.05172623940206186,\"elapsed\":5.553,\"period\":5.017527158218494e-8,\"timeStamp\":1696975241067},\"running\":false,\"count\":1030911,\"cycles\":8,\"hz\":19930136.269657113},\"aborted\":false},{\"timeStamp\":1696975252004,\"currentTarget\":{\"0\":{\"name\":\"Using super\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":2.99683253036237e-10,\"rme\":0.5972728070746338,\"sem\":1.528996188960393e-10,\"deviation\":1.5058866044559076e-9,\"mean\":5.017527158218494e-8,\"sample\":[4.9969024484169826e-8,4.943287732888678e-8,4.981168209476861e-8,4.9592547756304863e-8,4.92277112185242e-8,4.8546152868676345e-8,4.88286311815472e-8,4.8764511194467806e-8,4.887393286132362e-8,4.8659066592557456e-8,4.9066732239737475e-8,4.9010869997507056e-8,4.9165101546108247e-8,4.9546796959194345e-8,4.940032650733186e-8,4.900912396899441e-8,4.9986985297469906e-8,4.918799294992487e-8,4.950566925757898e-8,4.908895530264009e-8,4.917974781528182e-8,4.967221806732104e-8,4.993082138031314e-8,4.952371155220965e-8,4.9245222914490194e-8,4.9299736834702517e-8,4.960101987465455e-8,4.941507074810532e-8,4.9724501921116374e-8,4.9158408436809776e-8,5.023142540917693e-8,4.9877277475941185e-8,5.0789661765176624e-8,4.998785734171039e-8,4.983294872205263e-8,4.957958349459847e-8,4.9865540284272843e-8,4.9868256328625843e-8,4.990618297796803e-8,4.959878980823757e-8,5.048498463979917e-8,4.9437672117185675e-8,4.884975230645517e-8,4.893181564654951e-8,4.898167349072811e-8,4.9129598966351125e-8,4.876342186667908e-8,4.955184201158005e-8,4.8951602999676986e-8,4.983226874094854e-8,4.93427085364304e-8,5.1063106320526213e-8,4.9716063753321097e-8,5.5961816296460125e-8,5.051175610697723e-8,5.018709665528838e-8,5.0821575286324423e-8,4.959781979239721e-8,5.032832902161292e-8,5.009484911888611e-8,5.072777669459342e-8,4.918750794200469e-8,5.0214160097234386e-8,4.95426258910808e-8,4.9549610005131384e-8,4.958326955479183e-8,4.904656658043226e-8,5.014790801533789e-8,4.980452725793013e-8,5.081003306784e-8,5.3994844365808494e-8,5.09474814023713e-8,5.187849096575747e-8,5.016953936857789e-8,5.0186417644200136e-8,5.020135588814166e-8,5.108367065634181e-8,5.1006943373385285e-8,5.273616830162837e-8,5.0767255369280186e-8,5.0854846829648726e-8,5.0609823738421646e-8,5.041116740436371e-8,5.2190056173617313e-8,5.081255413900909e-8,5.196152335167633e-8,5.056374895602045e-8,5.082380632275725e-8,5.138214065035682e-8,5.0143834918824226e-8,5.0773075464322334e-8,5.1041959975206395e-8,5.046500231348778e-8,5.0503219967582073e-8,5.991564742252241e-8,5.1049623100345227e-8,5.241073186725139e-8],\"variance\":2.2676944654797433e-18},\"times\":{\"cycle\":0.05172623940206186,\"elapsed\":5.553,\"period\":5.017527158218494e-8,\"timeStamp\":1696975241067},\"running\":false,\"count\":1030911,\"cycles\":8,\"hz\":19930136.269657113},\"1\":{\"name\":\"Using this\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":5.03253747461827e-11,\"rme\":0.5756780871317235,\"sem\":2.5676211605195256e-11,\"deviation\":2.541815267770001e-10,\"mean\":8.741929886010672e-9,\"sample\":[8.638985996372728e-9,8.621609291686465e-9,8.634112204336917e-9,8.648078804567312e-9,8.704531610502385e-9,8.639537096532255e-9,8.80453768982602e-9,8.90549097254884e-9,9.022563934937804e-9,8.857545775326453e-9,8.630650434241093e-9,8.979070488628318e-9,9.00588211201207e-9,8.680683749916965e-9,8.674832614504138e-9,8.666864744809612e-9,8.60742512525732e-9,8.614480562011882e-9,8.608577971025866e-9,9.682539936580576e-9,8.61511747531079e-9,8.63943376153319e-9,8.799959145307441e-9,8.625460045521834e-9,8.657033288486103e-9,8.72666111152987e-9,8.72354624238363e-9,8.699229956161229e-9,8.674208091844928e-9,8.68482600960481e-9,8.642784397018124e-9,8.687545066649595e-9,8.673261584645794e-9,8.846521964646064e-9,8.719192481359833e-9,8.655983698048371e-9,8.65200836781201e-9,8.633646300241032e-9,8.620911648199452e-9,8.634644435105573e-9,8.634661816419594e-9,8.673880944538464e-9,8.648514895786116e-9,8.7439906257927e-9,8.674534894966956e-9,8.651595518580968e-9,8.989202073780064e-9,8.673330421533004e-9,8.621341878744512e-9,8.677839065553025e-9,8.676737847449885e-9,8.607299325845945e-9,8.731152718420303e-9,8.668253701101287e-9,8.646346533839009e-9,8.637105353823321e-9,8.661697159686778e-9,8.62932695766084e-9,8.667169520127735e-9,8.6504080822766e-9,8.62862137956694e-9,8.637277446041347e-9,8.671230896473108e-9,8.664932493385636e-9,8.732374573168276e-9,9.166351737907681e-9,8.915444209595932e-9,1.0687371081417173e-8,9.073422972727857e-9,8.660939781835254e-9,8.644987177408835e-9,8.654400449642548e-9,8.611894015974976e-9,8.973989121706714e-9,8.988547951259354e-9,8.617435557487579e-9,8.619758802430906e-9,8.661335766028926e-9,9.009078552869654e-9,8.660612978713226e-9,8.675171808265865e-9,8.668683931646347e-9,8.64085696417625e-9,8.632028633391604e-9,8.698472750401923e-9,8.71069112578943e-9,8.692002083004206e-9,8.630239046416368e-9,8.660974372371076e-9,9.0059979300748e-9,8.647878326671643e-9,8.647379259239373e-9,8.647757690026809e-9,8.997565583483828e-9,8.674173673401324e-9,8.642078818924224e-9,8.684499034390564e-9,8.668305328766695e-9],\"variance\":6.460824855468683e-20},\"times\":{\"cycle\":0.05079793837496648,\"elapsed\":5.372,\"period\":8.741929886010672e-9,\"timeStamp\":1696975246632},\"running\":false,\"count\":5810838,\"cycles\":6,\"hz\":114391217.16135658},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"Using this\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":5.03253747461827e-11,\"rme\":0.5756780871317235,\"sem\":2.5676211605195256e-11,\"deviation\":2.541815267770001e-10,\"mean\":8.741929886010672e-9,\"sample\":[8.638985996372728e-9,8.621609291686465e-9,8.634112204336917e-9,8.648078804567312e-9,8.704531610502385e-9,8.639537096532255e-9,8.80453768982602e-9,8.90549097254884e-9,9.022563934937804e-9,8.857545775326453e-9,8.630650434241093e-9,8.979070488628318e-9,9.00588211201207e-9,8.680683749916965e-9,8.674832614504138e-9,8.666864744809612e-9,8.60742512525732e-9,8.614480562011882e-9,8.608577971025866e-9,9.682539936580576e-9,8.61511747531079e-9,8.63943376153319e-9,8.799959145307441e-9,8.625460045521834e-9,8.657033288486103e-9,8.72666111152987e-9,8.72354624238363e-9,8.699229956161229e-9,8.674208091844928e-9,8.68482600960481e-9,8.642784397018124e-9,8.687545066649595e-9,8.673261584645794e-9,8.846521964646064e-9,8.719192481359833e-9,8.655983698048371e-9,8.65200836781201e-9,8.633646300241032e-9,8.620911648199452e-9,8.634644435105573e-9,8.634661816419594e-9,8.673880944538464e-9,8.648514895786116e-9,8.7439906257927e-9,8.674534894966956e-9,8.651595518580968e-9,8.989202073780064e-9,8.673330421533004e-9,8.621341878744512e-9,8.677839065553025e-9,8.676737847449885e-9,8.607299325845945e-9,8.731152718420303e-9,8.668253701101287e-9,8.646346533839009e-9,8.637105353823321e-9,8.661697159686778e-9,8.62932695766084e-9,8.667169520127735e-9,8.6504080822766e-9,8.62862137956694e-9,8.637277446041347e-9,8.671230896473108e-9,8.664932493385636e-9,8.732374573168276e-9,9.166351737907681e-9,8.915444209595932e-9,1.0687371081417173e-8,9.073422972727857e-9,8.660939781835254e-9,8.644987177408835e-9,8.654400449642548e-9,8.611894015974976e-9,8.973989121706714e-9,8.988547951259354e-9,8.617435557487579e-9,8.619758802430906e-9,8.661335766028926e-9,9.009078552869654e-9,8.660612978713226e-9,8.675171808265865e-9,8.668683931646347e-9,8.64085696417625e-9,8.632028633391604e-9,8.698472750401923e-9,8.71069112578943e-9,8.692002083004206e-9,8.630239046416368e-9,8.660974372371076e-9,9.0059979300748e-9,8.647878326671643e-9,8.647379259239373e-9,8.647757690026809e-9,8.997565583483828e-9,8.674173673401324e-9,8.642078818924224e-9,8.684499034390564e-9,8.668305328766695e-9],\"variance\":6.460824855468683e-20},\"times\":{\"cycle\":0.05079793837496648,\"elapsed\":5.372,\"period\":8.741929886010672e-9,\"timeStamp\":1696975246632},\"running\":false,\"count\":5810838,\"cycles\":6,\"hz\":114391217.16135658},\"aborted\":false}]"}-->

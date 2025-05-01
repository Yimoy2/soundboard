// Data structure for audio categories
const soundCategories = [
    {
        categoryName: "動物怎麽叫？",
        categoryImage: "image/佩佩蛙凝視.png",
        sounds: [
            { id: "racoon_001", name: "&#x1f99d;", filePath: "./sounds/animal/racoon.mp3" },
            { id: "monkey_001", name: "&#x1F435;", filePath: "./sounds/animal/猴子叫.mp3" },
            { id: "pig_001", name: "&#x1F437;【快被殺】", filePath: "./sounds/animal/噗希噗希.mp3" },
            { id: "horse_001", name: "&#x1F434;1", filePath: "./sounds/animal/2023.02.11 馬-1.mp3" },
            { id: "horse_002", name: "&#x1F434;2", filePath: "./sounds/animal/2023.02.11 馬-2.mp3" },
            { id: "donkey_001", name: "&#x1FACF;【氣喘】", filePath: "./sounds/animal/2023.02.11 氣喘驢.mp3" },
            { id: "cat_001", name: "嚇到貓叫", filePath: "./sounds/animal/嚇到貓叫.mp3" },
        ],
    },
    {
        categoryName: "醉翁無罪",
        categoryImage: "image/希翁2.png",
        sounds: [
            { id: "drunkweng_001", name: "啊啊啊~~怎麽辦辦辦辦辦~~", filePath: "./sounds/drunkweng/怎麼辦.mp3" },
            { id: "drunkweng_002", name: "இ௰இ 幫我呼呼 我的手好痛 இ௰இ", filePath: "./sounds/drunkweng/手好痛(哭.mp3" },
            { id: "drunkweng_003", name: "吾吾吾中意哩啊 吾中意哩啊", filePath: "./sounds/drunkweng/吾中意哩啊.mp3" },
            { id: "drunkweng_004", name: "撲街 撲街 撲街... 然後... 冚家鏟 冚家鏟 冚家鏟", filePath: "./sounds/drunkweng/pokai.mp3" },
            { id: "drunkweng_005", name: "生日快樂（直笛+唱）", filePath: "./sounds/drunkweng/生日快樂_直笛&唱.mp3" },
            { id: "drunkweng_006", name: "(咳）靠夭哦 怎樣 嗆到了啦 இ௰இ", filePath: "./sounds/drunkweng/2024.12.29 給到.mp3" },
            { id: "drunkweng_007", name: "我最喜歡你們了", filePath: "./sounds/drunkweng/我最喜歡你們了 - 一顆蕃薯.mp3" },
            { id: "drunkweng_008", name: "嗯啊", filePath: "./sounds/drunkweng/嗯啊.mp3" },
            { id: "drunkweng_009", name: "我愛你們", filePath: "./sounds/drunkweng/我愛你們.wav" },
        ],
    },
    {
        categoryName: "硬了！是我的拳頭！",
        categoryImage: "image/西翁會員貼圖-拿槍.png",
        sounds: [
            { id: "chionchan_001", name: "哇~大家晚安~ ヾ(≧▽≦*)o", filePath: "./sounds/chionchan/2025.01.08 大家晚安.mp3" },
            { id: "chionchan_002", name: "第一次跟大家見面，我的名字...大家可以叫我西翁降哦~ (≧∇≦)ﾉ", filePath: "./sounds/chionchan/2025.01.08 初次見面.mp3" },
            { id: "chionchan_003", name: "等一下！你們還不行啦！蛤~不行~不行~西翁降還沒有說可以哦，你們很討厭！ヾ(｀ε´ )ノ", filePath: "./sounds/chionchan/2025.01.08 等一下.mp3" },
            { id: "chionchan_004", name: "爲什麽要痛扁我 嗯~我會難過 (*╯^╰)", filePath: "./sounds/chionchan/2025.01.08 爲什麽要痛扁我.mp3" },
            { id: "chionchan_005", name: "(*´ v `*) ➊", filePath: "./sounds/chionchan/2025.01.08 少女笑1.mp3" },
            { id: "chionchan_006", name: "(*´ v `*) ➋", filePath: "./sounds/chionchan/2025.01.08 少女笑2.mp3" },
            { id: "chionchan_007", name: "(*´ v `*) ➌", filePath: "./sounds/chionchan/2025.01.08 少女笑3.mp3" },
            { id: "chionchan_008", name: "(*´ v `*) ➍", filePath: "./sounds/chionchan/2025.01.08 少女笑4.mp3" },
            { id: "chionchan_009", name: "(*´ v `*) ➎", filePath: "./sounds/chionchan/2025.01.08 少女笑6.mp3" },
            { id: "chionchan_010", name: "(*´ v `*) ➏", filePath: "./sounds/chionchan/2025.01.08 少女笑7.mp3" },
            { id: "chionchan_011", name: "等一下 怎麽沒反應 人家要生氣了 <(ˋ^ˊ)>", filePath: "./sounds/chionchan/2025.01.08 人家要生氣了.mp3" },
            { id: "chionchan_012", name: "哦~討厭啦~又PON了~ (੭*ˊᵕˋ) 哼！不要説我PON哦，不要説我PON！我會生氣哦！開玩笑的啦~", filePath: "./sounds/chionchan/2025.01.08 PON.mp3" },
            { id: "chionchan_013", name: "蛤~怎麽辦~~ ∠(ˊдˋ) 嗯！人家生氣了！", filePath: "./sounds/chionchan/2025.01.08 蛤怎麽辦.mp3" },
            { id: "chionchan_014", name: "媽的（ˋ0ˊ@+%）➊", filePath: "./sounds/chionchan/2025.01.08 媽的.mp3" },
            { id: "chionchan_015", name: "靠北 （ˋ0ˊ@#）", filePath: "./sounds/chionchan/2025.01.08 靠北.mp3" },
            { id: "chionchan_016", name: "靠北 （ˋ0ˊ@#%）", filePath: "./sounds/chionchan/2025.01.08 靠北2.mp3" },
            { id: "chionchan_017", name: "靠腰 （ˊ0ˋ@#%）", filePath: "./sounds/chionchan/2025.01.08 靠腰.mp3" },
            { id: "chionchan_018", name: "嗯~ o(*￣▽￣*)o 西翁降回來了 ただいま~~嗯呵呵~回來了喲~~", filePath: "./sounds/chionchan/2025.01.08 歐開哩.mp3" },
            { id: "chionchan_019", name: "我今天是西翁降貓貓哦~喵喵~ ฅ(=^･ω･^=)ฅ", filePath: "./sounds/chionchan/2025.01.08 西翁降喵喵.mp3" },
            { id: "chionchan_020", name: "喵喵~ ฅ(^˵◕ω◕˵^)ฅ", filePath: "./sounds/chionchan/2025.01.08 喵喵.mp3" },
            { id: "chionchan_021", name: "算了 人家生氣了(｡•ˇ‸ˇ•｡)", filePath: "./sounds/chionchan/2025.01.08 算了 人家生氣了.mp3" },
            { id: "chionchan_022", name: "誒多 誒多 (●'◡'●)>", filePath: "./sounds/chionchan/2025.01.08 誒多誒多.mp3" },
            { id: "chionchan_023", name: "討厭~嗯嗯~人家生氣了 人家生氣了 我要打你的屁屁哦 哼！( '-' )ノ)`-' )", filePath: "./sounds/chionchan/2025.01.08 討厭打屁屁.mp3" },
            { id: "chionchan_024", name: "我這麽可愛 ( ˶ˇωˇ˶ )", filePath: "./sounds/chionchan/2025.01.08 我這麽可愛.mp3" },
            { id: "chionchan_025", name: "大家晚安~ (◍•͈⌔•͈◍)", filePath: "./sounds/chionchan/2025.01.08 大家晚安2.mp3" },
            { id: "chionchan_026", name: "噢 你真的很討厭 都欺負我 人家生氣了<(ˋεˊ)>", filePath: "./sounds/chionchan/2025.01.08 你都欺負我.mp3" },
            { id: "chionchan_027", name: "你很難受嗎？沒關係 西翁降會幫你呼呼哦~ 呼呼~ ( ´･0･)ﾉ(._.`)", filePath: "./sounds/chionchan/2025.01.08 幫你呼呼.mp3" },
            { id: "chionchan_028", name: "呼呼~痛痛飛走了~痛痛飛成回力鏢回來了~回來了~ _(´ཀ`」∠)", filePath: "./sounds/chionchan/2025.01.08 痛痛飛走.mp3" },
            { id: "chionchan_029", name: "要哭哭了 ( ´•̥̥̥ω•̥̥̥` )", filePath: "./sounds/chionchan/2025.01.08 要哭哭了.mp3" },
            { id: "chionchan_030", name: "我振作起來了！因爲大家的力量 (๑•̀ㅂ•́)و", filePath: "./sounds/chionchan/2025.01.08 振作.mp3" },
            { id: "chionchan_031", name: "SHUT UP！怎麽會 (PД`q。 ) ·。 ' ゜", filePath: "./sounds/chionchan/2025.01.08 怎麽會.mp3" },
            { id: "chionchan_032", name: "爲什麽你們不愛我？爲什麽？...(｡•ˇ‸ˇ•｡) ...", filePath: "./sounds/chionchan/2025.01.08 爲什麽不愛我.mp3" },
            { id: "chionchan_033", name: "討厭 討厭٩(//̀Д/́/)۶", filePath: "./sounds/chionchan/2025.01.08 討厭 討厭.mp3" },
            { id: "chionchan_034", name: "西翁降不會被打倒的！ᕦ(ò_óˇ)ᕤ", filePath: "./sounds/chionchan/2025.01.08 不會被打倒.mp3" },
            { id: "chionchan_035", name: "哼~ o(￣ヘ￣o＃) 討厭！", filePath: "./sounds/chionchan/2025.01.08 哼討厭.mp3" },
            { id: "chionchan_036", name: "沒事的 呆膠布！(•̀ᴗ•́)و ̑̑", filePath: "./sounds/chionchan/2025.01.08 沒事的.mp3" },
            { id: "chionchan_037", name: "你們怎麽可以說不想聽到西翁降的聲音呢？人家那麽可愛 ( っ`-´c)ﾏ", filePath: "./sounds/chionchan/2025.01.08 人家那麽可愛.mp3" },
            { id: "chionchan_038", name: "嗯~ 好過分！(´^｀)", filePath: "./sounds/chionchan/2025.01.08 過分.mp3" },
            { id: "chionchan_039", name: "大大大 大笨蛋 大笨蛋 (´◓ｑ◔｀)", filePath: "./sounds/chionchan/2025.01.08 大笨蛋.mp3" },
            { id: "chionchan_040", name: "把你的大菊花摘下來喲~ (*ºωº)", filePath: "./sounds/chionchan/2025.01.08 把你的大菊花.mp3" },
            { id: "chionchan_041", name: "好棒哦~ d(`･∀･)b", filePath: "./sounds/chionchan/2025.01.08 好棒哦.mp3" },
            { id: "chionchan_042", name: "我想伸一下懶腰~ ٩(๑´0`๑)۶", filePath: "./sounds/chionchan/2025.01.08 伸懶腰.mp3" },
            { id: "chionchan_043", name: "垢面捏 <(_ _)>", filePath: "./sounds/chionchan/2025.01.08 勾麵捏.mp3" },
            { id: "chionchan_044", name: "打噴嚏 (≧□≦)", filePath: "./sounds/chionchan/2025.01.08 噴嚏.mp3" },
            { id: "chionchan_045", name: "好啦！跟你說對不起嘛！垢面捏！<(_ _)>", filePath: "./sounds/chionchan/2025.01.08 對不起.mp3" },
            { id: "chionchan_046", name: "歡迎加入我的骨灰喲~ ヾ(=^▽^=)ノ", filePath: "./sounds/chionchan/2025.01.08 歡迎加入.mp3" },
            { id: "chionchan_047", name: "媽的（ˋ0ˊ@+%）➋", filePath: "./sounds/chionchan/2025.01.08 媽的2.mp3" },
            { id: "chionchan_048", name: "變態歐吉桑真是大變態！ლ(́◕◞౪◟◕‵ლ) ", filePath: "./sounds/chionchan/2025.01.08 變態.mp3" },
            { id: "chionchan_049", name: "ありがとう~ ありがとう~(*ˊᗜˋ*)/ᵗᑋᵃᐢᵏ ᵞᵒᵘ*", filePath: "./sounds/chionchan/2025.01.08 啊哩卡托.mp3" },
            { id: "chionchan_050", name: "わかってるよ~ わかってるよ~ (•̤̀ᵕ•̤́๑)ᵒᵏᵎᵎᵎᵎ", filePath: "./sounds/chionchan/2025.01.08 哇卡跌入.mp3" },
            { id: "chionchan_051", name: "你們太過分！ひどいよ！ひどいよ！٩(*0*)و", filePath: "./sounds/chionchan/2025.01.08 太過分.mp3" },
            { id: "chionchan_052", name: "西翁降也好喜歡你們哦~ (｡･ω･｡)ﾉ♡", filePath: "./sounds/chionchan/2025.01.08 喜歡你們.mp3" },
            { id: "chionchan_053", name: "好き好きだよ (*ෆ´ ˘ `ෆ*)♡", filePath: "./sounds/chionchan/2025.01.08 sukisukidayo.mp3" },
            { id: "chionchan_054", name: "討厭啦！討厭啦！(ノω<。)ノ))☆", filePath: "./sounds/chionchan/2025.01.08 討厭啦.mp3" },
            { id: "chionchan_055", name: "西翁降太笨了 不會 (ಥ_ಥ)", filePath: "./sounds/chionchan/2025.01.08 西翁降太笨了不會.mp3" },
            { id: "chionchan_056", name: "你們會原諒我吧？༼ つ ◕_◕ ༽つ", filePath: "./sounds/chionchan/2025.01.08 原諒.mp3" },
            { id: "chionchan_057", name: "少女打嗝 (๑´ਊ `๑)", filePath: "./sounds/chionchan/2025.01.08 少女打嗝.mp3" },
            { id: "chionchan_058", name: "ε-(=｀ω´=)", filePath: "./sounds/chionchan/2025.01.08 喵.mp3" },
            { id: "chionchan_059", name: "お風呂にする？ご飯にする？我害羞啦~ それとも…わ・た・し `(● ∩ω∩ ●)′", filePath: "./sounds/chionchan/2025.01.08 風呂.mp3" },
            { id: "chionchan_060", name: "這樣子有沒有夠萌え萌え啦？(๑• . •๑)", filePath: "./sounds/chionchan/2025.01.08 莫欸莫欸.mp3" },
            { id: "chionchan_061", name: "討厭 討厭啦 \\ ( > < ) /", filePath: "./sounds/chionchan/2025.01.08 討厭討厭啦.mp3" },
            { id: "chionchan_062", name: "嗯 怒るんだよ <(￣ ﹌ ￣)>", filePath: "./sounds/chionchan/2025.01.08 生氣.mp3" },
            { id: "chionchan_063", name: "だめ だめだよ~ だめよ~ ヾﾉ・´ω・｀)", filePath: "./sounds/chionchan/2025.01.08 打沒.mp3" },
            { id: "chionchan_064", name: "給你暖暖射綫！ (｀っ｡•ω•｡´)っ━☆ﾟ", filePath: "./sounds/chionchan/2025.01.08 給你暖暖射綫.mp3" },
            { id: "chionchan_065", name: "喵喵射綫 (｀っ｡•ω•｡´)っ━☆ﾟ 哦不小心燒死了~ 小心小心~", filePath: "./sounds/chionchan/2025.01.08 喵喵射綫.mp3" },
            { id: "chionchan_067", name: "西翁降又復活了！SHUT UP！_(:Д 」∠ )_", filePath: "./sounds/chionchan/2025.01.08 復活.mp3" },
            { id: "chionchan_068", name: "゜(´Ｏ`) ゜➊", filePath: "./sounds/chionchan/2025.01.08 哭.mp3" },
            { id: "chionchan_069", name: "゜(´Ｏ`) ゜➋", filePath: "./sounds/chionchan/2025.01.08 哭2.mp3" },
            { id: "chionchan_070", name: "゜(´Ｏ`) ゜➌", filePath: "./sounds/chionchan/2025.01.08 哭3.mp3" },
            { id: "chionchan_071", name: "可愛翁會永遠活在這個世界上！(`･ω･′)ゞ", filePath: "./sounds/chionchan/2025.01.08 會永遠活著.mp3" },
            { id: "chionchan_072", name: "媽的 這個台怎麽你們短？我要怎麽<br>水時間？(๑˘ ˘๑)", filePath: "./sounds/chionchan/2025.01.08 媽的台短.mp3" },
            { id: "chionchan_073", name: "他媽的（ˋ0ˊ@+%）", filePath: "./sounds/chionchan/2025.01.08 他媽的.mp3" },
            { id: "chionchan_074", name: "゜(´Ｏ`) ゜救命啊！再十分鐘！再水十分鐘就好了！", filePath: "./sounds/chionchan/2025.01.08 再十分鐘.mp3" },
            { id: "chionchan_075", name: "西翁是吃可愛長大的 ( ´•︵•` )", filePath: "./sounds/chionchan/2025.01.08 西翁是吃可愛長大的.mp3" },
            { id: "chionchan_076", name: "誒多，我們今天開始吧~", filePath: "./sounds/chionchan/2025.02.25 诶多我们今天开始吧.mp3" },
            { id: "chionchan_077", name: "誒嘿嘿~ (°ଳ°)", filePath: "./sounds/chionchan/2025.02.25 欸嘿嘿（呕.mp3" },
            { id: "chionchan_078", name: "什麽？哪有？ (´◔ω◔)", filePath: "./sounds/chionchan/2025.02.25 什么？哪有？.mp3" },
            { id: "chionchan_079", name: "咿呀噠~~~ ٩(●′ω`●)۶", filePath: "./sounds/chionchan/2025.02.25 咿呀达.mp3" },
            { id: "chionchan_080", name: "嗯嗯 呆膠布 我做得到的  (๑•̀ㅂ•́)و✧", filePath: "./sounds/chionchan/2025.02.25 呆膠布.mp3" },
            { id: "chionchan_081", name: "嗯！生氣了！怒るんだよ (｡•ˇ‸ˇ•｡) ", filePath: "./sounds/chionchan/2025.02.25 生氣了.mp3" },
            { id: "chionchan_082", name: "嗯！生氣氣！(｡•ˇε(ˇ•｡)", filePath: "./sounds/chionchan/2025.02.25 生氣氣.mp3" },
            { id: "chionchan_083", name: "謝謝~謝謝各位小天使們~ ᜊ( •ᴗ• )ᜊ", filePath: "./sounds/chionchan/2025.02.25 謝謝小天使.mp3" },
            { id: "chionchan_084", name: "大家再見！(*´ ▽｀)ノシ", filePath: "./sounds/chionchan/2025.01.08 大家再見.mp3" },
        ],
    },
    {
        categoryName: "應該是有一點中二病吧",
        categoryImage: "image/西翁會員貼圖230209_星爆.png",
        sounds: [
            { id: "niumodao", name: "把我的牛魔刀拿過來吧！把我的牛魔刀拿過來吧！", filePath: "./sounds/chunibyo/把我的牛魔刀拿過來吧.mp3" },
        ],
    },
    {
        categoryName: "露骨",
        categoryImage: "image/嘿嘿嘿害羞.png",
        sounds: [
            { id: "gugu_001", name: "久等了董事長", filePath: "./sounds/gugu/久等了董事長.mp3" },
            { id: "gugu_002", name: "我就要討厭死你了，討厭討厭", filePath: "./sounds/gugu/2024.09.26 討厭討厭.mp3" },
        ],
    },
    {
        categoryName: "蛤？？",
        categoryImage: "image/黑人問號.png",
        sounds: [
            { id: "huh_001", name: "打死那個臭婊子", filePath: "./sounds/huh/打死那個臭婊子.mp3" },
            { id: "huh_002", name: "哇呀呀呀呀...", filePath: "./sounds/huh/怪聲_哇呀呀呀.mp3" },
            { id: "huh_003", name: "幹幹幹幹幹幹幹（⚠️耳膜）", filePath: "./sounds/huh/幹.mp3" },
            { id: "huh_004", name: "我用我的嘴巴打電報...嗶.嗶嗶.嗶...嗶...", filePath: "./sounds/huh/嘴巴電報.mp3" },
            { id: "huh_005", name: "你的奶頭是暖的，那世界也是暖的", filePath: "./sounds/huh/你的奶頭是暖的，那世界也是暖的.mp3" },
        ],
    },
    {
        categoryName: "o(*////▽////*)q 電台大姐姐沒有死",
        categoryImage: "image/嘿嘿嘿害羞.png",
        sounds: [
            { id: "radio_001", name: "我也愛你", filePath: "./sounds/radioweng/電臺大姐姐_我也愛你.mp3" },
        ],
    },
    {
        categoryName: "欠駡！",
        categoryImage: "image/ANGRY2.png",
        sounds: [
            { id: "angry_001", name: "小聲一點！", filePath: "./sounds/madao/2022.06.24 小聲一點.mp3" },
            { id: "angry_002", name: "NMSL！", filePath: "./sounds/madao/NMSL.MP3" },
        ],
    },
    {
        categoryName: "讓我們一起笑笑笑笑",
        categoryImage: "image/c c.png",
        sounds: [
            { id: "lol_001", name: "啊哈哈哈哈", filePath: "./sounds/haha/20250323_haha_001.mp3" },
            { id: "lol_002", name: "哼哼哼哼哈哈哈", filePath: "./sounds/haha/20250323_haha_002.mp3" },

        ],
    },
    {
        categoryName: "抠出一套房",
        categoryImage: "image/西翁會員貼圖230209_凱留.png",
        sounds: [
            { id: "ganga_001", name: "呀咧呀咧", filePath: "./sounds/ganga/20250323_呀咧呀咧.mp3" },
        ],
    },
];

// Function to generate soundboard HTML
function generateSoundboard() {
    const mainSoundboardContainer = document.getElementById('main-soundboard-container');
    mainSoundboardContainer.innerHTML = ''; // Clear existing content

    soundCategories.forEach(category => {
        const categoryDiv = document.createElement('section');
        categoryDiv.className = 'sound-category';

        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';

        const categoryImage = document.createElement('img');
        categoryImage.src = category.categoryImage;
        categoryImage.alt = category.categoryName;

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.categoryName;

        categoryHeader.appendChild(categoryImage);
        categoryHeader.appendChild(categoryTitle);
        categoryDiv.appendChild(categoryHeader);

        const soundsDiv = document.createElement('div');
        soundsDiv.className = 'soundboard-container';

        category.sounds.forEach(sound => {
            const button = document.createElement('button');
            button.dataset.sound = sound.id;
            button.innerHTML = sound.name;

            const audioElement = document.createElement('audio');
            audioElement.id = sound.id;
            audioElement.src = sound.filePath;
            audioElement.preload = 'auto';

            soundsDiv.appendChild(button);
            soundsDiv.appendChild(audioElement);
        });

        categoryDiv.appendChild(soundsDiv);
        mainSoundboardContainer.appendChild(categoryDiv);
    });
    initSoundboard();
}

// Function to handle audio playback
function playAudio(button, audioElement) {
    if (window.currentlyPlayingAudio && !window.currentlyPlayingAudio.paused) {
        const playingButton = document.querySelector(`button[data-sound="${window.currentlyPlayingAudio.id}"]`);
        if (playingButton) {
            playingButton.classList.remove("playing");
        }
        window.currentlyPlayingAudio.pause();
        window.currentlyPlayingAudio.currentTime = 0;
    }

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
        window.currentlyPlayingAudio = audioElement;
        button.classList.add("playing");

        audioElement.addEventListener("ended", () => {
            button.classList.remove("playing");
        });
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode-forced');
        localStorage.setItem('theme', "light-mode-forced");
    } else if (body.classList.contains('light-mode-forced')) {
        body.classList.remove('light-mode-forced');
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
        }
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
}

// Initialization of Dark mode
function initDarkMode(){
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
    }
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Initialization of soundboard event listener
function initSoundboard(){
    const soundboardContainers = document.querySelectorAll('.soundboard-container');
    soundboardContainers.forEach(container => {
        const soundboardButtons = container.querySelectorAll('button');

        soundboardButtons.forEach(button => {
            const soundId = button.dataset.sound;
            const audioElement = document.getElementById(soundId);

            if (audioElement) {
                audioElement.addEventListener('canplaythrough', () => {
                    // Audio is ready to play
                });

                audioElement.addEventListener('error', () => {
                    console.error(`Error loading audio: ${soundId}`);
                    button.disabled = true;
                    button.textContent = "Error loading sound";
                });
            }

            button.addEventListener('click', () => playAudio(button, audioElement));
            button.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    button.click();
                }
            });
        });
    });
}

// Initialization
function init() {
    initDarkMode();
    generateSoundboard();
}

init();
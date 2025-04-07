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
        ],
    },
    {
        categoryName: "硬了！是我的拳頭！",
        categoryImage: "image/西翁會員貼圖-拿槍.png",
        sounds: [
            { id: "chionchan_001", name: "嗯~ o(*￣▽￣*)o 西翁降回來了 ただいま~~嗯呵呵~回來了喲~~", filePath: "./sounds/chionchan/2025.01.08 歐開哩.mp3" },
            { id: "chionchan_002", name: "誒多，我們今天開始吧~", filePath: "./sounds/chionchan/2025.02.25 诶多我们今天开始吧.mp3" },
            { id: "chionchan_003", name: "誒嘿嘿~ (°ଳ°)", filePath: "./sounds/chionchan/2025.02.25 欸嘿嘿（呕.mp3" },
            { id: "chionchan_004", name: "什麽？哪有？ (´◔ω◔)", filePath: "./sounds/chionchan/2025.02.25 什么？哪有？.mp3" },
            { id: "chionchan_005", name: "咿呀噠~~~ ٩(●′ω`●)۶", filePath: "./sounds/chionchan/2025.02.25 咿呀达.mp3" },
            { id: "chionchan_006", name: "嗯嗯 呆膠布 我做得到的  (๑•̀ㅂ•́)و✧", filePath: "./sounds/chionchan/2025.02.25 呆膠布.mp3" },
            { id: "chionchan_007", name: "嗯！生氣了！怒るんだよ (｡•ˇ‸ˇ•｡) ", filePath: "./sounds/chionchan/2025.02.25 生氣了.mp3" },
            { id: "chionchan_008", name: "嗯！生氣氣！(｡•ˇε(ˇ•｡)", filePath: "./sounds/chionchan/2025.02.25 生氣氣.mp3" },
            { id: "chionchan_009", name: "謝謝~謝謝各位小天使們~ ᜊ( •ᴗ• )ᜊ", filePath: "./sounds/chionchan/2025.02.25 謝謝小天使.mp3" },
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
// Dictionary data
const dictionary = [
    // Asosiy so'zlar
    { chinese: '你好', pinyin: 'nǐ hǎo', meaning: 'Salom', audio: 'nihao.mp3', image: 'https://cdn.pixabay.com/photo/2016/07/12/13/44/greeting-1512003_1280.jpg' },
    { chinese: '谢谢', pinyin: 'xiè xiè', meaning: 'Rahmat', audio: 'xiexie.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/02/00/37/thank-you-1790727_1280.jpg' },
    { chinese: '再见', pinyin: 'zài jiàn', meaning: 'Xayr', audio: 'zaijian.mp3', image: 'https://cdn.pixabay.com/photo/2016/02/10/16/41/waving-1192056_1280.jpg' },
    { chinese: '请', pinyin: 'qǐng', meaning: 'Iltimos', audio: 'qing.mp3', image: 'https://cdn.pixabay.com/photo/2017/08/02/15/50/please-2572544_1280.jpg' },
    { chinese: '对不起', pinyin: 'duì bù qǐ', meaning: 'Kechirasiz', audio: 'duibuqi.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/02/00/37/sorry-1790727_1280.jpg' },
    { chinese: '没关系', pinyin: 'méi guān xi', meaning: 'Hechqisi yo\'q', audio: 'meiguanxi.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/02/00/37/no-problem-1790727_1280.jpg' },

    // Hayvonlar
    { chinese: '猫', pinyin: 'māo', meaning: 'Mushuk', audio: 'mao.mp3', image: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' },
    { chinese: '狗', pinyin: 'gǒu', meaning: 'It', audio: 'gou.mp3', image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg' },
    { chinese: '鸟', pinyin: 'niǎo', meaning: 'Qush', audio: 'niao.mp3', image: 'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg' },
    { chinese: '鱼', pinyin: 'yú', meaning: 'Baliq', audio: 'yu.mp3', image: 'https://cdn.pixabay.com/photo/2016/12/31/21/22/fish-1943755_1280.jpg' },
    { chinese: '兔子', pinyin: 'tù zi', meaning: 'Quyon', audio: 'tuzi.mp3', image: 'https://cdn.pixabay.com/photo/2017/01/31/17/10/bunny-2025419_1280.jpg' },
    { chinese: '熊猫', pinyin: 'xióng māo', meaning: 'Panda', audio: 'xiongmao.mp3', image: 'https://cdn.pixabay.com/photo/2016/10/07/14/11/panda-1721794_1280.jpg' },

    // Mevalar
    { chinese: '苹果', pinyin: 'píng guǒ', meaning: 'Olma', audio: 'pingguo.mp3', image: 'https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_1280.jpg' },
    { chinese: '香蕉', pinyin: 'xiāng jiāo', meaning: 'Banan', audio: 'xiangjiao.mp3', image: 'https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_1280.jpg' },
    { chinese: '橙子', pinyin: 'chéng zi', meaning: 'Apelsin', audio: 'chengzi.mp3', image: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg' },
    { chinese: '葡萄', pinyin: 'pú tao', meaning: 'Uzum', audio: 'putao.mp3', image: 'https://cdn.pixabay.com/photo/2018/09/22/17/05/grapes-3695498_1280.jpg' },
    { chinese: '西瓜', pinyin: 'xī guā', meaning: 'Tarvuz', audio: 'xigua.mp3', image: 'https://cdn.pixabay.com/photo/2017/03/31/18/02/watermelon-2191675_1280.jpg' },
    { chinese: '草莓', pinyin: 'cǎo méi', meaning: 'Qulupnay', audio: 'caomei.mp3', image: 'https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_1280.jpg' },

    // Ranglar
    { chinese: '红色', pinyin: 'hóng sè', meaning: 'Qizil', audio: 'hongse.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/red-1853635_1280.jpg' },
    { chinese: '蓝色', pinyin: 'lán sè', meaning: 'Ko\'k', audio: 'lanse.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/blue-1853633_1280.jpg' },
    { chinese: '黄色', pinyin: 'huáng sè', meaning: 'Sariq', audio: 'huangse.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/yellow-1853634_1280.jpg' },
    { chinese: '绿色', pinyin: 'lǜ sè', meaning: 'Yashil', audio: 'lvse.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/green-1853632_1280.jpg' },
    { chinese: '白色', pinyin: 'bái sè', meaning: 'Oq', audio: 'baise.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/white-1853636_1280.jpg' },
    { chinese: '黑色', pinyin: 'hēi sè', meaning: 'Qora', audio: 'heise.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/black-1853637_1280.jpg' },

    // Transport
    { chinese: '车', pinyin: 'chē', meaning: 'Mashina', audio: 'che.mp3', image: 'https://cdn.pixabay.com/photo/2016/02/13/13/11/cuba-1197800_1280.jpg' },
    { chinese: '自行车', pinyin: 'zì xíng chē', meaning: 'Velosiped', audio: 'zixingche.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/18/21/10/bicycle-1836962_1280.jpg' },
    { chinese: '公共汽车', pinyin: 'gōng gòng qì chē', meaning: 'Avtobus', audio: 'gonggongqiche.mp3', image: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/bus-1587000_1280.jpg' },
    { chinese: '火车', pinyin: 'huǒ chē', meaning: 'Poyezd', audio: 'huoche.mp3', image: 'https://cdn.pixabay.com/photo/2018/01/17/16/21/train-3088236_1280.jpg' },
    { chinese: '飞机', pinyin: 'fēi jī', meaning: 'Samolyot', audio: 'feiji.mp3', image: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/plane-1587001_1280.jpg' },
    { chinese: '地铁', pinyin: 'dì tiě', meaning: 'Metro', audio: 'ditie.mp3', image: 'https://cdn.pixabay.com/photo/2017/08/07/12/30/train-2603726_1280.jpg' },

    // Oila a'zolari
    { chinese: '爸爸', pinyin: 'bà ba', meaning: 'Dada', audio: 'baba.mp3', image: 'https://cdn.pixabay.com/photo/2017/08/06/15/13/father-2593333_1280.jpg' },
    { chinese: '妈妈', pinyin: 'mā ma', meaning: 'Ona', audio: 'mama.mp3', image: 'https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_1280.jpg' },
    { chinese: '哥哥', pinyin: 'gē ge', meaning: 'Aka', audio: 'gege.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/58/brother-1846639_1280.jpg' },
    { chinese: '妹妹', pinyin: 'mèi mei', meaning: 'Singil', audio: 'meimei.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/58/sister-1846638_1280.jpg' },
    { chinese: '爷爷', pinyin: 'yé ye', meaning: 'Buva', audio: 'yeye.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/58/grandfather-1846640_1280.jpg' },
    { chinese: '奶奶', pinyin: 'nǎi nai', meaning: 'Buvi', audio: 'nainai.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/58/grandmother-1846641_1280.jpg' },

    // Taomlar
    { chinese: '米饭', pinyin: 'mǐ fàn', meaning: 'Guruch', audio: 'mifan.mp3', image: 'https://cdn.pixabay.com/photo/2016/08/11/08/04/rice-1585847_1280.jpg' },
    { chinese: '面条', pinyin: 'miàn tiáo', meaning: 'Lag\'mon', audio: 'miantiao.mp3', image: 'https://cdn.pixabay.com/photo/2018/07/18/19/12/spaghetti-3547078_1280.jpg' },
    { chinese: '水', pinyin: 'shuǐ', meaning: 'Suv', audio: 'shui.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/glass-of-water-1853714_1280.jpg' },
    { chinese: '茶', pinyin: 'chá', meaning: 'Choy', audio: 'cha.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/29/13/04/tea-1869716_1280.jpg' },
    { chinese: '包子', pinyin: 'bāo zi', meaning: 'Bao', audio: 'baozi.mp3', image: 'https://cdn.pixabay.com/photo/2016/08/11/08/04/dumplings-1585848_1280.jpg' },
    { chinese: '饺子', pinyin: 'jiǎo zi', meaning: 'Chuchvara', audio: 'jiaozi.mp3', image: 'https://cdn.pixabay.com/photo/2016/08/11/08/04/dumplings-1585849_1280.jpg' },

    // Raqamlar
    { chinese: '一', pinyin: 'yī', meaning: 'Bir', audio: 'yi.mp3', image: 'https://cdn.pixabay.com/photo/2016/03/31/19/23/one-1294823_1280.png' },
    { chinese: '二', pinyin: 'èr', meaning: 'Ikki', audio: 'er.mp3', image: 'https://cdn.pixabay.com/photo/2016/03/31/19/23/two-1294824_1280.png' },
    { chinese: '三', pinyin: 'sān', meaning: 'Uch', audio: 'san.mp3', image: 'https://cdn.pixabay.com/photo/2016/03/31/19/23/three-1294825_1280.png' },
    { chinese: '四', pinyin: 'sì', meaning: 'To\'rt', audio: 'si.mp3', image: 'https://cdn.pixabay.com/photo/2016/03/31/19/23/four-1294826_1280.png' },
    { chinese: '五', pinyin: 'wǔ', meaning: 'Besh', audio: 'wu.mp3', image: 'https://cdn.pixabay.com/photo/2016/03/31/19/23/five-1294827_1280.png' },
    { chinese: '六', pinyin: 'liù', meaning: 'Olti', audio: 'liu.mp3', image: 'https://cdn.pixabay.com/photo/2016/03/31/19/23/six-1294828_1280.png' },

    // Ob-havo
    { chinese: '晴天', pinyin: 'qíng tiān', meaning: 'Quyoshli kun', audio: 'qingtian.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/sun-1853640_1280.jpg' },
    { chinese: '下雨', pinyin: 'xià yǔ', meaning: 'Yomg\'ir', audio: 'xiayu.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/rain-1853641_1280.jpg' },
    { chinese: '雪', pinyin: 'xuě', meaning: 'Qor', audio: 'xue.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/snow-1853642_1280.jpg' },
    { chinese: '风', pinyin: 'fēng', meaning: 'Shamol', audio: 'feng.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/wind-1853643_1280.jpg' },
    { chinese: '多云', pinyin: 'duō yún', meaning: 'Bulutli', audio: 'duoyun.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/cloudy-1853644_1280.jpg' },
    { chinese: '雷', pinyin: 'léi', meaning: 'Momaqaldiroq', audio: 'lei.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/23/15/14/thunder-1853645_1280.jpg' },

    // Vaqt
    { chinese: '早上', pinyin: 'zǎo shang', meaning: 'Ertalab', audio: 'zaoshang.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/58/morning-1846646_1280.jpg' },
    { chinese: '中午', pinyin: 'zhōng wǔ', meaning: 'Tushlik', audio: 'zhongwu.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/58/noon-1846647_1280.jpg' },
    { chinese: '晚上', pinyin: 'wǎn shang', meaning: 'Kechqurun', audio: 'wanshang.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/58/evening-1846648_1280.jpg' },
    { chinese: '今天', pinyin: 'jīn tiān', meaning: 'Bugun', audio: 'jintian.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/58/today-1846649_1280.jpg' },
    { chinese: '明天', pinyin: 'míng tiān', meaning: 'Ertaga', audio: 'mingtian.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/58/tomorrow-1846650_1280.jpg' },
    { chinese: '昨天', pinyin: 'zuó tiān', meaning: 'Kecha', audio: 'zuotian.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/21/15/58/yesterday-1846651_1280.jpg' },

    // Maktab
    { chinese: '学校', pinyin: 'xué xiào', meaning: 'Maktab', audio: 'xuexiao.mp3', image: 'https://cdn.pixabay.com/photo/2015/09/05/21/51/school-925806_1280.jpg' },
    { chinese: '老师', pinyin: 'lǎo shī', meaning: 'O\'qituvchi', audio: 'laoshi.mp3', image: 'https://cdn.pixabay.com/photo/2018/03/04/09/51/teacher-3197391_1280.jpg' },
    { chinese: '学生', pinyin: 'xué shēng', meaning: 'O\'quvchi', audio: 'xuesheng.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/14/05/15/academic-1822682_1280.jpg' },
    { chinese: '课本', pinyin: 'kè běn', meaning: 'Darslik', audio: 'keben.mp3', image: 'https://cdn.pixabay.com/photo/2015/11/19/21/14/book-1052023_1280.jpg' },
    { chinese: '作业', pinyin: 'zuò yè', meaning: 'Uy vazifasi', audio: 'zuoye.mp3', image: 'https://cdn.pixabay.com/photo/2015/08/24/12/53/homework-904940_1280.jpg' },
    { chinese: '考试', pinyin: 'kǎo shì', meaning: 'Imtihon', audio: 'kaoshi.mp3', image: 'https://cdn.pixabay.com/photo/2015/11/03/09/03/exam-1019764_1280.jpg' },

    // Ish
    { chinese: '公司', pinyin: 'gōng sī', meaning: 'Kompaniya', audio: 'gongsi.mp3', image: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg' },
    { chinese: '工作', pinyin: 'gōng zuò', meaning: 'Ish', audio: 'gongzuo.mp3', image: 'https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg' },
    { chinese: '会议', pinyin: 'huì yì', meaning: 'Majlis', audio: 'huiyi.mp3', image: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/meeting-594091_1280.jpg' },
    { chinese: '老板', pinyin: 'lǎo bǎn', meaning: 'Boss', audio: 'laoban.mp3', image: 'https://cdn.pixabay.com/photo/2015/01/08/18/25/boss-593326_1280.jpg' },
    { chinese: '工资', pinyin: 'gōng zī', meaning: 'Maosh', audio: 'gongzi.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/27/21/42/money-1863127_1280.jpg' },
    { chinese: '同事', pinyin: 'tóng shì', meaning: 'Hamkasb', audio: 'tongshi.mp3', image: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/colleagues-594092_1280.jpg' },

    // Uy
    { chinese: '房子', pinyin: 'fáng zi', meaning: 'Uy', audio: 'fangzi.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg' },
    { chinese: '卧室', pinyin: 'wò shì', meaning: 'Yotoq xona', audio: 'woshi.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/bedroom-1835570_1280.jpg' },
    { chinese: '厨房', pinyin: 'chú fáng', meaning: 'Oshxona', audio: 'chufang.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/kitchen-1835575_1280.jpg' },
    { chinese: '浴室', pinyin: 'yù shì', meaning: 'Hammom', audio: 'yushi.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/bathroom-1835571_1280.jpg' },
    { chinese: '客厅', pinyin: 'kè tīng', meaning: 'Mehmonxona', audio: 'keting.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835572_1280.jpg' },
    { chinese: '花园', pinyin: 'huā yuán', meaning: 'Bog\'', audio: 'huayuan.mp3', image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/garden-1835573_1280.jpg' }
];

// Categories
const categories = [
    { id: 'all', name: 'Barcha so\'zlar' },
    { id: 'basic', name: 'Asosiy so\'zlar', startIndex: 0, endIndex: 5 },
    { id: 'animals', name: 'Hayvonlar', startIndex: 6, endIndex: 11 },
    { id: 'fruits', name: 'Mevalar', startIndex: 12, endIndex: 17 },
    { id: 'colors', name: 'Ranglar', startIndex: 18, endIndex: 23 },
    { id: 'transport', name: 'Transport', startIndex: 24, endIndex: 29 },
    { id: 'family', name: 'Oila a\'zolari', startIndex: 30, endIndex: 35 },
    { id: 'food', name: 'Taomlar', startIndex: 36, endIndex: 41 },
    { id: 'numbers', name: 'Raqamlar', startIndex: 42, endIndex: 47 },
    { id: 'weather', name: 'Ob-havo', startIndex: 48, endIndex: 53 },
    { id: 'time', name: 'Vaqt', startIndex: 54, endIndex: 59 },
    { id: 'school', name: 'Maktab', startIndex: 60, endIndex: 65 },
    { id: 'work', name: 'Ish', startIndex: 66, endIndex: 71 },
    { id: 'home', name: 'Uy', startIndex: 72, endIndex: 77 }
];

let currentCategory = 'all';

// Text to speech function
function speakText(text, lang = 'zh-CN') {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
}

// Video darsliklar ma'lumotlari
const videoLessons = [
    {
        title: "1-dars: Asosiy so'zlar",
        description: "Salom, Rahmat, Xayr kabi asosiy so'zlarni o'rganamiz",
        videoUrl: "https://www.youtube.com/embed/ni_T0uiWcGw",
        thumbnail: "https://img.youtube.com/vi/ni_T0uiWcGw/maxresdefault.jpg",
        words: [
            { chinese: '你好', pinyin: 'nǐ hǎo', meaning: 'Salom' },
            { chinese: '谢谢', pinyin: 'xiè xiè', meaning: 'Rahmat' },
            { chinese: '再见', pinyin: 'zài jiàn', meaning: 'Xayr' }
        ]
    },
    {
        title: "2-dars: Raqamlar",
        description: "Xitoy tilida raqamlarni o'rganamiz",
        videoUrl: "https://www.youtube.com/embed/2eLP3FuuEVs",
        thumbnail: "https://img.youtube.com/vi/2eLP3FuuEVs/maxresdefault.jpg",
        words: [
            { chinese: '一', pinyin: 'yī', meaning: 'Bir' },
            { chinese: '二', pinyin: 'èr', meaning: 'Ikki' },
            { chinese: '三', pinyin: 'sān', meaning: 'Uch' }
        ]
    },
    {
        title: "3-dars: Ranglar",
        description: "Ranglarni xitoy tilida aytishni o'rganamiz",
        videoUrl: "https://www.youtube.com/embed/RyMJRHj3Tg4",
        thumbnail: "https://img.youtube.com/vi/RyMJRHj3Tg4/maxresdefault.jpg",
        words: [
            { chinese: '红色', pinyin: 'hóng sè', meaning: 'Qizil' },
            { chinese: '蓝色', pinyin: 'lán sè', meaning: 'Ko\'k' },
            { chinese: '黄色', pinyin: 'huáng sè', meaning: 'Sariq' }
        ]
    },
    {
        title: "4-dars: Oila a'zolari",
        videoUrl: "videos/lesson4.mp4",
        thumbnail: "images/thumbnails/lesson4.jpg",
        description: "Oila a'zolarining nomlarini o'rganamiz",
        words: [
            { chinese: '爸爸', pinyin: 'bà ba', meaning: 'Dada' },
            { chinese: '妈妈', pinyin: 'mā ma', meaning: 'Ona' },
            { chinese: '哥哥', pinyin: 'gē ge', meaning: 'Aka' }
        ]
    },
    {
        title: "5-dars: Hayvonlar",
        videoUrl: "videos/lesson5.mp4",
        thumbnail: "images/thumbnails/lesson5.jpg",
        description: "Hayvonlarning nomlarini o'rganamiz",
        words: [
            { chinese: '猫', pinyin: 'māo', meaning: 'Mushuk' },
            { chinese: '狗', pinyin: 'gǒu', meaning: 'It' },
            { chinese: '鸟', pinyin: 'niǎo', meaning: 'Qush' }
        ]
    },
    {
        title: "6-dars: Mevalar",
        videoUrl: "videos/lesson6.mp4",
        thumbnail: "images/thumbnails/lesson6.jpg",
        description: "Mevalarning nomlarini o'rganamiz",
        words: [
            { chinese: '苹果', pinyin: 'píng guǒ', meaning: 'Olma' },
            { chinese: '香蕉', pinyin: 'xiāng jiāo', meaning: 'Banan' },
            { chinese: '橙子', pinyin: 'chéng zi', meaning: 'Apelsin' }
        ]
    }
];

// Video darsliklarni ko'rsatish
function displayVideoLessons() {
    const videoList = document.getElementById('videoList');
    if (!videoList) return;

    videoList.innerHTML = videoLessons.map(lesson => `
        <div class="col-12 mb-4">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title mb-4">${lesson.title}</h3>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="video-container mb-3">
                                <iframe 
                                    class="video-player" 
                                    width="100%" 
                                    height="400"
                                    src="${lesson.videoUrl}"
                                    title="${lesson.title}"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                            </div>
                            <p class="card-text">${lesson.description}</p>
                        </div>
                        <div class="col-md-4">
                            <div class="lesson-words">
                                <h4 class="mb-3">Dars so'zlari:</h4>
                                ${lesson.words.map(word => `
                                    <div class="word-item mb-3">
                                        <div class="chinese-char">${word.chinese}</div>
                                        <div class="pinyin">${word.pinyin}</div>
                                        <div class="meaning">${word.meaning}</div>
                                        <button class="btn btn-outline-primary btn-sm mt-2" onclick="speakText('${word.chinese}')">
                                            <i class="fas fa-volume-up"></i> Eshitish
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add video player controls and functionality
    const videoPlayers = document.querySelectorAll('.video-player');
    videoPlayers.forEach(player => {
        player.addEventListener('play', function() {
            // Pause all other videos when one starts playing
            videoPlayers.forEach(p => {
                if (p !== player && !p.paused) {
                    p.pause();
                }
            });
        });
    });
}

// Show selected section and hide others
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    document.getElementById(sectionId).style.display = 'block';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');

    if (sectionId === 'dictionary') {
        displayCategories();
        filterByCategory('all');
    } else if (sectionId === 'videos') {
        displayVideoLessons();
    }
}

// Display categories
function displayCategories() {
    const categoriesContainer = document.getElementById('categories');
    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = categories.map(category => `
        <button class="btn btn-outline-primary me-2 mb-2 ${currentCategory === category.id ? 'active' : ''}"
                onclick="filterByCategory('${category.id}')">
            ${category.name}
        </button>
    `).join('');
}

// Filter by category
function filterByCategory(categoryId) {
    currentCategory = categoryId;
    let filteredWords;
    
    if (categoryId === 'all') {
        filteredWords = dictionary;
    } else {
        const category = categories.find(c => c.id === categoryId);
        filteredWords = dictionary.slice(category.startIndex, category.endIndex + 1);
    }

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        filteredWords = filteredWords.filter(word => 
            word.chinese.includes(searchTerm) ||
            word.pinyin.toLowerCase().includes(searchTerm) ||
            word.meaning.toLowerCase().includes(searchTerm)
        );
    }

    displayDictionary(filteredWords);
    displayCategories();
}

// Display dictionary items
function displayDictionary(words) {
    const dictionaryList = document.getElementById('dictionaryList');
    dictionaryList.innerHTML = '';
    
    words.forEach(word => {
        const item = document.createElement('div');
        item.className = 'dictionary-item';
        item.innerHTML = `
            <div class="row align-items-center">
                <div class="col-md-3">
                    <img src="${word.image}" alt="${word.meaning}" class="img-fluid rounded word-image">
                </div>
                <div class="col-md-7">
                    <div class="chinese-char">${word.chinese}</div>
                    <div class="pinyin">${word.pinyin}</div>
                    <div class="meaning">${word.meaning}</div>
                </div>
                <div class="col-md-2 text-end">
                    <button class="btn btn-outline-primary btn-sm" onclick="speakText('${word.chinese}')">
                        <i class="fas fa-volume-up"></i> Eshitish
                    </button>
                </div>
            </div>
        `;
        dictionaryList.appendChild(item);
    });
}

// Filter dictionary based on search input
function filterDictionary() {
    filterByCategory(currentCategory);
}

// Show home section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
}); 
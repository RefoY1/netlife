'use strict';
/* ═══════════════════════════════════════════════════════════════════
A LITTLE UNIVERSE — script.js (Premium Edition)
تجربة سينمائية تفاعلية صُممت لشخص واحد فقط.
═══════════════════════════════════════════════════════════════════ */

/* ╭──────────────────────────────────────────────────────────────╮
│                        ✦ CONFIG ✦                            │
╰──────────────────────────────────────────────────────────────╯ */
const CONFIG = {
  herName:  "روما",
  herInitial: "ر",
  secretCode: "143",
  secretHint: "تلميح: الرقم الذي لا يعرفه أحدٌ غيركما.",
  firstMeetingDate: "2025-010-16T20:30:00",
  certificateYear: "2026",
  heroImage: "https://images.pexels.com/photos/27700168/pexels-photo-27700168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  lastPhotoImage: "https://images.pexels.com/photos/16702113/pexels-photo-16702113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
  beginningText: "لم يكن ذلك اليوم استثنائيًّا في أجندة العالم… لكن شيئًا ما في الكون رتّب أن نلتقي، ومنذ تلك اللحظة وأنا أعرف أن حكايتي قد وجدت من يليق بها. هذا العدّاد لا يحسب الوقت… إنه يحسب حجم الحظ الذي نلتُه.",
  letterText: [
    "إليكِ أنتِ…",
    "لا أعرف من أين أبدأ، فالكلمات أمامك تبدو أصغر من أن تتّسع لكِ.",
    "صنعتُ لكِ هذا المكان لأن الأشياء الجميلة لا تستحق أن تُقال عبر شاشةٍ عابرة… بل في عالمٍ كامل يشبهك.",
    "خذي وقتك. كل ركنٍ هنا صُمّم وأنا أفكّر فيك.",
  ],
  finalSecret: [
    "لو سألتِني يومًا: لماذا كل هذا؟",
    "سأقول لكِ ببساطة… لأن بعض الناس لا يُقال لهم «أحبك» مرة واحدة، بل يُبنى لهم عالَمٌ كامل.",
    "وهذا العالم… سأظل أضيف إليه كلما أحببتك أكثر.",
  ],
  // ✦ NEW: Voice memory file
  voiceFile: "assets/voice/memory.mp3",
  voiceTranscript: "يمكن إنتِ مش واخدة بالك من ده... بس في تفاصيل صغيرة فيكي بتفضل في دماغي أكتر مما تتخيلي. طريقة كلامك، ضحكتك، والحاجات البسيطة اللي بتعمليها من غير ما تفكري... عشان كده عملتلك المكان ده... عشان أقولك حاجة يمكن مكنتش عارف أقولها بالكلام.",
  // ✦ NEW: Final question
  finalQuestion: "لو قدرتِ تحتفظي بلحظة واحدة من كل اللي عشناه… تختاري إيه؟",
};

/* ╭──────────────────────── ✦ الذكريات ✦ ─────────────────────────╮ */
const MEMORIES = [
  { no: "001", title: "أول حديث",  star: "Our First Conversation", date: "14 / 03 / 2024",
    text: "هناك محادثات كثيرة في الحياة… لكن واحدةً فقط جعلت كل ما قبلها مجرد انتظار.",
    img: "https://images.pexels.com/photos/6800204/pexels-photo-6800204.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" },
  { no: "002", title: "الصورة الأولى", star: "The First Picture", date: "—",
    text: "لم تكن مجرد صورة… كانت أول دليل ملموس بأنك حقًا موجودة خارج خيالي.",
    img: "https://images.pexels.com/photos/32236360/pexels-photo-32236360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" },
  { no: "003", title: "ذلك اليوم", star: "That Day", date: "—",
    text: "ربما كان يومًا عاديًّا للعالم كله… لكنه بالنسبة لي كان اليوم الذي ابتسمتِ فيه.",
    img: "https://images.pexels.com/photos/9676247/pexels-photo-9676247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" },
  { no: "004", title: "سرٌّ صغير", star: "A Secret", date: "—",
    text: "لم أخبركِ حينها… لكنني رجعتُ إلى بيتي تلك الليلة وأنا أبتسم بلا سبب واضح.",
    img: "https://images.pexels.com/photos/7097778/pexels-photo-7097778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { no: "005", title: "شيء لم أخبركِ به", star: "Never Told You", date: "—",
    text: "في أحد الأيام كدتُ أرسل لكِ رسالة طويلة… ثم حذفتها. هذا المكان هو تلك الرسالة.",
    img: "https://images.pexels.com/photos/16960911/pexels-photo-16960911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { no: "006", title: "ذكرى صغيرة", star: "A Little Memory", date: "—",
    text: "لحظة صغيرة جدًّا… ربما لا تتذكرينها أنتِ. أنا أتذكّرها عنكِ.",
    img: "https://images.pexels.com/photos/13628650/pexels-photo-13628650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
];

/* ╭───────────── ✦ الأسباب ✦ ─────────────╮ */
const REASONS = [
  { title: "YOUR SMILE",         text: "لأن ابتسامتك قادرة على تغيير يومٍ كامل." },
  { title: "YOUR VOICE",         text: "صوتك يجعل أصعب الأيام أخفّ على القلب." },
  { title: "YOUR MIND",          text: "أحب طريقة تفكيرك… وكيف ترين العالم." },
  { title: "YOUR KINDNESS",      text: "طيبتك لا تشبه شيئًا رأيتُه من قبل." },
  { title: "YOUR AMBITION",      text: "تجعلينني أؤمن بأن الأحلام عادَة يومية لا أمنية." },
  { title: "YOUR LITTLE HABITS", text: "تفاصيلك الصغيرة… هي أكبر أسبابي." },
  { title: "THE WAY YOU EXIST",  text: "ببساطة… لأنك موجودة. هذا وحده يكفي." },
];

const LOVE_NOTES = [
  "لم يُصدَف شيء بطرفك إلا وازداد جمالًا.",
  "أنتِ الفصل الذي لا يشيخ في كتاب العمر.",
  "لو كان للدنيا بابٌ واحد… لجعلتُ مفتاحه معك.",
  "يمرّ يومٌ كامل… فأكتشف أني لم أفكر إلا فيك.",
  "صوتُك وحده كفيلٌ بأن يهدّئ مدينةً بأكملها داخلي.",
  "أنتِ الدليل على أن الله يُهدي البشرَ معجزاتٍ تسير على قدمين.",
  "كلُّ «صباح الخير» أقولها لك… أقصد بها: صباحي أنتِ.",
  "حين أخطّط للمستقبل، لا أبحث عنك فيه… بل أبنيه حولك.",
  "أحبك بلا مناسبة. هذه هي المناسبة.",
  "بين كل اللغات التي أعرفها… لا أجد جملةً واحدة تساويك.",
  "أنتِ لستِ نصفي. أنتِ الشيء الذي لا يُنصَّف.",
  "الوقت معك لا يُقاس بالساعات… بل بمقدار ما يشبهكِ فيّ.",
  "رسالة عشوائية؟ لا. لقد كنتُ أفكر بكِ هذه اللحظة بالضبط.",
  "لو اجتمع شعراء الأرض… لما كتبوا عن قلبي حرفًا واحدًا كما تفعلين.",
];

const LOVE_BUTTON_MSGS = [
  "مجرد تذكير: أنتِ مميزة.",
  "هناك من يبتسم الآن… بسببك.",
  "العالم أجمل قليلًا لأنكِ فيه.",
  "فكّرتُ فيك. هذا كل ما في الأمر.",
  "أنتِ آخر فكرة ناعمة قبل نومي.",
  "مكانك في قلبي محجوز… بلا تذكرة دخول.",
  "لا تنسي أبدًا مدى أهميتك. لديّ أدلة كثيرة.",
  "كل شيء سيكون على ما يرام… به أؤمن، لأنك موجودة.",
];

const TIMELINE = [
  { year: "2024", cap: "البداية", title: "أول لقاء",
    text: "في ذلك العام بدأ كل شيء. لم أكن أعرف حينها أنني أقف على عتبة أجمل فصول حياتي." },
  { year: "2025", cap: "نقطة التحول", title: "كل شيء صار حقيقيًّا",
    text: "عامٌ تحوّلت فيه الصدفة إلى عادة، والعادة إلى حاجة، والحاجة إلى… أنتِ." },
  { year: "2026", cap: "اليوم", title: "هنا… والآن",
    text: "اليوم الذي تقرئين فيه هذه الكلمات، حيث أصبح لذكرياتنا متحفٌ كامل." },
  { year: "THE FUTURE", cap: "غدًا", title: "", future:true, text: "" },
];

const UNSENT = [
  { no: "LETTER 01", t: "هناك شيء أردتُ أن أخبركِ به منذ زمن…",
    x: "هناك شيء أردتُ أن أخبركِ به منذ زمن… كل مرة أجمع شجاعتي وأبدأ، تبتسمين فأنسى الجملة الأولى. والحقيقة أن الجملة كلها كانت: أنا أفضل حين تكونين." },
  { no: "LETTER 02", t: "أحيانًا أتساءل إن كنتِ تعرفين…",
    x: "أحيانًا أتساءل إن كنتِ تعرفين كم مرة أنقذتِ يومي دون أن تدري. اتصالٌ صغير منكِ كان كافيًا ليستسلم يومٌ بأكمله ويصبح جميلًا." },
  { no: "LETTER 03", t: "لو استطعتُ أن أصف ما تعنينه لي…",
    x: "لو استطعتُ أن أصف ما تعنينه لي… لما احتجتُ أن أبني موقعًا كاملًا لأقوله. تذكّري هذا كلما شعرتِ أنك شخصٌ عادي." },
  { no: "LETTER 04", t: "أشياء كثيرة لم أقلها خوفًا من البلاغة…",
    x: "أشياء كثيرة لم أقلها خوفًا ألا تخرج بجمالها الحقيقي. لذا تركتُها هنا… لتقرأها في عالمٍ صُنع لها خصيصًا." },
];

const QUESTIONS = [
  { q: "هل تتذكرين… ما أول شيء ضحكَنا عليه معًا حتى انتهت رئتانا؟",
    opts:[ "سقوط أحدنا أثناء التصوير", "موقف محرج في مكان عام", "كلمة قلتُها غلطًا", "لا أذكر…"],
    correct:0,
    memTitle: "تلك الضحكة", memText: "ما زلتُ أسمع تلك الضحكة في أذني كلما احتجتُ دليلًا على أن السعادة موجودة فعلًا." },
  { q: "أي جملة سمعناها كثيرًا من بعض وصارت «عادتنا»؟",
    opts:[ "«غدًا أحسن»", "«خمس دقائق وأجيء»", "«معقولة؟!»", "«التقينا!»"],
    correct:1,
    memTitle: "خمس دقائق أسطورية", memText: "خمسُ دقائق تلك لم تنتهِ يومًا… والحمدُ لله على ذلك." },
];

const SECRET_DEFS = [
  { id: "hero-star", msg: "لم يكن من المفترض أن تجدي هذا… أعجبني فضولك." },
  { id: "seal",      msg: "الختم الشمعي كان يخفي شيئًا. أنتِ دقيقة الملاحظة… كعادتك." },
  { id: "universe",  msg: "نجمةٌ واحدة لم تكن تحمل ذكرى… كانت تحملني." },
  { id: "plaque",    msg: "القطعة غير المُدرجة في الدليل: الإدارة تقول إنها «تحت الصيانة»… منذ التقيتك." },
  { id: "mirror",    msg: "مررتِ بيدك على المرآة فوجدتُ… كلمة واحدة تكفي." },
  { id: "future",    msg: "النقطة الخافتة كانت تحرس المستقبل. الآن صارت تعرفك." },
  { id: "cert",      msg: "الختم الذهبي لا يُلمَس… إلا من قِبَل من تستحقه. انتهت الأسرار." },
];

const TRACKS = [
  { name: "THE BEGINNING", file: "", root:110.00, scale:[0,3,5,7,10,12], interval:1800, chance:.8,  bright:520 },
  { name: "YOUR SMILE",    file: "", root:130.81, scale:[0,4,7,9,12,16], interval:1200, chance:.85, bright:880 },
  { name: "THAT DAY",      file: "", root:98.00,  scale:[0,3,7,10,12,15],interval:1500, chance:.82, bright:640 },
  { name: "FOR YOU",       file: "", root:87.31,  scale:[0,5,7,9,12,14], interval:1350, chance:.9,  bright:760 },
];

/* ╭───────────── ✦ NEW: OBSERVATIONS ✦ ─────────────╮ */
const OBSERVATIONS = [
  { title: "طريقتك في الكلام",
    note: "The way you speak",
    desc: "عندما تتكلمين عن الأشياء التي تحبينها، تتغير نبرة صوتك… وتصير عينيكِ أوسع قليلًا. كأن العالم كله يتّسع في تلك اللحظة." },
  { title: "تفاصيلكِ الصغيرة",
    note: "Your tiny details",
    desc: "الأشياء التي تفعلينها دون أن تشعري… لمسة شعرك، طريقة إمساكك للكوب، ضحكتك الخافتة حين لا يريد أحد أن يسمعها. أنا ألاحظها كلها." },
  { title: "ابتسامتك العفوية",
    note: "Your spontaneous smile",
    desc: "ليست تلك التي تضعينها للعالم… بل تلك التي تخرج فجأة، حين لا تتوقعين أن أحدًا ينظر. تلك هي الابتسامة التي أحفظها." },
  { title: "حماسكِ",
    note: "Your excitement",
    desc: "حين تتحمسين لشيء، تتكلمين بسرعة، وتتحرك يداك، وتلمع عينيكِ. أحيانًا لا أفهم ما تقولينه… لكنني أفهم كم يعني لكِ." },
  { title: "تقلّبات مزاجك",
    note: "Your mood shifts",
    desc: "من الهدوء إلى الضحك في ثانية. من التفكير العميق إلى الصمت. كل حالة فيكِ… لها شكل مختلف. وكلها جميلة." },
  { title: "طريقة تفكيرك",
    note: "Your way of thinking",
    desc: "ترين الأشياء من زوايا لا يراها أحد. أحيانًا تقولين جملة واحدة… فأقضي ساعات أفكر فيها." },
  { title: "صمتكِ",
    note: "Your silence",
    desc: "حتى صمتكِ له لغة. أحيانًا يكون تفكيرًا، وأحيانًا تعبًا، وأحيانًا… اكتفاءً بوجودي بجانبك." },
  { title: "عيونكِ",
    note: "Your eyes",
    desc: "فيها شيء لا أعرف كيف أسميه. حين تنظرين إليّ، أشعر أنني الشخص الوحيد في المكان." },
  { title: "أشياء لا تعرفينها عنكِ",
    note: "Things you don't know",
    desc: "ربما لن أخبركِ بها كلها… لأن بعضها أجمل حين يبقى سرًّا بيني وبين قلبي." },
];

/* ╭───────────── ✦ NEW: OPEN WHEN ✦ ─────────────╮ */
const OPEN_WHEN = [
  { icon: "☁", title: "يكون يومك سيئًا",
    text: "أيامٌ كثيرة ستأتي… بعضها ثقيل، وبعضها يُتعب القلب. لكن تذكّري: أنتِ لستِ هذا اليوم. أنتِ أكبر من كل ما يمرّ فيكِ. وغدًا… سيكون أخف." },
  { icon: "✦", title: "تحتاجين أن تبتسمي",
    text: "أغمضي عينيكِ قليلًا. تخيّلي شيئًا يجعلكِ تضحكين حتى الدموع. هل تخيّلتِه؟ الآن ابتسمي… لأن هناك من يبتسم هو أيضًا، لمجرد أنكِ موجودة." },
  { icon: "♡", title: "تشعرين أنكِ لستِ بخير",
    text: "لا بأس ألا تكوني بخير. لا بأس أن يكون اليوم صعبًا. لكن لا تنسي: حتى في أحلك لحظاتك… أنتِ لستِ وحدك." },
  { icon: "✧", title: "تشتاقين",
    text: "الاشتياق دليل على أن هناك شيء جميل حدث. وأنتِ… تستحقين كل هذا الجميل. اشتاقي بقدر ما تشائين… فالقلب الذي تشتاقين إليه، يشتاقكِ أكثر." },
  { icon: "❋", title: "تحتاجين كلمة حلوة",
    text: "أنتِ أجمل شيء حدث لي دون أن أتوقعه. وكلمة «أحبك» التي أقولها… ليست مجرد كلمات. إنها كل ما فيّ." },
  { icon: "✺", title: "تشعرين أنكِ لستِ كافية",
    text: "اسمعي جيدًا: أنتِ أكثر من كافية. أكثر مما تتخيلين. وأكثر مما يطلب العالم منكِ. لا تقارني نفسكِ بأحد… فأنتِ نسخة لا تتكرر." },
  { icon: "❈", title: "كل شيء ضاغط عليكِ",
    text: "خذي نفسًا عميقًا. اشربي ماء. انظري من النافذة. العالم لا ينتظر منكِ أن تكوني قوية طوال الوقت. أحيانًا… يكفي أن تستمري." },
  { icon: "✿", title: "تريدين أن تعرفي ماذا أرى فيكِ",
    text: "أرى كل شيء. التفاصيل التي لا يلاحظها أحد. طريقتك في الكلام، صمتك، ضحكتك، حزنك، فرحك. أراكِ… كاملة. وهذا كافٍ لأحبكِ." },
];

/* ╭───────────── ✦ NEW: IF WE HAD A DAY ✦ ─────────────╮ */
const DAY_PLAN = [
  { time: "09:00", title: "بداية اليوم",
    text: "صباح هادئ. قهوة. موسيقى خافتة. لا نتكلم كثيرًا… لأن الصباح لا يحتاج للكلمات.",
    bg: "linear-gradient(135deg, #2a1810 0%, #4a2818 50%, #6e3a20 100%)" },
  { time: "11:00", title: "أول مكان",
    text: "مكان صغير لم نكن فيه من قبل. نتجوّل بلا خطة. نلتقط صورًا لا ننشرها. نحتفظ بها لنا فقط.",
    bg: "linear-gradient(135deg, #1a2438 0%, #2a3a58 50%, #3a4a78 100%)" },
  { time: "13:00", title: "Lunch",
    text: "غداء بسيط. ضحكات. حديث عن أشياء لا تهم أحدًا سوانا. الوقت يتوقف… ولا نهتم.",
    bg: "linear-gradient(135deg, #3a2818 0%, #5a3820 50%, #7a4828 100%)" },
  { time: "16:00", title: "Walk",
    text: "مشي بلا هدف. أيدينا متشابكة. نتكلم عن أحلام صغيرة… وعن أشياء نريد أن نفعلها معًا يومًا ما.",
    bg: "linear-gradient(135deg, #1a3028 0%, #2a4838 50%, #3a6048 100%)" },
  { time: "19:00", title: "Sunset",
    text: "نجلس في مكان مرتفع. نراقب الشمس وهي ترحل. لا نتكلم… لأن بعض اللحظات أكبر من الكلام.",
    bg: "linear-gradient(135deg, #4a1828 0%, #6e2838 50%, #8e3848 100%)" },
  { time: "22:00", title: "آخر مكان",
    text: "مكان هادئ. موسيقى. حديث عميق عن أشياء لم نقلها من قبل. نكتشف أن بيننا الكثير… الذي لم يُقل.",
    bg: "linear-gradient(135deg, #0a0818 0%, #1a1828 50%, #2a2838 100%)" },
  { time: "00:00", title: "نهاية اليوم",
    text: "يوم انتهى… لكنه لم ينتهِ فعلًا. لأنه سيبقى في مكان ما… في الذاكرة، في القلب، في هذا العالم الصغير.",
    bg: "linear-gradient(135deg, #000000 0%, #0a0818 50%, #1a1028 100%)" },
];

/* ╭───────────── ✦ NEW: YOU CHANGED ✦ ─────────────╮ */
const CHANGED = [
  { before: "كنت أعدي الأيام عادي.",
    after: "بقيت أفتكر تفاصيلها." },
  { before: "كنت أشوف اللحظات مجرد لحظات.",
    after: "بقيت أحب أحتفظ بيها." },
  { before: "كنت بسمع أغاني عشان تملأ السكوت.",
    after: "بقيت بسمع أغاني… لأنها بتذكرني بيكي." },
  { before: "كنت بقول «أحبك» بسهولة.",
    after: "بقيت بقولها… وأنا عارف إن معاها الكلمة دي ليها وزن تاني." },
  { before: "كنت بستنى الحاجات الكبيرة تحصل.",
    after: "بقيت بفرح بالحاجات الصغيرة… لأنها معاك بتبقى كبيرة." },
];

/* ╭───────────── ✦ NEW: TIME GREETINGS ✦ ─────────────╮ */
const TIME_GREETINGS = [
  { from: 5,  to: 11, text: "صباح الخير… أتمنى يومك يبدأ بابتسامة." },
  { from: 11, to: 17, text: "لسه اليوم طويل… خلي فيه حاجة حلوة." },
  { from: 17, to: 21, text: "مساء هادي عليكِ." },
  { from: 21, to: 5,  text: "يمكن الوقت متأخر… بس في حاجة صغيرة مستنياكي هنا." },
];

/* ════════════════════ نهاية منطقة التعديل ════════════════════ */

/* ───────── helpers ───────── */
const $  = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const wait = ms => new Promise(r=>setTimeout(r,ms));
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const lerp=(a,b,t)=>a+(b-a)*t;
const easeIO=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const IS_TOUCH = matchMedia('(hover: none)').matches;
const MOBILE = matchMedia('(max-width: 820px)').matches || (IS_TOUCH && matchMedia('(max-width: 1100px)').matches);
const store = {
  get(k,d){ try{ const v=localStorage.getItem('lv_'+k); return v===null?d:JSON.parse(v);}catch(e){return d;} },
  set(k,v){ try{ localStorage.setItem('lv_'+k, JSON.stringify(v)); }catch(e){} }
};

/* ───────── state ───────── */
const S = {
  visited:  store.get('visited',0),
  unlocked: store.get('unlocked',0),
  last:     store.get('last',0),
  secrets:  new Set(store.get('secrets',[])),
  finalSeen:store.get('final',0),
  muted:    store.get('muted',0),
  theme:    store.get('theme','auto'),
  current:  -1,
  owOpened: new Set(store.get('owOpened',[])),
  finalAnswer: store.get('finalAnswer',''),
};

/* ═══════════════════ AUDIO ENGINE ═══════════════════ */
const AU = { ctx:null, master:null, musicBus:null, sfxBus:null, noiseBuf:null,
  pad:[], padGain:null, delay:null, delayGain:null };
function ensureAudio(){
  if(AU.ctx) { if(AU.ctx.state==='suspended') AU.ctx.resume(); return true; }
  try{
    const Ctx = window.AudioContext||window.webkitAudioContext; if(!Ctx) return false;
    AU.ctx = new Ctx();
    AU.master = AU.ctx.createGain(); AU.master.gain.value = S.muted?0:1;
    const comp = AU.ctx.createDynamicsCompressor();
    AU.master.connect(comp); comp.connect(AU.ctx.destination);
    AU.sfxBus = AU.ctx.createGain();   AU.sfxBus.gain.value=.9;  AU.sfxBus.connect(AU.master);
    AU.musicBus = AU.ctx.createGain(); AU.musicBus.gain.value=.9; AU.musicBus.connect(AU.master);
    AU.delay = AU.ctx.createDelay(1.2); AU.delay.delayTime.value=.42;
    AU.delayGain = AU.ctx.createGain(); AU.delayGain.gain.value=.28;
    const dhp = AU.ctx.createBiquadFilter(); dhp.type='lowpass'; dhp.frequency.value=2200;
    AU.delay.connect(AU.delayGain); AU.delayGain.connect(dhp); dhp.connect(AU.musicBus);
    const len = AU.ctx.sampleRate;
    AU.noiseBuf = AU.ctx.createBuffer(1,len,AU.ctx.sampleRate);
    const d = AU.noiseBuf.getChannelData(0);
    for(let i=0;i<len;i++) d[i]=Math.random()*2-1;
    return true;
  }catch(e){ return false; }
}
function tone(freq,dur,type='sine',gain=.05,bus=null,when=0,slideTo=null){
  if(!AU.ctx||S.muted&&bus===null) return;
  const t=AU.ctx.currentTime+when;
  const o=AU.ctx.createOscillator(), g=AU.ctx.createGain();
  o.type=type; o.frequency.setValueAtTime(freq,t);
  if(slideTo) o.frequency.exponentialRampToValueAtTime(slideTo,t+dur);
  g.gain.setValueAtTime(0,t);
  g.gain.linearRampToValueAtTime(gain,t+.012);
  g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(g); g.connect(bus||AU.sfxBus);
  o.start(t); o.stop(t+dur+.06);
}
function noise(dur=.12,gain=.03,freq=3000,type='bandpass',when=0,q=1.2,slideTo=null){
  if(!AU.ctx) return;
  const t=AU.ctx.currentTime+when;
  const src=AU.ctx.createBufferSource(); src.buffer=AU.noiseBuf; src.loop=true;
  const f=AU.ctx.createBiquadFilter(); f.type=type; f.frequency.setValueAtTime(freq,t); f.Q.value=q;
  if(slideTo) f.frequency.exponentialRampToValueAtTime(slideTo,t+dur);
  const g=AU.ctx.createGain();
  g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(gain,t+.01);
  g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  src.connect(f); f.connect(g); g.connect(AU.sfxBus);
  src.start(t); src.stop(t+dur+.05);
}
const sfx = {
  click(){ if(!AU.ctx)return; tone(1900,.04,'sine',.03); tone(1150,.05,'sine',.02,null,.015); },
  open(){ if(!AU.ctx)return; tone(392,.16,'sine',.045); tone(587.33,.22,'sine',.045,null,.09); },
  chime(){ if(!AU.ctx)return; [659.25,830.61,987.77].forEach((f,i)=>tone(f,1.4,'sine',.035,AU.musicBus,i*.12)); noise(.5,.012,6000,'highpass',0); },
  error(){ if(!AU.ctx)return; tone(185,.16,'sawtooth',.03); tone(130,.2,'sawtooth',.025,null,.06); },
  unlock(){ if(!AU.ctx)return; [523.25,659.25,783.99,1046.5].forEach((f,i)=>tone(f,.5,'sine',.04,null,i*.085)); },
  paper(){ if(!AU.ctx)return; noise(.34,.045,1400,'bandpass',0,.7); noise(.2,.02,2600,'bandpass',.12); },
  whoosh(){ if(!AU.ctx)return; noise(1.4,.05,300,'bandpass',0,1,3200); },
  tick(){ if(!AU.ctx)return; noise(.03,.028,4200,'highpass'); },
  tickSeq(n=3){ for(let i=0;i<n;i++) setTimeout(()=>sfx.tick(), i*330); },
  softBell(){ if(!AU.ctx)return; tone(880,.8,'sine',.04,AU.musicBus); tone(1320,.6,'sine',.02,AU.musicBus,.1); },
};

/* ═══ MUSIC ═══ */
const Music = {
  i:-1, playing:false, timer:null, fileEl:null,
  async play(i){
    if(!ensureAudio()) return;
    this.stop(false);
    this.i=i; const trk=TRACKS[i]; if(!trk) return;
    setStatus('');
    if(trk.file){
      const a=new Audio(); a.src=trk.file; a.loop=true; a.volume=.55; a.preload='auto';
      a.addEventListener('error',()=>setStatus('تعذّر تحميل "'+trk.name+'"'),{once:true});
      try{ await a.play(); this.fileEl=a; this.playing=true; }
      catch(e){ setStatus('اضغطي زر التشغيل للسماح للموسيقى بالبدء.'); }
    } else { this._gen(trk); this.playing=true; }
    this._ui();
  },
  stop(ui=true){
    clearInterval(this.timer); this.timer=null;
    AU.pad.forEach(o=>{try{o.stop()}catch(e){}}); AU.pad=[];
    if(this.fileEl){ try{this.fileEl.pause()}catch(e){} this.fileEl=null; }
    this.playing=false; if(ui) this._ui();
  },
  toggle(i){ (this.playing&&this.i===i) ? this.stop() : this.play(i); },
  _gen(trk){
    const c=AU.ctx, t=c.currentTime;
    const pg=c.createGain(); pg.gain.setValueAtTime(0,t); pg.gain.linearRampToValueAtTime(.05,t+3);
    const lp=c.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=trk.bright;
    [[1,'sine'],[1.5,'sine'],[2.003,'triangle',.35]].forEach(([m,w,v])=>{
      const o=c.createOscillator(); o.type=w; o.frequency.value=trk.root*m;
      const g=c.createGain(); g.gain.value=(v===undefined?.5:v)*.5;
      o.connect(g); g.connect(lp); o.start(); AU.pad.push(o);
    });
    const lfo=c.createOscillator(), lg=c.createGain(); lfo.frequency.value=.07; lg.gain.value=.02;
    lfo.connect(lg); lg.connect(pg.gain); lfo.start(); AU.pad.push(lfo);
    lp.connect(pg); pg.connect(AU.musicBus);
    const pluck=()=>{
      if(!this.playing) return;
      if(Math.random()<trk.chance){
        const deg=trk.scale[Math.floor(Math.random()*trk.scale.length)];
        const oct=[2,2,3,4][Math.floor(Math.random()*4)];
        const f=trk.root*Math.pow(2,deg/12)*oct;
        tone(f,2.6,'triangle',.028,AU.musicBus,0);
        tone(f*2,1.9,'sine',.011,AU.musicBus,.03);
      }
    };
    this.timer=setInterval(pluck,trk.interval);
    setTimeout(pluck,400);
  },
  _ui(){
    const fab=$('#music-fab'); if(fab) fab.classList.toggle('playing',this.playing);
    $$('.mp-track').forEach((el,idx)=>{
      el.classList.toggle('on', this.playing&&idx===this.i);
      el.setAttribute('aria-pressed', this.playing&&idx===this.i?'true':'false');
    });
    setStatus(this.playing?'':'الموسيقى متوقفة.');
  }
};
function setStatus(t){ const el=$('#mp-status'); if(el) el.textContent=t; }

/* ═══════════════════ BACKGROUND FX ═══════════════════ */
const FX={ cv:null,g:null,w:0,h:0,raf:0,stars:[],dust:[],trail:[],heart:null,heartT:0,ptr:{x:.5,y:.5} };
function fxInit(){
  FX.cv=$('#bg'); FX.g=FX.cv.getContext('2d');
  fxResize(); addEventListener('resize',fxResize,{passive:true});
  const sn=REDUCED?60:(MOBILE?42:150), dn=MOBILE?6:22;
  for(let i=0;i<sn;i++) FX.stars.push({x:Math.random(),y:Math.random(),r:Math.random()*1.1+.3,tw:Math.random()*6.28,sp:.4+Math.random()*1.2,gold:Math.random()<.22});
  for(let i=0;i<dn;i++) FX.dust.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.08,vy:.04+Math.random()*.1,r:Math.random()*1.6+.5,a:.05+Math.random()*.12});
  if(REDUCED){ fxDraw(0); return; }
  addEventListener('pointermove',e=>{
    FX.ptr.x=e.clientX/innerWidth; FX.ptr.y=e.clientY/innerHeight;
    if(!IS_TOUCH&&FX.trail.length<34) FX.trail.push({x:e.clientX,y:e.clientY,l:1});
  },{passive:true});
  FX.raf=requestAnimationFrame(fxLoop);
}
let fxLastT=0;
function fxLoop(now){
  if(!MOBILE||now-fxLastT>33){ fxDraw(now/1000); fxLastT=now; }
  FX.raf=requestAnimationFrame(fxLoop);
}
function fxResize(){ if(!FX.cv)return;
  const dpr=Math.min(devicePixelRatio||1, MOBILE?1.3:2);
  FX.w=FX.cv.width=innerWidth*dpr; FX.h=FX.cv.height=innerHeight*dpr;
  FX.cv.style.width=innerWidth+'px'; FX.cv.style.height=innerHeight+'px';
  FX.g.setTransform(dpr,0,0,dpr,0,0);
  if(REDUCED) fxDraw(0);
}
function fxDraw(t){
  const g=FX.g,w=innerWidth,h=innerHeight; if(!g)return;
  const night=!document.body.classList.contains('day');
  g.clearRect(0,0,w,h);
  const gs=g.createRadialGradient(w*.5,h*.86,0,w*.5,h*.86,Math.max(w,h)*.8);
  gs.addColorStop(0, night?'rgba(74,14,22,.14)':'rgba(154,122,60,.08)');
  gs.addColorStop(1,'rgba(0,0,0,0)');
  g.fillStyle=gs; g.fillRect(0,0,w,h);
  for(const s of FX.stars){
    const tw=.32+.68*Math.abs(Math.sin(t*s.sp+s.tw));
    const px=(s.x+(FX.ptr.x-.5)*.012*s.r)*w, py=(s.y+(FX.ptr.y-.5)*.012*s.r)*h;
    g.globalAlpha=tw*(night?.8:.5);
    g.fillStyle=s.gold?'#d3b17e':'#eadfc8';
    g.beginPath(); g.arc(px,py,s.r,0,6.283); g.fill();
  }
  for(const d of FX.dust){
    d.y-=d.vy; d.x+=d.vx;
    if(d.y<-10){d.y=h+10;d.x=Math.random()*w;}
    if(d.x<-10)d.x=w+10; if(d.x>w+10)d.x=-10;
    g.globalAlpha=d.a; g.fillStyle='#d3b17e';
    g.beginPath(); g.arc(d.x,d.y,d.r,0,6.283); g.fill();
  }
  for(let i=FX.trail.length-1;i>=0;i--){
    const p=FX.trail[i]; p.l-=.024;
    if(p.l<=0){FX.trail.splice(i,1);continue;}
    g.globalAlpha=p.l*.16; g.fillStyle='#e9d6ac';
    g.beginPath(); g.arc(p.x,p.y,p.l*7,0,6.283); g.fill();
  }
  FX.heartT-=1/60;
  if(FX.heartT<=0&&!FX.heart&&Math.random()<.4&&!MOBILE){
    FX.heart={x:.15+Math.random()*.7*w,y:h+20,l:0}; FX.heartT=9+Math.random()*8;
  }
  if(FX.heart){
    const hb=FX.heart; hb.y-=.35; hb.l=Math.min(1,hb.l+.004);
    if(hb.y<-30)FX.heart=null; else{
      g.save(); g.translate(hb.x,hb.y); g.scale(.32,.32);
      g.globalAlpha=.20+hb.l*(night?1:1.4); g.fillStyle='#8e2a3a';
      g.beginPath(); g.moveTo(0,8);
      g.bezierCurveTo(-14,-6,-4,-16,0,-7); g.bezierCurveTo(4,-16,14,-6,0,8); g.fill(); g.restore();
    }
  }
  g.globalAlpha=1;
}
function fxBurst(x,y,n=140){
  if(!FX.g||REDUCED) return;
  const parts=[];
  for(let i=0;i<n;i++){const a=Math.random()*6.283,s=1+Math.random()*4.4;
    parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,r:.6+Math.random()*2,gold:Math.random()<.8});}
  let frames=0;
  (function step(){
    const g=FX.g; frames++;
    for(let i=parts.length-1;i>=0;i--){const p=parts[i];
      p.x+=p.vx;p.y+=p.vy;p.vy+=.03;p.vx*=.985;p.l-=.011;
      if(p.l<=0){parts.splice(i,1);continue;}
      g.globalAlpha=p.l*.85; g.fillStyle=p.gold?'#e9d6ac':'#8e2a3a';
      g.beginPath(); g.arc(p.x,p.y,p.r*p.l,0,6.283); g.fill();}
    g.globalAlpha=1;
    if(parts.length&&frames<160) requestAnimationFrame(step);
  })();
}

/* ═══════════════════ DATA → DOM ═══════════════════ */
function bindData(){
  document.title = CONFIG.herName + ' — A Little Universe';
  $$('[data-bind]').forEach(el=>{
    const k=el.dataset.bind; if(CONFIG[k]!==undefined) el.textContent=CONFIG[k];
  });
  const bi=$('#begin-img'); if(bi){bi.src=CONFIG.heroImage; imgFallback(bi);}
  const hint=$('#lock-hint'); if(hint) hint.textContent=CONFIG.secretHint;
}
function imgFallback(img){
  img.addEventListener('error',()=>{
    img.style.display='none';
    const p=img.parentElement;
    if(p){ p.style.background='linear-gradient(150deg,#241a10,#0d0a07 70%), linear-gradient(0deg, rgba(211,177,126,.14), transparent)'; p.style.minHeight='220px'; }
  },{once:true});
}

/* ═══════════════════ THEME ═══════════════════ */
function applyTheme(){
  const mode=(S.theme==='auto')?'night':S.theme;
  document.body.classList.toggle('day',mode==='day');
  FX.heartT=.5;
}
function initTheme(){
  applyTheme();
  $('#btn-theme').addEventListener('click',()=>{
    const nowDay=document.body.classList.contains('day');
    S.theme=nowDay?'night':'day'; store.set('theme',S.theme); applyTheme(); sfx.click();
  });
}

/* ═══════════════════ ROUTER / ROOMS ═══════════════════ */
const ROOMS=[
  {id:'room-hero',         num:'PROL.',  en:'WELCOME',          ar:'الافتتاح'},
  {id:'room-letter',       num:'LETTER', en:'THE LETTER',       ar:'الرسالة'},
  {id:'room-beginning',    num:'01',     en:'THE BEGINNING',    ar:'البداية'},
  {id:'room-universe',     num:'02',     en:'OUR UNIVERSE',     ar:'كوننا'},
  {id:'room-museum',       num:'03',     en:'THE MEMORIES',     ar:'الذكريات'},
  {id:'room-never',        num:'04',     en:'NEVER SAID',       ar:'ما لم يُقل'},
  {id:'room-you',          num:'05',     en:'YOU',              ar:'أنتِ'},
  {id:'room-observations', num:'06',     en:'I NOTICE',         ar:'أنتبه لها'},
  {id:'room-openwhen',     num:'07',     en:'OPEN WHEN',        ar:'افتحي عندما'},
  {id:'room-voice',        num:'08',     en:'LISTEN',           ar:'اسمعي'},
  {id:'room-dayplan',      num:'09',     en:'A DAY',            ar:'يوم'},
  {id:'room-polaroid',     num:'10',     en:'POLAROID',         ar:'اللحظات'},
  {id:'room-changed',      num:'11',     en:'YOU CHANGED',      ar:'غيرتي'},
  {id:'room-lastphoto',    num:'12',     en:'LAST PHOTO',       ar:'الصورة الأخيرة'},
  {id:'room-final',        num:'FINALE', en:'FINAL CHAPTER',    ar:'الفصل الأخير'},
];
let navigating=false;
async function gotoRoom(i,{silent=false}={}){
  if(navigating) return;
  if(i<0||i>=ROOMS.length) return;
  const prev=$('.room.active'), next=$('#'+ROOMS[i].id);
  if(prev===next) return;
  if(i>S.unlocked){ sfx.error(); toast('هذه القاعة ما تزال مغلقة… أكملي القاعة الحالية.'); return; }
  navigating=true;
  const useVeil=!REDUCED&&!!prev&&!silent;
  if(useVeil){
    const v=$('#room-veil'); v.classList.remove('out'); v.classList.add('in');
    await wait(MOBILE?300:420);
  }
  if(prev) prev.classList.remove('active');
  next.classList.add('active'); S.current=i;
  window.scrollTo({top:0,behavior:'auto'});
  document.body.classList.toggle('cinematic', ROOMS[i].id==='room-museum'&&!IS_TOUCH);
  $('#tb-chapter').textContent=next.dataset.tb||ROOMS[i].en;
  $$('#rail button').forEach((b,idx)=>b.classList.toggle('on',idx===i));
  buildMenu();
  if(!silent){ sfx.open(); }
  S.last=i; store.set('last',i);
  if(ROOMS[i].id==='room-universe') UNI.start(); else UNI.stop();
  projectFilmTick(ROOMS[i].id==='room-museum');
  if(ROOMS[i].id==='room-final') refreshFinalRoom();
  if(ROOMS[i].id==='room-lastphoto') initLastPhoto();
  if(ROOMS[i].id==='room-voice') initVoiceRoom();
  revealScan(next);
  if(useVeil){
    await wait(60);
    const v=$('#room-veil'); v.classList.remove('in'); v.classList.add('out');
    setTimeout(()=>v.classList.remove('out'),600);
  }
  navigating=false;
}
function unlockTo(i){
  if(i<=S.unlocked) return;
  S.unlocked=i; store.set('unlocked',i);
  buildRail(); updateProgress();
  unlockFlash(ROOMS[i]);
}
function continueRoom(i){
  sfx.click();
  unlockTo(i);
  setTimeout(()=>gotoRoom(i), i>S.unlocked?0:650);
}
function bindContinue(){
  $$('.goto-next').forEach(b=>b.addEventListener('click',()=>continueRoom(+b.dataset.next)));
}
function updateProgress(){
  $('#progressbar-fill').style.width=((S.unlocked)/(ROOMS.length-1)*100)+'%';
}
function buildRail(){
  const rail=$('#rail'); rail.innerHTML='';
  ROOMS.forEach((r,i)=>{
    const b=document.createElement('button');
    b.setAttribute('aria-label',r.en+(i>S.unlocked?' — مغلق':''));
    if(i>S.unlocked){ b.classList.add('locked'); b.setAttribute('aria-disabled','true'); }
    b.innerHTML='<span class="r-num">'+(r.num)+'</span><i></i>';
    b.addEventListener('click',()=>gotoRoom(i));
    rail.appendChild(b);
  });
  if(S.current>=0) rail.children[S.current].classList.add('on');
}
function buildMenu(){
  const list=$('#menu-list'); list.innerHTML='';
  ROOMS.forEach((r,i)=>{
    const done=i<S.unlocked, locked=i>S.unlocked, cur=i===S.current;
    const b=document.createElement('button');
    b.className='menu-item'+(locked?' locked':'')+(done?' done':'')+(cur?' current':'');
    b.innerHTML=
      '<span class="mi-num">'+(locked?'LOCKED':r.num)+'</span>'+
      '<span><span class="mi-en">'+r.en+'</span><span class="mi-ar">'+r.ar+'</span></span>'+
      '<span class="mi-state">'+(locked?
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg> مغلقة':
        done?'تمت زيارتها':cur?'— الآن':'متاحة')+'</span>';
    b.addEventListener('click',()=>{
      if(locked){ sfx.error(); toast('هذه القاعة مغلقة… بعد قليل.'); return; }
      closeMenu(); gotoRoom(i);
    });
    list.appendChild(b);
  });
}
function openMenu(){ $('#menu').hidden=false; buildMenu(); sfx.open(); $('#menu-close').focus(); }
function closeMenu(){ $('#menu').hidden=true; sfx.click(); }

let rvIO=null;
function initReveal(){
  rvIO=new IntersectionObserver(es=>{
    es.forEach((e,idx)=>{ if(e.isIntersecting){ e.target.classList.add('inview'); rvIO.unobserve(e.target);} });
  },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  $$('.rv').forEach((el,i)=>{ el.style.transitionDelay=(i%4)*70+'ms'; rvIO.observe(el); });
}
function revealScan(room){
  $$('.rv').forEach(el=>{ if(room.contains(el)&&!el.classList.contains('inview')) rvIO&&rvIO.observe(el); });
}
function initSwipe(){
  let x0=0,y0=0;
  const wrap=$('#room-wrap');
  wrap.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY;},{passive:true});
  wrap.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-x0, dy=e.changedTouches[0].clientY-y0;
    if(Math.abs(dx)>72&&Math.abs(dy)<60){
      if(dx<0) gotoRoom(S.current+1); else gotoRoom(S.current-1);
    }
  },{passive:true});
}

/* ═══════════════════ INTRO ═══════════════════ */
async function runIntro(){
  const intro=$('#intro');
  const lines=$$('#intro .intro-line');
  if(S.visited){ const l4=lines[3]; if(l4) l4.textContent='أهلاً بعودتك…'; }
  const delays = S.visited?[0,0,500,1300]:[300,1400,2600,3900];
  introTimers(delays.length?delays:[0]);
  function introTimers(ds){
    ds.forEach((d,i)=>setTimeout(()=>lines[i]&&lines[i].classList.add('show'),d));
    const end=(S.visited?2600:5200);
    window.__introEnd=setTimeout(finishIntro,end);
  }
  function finishIntro(){
    if($('#intro')===null) return;
    clearTimeout(window.__introEnd);
    intro.classList.add('gone');
    $('#lock').hidden=false;
    setTimeout(()=>{ intro.remove(); $('#lock-code').focus({preventScroll:true}); },1400);
  }
  $('#intro-skip').addEventListener('click',()=>{ sfx.click(); clearTimeout(window.__introEnd); finishIntro(); },{once:true});
}

/* ═══════════════════ LOCK ═══════════════════ */
function initLock(){
  $('#lock-form').addEventListener('submit',e=>{
    e.preventDefault();
    const v=$('#lock-code').value.trim().toLowerCase().replace(/[\s-_/.]/g,'');
    const code=String(CONFIG.secretCode).toLowerCase().replace(/[\s-_/.]/g,'');
    if(v===code&&v.length){ lockSuccess(); }
    else lockFail();
  });
}
function lockFail(){
  const lock=$('#lock'), err=$('#lock-error');
  lock.classList.remove('shake','deny'); void lock.offsetWidth;
  lock.classList.add('shake','deny');
  err.textContent='ليس هذا هو السر…'; err.classList.add('show');
  sfx.error();
  setTimeout(()=>{ lock.classList.remove('shake','deny'); },900);
}
function lockSuccess(){
  const lock=$('#lock');
  S.visited=1; store.set('visited',1);
  ensureAudio(); sfx.unlock();
  fxBurst(innerWidth/2,innerHeight/2,120);
  lock.classList.add('gone');
  $('#lock-error').classList.remove('show');
  entrance();
}

/* ═══════════════════ CINEMATIC ENTRANCE ═══════════════════ */
async function entrance(){
  const en=$('#entrance'); en.hidden=false; en.setAttribute('aria-hidden','false');
  await wait(REDUCED?60:450);
  en.classList.add('seam'); sfx.whoosh();
  await wait(REDUCED?200:900);
  en.classList.add('open');
  setTimeout(()=>fxBurst(innerWidth/2,innerHeight/2,110), 400);
  await wait(REDUCED?300:1400);
  const t=$('#ent-title'); t.classList.add('show');
  Music.play(0);
  await wait(REDUCED?800:2600);
  t.classList.add('by');
  await wait(REDUCED?300:900);
  $('#experience').hidden=false; document.body.classList.remove('pre');
  bindContinue(); initReveal(); initSwipe();
  en.classList.add('gone');
  const resume = (S.unlocked>0) ? clamp(S.last,0,S.unlocked) : 0;
  gotoRoom(resume,{silent:true});
  buildRail(); updateProgress(); buildMenu();
  setTimeout(()=>{ en.remove(); },1500);
  if(store.get('visited',0)&&S.unlocked>0&&!sessionStorage.getItem('welcomed')){
    sessionStorage.setItem('welcomed','1');
    setTimeout(()=>toast('أهلاً بعودتك… كنا بانتظارك.'),1800);
  }
}

/* ═══════════════════ THE LETTER ═══════════════════ */
function initLetter(){
  const env=$('#envelope');
  const open=()=>{ if(env.classList.contains('open'))return;
    env.classList.add('open'); sfx.paper();
    fxBurst(env.getBoundingClientRect().x+env.offsetWidth/2, env.getBoundingClientRect().y+env.offsetHeight/2,60);
    setTimeout(async ()=>{
      $('#env-stage').classList.add('gone');
      await wait(900);
      $('#env-stage').hidden=true;
      const card=$('#letter-card'); card.hidden=false;
      sfx.open();
      typeLetter(CONFIG.letterText);
    }, 1500);
  };
  env.addEventListener('click',open);
  env.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
  $('#sec-seal').addEventListener('click',e=>{e.stopPropagation(); foundSecret('seal');});
}
async function typeLetter(lines){
  const target=$('#type-target'), caret=$('#type-caret');
  if(REDUCED){ target.textContent=lines.join('\n'); finishLetter(); return; }
  for(let li=0; li<lines.length; li++){
    const line=lines[li];
    for(let ci=0; ci<line.length; ci++){
      target.textContent+=line[ci];
      await wait(line[ci]===' '?30:42+Math.random()*38);
    }
    if(li<lines.length-1){ target.textContent+='\n'; await wait(420); }
  }
  finishLetter();
  function finishLetter(){
    caret.style.display='none';
    const post=$('#letter-post'); post.hidden=false; sfx.paper();
  }
}

/* ═══════════════════ LOVE COUNTER ═══════════════════ */
function initCounter(){
  const from=new Date(CONFIG.firstMeetingDate);
  const els={y:$('#cnt-y'),mo:$('#cnt-mo'),d:$('#cnt-d'),h:$('#cnt-h'),mi:$('#cnt-mi'),s:$('#cnt-s')};
  const pad=n=>String(n).padStart(2,'0');
  function tick(){
    const to=new Date();
    let y=to.getFullYear()-from.getFullYear(), mo=to.getMonth()-from.getMonth(), d=to.getDate()-from.getDate(),
      h=to.getHours()-from.getHours(), mi=to.getMinutes()-from.getMinutes(), s=to.getSeconds()-from.getSeconds();
    if(s<0){s+=60;mi--;} if(mi<0){mi+=60;h--;} if(h<0){h+=24;d--;}
    if(d<0){mo--; d+=new Date(to.getFullYear(),to.getMonth(),0).getDate();}
    if(mo<0){y--;mo+=12;}
    els.y.textContent=pad(Math.max(0,y)); els.mo.textContent=pad(Math.max(0,mo)); els.d.textContent=pad(Math.max(0,d));
    els.h.textContent=pad(h); els.mi.textContent=pad(mi); els.s.textContent=pad(s);
  }
  tick(); setInterval(tick,1000);
}

/* ═══════════════════ OUR UNIVERSE ═══════════════════ */
const UNI={ cv:null,g:null,raf:0,on:false,w:0,h:0,bgs:[],stars:[],cam:{x:0,y:0,z:1},tgt:null,dim:0,hover:null,tip:null };
function uniInit(){
  UNI.cv=$('#universe-canvas'); UNI.g=UNI.cv.getContext('2d'); UNI.tip=$('#uni-tooltip');
  const stage=UNI.cv.parentElement;
  const ro=new ResizeObserver(()=>{
    const r=stage.getBoundingClientRect();
    const dpr=Math.min(devicePixelRatio||1, MOBILE?1.2:1.75);
    UNI.w=r.width; UNI.h=r.height;
    UNI.cv.width=r.width*dpr; UNI.cv.height=r.height*dpr;
    UNI.g.setTransform(dpr,0,0,dpr,0,0);
  });
  ro.observe(stage);
  const BG_N = MOBILE?70:130;
  for(let i=0;i<BG_N;i++) UNI.bgs.push({x:Math.random(),y:Math.random(),r:Math.random()*1.1+.25,ph:Math.random()*6.28,sp:.5+Math.random()});
  MEMORIES.forEach((m,i)=>{
    const a=i*(Math.PI*2/MEMORIES.length)+.6+.3*Math.sin(i*7);
    const rr=.24+.055*(i%3);
    UNI.stars.push({m,x:.5+Math.cos(a)*rr,y:.5+Math.sin(a)*rr*.82,r:3.4,ph:Math.random()*6.28});
  });
  UNI.stars.push({m:null,you:true,x:.5,y:.5,r:6,ph:0});
  UNI.stars.push({m:null,secret:true,x:.875,y:.16,r:2,ph:1.7});
  UNI.cam={x:UNI.w/2,y:UNI.h/2,z:1};
  UNI.cv.addEventListener('pointermove',e=>{
    const r=UNI.cv.getBoundingClientRect();
    const p={x:e.clientX-r.left,y:e.clientY-r.top};
    const s=uniHit(p);
    UNI.hover=s;
    UNI.cv.style.cursor=s?'pointer':'crosshair';
    if(s&&!s.secret&&!IS_TOUCH){
      UNI.tip.textContent=s.you?'YOU':(s.m?s.m.star:'');
      UNI.tip.style.left=(e.clientX-stage.getBoundingClientRect().left)+'px';
      UNI.tip.style.top=(e.clientY-stage.getBoundingClientRect().top)+'px';
      UNI.tip.classList.add('show');
    } else { UNI.tip.classList.remove('show'); }
  },{passive:true});
  UNI.cv.addEventListener('pointerleave',()=>UNI.tip.classList.remove('show'),{passive:true});
  UNI.cv.addEventListener('pointerdown',e=>{
    const r=UNI.cv.getBoundingClientRect();
    const s=uniHit({x:e.clientX-r.left,y:e.clientY-r.top});
    if(!s) return;
    sfx.click(); UNI.tip.classList.remove('show');
    if(s.secret){ foundSecret('universe'); return; }
    if(s.you){ uniFocus(s,()=>{ openCard(null); }); return; }
    uniFocus(s,()=>openCard(s.m));
  });
  $('#mc-back').addEventListener('click',()=>{ $('#memory-card').hidden=true; UNI.tgt=null; sfx.click(); });
}
function uniWorldToScreen(st){ const z=UNI.cam.z; return { x:(st.x*UNI.w-UNI.cam.x)*z+UNI.w/2, y:(st.y*UNI.h-UNI.cam.y)*z+UNI.h/2 }; }
function uniHit(p){
  let best=null,bd=26;
  for(const s of UNI.stars){ const sp=uniWorldToScreen(s);
    const d=Math.hypot(sp.x-p.x,sp.y-p.y);
    if(d<bd+(s.you?10:0)){bd=d;best=s;} }
  return best;
}
function uniFocus(st,cb){
  UNI.tgt={x:st.x*UNI.w, y:st.y*UNI.h, z:st.you?2.3:2.9};
  setTimeout(cb, REDUCED?50:900);
}
function openCard(mem){
  const card=$('#memory-card');
  if(mem===null){
    $('#mc-num').textContent='THE CENTER';
    const img=$('#mc-img'); img.src=CONFIG.heroImage; img.style.display=''; imgFallback(img);
    $('#mc-title').textContent=CONFIG.herName;
    $('#mc-date').textContent='THE REASON OF ALL THIS';
    $('#mc-text').textContent='في وسط هذا الكون كله… لم أضع نفسي. وضعتُك أنتِ. كل نجمة هنا تدور حولك منذ البداية.';
  } else {
    $('#mc-num').textContent='MEMORY No. '+mem.no;
    const img=$('#mc-img'); img.src=mem.img; img.style.display=''; imgFallback(img);
    $('#mc-title').textContent=mem.title;
    $('#mc-date').textContent=mem.date;
    $('#mc-text').textContent=mem.text;
  }
  card.hidden=false; sfx.open();
}
function uniFrame(t){
  if(UNI.w===0) return;
  const g=UNI.g;
  if(UNI.tgt){
    UNI.cam.x=lerp(UNI.cam.x,UNI.tgt.x,.06);
    UNI.cam.y=lerp(UNI.cam.y,UNI.tgt.y,.06);
    UNI.cam.z=lerp(UNI.cam.z,UNI.tgt.z,.06);
    UNI.dim=lerp(UNI.dim,1,.05);
  } else {
    UNI.cam.x=lerp(UNI.cam.x,UNI.w/2,.03);
    UNI.cam.y=lerp(UNI.cam.y,UNI.h/2,.03);
    UNI.cam.z=lerp(UNI.cam.z,1,.03);
    UNI.dim=lerp(UNI.dim,0,.04);
  }
  g.clearRect(0,0,UNI.w,UNI.h);
  const night=!document.body.classList.contains('day');
  const rg=g.createRadialGradient(UNI.w/2,UNI.h/2,0,UNI.w/2,UNI.h/2,Math.max(UNI.w,UNI.h)*.62);
  rg.addColorStop(0, night?'rgba(74,14,22,.20)':'rgba(154,122,60,.10)');
  rg.addColorStop(.55,'rgba(211,177,126,.04)');
  rg.addColorStop(1,'rgba(0,0,0,0)');
  g.fillStyle=rg; g.fillRect(0,0,UNI.w,UNI.h);
  for(const s of UNI.bgs){
    const p=uniWorldToScreen(s);
    g.globalAlpha=(.28+.5*Math.abs(Math.sin(t*s.sp+s.ph)))*(night?.85:.5)*(1-UNI.dim*.5);
    g.fillStyle='#e8dcc0'; g.beginPath(); g.arc(p.x,p.y,s.r*UNI.cam.z,0,6.283); g.fill();
  }
  g.globalAlpha=(.14)*(1-UNI.dim*.7); g.strokeStyle='#d3b17e'; g.lineWidth=.6;
  const you=UNI.stars.find(s=>s.you), yp=uniWorldToScreen(you);
  for(const s of UNI.stars){ if(s.you||s.secret)continue; const p=uniWorldToScreen(s);
    g.beginPath(); g.moveTo(yp.x,yp.y); g.lineTo(p.x,p.y); g.stroke(); }
  for(const s of UNI.stars){
    const p=uniWorldToScreen(s);
    const isFocus=UNI.dim>.4&&UNI.tgt&&Math.abs(UNI.tgt.x-s.x*UNI.w)<2;
    let a=1;
    if(UNI.dim>.4&&!isFocus&&!s.you) a=.14+(1-UNI.dim)*.8;
    if(s.you) a=1;
    const tw=.75+.25*Math.sin(t*2+s.ph);
    const gr=s.you?26:14;
    const glow=g.createRadialGradient(p.x,p.y,0,p.x,p.y,gr*UNI.cam.z*.6+6);
    const col=s.you?'rgba(233,214,172':(s.secret?'rgba(233,214,172':'rgba(211,177,126');
    glow.addColorStop(0,col+','+(s.you?.5:.34)+')'); glow.addColorStop(1,col+',0)');
    g.globalAlpha=a*tw; g.fillStyle=glow;
    g.beginPath(); g.arc(p.x,p.y,gr*UNI.cam.z*.6+6,0,6.283); g.fill();
    const R=(s.you?s.r*1.8:s.r)*UNI.cam.z*.9+1.5;
    g.globalAlpha=a; g.fillStyle=s.secret?'rgba(211,177,126,.55)':'#f0ddb2';
    g.save(); g.translate(p.x,p.y); g.rotate(s.you?t*.4:t*.25+s.ph);
    g.beginPath();
    for(let k=0;k<4;k++){ const ak=k*Math.PI/2;
      g.lineTo(Math.cos(ak)*R,Math.sin(ak)*R);
      g.quadraticCurveTo(0,0,Math.cos(ak+Math.PI/2)*R,Math.sin(ak+Math.PI/2)*R);
    }
    g.fill(); g.restore();
    if(s.you){
      g.globalAlpha=.92; g.fillStyle='#e9d6ac';
      g.font='600 '+(12*Math.min(UNI.cam.z,1.6))+'px Cinzel, serif'; g.textAlign='center';
      g.fillText('Y O U', p.x, p.y+34*UNI.cam.z*.7+10);
    }
  }
  g.globalAlpha=1;
}
UNI.start=function(){ if(UNI.on)return; UNI.on=true;
  const loop=()=>{ if(!UNI.on)return; if(!document.hidden) uniFrame(performance.now()/1000); UNI.raf=requestAnimationFrame(loop); };
  UNI.raf=requestAnimationFrame(loop);
};
UNI.stop=function(){ UNI.on=false; cancelAnimationFrame(UNI.raf); };

/* ═══════════════════ MEMORY MUSEUM ═══════════════════ */
function initMuseum(){
  const grid=$('#museum-grid');
  MEMORIES.forEach((m,i)=>{
    const b=document.createElement('button');
    b.className='exhibit rv'; b.style.transitionDelay=(i%3)*90+'ms';
    b.setAttribute('aria-label', m.title+' — عرض مكبر');
    b.innerHTML=
      '<span class="ex-img"><img src="'+m.img+'" alt="'+m.title+'" loading="lazy" decoding="async"><i class="ex-spot"></i></span>'+
      '<span class="ex-cap"><span class="ex-num">MEMORY No. '+m.no+'</span><span class="ex-title">'+m.title+'</span></span>'+
      '<span class="ex-date">'+m.date+'</span>';
    imgFallback(b.querySelector('img'));
    b.addEventListener('click',()=>openLightbox(m));
    grid.appendChild(b);
  });
  $('#sec-plaque').addEventListener('click',()=>foundSecret('plaque'));
  $('#lb-close').addEventListener('click',closeLightbox);
  $('#lightbox').addEventListener('click',e=>{ if(e.target.id==='lightbox') closeLightbox(); });
}
function openLightbox(m){
  $('#lb-img').src=m.img; imgFallback($('#lb-img'));
  $('#lb-num').textContent='MEMORY No. '+m.no;
  $('#lb-title').textContent=m.title;
  $('#lb-date').textContent=m.date;
  $('#lb-text').textContent=m.text;
  $('#lightbox').hidden=false; sfx.open(); $('#lb-close').focus();
}
function closeLightbox(){ $('#lightbox').hidden=true; sfx.click(); }

/* ═══════════════════ MEMORY FILM ═══════════════════ */
const FILM={i:0};
function renderFilm(){
  const m=MEMORIES[FILM.i], fr=$('.film-frame');
  fr.classList.add('swap');
  setTimeout(()=>{
    const img=$('#film-img'); img.src=m.img; img.style.display=''; imgFallback(img);
    $('#film-num').textContent='MEMORY #'+m.no;
    $('#film-title').textContent=m.title;
    $('#film-date').textContent=m.date;
    $('#film-text').textContent=m.text;
    fr.classList.remove('swap');
  },300);
  sfx.tickSeq(2);
}
function initFilm(){
  renderFilm();
  $('#film-next').addEventListener('click',()=>{ FILM.i=(FILM.i+1)%MEMORIES.length; renderFilm(); });
  $('#film-prev').addEventListener('click',()=>{ FILM.i=(FILM.i-1+MEMORIES.length)%MEMORIES.length; renderFilm(); });
}
let projTimer=null;
function projectFilmTick(on){
  clearInterval(projTimer);
  if(!on||S.muted) return;
  projTimer=setInterval(()=>{ if(!document.hidden) sfx.tick(); },640);
}

/* ═══════════════════ TIME MACHINE ═══════════════════ */
function initTimeline(){
  const wrap=$('#tm-nodes');
  TIMELINE.forEach((t,i)=>{
    const b=document.createElement('button');
    b.className='tm-node'+(t.future?' future':'')+(i===0?' on':'');
    b.setAttribute('role','tab'); b.setAttribute('aria-selected',i===0?'true':'false');
    b.innerHTML='<span class="tn-dot"></span><span><span class="tn-year">'+t.year+'</span><br><span class="tn-cap">'+t.cap+'</span></span>';
    b.addEventListener('click',()=>selectYear(i));
    wrap.appendChild(b);
  });
  selectYear(0,true);
  $('#sec-future').addEventListener('click',()=>foundSecret('future'));
}
async function selectYear(i,instant=false){
  const t=TIMELINE[i], panel=$('#tm-panel');
  $$('.tm-node').forEach((n,idx)=>{ n.classList.toggle('on',idx===i); n.setAttribute('aria-selected',idx===i?'true':'false'); });
  sfx.click();
  panel.classList.add('fade');
  $('.tmf-1').hidden=true; $('.tmf-2').hidden=true;
  await wait(instant?0:320);
  $('#tm-year').textContent=t.year;
  $('#tm-title').textContent=t.title;
  $('#tm-text').textContent=t.text;
  panel.classList.remove('fade');
  if(t.future){
    await wait(700); $('.tmf-1').hidden=false;
    await wait(1600); $('.tmf-2').hidden=false; sfx.chime();
  }
}

/* ═══════════════════ THE MIRROR ═══════════════════ */
function initMirror(){
  const stage=$('#mirror-stage'), words=$$('.mw'), hint=$('#mirror-hint');
  let litCount=0;
  const upd=(cx,cy)=>{
    const r=stage.getBoundingClientRect();
    const x=((cx-r.left)/r.width*100).toFixed(2)+'%', y=((cy-r.top)/r.height*100).toFixed(2)+'%';
    stage.style.setProperty('--mx',x); stage.style.setProperty('--my',y);
    words.forEach(w=>{
      if(w.classList.contains('lit'))return;
      const wr=w.getBoundingClientRect();
      const d=Math.hypot(cx-(wr.left+wr.width/2), cy-(wr.top+wr.height/2));
      if(d<110){ w.classList.add('lit'); litCount++; toneSafe(700+litCount*120); checkDone(); }
    });
  };
  function toneSafe(f){ if(AU.ctx) tone(f,.4,'sine',.02); }
  function checkDone(){
    if(litCount>=words.length){
      setTimeout(()=>{
        stage.classList.add('revealed'); hint.style.opacity=0;
        $('#mirror-finale').hidden=false; sfx.chime();
      },600);
    }
  }
  stage.addEventListener('pointermove',e=>{ hint.style.opacity=0; upd(e.clientX,e.clientY); },{passive:true});
  stage.addEventListener('pointerdown',e=>{ hint.style.opacity=0; upd(e.clientX,e.clientY); },{passive:true});
  $('#sec-youword').addEventListener('click',()=>foundSecret('mirror'));
}

/* ═══════════════════ MEMORY QUESTIONS ═══════════════════ */
function initQuiz(){
  const box=$('#quiz');
  let i=0;
  render();
  function render(){
    box.innerHTML='';
    if(i>=QUESTIONS.length){
      const d=document.createElement('p'); d.className='q-done';
      d.textContent='انتهت الأسئلة… لكن الذكريات لا تنتهي أبدًا.';
      box.appendChild(d); return;
    }
    const q=QUESTIONS[i];
    const card=document.createElement('div'); card.className='q-card';
    card.innerHTML='<span class="q-kicker">DO YOU REMEMBER? · '+(i+1)+'/'+QUESTIONS.length+'</span><h4 class="q-q">'+q.q+'</h4>';
    const opts=document.createElement('div'); opts.className='q-opts';
    q.opts.forEach((o,oi)=>{
      const b=document.createElement('button'); b.className='q-opt'; b.textContent=o;
      b.addEventListener('click',()=>answer(oi,b)); opts.appendChild(b);
    });
    const msg=document.createElement('p'); msg.className='q-msg';
    card.appendChild(opts); card.appendChild(msg); box.appendChild(card);
  }
  function answer(oi,btn){
    const q=QUESTIONS[i]; const card=btn.closest('.q-card');
    card.querySelectorAll('.q-opt').forEach(b=>b.disabled=true);
    const msg=card.querySelector('.q-msg');
    if(oi===q.correct){ btn.classList.add('right'); msg.textContent='عرفتُ أنكِ ستتذكرين.'; sfx.chime(); }
    else { btn.classList.add('off'); card.querySelectorAll('.q-opt')[q.correct].classList.add('right');
      msg.textContent='همم… يبدو أن عليّ أن أذكّركِ؛ بكل سرور.'; sfx.error(); }
    const mem=document.createElement('div'); mem.className='q-memory';
    mem.innerHTML='<b>'+q.memTitle+'</b><p>'+q.memText+'</p>';
    card.appendChild(mem);
    const next=document.createElement('button'); next.className='btn-ghost q-next';
    next.textContent = i<QUESTIONS.length-1?'سؤال آخر':'إلى الرسائل المؤجلة';
    next.addEventListener('click',()=>{ i++; sfx.click(); render(); });
    card.appendChild(next);
  }
}

/* ═══════════════════ UNSENT LETTERS ═══════════════════ */
function initUnsent(){
  const list=$('#unsent-list');
  UNSENT.forEach((u,i)=>{
    const b=document.createElement('button'); b.className='unsent';
    b.style.transitionDelay=i*60+'ms';
    b.innerHTML='<span class="u-no">'+u.no+'</span><span class="u-t">«'+u.t+'»</span>'+
      '<span class="u-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></svg></span>';
    b.addEventListener('click',()=>{
      $('#um-no').textContent=u.no; $('#um-text').textContent=u.x;
      $('#um').hidden=false; sfx.paper(); $('#um-close').focus();
    });
    list.appendChild(b);
  });
  $('#um-close').addEventListener('click',()=>{ $('#um').hidden=true; sfx.click(); });
  $('#um').addEventListener('click',e=>{ if(e.target.id==='um'){ $('#um').hidden=true; } });
}

/* ═══════════════════ REASONS ═══════════════════ */
function initReasons(){
  const grid=$('#reasons-grid');
  REASONS.forEach((r,i)=>{
    const a=document.createElement('article'); a.className='flip';
    a.innerHTML='<div class="flip-inner">'+
      '<div class="flip-face flip-front"><span class="flip-num">REASON '+String(i+1).padStart(2,'0')+'</span>'+
      '<span class="flip-title">'+r.title+'</span><span class="flip-star">✦</span></div>'+
      '<div class="flip-face flip-back"><p class="flip-txt">'+r.text+'</p></div></div>';
    a.addEventListener('click',()=>{ a.classList.toggle('on'); sfx.paper(); });
    grid.appendChild(a);
  });
}

/* ═══════════════════ LOVE NOTES ═══════════════════ */
let noteBag=[];
function drawFrom(pool,bag){
  if(!bag.arr||!bag.arr.length) bag.arr=pool.map((_,i)=>i).sort(()=>Math.random()-.5);
  return bag.arr.pop();
}
const notesBag={}, loveBag={};
function initNotes(){
  $('#btn-note').addEventListener('click',()=>{
    const i=drawFrom(LOVE_NOTES,notesBag);
    $('#note-text').textContent=LOVE_NOTES[i];
    $('#note-modal').hidden=false; sfx.paper(); $('#note-close').focus();
  });
  $('#note-close').addEventListener('click',()=>{ $('#note-modal').hidden=true; sfx.click(); });
  $('#note-modal').addEventListener('click',e=>{ if(e.target.id==='note-modal') $('#note-modal').hidden=true; });
  $('#love-fab').addEventListener('click',()=>{
    const i=drawFrom(LOVE_BUTTON_MSGS,loveBag);
    toast(LOVE_BUTTON_MSGS[i]);
    if(AU.ctx) tone(880,.5,'sine',.03);
  });
}

/* ═══════════════════ TOASTS ═══════════════════ */
let toastTimer=null;
function toast(txt,dur=3600){
  $('#toast-text').textContent=txt;
  const t=$('#toast'); t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),dur);
}
let stTimer=null;
function secretToast(n,msg){
  $('#st-no').textContent=String(n).padStart(2,'0')+' / 07';
  $('#st-msg').textContent=msg;
  const t=$('#secret-toast'); t.classList.add('show');
  clearTimeout(stTimer);
  stTimer=setTimeout(()=>t.classList.remove('show'),5200);
}
function unlockFlash(room){
  $('#uf-sub').textContent=room.en+' — '+room.ar;
  const u=$('#unlock-flash');
  u.classList.remove('show'); void u.offsetWidth; u.classList.add('show');
  sfx.chime();
}

/* ═══════════════════ SECRETS ═══════════════════ */
function foundSecret(id){
  const def=SECRET_DEFS.find(s=>s.id===id);
  if(!def||S.secrets.has(id)) return;
  S.secrets.add(id); store.set('secrets',[...S.secrets]);
  const n=S.secrets.size;
  sfx.chime();
  secretToast(n,def.msg);
  if(n>=SECRET_DEFS.length){
    setTimeout(()=>{ toast('وجدتِ كل الأسرار… شيء أخير بانتظارك في الفصل الأخير.',6000);
      unlockFlash(ROOMS[14]); },5400);
  }
  refreshFinalRoom();
}
function initSecrets(){
  $('#sec-star-hero').addEventListener('click',()=>foundSecret('hero-star'));
  $('#sec-7').addEventListener('click',()=>foundSecret('cert'));
  // ✦ NEW: Hidden audio secret
  $('#voice-orb').addEventListener('dblclick',()=>foundSecret('voice'));
}

/* ═══════════════════ FINALE ═══════════════════ */
const FS_SCRIPT=[
  {t:'قبل ما تمشي…',                              cls:'',        hold:2200},
  {t:'في حاجة أخيرة.',                             cls:'',        hold:2000},
  {t:'كل اللي شوفتيه هنا…',                        cls:'',        hold:2400},
  {t:'مش كان مجرد موقع.',                          cls:'',        hold:2400},
  {t:'@RECAP@',                                    cls:'fs-recap',hold:4200},
  {t:'كان طريقة صغيرة…',                           cls:'',        hold:2200},
  {t:'أقولك بيها…',                                cls:'',        hold:2200},
  {t:'إن وجودك له معنى.',                          cls:'',        hold:3200},
  {t:'متقفليش الصفحة لسه.',                        cls:'',        hold:2800},
  {t:'@LASTMSG@',                                  cls:'',        hold:3600},
  {t:'THE END?',                                   cls:'fs-en',  hold:2000},
  {t:'Maybe not.',                                 cls:'fs-maybe',hold:2800},
];
let fsTimers=[];
function initFinale(){
  $('#btn-final-scene').addEventListener('click',runFinalScene);
  $('#fs-skip').addEventListener('click',fsFinish);
  $('#fs-done').addEventListener('click',closeFinalScene);
  $('#btn-egg').addEventListener('click',openEgg);
  $('#egg-close').addEventListener('click',()=>{ $('#egg-modal').hidden=true; sfx.click(); });
  refreshFinalRoom();
}
function buildRecap(){
  // جمع الذكريات المفتوحة + الأسرار + الملاحظات
  const pieces=[];
  if(S.owOpened.size>0) pieces.push(S.owOpened.size+' أظرف فتحتيها');
  if(S.secrets.size>0) pieces.push(S.secrets.size+' أسرار اكتشفتيها');
  if(S.finalAnswer) pieces.push('إجابة كتبتيها');
  pieces.push(MEMORIES.length+' ذكرى');
  return pieces.join(' · ');
}
function buildLastMessage(){
  if(S.finalAnswer){
    return 'إجابتك كانت:\n«'+S.finalAnswer+'»\nوهي الآن جزء من هذا العالم… إلى الأبد.';
  }
  return 'شكرًا لأنكِ وصلتِ إلى هنا.\nهذا العالم… كان لكِ من البداية.';
}
function runFinalScene(){
  const fs=$('#final-scene'), stage=$('#fs-stage');
  fs.hidden=false; document.body.classList.add('cinematic');
  $('#fs-end').hidden=true; stage.innerHTML='';
  fsTimers.forEach(clearTimeout); fsTimers=[];
  sfx.whoosh();
  delete fs.dataset.done;
  Music.stop();
  setTimeout(()=>Music.play(3),1200);
  let idx=-1, cur=null;
  function showNext(){
    idx++;
    if(cur){ cur.remove(); cur=null; }
    if(idx>=FS_SCRIPT.length){ cleanup(); fsFinish(); return; }
    const s=FS_SCRIPT[idx];
    let text=s.t;
    if(text.includes('@NAME@')) text=text.replace('@NAME@',CONFIG.herName);
    if(text.includes('@RECAP@')) text=text.replace('@RECAP@',buildRecap());
    if(text.includes('@LASTMSG@')) text=text.replace('@LASTMSG@',buildLastMessage());
    const div=document.createElement('div');
    div.className='fs-line '+s.cls;
    div.innerHTML='<p>'+text.replace(/\n/g,'<br>')+'</p>';
    stage.appendChild(div); cur=div;
    requestAnimationFrame(()=>requestAnimationFrame(()=>div.classList.add('show')));
    fsTimers.push(setTimeout(()=>{
      div.classList.remove('show');
      fsTimers.push(setTimeout(showNext,900));
    }, s.hold));
  }
  function onTap(){ if(fs.dataset.done==='1')return; fsTimers.forEach(clearTimeout); fsTimers=[]; showNext(); }
  function cleanup(){ stage.removeEventListener('click',onTap); }
  stage.addEventListener('click',onTap);
  showNext();
}
function fsFinish(){
  fsTimers.forEach(clearTimeout); fsTimers=[];
  $('#final-scene').dataset.done='1';
  $('#fs-end').hidden=false; sfx.chime();
}
function closeFinalScene(){
  const fs=$('#final-scene');
  fs.classList.add('fadeout');
  setTimeout(()=>{ fs.hidden=true; fs.classList.remove('fadeout');
    document.body.classList.remove('cinematic');
    S.finalSeen=1; store.set('final',1);
    refreshFinalRoom(true);
  },1600);
  sfx.click();
}
function refreshFinalRoom(scroll=false){
  const cert=$('#certificate'), egg=$('#egg-area'), hint=$('#fe-egg-hint');
  if(S.finalSeen){ cert.hidden=false; if(scroll)setTimeout(()=>cert.scrollIntoView({behavior:'smooth',block:'center'}),300); }
  const all=S.secrets.size>=SECRET_DEFS.length;
  egg.hidden=!all;
  hint.hidden=!(S.finalSeen&&!all);
}
function openEgg(){
  const box=$('#egg-lines'); box.innerHTML='';
  CONFIG.finalSecret.forEach((l,i)=>{
    const p=document.createElement('p');
    p.textContent=l; p.style.animationDelay=(i*1.1)+'s';
    if(i===CONFIG.finalSecret.length-1) p.classList.add('gold');
    box.appendChild(p);
  });
  const h=document.createElement('div'); h.className='egg-heart';
  h.style.animationDelay=(CONFIG.finalSecret.length*1.1)+'s';
  h.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.7-10-9.3C.4 8.6 2.3 5 5.7 5c2 0 3.4 1.1 4.3 2.4h4C15 6.1 16.4 5 18.3 5c3.4 0 5.3 3.6 3.7 6.7C19.5 16.3 12 21 12 21z" transform="scale(.92) translate(1,1)"/></svg>';
  box.appendChild(h);
  $('#egg-modal').hidden=false; sfx.chime(); $('#egg-close').focus();
}

/* ═══════════════════ MUSIC UI ═══════════════════ */
function initMusicUI(){
  const list=$('#mp-tracks');
  TRACKS.forEach((t,i)=>{
    const b=document.createElement('button'); b.className='mp-track'; b.setAttribute('aria-pressed','false');
    b.innerHTML='<span class="t-idx">'+String(i+1).padStart(2,'0')+'</span><span class="t-name">'+t.name+'</span>';
    b.addEventListener('click',()=>{ ensureAudio(); Music.toggle(i); });
    list.appendChild(b);
  });
  $('#music-fab').addEventListener('click',()=>{
    ensureAudio();
    const p=$('#music-panel'); p.hidden=!p.hidden; sfx.click();
    if(!p.hidden) setStatus(Music.playing?(''):'اختاري مقطوعة لتبدأ الحالة المزاجية.');
  });
  $('#mp-close').addEventListener('click',()=>{ $('#music-panel').hidden=true; sfx.click(); });
  $('#btn-sound').addEventListener('click',()=>{
    S.muted=S.muted?0:1; store.set('muted',S.muted);
    document.body.classList.toggle('muted',!!S.muted);
    if(AU.master) AU.master.gain.value=S.muted?0:1;
    toast(S.muted?'الصوت مكتوم.':'عاد الصوت… بهدوء.');
  });
  document.body.classList.toggle('muted',!!S.muted);
}

/* ═══════════════════ MICRO ═══════════════════ */
function initMicro(){
  const glow=$('#cursor-glow');
  if(!IS_TOUCH){
    let gx=innerWidth/2, gy=innerHeight/2, tx=gx, ty=gy;
    addEventListener('pointermove',e=>{ tx=e.clientX; ty=e.clientY; glow.style.opacity=1; },{passive:true});
    (function loop(){ gx=lerp(gx,tx,.12); gy=lerp(gy,ty,.12);
      glow.style.left=gx+'px'; glow.style.top=gy+'px'; requestAnimationFrame(loop); })();
  }
  $$('.magnetic').forEach(el=>{
    el.addEventListener('pointermove',e=>{
      if(IS_TOUCH)return;
      const r=el.getBoundingClientRect();
      const dx=(e.clientX-r.left-r.width/2)/r.width, dy=(e.clientY-r.top-r.height/2)/r.height;
      el.style.transform='translate('+(dx*8)+'px,'+(dy*6)+'px)';
    });
    el.addEventListener('pointerleave',()=>el.style.transform='');
  });
  $$('.tilt').forEach(el=>{
    el.addEventListener('pointermove',e=>{
      if(IS_TOUCH)return;
      const r=el.getBoundingClientRect();
      const dx=(e.clientX-r.left)/r.width-.5, dy=(e.clientY-r.top)/r.height-.5;
      el.style.transform='perspective(900px) rotateY('+(dx*7)+'deg) rotateX('+(-dy*7)+'deg)';
    });
    el.addEventListener('pointerleave',()=>el.style.transform='');
  });
  $('#btn-menu').addEventListener('click',openMenu);
  $('#menu-close').addEventListener('click',closeMenu);
  $('#menu').addEventListener('click',e=>{ if(e.target.id==='menu') closeMenu(); });
  addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      ['#menu','#lightbox','#um','#note-modal','#egg-modal','#music-panel','#ow-modal'].forEach(sel=>{
        const el=$(sel); if(el&&!el.hidden) el.hidden=true;
      });
    }
    if(!document.body.classList.contains('pre')&&S.current>=0){
      if(e.key==='ArrowLeft') gotoRoom(S.current+1);
      if(e.key==='ArrowRight') gotoRoom(S.current-1);
    }
  });
  document.addEventListener('visibilitychange',()=>{
    if(!AU.ctx) return;
    if(document.hidden) AU.ctx.suspend();
    else if(!S.muted) AU.ctx.resume();
  });
  const unlockAudio=()=>{ ensureAudio(); document.removeEventListener('pointerdown',unlockAudio); };
  document.addEventListener('pointerdown',unlockAudio);
}

/* ═══════════════════ ✦ NEW: OBSERVATIONS ═══════════════════ */
function initObservations(){
  const grid=$('#obs-grid');
  OBSERVATIONS.forEach((o,i)=>{
    const c=document.createElement('article');
    c.className='obs-card rv';
    c.style.transitionDelay=(i%3)*80+'ms';
    c.innerHTML=
      '<div class="obs-glow"></div>'+
      '<p class="obs-num">'+String(i+1).padStart(2,'0')+' / '+String(OBSERVATIONS.length).padStart(2,'0')+'</p>'+
      '<h4 class="obs-title">'+o.title+'</h4>'+
      '<p class="obs-note">'+o.note+'</p>'+
      '<p class="obs-desc">'+o.desc+'</p>';
    c.addEventListener('click',()=>{
      c.classList.toggle('open');
      sfx.paper();
    });
    grid.appendChild(c);
  });
}

/* ═══════════════════ ✦ NEW: OPEN WHEN ═══════════════════ */
let owTyping=false;
function initOpenWhen(){
  const grid=$('#ow-grid');
  OPEN_WHEN.forEach((o,i)=>{
    const b=document.createElement('button');
    b.className='ow-env rv'+(S.owOpened.has(i)?' opened':'');
    b.style.transitionDelay=(i%4)*70+'ms';
    b.innerHTML=
      '<span class="ow-icon">'+o.icon+'</span>'+
      '<span class="ow-label">افتحي عندما<br/>'+o.title+'</span>'+
      '<span class="ow-hint">✦</span>';
    b.addEventListener('click',()=>openOW(i));
    grid.appendChild(b);
  });
  $('#ow-close').addEventListener('click',closeOW);
  $('#ow-modal').addEventListener('click',e=>{ if(e.target.id==='ow-modal') closeOW(); });
}
async function openOW(i){
  if(owTyping) return;
  const o=OPEN_WHEN[i];
  $('#ow-title').textContent='افتحي عندما '+o.title;
  $('#ow-text').textContent='';
  $('#ow-modal').hidden=false;
  sfx.paper();
  S.owOpened.add(i); store.set('owOpened',[...S.owOpened]);
  $$('.ow-env').forEach((el,idx)=>el.classList.toggle('opened',S.owOpened.has(idx)));
  // Typewriter
  owTyping=true;
  const target=$('#ow-text'), caret=$('#ow-caret');
  caret.style.display='inline-block';
  if(REDUCED){ target.textContent=o.text; owTyping=false; return; }
  for(let ci=0; ci<o.text.length; ci++){
    target.textContent+=o.text[ci];
    await wait(o.text[ci]===' '?35:45+Math.random()*35);
  }
  caret.style.display='none';
  owTyping=false;
  sfx.softBell();
}
function closeOW(){ $('#ow-modal').hidden=true; sfx.click(); }

/* ═══════════════════ ✦ NEW: VOICE PLAYER ═══════════════════ */
const VP = { audio:null, ctx:null, analyser:null, source:null, data:null, raf:0, playing:false, canvas:null, g:null };
function initVoiceRoom(){
  if(!VP.canvas){
    VP.canvas=$('#voice-wave');
    VP.g=VP.canvas.getContext('2d');
    $('#voice-play').addEventListener('click',toggleVoice);
  }
}
async function toggleVoice(){
  ensureAudio();
  if(!VP.audio){
    VP.audio=new Audio(CONFIG.voiceFile);
    VP.audio.preload='auto';
    VP.audio.addEventListener('error',()=>{
      toast('الملف الصوتي غير متوفر. ضعيه في: assets/voice/memory.mp3',5000);
    },{once:true});
    VP.audio.addEventListener('loadedmetadata',()=>{
      $('#voice-dur').textContent=fmtTime(VP.audio.duration);
    });
    VP.audio.addEventListener('timeupdate',updateVoiceProgress);
    VP.audio.addEventListener('ended',()=>{
      VP.playing=false;
      $('#voice-orb').classList.remove('playing');
      $('.vp-ic-play').hidden=false; $('.vp-ic-pause').hidden=true;
      cancelAnimationFrame(VP.raf);
    });
    // Setup analyser
    try{
      VP.ctx = VP.ctx || AU.ctx || new (window.AudioContext||window.webkitAudioContext)();
      if(!VP.source){
        VP.source = VP.ctx.createMediaElementSource(VP.audio);
        VP.analyser = VP.ctx.createAnalyser();
        VP.analyser.fftSize=128;
        VP.source.connect(VP.analyser);
        VP.analyser.connect(VP.ctx.destination);
        VP.data=new Uint8Array(VP.analyser.frequencyBinCount);
      }
    }catch(e){ console.warn('Audio analyser unavailable',e); }
  }
  if(VP.playing){
    VP.audio.pause();
    VP.playing=false;
    $('#voice-orb').classList.remove('playing');
    $('.vp-ic-play').hidden=false; $('.vp-ic-pause').hidden=true;
    cancelAnimationFrame(VP.raf);
  } else {
    try{
      if(VP.ctx&&VP.ctx.state==='suspended') await VP.ctx.resume();
      await VP.audio.play();
      VP.playing=true;
      $('#voice-orb').classList.add('playing');
      $('.vp-ic-play').hidden=true; $('.vp-ic-pause').hidden=false;
      $('#voice-transcript').textContent=CONFIG.voiceTranscript;
      $('#voice-transcript').classList.add('show');
      drawVoiceWave();
      // ✦ Hidden audio secret trigger
      setTimeout(()=>foundSecret('voice'), 8000);
    }catch(e){ toast('اضغطي مرة أخرى للسماح بالتشغيل.'); }
  }
}
function drawVoiceWave(){
  if(!VP.playing) return;
  const g=VP.g, cv=VP.canvas;
  const w=cv.width, h=cv.height, cx=w/2, cy=h/2;
  g.clearRect(0,0,w,h);
  if(VP.analyser&&VP.data){
    VP.analyser.getByteFrequencyData(VP.data);
    const bars=VP.data.length;
    for(let i=0;i<bars;i++){
      const v=VP.data[i]/255;
      const angle=(i/bars)*Math.PI*2 - Math.PI/2;
      const r1=70+v*20, r2=70+v*50;
      const x1=cx+Math.cos(angle)*r1, y1=cy+Math.sin(angle)*r1;
      const x2=cx+Math.cos(angle)*r2, y2=cy+Math.sin(angle)*r2;
      g.strokeStyle='rgba(211,177,126,'+(0.3+v*0.6)+')';
      g.lineWidth=1.5;
      g.beginPath(); g.moveTo(x1,y1); g.lineTo(x2,y2); g.stroke();
    }
  } else {
    // Fallback: synthetic wave
    const t=performance.now()/1000;
    for(let i=0;i<32;i++){
      const angle=(i/32)*Math.PI*2 - Math.PI/2;
      const v=.4+.4*Math.sin(t*2+i*.4);
      const r1=70, r2=70+v*40;
      const x1=cx+Math.cos(angle)*r1, y1=cy+Math.sin(angle)*r1;
      const x2=cx+Math.cos(angle)*r2, y2=cy+Math.sin(angle)*r2;
      g.strokeStyle='rgba(211,177,126,'+(0.3+v*0.5)+')';
      g.lineWidth=1.5;
      g.beginPath(); g.moveTo(x1,y1); g.lineTo(x2,y2); g.stroke();
    }
  }
  VP.raf=requestAnimationFrame(drawVoiceWave);
}
function updateVoiceProgress(){
  if(!VP.audio) return;
  const cur=VP.audio.currentTime, dur=VP.audio.duration||1;
  $('#voice-cur').textContent=fmtTime(cur);
  $('#voice-fill').style.width=(cur/dur*100)+'%';
}
function fmtTime(s){
  if(!isFinite(s)) return '0:00';
  const m=Math.floor(s/60), sec=Math.floor(s%60);
  return m+':'+String(sec).padStart(2,'0');
}

/* ═══════════════════ ✦ NEW: DAY PLAN ═══════════════════ */
function initDayPlan(){
  const tl=$('#day-timeline');
  DAY_PLAN.forEach((d,i)=>{
    const b=document.createElement('button');
    b.className='day-dot'+(i===0?' on':'');
    b.textContent=d.time;
    b.addEventListener('click',()=>selectDay(i));
    tl.appendChild(b);
  });
  selectDay(0,true);
}
function selectDay(i,instant=false){
  const d=DAY_PLAN[i];
  $$('.day-dot').forEach((el,idx)=>el.classList.toggle('on',idx===i));
  const scene=$('#day-scene'), bg=$('#day-bg');
  scene.classList.remove('show');
  setTimeout(()=>{
    bg.style.background=d.bg;
    $('#day-time').textContent=d.time;
    $('#day-title').textContent=d.title;
    $('#day-text').textContent=d.text;
    scene.classList.add('show');
    sfx.tick();
    if(i===DAY_PLAN.length-1){
      setTimeout(()=>{$('#day-closer').hidden=false; sfx.softBell();},1200);
    } else {
      $('#day-closer').hidden=true;
    }
  }, instant?0:400);
}

/* ═══════════════════ ✦ NEW: POLAROID WALL ═══════════════════ */
function initPolaroid(){
  const wall=$('#polaroid-wall');
  MEMORIES.forEach((m,i)=>{
    const p=document.createElement('div');
    p.className='polaroid rv';
    p.style.transitionDelay=(i%4)*90+'ms';
    p.style.setProperty('--rot', ((i%2===0?-1:1)*(1+Math.random()*2))+'deg');
    p.innerHTML=
      '<div class="polaroid-img"><img src="'+m.img+'" alt="'+m.title+'" loading="lazy"></div>'+
      '<div class="polaroid-cap">'+m.title+'<span class="polaroid-date">'+m.date+'</span></div>';
    let flipped=false;
    p.addEventListener('click',e=>{
      if(!flipped && e.detail===1){
        // First click: flip to text
        flipped=true;
        p.classList.add('flip-mode');
        sfx.paper();
        setTimeout(()=>{
          p.classList.remove('flip-mode');
          flipped=false;
        }, 3500);
      } else if(flipped && e.detail===2){
        // Double click: open lightbox
        openLightbox(m);
      }
    });
    p.addEventListener('dblclick',e=>{
      e.preventDefault();
      openLightbox(m);
    });
    wall.appendChild(p);
  });
}

/* ═══════════════════ ✦ NEW: YOU CHANGED ═══════════════════ */
function initChanged(){
  const list=$('#changed-list');
  CHANGED.forEach((c,i)=>{
    const it=document.createElement('div');
    it.className='changed-item rv';
    it.style.transitionDelay=i*80+'ms';
    it.innerHTML=
      '<div class="changed-labels">'+
        '<span class="lbl-before">قبل</span>'+
        '<span class="lbl-arrow">→</span>'+
        '<span class="lbl-after">بعد</span>'+
      '</div>'+
      '<p class="changed-before">'+c.before+'</p>'+
      '<p class="changed-after">'+c.after+'</p>';
    it.addEventListener('click',()=>{
      it.classList.toggle('reveal');
      sfx.paper();
    });
    list.appendChild(it);
  });
}

/* ═══════════════════ ✦ NEW: TIME GREETING ═══════════════════ */
function initTimeGreeting(){
  const h=new Date().getHours();
  const g=TIME_GREETINGS.find(t=>{
    if(t.from<t.to) return h>=t.from&&h<t.to;
    return h>=t.from||h<t.to; // overnight
  });
  const el=$('#time-greeting');
  if(el&&g) el.textContent=g.text;
}

/* ═══════════════════ ✦ NEW: LAST PHOTO ═══════════════════ */
function initLastPhoto(){
  const img=$('#lastphoto-img');
  img.src=CONFIG.lastPhotoImage;
  imgFallback(img);
  setTimeout(()=>{
    $('#lastphoto-frame').classList.add('show');
  }, 600);
}

/* ═══════════════════ ✦ NEW: FINAL QUESTION ═══════════════════ */
function initFinalQuestion(){
  $('#fq-text').textContent=CONFIG.finalQuestion;
  const input=$('#fq-input'), counter=$('#fq-counter');
  if(S.finalAnswer){
    input.value=S.finalAnswer;
    counter.textContent=S.finalAnswer.length+' / 400';
  }
  input.addEventListener('input',()=>{
    counter.textContent=input.value.length+' / 400';
  });
  $('#fq-submit').addEventListener('click',()=>{
    const v=input.value.trim();
    if(!v){ toast('اكتبي شيء… ولو كلمة.'); return; }
    S.finalAnswer=v; store.set('finalAnswer',v);
    input.disabled=true;
    $('#fq-submit').disabled=true;
    $('#fq-thanks').hidden=false;
    sfx.chime();
    fxBurst(innerWidth/2, innerHeight/2, 80);
  });
}

/* ═══════════════════ BOOT ═══════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  document.body.classList.toggle('mobile',MOBILE);
  bindData();
  initTheme();
  fxInit();
  initMicro();
  initMusicUI();
  initLock();
  initLetter();
  initCounter();
  uniInit();
  initMuseum();
  initFilm();
  initTimeline();
  initMirror();
  initQuiz();
  initUnsent();
  initReasons();
  initNotes();
  // ✦ NEW modules
  initObservations();
  initOpenWhen();
  initDayPlan();
  initPolaroid();
  initChanged();
  initTimeGreeting();
  initFinalQuestion();
  // ✦ Secrets (including new voice secret)
  initSecrets();
  initFinale();
  buildRail(); buildMenu(); updateProgress();
  runIntro();
});
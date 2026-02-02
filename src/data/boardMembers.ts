export type BoardMember = {
  id: string;
  role: string;
  name: string;
  currentTitle: string;
  expertise: string[];
  photoSrc: string;
  bio: string[];
  education: string;
};

export const boardMembers: BoardMember[] = [
  {
    id: 'yang-kuang-lei',
    role: '理事長',
    name: '楊光磊',
    currentTitle: '國立臺灣科技大學產學創新學院｜執行長',
    expertise: ['半導體製程', '企業數位化', '職場教育'],
    photoSrc: '/images/理監事介紹_楊光磊.jpg',
    bio: [
      '曾任台積電研發處長，長期推動半導體與高效能運算人才培育。',
      '目前領軍臺灣高效能運算教育協會，深化產學合作與教育創新。',
    ],
    education: '美國加州大學柏克萊分校電機電腦所博士',
  },
  {
    id: 'chen-tien-fu',
    role: '理事',
    name: '陳添福',
    currentTitle: '國立陽明交通大學資訊工程學系｜教授',
    expertise: ['計算機結構', '多核心系統', 'SoC 設計', '嵌入式系統'],
    photoSrc: '/images/理監事介紹_陳添福.png',
    bio: [
      '專精計算機結構與多核心系統設計，長期投入SoC與嵌入式領域研究。',
      '積極參與協會課程設計，協助建立開源實作與高效能運算課程。',
    ],
    education: '美國華盛頓大學資訊工程博士',
  },
  {
    id: 'zheng-liang-jia',
    role: '理事',
    name: '鄭良加',
    currentTitle: '工研院電光所｜組長',
    expertise: ['半導體晶片設計'],
    photoSrc: '',
    bio: [],
    education: '',
  },
  {
    id: 'lu-ming-jun',
    role: '理事',
    name: '盧銘俊',
    currentTitle: '工研院電光所｜副所長',
    expertise: ['半導體晶片設計'],
    photoSrc: '',
    bio: [],
    education: '',
  },
  {
    id: 'guo-zhi-hong',
    role: '理事',
    name: '郭致宏',
    currentTitle: '國立成功大學電機工程學系｜副教授',
    expertise: ['神經網路', '深度學習演算法'],
    photoSrc: '/images/理監事介紹_郭致宏.jpg',
    bio: [
      '專注於高效能運算、系統軟體與計算架構相關研究，長期投入平行計算與先進運算技術之學術發展。',
      '積極參與跨校與產學合作，推動高效能運算教育與研究能量的整合，致力於培育具備紮實基礎與國際視野之高階資訊人才。',
      ],
    education: '美國南加州大學電機工程博士',
  },
  {
    id: 'xu-zhi-zhong',
    role: '理事',
    name: '許志仲',
    currentTitle: '國立陽明交通大學智慧系統與應用研究所｜副教授',
    expertise: ['深度學習', '多媒體資訊安全'],
    photoSrc: '',
    bio: [],
    education: '',
  },
  {
    id: 'zhang-ya-ning',
    role: '理事',
    name: '張亞寧',
    currentTitle: '國立成功大學敏求智慧運算學院｜副教授',
    expertise: ['認知與大腦啟發式運算', '跨語言的神經運算模型'],
    photoSrc: '',
    bio: [],
    education: '',
  },
  {
    id: 'chen-kun-zhi',
    role: '理事',
    name: '陳坤志',
    currentTitle: '國立陽明交通大學電子研究所｜副教授',
    expertise: ['超大型積體電路架構與電腦輔助系統設計', '多核心系統晶片設計'],
    photoSrc: '',
    bio: [],
    education: '',
  },
  {
    id: 'zhou-zheng-yi',
    role: '理事',
    name: '周政毅',
    currentTitle: '個人開源貢獻者',
    expertise: ['QEMU 系統模擬器'],
    photoSrc: '',
    bio: [],
    education: '',
  },
  {
    id: 'lin-wei-fen',
    role: '常務監事',
    name: '林偉棻',
    currentTitle: '國立清華大學、國立陽明交通大學｜兼任教授',
    expertise: ['人工智慧晶片架構'],
    photoSrc: '',
    bio: [],
    education: '',
  },
  {
    id: 'xie-ming-de',
    role: '監事',
    name: '謝明得',
    currentTitle: '國立成功大學電機工程學系｜教授',
    expertise: ['超大型積體電路設計與測試'],
    photoSrc: '',
    bio: [],
    education: '',
  },
  {
    id: 'zhang-yi-xing',
    role: '監事',
    name: '張益興',
    currentTitle: '臺灣大學重點科技研究學院｜兼任教授',
    expertise: ['半導體矽光子技術', '半導體測試'],
    photoSrc: '',
    bio: [],
    education: '',
  },
];

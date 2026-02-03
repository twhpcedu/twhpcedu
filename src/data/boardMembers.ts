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
      '受訪時指出，台灣在半導體與高效能運算上具有全球競爭力，但未來更需強化人才培育與跨域能力。除了技術深耕，他強調教育不只教會知識，更要讓學生具有國際視野、跨領域整合能力，以及與產業接軌的實戰思維。近年他以講座教授身分，積極在大學課堂與公開論壇分享經驗，鼓勵年輕人打好基礎、勇於創新，讓人才成為驅動科技發展的核心動力。'
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
      '近年帶領團隊聚焦「主權 AI」與生成式 AI 系統平台的建置，提出能結合使用者知識、私有化部署的專業數位分身系統 myPDA，協助產業客製化 AI 應用落地。除持續在計算機結構與嵌入式系統等核心領域發展研究外，他也推動 AI 理論與實務的結合，加速算力與應用的在地化實踐。',
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
      '長期在高效能運算、AI 加速與多媒體系統設計領域深耕，近期研究涵蓋邊緣運算的神經網路壓縮、終端 AI 處理器實作與能效型 GPU 系統設計。他在教學上強調從基礎原理到實際應用的整合學習，協助學生理解現代智慧運算的架構與實作方法，並培養能夠面對多元問題的技術能力。',
      ],
    education: '美國南加州大學電機工程博士',
  },
  {
    id: 'xu-zhi-zhong',
    role: '理事',
    name: '許志仲',
    currentTitle: '國立陽明交通大學智慧系統與應用研究所｜副教授',
    expertise: ['深度學習', '多媒體資訊安全'],
    photoSrc: '/images/理監事介紹_許志仲.jpg',
    bio: ['專注於電腦視覺、強健深度學習與多媒體資訊安全等領域的研究，近期工作包括以深度學習技術進行 DeepFake 偵測、影像超解析與醫學影像分析，並推動跨域應用如自駕車視覺系統與影像永續。帶領的 ACVLab 研究團隊在多項國際競賽中屢獲佳績並榮獲未來科技獎，他也積極結合產學合作與學生指導，推動 AI 技術在實務與社會問題中的可信任應用。'],
    education: '國立清華大學電機工程研究所博士',
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

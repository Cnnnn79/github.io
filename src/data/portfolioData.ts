import { Article, Project, TimelineItem, PodcastEpisode } from '../types';

export const PERSONAL_INFO = {
  name: '陈楠',
  shortName: '陈楠',
  domain: '陈楠小站',
  tagline: '一个正在学习的人',
  headline: "我是陈楠，\n一个正在学习的人",
  subHeadline: "专注打造兼具美感与高可用性的数字体验。融汇设计、技术与故事讲述，让产品既超级可爱又超级好用。",
  location: '中国 • 深圳 / 支持远程协作',
  email: 'chennan@example.com',
  wechat: 'chennan_design',
  github: 'https://github.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  dribbble: 'https://dribbble.com',
  heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  portraitAvatar: './avatar.jpg',
};

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: '从0到1构建高转化率的用户体验设计：我的实战方法论',
    slug: 'user-experience-methodology',
    summary: '如何平衡商业目标与用户真实同理心？分享过去三年在体验设计与增长闭环中的反思和设计规范。',
    category: 'Design',
    categoryLabel: '体验设计',
    date: '2025-05-18',
    readTime: '6 分钟阅读',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    views: 3420,
    likes: 184,
    featured: true,
    tags: ['UI/UX', '方法论', '用户研究'],
    content: `## 设计不只是美观，更是解决问题的同理心

在现代数字产品研发中，许多设计师容易陷入“过度追求视觉风格”或“沦为功能排版工具人”的极端。

真正的体验设计，核心在于：**用结构化的故事讲述，连接业务目标与用户的真实心理预期**。

### 1. 痛点洞察：聆听那些没有说出口的需求
在进行定性访谈时，用户通常会告诉你他们“想要一个更快的按钮”，但本质上他们往往是因为对上下文信息的不确定性而产生了焦虑。

### 2. 渐进式呈现与认知负荷
* **拆分信息层级**：单屏不超过3个视觉聚焦点；
* **温柔的微反馈**：用有温度的动效（如弹跳、色彩轻微呼吸）消除用户的等待恐惧；
* **色彩的情绪价值**：马卡龙低饱和色调能大幅降低功能型工具带来的压迫感。

### 3. 结语
让我们携手做出既聪明有用，又温暖治愈的优秀产品。`
  },
  {
    id: 'art-2',
    title: 'PM Mocks: 5步搞定产品经理与交互设计师的系统化面试',
    slug: 'pm-mocks-interview-guide',
    summary: '复盘一线互联网大厂核心考核逻辑，拆解估算题、产品设计题与冲突应对策略。',
    category: 'Product',
    categoryLabel: 'PM进阶',
    date: '2025-04-20',
    readTime: '8 分钟阅读',
    coverImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    views: 4890,
    likes: 312,
    featured: true,
    tags: ['产品设计', '面试真题', 'Mock训练'],
    content: `## 为什么需要PM Mock练习？

模拟面试（Mock Interview）不仅是背诵框架，更是锻炼在高压即时情境下的逻辑发散与归纳收敛能力。

### 核心解题五步心法：
1. **Clarification（厘清目标与边界）**：千万不要拿到题目立刻开始做方案，先确认指标是激活率还是留存率？
2. **User Segmentation（精细化用户画像）**：聚焦核心受众的最强痛点；
3. **Pain Points & Prioritization（痛点优先级矩阵）**：用“痛感程度 × 解决成本”定位主线；
4. **Creative Solutions（创新解法与MVP设计）**：提供至少三个有差异化的解决方案；
5. **Metrics & Trade-offs（北极星指标与风险应对）**：衡量成功标准，并主动指出潜在风险。`
  },
  {
    id: 'art-3',
    title: '为什么前端工程师应该懂一点设计心理学？',
    slug: 'frontend-and-design-psychology',
    summary: '格式塔原理、席克定律与费茨法则在现代组件库和网页微交互中的实战落地细节。',
    category: 'Tech',
    categoryLabel: '前端与美学',
    date: '2025-03-12',
    readTime: '5 分钟阅读',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    views: 2950,
    likes: 215,
    featured: false,
    tags: ['前端开发', '交互心理学', 'CSS技巧'],
    content: `## 技术的尽头是交互的丝滑感

很多技术同学常常好奇：为什么明明实现了功能，界面看起来却总觉得“生硬”或者“少了一点灵魂”？

答案往往在于**细节的心理学暗示**：
- **微交互时长**：人类视觉对 200ms~300ms 的缓动曲线最为舒适；
- **点击区热区保护（费茨法则）**：不仅要在视觉上放一个好看的 icon，更要为其提供至少 44px × 44px 的易点触区域；
- **排版对齐律**：保证视觉中轴线的稳定，减少眼动扫描负担。`
  },
  {
    id: 'art-4',
    title: '一人公司的生活实验：自由职业两年的得与失',
    slug: 'solopreneur-two-years-journey',
    summary: '从大厂到全职独立开发与设计顾问，关于自律、创作心态与寻找个人护城河的真实记录。',
    category: 'Life',
    categoryLabel: '生活随笔',
    date: '2025-02-05',
    readTime: '7 分钟阅读',
    coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    views: 5630,
    likes: 420,
    featured: true,
    tags: ['独立开发', '自由职业', '生活哲学'],
    content: `## 自由的代价是极致的自律

告别早晚打卡已经过去两年多了，很多人问我：“后悔吗？焦虑吗？”

答案是：**焦虑依然存在，但对生活的掌控感无可替代。**

当你的日程表不再被冗长无序的会议填满时，你必须学会成为自己最严格的CEO、最贴心的HR，以及最热情的创意总监。保持运动、规律阅读，以及每天留出一段沉浸的心流时间。`
  },
  {
    id: 'art-5',
    title: '用色彩构筑情感世界：如何用马卡龙治愈系色盘提升留存',
    slug: 'pastel-color-palette-system',
    summary: '打破千篇一律的沉闷冷灰与高饱和蓝，探索柔和温暖的低饱和撞色搭配逻辑。',
    category: 'Design',
    categoryLabel: '色彩系统',
    date: '2025-01-14',
    readTime: '4 分钟阅读',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    views: 3100,
    likes: 198,
    featured: false,
    tags: ['色彩理论', '设计趋势', '视觉传达'],
    content: `柔和的薄荷绿、暖杏色、柠檬黄和淡丁香紫，能够在第一眼给用户带来轻松、亲近的安全感，消除严肃工具软件的戒备感。`
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Lumina 智能家居与极简空间系统',
    subtitle: '面向未来年轻居所的沉浸式物联网温控与环境控制系统',
    category: 'Case Studies',
    categoryLabel: '案例研究',
    badge: '实战案例',
    colorScheme: 'mint',
    year: '2025',
    description: '通过卡片化温润界面与三维场景映射，为智能住宅带来无需说明书的直觉式操作体验。',
    problem: '传统智能家居App菜单层级深达4层以上，老人与客人很难在10秒内调好空调温度或睡眠灯光。',
    solution: '首创“场景时段球”与“大触屏直观滑块”，通过自然低饱和色彩区分环境状态，操作效率提升68%。',
    outcomes: [
      '应用商店首页精品推荐',
      '日活跃设备互动频次提升 140%',
      '荣获国际概念交互设计提名'
    ],
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80'
    ],
    tags: ['物联网', '体验设计', 'Figma', 'React'],
    demoUrl: 'https://lumina-demo.example.com',
    githubUrl: 'https://github.com/example/lumina'
  },
  {
    id: 'proj-2',
    title: 'Notely 治愈系灵感便签与语音日记',
    subtitle: '让每一次情绪记录都像收集彩色糖果般愉悦',
    category: 'UI/UX Design',
    categoryLabel: 'UI/UX 设计',
    badge: '移动端设计',
    colorScheme: 'peach',
    year: '2024',
    description: '一款主打卡片流、AI语音情绪摘要与手写质感的个人随手笔记工具，全球下载量超30万。',
    problem: '市面上笔记软件功能极其臃肿复杂（双向链接、数据库），让用户产生记录压迫感与启动阻力。',
    solution: '极简便签卡片流，内置轻量语音转文字与情绪色彩球，随手记完自动归档。',
    outcomes: [
      '超过 30 万独立用户记录了 180 万条日常灵感',
      '用户平均启动到完成记录仅用时 7.8 秒',
      '次月留存率达 42%'
    ],
    coverImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=1000&q=80'
    ],
    tags: ['移动端体验', '设计规范', 'Flutter', 'AI工具'],
    demoUrl: 'https://notely.example.com'
  },
  {
    id: 'proj-3',
    title: '陈楠的模拟舱 交互式产品面试模拟演练平台',
    subtitle: '帮助数千名设计师与产品经理拿到心仪职位的在线模拟演练平台',
    category: 'Web Apps',
    categoryLabel: 'Web 应用',
    badge: '全栈开发',
    colorScheme: 'yellow',
    year: '2024',
    description: '支持即时语音答题、AI结构化评分、同行互评匹配与经典题库知识图谱的在线学习社群。',
    problem: '很多新人自学产品面试时缺乏实战反馈，不知道自己的回答缺少哪个分析维度。',
    solution: '构建5步答题框架计时器、思维导图实时协同板与大厂真题知识库。',
    outcomes: [
      '累计协助学员斩获 600+ 知名科技公司产品/设计岗位录取通知',
      '平均答题逻辑完整度评分由 62 提升至 89'
    ],
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80'
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    demoUrl: 'https://mocks.example.com',
    githubUrl: 'https://github.com/example/mocks'
  },
  {
    id: 'proj-4',
    title: 'Curio 独立播客与声音故事馆',
    subtitle: '探索创造力、数字游牧与科技人文的声音空间',
    category: 'Case Studies',
    categoryLabel: '多媒体设计',
    badge: '播客品牌',
    colorScheme: 'purple',
    year: '2023',
    description: '为个人原创播客《陈楠与朋友们》打造的专属交互式声音播放站与视觉识别体系。',
    problem: '传统音频平台缺乏对节目背景资料、嘉宾金句卡片与时间轴知识点的高效联动展现。',
    solution: '打造随音频进度动态高亮的实时字幕卡片与一键分享海报生成器。',
    outcomes: [
      '全网播放量突破 120 万次',
      '单集平均完播率高达 74%'
    ],
    coverImage: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80'
    ],
    tags: ['音频交互', '品牌视觉', '动效设计'],
    demoUrl: 'https://curio-podcast.example.com'
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    period: '2023 - 至今',
    role: '独立产品设计师 & 全栈创作者',
    company: '自由职业 / 陈楠创意工作室',
    description: '专注于为全球创新团队提供品牌与体验咨询，同时独立开发数款工具类产品与个人播客频道。',
    highlight: '累计服务 15+ 创业团队，产品获得多次应用商店推荐。'
  },
  {
    period: '2021 - 2023',
    role: '高级产品体验设计师',
    company: '知名互联网科技公司',
    description: '负责核心产品线的交互设计系统搭建、设计中台组件库规范沉淀及复杂业务流程降噪。',
    highlight: '主导设计系统重构，前端协作交付效率提升 35%。'
  },
  {
    period: '2019 - 2021',
    role: '体验设计师 & 前端开发者',
    company: '创新设计工作室',
    description: '负责品牌视觉、Web端与移动端原型开发，运用 React/Vue 将创意无缝还原为高精度代码。',
    highlight: '主导完成 20+ 款精选商业项目的全案交付。'
  }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'pod-1',
    episodeNumber: 42,
    title: '第42期 与资深设计主管聊聊：AI时代下年轻设计师的真正护城河',
    guest: '林舒，前知名科技公司设计总监',
    duration: '48 分钟',
    date: '2025-05-10',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    ]
  },
  {
    id: 'pod-2',
    episodeNumber: 41,
    title: '第41期 独立创作者指南：如何把你的灵感做成第一笔收入？',
    guest: '王大维，全栈独立开发者',
    duration: '56 分钟',
    date: '2025-04-18',
    avatars: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
    ]
  }
];

export const MASONRY_GALLERY = [
  {
    id: 'img-1',
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
    title: '晨雾森林',
    tag: '摄影纪实'
  },
  {
    id: 'img-2',
    url: './pastel_hills.jpg',
    title: '柔光山丘',
    tag: '自然光影'
  },
  {
    id: 'img-3',
    url: './pastel_lake.jpg',
    title: '霞光湖畔',
    tag: '治愈风景'
  },
  {
    id: 'img-4',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    title: '林间肖像',
    tag: '人像写真'
  },
  {
    id: 'img-5',
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80',
    title: '春季花海',
    tag: '色彩韵律'
  }
];

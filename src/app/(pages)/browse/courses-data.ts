export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  rating: number;
  reviewsCount: number;
  duration: string;
  lessons: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  price: string;
  image: string;
  badge: string;
  badgeColor: string;
}

// 25 realistic Web Development courses
const webDevCourses = [
  {
    title: "Full Stack React & Next.js Masterclass",
    description: "Build modern, premium web applications with Next.js 15, React 19, TypeScript, and Tailwind CSS from scratch."
  },
  {
    title: "Advanced Tailwind CSS v4 & Styling Systems",
    description: "Unlock the power of Tailwind v4's high-performance compilation, native cascades, custom themes, and animations."
  },
  {
    title: "The Complete TypeScript Bootcamp 2026",
    description: "Master TypeScript from scratch: interfaces, generics, decorators, advanced types, and integration with React."
  },
  {
    title: "Modern GraphQL with Node.js & Prisma",
    description: "Design type-safe APIs with GraphQL, Apollo Server, Express, Prisma, and PostgreSQL in a production environment."
  },
  {
    title: "Next.js App Router Deep Dive",
    description: "Master Server Components, Suspense, Server Actions, Route Handlers, and optimal data caching strategies."
  },
  {
    title: "Mastering Web Performance & SEO",
    description: "Learn to audit, optimize, and scale web applications for sub-second load times and perfect Core Web Vitals scores."
  },
  {
    title: "E-Commerce Development with Shopify & Hydrogen",
    description: "Build ultra-fast, headless e-commerce storefronts using Shopify Hydrogen, Remix, and Tailwind CSS."
  },
  {
    title: "Serverless Web Apps with AWS Lambda & SST",
    description: "Architect production-grade serverless apps on AWS with Lambda, DynamoDB, API Gateway, and SST framework."
  },
  {
    title: "Web Accessibility (a11y) Masterclass",
    description: "Create fully accessible, WCAG-compliant web experiences for everyone using semantic HTML and ARIA patterns."
  },
  {
    title: "Real-Time Web Apps with Socket.io & Redis",
    description: "Build scalable real-time chat, notifications, and multiplayer interactions using WebSockets, Node, and Redis."
  },
  {
    title: "Ultra-Premium UI Development with Framer Motion",
    description: "Craft jaw-dropping user interfaces with complex micro-interactions, layout transitions, and scroll animations."
  },
  {
    title: "Astro.js: Build Super Fast Content Sites",
    description: "Build lightning-fast content-driven websites using Astro, utilizing partial hydration and zero-JS-by-default."
  },
  {
    title: "Docker & Kubernetes for Web Developers",
    description: "Containerize your web applications and orchestrate them in production with Docker, Kubernetes, and Helm."
  },
  {
    title: "Modern CSS: From Flexbox to Subgrid and Beyond",
    description: "Master advanced CSS layouts: Grid, Flexbox, Subgrid, Container Queries, and modern CSS-in-JS solutions."
  },
  {
    title: "Advanced React State Management",
    description: "Compare and master state management solutions: Zustand, Redux Toolkit, XState, and native React context."
  },
  {
    title: "Web Components & Lit: Reusable UI Frameworks",
    description: "Build framework-agnostic web components with Lit, shadow DOM, custom elements, and custom events."
  },
  {
    title: "The Complete Vue.js 3 & Nuxt Masterclass",
    description: "Build full-stack, SEO-friendly applications with Vue 3, Composition API, Nuxt, and Pinia."
  },
  {
    title: "SvelteKit: Zero to Production",
    description: "Master reactive programming with Svelte 5 and build blazing-fast full-stack applications with SvelteKit."
  },
  {
    title: "RESTful API Design & Best Practices with Express",
    description: "Create secure, scalable, and well-documented REST APIs with Node, Express, MongoDB, and OpenAPI/Swagger."
  },
  {
    title: "Web Security & Authentication Demystified",
    description: "Protect your web apps against XSS, CSRF, and SQLi. Implement JWT, OAuth 2.0, Passkeys, and MFA securely."
  },
  {
    title: "Building Chrome Extensions with React & TS",
    description: "Learn to build, test, and publish feature-rich browser extensions using React, Vite, and Chrome APIs."
  },
  {
    title: "Micro-Frontends Architecture for Enterprise",
    description: "Scale large-scale web applications by splitting them into autonomous, lazy-loaded micro-frontends with Module Federation."
  },
  {
    title: "Automated Testing: Vitest & Playwright",
    description: "Implement a robust testing strategy with unit tests, integration tests, and end-to-end tests using modern tooling."
  },
  {
    title: "Chrome DevTools: Debugging Like a Pro",
    description: "Unravel performance bottlenecks, memory leaks, CSS issues, and network bugs using advanced DevTools features."
  },
  {
    title: "Headless WordPress with Next.js",
    description: "Leverage WordPress as a powerful headless CMS and build stunning, fast frontend experiences with Next.js."
  }
];

// 25 realistic Design courses
const designCourses = [
  {
    title: "UI/UX Design Systems with Figma",
    description: "Design comprehensive design systems, responsive components, and stunning interactive prototypes in Figma."
  },
  {
    title: "Mastering Creative Copywriting & Content",
    description: "Craft high-converting headlines, copy that drives user engagement, and storytelling techniques for growth."
  },
  {
    title: "Advanced Typography: Expressing Voice with Type",
    description: "Master font pairing, typographic scales, micro-typography, and custom web font integration for absolute visual style."
  },
  {
    title: "Interaction Design & Micro-animations in Figma",
    description: "Create ultra-responsive, beautiful high-fidelity micro-interactions and screen transitions in Figma."
  },
  {
    title: "Mobile App UX: Designing for Thumb-friendly Zones",
    description: "Learn ergonomics, gesture-based UX, navigation layouts, and design patterns unique to iOS and Android."
  },
  {
    title: "Responsive Web Design: Layouts that Breathe",
    description: "Design elegant, fluid web pages using grid structures, fluid typography, and responsive modern aesthetic principles."
  },
  {
    title: "Product Strategy & Design Thinking for Startups",
    description: "Turn concepts into high-impact products using user mapping, low-fidelity wireframing, and interactive design sprints."
  },
  {
    title: "Illustration for UI: Vector Art in Figma",
    description: "Master bezier curves, vector networking, shading, and styling custom illustration sets directly in design tools."
  },
  {
    title: "SaaS Dashboard Design: Data Visualization & UX",
    description: "Create visually stunning, readable dashboards, analytics widgets, interactive charts, and dense information grids."
  },
  {
    title: "Brand Identity Design: Crafting Logos",
    description: "Learn the secrets behind world-class logo design, styling guides, corporate identity, and brand presentation books."
  },
  {
    title: "Framer for Designers: High-Fidelity Prototypes",
    description: "Breathe life into your designs using Framer's absolute control over layout, real data, and interactive components."
  },
  {
    title: "Color Theory for Web & Mobile Interfaces",
    description: "Create cohesive color palettes, establish visual hierarchies, and ensure WCAG accessibility using color psychology."
  },
  {
    title: "Design Audits: Reviewing & Optimizing Interfaces",
    description: "Learn to identify usability friction, design system deviations, and accessibility gaps in existing projects."
  },
  {
    title: "3D UI Elements with Spline & Three.js",
    description: "Add interactive 3D assets, custom meshes, and immersive scene layouts to modern web apps with Spline."
  },
  {
    title: "Designing for Accessibility: WCAG Guidelines",
    description: "Build inclusive, beautiful products matching AA & AAA accessibility requirements without sacrificing aesthetic quality."
  },
  {
    title: "The Complete Adobe XD Mastery Course",
    description: "Learn vector drawing, automated animation, repeat grids, and developer handover systems using Adobe XD."
  },
  {
    title: "Motion Design in After Effects for Web UX",
    description: "Design stunning promo videos, app transitions, Lottie animations, and vector-based interactions in After Effects."
  },
  {
    title: "Design to Code: Bridging the Gap",
    description: "Learn how to speak developer language: CSS properties, box models, component states, and flexbox specs for designers."
  },
  {
    title: "UX Research: Interviews, Surveys, & Personas",
    description: "Conduct high-quality qualitative user interviews, construct testing surveys, and build actionable personas."
  },
  {
    title: "Iconography: Designing Custom Icon Libraries",
    description: "Establish strict pixel-grid systems and design beautiful, consistent custom icon libraries for websites and apps."
  },
  {
    title: "Minimalist Web Design: The Art of Subtraction",
    description: "Discover how using empty whitespace, bold typography, and extreme structural simplicity results in high-end design."
  },
  {
    title: "Wireframing to High-Fidelity: UX Lifecycle",
    description: "Transition smoothly from low-fidelity paper wireframes to user flow charts, mockups, and client-ready designs."
  },
  {
    title: "Dark Mode Design: Contrast, Color & Aesthetics",
    description: "Master styling for low-light environments, contrast ratios, and secondary palettes for premium dark mode layouts."
  },
  {
    title: "Landing Page Design that Converts: UX Principles",
    description: "Structure layout sections, call-to-actions, social proof, and value propositions that boost user conversion."
  },
  {
    title: "Design Portfolio Masterclass: Showcase Work",
    description: "Curate your best case studies, structure project descriptions, and design an interactive portfolio site to get hired."
  }
];

// 25 realistic AI & Data Science courses
const aiCourses = [
  {
    title: "Artificial Intelligence & Deep Learning",
    description: "An intuitive introduction to neural networks, machine learning models, NLP, and computer vision using Python."
  },
  {
    title: "Python for Data Science Boot Camp",
    description: "Learn data science from scratch: Python programming, NumPy, Pandas, Matplotlib, and statistical modeling."
  },
  {
    title: "Large Language Models & Prompt Engineering",
    description: "Master techniques to get high-quality outputs from GPT-4, Claude 3.5, and Llama 3 for real-world business apps."
  },
  {
    title: "Generative AI: Building Apps with LangChain",
    description: "Build powerful context-aware apps: document search, AI agents, RAG systems, and custom chatbots with LangChain."
  },
  {
    title: "Data Visualization with D3.js and React",
    description: "Create highly interactive, responsive, and stunning custom data charts and dashboards using React and D3."
  },
  {
    title: "Introduction to Computer Vision & OpenCV",
    description: "Learn object detection, image classification, facial recognition, and live video analysis using OpenCV and Python."
  },
  {
    title: "Natural Language Processing with Transformers",
    description: "Implement sentiment analysis, machine translation, text generation, and named-entity recognition using Hugging Face."
  },
  {
    title: "TensorFlow & Keras: Practical Neural Networks",
    description: "Build, train, and deploy advanced neural networks for regression, classification, and time-series forecasting."
  },
  {
    title: "Data Engineering Essentials: Spark, Kafka & Airflow",
    description: "Architect big data pipelines, process streaming data in real-time, and automate workflow schedules securely."
  },
  {
    title: "Pandas & NumPy: High-Performance Analytics",
    description: "Manipulate massive tabular datasets, clean dirty data, and perform lightning-fast math operations with vectorization."
  },
  {
    title: "SQL & NoSQL Databases for Data Analysts",
    description: "Write highly optimized database queries, handle complex joins, and design schemas for PostgreSQL, MongoDB, and Redis."
  },
  {
    title: "Machine Learning Operations (MLOps) in Practice",
    description: "Deploy ML models to production with CI/CD, monitor concept drift, track models with MLflow, and run in Docker."
  },
  {
    title: "Predictive Analytics with R & Tidyverse",
    description: "Perform advanced data manipulation, regression modelling, statistical testing, and plotting using R programming."
  },
  {
    title: "Vector Databases & Semantic Search in Production",
    description: "Implement highly accurate search apps using Pinecone, Milvus, and text embeddings for high-dimensional search."
  },
  {
    title: "AI-Powered Chatbots: Design to Deployment",
    description: "Build responsive conversational systems, conversational memory, tool integration, and deploy to Slack & WhatsApp."
  },
  {
    title: "Reinforcement Learning & Game Playing Agents",
    description: "Teach AI agents to play complex games and make optimal decisions using Q-Learning and Deep Q-Networks (DQN)."
  },
  {
    title: "Statistics & Probability for Data Scientists",
    description: "Master fundamental statistics: probability theory, hypothesis testing, A/B test analysis, and distributions."
  },
  {
    title: "Feature Engineering: Preparing Data for ML",
    description: "Optimize machine learning model accuracy using advanced target encoding, scaling, imputing, and PCA techniques."
  },
  {
    title: "AI Art & Image Generation: Stable Diffusion",
    description: "Unlock advanced generation control: custom models, ControlNet, LoRA training, and automatic prompt optimization."
  },
  {
    title: "Time Series Analysis & Forecasting with Python",
    description: "Analyze seasonal trends and build predictive models for stock prices, weather, and sales using ARIMA and Prophet."
  },
  {
    title: "Neural Network Interpretability & AI Ethics",
    description: "Understand model predictions using SHAP and LIME, detect model biases, and implement ethical, fair AI practices."
  },
  {
    title: "Automating Data Pipelines with Prefect",
    description: "Replace flaky cron jobs with beautiful, modern data workflow orchestration, scheduling, and error handling."
  },
  {
    title: "AI for Productivity: Copilot, ChatGPT & Beyond",
    description: "Supercharge your workflow: write code, draft documents, analyze reports, and build custom GPT assistants."
  },
  {
    title: "Deep Learning for Algorithmic Trading",
    description: "Analyze financial market structures and build neural networks to backtest and execute automated trading ideas."
  },
  {
    title: "Graph Neural Networks & Relational Learning",
    description: "Analyze complex network datasets, node relations, social networks, and molecule prediction using PyTorch Geometric."
  }
];

// 25 realistic Mobile Apps courses
const mobileCourses = [
  {
    title: "iOS 18 Swift & SwiftUI Bootcamp",
    description: "Learn to build immersive mobile apps for iPhone, iPad, and Mac using Swift, SwiftUI, and modern state management."
  },
  {
    title: "The Complete Flutter & Dart Guide",
    description: "Build stunning, fast cross-platform applications for iOS, Android, and Web with a single Flutter codebase."
  },
  {
    title: "React Native & Expo: Build Native Apps Fast",
    description: "Utilize your React and JavaScript skills to compile production-ready native iOS and Android mobile applications."
  },
  {
    title: "Android Jetpack Compose: Modern UI Development",
    description: "Master declarative UI development, state flows, Kotlin coroutines, and material design systems on Android."
  },
  {
    title: "Kotlin Multiplatform: Share App Logic",
    description: "Write your database, networking, and business logic once in Kotlin, and share it seamlessly with iOS and Android."
  },
  {
    title: "Mobile App Architecture: Clean & Scalable Design",
    description: "Implement MVVM, Clean Architecture, dependency injection, and modular structure in iOS and Android projects."
  },
  {
    title: "Push Notifications & Deep Linking in Mobile Apps",
    description: "Configure APNS, Firebase Cloud Messaging, rich media notifications, and universal links for user re-engagement."
  },
  {
    title: "In-App Purchases & Subscriptions Mastery",
    description: "Integrate Apple App Store and Google Play subscriptions, implement paywalls, and handle receipt validation with RevenueCat."
  },
  {
    title: "Mobile App Security: Reverse Engineering & Protection",
    description: "Secure local storage, implement SSL pinning, prevent jailbreak bypasses, and encrypt offline databases."
  },
  {
    title: "Offline-First Mobile Apps with Realm & SQLite",
    description: "Design robust apps that work seamlessly without an internet connection, handling synchronization conflict resolutions."
  },
  {
    title: "Flutter Flow: No-Code App Development",
    description: "Visually construct fully functional, beautiful cross-platform applications and connect them to real APIs and Firebase."
  },
  {
    title: "SwiftUI Animation & Micro-interactions",
    description: "Build delightful mobile animations: matching geometry effects, particle systems, path animations, and physics-based flows."
  },
  {
    title: "Integrating Apple Watch & Wear OS Apps",
    description: "Build companion watch apps, widgets, live activities, and wear complications that keep users connected on the go."
  },
  {
    title: "Mobile App Testing: Appium, XCTest & Espresso",
    description: "Write automated unit tests, UI interaction tests, and integration flows to guarantee cross-device mobile stability."
  },
  {
    title: "Publishing to App Store & Google Play",
    description: "Master the store listing process: ASO (App Store Optimization), privacy policies, review checklists, and release tracks."
  },
  {
    title: "React Native Performance Optimization Guide",
    description: "Solve FPS drops, optimize memory usage, debug bridge communication, and build native modules for heavy compute tasks."
  },
  {
    title: "Designing Mobile Games with Unity & C#",
    description: "Build responsive, beautiful 2D and 3D mobile games: asset importing, input controllers, game loops, and optimization."
  },
  {
    title: "Augmented Reality with ARKit & ARCore",
    description: "Construct immersive AR experiences: place virtual objects in real-world spaces, handle planes, and track facial features."
  },
  {
    title: "Biometric Authentication & Keychain",
    description: "Securely store sensitive user data, passwords, and tokens, and integrate FaceID, TouchID, and Android Biometrics."
  },
  {
    title: "Flutter Web & Desktop: Cross-Platform Expansion",
    description: "Adapt your Flutter codebase to provide responsive desktop (macOS, Windows) and optimized web experiences."
  },
  {
    title: "CoreData & CloudKit: Sync with iCloud",
    description: "Synchronize local mobile databases with private and public iCloud buckets seamlessly across a user's Apple devices."
  },
  {
    title: "Mobile DevOps: CI/CD with Fastlane & GitHub Actions",
    description: "Automate code compilation, test suite execution, beta delivery to TestFlight & Google Play Console, and release cycles."
  },
  {
    title: "Map Integrations & Geofencing in Mobile Dev",
    description: "Integrate Apple Maps and Google Maps, track live GPS locations, draw routing paths, and trigger geofence alerts."
  },
  {
    title: "State Management in Flutter: Bloc & Riverpod",
    description: "Compare Riverpod, Bloc, and Provider to build highly reactive, testable, and robust Flutter applications."
  },
  {
    title: "SwiftData Essentials: The Modern CoreData",
    description: "Leverage Apple's brand new SwiftData library: design models, fetch descriptors, handle migrations, and sync iCloud."
  }
];

// Helper to generate a deterministic list of 100 courses
const generateCourses = (): Course[] => {
  const categories = [
    { name: "Web Development", list: webDevCourses, kw: "coding" },
    { name: "Design", list: designCourses, kw: "design" },
    { name: "AI & Data Science", list: aiCourses, kw: "science" },
    { name: "Mobile Apps", list: mobileCourses, kw: "mobile" }
  ];

  const authors = [
    "Alex Rivers", "Sarah Jenkins", "Sophia Sterling", "Dr. Ethan Vance", "Liam Cross",
    "Diana Prince", "Marcus Thorne", "Elena Rostova", "Kaito Tanaka", "Amina Diop",
    "Devon Lane", "Bessie Cooper", "Annette Black", "Robert Fox", "Albert Flores",
    "Esther Howard", "Ronald Richards", "Guy Hawkins", "Cody Fisher", "Kathryn Murphy",
    "Jane Cooper", "Wade Warren", "Kristin Watson", "Cameron Williamson", "Leslie Alexander"
  ];

  const badges = [
    { text: "Bestseller", color: "bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/20 backdrop-blur-xs" },
    { text: "Trending", color: "bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/20 backdrop-blur-xs" },
    { text: "New", color: "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-xs" },
    { text: "Popular", color: "bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20 backdrop-blur-xs" },
    { text: "Hot", color: "bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 backdrop-blur-xs" },
    { text: "", color: "" }
  ];

  const levels: Course["level"][] = ["Beginner", "Intermediate", "Advanced", "All Levels"];

  const unsplashIds: Record<string, string[]> = {
    "Web Development": [
      "1517694712202-14dd9538aa97", "1555066931-4365d14bab8c", "1542831371-29b0f74f9713",
      "1498050108023-c5249f4df085", "1507238691740-187a5b1d37b8", "1515879218367-8466d910aaa4",
      "1484417894907-623942c8ea29", "1531403009284-440f080d1e12", "1522542550221-31fd19575a2d"
    ],
    "Design": [
      "1541462608143-67571c6738dd", "1586717791821-3f44a563fa4c", "1561070791-26c113006238",
      "1509343256512-d77a5cb3791b", "1618005182384-a83a8bd57fbe", "1626785774573-4b799315345d",
      "1513542789411-b6a5d4f31634", "1550684848-fac1c5b4e853", "1613909213444-260bc9b0d685"
    ],
    "AI & Data Science": [
      "1677442136019-21780efad99a", "1507146426996-ef05306b995a", "1527474305487-b87b222841cc",
      "1501854140801-50d01698950b", "1485827404703-89b55fcc595e", "1531297484001-80022131f5a1",
      "1526374965328-7f61d4dc18c5", "1558494949-ef010cbdcc31", "1504384308090-c894fdcc538d"
    ],
    "Mobile Apps": [
      "1512941937669-90a1b58e7e9c", "1551650975-87deedd944c3", "1511707171634-5f897ff02aa9",
      "1523206489230-c012c64b2b48", "1460925895917-afdab827c52f", "1563986768609-322da13575f3",
      "1510519138101-570d1dca3d66", "1596524430615-b46475ddff6e", "1551288049-bebda4e38f71"
    ]
  };

  const allCourses: Course[] = [];
  let idCounter = 1;

  // Let's loop through the 4 categories and pull 25 items from each
  categories.forEach((catObj) => {
    const list = catObj.list;
    const catName = catObj.name;
    const imgList = unsplashIds[catName];

    list.forEach((item, index) => {
      // Deterministic but varied metadata
      const author = authors[(index + idCounter) % authors.length];
      const rating = parseFloat((4.4 + ((index * 7) % 7) * 0.1).toFixed(1)); // ratings 4.4 to 5.0
      const reviewsCount = 12 + ((index * 137) % 1800); // 12 to 1812 reviews
      const lessons = 12 + ((index * 4) % 60); // 12 to 72 lessons
      const hours = Math.round(lessons * 0.5 + ((index * 3) % 15) + 4); // 4 to ~40 hours
      const level = levels[(index + idCounter) % levels.length];
      
      const prices = ["$19.99", "$29.99", "$39.99", "$44.99", "$49.99", "$59.99", "$79.99", "$89.99", "$99.99"];
      const price = prices[(index * 3) % prices.length];

      const badgeObj = badges[(index * 2) % badges.length];
      const imgId = imgList[index % imgList.length];
      const image = `https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&w=600&q=80`;

      allCourses.push({
        id: String(idCounter),
        title: item.title,
        description: item.description,
        category: catName,
        author,
        rating,
        reviewsCount,
        duration: `${hours} hours`,
        lessons,
        level,
        price,
        image,
        badge: badgeObj.text,
        badgeColor: badgeObj.color
      });

      idCounter++;
    });
  });

  return allCourses;
};

export const courses = generateCourses();

export const categories = [
  "All Courses",
  "Web Development",
  "Design",
  "AI & Data Science",
  "Mobile Apps",
];

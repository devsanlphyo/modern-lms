import { Course } from "./courses-data";

export interface SyllabusLesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "reading" | "quiz" | "coding";
  isPreviewable: boolean;
}

export interface SyllabusChapter {
  id: string;
  title: string;
  duration: string;
  lessons: SyllabusLesson[];
}

export interface CourseDetailedInfo {
  syllabus: SyllabusChapter[];
  objectives: string[];
  requirements: string[];
  skillsGained: string[];
}

// Generates highly realistic syllabus, objectives, requirements based on course details
export function generateDetailedCourseInfo(course: Course): CourseDetailedInfo {
  const { id, title, category, level, lessons: lessonsCount } = course;

  // 1. Generate Objectives
  const objectives: string[] = [];
  if (category === "Web Development") {
    objectives.push(
      `Build responsive, production-ready applications based on ${title.split("with")[0] || "modern web technologies"}.`,
      "Implement industry best practices for state management, data caching, and asynchronous workflows.",
      "Optimize web page loading speeds and accessibility (WCAG AA compliant) for exceptional user experience.",
      "Deploy code to cloud hosting providers with continuous deployment (CI/CD) pipelines."
    );
  } else if (category === "Design") {
    objectives.push(
      "Master layout structures, visual hierarchy, grid systems, and custom UI kits in design tools.",
      "Create high-fidelity interactive prototypes with micro-interactions and transitions.",
      "Conduct professional user research, qualitative interviews, and synthesize findings into personas.",
      "Successfully hand over design systems and components to developers using precise specification notes."
    );
  } else if (category === "AI & Data Science") {
    objectives.push(
      "Gain deep understanding of mathematical and statistical concepts backing modern algorithms.",
      "Build, train, evaluate, and fine-tune complex machine learning models with real-world datasets.",
      "Clean, parse, manipulate, and visualize high-dimensional data using industry-standard libraries.",
      "Architect automated data parsing pipelines and deploy models into highly available endpoints."
    );
  } else {
    // Mobile Apps
    objectives.push(
      `Develop, debug, and ship premium cross-platform or native applications using modern frameworks.`,
      "Master mobile state management, lifecycle controllers, and offline-first database synchronization.",
      "Configure device native integrations like Geolocation, Camera, Push Notifications, and Keychain secure storage.",
      "Prepare and publish mobile packages matching Apple App Store and Google Play requirements."
    );
  }

  // 2. Generate Requirements
  const requirements: string[] = [];
  if (level === "Beginner") {
    requirements.push(
      "No prior experience or programming knowledge is required.",
      "An open mind, eagerness to learn, and a computer with internet access.",
      "Basic computer literacy (downloading applications, web browsing)."
    );
  } else if (level === "Intermediate") {
    requirements.push(
      `Basic knowledge of ${category === "Design" ? "visual design concepts" : "programming principles and syntax"}.`,
      `Comfortable working with basic tools like ${category === "Design" ? "Figma or web graphics" : "VS Code and terminal commands"}.`,
      "A computer with at least 8GB RAM and stable high-speed internet."
    );
  } else if (level === "Advanced") {
    requirements.push(
      `Solid foundational understanding of ${category === "Design" ? "UI/UX practices and vector designs" : "JavaScript/Python syntax and object-oriented principles"}.`,
      "Experience having built or participated in at least one software or graphics project.",
      "A high-performance machine ready to compile assets, run containers, or render prototypes."
    );
  } else {
    // All Levels
    requirements.push(
      "A computer with internet access is all you need to get started.",
      "Zero prerequisites; concepts are broken down from fundamentals to highly advanced applications.",
      "Patience and commitment to practice alongside hands-on workshop lectures."
    );
  }

  // 3. Generate Skills Gained
  const skillsGained: string[] = [];
  if (category === "Web Development") {
    skillsGained.push("Full-Stack Architecture", "TypeScript", "Next.js App Router", "Tailwind CSS", "REST/GraphQL APIs", "Performance Auditing");
  } else if (category === "Design") {
    skillsGained.push("UI/UX Design", "Figma Components", "Interactive Prototyping", "User Research", "Typography & Layout", "Design Systems");
  } else if (category === "AI & Data Science") {
    skillsGained.push("Python Modeling", "Machine Learning", "Deep Learning", "Data Visualization", "Vector Databases", "MLOps Pipelines");
  } else {
    skillsGained.push("Mobile UI Systems", "State Management", "Native Device APIs", "App Store Publishing", "CI/CD Deployment", "Offline Synchronization");
  }

  // 4. Generate Syllabus
  // We need to divide `lessonsCount` across 4-5 chapters
  const chaptersCount = Math.min(5, Math.max(3, Math.round(lessonsCount / 8)));
  const baseLessonsPerChapter = Math.floor(lessonsCount / chaptersCount);
  let lessonsLeft = lessonsCount;

  const webDevThemes = [
    { title: "Introduction, Setup & Core Principles", icon: "start" },
    { title: "Foundations & Deep Dive into Architecture", icon: "deep" },
    { title: "Building Practical Features & State Management", icon: "build" },
    { title: "Advanced Optimizations, Security & Audits", icon: "optimize" },
    { title: "Capstone Project, Testing & Deployment", icon: "deploy" }
  ];

  const designThemes = [
    { title: "Visual Design Foundations & Color Principles", icon: "start" },
    { title: "Mastering Design Tools, Vectors & Layouts", icon: "deep" },
    { title: "UX Mapping, Personas & User Journeys", icon: "build" },
    { title: "High-Fidelity Prototyping & Micro-animations", icon: "optimize" },
    { title: "Component Systems & Developer Handover", icon: "deploy" }
  ];

  const aiThemes = [
    { title: "Mathematical Foundations & Setup", icon: "start" },
    { title: "Data Wrangling, Manipulation & Cleaning", icon: "deep" },
    { title: "Building & Training Machine Learning Models", icon: "build" },
    { title: "Advanced Neural Networks & Fine-Tuning", icon: "optimize" },
    { title: "Validation, Deployment & MLOps Pipelines", icon: "deploy" }
  ];

  const mobileThemes = [
    { title: "Getting Started & Workspace Architecture", icon: "start" },
    { title: "Responsive Layouts, Widgets & Native UI", icon: "deep" },
    { title: "Reactive State Management & Local Databases", icon: "build" },
    { title: "Device Integrations, Sensors & Notifications", icon: "optimize" },
    { title: "Automated Testing, Optimization & Store Release", icon: "deploy" }
  ];

  let themeSet = webDevThemes;
  if (category === "Design") themeSet = designThemes;
  if (category === "AI & Data Science") themeSet = aiThemes;
  if (category === "Mobile Apps") themeSet = mobileThemes;

  const syllabus: SyllabusChapter[] = [];

  for (let ch = 0; ch < chaptersCount; ch++) {
    const isLastChapter = ch === chaptersCount - 1;
    const currentChapterLessonsCount = isLastChapter ? lessonsLeft : baseLessonsPerChapter;
    lessonsLeft -= currentChapterLessonsCount;

    const chapterTheme = themeSet[ch % themeSet.length];
    const lessons: SyllabusLesson[] = [];

    // Generate lesson titles deterministically based on course title and chapter theme
    let totalChapterDurationMinutes = 0;

    for (let l = 0; l < currentChapterLessonsCount; l++) {
      const lessonId = `${id}-${ch + 1}-${l + 1}`;
      const lessonIndex = l + 1;
      let lessonTitle = "";
      let type: "video" | "reading" | "quiz" | "coding" = "video";
      let isPreviewable = false;

      // Assign type deterministically
      if (l === 0) {
        type = "video";
        isPreviewable = ch === 0 || ch === 1; // Previewable only for first couple of chapters
      } else if (l === currentChapterLessonsCount - 1 && currentChapterLessonsCount > 3) {
        type = "quiz";
      } else if (l % 4 === 1) {
        type = "coding";
      } else if (l % 4 === 2) {
        type = "reading";
      } else {
        type = "video";
      }

      // Generate realistic titles
      const cleanTitle = title.replace("The Complete ", "").replace("Masterclass", "").replace("Bootcamp", "").trim();
      
      if (ch === 0) {
        if (l === 0) lessonTitle = "Course Introduction & Learning Architecture";
        else if (l === 1) lessonTitle = "Getting Started with Essential Tooling & Workspaces";
        else if (type === "quiz") lessonTitle = "Foundations Knowledge Check";
        else if (type === "reading") lessonTitle = "Syllabus, Project Resources & Assets Checklist";
        else lessonTitle = `Setting up your Environment for ${cleanTitle}`;
      } else if (isLastChapter) {
        if (l === currentChapterLessonsCount - 1) lessonTitle = "Final Course Graduation & Next Steps";
        else if (l === 0) lessonTitle = "Introduction to the Capstone Case Study";
        else if (type === "quiz") lessonTitle = "Final Certification Examination";
        else if (type === "coding") lessonTitle = "Deploying our Project to Cloud Servers";
        else lessonTitle = "Debugging Production Deployments & Error Logging";
      } else {
        const topics = [
          "Understanding State Synchronization & Lifecycles",
          "Implementing Responsive Layout Systems",
          "Advanced Rendering Optimization Patterns",
          "Handling API Request Concurrency",
          "Securing Routes & JWT Authentication",
          "Database Schemas & Relations Mapping",
          "Creating Micro-interactions & Visual Polish",
          "User Flow Validation & Usability Testing",
          "Automating Performance Audit Routines"
        ];
        const index = (ch * 3 + l) % topics.length;
        if (l === 0) {
          lessonTitle = `Introduction to ${chapterTheme.title.replace("Foundations & ", "").replace("Mastering ", "")}`;
        } else if (type === "quiz") {
          lessonTitle = `Module ${ch + 1} Assessment Quiz`;
        } else if (type === "coding") {
          lessonTitle = `Hands-on Workshop: ${topics[index]}`;
        } else {
          lessonTitle = topics[index];
        }
      }

      // Duration: 5m to 45m
      const durationMin = 5 + ((ch * 7 + l * 13) % 40);
      totalChapterDurationMinutes += durationMin;

      let durationStr = `${durationMin}m`;
      if (durationMin >= 60) {
        durationStr = `${Math.floor(durationMin / 60)}h ${durationMin % 60}m`;
      }

      lessons.push({
        id: lessonId,
        title: lessonTitle,
        duration: durationStr,
        type,
        isPreviewable
      });
    }

    const chHrs = Math.floor(totalChapterDurationMinutes / 60);
    const chMin = totalChapterDurationMinutes % 60;
    const chapterDurationStr = chHrs > 0 ? `${chHrs}h ${chMin}m` : `${chMin}m`;

    syllabus.push({
      id: `ch-${ch + 1}`,
      title: `Chapter ${ch + 1}: ${chapterTheme.title}`,
      duration: chapterDurationStr,
      lessons
    });
  }

  return {
    syllabus,
    objectives,
    requirements,
    skillsGained
  };
}

export function getCategoryBadgeStyle(category: string): string {
  switch (category) {
    case "Web Development":
      return "bg-blue-600/90 dark:bg-blue-500/20 text-white dark:text-blue-400 border border-transparent dark:border-blue-500/20 backdrop-blur-md";
    case "Design":
      return "bg-purple-600/90 dark:bg-purple-500/20 text-white dark:text-purple-400 border border-transparent dark:border-purple-500/20 backdrop-blur-md";
    case "AI & Data Science":
      return "bg-emerald-600/90 dark:bg-emerald-500/20 text-white dark:text-emerald-400 border border-transparent dark:border-emerald-500/20 backdrop-blur-md";
    case "Mobile Apps":
      return "bg-rose-600/90 dark:bg-rose-500/20 text-white dark:text-rose-400 border border-transparent dark:border-rose-500/20 backdrop-blur-md";
    default:
      return "bg-zinc-600/90 dark:bg-zinc-500/20 text-white dark:text-zinc-400 border border-transparent dark:border-zinc-500/20 backdrop-blur-md";
  }
}

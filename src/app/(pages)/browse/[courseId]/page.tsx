"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  X,
  Share2,
  CheckCircle2,
  Award,
  BookOpen,
  Clock,
  ArrowRight,
  Lock,
  PlayCircle,
  Code,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  ChevronLeft,
  Volume2,
  Maximize2,
  Play,
  Pause,
} from "lucide-react";
import { courses } from "../courses-data";
import {
  generateDetailedCourseInfo,
  SyllabusChapter,
  SyllabusLesson,
  getCategoryBadgeStyle,
} from "../course-outline-helper";
import { useAuth, SignInButton } from "@clerk/nextjs";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isSignedIn } = useAuth();

  const courseId = params?.courseId as string;
  const course = courses.find((c) => c.id === courseId);

  const [activeTab, setActiveTab] = useState<"syllabus" | "overview">("syllabus");
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});
  const [showToast, setShowToast] = useState(false);
  const [previewLesson, setPreviewLesson] = useState<SyllabusLesson | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isEnrolledSuccess, setIsEnrolledSuccess] = useState(false);
  const [isEnrolling, setIsEnrolling] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Set default expanded chapter
  useEffect(() => {
    if (course) {
      setExpandedChapters({ "ch-1": true });
    }
  }, [course]);

  // Handle escape key to close preview modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewLesson(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!course) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-24 px-4 bg-zinc-50 dark:bg-zinc-950 text-center">
        <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-400 mb-4">
          <BookOpen className="h-12 w-12" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          Course Not Found
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mb-6">
          We couldn&apos;t find the course you were looking for. It may have been relocated or renamed.
        </p>
        <Link
          href="/browse"
          className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md cursor-pointer"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  const detailedInfo = generateDetailedCourseInfo(course);

  // Toggle chapter expansion
  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  // Expand or collapse all chapters
  const toggleAllChapters = (expand: boolean) => {
    const chaptersState: Record<string, boolean> = {};
    detailedInfo.syllabus.forEach((ch) => {
      chaptersState[ch.id] = expand;
    });
    setExpandedChapters(chaptersState);
  };



  // Handle sharing link
  const handleShare = () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    navigator.clipboard.writeText(shareUrl).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    });
  };

  // Play/pause preview video
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle enrollment
  const handleEnroll = () => {
    setIsEnrolling(true);
    setTimeout(() => {
      setIsEnrolling(false);
      setIsEnrolledSuccess(true);
    }, 1500);
  };

  const totalLessonsCount = detailedInfo.syllabus.reduce(
    (acc, ch) => acc + ch.lessons.length,
    0
  );

  return (
    <div className="flex-1 w-full bg-linear-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 transition-colors duration-500 overflow-x-hidden min-h-screen pb-16">
      {/* Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-15">
        <div className="absolute top-[-10%] right-[5%] w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Header breadcrumb bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 shrink-0">
        <button
          onClick={() => router.push("/browse")}
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors cursor-pointer group mb-6"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Catalog
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Course Core Header Hero */}
        <section className="relative rounded-3xl overflow-hidden bg-zinc-900 dark:bg-zinc-950 text-white p-8 md:p-12 shadow-xl mb-12 border border-zinc-800/40">
          <div className="absolute inset-0 bg-radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.15),transparent) pointer-events-none" />
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`px-3.5 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider ${getCategoryBadgeStyle(course.category)}`}>
                {course.category}
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-zinc-100 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider border border-white/10">
                {course.level}
              </span>
              {course.badge && (
                <span className={`px-3.5 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider ${course.badgeColor}`}>
                  {course.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              {course.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs font-semibold text-zinc-400">
              <span className="text-zinc-200">
                Created by <span className="font-bold text-white">{course.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-blue-500" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-indigo-500" />
                {totalLessonsCount} lectures
              </span>
            </div>
          </div>
        </section>

        {/* Dynamic Dual Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Main Area: Syllabus & Tabs (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Tab Controls */}
            <div className="flex border-b border-zinc-200/60 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/20 rounded-2xl p-1.5 backdrop-blur-md">
              <button
                onClick={() => setActiveTab("syllabus")}
                className={`flex-1 py-3 text-center text-sm font-extrabold rounded-xl transition-all duration-300 cursor-pointer ${
                  activeTab === "syllabus"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/15"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                Syllabus & Course Curriculum
              </button>
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex-1 py-3 text-center text-sm font-extrabold rounded-xl transition-all duration-300 cursor-pointer ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/15"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                Overview & Requirements
              </button>
            </div>

            {/* Displaying active tab details */}
            {activeTab === "syllabus" ? (
              <div className="space-y-6 animate-fade-in">
                {/* Curriculum Summary Panel */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-1">
                  <div className="flex items-center gap-4 text-xs font-bold text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1.5 shrink-0">
                      <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-500" />
                      {detailedInfo.syllabus.length} Modules
                    </span>
                    <span className="flex items-center gap-1.5 shrink-0">
                      <Clock className="h-4 w-4 text-indigo-600 dark:text-indigo-500" />
                      {course.duration} Total Duration
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleAllChapters(true)}
                      className="px-3.5 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-xl transition-colors cursor-pointer"
                    >
                      Expand All
                    </button>
                    <button
                      onClick={() => toggleAllChapters(false)}
                      className="px-3.5 py-1.5 text-xs font-bold text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/40 rounded-xl transition-colors cursor-pointer"
                    >
                      Collapse All
                    </button>
                  </div>
                </div>

                {/* Chapters Accordion list */}
                <div className="space-y-4">
                  {detailedInfo.syllabus.map((chapter) => {
                    const isExpanded = !!expandedChapters[chapter.id];
                    return (
                      <div
                        key={chapter.id}
                        className="rounded-3xl border border-zinc-150 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
                      >
                        {/* Accordion Chapter Header */}
                        <div
                          onClick={() => toggleChapter(chapter.id)}
                          className="flex items-center justify-between p-5 cursor-pointer hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all duration-250 select-none"
                        >
                          <div className="flex items-start gap-4 pr-4">
                            <div className="mt-0.5 flex-shrink-0 p-1 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 font-black text-xs w-7 h-7 flex items-center justify-center">
                              {chapter.id.split("-")[1]}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-extrabold text-sm sm:text-base text-zinc-800 dark:text-zinc-100 leading-snug">
                                {chapter.title}
                              </h4>
                              <p className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold mt-1">
                                {chapter.lessons.length} lectures • {chapter.duration}
                              </p>
                            </div>
                          </div>
                          <div className="text-zinc-400 shrink-0">
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </div>
                        </div>

                        {/* Collapsible Lessons list */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isExpanded ? "max-h-[1000px] border-t border-zinc-100 dark:border-zinc-900/80" : "max-h-0"
                          }`}
                        >
                          <div className="divide-y divide-zinc-100 dark:divide-zinc-900 bg-zinc-50/20 dark:bg-zinc-900/10">
                            {chapter.lessons.map((lesson) => {
                              let LessonIcon = PlayCircle;
                              if (lesson.type === "reading") LessonIcon = FileText;
                              if (lesson.type === "coding") LessonIcon = Code;
                              if (lesson.type === "quiz") LessonIcon = HelpCircle;

                              return (
                                <div
                                  key={lesson.id}
                                  className="group flex items-center justify-between px-6 py-4.5 hover:bg-white dark:hover:bg-zinc-900/50 transition-all duration-200"
                                >
                                  <div className="flex items-start gap-3.5 min-w-0 pr-4">
                                    <LessonIcon className="mt-0.5 h-4.5 w-4.5 text-zinc-400 dark:text-zinc-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 shrink-0 transition-colors" />
                                    <div className="min-w-0">
                                      <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors truncate">
                                        {lesson.title}
                                      </p>
                                      <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-semibold capitalize">
                                          {lesson.type}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-4 shrink-0">
                                    {lesson.isPreviewable ? (
                                      <button
                                        onClick={() => setPreviewLesson(lesson)}
                                        className="px-3 py-1.5 text-[10px] font-extrabold text-blue-600 bg-blue-50 hover:bg-blue-100 dark:text-blue-400 dark:bg-blue-950/40 dark:hover:bg-blue-950/80 border border-blue-200/40 dark:border-blue-800/40 rounded-lg transition-all cursor-pointer flex items-center gap-1"
                                      >
                                        <span>Preview</span>
                                        <ExternalLink className="h-2.5 w-2.5" />
                                      </button>
                                    ) : (
                                      <Lock className="h-3.5 w-3.5 text-zinc-300 dark:text-zinc-600 shrink-0" />
                                    )}
                                    <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                                      {lesson.duration}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-fade-in">
                {/* Course Overview */}
                <div className="space-y-3">
                  <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-wider flex items-center gap-2">
                    <Award className="h-4 w-4 text-amber-500" />
                    Course Description
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                    {course.description} This comprehensive guide provides step-by-step
                    interactive tutorials, full project files, and advanced real-world
                    architectures that allow you to immediately build skills. Designed by
                    industry professionals to guarantee absolute career growth.
                  </p>
                </div>

                {/* What You'll Learn */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-500" />
                    What You&apos;ll Learn
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {detailedInfo.objectives.map((obj, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-2xl border border-zinc-100/60 dark:border-zinc-800/50 bg-white dark:bg-zinc-950/30 shadow-xs"
                      >
                        <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold leading-relaxed text-zinc-600 dark:text-zinc-300">
                          {obj}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Acquired */}
                <div className="space-y-3">
                  <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                    Skills You&apos;ll Acquire
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {detailedInfo.skillsGained.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-100/30 dark:border-indigo-900/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-3.5">
                  <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                    Prerequisites
                  </h3>
                  <ul className="space-y-3">
                    {detailedInfo.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300 font-medium">
                        <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0 mt-2" />
                        <span className="leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-px bg-zinc-200/60 dark:bg-zinc-800/80" />

                {/* Professional Instructor section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                    Meet the Instructor
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-6 items-start p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-150 dark:border-zinc-900 shadow-xs">
                    {/* Instructor Avatar with initials */}
                    <div className="relative shrink-0 w-20 h-20 rounded-2xl bg-linear-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-black shadow-md shadow-blue-500/15">
                      {course.author
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-extrabold text-zinc-900 dark:text-zinc-100 text-base">
                          {course.author}
                        </h4>
                        <p className="text-xs text-zinc-400 dark:text-zinc-500 font-bold mt-0.5">
                          Senior Engineering Mentor & Lead Content Creator
                        </p>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                        With over 12 years of core development experience scaling modern web
                        architectures, {course.author} has trained over 150k engineers
                        globally. Focusing on clean code structures and visually elite systems design.
                      </p>
                      {/* Instructor statistics */}
                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-zinc-400 dark:text-zinc-500 pt-1">
                        <span>★ 4.9 Instructor Rating</span>
                        <span>• 14,230 Reviews</span>
                        <span>• 84,100 Students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Area: Sticky Purchase Specification Card (4 Columns) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="rounded-3xl border border-zinc-200/60 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 p-6 shadow-xl flex flex-col relative overflow-hidden">
              {/* Cover visual representation */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-zinc-900 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 text-white text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                  <PlayCircle className="h-3.5 w-3.5 text-blue-500" />
                  Full Lifetime Access
                </span>
              </div>

              {/* Core pricing and actions */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-zinc-900 dark:text-white">
                    {course.price}
                  </span>
                  <span className="text-xs text-zinc-400 line-through font-bold">
                    $199.99
                  </span>
                  <span className="text-xs text-rose-500 font-extrabold bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded-lg">
                    80% OFF
                  </span>
                </div>

                {/* Enrollment confirmation handler */}
                <div className="space-y-3 pt-2">
                  {isEnrolledSuccess ? (
                    <div className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-sm font-bold text-white bg-emerald-600 dark:bg-emerald-500 shadow-lg shadow-emerald-500/10 transition-all duration-300">
                      <CheckCircle2 className="h-5 w-5 animate-pulse" />
                      Enrolled Successfully!
                    </div>
                  ) : isSignedIn ? (
                    <button
                      onClick={handleEnroll}
                      disabled={isEnrolling}
                      className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-md shadow-blue-500/10 hover:shadow-lg active:scale-[0.98] transition-all duration-300 cursor-pointer disabled:opacity-50"
                    >
                      {isEnrolling ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        <>
                          Enroll in Course
                          <ArrowRight className="h-4.5 w-4.5" />
                        </>
                      )}
                    </button>
                  ) : (
                    <SignInButton mode="modal">
                      <button className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-md shadow-blue-500/10 hover:shadow-lg active:scale-[0.98] transition-all duration-300 cursor-pointer">
                        Sign In & Enroll
                        <ArrowRight className="h-4.5 w-4.5" />
                      </button>
                    </SignInButton>
                  )}

                  {/* Share button */}
                  <button
                    onClick={handleShare}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer"
                  >
                    <Share2 className="h-4.5 w-4.5" />
                    Share with Friends
                  </button>
                </div>
              </div>

              {/* Details specifications list */}
              <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6 mt-6 space-y-4">
                <h4 className="text-xs font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                  This Course Includes:
                </h4>
                <div className="space-y-3.5 text-xs font-bold text-zinc-600 dark:text-zinc-300">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-zinc-500">
                      <Clock className="h-4 w-4 text-blue-500" />
                      Total Hours
                    </span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-zinc-500">
                      <BookOpen className="h-4 w-4 text-indigo-500" />
                      Total Lectures
                    </span>
                    <span>{totalLessonsCount} lectures</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-zinc-500">
                      <Award className="h-4 w-4 text-emerald-500" />
                      Certificate
                    </span>
                    <span>Accredited</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-zinc-500">
                      <Lock className="h-4 w-4 text-rose-500" />
                      Support
                    </span>
                    <span>1-on-1 Q&A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy notification link toast */}
      {showToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-4.5 py-3 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-lg flex items-center gap-2 text-xs font-bold animate-fade-in">
          <Check className="h-4 w-4 text-emerald-500 shrink-0" />
          Course link copied to clipboard!
        </div>
      )}

      {/* Video Lecture Preview Overlay Modal */}
      {previewLesson && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div
            onClick={() => setPreviewLesson(null)}
            className="absolute inset-0 bg-black/85 backdrop-blur-md animate-fade-in cursor-pointer"
          />

          <div className="relative bg-zinc-950 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-zinc-800/60 flex flex-col z-10 animate-fade-in">
            {/* Player Title header */}
            <div className="flex items-center justify-between px-5 py-3 bg-zinc-900/50 border-b border-zinc-800/40 text-white shrink-0">
              <div className="min-w-0">
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-blue-500 block">
                  Free Lecture Preview
                </span>
                <span className="text-xs font-extrabold block truncate">
                  {previewLesson.title}
                </span>
              </div>
              <button
                onClick={() => setPreviewLesson(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all duration-200 cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Video Canvas Container */}
            <div className="relative aspect-video bg-black w-full flex items-center justify-center overflow-hidden select-none group">
              <video
                ref={videoRef}
                src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-38318-large.mp4"
                loop
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover opacity-90"
              />

              {/* Interactive Player controls overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 pointer-events-none">
                <div className="flex justify-end p-2">
                  <span className="px-2.5 py-1 text-[8px] uppercase tracking-widest font-black text-white bg-red-600/80 rounded-md backdrop-blur-sm animate-pulse">
                    Live Demo
                  </span>
                </div>

                <div className="space-y-3 pointer-events-auto">
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                    <div className="w-[35%] h-full bg-blue-500 rounded-full" />
                  </div>

                  <div className="flex items-center justify-between text-white text-xs font-bold">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={togglePlay}
                        className="p-1 hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4 fill-white" />
                        ) : (
                          <Play className="h-4 w-4 fill-white" />
                        )}
                      </button>
                      <Volume2 className="h-4 w-4 text-zinc-300 hover:text-white" />
                      <span className="text-[10px] font-semibold text-zinc-300">
                        02:14 / {previewLesson.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] bg-white/10 px-2 py-1 rounded font-bold">
                        1080p
                      </span>
                      <Maximize2 className="h-4 w-4 text-zinc-300" />
                    </div>
                  </div>
                </div>
              </div>

              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute p-5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl transition-all scale-100 hover:scale-105 cursor-pointer z-20 flex items-center justify-center"
                >
                  <Play className="h-6 w-6 fill-white ml-0.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

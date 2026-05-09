"use client";

import Link from "next/link";
import {
  BookOpen,
  Trophy,
  Activity,
  Flame,
  ArrowRight,
  Sparkles,
  Compass,
  Play,
  Heart,
} from "lucide-react";
import { SignInButton, useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex-1 py-10 px-8 max-w-7xl mx-auto w-full">
      {/* Header Banner */}
      <header className="mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            {isSignedIn ? (
              <>
                <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                  Welcome back, Learner!{" "}
                  <span className="animate-bounce">👋</span>
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                  Let&apos;s check your learning progress and resume your courses
                  today.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                  Welcome to Modern LMS!{" "}
                  <Sparkles className="h-6 w-6 text-blue-500" />
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                  Your portal to world-class learning and high-impact skills.
                </p>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/browse"
              className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/10 cursor-pointer flex items-center gap-1.5 group"
            >
              Explore Catalog
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </header>

      {/* Conditional Dashboard Stats for Logged In Students */}
      {isSignedIn && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stat 1 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 flex items-center gap-5 shadow-sm">
            <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-zinc-950 dark:text-zinc-50 block">
                3
              </span>
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Active Courses
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 flex items-center gap-5 shadow-sm">
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-zinc-950 dark:text-zinc-50 block">
                12
              </span>
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Certificates
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 flex items-center gap-5 shadow-sm">
            <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-zinc-950 dark:text-zinc-50 block">
                45.8h
              </span>
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Time Watched
              </span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 flex items-center gap-5 shadow-sm">
            <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-zinc-950 dark:text-zinc-50 block">
                8 Days
              </span>
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Study Streak
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column (Main Section) */}
        <section className="lg:col-span-2 space-y-10">
          {/* Resume Learning Section */}
          {isSignedIn && (
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-5 flex items-center gap-2">
                <Play className="h-5 w-5 text-blue-600 dark:text-blue-500 fill-blue-600 dark:fill-blue-500" />
                Resume Learning
              </h2>
              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 shadow-sm flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition-all duration-300">
                <div className="relative aspect-video w-full sm:w-44 rounded-2xl overflow-hidden shrink-0 bg-zinc-100 dark:bg-zinc-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
                    alt="Current course"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 w-full min-w-0">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                    Lesson 12 of 48
                  </span>
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 truncate mb-2">
                    Full Stack React & Next.js Masterclass
                  </h3>
                  <div className="flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 mb-3">
                    <span>Course Progress: 25%</span>
                    <span>1h 15m remaining</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden mb-4">
                    <div className="w-1/4 h-full bg-blue-600 rounded-full" />
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 text-white dark:text-zinc-200 text-xs font-bold transition-all duration-300 cursor-pointer">
                    Continue Lesson
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Hero Promo Box for Guest Users */}
          {!isSignedIn && (
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-md">
                <div className="p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-fit">
                  <Compass className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  New to Modern LMS?
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  Join millions of professionals building modern tech, creative
                  designs, and business workflows. Sign up now to customize your
                  dashboard and track your certifications.
                </p>
                <SignInButton mode="modal">
                  <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/10 cursor-pointer transition-all duration-300">
                    Create Free Account
                  </button>
                </SignInButton>
              </div>
              <div className="w-full md:w-56 shrink-0 aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/10">
                <Sparkles className="h-20 w-20 animate-pulse text-blue-100" />
              </div>
            </div>
          )}

          {/* Popular Topics Carousel / Section */}
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-5">
              Popular Learning Tracks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 shadow-sm group hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col h-full">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-1">
                  Pathways
                </span>
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-50 mb-2">
                  Professional Frontend Engineer
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mb-6">
                  Master core structures including advanced HTML5, modern
                  vanilla CSS layouts, component libraries, and TypeScript
                  patterns.
                </p>
                <Link
                  href="/browse"
                  className="mt-auto text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:underline cursor-pointer"
                >
                  Explore pathway <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 shadow-sm group hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col h-full">
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest block mb-1">
                  Pathways
                </span>
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-50 mb-2">
                  UI/UX & Design Architecture
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mb-6">
                  Learn figma styling, modern color theory, premium spatial
                  grids, micro-interactions, and visual layouts.
                </p>
                <Link
                  href="/browse"
                  className="mt-auto text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:underline cursor-pointer"
                >
                  Explore pathway <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column (Sidebar Extras) */}
        <section className="space-y-8">
          {/* Active Learning Community Block */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 shadow-sm">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
              <Heart className="h-4.5 w-4.5 text-rose-500 fill-rose-500" />
              Community Achievements
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  🏆
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    Weekly Leaderboard
                  </p>
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
                    Leader board reset in 2 days. 2,342 students competing!
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  🔥
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    Top Trending Track
                  </p>
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
                    Next.js 15 Masterclass is up 23% in student enrollment this
                    week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Help / Upgrade Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-zinc-900 to-black text-white shadow-lg shadow-black/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-2">
              Premium Upgrade
            </span>
            <h3 className="font-bold text-base mb-2">
              Unlock Professional Certificate Paths
            </h3>
            <p className="text-zinc-400 text-xs leading-relaxed mb-5">
              Subscribe to standard premium access and enjoy offline support,
              live 1-on-1 mentorship, and accredited certifications.
            </p>
            <Link
              href="/upgrade"
              className="w-full flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-zinc-950 hover:bg-zinc-100 transition-all duration-300 shadow-md cursor-pointer"
            >
              Learn More & Upgrade
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

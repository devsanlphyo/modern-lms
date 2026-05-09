// What this page should be
// There should be a hero banner with a navigation to '/browse' to allow users to browse the courses
// There should be a hero image

"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Compass, BookOpen } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex-1 w-full relative bg-linear-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50 dark:opacity-30">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-400/10 dark:bg-blue-500/10 blur-3xl" />
        <div className="absolute top-[20%] right-[5%] w-[600px] h-[600px] rounded-full bg-indigo-400/10 dark:bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center py-12 px-6 md:px-12 max-w-7xl mx-auto w-full min-h-[calc(100vh-80px)]">
        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left: Content Area */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Next-Gen Learning Platform
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Master In-Demand Skills. <br />
              <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Shape Your Future.
              </span>
            </h1>

            <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl">
              Experience a beautiful, modern learning management system. Track
              your progress, earn accredited certifications, and learn from top
              industry experts.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto pt-2">
              <Link
                href="/browse"
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <Compass className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Browse Courses
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {!isSignedIn && (
                <Link
                  href="/sign-up"
                  className="px-8 py-4 rounded-2xl bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 font-bold text-base transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Join for Free
                </Link>
              )}
            </div>

            {/* Micro stats banner */}
            <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800/60 w-full grid grid-cols-3 gap-6">
              <div>
                <span className="block text-2xl font-black text-zinc-900 dark:text-white">
                  10k+
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  Students
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black text-zinc-900 dark:text-white">
                  200+
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  Expert Mentors
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black text-zinc-900 dark:text-white">
                  99%
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  Success Rate
                </span>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="lg:col-span-5 relative w-full aspect-square md:aspect-4/3 lg:aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/5 group">
            {/* Subtle glowing background orbs */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              alt="Modern Digital Learning Environment"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 rounded-3xl relative"
            />

            {/* Overlay gradient tint */}
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-indigo-500/10 mix-blend-overlay pointer-events-none" />

            {/* Decorative floating widget card */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-white/20 dark:border-zinc-800/30 shadow-lg flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0 shadow-md">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                  Interactive Learning Guides
                </p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">
                  Live interactive coding playgrounds & figma prototypes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

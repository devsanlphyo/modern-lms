"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Clock,
  BookOpen,
  Star,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

// Mock categories
const categories = [
  "All Courses",
  "Web Development",
  "Design",
  "AI & Data Science",
  "Mobile Apps",
];

// Mock courses data
const courses = [
  {
    id: "1",
    title: "Full Stack React & Next.js Masterclass",
    description:
      "Build modern, premium web applications with Next.js 15, React 19, TypeScript, and Tailwind CSS from scratch.",
    category: "Web Development",
    author: "Alex Rivers",
    rating: 4.9,
    reviewsCount: 1240,
    duration: "24 hours",
    lessons: 48,
    level: "Intermediate",
    price: "$49.99",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    badge: "Bestseller",
    badgeColor: "bg-amber-500 text-white",
  },
  {
    id: "2",
    title: "UI/UX Design Systems with Figma",
    description:
      "Design comprehensive design systems, responsive components, and stunning interactive prototypes in Figma.",
    category: "Design",
    author: "Sophia Sterling",
    rating: 4.8,
    reviewsCount: 852,
    duration: "16 hours",
    lessons: 32,
    level: "All Levels",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=600&q=80",
    badge: "Trending",
    badgeColor: "bg-purple-500 text-white",
  },
  {
    id: "3",
    title: "Artificial Intelligence & Deep Learning",
    description:
      "An intuitive introduction to neural networks, machine learning models, NLP, and computer vision using Python.",
    category: "AI & Data Science",
    author: "Dr. Ethan Vance",
    rating: 5.0,
    reviewsCount: 412,
    duration: "32 hours",
    lessons: 60,
    level: "Advanced",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
    badge: "New",
    badgeColor: "bg-emerald-500 text-white",
  },
  {
    id: "4",
    title: "iOS 18 Swift & SwiftUI Bootcamp",
    description:
      "Learn to build immersive mobile apps for iPhone, iPad, and Mac using Swift, SwiftUI, and modern state management.",
    category: "Mobile Apps",
    author: "Liam Cross",
    rating: 4.7,
    reviewsCount: 618,
    duration: "20 hours",
    lessons: 40,
    level: "Beginner",
    price: "$44.99",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    badge: "Popular",
    badgeColor: "bg-blue-500 text-white",
  },
  {
    id: "5",
    title: "Advanced Tailwind CSS v4 & Styling Systems",
    description:
      "Unlock the power of Tailwind v4's high-performance compilation, native cascades, custom themes, and animations.",
    category: "Web Development",
    author: "Sarah Jenkins",
    rating: 4.9,
    reviewsCount: 310,
    duration: "12 hours",
    lessons: 24,
    level: "Advanced",
    price: "$29.99",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    badge: "Hot",
    badgeColor: "bg-rose-500 text-white",
  },
  {
    id: "6",
    title: "Mastering Creative Copywriting & Content",
    description:
      "Craft high-converting headlines, copy that drives user engagement, and storytelling techniques for growth.",
    category: "Design",
    author: "Diana Prince",
    rating: 4.6,
    reviewsCount: 198,
    duration: "8 hours",
    lessons: 15,
    level: "Beginner",
    price: "$19.99",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    badge: "",
    badgeColor: "",
  },
];

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All Courses" ||
      course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 py-10 px-8 max-w-7xl mx-auto w-full">
      {/* Premium Hero Banner */}
      <section className="relative rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 via-indigo-600 to-indigo-700 text-white p-10 md:p-14 shadow-xl shadow-blue-500/10 mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-indigo-500/30 blur-3xl pointer-events-none" />

        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-yellow-300 fill-yellow-300" />
            Discover New Skills
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-[1.15]">
            Unlock Your Potential. Learn from the Best.
          </h1>
          <p className="text-blue-100 text-base md:text-lg font-medium max-w-xl leading-relaxed mb-8">
            Explore premium courses crafted by world-class industry
            professionals. Upgrade your career today.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-white text-blue-600 hover:bg-zinc-100 font-bold text-sm shadow-md shadow-black/10 transition-all duration-300 cursor-pointer flex items-center gap-2 group">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/15 border border-white/20 font-bold text-sm backdrop-blur-sm transition-all duration-300 cursor-pointer">
              View Analytics
            </button>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          {/* Header text */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2.5">
              <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-500" />
              Explore Catalog
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
              Showing {filteredCourses.length} premium LMS courses
            </p>
          </div>

          {/* Search Box */}
          <div className="relative max-w-md w-full md:w-80">
            <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search courses, mentors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Categories Carousel / Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none -mx-2 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer shrink-0 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/15"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <article
              key={course.id}
              className="group flex flex-col h-full rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-black/20 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Course Banner Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Category Badge & Special Badge */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-bold uppercase tracking-wider shadow-sm ${course.badgeColor}`}
                    >
                      {course.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Course Details */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 mb-2">
                  Instructed by{" "}
                  <span className="text-zinc-700 dark:text-zinc-300 font-bold">
                    {course.author}
                  </span>
                </p>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 leading-snug mb-3">
                  {course.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-6">
                  {course.description}
                </p>

                <div className="mt-auto space-y-4">
                  {/* Rating & Metadata */}
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400 shrink-0" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">
                        {course.rating.toFixed(1)}
                      </span>
                      <span className="text-zinc-400 dark:text-zinc-500">
                        ({course.reviewsCount})
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 shrink-0">
                        <Clock className="h-3.5 w-3.5 text-zinc-400" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <BookOpen className="h-3.5 w-3.5 text-zinc-400" />
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>
                  </div>

                  {/* Purchase/Action row */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500 block">
                        Enrollment Price
                      </span>
                      <span className="text-xl font-black text-zinc-900 dark:text-white">
                        {course.price}
                      </span>
                    </div>
                    <button className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 text-white dark:text-zinc-100 font-bold text-sm transition-all duration-300 cursor-pointer hover:shadow-md">
                      Enroll Course
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center py-20 px-4 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center">
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 mb-4">
            <Search className="h-10 w-10" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-1">
            No courses found
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mb-6">
            We couldn&apos;t find any matches for &quot;{searchQuery}&quot;. Try
            resetting your filters or modifying your search terms.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All Courses");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 cursor-pointer"
          >
            Clear Filters
          </button>
        </section>
      )}
    </div>
  );
}

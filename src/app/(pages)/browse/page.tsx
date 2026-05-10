"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Clock,
  BookOpen,
  Star,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { courses, categories, Course } from "./courses-data";
import { getCategoryBadgeStyle } from "./course-outline-helper";

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Backward compatibility: If ?course=X query parameter is found, automatically redirect to dedicated course page /browse/X
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const courseId = params.get("course");
      if (courseId) {
        window.location.href = `/browse/${courseId}`;
      }
    }
  }, []);

  const COURSES_PER_PAGE = 9;

  // Debounce search query
  useEffect(() => {
    if (searchInputValue !== searchQuery) {
      setIsSearching(true);
    }
    const timer = setTimeout(() => {
      setSearchQuery(searchInputValue);
      setIsSearching(false);
      setCurrentPage(1); // Reset page to 1 when search query changes
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timer);
  }, [searchInputValue, searchQuery]);

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset page to 1 when category changes
  };

  // Filter courses based on category and search query
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

  // Pagination computations
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + COURSES_PER_PAGE
  );

  // Ensure current page is valid when filters reduce total pages
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [filteredCourses.length, totalPages, currentPage]);

  // Generate page numbers with ellipses for premium pagination UX
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex-1 w-full relative bg-linear-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 transition-colors duration-500 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-20">
        <div className="absolute top-[-15%] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative py-10 px-8 max-w-7xl mx-auto w-full">
        {/* Premium Hero Banner */}
        <section className="relative rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 via-indigo-600 to-indigo-700 text-white p-10 md:p-14 shadow-xl shadow-blue-500/10 mb-12 animate-fade-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-indigo-500/30 blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative">
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
              {isSearching ? (
                <Loader2 className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-blue-500 dark:text-blue-400 animate-spin" />
              ) : (
                <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-zinc-400 dark:text-zinc-500" />
              )}
              <input
                type="text"
                placeholder="Search courses, mentors..."
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
              />
            </div>
          </div>

          {/* Categories Carousel / Pill Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none -mx-2 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
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
        {paginatedCourses.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedCourses.map((course) => (
              <Link
                href={`/browse/${course.id}`}
                key={course.id}
                className="group flex flex-col h-full rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-black/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Course Banner Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                </div>

                {/* Course Details */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category, Level & Special Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3.5">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider ${getCategoryBadgeStyle(course.category)}`}>
                      {course.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50 text-[10px] font-extrabold uppercase tracking-wider">
                      {course.level}
                    </span>
                    {course.badge && (
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider ${course.badgeColor}`}>
                        {course.badge}
                      </span>
                    )}
                  </div>
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
                      <span className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-extrabold text-sm transition-all duration-300 shadow-sm shadow-blue-500/10 hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98]">
                        Enroll Course
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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
                setSearchInputValue("");
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 cursor-pointer"
            >
              Clear Filters
            </button>
          </section>
        )}

        {/* Premium Pagination Controls */}
        {filteredCourses.length > COURSES_PER_PAGE && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-100 dark:border-zinc-800/80 pt-8 animate-fade-in">
            {/* Meta text */}
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              Showing <span className="font-bold text-zinc-900 dark:text-zinc-100">{startIndex + 1}</span> to{" "}
              <span className="font-bold text-zinc-900 dark:text-zinc-100">
                {Math.min(startIndex + COURSES_PER_PAGE, filteredCourses.length)}
              </span>{" "}
              of <span className="font-bold text-zinc-900 dark:text-zinc-100">{filteredCourses.length}</span> courses
            </p>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1.5">
              {/* Prev Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 disabled:opacity-40 disabled:pointer-events-none transition-all duration-300 cursor-pointer flex items-center justify-center shadow-xs"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </button>

              {/* Page Numbers */}
              {getPageNumbers().map((page, idx) => {
                if (page === "...") {
                  return (
                    <span
                      key={`ellipsis-${idx}`}
                      className="px-2.5 py-1.5 text-sm text-zinc-400 dark:text-zinc-500 font-semibold"
                    >
                      ...
                    </span>
                  );
                }
                const pageNum = page as number;
                return (
                  <button
                    key={`page-${pageNum}`}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer min-w-[42px] flex items-center justify-center ${
                      currentPage === pageNum
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100 shadow-xs"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 disabled:opacity-40 disabled:pointer-events-none transition-all duration-300 cursor-pointer flex items-center justify-center shadow-xs"
                aria-label="Next page"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

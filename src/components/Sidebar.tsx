"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  LayoutDashboard,
  Zap,
  Mail,
  GraduationCap,
  LogIn,
} from "lucide-react";
import { UserButton, SignInButton, useAuth } from "@clerk/nextjs";

// Sidebar Structure (top -> down)
// Logo (Modern LMS) (text)
// navigations with lucide icons: browse, dashboard, upgrade, newsletter

// Requirements
// 1. Navigations should be structured in object format:
// {name: browse, icons: [LucideIcon], path: '/browse'}
// Note: browse path should accessible in public
//
// 2. There should be visual indicators for hovering on navigation, activating navigation

// Sidebar visual general guideline:
// 1. Logo is on the top
// 2. Navigations is under the logo
// 3. At the right side, sidebar should have a visual line to distinguish with the main content

export default function Sidebar() {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  const navigation = [
    {
      name: "Browse",
      icon: Compass,
      icons: [Compass],
      path: "/browse",
    },
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      icons: [LayoutDashboard],
      path: "/dashboard",
    },
    {
      name: "Upgrade",
      icon: Zap,
      icons: [Zap],
      path: "/upgrade",
    },
    {
      name: "Newsletter",
      icon: Mail,
      icons: [Mail],
      path: "/newsletter",
    },
  ];

  return (
    <aside className="w-64 h-screen sticky top-0 flex flex-col bg-white dark:bg-zinc-900 border-r border-zinc-200/80 dark:border-zinc-800/80 shrink-0 transition-all duration-300 z-30">
      {/* Logo Section */}
      <div className="h-20 flex items-center px-6 border-b border-zinc-100 dark:border-zinc-800/60">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-blue-600 dark:bg-blue-500 text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-all duration-300">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="font-extrabold text-lg tracking-tight bg-linear-to-r from-zinc-900 to-zinc-700 dark:from-zinc-50 dark:to-zinc-300 bg-clip-text text-transparent">
            Modern <span className="text-blue-600 dark:text-blue-500">LMS</span>
          </span>
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto">
        <p className="px-4 text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
          Menu
        </p>
        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.path ||
              (item.path !== "/" && pathname?.startsWith(item.path));

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group relative ${
                  isActive
                    ? "bg-blue-50/80 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
                    : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/30 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r-md bg-blue-600 dark:bg-blue-500" />
                )}

                <Icon
                  className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 shrink-0 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                  }`}
                />

                <span className="capitalize">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User Profile Footer Section */}
      <div className="p-4 border-t border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/50">
        {isSignedIn ? (
          <div className="flex items-center gap-3 px-2 py-1.5">
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "h-9 w-9 border border-zinc-200 dark:border-zinc-700",
                },
              }}
            />
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 truncate">
                My Profile
              </span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500 truncate">
                Signed In
              </span>
            </div>
          </div>
        ) : (
          <SignInButton mode="modal">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 shadow-sm shadow-blue-500/10 cursor-pointer">
              <LogIn className="h-4 w-4" />
              Sign In
            </button>
          </SignInButton>
        )}
      </div>
    </aside>
  );
}

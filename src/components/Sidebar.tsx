"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Compass,
  LayoutDashboard,
  Zap,
  Mail,
  GraduationCap,
  LogIn,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import { UserButton, SignInButton, useAuth } from "@clerk/nextjs";

export default function Sidebar() {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <aside className="w-64 h-screen sticky top-0 flex flex-col bg-white dark:bg-zinc-900 border-r border-zinc-200/80 dark:border-zinc-800/80 shrink-0 transition-all duration-300 z-40">
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
      <div className="p-4 border-t border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col gap-4">
        {/* Theme Toggler */}
        <div className="flex items-center justify-between px-2 py-0.5">
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            Theme
          </span>
          {!mounted ? (
            <div className="h-8 w-24 bg-zinc-100/50 dark:bg-zinc-800/20 rounded-lg animate-pulse" />
          ) : (
            <div className="flex items-center gap-0.5 p-0.5 bg-zinc-100/80 dark:bg-zinc-800/50 rounded-lg border border-zinc-200/30 dark:border-zinc-800/40 shadow-2xs">
              <button
                onClick={() => setTheme("light")}
                title="Light mode"
                className={`p-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                  theme === "light"
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs border border-zinc-200/30 dark:border-zinc-700/30"
                    : "text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/20 dark:hover:bg-zinc-800/20"
                }`}
              >
                <Sun className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setTheme("dark")}
                title="Dark mode"
                className={`p-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                  theme === "dark"
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs border border-zinc-200/30 dark:border-zinc-700/30"
                    : "text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/20 dark:hover:bg-zinc-800/20"
                }`}
              >
                <Moon className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setTheme("system")}
                title="System preference"
                className={`p-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                  theme === "system"
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs border border-zinc-200/30 dark:border-zinc-700/30"
                    : "text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/20 dark:hover:bg-zinc-800/20"
                }`}
              >
                <Monitor className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Subtle Divider */}
        <div className="h-px bg-zinc-200/20 dark:bg-zinc-800/40" />

        {/* User Button or Sign In Button */}
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

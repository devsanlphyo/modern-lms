"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  // Capture coordinates for the 3D Parallax Space drift
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    // Compute offset ratios from the center of the viewport
    const x = (clientX - window.innerWidth / 2) * 0.04;
    const y = (clientY - window.innerHeight / 2) * 0.04;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    // Smoothly ease back to center equilibrium when mouse exits
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex-1 w-full bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-center py-16 px-6 md:px-12 lg:px-16 transition-colors duration-500 overflow-y-auto select-none min-h-[calc(100vh-80px)] relative"
    >
      
      {/* Custom Keyframe Styles */}
      <style>{`
        @keyframes cosmic-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(2deg); }
        }
        @keyframes slow-drift-left {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-8px, 10px) rotate(-1deg); }
        }
        @keyframes slow-drift-right {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(10px, -6px) rotate(1deg); }
        }
        @keyframes orbit-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-cosmic-float {
          animation: cosmic-float 6s ease-in-out infinite;
        }
        .animate-drift-left {
          animation: slow-drift-left 10s ease-in-out infinite;
        }
        .animate-drift-right {
          animation: slow-drift-right 12s ease-in-out infinite;
        }
        .animate-orbit-slow {
          animation: orbit-slow 50s linear infinite;
        }
      `}</style>

      {/* BACKGROUND DEPTH LAYERS (Deep Parallax Space Nebulae - Theme Responsive) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        
        {/* Layer 1: Two-Tone Nebula Back-Glow (Pink/Purple on top-right, blue on bottom-left) */}
        <div 
          className="absolute top-[15%] right-[5%] md:right-[12%] w-[480px] h-[480px] rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl opacity-60 dark:opacity-60"
          style={{
            transform: `translate(${coords.x * -0.5}px, ${coords.y * -0.5}px)`,
            transition: "transform 1s cubic-bezier(0.25, 1, 0.5, 1)"
          }}
        />
        <div 
          className="absolute top-[25%] right-[10%] md:right-[16%] w-[420px] h-[420px] rounded-full bg-pink-400/10 dark:bg-pink-600/10 blur-3xl opacity-50 dark:opacity-50 animate-pulse"
          style={{
            transform: `translate(${coords.x * -0.6}px, ${coords.y * -0.6}px)`,
            transition: "transform 1.1s cubic-bezier(0.25, 1, 0.5, 1)",
            animationDuration: '9s'
          }}
        />
        <div 
          className="absolute bottom-[15%] right-[15%] md:right-[20%] w-[380px] h-[380px] rounded-full bg-blue-300/10 dark:bg-blue-600/15 blur-3xl opacity-75 dark:opacity-70"
          style={{
            transform: `translate(${coords.x * -0.4}px, ${coords.y * -0.4}px)`,
            transition: "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)"
          }}
        />

        {/* Layer 2: Cosmic Dust & Stars (Twinkling - Responsive Colors) */}
        <div className="absolute top-[15%] left-[25%] w-1.5 h-1.5 bg-zinc-300 dark:bg-white rounded-full opacity-60 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[35%] left-[45%] w-1.5 h-1.5 bg-blue-300 dark:bg-blue-400 rounded-full opacity-40 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[75%] left-[20%] w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-200 rounded-full opacity-50" />
        <div className="absolute top-[80%] right-[38%] w-1.5 h-1.5 bg-purple-300 dark:bg-purple-400 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      {/* Main Grid Wrapper */}
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Space-Age Editorial Typography */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 w-full max-w-md mx-auto lg:mx-0">
          
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-widest text-zinc-950 dark:text-white leading-none font-sans">
              404-error
            </h1>
            <h2 className="text-lg sm:text-2xl font-bold tracking-[0.25em] text-zinc-800 dark:text-zinc-200 uppercase">
              PAGE NOT FOUND
            </h2>
          </div>

          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm">
            Your search has ventured beyond the known universe.
          </p>

          <div className="pt-2 w-full sm:w-auto">
            <Link
              href="/browse"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-103 bg-white dark:bg-transparent shadow-xs hover:shadow-md dark:shadow-none cursor-pointer group w-full sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back To Browse
            </Link>
          </div>
        </div>

        {/* Right Side: Floating Interactive Astronaut (Tilted reading back, matching image) */}
        <div 
          className="lg:col-span-6 w-full flex items-center justify-center relative"
          style={{
            transform: `translate(${coords.x * 0.8}px, ${coords.y * 0.8}px)`, // moves with cursor for foreground parallax
            transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
          }}
        >
          
          {/* Main Zero-Gravity Floating Frame */}
          <div className="relative w-80 h-80 sm:w-[380px] sm:h-[380px] animate-cosmic-float">
            
            {/* Vector Illustration of Reading Astronaut */}
            <svg 
              viewBox="0 0 300 300" 
              className="w-full h-full drop-shadow-[0_15px_45px_rgba(139,92,246,0.15)] dark:drop-shadow-[0_15px_45px_rgba(139,92,246,0.25)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Visor Gradient reflection */}
                <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="40%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>
                {/* Two-tone glowing nebula backdrop matching the reference image */}
                <radialGradient id="nebulaGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background ambient gradient orb */}
              <circle cx="150" cy="150" r="115" fill="url(#nebulaGlow)" className="animate-pulse" style={{ animationDuration: '4s' }} />

              {/* Orbiting Cosmic Stones & Dust particles */}
              <g className="animate-orbit-slow origin-center">
                {/* Cosmic rock 1 */}
                <path d="M 45,95 Q 40,90 48,88 Q 55,93 45,95 Z" fill="#94a3b8" dark-fill="#475569" opacity="0.6" />
                {/* Cosmic rock 2 */}
                <path d="M 250,190 Q 242,185 248,180 Q 255,185 250,190 Z" fill="#64748b" dark-fill="#334155" opacity="0.6" />
                {/* Soft space dust star */}
                <circle cx="230" cy="110" r="1.5" fill="#cbd5e1" dark-fill="#ffffff" opacity="0.7" />
                <circle cx="70" cy="210" r="2" fill="#cbd5e1" dark-fill="#ffffff" opacity="0.5" />
              </g>

              {/* ======================================================= */}
              {/* COZY FLOATING ASTRONAUT (Tilted Back, Reading Book)     */}
              {/* ======================================================= */}
              {/* Tilted clockwise around center for horizontal space drift */}
              <g transform="rotate(-15 150 150)">
                
                {/* Suit shadow base */}
                <ellipse cx="148" cy="160" rx="36" ry="46" fill="#0f172a" opacity="0.1" />

                {/* Torso Suit body */}
                <path d="M 115,140 Q 110,180 145,195 Q 180,180 175,140 Z" fill="#f8fafc" stroke="#e2e8f0" dark-stroke="#cbd5e1" strokeWidth="2" />

                {/* Left Leg (relaxed drift downwards) */}
                <path d="M 125,185 Q 110,205 115,230 C 120,240 135,240 135,225 Q 135,205 138,190 Z" fill="#f8fafc" stroke="#e2e8f0" dark-stroke="#cbd5e1" strokeWidth="2" />
                {/* Right Leg (relaxed drift downwards) */}
                <path d="M 162,185 Q 177,205 172,230 C 167,240 152,240 152,225 Q 152,205 149,190 Z" fill="#f8fafc" stroke="#e2e8f0" dark-stroke="#cbd5e1" strokeWidth="2" />

                {/* Left Boot sole */}
                <path d="M 113,230 Q 125,237 137,230 Z" fill="#64748b" dark-fill="#475569" />
                {/* Right Boot sole */}
                <path d="M 150,230 Q 162,237 174,230 Z" fill="#64748b" dark-fill="#475569" />

                {/* Left Arm holding book in front */}
                <path d="M 118,140 Q 98,155 112,170 Q 125,170 132,160" fill="none" stroke="#cbd5e1" strokeWidth="10" strokeLinecap="round" />
                {/* Right Arm holding book in front */}
                <path d="M 172,140 Q 192,155 178,170 Q 165,170 158,160" fill="none" stroke="#cbd5e1" strokeWidth="10" strokeLinecap="round" />

                {/* Left Glove */}
                <circle cx="112" cy="170" r="7" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                {/* Right Glove */}
                <circle cx="178" cy="170" r="7" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />

                {/* Neck ring */}
                <ellipse cx="145" cy="112" rx="32" ry="9" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />

                {/* Helmet Dome */}
                <circle cx="145" cy="102" r="32" fill="#ffffff" stroke="#f1f5f9" strokeWidth="2" />

                {/* Big Dark Visor */}
                <ellipse cx="145" cy="104" rx="25" ry="20" fill="url(#visorGrad)" stroke="#1e293b" strokeWidth="1" />

                {/* Reflection on visor */}
                <path d="M 128,97 Q 145,89 162,97" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
                <circle cx="155" cy="114" r="1.5" fill="#ffffff" opacity="0.4" />

                {/* Suit chest panel control */}
                <rect x="133" y="142" width="24" height="18" rx="2" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.2" />
                <circle cx="139" cy="147" r="1.5" fill="#3b82f6" />
                <circle cx="145" cy="147" r="1.5" fill="#10b981" />
                <circle cx="151" cy="147" r="1.5" fill="#ef4444" />
                <rect x="138" y="152" width="14" height="2" fill="#cbd5e1" />

                {/* ================================================= */}
                {/* THE OPEN BOOK (Solid Pink, matching the image)   */}
                {/* ================================================= */}
                <g transform="translate(0, -5)">
                  {/* Spine line */}
                  <path d="M 145,152 L 145,176" stroke="#db2777" strokeWidth="2" />

                  {/* Pink Book Cover */}
                  <path d="M 115,165 Q 145,175 145,176 L 145,152 Q 115,141 115,165 Z" fill="#ec4899" />
                  <path d="M 175,165 Q 145,175 145,176 L 145,152 Q 175,141 175,165 Z" fill="#f43f5e" />

                  {/* Book Pages */}
                  <path d="M 119,163 Q 145,173 145,174 L 145,154 Q 119,143 119,163 Z" fill="#fbcfe8" />
                  <path d="M 171,163 Q 145,173 145,174 L 145,154 Q 171,143 171,163 Z" fill="#fdf2f8" />

                  {/* Soft text lines inside pages */}
                  <path d="M 124,160 Q 135,165 141,166" fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.8" />
                  <path d="M 125,155 Q 135,160 141,161" fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.8" />
                  <path d="M 149,166 Q 155,165 166,160" fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.8" />
                  <path d="M 149,161 Q 155,160 165,155" fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.8" />
                </g>

              </g>

            </svg>

          </div>

        </div>

      </div>
    </div>
  );
}

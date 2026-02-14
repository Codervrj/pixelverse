import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ─── Team Data ────────────────────────────────────────── */

interface TeamMember {
    name: string;
    role: string;
    tag: string;
    instagram?: string;
    linkedin?: string;
}

interface TeamSection {
    title: string;
    label: string;
    members: TeamMember[];
}

const teamSections: TeamSection[] = [
    {
        title: 'Organizer',
        label: 'The masterminds behind PixelVerse',
        members: [
            { name: 'Shreya Patil', role: 'Organiser', tag: 'GDGoC Lead', instagram: '#', linkedin: '#' },

        ],
    },
    {
        title: 'The CORE',
        label: 'The pixel-pushers & aesthetic architects',
        members: [

            { name: 'Shreya Yadav', role: 'Secretary', tag: 'SECRETARY', linkedin: 'https://www.linkedin.com/in/shreya-y-' },
            { name: 'Sanay Patil', role: 'Secretary', tag: 'SECRETARY', linkedin: 'https://www.linkedin.com/in/sanaypatil/' },
            { name: 'Atharva Gadekar', role: 'UI UX Lead', tag: 'UX_LEAD', instagram: 'https://www.instagram.com/atharva.02_', linkedin: 'https://www.linkedin.com/in/atharva-gadekar/' },
            { name: 'Varun Jain', role: 'Web Lead', tag: 'WEB_LEAD', linkedin: 'https://www.linkedin.com/in/varun-jain-dev/' },
            { name: 'Abbas Shaikh', role: 'App Lead', tag: 'APP_LEAD', instagram: 'https://www.instagram.com/abbas_05s_', linkedin: 'https://www.linkedin.com/in/mohammed-abbas-shaikh16' },
            { name: 'Dwithi Poojary', role: 'UI UX Coordinator', tag: 'UX_COORD', instagram: 'https://www.instagram.com/dwithi_09', linkedin: 'https://www.linkedin.com/in/dwithi-poojary-b24325305' },
            { name: 'Atharva Chauhan', role: 'Web Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/mrtag08' },
            { name: 'Chandrayan Paul', role: 'Web Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/chandrayan-paul-7a736b322' },
            { name: 'Sushmita Das', role: 'Web Coordinator', tag: 'COORD', instagram: 'https://www.instagram.com/ssusheyy', linkedin: 'https://www.linkedin.com/in/sushmita-das-66594b216' },
            { name: 'Shatakshi Marathe', role: 'App Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/shatakshi-marathe-793792351' },
        ],
    },
    {
        title: 'Crew',
        label: 'The builders shipping the experience',
        members: [
            { name: 'Arjun Mehta', role: 'Tech Lead', tag: 'TECH_CMD', instagram: '#', linkedin: '#' },
            { name: 'Emily Zhang', role: 'Frontend Dev', tag: 'CODE_CRF', instagram: '#', linkedin: '#' },
            { name: 'Noah Rodrigues', role: 'Backend Dev', tag: 'SYS_ARCH', instagram: '#', linkedin: '#' },
            { name: 'Noah Rodrigues', role: 'Backend Dev', tag: 'SYS_ARCH', instagram: '#', linkedin: '#' },
        ],
    },
    {
        title: 'MARKETING_CELL',
        label: 'Getting the word out to every pixel',
        members: [
            { name: 'Isha Verma', role: 'Marketing Lead', tag: 'HYPE_ENG', instagram: '#', linkedin: '#' },
            { name: 'Chris Santos', role: 'Content Creator', tag: 'WORD_SMT', instagram: '#', linkedin: '#' },
        ],
    },
];

/* ─── Animated Background (matching Hero) ──────────────── */

const TeamBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Moving grid */}
        <div
            className="absolute inset-0 opacity-15 animate-[gridSlide_25s_linear_infinite]"
            style={{
                backgroundImage: `
          linear-gradient(to right, #FFD700 1px, transparent 1px),
          linear-gradient(to bottom, #FFD700 1px, transparent 1px)
        `,
                backgroundSize: '50px 50px',
            }}
        />

        {/* Floating shapes */}
        <div className="absolute top-32 left-[8%] w-16 h-16 border-4 border-[#FFD700] opacity-25 animate-[drift1_18s_ease-in-out_infinite]" />
        <div className="absolute top-48 right-[12%] w-12 h-12 bg-black opacity-15 rounded-full animate-[drift2_14s_ease-in-out_infinite]" />
        <div
            className="absolute bottom-40 left-[15%] w-20 h-20 border-4 border-black opacity-15 animate-[drift3_20s_ease-in-out_infinite]"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <div className="absolute bottom-60 right-[8%] w-14 h-14 bg-[#FFD700] opacity-15 animate-[drift4_16s_ease-in-out_infinite]" />

        {/* Rotating sunburst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vmax] h-[180vmax] opacity-[0.06] animate-[spinSlow_120s_linear_infinite]">
            <div
                className="w-full h-full"
                style={{
                    background: `repeating-conic-gradient(from 0deg, #FFD700 0deg 10deg, transparent 10deg 20deg)`,
                }}
            />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5DC]/0 via-[#F5F5DC]/60 to-[#F5F5DC]" />

        <style>{`
      @keyframes gridSlide {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }
      @keyframes drift1 {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-25px) rotate(180deg); }
      }
      @keyframes drift2 {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(35px); }
      }
      @keyframes drift3 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(25px, -40px); }
      }
      @keyframes drift4 {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(50px) rotate(180deg); }
      }
      @keyframes spinSlow {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(90deg); }
      }
    `}</style>
    </div>
);

/* ─── Social Icon SVGs ─────────────────────────────────── */

const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

/* ─── Member Card ──────────────────────────────────────── */

const MemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
    // Generate a deterministic colour based on index for the avatar
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9', '#F8C471'];
    const bgColor = colors[index % colors.length];
    const initials = member.name.split(' ').map((n) => n[0]).join('');

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300"
        >
            {/* Tag ribbon */}
            <div className="absolute -top-3 -right-3 px-3 py-1 bg-[#FFD700] text-black text-[9px] font-bold uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
                {member.tag}
            </div>

            <div className="p-6 pt-8 flex flex-col items-center text-center">
                {/* Avatar */}
                <div
                    className="w-20 h-20 rounded-full border-3 border-black flex items-center justify-center mb-4 text-xl font-black text-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: bgColor }}
                >
                    {initials}
                </div>

                {/* Name */}
                <h3 className="font-archivo text-lg font-black uppercase tracking-tight text-black mb-1">
                    {member.name}
                </h3>

                {/* Role */}
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/60 mb-4 border-b-2 border-[#FFD700] pb-2 inline-block">
                    {member.role}
                </p>

                {/* Socials */}
                <div className="flex gap-3 mt-1">
                    {member.instagram && (
                        <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center hover:bg-[#FFD700] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
                        >
                            <InstagramIcon />
                        </a>
                    )}
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center hover:bg-[#FFD700] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
                        >
                            <LinkedInIcon />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

/* ─── Team Page ────────────────────────────────────────── */

const TeamPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const totalMembers = teamSections.reduce((acc, s) => acc + s.members.length, 0);

    return (
        <section className="relative min-h-screen w-full bg-[#F5F5DC] text-black overflow-hidden">
            <TeamBackground />

            {/* ── Hero Banner ──────────────────────────────── */}
            <div className="relative z-10 pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                    <span className="text-xs font-bold text-black tracking-[0.2em] uppercase">
                        Squad_Roster
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[14vw] sm:text-[100px] md:text-[140px] font-archivo font-black tracking-tighter leading-[0.85] text-black mb-4"
                >
                    THE CREW
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl font-bold text-black/70 uppercase tracking-wide max-w-xl mx-auto"
                >
                    The humans powering the <span className="border-b-2 border-[#FFD700]">Pixelverse</span> experience.
                </motion.p>

                {/* Stats strip */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 inline-flex gap-6 sm:gap-10 items-center px-8 py-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-archivo font-black text-black">{totalMembers}</div>
                        <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-black/50">MEMBERS</div>
                    </div>
                    <div className="w-px h-10 bg-black/20" />
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-archivo font-black text-black">{teamSections.length}</div>
                        <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-black/50">DIVISIONS</div>
                    </div>
                    <div className="w-px h-10 bg-black/20" />
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-archivo font-black text-black">∞</div>
                        <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-black/50">PASSION</div>
                    </div>
                </motion.div>
            </div>

            {/* ── Team Sections ────────────────────────────── */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pb-24 sm:pb-32">
                {teamSections.map((section, sIdx) => (
                    <div key={section.title} className="mb-20 sm:mb-28">
                        {/* Section header */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-10 sm:mb-14"
                        >
                            <div className="inline-block px-4 py-1.5 bg-[#FFD700] text-black font-archivo font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
                                LAYER_{String(sIdx + 1).padStart(2, '0')}
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-archivo font-black tracking-tighter uppercase text-black leading-[0.9]">
                                {section.title.replace(/_/g, ' ')}
                            </h2>
                            <p className="mt-3 text-sm sm:text-base font-medium text-black/50 uppercase tracking-wide">
                                {section.label}
                            </p>
                            <div className="mt-4 w-24 h-1 bg-[#FFD700]" />
                        </motion.div>

                        {/* Members grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {section.members.map((member, mIdx) => (
                                <MemberCard key={member.name} member={member} index={sIdx * 4 + mIdx} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Back to Home CTA ─────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 text-center pb-20"
            >
                <Link
                    to="/"
                    className="inline-block px-10 py-5 bg-black text-white font-bold text-lg uppercase tracking-tight border-2 border-black shadow-[6px_6px_0px_0px_rgba(255,215,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
                >
                    ← Back to Mission Control
                </Link>
            </motion.div>
        </section>
    );
};

export default TeamPage;

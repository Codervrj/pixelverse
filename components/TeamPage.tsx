import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { triggerHaptic } from '../hooks/useHaptic';

/* ─── Team Data ────────────────────────────────────────── */

interface TeamMember {
    name: string;
    role: string;
    tag: string;
    image?: string;
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
        label: 'The Visionary',
        members: [
            { name: 'Shreya Patil', role: 'Organizer', tag: 'GDGoC Lead', linkedin: 'https://www.linkedin.com/in/shreya-patil-9b83352a7', image: '/images/pixelverseTeam/organizer/Screenshot_20260128_180756_Gallery~2.jpg' },
        ],
    },
    {
        title: 'The CORE',
        label: 'The Architects & Strategists',
        members: [
            // Secretaries
            { name: 'Shreya Yadav', role: 'Secretary', tag: 'SECRETARY', linkedin: 'https://www.linkedin.com/in/shreya-y-', image: '/images/pixelverseTeam/secretary/ShreyaYadav_secretary.jpg' },
            { name: 'Sanay Patil', role: 'Secretary', tag: 'SECRETARY', linkedin: 'https://www.linkedin.com/in/sanaypatil/', image: '/images/pixelverseTeam/secretary/SanayPatil_Secretary.webp' },
            // Event Leads
            { name: 'Atharva Gadekar', role: 'Lead UI/UX', tag: 'EVENT_LEAD', linkedin: 'https://www.linkedin.com/in/atharva-gadekar/', image: '/images/pixelverseTeam/eventLeads/atharvagadekar_uiuxlead.jpeg' },
            { name: 'Varun Jain', role: 'Lead Web', tag: 'EVENT_LEAD', linkedin: 'https://www.linkedin.com/in/varun-jain-dev/', image: '/images/pixelverseTeam/eventLeads/VarunJain_weblead.jpeg' },
            { name: 'Abbas Shaikh', role: 'Lead App', tag: 'EVENT_LEAD', linkedin: 'https://www.linkedin.com/in/mohammed-abbas-shaikh16', image: '/images/pixelverseTeam/eventLeads/Mohammed Abbas Shaikh _AppLead.jpg' },
            // Core Coordinators
            { name: 'Sushmita Das', role: 'Technical Co-ord', tag: 'CORE_COORD', linkedin: 'https://www.linkedin.com/in/sushmita-das-66594b216', image: '/images/pixelverseTeam/web/Shusmita_WebCoord.jpg' },
            { name: 'Atharva Matale', role: 'Technical Co-ord', tag: 'CORE_COORD', linkedin: 'https://www.linkedin.com/in/atharvamatale', image: '/images/pixelverseTeam/agentic/Atharva_AgenticAIcoord.jpg' },
            { name: 'Shreya Kanchan', role: 'Internal Mgt Co-ord', tag: 'CORE_COORD', linkedin: 'https://www.linkedin.com/in/shreya-kanchan-79850631b/', image: '/images/pixelverseTeam/management/Shreya kanchan_Management.jpg' },
            { name: 'Venisha Pitchaiya', role: 'Internal Mgt Co-ord', tag: 'CORE_COORD', linkedin: 'https://www.linkedin.com/in/venisha-pitchaiya', image: '/images/pixelverseTeam/management/VenishaPitchaiya_Management.jpg' },
            { name: 'Prathamesh Bhagwat', role: 'PR & Publicity Co-ord', tag: 'CORE_COORD', linkedin: 'https://www.linkedin.com/in/prathamesh-bhagwat', image: '/images/pixelverseTeam/management/PrathameshBhagwat_ManagementCoord.jpg' },
            { name: 'Adya Poojary', role: 'PR & Publicity Co-ord', tag: 'CORE_COORD', linkedin: 'https://www.linkedin.com/in/adya-poojary-4775ba37b', image: '/images/pixelverseTeam/misc/Adya.jpg' },
            { name: 'Farheen Patel', role: 'Overall Event Co-ord', tag: 'CORE_COORD', linkedin: 'https://www.linkedin.com/in/farheen-patel-897b78318/', image: '/images/pixelverseTeam/ds&ml/Farheen_Ds&ML coord.jpg' },
            { name: 'Eshan Uday Lavate', role: 'Overall Event Co-ord', tag: 'CORE_COORD', linkedin: 'https://www.linkedin.com/in/eshan-lavate', image: '/images/pixelverseTeam/management/EshanLavate_ManagementCoord.jpeg' },
        ],
    },
    {
        title: 'The CREW',
        label: 'Domain Leads & Coordinators',
        members: [
            // Domain Leads
            { name: 'Koshik Mehta', role: 'Lead Agentic AI', tag: 'AI_LEAD', linkedin: 'https://www.linkedin.com/in/koshik-mehta-9271b0258/', image: '/images/pixelverseTeam/agentic/Koshik_AgenticAiLead.jpg' },
            { name: 'Abhinav Tiwari', role: 'Lead Cloud', tag: 'CLOUD_LEAD', linkedin: 'https://www.linkedin.com/in/abhinav-tiwari-3468b0318/', image: '/images/pixelverseTeam/cloud/Abhinav_Tiwari_Cloud_Lead.jpg' },
            { name: 'Ayush Ghadge', role: 'Lead Social Media', tag: 'SOCIAL_LEAD', linkedin: 'https://www.linkedin.com/in/ayush-ghadge-4747a6321', image: '/images/pixelverseTeam/socialMedia/AyushGhadge_SMLead.jpg' },
            { name: 'Roshan Ajith', role: 'Lead CyberSecurity', tag: 'CYBER_LEAD', linkedin: 'https://www.linkedin.com/in/roshanajith', image: '/images/pixelverseTeam/misc/RoshanAjith_CybersecurityLead .jpeg' },
            { name: 'Poornaya Pardeshi', role: 'Lead DS & ML', tag: 'ML_LEAD', linkedin: 'https://www.linkedin.com/in/poornaya-pardeshi-46043631a', image: '/images/pixelverseTeam/ds&ml/POORNAYA_DS&ML LEAD.jpg' },

            // Coordinators
            { name: 'Dwithi Poojary', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/dwithi-poojary-b24325305', image: '/images/pixelverseTeam/uiux/Dwithi_uiuxcoord.jpg' },
            { name: 'Atharva Chauhan', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/mrtag08', image: '/images/pixelverseTeam/web/Chauhan_WebCoord.jpg' },
            { name: 'Chandrayan Paul', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/chandrayan-paul-7a736b322', image: '/images/pixelverseTeam/web/WebCoord_ChandrayanPaul.png' },
            { name: 'Shatakshi Marathe', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/shatakshi-marathe-793792351', image: '/images/pixelverseTeam/app/Shatakshi.jpg' },
            { name: 'Anushka Mali', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/anushka-mali-486857297/', image: '/images/pixelverseTeam/agentic/anushka_AgenticAiCoord.jpg' },
            { name: 'Khushi Khanna', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/khushi-khanna-00a849313', image: '/images/pixelverseTeam/agentic/Khushi_AgenticAIcoord_web.jpg' },
            { name: 'Elamurugu Shanmugavel', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/elamurugu-shanmugavel-985428288', image: '/images/pixelverseTeam/cloud/Elamurugu Shanmugavel_Cloud Computing Coord.jpg' },
            { name: 'Atharva Jadhav', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/atharva-jadhav-72b6b32b3', image: '/images/pixelverseTeam/cloud/Atharva Jadhav_ Cloud Computing coordinator_.jpg' },
            { name: 'Rutik Manish Kore', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/rutik-kore-8903ba317/', image: '/images/pixelverseTeam/management/RutikKore_ManagementCoord.jpeg' },
            { name: 'Srusti Ponnaganti', role: 'Coordinator', tag: 'COORD', linkedin: 'https://in.linkedin.com/in/srusti-ponnaganti-2a7b55348', image: '/images/pixelverseTeam/socialMedia/Srusti Ponnaganti_SmCoord.jpg' },
            { name: 'Ujair Inamdar', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/ujairinamdar/', image: '/images/pixelverseTeam/socialMedia/Ujairinamdar_SMcord.jpg' },
            { name: 'Omkar Dewasi', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/omkar-dewasi/', image: '/images/pixelverseTeam/socialMedia/OMKARDEWASI_SMCORD.jpg' },
            { name: 'Arohi Pathak', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/arohi-pathak-a793b4350/', image: '/images/pixelverseTeam/cyberSec/Arohi Pathak_CyberSecCoord.jpg' },
            { name: 'Daksh Thakur', role: 'Coordinator', tag: 'COORD', linkedin: 'https://in.linkedin.com/in/daksh-thakur-79152532a', image: '/images/pixelverseTeam/cyberSec/Daksh_Thakur_Cybersecurity_Coordinator.jpg' },
            { name: 'Devanshu Bansode', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/devanshu-bansode-bb6a84320/', image: '/images/pixelverseTeam/cyberSec/Devanshu_Bansode_CyberSecurity_Coord.jpeg' },
            { name: 'Sanchita Gupta', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/sanchitagupta-aiml', image: '/images/pixelverseTeam/ds&ml/Sanchita_DS&MLco- ord.jpg' },
            { name: 'Mohit Naidu', role: 'Coordinator', tag: 'COORD', linkedin: 'https://www.linkedin.com/in/mohit-naidu-12b8a1268/', image: '/images/pixelverseTeam/ds&ml/MOHIT_DSMLCoord.jpeg' },
        ],
    },
    {
        title: 'Volunteers',
        label: 'The Helping Hands',
        members: [
            { name: 'Mayuri D. Gade', role: 'Volunteer', tag: 'VOLUNTEER', linkedin: 'https://www.linkedin.com/in/mayuri-gade-435637378/', image: '/images/pixelverseTeam/vol/MayuriGade_Vol.png' },
            { name: 'Pranjali Rane', role: 'Volunteer', tag: 'VOLUNTEER', linkedin: 'https://www.linkedin.com/in/pranjali-rane-724a16340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', image: '/images/pixelverseTeam/vol/Pranjali Rane_Volunteer.jpeg' },
            { name: 'Pritam P. Kharade', role: 'Volunteer', tag: 'VOLUNTEER', linkedin: 'https://www.linkedin.com/in/pritam-kharade-a89028394/', image: '/images/pixelverseTeam/vol/prit passport.jpg' },
            { name: 'Atharva A. Khandagale', role: 'Volunteer', tag: 'VOLUNTEER', linkedin: 'https://www.linkedin.com/in/atharva-khandagale-412892333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', image: '/images/pixelverseTeam/vol/AtharvaKhandagale_Vol.jpg' },
            { name: 'Zubiya Mhaisker', role: 'Volunteer', tag: 'VOLUNTEER', linkedin: 'https://www.linkedin.com/in/zubiya-mhaisker-4ba073319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', image: '/images/pixelverseTeam/vol/Zubiya Mhaisker_Volunteer.jpg' },
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

const LinkedInIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

/* ─── Member Card ──────────────────────────────────────── */

const MemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
    // Generate a deterministic colour based on index for the avatar (fallback if no image)
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9', '#F8C471'];
    const bgColor = colors[index % colors.length];

    // Get initials for fallback avatar
    const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase();

    // Check if image is a placeholder or actual image
    const hasImage = member.image && member.image.trim() !== '' && !member.image.includes('placehold.co');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.35, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300"
            onMouseEnter={() => triggerHaptic('card')}
        >
            {/* 1. Image Section (Rectangular 4:5) */}
            <div
                className="relative w-full aspect-[4/5] overflow-hidden border-b-2 border-black bg-gray-100 cursor-pointer active:scale-95 transition-transform duration-200"
                onClick={() => triggerHaptic('portrait')}
            >
                {hasImage ? (
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: bgColor }}>
                        {/* Noise texture overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                        <span className="text-4xl font-black opacity-20 relative z-10">{initials}</span>
                    </div>
                )}

                {/* Minimal Tag Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <span className="px-2 py-1 bg-[#FFD700] text-black text-[10px] font-bold uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {member.tag}
                    </span>
                </div>
            </div>

            {/* 2. Content Section (Minimal Information) */}
            <div className="p-6 flex flex-col justify-between bg-white relative">
                <div>
                    {/* Name */}
                    <h3 className="font-archivo text-xl font-black uppercase tracking-tight text-black mb-1 group-hover:text-[#FFD700] transition-colors leading-tight">
                        {member.name}
                    </h3>

                    {/* Role */}
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/50 mb-4">
                        {member.role}
                    </p>
                </div>

                {/* LinkedIn / Action */}
                <div className="flex items-center justify-end pt-4 border-t-2 border-black/5">
                    {member.linkedin && member.linkedin !== '#' ? (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center border-2 border-black bg-black text-white hover:bg-[#0077B5] hover:border-[#0077B5] hover:rotate-6 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
                        >
                            <LinkedInIcon />
                        </a>
                    ) : (
                        <div className="w-8 h-8 opacity-20 grayscale flex items-center justify-center border-2 border-black/20 rounded-sm">
                            <div className="w-2 h-2 bg-black/20 rounded-full" />
                        </div>
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
                                <MemberCard key={member.name} member={member} index={mIdx} />
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

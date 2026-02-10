import React from "react";
import { motion } from "framer-motion";
import { Trophy, Crown, Zap } from "lucide-react";
import GlobalPixelGrid from "./GlobalPixelGrid";

/* ----------------------------
   Reusable Card Component
----------------------------- */

const Card = ({
  children,
  accent = "default",
  center = false,
}: {
  children: React.ReactNode;
  accent?: "default" | "gold" | "pink";
  center?: boolean;
}) => {
  const border =
    accent === "gold"
      ? "border-yellow-400/40"
      : accent === "pink"
      ? "border-pink-400/40"
      : "border-white/10";

  const hoverBorder =
    accent === "gold"
      ? "hover:border-yellow-400/70"
      : accent === "pink"
      ? "hover:border-pink-400/70"
      : "hover:border-white/20";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative"
    >
      <div
        className={`
          rounded-3xl border ${border} ${hoverBorder}
          transition-colors duration-300
          bg-white/[0.035] backdrop-blur-lg
          shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]
          p-10
          ${center ? "text-center" : ""}
        `}
      >
        {children}
      </div>
    </motion.div>
  );
};

/* ----------------------------
   Prize Pool Section
----------------------------- */

const PrizePool: React.FC = () => {
  return (
    <section className="relative py-32 px-6 text-white overflow-hidden">

      {/* Pixel Grid Background */}
      <GlobalPixelGrid />

      {/* Grid blending mask */}
      <div className="absolute inset-0 bg-[#050008]/75" />

      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-yellow-400/10 blur-[180px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-24 text-center">
          <p className="text-yellow-400 tracking-[0.3em] text-xs uppercase mb-4">
            Rewards
          </p>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Prize Pool
          </h2>
        </div>

        {/* Winner */}
        <div className="mb-16">
          <Card accent="gold" center>
            <div className="flex justify-center mb-8">
              <div className="p-6 rounded-2xl bg-yellow-400 text-black">
                <Trophy size={40} />
              </div>
            </div>

            <p className="uppercase text-xs tracking-[0.25em] text-yellow-400 mb-3">
              Winner
            </p>

            <h3 className="text-6xl font-bold mb-8">₹5,000</h3>

            <div className="space-y-2 text-zinc-400 text-sm">
              <p>Golden Trophy</p>
              <p>Exclusive Swag Kit</p>
              <p>Internship Interview Opportunity</p>
            </div>
          </Card>
        </div>

        {/* Secondary Prizes */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Runner Up */}
          <Card>
            <Crown className="mb-6 text-zinc-300" size={28} />

            <p className="uppercase text-xs tracking-[0.2em] text-zinc-400 mb-2">
              Runner Up
            </p>

            <h4 className="text-4xl font-semibold mb-6">₹3,000</h4>

            <ul className="text-sm text-zinc-400 space-y-2">
              <li>Silver Badge</li>
              <li>Pro Toolkit Access</li>
              <li>Priority Job Referral</li>
            </ul>
          </Card>

          {/* Most Creative */}
          <Card accent="pink">
            <Zap className="mb-6 text-pink-400" size={28} />

            <p className="uppercase text-xs tracking-[0.2em] text-pink-400 mb-2">
              Most Creative
            </p>

            <h4 className="text-4xl font-semibold mb-6">₹2,000</h4>

            <ul className="text-sm text-zinc-400 space-y-2">
              <li>Creative Badge</li>
              <li>Asset Bundle</li>
              <li>Mentorship Access</li>
            </ul>
          </Card>

        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-zinc-500 text-sm">
          All participants receive digital certificates and community badges.
        </div>

      </div>
    </section>
  );
};

export default PrizePool;
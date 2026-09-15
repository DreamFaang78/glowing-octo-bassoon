import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, MessageSquare, ShieldCheck, Users, Info, ChevronRight, CheckCircle2 } from 'lucide-react';
import { KITS_DATA } from '@/lib/kits-data';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const kit = KITS_DATA[slug];

  if (!kit) {
    return {
      title: 'Prescription Guide | HOMMED',
    };
  }

  return {
    title: `${kit.name} — Dawa Kaise Lein | HOMMED Prescription Guide`,
    description: `HOMMED ${kit.name} post-delivery usage guide. Step-by-step dosage instructions and precautions from HOMMED विशेषज्ञ.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(KITS_DATA).map((slug) => ({
    slug,
  }));
}

export default async function PrescriptionKitPage({ params }: PageProps) {
  const { slug } = await params;
  const kit = KITS_DATA[slug];

  if (!kit) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F6FAF7] text-[#1C3A22] font-sans flex flex-col selection:bg-[#3DAA58]/20 selection:text-[#1C3A22]">
      
      {/* ── 1. HEADER ── */}
      <header className="bg-white/95 backdrop-blur-md border-b border-[#2D7A3A]/10 sticky top-0 z-40 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="HOMMED Logo"
              width={42}
              height={42}
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2D7A3A] bg-[#2D7A3A]/8 px-3.5 py-1.5 rounded-full border border-[#2D7A3A]/15 text-center">
            <Info className="h-3.5 w-3.5 shrink-0 text-[#2D7A3A]" />
            <span>{kit.tagline}</span>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTAINER (Centered, Mobile-First) ── */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12">
        
        {/* ── 2. KIT TITLE BLOCK ── */}
        <section className="text-center space-y-4 pt-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E55B2B]/10 text-[#E55B2B] text-xs font-bold uppercase tracking-wider border border-[#E55B2B]/20">
            Official Usage Guide
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E1F12] font-heading tracking-tight">
            {kit.name}
          </h1>
          
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            {kit.reassurance}
          </p>

          {/* Small Trust Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-[#2D7A3A]">
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-[#2D7A3A]/15">
              <Users className="h-4 w-4 text-[#E55B2B]" />
              <span>{kit.trustStats.stat1}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-[#2D7A3A]/15">
              <ShieldCheck className="h-4 w-4 text-[#2D7A3A]" />
              <span>{kit.trustStats.stat2}</span>
            </div>
          </div>
        </section>

        {/* ── 3. KIT CONTENTS OVERVIEW ── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#2D7A3A]/15 pb-2.5">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0E1F12] flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#E55B2B] rounded-full inline-block"></span>
              Kit Contents Overview
            </h2>
            <span className="text-xs text-slate-500 font-medium">3 Items Included</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {kit.medicines.map((med) => (
              <div
                key={med.number}
                className="bg-white rounded-2xl p-4 border border-[#2D7A3A]/12 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-center group"
              >
                <div>
                  {/* Medicine Bottle Image Container */}
                  <div className="relative w-full aspect-square max-w-[180px] mx-auto mb-3 rounded-xl overflow-hidden bg-[#F4F7F4] flex items-center justify-center border border-[#2D7A3A]/10">
                    <Image
                      src={med.image}
                      alt={med.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 bg-[#0E1F12] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                      No. {med.number}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#0E1F12] group-hover:text-[#2D7A3A] transition-colors">
                    {med.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[#E55B2B] mt-0.5">
                    {med.formPack}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 bg-[#2D7A3A]/5 rounded-xl py-2 px-2">
                  <span className="text-xs font-bold text-[#1C3A22] block">
                    {med.dosageSummary}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. DAWA KAISE LEIN — STEP-BY-STEP GUIDE ── */}
        <section className="space-y-6">
          <div className="border-b border-[#2D7A3A]/15 pb-2.5">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0E1F12] flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#2D7A3A] rounded-full inline-block"></span>
              Dawa Kaise Lein — Step-by-Step Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Roz subah-shaam isi fixed sequence mein dawa lein:
            </p>
          </div>

          <div className="space-y-4">
            {kit.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#2D7A3A]/12 shadow-xs hover:border-[#2D7A3A]/30 transition-all flex items-start gap-4 sm:gap-5"
              >
                {/* Numbered Circle Badge (Matching Homepage Consultation Process Visual) */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2D7A3A] text-white font-extrabold text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-sm font-heading">
                  {step.stepNumber}
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0E1F12]">
                    Step {step.stepNumber}: {step.title}
                  </h3>
                  
                  <p className="text-slate-700 text-sm leading-relaxed font-normal">
                    {step.instruction}
                  </p>

                  {step.note && (
                    <div className="mt-2 text-xs font-medium text-[#E55B2B] bg-[#E55B2B]/8 border border-[#E55B2B]/20 rounded-xl p-3 flex items-start gap-2">
                      <Info className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{step.note}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. IMPORTANT PRECAUTIONS CALLOUT ── */}
        <section className="bg-[#FFFDF5] border-2 border-[#E55B2B]/25 rounded-2xl p-5 sm:p-7 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-[#E55B2B] font-bold font-heading text-lg">
            <Info className="h-5 w-5" />
            <h3>Zaroori Parhez & Rules (Precautions)</h3>
          </div>

          <div className="space-y-2.5">
            {kit.precautions.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm font-medium text-[#1C3A22]">
                <span className="font-bold text-[#E55B2B] text-base leading-none select-none">&gt;</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. "KOI DOUBT HAI?" SUPPORT SECTION ── */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#2D7A3A]/15 shadow-sm text-center space-y-5">
          <div className="space-y-2 max-w-lg mx-auto">
            <h3 className="text-2xl font-extrabold font-heading text-[#0E1F12]">
              {kit.supportTitle}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {kit.supportCopy}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            {/* Primary CTA: WhatsApp */}
            <a
              href={`https://wa.me/${kit.whatsappNumber}?text=${encodeURIComponent(kit.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all shadow-md shadow-green-600/20 text-sm"
            >
              <MessageSquare className="h-5 w-5 fill-current" />
              <span>WhatsApp Par Puchein</span>
            </a>

            {/* Secondary CTA: Call Now Pill Button (Site-Wide Style) */}
            <a
              href={`tel:${kit.phoneNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E55B2B] hover:bg-[#d44e1f] text-white font-bold rounded-full transition-all shadow-md shadow-orange-600/20 text-sm"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>
        </section>

      </main>

    </div>
  );
}

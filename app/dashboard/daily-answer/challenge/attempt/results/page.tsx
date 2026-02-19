'use client';

import React from 'react';

const METRICS = [
  {
    id: 'structure',
    label: 'STRUCTURE',
    value: 'Well Organized',
    icon: '✓',
    bg: '#F0FDF4',
    borderColor: '#B9F8CF',
    iconColor: '#0D542B',
    valueColor: '#0D542B',
  },
  {
    id: 'content',
    label: 'CONTENT DEPTH',
    value: 'Needs Examples',
    icon: '⚠',
    bg: '#FEFCE8',
    borderColor: '#FFF085',
    iconColor: '#A16207',
    valueColor: '#713F12',
  },
  {
    id: 'clarity',
    label: 'CLARITY',
    value: 'Clear Articulation',
    icon: '✓',
    bg: '#F0FDF4',
    borderColor: '#B9F8CF',
    iconColor: '#0D542B',
    valueColor: '#0D542B',
  },
  {
    id: 'timemgmt',
    label: 'TIME MGMT',
    value: 'Good Pace',
    icon: '⚡',
    bg: '#F9FAFB',
    borderColor: '#E5E7EB',
    iconColor: '#374151',
    valueColor: '#101828',
  },
];

const DID_WELL = [
  'Clear introduction defining local self-government',
  'Correct constitutional references (73rd & 74th Amendments)',
  'Good logical flow from historical to current context',
  'Appropriate conclusion summarizing key points',
  'Effective use of headings and paragraph breaks',
];

const AREAS_TO_IMPROVE = [
  "Add specific examples (Kerala's People's Plan, MP women representatives)",
  'Include quantitative data (% women representatives, budget trends)',
  'Balance arguments more evenly between strengths/limitations',
  'Connect each point explicitly to "strengthening democracy"',
  'Add more recent initiatives (e-Gram Swaraj, 15th FC recommendations)',
];

const VALUE_IDEAS = [
  'Reference 2nd ARC report on local governance reforms',
  'Compare Panchayati Raj vs. Municipal governance structures',
  'Quote Mahatma Gandhi on "gram swaraj" concept',
  'Mention SC/ST reservation impact on social justice',
  'Discuss challenges in metropolitan governance',
];

export default function ResultsPage() {
  return (
    <div
      className="min-h-screen font-arimo"
      style={{ background: 'linear-gradient(180deg, #E6EAF0 0%, #DDE2EA 100%)' }}
    >
      {/* Page Header */}
      <div
        className="w-full flex items-center justify-between px-8"
        style={{
          height: '64px',
          minHeight: '64px',
          maxHeight: '64px',
          background: 'linear-gradient(90deg, #0E182D 0%, #17223E 100%)',
          overflow: 'hidden',
        }}
      >
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: '28px', height: '28px', objectFit: 'contain', flexShrink: 0 }}
          />
          <span className="text-white font-bold text-base leading-none">RiseWithJeet</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            style={{
              width: '183px',
              height: '54px',
              borderRadius: '30px',
              background: '#FFD170',
              boxShadow: '0px 4px 17.1px 0px #FFFFFF0F inset',
              color: '#111827',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 590,
              fontSize: '24px',
              lineHeight: '110%',
              letterSpacing: '-0.36px',
              textAlign: 'center',
            }}
          >
            Start Free Trial
          </button>
          {/* Gradient border wrapper for Rahul Joshi */}
          <div
            style={{
              width: '247.45px',
              height: '57px',
              borderRadius: '30px',
              padding: '1px',
              background: 'conic-gradient(from 179.78deg at 50% 50%, rgba(255,255,255,0.07) -54.98deg, #B19E66 52.13deg, rgba(255,255,255,0.04) 125.06deg, #FFFFFF 235.09deg, rgba(255,255,255,0.07) 305.02deg, #B19E66 412.13deg)',
              flexShrink: 0,
            }}
          >
            <div
              className="flex items-center gap-3 pl-2 pr-4 w-full h-full"
              style={{ borderRadius: '30px', background: '#1F2937' }}
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-gray-700 flex-shrink-0">
                RJ
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white leading-none">Rahul Joshi</span>
                <span className="text-[10px] text-gray-400 leading-none mt-1">2025 UPSC Aspirant</span>
              </div>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto flex-shrink-0">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center py-10 px-6 gap-6">

        {/* Score Card */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: '988px',
            height: '168px',
            borderRadius: '14px',
            background: 'linear-gradient(90deg, #101828 0%, #17223E 100%)',
          }}
        >
          <p
            style={{
              fontFamily: 'Arimo',
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0.35px',
              textTransform: 'uppercase',
              color: '#D1D5DC',
              marginBottom: '4px',
            }}
          >
            SCORE
          </p>
          <div className="flex items-baseline gap-1">
            <span
              style={{
                fontFamily: 'Arimo',
                fontWeight: 700,
                fontSize: '82px',
                lineHeight: '72px',
                color: '#FDC700',
              }}
            >
              6.5
            </span>
            <span
              style={{
                fontFamily: 'Arimo',
                fontWeight: 700,
                fontSize: '35px',
                lineHeight: '48px',
                color: '#FDC70087',
              }}
            >
              /10
            </span>
          </div>
        </div>

        {/* Feedback Card */}
        <div
          style={{
            width: '988px',
            borderRadius: '14px',
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A',
            padding: '32px 32px 32px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Feedback Header Row */}
          <img
            src="/feedback-header.png"
            alt="Personalized Feedback"
            style={{
              width: '924px',
              objectFit: 'fill',
            }}
          />

          {/* Subtitle */}
          <img
            src="/feedback-subtitle.png"
            alt="Actionable insights to help you improve, not just a score"
            style={{
              width: '924px',
              objectFit: 'fill',
            }}
          />

          {/* 4 Metric Cards */}
          <img
            src="/metrics-container.png"
            alt="Metrics"
            style={{
              width: '924px',
              objectFit: 'fill',
            }}
          />

          {/* 3 Feedback Columns */}
          <img
            src="/feedback-container.png"
            alt="Feedback"
            style={{
              width: '924px',
              height: '387.2px',
              objectFit: 'fill',
            }}
          />
        </div>
      </div>
    </div>
  );
}

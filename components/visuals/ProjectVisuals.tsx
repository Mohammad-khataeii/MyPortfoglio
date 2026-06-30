type VisualProps = {
  className?: string;
};

export function SmartiTrainVisual({ className = "" }: VisualProps) {
  return (
    <svg
      viewBox="0 0 520 180"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="trainBody" x1="70" y1="70" x2="430" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(244,247,255,0.95)" />
          <stop offset="1" stopColor="rgba(106,164,255,0.82)" />
        </linearGradient>
        <linearGradient id="trainGlow" x1="120" y1="30" x2="420" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(99,243,255,0.35)" />
          <stop offset="1" stopColor="rgba(143,109,255,0.08)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="520" height="180" rx="28" fill="rgba(7,10,24,0.66)" />
      <path d="M48 132H474" stroke="rgba(151,163,197,0.22)" strokeWidth="2" />
      <path d="M78 147H444" stroke="rgba(99,243,255,0.18)" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M101 111C129 82 188 68 284 68H425C437 68 446 77 446 89V106C446 121 434 132 419 132H116C101 132 92 120 101 111Z"
        fill="url(#trainBody)"
      />
      <path
        d="M111 104C136 82 193 73 278 73H401C418 73 431 86 431 103V114C431 120 426 125 420 125H121C110 125 103 113 111 104Z"
        fill="url(#trainGlow)"
      />
      <path d="M138 89H222" stroke="rgba(7,10,24,0.42)" strokeWidth="12" strokeLinecap="round" />
      <path d="M238 89H313" stroke="rgba(7,10,24,0.34)" strokeWidth="12" strokeLinecap="round" />
      <path d="M330 89H392" stroke="rgba(7,10,24,0.28)" strokeWidth="12" strokeLinecap="round" />
      <circle cx="169" cy="138" r="8" fill="rgba(244,247,255,0.7)" />
      <circle cx="374" cy="138" r="8" fill="rgba(244,247,255,0.7)" />
      <path d="M468 92L500 103L468 114" stroke="rgba(99,243,255,0.65)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function RobotArmVisual({ className = "" }: VisualProps) {
  return (
    <svg
      viewBox="0 0 320 220"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="robotArm" x1="92" y1="26" x2="238" y2="179" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(244,247,255,0.92)" />
          <stop offset="1" stopColor="rgba(99,243,255,0.8)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="320" height="220" rx="24" fill="rgba(7,10,24,0.62)" />
      <path d="M34 177H286" stroke="rgba(151,163,197,0.2)" strokeWidth="2" />
      <circle cx="122" cy="157" r="20" fill="rgba(99,243,255,0.22)" />
      <circle cx="122" cy="157" r="10" fill="rgba(244,247,255,0.85)" />
      <path d="M123 147L149 114" stroke="url(#robotArm)" strokeWidth="18" strokeLinecap="round" />
      <circle cx="154" cy="108" r="15" fill="rgba(244,247,255,0.9)" />
      <path d="M164 99L198 124" stroke="url(#robotArm)" strokeWidth="16" strokeLinecap="round" />
      <circle cx="203" cy="128" r="13" fill="rgba(244,247,255,0.86)" />
      <path d="M211 136L233 89" stroke="url(#robotArm)" strokeWidth="14" strokeLinecap="round" />
      <circle cx="237" cy="81" r="12" fill="rgba(244,247,255,0.86)" />
      <path d="M245 76L271 66" stroke="rgba(99,243,255,0.88)" strokeWidth="8" strokeLinecap="round" />
      <path d="M269 59L283 69L270 79" stroke="rgba(99,243,255,0.92)" strokeWidth="3" strokeLinecap="round" />
      <path d="M68 69C92 51 112 46 138 46" stroke="rgba(143,109,255,0.24)" strokeWidth="2" strokeDasharray="4 8" />
    </svg>
  );
}

export function ExplorerMapVisual({ className = "" }: VisualProps) {
  return (
    <svg
      viewBox="0 0 320 220"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="320" height="220" rx="24" fill="rgba(7,10,24,0.62)" />
      <path
        d="M44 54C76 37 106 44 138 64C170 84 196 96 229 90C248 86 264 74 279 58"
        stroke="rgba(99,243,255,0.5)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M42 102C74 88 108 92 132 111C162 135 193 144 229 138C248 135 264 125 279 111"
        stroke="rgba(244,247,255,0.28)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M42 148C67 134 92 136 119 151C147 166 180 175 221 170C244 167 264 159 281 148"
        stroke="rgba(143,109,255,0.3)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="113" cy="102" r="8" fill="rgba(99,243,255,0.72)" />
      <circle cx="113" cy="102" r="18" stroke="rgba(99,243,255,0.2)" strokeWidth="2" />
      <circle cx="214" cy="138" r="6" fill="rgba(244,247,255,0.84)" />
      <path d="M113 102L214 138" stroke="rgba(99,243,255,0.32)" strokeWidth="2" strokeDasharray="6 7" />
      <rect x="218" y="50" width="44" height="26" rx="13" fill="rgba(255,255,255,0.05)" />
      <path d="M232 63H248" stroke="rgba(244,247,255,0.78)" strokeWidth="2" strokeLinecap="round" />
      <path d="M239 56V70" stroke="rgba(244,247,255,0.78)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

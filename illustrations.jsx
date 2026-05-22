// Custom SVG illustrations for FS Wholesale — drawn, not photographed
// Hand-tuned product shapes: crates, bottles, packaging stacks

const Crate = ({ color = "#E8A33D", label = "FS" }) => (
  <svg viewBox="0 0 140 140" width="100%" style={{maxWidth: 160}}>
    <defs>
      <pattern id={`slats-${color}`} width="14" height="14" patternUnits="userSpaceOnUse">
        <rect width="14" height="14" fill={color}/>
        <rect x="0" y="0" width="14" height="1" fill="rgba(0,0,0,0.18)"/>
      </pattern>
    </defs>
    {/* back wall */}
    <path d="M 30 38 L 110 38 L 116 50 L 24 50 Z" fill={color} opacity="0.85"/>
    {/* main body */}
    <rect x="24" y="50" width="92" height="68" fill={`url(#slats-${color})`}/>
    <rect x="24" y="50" width="92" height="68" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5"/>
    {/* slat divisions */}
    <line x1="24" y1="72" x2="116" y2="72" stroke="rgba(0,0,0,0.2)" strokeWidth="1"/>
    <line x1="24" y1="95" x2="116" y2="95" stroke="rgba(0,0,0,0.2)" strokeWidth="1"/>
    {/* label */}
    <rect x="50" y="76" width="40" height="18" fill="#FFFDF8" stroke="rgba(0,0,0,0.2)"/>
    <text x="70" y="89" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="13" fill="#0B1F3A">{label}</text>
    {/* handles */}
    <rect x="30" y="56" width="14" height="3" fill="rgba(0,0,0,0.3)"/>
    <rect x="96" y="56" width="14" height="3" fill="rgba(0,0,0,0.3)"/>
  </svg>
);

const Bottles = ({ accent = "#E8A33D" }) => (
  <svg viewBox="0 0 140 140" width="100%" style={{maxWidth: 160}}>
    {[0, 1, 2].map(i => {
      const colors = ["#2E5240", "#C44A2D", accent];
      const x = 30 + i * 28;
      return (
        <g key={i}>
          <rect x={x-2} y="38" width="4" height="14" fill="#0B1F3A"/>
          <rect x={x-7} y="50" width="14" height="6" fill="#0B1F3A"/>
          <path d={`M ${x-10} 56 Q ${x-12} 62 ${x-12} 70 L ${x-12} 116 Q ${x-12} 122 ${x-6} 122 L ${x+6} 122 Q ${x+12} 122 ${x+12} 116 L ${x+12} 70 Q ${x+12} 62 ${x+10} 56 Z`} fill={colors[i]}/>
          <rect x={x-10} y="78" width="22" height="22" fill="#FFFDF8" opacity="0.95"/>
          <text x={x+1} y="93" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="10" fill="#0B1F3A">FS</text>
          {/* highlight */}
          <rect x={x-9} y="62" width="2" height="50" fill="rgba(255,255,255,0.25)" rx="1"/>
        </g>
      );
    })}
  </svg>
);

const Cans = ({ accent = "#E8A33D" }) => (
  <svg viewBox="0 0 140 140" width="100%" style={{maxWidth: 160}}>
    {[0, 1, 2, 3].map(i => {
      const colors = ["#C44A2D", accent, "#2E5240", "#0B1F3A"];
      const labels = ["CO", "FS", "UK", "ED"];
      const x = 18 + i * 27;
      return (
        <g key={i}>
          {/* top */}
          <ellipse cx={x+10} cy="44" rx="11" ry="3.5" fill="#999"/>
          <ellipse cx={x+10} cy="43" rx="11" ry="3.5" fill="#ccc"/>
          {/* body */}
          <rect x={x-1} y="44" width="22" height="74" fill={colors[i]}/>
          {/* bottom shadow */}
          <ellipse cx={x+10} cy="118" rx="11" ry="3" fill="rgba(0,0,0,0.3)"/>
          {/* highlight */}
          <rect x={x+1} y="48" width="2" height="66" fill="rgba(255,255,255,0.3)"/>
          {/* label band */}
          <rect x={x-1} y="68" width="22" height="26" fill="#FFFDF8" opacity="0.95"/>
          <text x={x+10} y="85" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="11" fill="#0B1F3A">{labels[i]}</text>
        </g>
      );
    })}
  </svg>
);

const SnackBag = ({ accent = "#E8A33D" }) => (
  <svg viewBox="0 0 140 140" width="100%" style={{maxWidth: 170}}>
    {[0, 1, 2].map(i => {
      const colors = [accent, "#C44A2D", "#2E5240"];
      const rot = [-8, 0, 8][i];
      const x = 20 + i * 32;
      return (
        <g key={i} transform={`rotate(${rot} ${x+20} 78)`}>
          <path d={`M ${x} 40 L ${x+40} 40 L ${x+38} 116 L ${x+2} 116 Z`} fill={colors[i]}/>
          {/* crimped top */}
          <path d={`M ${x} 40 L ${x+5} 36 L ${x+10} 40 L ${x+15} 36 L ${x+20} 40 L ${x+25} 36 L ${x+30} 40 L ${x+35} 36 L ${x+40} 40 Z`} fill={colors[i]} stroke="rgba(0,0,0,0.25)" strokeWidth="0.5"/>
          {/* crimped bottom */}
          <path d={`M ${x+2} 116 L ${x+7} 120 L ${x+12} 116 L ${x+17} 120 L ${x+22} 116 L ${x+27} 120 L ${x+32} 116 L ${x+37} 120 L ${x+38} 116 Z`} fill={colors[i]} stroke="rgba(0,0,0,0.25)" strokeWidth="0.5"/>
          {/* label */}
          <ellipse cx={x+20} cy="78" rx="14" ry="14" fill="#FFFDF8"/>
          <text x={x+20} y="83" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="14" fill="#0B1F3A">FS</text>
          {/* shine */}
          <ellipse cx={x+10} cy="60" rx="3" ry="14" fill="rgba(255,255,255,0.25)"/>
        </g>
      );
    })}
  </svg>
);

const Boxes = ({ accent = "#E8A33D" }) => (
  <svg viewBox="0 0 140 140" width="100%" style={{maxWidth: 170}}>
    {/* back box */}
    <g transform="translate(40, 22)">
      <path d="M 0 12 L 30 0 L 60 12 L 30 24 Z" fill="#C44A2D"/>
      <path d="M 0 12 L 30 24 L 30 52 L 0 40 Z" fill="#9c3a23"/>
      <path d="M 60 12 L 30 24 L 30 52 L 60 40 Z" fill="#A93E26"/>
    </g>
    {/* front box left */}
    <g transform="translate(8, 60)">
      <path d="M 0 14 L 32 0 L 64 14 L 32 28 Z" fill={accent}/>
      <path d="M 0 14 L 32 28 L 32 58 L 0 44 Z" fill="#B5781F"/>
      <path d="M 64 14 L 32 28 L 32 58 L 64 44 Z" fill="#CB8A2A"/>
      <text x="32" y="45" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="11" fill="#0B1F3A">FS WHOLESALE</text>
    </g>
    {/* front box right */}
    <g transform="translate(70, 56)">
      <path d="M 0 12 L 28 0 L 56 12 L 28 24 Z" fill="#2E5240"/>
      <path d="M 0 12 L 28 24 L 28 50 L 0 38 Z" fill="#1F3A2C"/>
      <path d="M 56 12 L 28 24 L 28 50 L 56 38 Z" fill="#264835"/>
    </g>
  </svg>
);

const Cleaning = ({ accent = "#E8A33D" }) => (
  <svg viewBox="0 0 140 140" width="100%" style={{maxWidth: 160}}>
    {/* spray bottle */}
    <g>
      <rect x="36" y="48" width="6" height="10" fill="#0B1F3A"/>
      <path d="M 30 58 L 48 58 L 48 64 L 56 64 L 56 70 L 30 70 Z" fill="#0B1F3A"/>
      <rect x="28" y="70" width="32" height="50" fill={accent}/>
      <rect x="28" y="86" width="32" height="20" fill="#FFFDF8"/>
      <text x="44" y="100" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="11" fill="#0B1F3A">FS</text>
      <rect x="30" y="72" width="2" height="44" fill="rgba(255,255,255,0.3)"/>
    </g>
    {/* tall bottle */}
    <g>
      <rect x="80" y="36" width="10" height="8" fill="#0B1F3A"/>
      <path d="M 76 44 L 94 44 L 100 60 L 70 60 Z" fill="#2E5240"/>
      <rect x="70" y="60" width="30" height="60" fill="#2E5240"/>
      <rect x="70" y="78" width="30" height="22" fill="#FFFDF8"/>
      <text x="85" y="93" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="11" fill="#0B1F3A">FS</text>
      <rect x="72" y="62" width="2" height="54" fill="rgba(255,255,255,0.25)"/>
    </g>
    {/* sponge */}
    <g>
      <rect x="106" y="100" width="22" height="14" fill={accent} rx="2"/>
      <rect x="106" y="106" width="22" height="8" fill="#C44A2D" rx="2"/>
    </g>
  </svg>
);

const Jars = ({ accent = "#E8A33D" }) => (
  <svg viewBox="0 0 140 140" width="100%" style={{maxWidth: 160}}>
    {[0, 1, 2].map(i => {
      const colors = ["#C44A2D", accent, "#2E5240"];
      const x = 18 + i * 36;
      return (
        <g key={i}>
          {/* lid */}
          <rect x={x} y="44" width="32" height="10" fill="#0B1F3A" rx="2"/>
          {/* jar body */}
          <path d={`M ${x+2} 54 Q ${x} 60 ${x} 68 L ${x} 114 Q ${x} 120 ${x+6} 120 L ${x+26} 120 Q ${x+32} 120 ${x+32} 114 L ${x+32} 68 Q ${x+32} 60 ${x+30} 54 Z`} fill={colors[i]} opacity="0.92"/>
          {/* contents shape suggestion */}
          <rect x={x+4} y="80" width="24" height="32" fill="rgba(255,255,255,0.2)" rx="2"/>
          {/* label */}
          <rect x={x+3} y="84" width="26" height="22" fill="#FFFDF8"/>
          <text x={x+16} y="99" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="11" fill="#0B1F3A">FS</text>
          {/* shine */}
          <rect x={x+3} y="62" width="2" height="50" fill="rgba(255,255,255,0.4)"/>
        </g>
      );
    })}
  </svg>
);

const Frozen = ({ accent = "#E8A33D" }) => (
  <svg viewBox="0 0 140 140" width="100%" style={{maxWidth: 160}}>
    {/* ice block bg */}
    <rect x="14" y="34" width="112" height="92" fill="#dde9f0" rx="6"/>
    {/* snowflake */}
    <g transform="translate(70 80)" stroke="#fff" strokeWidth="2" strokeLinecap="round">
      <line x1="-22" y1="0" x2="22" y2="0"/>
      <line x1="0" y1="-22" x2="0" y2="22"/>
      <line x1="-16" y1="-16" x2="16" y2="16"/>
      <line x1="-16" y1="16" x2="16" y2="-16"/>
    </g>
    {/* product box on top */}
    <g transform="translate(22 44)">
      <rect width="44" height="32" fill={accent}/>
      <rect y="10" width="44" height="14" fill="#FFFDF8"/>
      <text x="22" y="20" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="10" fill="#0B1F3A">FS</text>
    </g>
    <g transform="translate(72 50)">
      <rect width="44" height="32" fill="#C44A2D"/>
      <rect y="10" width="44" height="14" fill="#FFFDF8"/>
      <text x="22" y="20" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="10" fill="#0B1F3A">FS</text>
    </g>
    {/* ice crystals */}
    <circle cx="30" cy="100" r="3" fill="#fff"/>
    <circle cx="110" cy="115" r="2" fill="#fff"/>
    <circle cx="60" cy="120" r="2" fill="#fff"/>
  </svg>
);

// Hero collage tiles — visual mockups of warehouse / product imagery
const HeroTile1 = ({ accent }) => (
  <svg viewBox="0 0 400 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    {/* warehouse interior — shelves perspective */}
    <defs>
      <linearGradient id="ht1-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#142B4E"/>
        <stop offset="1" stopColor="#0B1F3A"/>
      </linearGradient>
    </defs>
    <rect width="400" height="360" fill="url(#ht1-sky)"/>
    {/* floor */}
    <path d="M 0 240 L 400 240 L 400 360 L 0 360 Z" fill="#1a3458"/>
    <path d="M 0 240 L 400 240 L 320 360 L 80 360 Z" fill="#0B1F3A" opacity="0.5"/>
    {/* shelving — receding lines */}
    {[0, 1, 2, 3].map(i => {
      const y = 80 + i * 40;
      const inset = 30 + i * 25;
      return <rect key={i} x={inset} y={y} width={400 - inset*2} height="6" fill="#1a3458"/>;
    })}
    {/* product boxes on shelves */}
    {[0, 1, 2].map(row => (
      [0,1,2,3,4].map(col => {
        const colors = [accent, "#C44A2D", "#2E5240", accent, "#fff"];
        const inset = 30 + row * 25;
        const w = (400 - inset*2) / 5 - 4;
        const x = inset + col * (w+4) + 2;
        const y = 80 + row * 40 - 30;
        return <rect key={`${row}-${col}`} x={x} y={y} width={w} height="30" fill={colors[col]} opacity={0.7 + row*0.1}/>;
      })
    ))}
    {/* worker silhouette */}
    <g transform="translate(180, 200)" fill="#0B1F3A">
      <circle cx="20" cy="14" r="10"/>
      <path d="M 8 24 L 32 24 L 36 60 L 24 60 L 22 40 L 18 40 L 16 60 L 4 60 Z"/>
    </g>
    {/* light streaks */}
    <rect x="0" y="0" width="400" height="2" fill={accent} opacity="0.4"/>
    <rect x="0" y="240" width="400" height="1" fill={accent} opacity="0.3"/>
  </svg>
);

const HeroTile2 = ({ accent }) => (
  <svg viewBox="0 0 400 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    {/* product stack — top down crates */}
    <rect width="400" height="360" fill={accent}/>
    {/* repeating crate pattern */}
    {[0,1,2,3].map(r =>
      [0,1,2,3].map(c => {
        const x = c * 100;
        const y = r * 90;
        return (
          <g key={`${r}-${c}`} transform={`translate(${x} ${y})`}>
            <rect x="6" y="6" width="88" height="78" fill="rgba(11,31,58,0.08)"/>
            <rect x="4" y="4" width="88" height="78" fill="#FFFDF8" stroke="#0B1F3A" strokeWidth="2"/>
            <rect x="14" y="14" width="68" height="58" fill="none" stroke="#0B1F3A" strokeWidth="1" opacity="0.4"/>
            <text x="48" y="50" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="22" fill="#0B1F3A">FS</text>
          </g>
        );
      })
    )}
  </svg>
);

const HeroTile3 = ({ accent }) => (
  <svg viewBox="0 0 400 280" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    {/* delivery truck */}
    <rect width="400" height="280" fill="#F4EFE6"/>
    <rect y="200" width="400" height="80" fill="#EBE4D6"/>
    {/* road dashes */}
    {[0,1,2,3,4,5].map(i => <rect key={i} x={i*70 + 10} y="240" width="40" height="3" fill="#0B1F3A" opacity="0.3"/>)}
    {/* truck */}
    <g transform="translate(60 90)">
      {/* trailer */}
      <rect x="40" y="0" width="200" height="110" fill="#0B1F3A"/>
      <rect x="50" y="10" width="180" height="90" fill="#142B4E"/>
      <text x="140" y="62" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="30" fill={accent}>FS</text>
      <text x="140" y="82" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="#FFFDF8">WHOLESALE • UK</text>
      {/* cab */}
      <path d="M 240 30 L 290 30 L 300 60 L 300 110 L 240 110 Z" fill={accent}/>
      <rect x="252" y="40" width="40" height="24" fill="#142B4E"/>
      {/* wheels */}
      <circle cx="80" cy="115" r="14" fill="#0B1F3A"/>
      <circle cx="80" cy="115" r="6" fill={accent}/>
      <circle cx="180" cy="115" r="14" fill="#0B1F3A"/>
      <circle cx="180" cy="115" r="6" fill={accent}/>
      <circle cx="270" cy="115" r="14" fill="#0B1F3A"/>
      <circle cx="270" cy="115" r="6" fill={accent}/>
    </g>
    {/* motion lines */}
    <rect x="20" y="130" width="40" height="2" fill="#0B1F3A" opacity="0.3"/>
    <rect x="10" y="145" width="30" height="2" fill="#0B1F3A" opacity="0.2"/>
    <rect x="30" y="160" width="20" height="2" fill="#0B1F3A" opacity="0.2"/>
  </svg>
);

const HeroTile4 = ({ accent }) => (
  <svg viewBox="0 0 400 320" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    {/* shop owner / handshake */}
    <rect width="400" height="320" fill="#2E5240"/>
    {/* abstract shop facade */}
    <rect x="40" y="60" width="320" height="220" fill="#1F3A2C"/>
    {/* window */}
    <rect x="60" y="100" width="280" height="140" fill="#264835"/>
    <rect x="60" y="100" width="280" height="40" fill={accent}/>
    <text x="200" y="128" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="22" fill="#0B1F3A">CORNER SHOP</text>
    {/* products in window */}
    {[0,1,2,3,4,5].map(i => (
      <rect key={i} x={70 + i*45} y="160" width="36" height="70" fill={i%2 ? "#C44A2D" : "#FFFDF8"} opacity="0.85"/>
    ))}
    {/* door */}
    <rect x="170" y="200" width="60" height="80" fill="#0B1F3A"/>
    <circle cx="220" cy="240" r="2" fill={accent}/>
    {/* awning */}
    <path d="M 40 60 L 360 60 L 340 40 L 60 40 Z" fill={accent}/>
    {/* sign */}
    <rect x="160" y="20" width="80" height="20" fill="#0B1F3A"/>
    <text x="200" y="34" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill={accent}>OPEN</text>
  </svg>
);

// Map of UK with delivery points
const UKMap = ({ accent }) => (
  <svg viewBox="0 0 320 400" width="100%" height="100%">
    {/* Simplified UK silhouette */}
    <path d="M 160 30 L 175 28 L 185 38 L 195 32 L 210 40 L 215 55 L 225 60 L 230 75 L 245 80 L 250 95 L 255 115 L 245 135 L 250 150 L 245 165 L 250 180 L 245 200 L 240 215 L 245 235 L 240 250 L 230 265 L 225 285 L 215 295 L 210 280 L 200 285 L 195 270 L 185 275 L 175 270 L 170 285 L 160 290 L 150 280 L 140 275 L 130 265 L 125 250 L 115 245 L 110 230 L 100 220 L 105 205 L 100 190 L 95 175 L 100 160 L 95 145 L 100 130 L 95 115 L 100 100 L 95 85 L 105 75 L 110 60 L 120 55 L 130 45 L 140 40 L 150 35 Z" fill="#142B4E" stroke={accent} strokeWidth="1.5"/>
    {/* Northern Ireland */}
    <path d="M 60 200 L 75 195 L 88 205 L 90 218 L 80 225 L 65 220 Z" fill="#142B4E" stroke={accent} strokeWidth="1.5"/>

    {/* delivery points */}
    {[
      {x: 175, y: 130, name: "Edinburgh", main: true},
      {x: 170, y: 150, name: "Glasgow"},
      {x: 175, y: 180, name: "Newcastle"},
      {x: 180, y: 220, name: "Manchester"},
      {x: 185, y: 235, name: "Leeds"},
      {x: 175, y: 255, name: "Birmingham"},
      {x: 195, y: 280, name: "London"},
      {x: 170, y: 270, name: "Bristol"},
    ].map((p, i) => (
      <g key={i}>
        {p.main && <circle cx={p.x} cy={p.y} r="14" fill={accent} opacity="0.25"/>}
        {p.main && <circle cx={p.x} cy={p.y} r="9" fill={accent} opacity="0.45"/>}
        <circle cx={p.x} cy={p.y} r={p.main ? 6 : 4} fill={p.main ? accent : "#FFFDF8"} stroke="#0B1F3A" strokeWidth="1"/>
        <text x={p.x + 12} y={p.y + 4} fontFamily="JetBrains Mono, monospace" fontSize={p.main ? "11" : "9"} fontWeight={p.main ? 600 : 400} fill="#0B1F3A">{p.name}</text>
      </g>
    ))}

    {/* HQ pin label */}
    <g transform="translate(115 110)">
      <rect width="50" height="20" fill="#0B1F3A"/>
      <text x="25" y="14" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fill={accent}>HQ</text>
      <path d="M 50 8 L 60 18 L 60 8 Z" fill="#0B1F3A"/>
    </g>

    {/* compass */}
    <g transform="translate(40 50)" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#0B1F3A">
      <circle cx="0" cy="0" r="18" fill="none" stroke="#0B1F3A"/>
      <text x="0" y="-22" textAnchor="middle">N</text>
      <path d="M 0 -14 L 4 0 L 0 14 L -4 0 Z" fill={accent}/>
    </g>
  </svg>
);

Object.assign(window, { Crate, Bottles, Cans, SnackBag, Boxes, Cleaning, Jars, Frozen, HeroTile1, HeroTile2, HeroTile3, HeroTile4, UKMap });

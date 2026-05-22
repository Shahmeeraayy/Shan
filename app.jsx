// FS Wholesale — main app

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#0B1F3A", "#E8A33D", "#F4EFE6"],
  "showAnnounce": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const palette = t.palette || ["#0B1F3A", "#E8A33D", "#F4EFE6"];
  const [ink, accent, paper] = palette;

  // Apply palette to CSS vars
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--ink', ink);
    root.style.setProperty('--gold', accent);
    // derive a deeper accent
    root.style.setProperty('--gold-deep', shade(accent, -0.18));
    root.style.setProperty('--paper', paper);
    root.style.setProperty('--paper-2', shade(paper, -0.04));
    root.style.setProperty('--line', shade(paper, -0.12));
    root.style.setProperty('--ink-2', shade(ink, 0.12));
  }, [ink, accent, paper]);

  return (
    <>
      {t.showAnnounce !== false && <Announce/>}
      <Header/>
      <Hero accent={accent}/>
      <Marquee/>
      <Categories accent={accent}/>
      <StatsStrip/>
      <Brands/>
      <Why accent={accent}/>
      <Delivery accent={accent}/>
      <Testimonials/>
      <OpenAccount/>
      <BigCTA/>
      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand palette"/>
        <TweakColor
          label="Theme"
          value={t.palette}
          onChange={v => setTweak('palette', v)}
          options={[
            ["#0B1F3A", "#E8A33D", "#F4EFE6"],
            ["#1A1A1A", "#FDE047", "#FAFAF7"],
            ["#1F3A2C", "#E8A33D", "#F4EFE6"],
            ["#3D1E12", "#E97B47", "#F7F1E8"],
            ["#0F2A3D", "#5BC0EB", "#F0F4F7"],
          ]}
        />
        <TweakSection label="Chrome"/>
        <TweakToggle label="Top announcement bar" value={t.showAnnounce !== false} onChange={v => setTweak('showAnnounce', v)}/>
      </TweaksPanel>
    </>
  );
}

// hex shade helper
function shade(hex, amt) {
  const c = hex.replace('#', '');
  const r = parseInt(c.substr(0,2), 16);
  const g = parseInt(c.substr(2,2), 16);
  const b = parseInt(c.substr(4,2), 16);
  const adj = (v) => Math.max(0, Math.min(255, Math.round(v + (amt > 0 ? (255 - v) * amt : v * amt))));
  return '#' + [adj(r), adj(g), adj(b)].map(v => v.toString(16).padStart(2, '0')).join('');
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

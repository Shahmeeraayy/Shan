// FS Wholesale — page sections
const { useState, useEffect } = React;

const Announce = () => (
  <div className="announce">
    <div className="container">
      <div className="left">
        <span><span className="pulse"></span>Open today · 06:00 – 20:00</span>
        <span style={{opacity:0.6}}>·</span>
        <span>Free delivery over £350 within Edinburgh</span>
      </div>
      <div className="right">
        <a href="#">Trade login</a>
        <a href="#">Track order</a>
        <a href="#">EN · £ GBP</a>
      </div>
    </div>
  </div>
);

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo">
        <div className="logo-mark">FS</div>
        <div className="logo-text">
          <div className="lt-1">FS Wholesale</div>
          <div className="lt-2">Distributors · Est. 2016</div>
        </div>
      </div>
      <nav className="nav">
        <a href="#cats" className="has-caret">Catalogue</a>
        <a href="#brands">Brands</a>
        <a href="#delivery">Delivery</a>
        <a href="#why">Why us</a>
        <a href="#open">Open account</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-cta">
        <a href="#" className="btn btn-ghost">Trade login</a>
        <a href="#open" className="btn btn-primary">Open account <span className="arr">→</span></a>
      </div>
    </div>
  </header>
);

const Hero = ({ accent }) => (
  <section className="hero">
    <div className="container">
      <div className="hero-grid">
        <div>
          <div className="eyebrow"><span className="dot"></span>Edinburgh · Trade only · Since 2016</div>
          <h1>
            Stocking Britain's<br/>
            shop floors <span className="italic">since</span><br/>
            <span className="italic">sunrise.</span>
          </h1>
          <p className="lede">
            From the central belt to the south coast, FS Wholesale Distributors keeps independent retailers, corner shops and hospitality stocked with the brands their customers ask for — at margins they can actually live on.
          </p>
          <div className="hero-ctas">
            <a href="#open" className="btn btn-primary">Open a trade account <span className="arr">→</span></a>
            <a href="#cats" className="btn btn-ghost">Browse catalogue</a>
          </div>
          <div className="hero-meta">
            <div className="m"><div className="num">12,400+</div><div className="lbl">SKUs in stock</div></div>
            <div className="m"><div className="num">1,800+</div><div className="lbl">Active retailers</div></div>
            <div className="m"><div className="num">£18m</div><div className="lbl">Distributed last year</div></div>
          </div>
        </div>
        <div className="collage">
          <div className="card c1"><HeroTile1 accent={accent}/></div>
          <div className="card c2"><HeroTile3 accent={accent}/></div>
          <div className="card c3"><HeroTile2 accent={accent}/></div>
          <div className="card c4"><HeroTile4 accent={accent}/></div>
          <div className="tag" style={{top: '20px', left: '52%'}}>
            <span className="ic">✓</span> Same-day Edinburgh
          </div>
          <div className="tag" style={{bottom: '40%', right: '-10px'}}>
            <span className="ic">£</span> Trade-only pricing
          </div>
          <div className="tag" style={{bottom: '14%', left: '-10px'}}>
            <span className="ic">★</span> 4.9 from 312 retailers
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Marquee = () => (
  <div className="marquee-wrap">
    <div className="marquee">
      {[0,1].map(k => (
        <div key={k} className="item">
          <span>Confectionery</span><span className="star">✦</span>
          <span>Soft Drinks</span><span className="star">✦</span>
          <span>Crisps &amp; Snacks</span><span className="star">✦</span>
          <span>Tobacco &amp; Vape</span><span className="star">✦</span>
          <span>Household</span><span className="star">✦</span>
          <span>Frozen &amp; Chilled</span><span className="star">✦</span>
          <span>Ambient Groceries</span><span className="star">✦</span>
          <span>World Foods</span><span className="star">✦</span>
        </div>
      ))}
    </div>
  </div>
);

const Categories = ({ accent }) => {
  const cats = [
    { n: "Confectionery", m: "1,840 SKUs", illo: <Jars accent={accent}/> },
    { n: "Soft Drinks", m: "920 SKUs", illo: <Bottles accent={accent}/> },
    { n: "Energy & Cans", m: "640 SKUs", illo: <Cans accent={accent}/> },
    { n: "Crisps & Snacks", m: "1,210 SKUs", illo: <SnackBag accent={accent}/> },
    { n: "Ambient Grocery", m: "2,310 SKUs", illo: <Boxes accent={accent}/> },
    { n: "Household & Cleaning", m: "780 SKUs", illo: <Cleaning accent={accent}/> },
    { n: "Frozen & Chilled", m: "510 SKUs", illo: <Frozen accent={accent}/> },
    { n: "World Foods", m: "1,650 SKUs", illo: <Crate color={accent} label="FS"/> },
  ];
  return (
    <section className="sec" id="cats">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Catalogue · 12,400+ SKUs</div>
            <h2>Eight aisles. <span className="serif" style={{fontStyle:'italic', color:'var(--gold-deep)'}}>One trusted</span> supplier.</h2>
          </div>
          <div className="right">
            Every category curated for the British corner shop: the brands customers actually walk in asking for, plus value lines that protect your margin. Full catalogue available once your trade account is approved.
          </div>
        </div>
        <div className="cats">
          {cats.map((c, i) => (
            <div className="cat" key={i}>
              <div className="illo">{c.illo}</div>
              <div className="ct">
                <div>
                  <div className="cn">{c.n}</div>
                  <div className="cm">{c.m}</div>
                </div>
                <div className="arr">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsStrip = () => (
  <section className="strip">
    <div className="container">
      <div className="strip-grid">
        <div className="stat">
          <div className="num">9 yrs</div>
          <div className="lbl">Serving Edinburgh &amp; the central belt since 2016</div>
        </div>
        <div className="stat">
          <div className="num">06:00</div>
          <div className="lbl">Doors open at six — beat the morning rush</div>
        </div>
        <div className="stat">
          <div className="num">£18m</div>
          <div className="lbl">In goods distributed across the UK last year</div>
        </div>
        <div className="stat">
          <div className="num">98.4%</div>
          <div className="lbl">Of orders delivered in full and on time</div>
        </div>
      </div>
    </div>
  </section>
);

const Brands = () => {
  const brands = [
    "Coca-Cola", "Cadbury", "Walkers", "Red Bull", "Mars", "Nestlé",
    "Pepsi", "PG Tips", "Heinz", "Britvic", "Mondelez", "KP Snacks",
    "Lucozade", "Mars Wrigley", "AG Barr", "Unilever", "Princes", "Tetley",
  ];
  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="sec-head" style={{marginBottom: 32}}>
          <div>
            <div className="eyebrow"><span className="dot"></span>Brands we stock</div>
            <h2>The names on every<br/>shop owner's <span className="serif" style={{fontStyle:'italic', color:'var(--gold-deep)'}}>order list.</span></h2>
          </div>
          <div className="right">
            We work directly with major UK distributors and manufacturers, which means competitive trade pricing and reliable availability — no grey market, no surprises at the till.
          </div>
        </div>
        <div className="brand-grid">
          {brands.map((b, i) => (
            <div className="brand-cell" key={i}>{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Why = ({ accent }) => (
  <section className="sec" id="why">
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow"><span className="dot"></span>Why FS Wholesale</div>
          <h2>Built for the people<br/>actually <span className="serif" style={{fontStyle:'italic', color:'var(--gold-deep)'}}>running</span> the shop.</h2>
        </div>
        <div className="right">
          We're not a faceless distributor. Sehar and the team know our retailers by name — and we structure pricing, delivery and credit terms around how independent retail actually works in 2026.
        </div>
      </div>
      <div className="why-grid">
        <div className="why-card">
          <div className="num">01 / Pricing</div>
          <h3>Trade-only pricing that respects your margin.</h3>
          <p>Tiered breaks from single-case to full-pallet. No minimum order on standard delivery routes. Live price list in your account.</p>
          <div className="ic-wrap">
            <svg width="44" height="44" viewBox="0 0 44 44"><circle cx="22" cy="22" r="20" fill="none" stroke="#0B1F3A" strokeWidth="1.5"/><text x="22" y="29" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="22" fill="#0B1F3A">£</text></svg>
          </div>
        </div>
        <div className="why-card dark">
          <div className="num" style={{color: accent}}>02 / Delivery</div>
          <h3>Same-day in Edinburgh. Next-day across Scotland &amp; the North.</h3>
          <p>Two refrigerated routes daily inside the city. Outbound to Glasgow, Newcastle, Manchester &amp; Leeds overnight. Pallet shipments UK-wide on Thu.</p>
          <div className="ic-wrap">
            <svg width="80" height="44" viewBox="0 0 80 44"><rect x="0" y="14" width="50" height="22" fill="none" stroke={accent} strokeWidth="1.5"/><path d="M 50 22 L 64 22 L 70 32 L 70 36 L 50 36 Z" fill="none" stroke={accent} strokeWidth="1.5"/><circle cx="18" cy="38" r="4" fill="none" stroke={accent} strokeWidth="1.5"/><circle cx="60" cy="38" r="4" fill="none" stroke={accent} strokeWidth="1.5"/></svg>
          </div>
        </div>
        <div className="why-card gold">
          <div className="num">03 / Credit</div>
          <h3>30-day terms for established accounts.</h3>
          <p>Open with pro-forma, graduate to weekly invoicing, then to monthly credit once we know each other. Most retailers move up within 90 days.</p>
          <div className="ic-wrap">
            <svg width="44" height="44" viewBox="0 0 44 44"><rect x="4" y="10" width="36" height="24" rx="3" fill="none" stroke="#0B1F3A" strokeWidth="1.5"/><line x1="4" y1="18" x2="40" y2="18" stroke="#0B1F3A" strokeWidth="1.5"/><line x1="10" y1="26" x2="22" y2="26" stroke="#0B1F3A" strokeWidth="1.5"/></svg>
          </div>
        </div>
        <div className="why-card">
          <div className="num">04 / Cash &amp; Carry</div>
          <h3>Edinburgh depot open 06:00 – 20:00.</h3>
          <p>Walk-in trade welcome at our Leith warehouse. Park, scan your card, fill the trolley. Coffee's on us.</p>
        </div>
        <div className="why-card">
          <div className="num">05 / People</div>
          <h3>One account manager, on speed dial.</h3>
          <p>You'll deal with one person who knows your shop, your stock turn, your margins. Direct WhatsApp for urgent orders.</p>
        </div>
        <div className="why-card">
          <div className="num">06 / Tech</div>
          <h3>Order from your phone, in two taps.</h3>
          <p>Our app remembers your usual order. Reorder by photo, by barcode scan, or by voice. Stock alerts when your shelf-favourites are back in.</p>
        </div>
      </div>
    </div>
  </section>
);

const Delivery = ({ accent }) => (
  <section className="sec" id="delivery" style={{background:'var(--paper-2)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow"><span className="dot"></span>Delivery network</div>
          <h2>From Leith to <span className="serif" style={{fontStyle:'italic', color:'var(--gold-deep)'}}>everywhere</span> a shop needs stock.</h2>
        </div>
        <div className="right">
          Operated from our Edinburgh hub with overnight trunking and a partner network covering every UK postcode. Choose what suits — pick up at the depot, schedule a delivery slot, or pallet across the country.
        </div>
      </div>
      <div className="deliv-grid">
        <div className="map-wrap">
          <UKMap accent={accent}/>
        </div>
        <div className="deliv-list">
          {[
            {city: "Edinburgh & Lothians", time: "Same day · twice daily", badge: "DAILY", gold: true},
            {city: "Glasgow & West", time: "Next day · cut-off 16:00", badge: "MON–SAT"},
            {city: "Dundee & Aberdeen", time: "Next day · cut-off 14:00", badge: "MON–FRI"},
            {city: "Newcastle & Tyneside", time: "48hr · refrigerated route", badge: "TUE / THU"},
            {city: "Manchester & Leeds", time: "48hr · pallet network", badge: "TUE / THU"},
            {city: "Birmingham & Midlands", time: "72hr · pallet network", badge: "WED"},
            {city: "London & South", time: "72hr · pallet network", badge: "WED / FRI"},
            {city: "Northern Ireland", time: "On request · weekly groupage", badge: "FRI"},
          ].map((d, i) => (
            <div className="deliv-row" key={i}>
              <div className="idx">{String(i+1).padStart(2,'0')}</div>
              <div>
                <div className="city">{d.city}</div>
                <div className="time">{d.time}</div>
              </div>
              <div className={`badge ${d.gold ? 'gold' : ''}`}>{d.badge}</div>
              <div style={{color:'var(--mute)', fontSize:14}}>→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="sec">
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow"><span className="dot"></span>Retailers · in their own words</div>
          <h2>What the shops <span className="serif" style={{fontStyle:'italic', color:'var(--gold-deep)'}}>say</span> about us.</h2>
        </div>
        <div className="right">
          We grew because shop owners told other shop owners. Here's what they say when we're not in the room.
        </div>
      </div>
      <div className="test-grid">
        <div className="quote featured">
          <div className="mark">"</div>
          <div className="body">FS turned up on a Sunday morning when our usual lot let us down — kept the shop open through the festival. Been with them ever since. Sehar actually picks up the phone.</div>
          <div className="who">
            <div className="avatar">R</div>
            <div>
              <div className="who-name">Raj Mehta</div>
              <div className="who-meta">Bruntsfield News &amp; Wine · Edinburgh · Customer since 2018</div>
            </div>
          </div>
        </div>
        <div className="quote">
          <div className="mark">"</div>
          <div className="body">Better trade prices on Red Bull and Walkers than the big two. End of story.</div>
          <div className="who">
            <div className="avatar">L</div>
            <div>
              <div className="who-name">Linda Chen</div>
              <div className="who-meta">Polwarth Convenience · Edinburgh</div>
            </div>
          </div>
        </div>
        <div className="quote">
          <div className="mark">"</div>
          <div className="body">App is genuinely good. I order on the bus home, it's on the shelf by 8am.</div>
          <div className="who">
            <div className="avatar">D</div>
            <div>
              <div className="who-name">Darren O'Sullivan</div>
              <div className="who-meta">Leith Walk Express · Edinburgh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OpenAccount = () => (
  <section className="openacc" id="open">
    <div className="container">
      <div className="sec-head">
        <div>
          <div className="eyebrow" style={{color:'rgba(255,255,255,0.6)'}}><span className="dot"></span>Open a trade account</div>
          <h2>Three steps. Most accounts<br/>approved <span className="serif" style={{fontStyle:'italic'}}>within 24 hours.</span></h2>
        </div>
        <div className="right">
          Trade only. We'll need proof of business — a VAT number, a shop lease, or a wholesale trading licence is plenty. Pricing visible the moment you're in.
        </div>
      </div>
      <div className="steps">
        <div className="step">
          <div className="n">01</div>
          <h4>Apply online</h4>
          <p>Five-minute form. Business name, address, VAT or company number, and the categories you stock. We don't ask for anything we don't need.</p>
        </div>
        <div className="step">
          <div className="n">02</div>
          <h4>Quick verification</h4>
          <p>We confirm your business is genuine — usually within a working day. A team member will give you a quick call to introduce themselves.</p>
        </div>
        <div className="step">
          <div className="n">03</div>
          <h4>Start ordering</h4>
          <p>Full trade pricing unlocked. First order ships pro-forma; once we've worked together a few weeks, you move to weekly invoicing or 30-day terms.</p>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', marginTop: 48, gap: 14, flexWrap:'wrap'}}>
        <a href="#" className="btn btn-gold">Begin application <span className="arr">→</span></a>
        <a href="#contact" className="btn btn-ghost-light">Talk to someone first</a>
      </div>
    </div>
  </section>
);

const BigCTA = () => (
  <section className="bigcta">
    <div className="corner tl">FS / Wholesale</div>
    <div className="corner tr">Est. Edinburgh, 2016</div>
    <div className="corner bl">07903 200 551</div>
    <div className="corner br">Open 06:00 – 20:00</div>
    <div className="container">
      <h2>Stock smarter,<br/><span className="it">starting Monday.</span></h2>
      <div className="sub">Open a trade account today and your first delivery can be on your shelf by the end of the week.</div>
      <div className="ctas">
        <a href="#" className="btn btn-primary">Open account <span className="arr">→</span></a>
        <a href="tel:07903200551" className="btn btn-ghost">Call 07903 200 551</a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact">
    <div className="container">
      <div className="foot-grid">
        <div className="foot-col">
          <div className="logo" style={{marginBottom: 20}}>
            <div className="logo-mark">FS</div>
            <div className="logo-text">
              <div className="lt-1" style={{color:'#fff'}}>FS Wholesale</div>
              <div className="lt-2">Distributors · Est. 2016</div>
            </div>
          </div>
          <div className="foot-addr">
            FS Wholesale Distributors UK Ltd<br/>
            Unit 14, Leith Industrial Estate<br/>
            Edinburgh EH6 · Scotland<br/>
            <a className="phone" href="tel:07903200551">07903 200 551</a>
            <div style={{marginTop: 10, opacity: 0.7, fontSize: 13}}>hello@fswholesale.co.uk</div>
          </div>
        </div>
        <div className="foot-col">
          <h5>Catalogue</h5>
          <ul>
            <li><a href="#">Confectionery</a></li>
            <li><a href="#">Soft Drinks</a></li>
            <li><a href="#">Crisps &amp; Snacks</a></li>
            <li><a href="#">Ambient Grocery</a></li>
            <li><a href="#">Household</a></li>
            <li><a href="#">World Foods</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#">Our story</a></li>
            <li><a href="#">Founder's note</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>For Retailers</h5>
          <ul>
            <li><a href="#">Open an account</a></li>
            <li><a href="#">Trade login</a></li>
            <li><a href="#">Download the app</a></li>
            <li><a href="#">Delivery schedule</a></li>
            <li><a href="#">Customer support</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bot">
        <div>© 2026 FS Wholesale Distributors UK Ltd · Registered in Scotland · Company No. SC{Math.floor(500000 + Math.random()*99999)}</div>
        <div style={{display:'flex', gap: 20}}>
          <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a><a href="#">Modern Slavery Statement</a>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Announce, Header, Hero, Marquee, Categories, StatsStrip, Brands, Why, Delivery, Testimonials, OpenAccount, BigCTA, Footer });

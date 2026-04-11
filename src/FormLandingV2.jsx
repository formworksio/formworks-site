export default function FormLanding() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "#f7f8fa", color: "#0a0a0a", fontSize: "16px", lineHeight: "1.6", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", borderBottom: "0.5px solid #dde1e7", background: "#f7f8fa", position: "relative", zIndex: 10 }}>
        <div style={{ fontSize: "18px", fontWeight: "600", letterSpacing: ".08em" }}>FORM</div>
        <ul style={{ display: "flex", gap: "32px", listStyle: "none" }}>
          {[["Work", "#work"], ["Approach", "#approach"], ["Contact", "#contact"]].map(([label, href]) => (
            <li key={label}>
              <a href={href} style={{ fontSize: "13px", color: "#7a8394", textDecoration: "none", letterSpacing: ".04em" }}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", padding: "100px 48px 90px", overflow: "hidden", background: "#f7f8fa", borderBottom: "0.5px solid #dde1e7" }}>

        {/* Blueprint SVG */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fadeLeft" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f7f8fa" stopOpacity="1"/>
                <stop offset="35%" stopColor="#f7f8fa" stopOpacity="1"/>
                <stop offset="55%" stopColor="#f7f8fa" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#f7f8fa" stopOpacity="0"/>
              </linearGradient>
            </defs>

            {/* Grid lines */}
            {[80,160,240,320,800,880,960,1040,1120].map(x => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="520" stroke="#c8d0dc" strokeWidth="0.5"/>
            ))}
            {[80,160,240,320,400,480].map(y => (
              <line key={`h${y}`} x1="0" y1={y} x2="1200" y2={y} stroke="#c8d0dc" strokeWidth="0.5"/>
            ))}

            {/* Main structural frame */}
            <rect x="780" y="60" width="340" height="400" fill="none" stroke="#b0bec8" strokeWidth="0.75"/>
            <line x1="780" y1="180" x2="1120" y2="180" stroke="#8fa0b4" strokeWidth="0.75"/>
            <line x1="780" y1="300" x2="1120" y2="300" stroke="#8fa0b4" strokeWidth="0.75"/>
            <line x1="950" y1="60" x2="950" y2="460" stroke="#8fa0b4" strokeWidth="0.75"/>

            {/* Left panel — Python class */}
            <text x="795" y="100" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#5a7a9a">class FormPanel:</text>
            <text x="795" y="116" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#8fa0b4">    width = 340</text>
            <text x="795" y="132" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#8fa0b4">    height = 120</text>
            <text x="795" y="148" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#aab8c8" opacity="0.7">    material = "intent"</text>

            <text x="795" y="210" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#5a7a9a">def pour(self):</text>
            <text x="795" y="226" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#8fa0b4">    discipline = True</text>
            <text x="795" y="242" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#8fa0b4">    noise = False</text>
            <text x="795" y="258" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#aab8c8" opacity="0.7">    return self.build()</text>

            <text x="795" y="318" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#5a7a9a">@property</text>
            <text x="795" y="334" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#8fa0b4">def output(self):</text>
            <text x="795" y="350" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#aab8c8" opacity="0.7">    # as it should be</text>
            <text x="795" y="366" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#5a7a9a">    return Form()</text>

            {/* Right panel */}
            <text x="965" y="100" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#8fa0b4">version = "1.0.0"</text>
            <text x="965" y="116" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#aab8c8" opacity="0.7">studio = "FORM"</text>
            <text x="965" y="132" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#aab8c8" opacity="0.7">intent = "precise"</text>

            <text x="965" y="210" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#8fa0b4">products = [</text>
            <text x="965" y="226" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#5a7a9a">    "chapter_iq",</text>
            <text x="965" y="242" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#aab8c8" opacity="0.7">    # more coming</text>
            <text x="965" y="258" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#8fa0b4">]</text>

            <text x="965" y="318" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#8fa0b4">craft = lambda x:</text>
            <text x="965" y="334" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#8fa0b4">    x.simplify()</text>
            <text x="965" y="350" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#aab8c8" opacity="0.7">     .test()</text>
            <text x="965" y="366" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#aab8c8" opacity="0.7">     .ship()</text>

            {/* Bottom annotations */}
            <text x="795" y="393" fontFamily="'SF Mono','Fira Code',monospace" fontSize="10" fill="#7a8fa0">__author__ = "FORM"</text>
            <text x="795" y="408" fontFamily="'SF Mono','Fira Code',monospace" fontSize="10" fill="#7a8fa0">__license__ = "Built with discipline"</text>
            <text x="965" y="393" fontFamily="'SF Mono','Fira Code',monospace" fontSize="10" fill="#7a8fa0">formworks.io</text>
            <text x="965" y="408" fontFamily="'SF Mono','Fira Code',monospace" fontSize="10" fill="#7a8fa0">© 2025</text>

            {/* Corner registration marks */}
            {[[770,60,790,60,780,50,780,70],[1120,60,1140,60,1130,50,1130,70],[770,460,790,460,780,450,780,470],[1120,460,1140,460,1130,450,1130,470]].map(([x1,y1,x2,y2,x3,y3,x4,y4], i) => (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8fa0b4" strokeWidth="0.75"/>
                <line x1={x3} y1={y3} x2={x4} y2={y4} stroke="#8fa0b4" strokeWidth="0.75"/>
              </g>
            ))}

            {/* Dimension lines */}
            <line x1="1145" y1="60" x2="1145" y2="460" stroke="#8fa0b4" strokeWidth="0.5" strokeDasharray="4 3"/>
            <line x1="1140" y1="60" x2="1150" y2="60" stroke="#8fa0b4" strokeWidth="0.75"/>
            <line x1="1140" y1="460" x2="1150" y2="460" stroke="#8fa0b4" strokeWidth="0.75"/>
            <text x="1158" y="268" fontFamily="'SF Mono','Fira Code',monospace" fontSize="10" fill="#7a8fa0" transform="rotate(90 1158 268)">height = 400px</text>

            <line x1="780" y1="475" x2="1120" y2="475" stroke="#8fa0b4" strokeWidth="0.5" strokeDasharray="4 3"/>
            <line x1="780" y1="470" x2="780" y2="480" stroke="#8fa0b4" strokeWidth="0.75"/>
            <line x1="1120" y1="470" x2="1120" y2="480" stroke="#8fa0b4" strokeWidth="0.75"/>
            <text x="950" y="494" fontFamily="'SF Mono','Fira Code',monospace" fontSize="10" fill="#7a8fa0" textAnchor="middle">width = 340px</text>

            {/* Callout box */}
            <rect x="630" y="80" width="120" height="56" fill="#eef1f5" stroke="#b0bec8" strokeWidth="0.5"/>
            <text x="640" y="100" fontFamily="'SF Mono','Fira Code',monospace" fontSize="11" fill="#5a7a9a">FORM</text>
            <text x="640" y="114" fontFamily="'SF Mono','Fira Code',monospace" fontSize="10" fill="#aab8c8" opacity="0.7">v1.0 — 2025</text>
            <text x="640" y="128" fontFamily="'SF Mono','Fira Code',monospace" fontSize="10" fill="#aab8c8" opacity="0.7">formworks.io</text>
            <line x1="750" y1="108" x2="780" y2="108" stroke="#8fa0b4" strokeWidth="0.5" strokeDasharray="4 3"/>

            {/* Fade overlay */}
            <rect x="0" y="0" width="1200" height="520" fill="url(#fadeLeft)"/>
          </svg>
        </div>

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "600px" }}>
          <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#7a8394", marginBottom: "24px" }}>Software studio</div>
          <h1 style={{ fontSize: "clamp(52px, 7vw, 84px)", fontWeight: "500", lineHeight: "1.02", letterSpacing: "-.03em", color: "#0a0a0a", marginBottom: "24px" }}>
            As it<br />
            <em style={{ fontStyle: "italic", fontWeight: "400", color: "#3d4a5c" }}>should be.</em>
          </h1>
          <p style={{ fontSize: "17px", color: "#5a6472", maxWidth: "440px", lineHeight: "1.75", marginBottom: "48px" }}>
            FORM builds clean, simple, and purposeful software. Products that work the way they're supposed to — nothing more, nothing less.
          </p>
          <a href="#work" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "13px", letterSpacing: ".06em", textTransform: "uppercase", color: "#0a0a0a", textDecoration: "none", borderBottom: "1px solid #0a0a0a", paddingBottom: "4px" }}>
            See our work &nbsp;→
          </a>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "#dde1e7", margin: "0 48px" }} />

      {/* PRODUCTS */}
      <section style={{ padding: "80px 48px" }} id="work">
        <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#7a8394", marginBottom: "48px" }}>Products</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "#dde1e7" }}>
          <div style={{ background: "#0d1117", padding: "48px" }}>
            <div style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#4a6a8a", marginBottom: "20px" }}>Live — Beta</div>
            <div style={{ fontSize: "28px", fontWeight: "500", letterSpacing: "-.02em", color: "#e8eef4", marginBottom: "12px" }}>Chapter IQ</div>
            <p style={{ fontSize: "14px", lineHeight: "1.75", color: "#6a7f94", marginBottom: "28px" }}>Relocation intelligence for people making a real life move. Research neighborhoods, schools, cost of living, and lifestyle fit — all in one place, personalized to you.</p>
            <span style={{ display: "inline-block", fontSize: "11px", letterSpacing: ".08em", textTransform: "uppercase", padding: "6px 12px", borderRadius: "2px", background: "#161c24", color: "#4a6a8a" }}>For individuals &amp; realtors</span>
          </div>
          <div style={{ background: "#f7f8fa", padding: "48px" }}>
            <div style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "#7a8394", marginBottom: "20px" }}>Coming soon</div>
            <div style={{ fontSize: "28px", fontWeight: "500", letterSpacing: "-.02em", color: "#0a0a0a", marginBottom: "12px" }}>Next product</div>
            <p style={{ fontSize: "14px", lineHeight: "1.75", color: "#5a6472", marginBottom: "28px" }}>Something new is taking shape. Built with the same discipline and intention as everything else that comes out of FORM.</p>
            <span style={{ display: "inline-block", fontSize: "11px", letterSpacing: ".08em", textTransform: "uppercase", padding: "6px 12px", borderRadius: "2px", background: "#eaecf0", color: "#7a8394" }}>In development</span>
          </div>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "#dde1e7", margin: "0 48px" }} />

      {/* APPROACH */}
      <section style={{ padding: "80px 48px" }} id="approach">
        <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#7a8394", marginBottom: "48px" }}>How we work</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "48px" }}>
          {[
            { num: "01", title: "Disciplined", desc: "Every decision is intentional. We don't add features because we can. We build what's necessary and do it well." },
            { num: "02", title: "Simple by design", desc: "Complexity is easy. Simplicity takes work. We do the work so the people using our products don't have to think twice." },
            { num: "03", title: "Built to last", desc: "We're not chasing trends. FORM products are built on solid foundations that scale cleanly and age well." },
          ].map(({ num, title, desc }) => (
            <div key={num}>
              <div style={{ fontSize: "11px", letterSpacing: ".1em", color: "#7a8394", marginBottom: "16px" }}>{num}</div>
              <div style={{ fontSize: "16px", fontWeight: "500", marginBottom: "10px", color: "#0a0a0a" }}>{title}</div>
              <p style={{ fontSize: "14px", color: "#5a6472", lineHeight: "1.75" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: "0.5px", background: "#dde1e7", margin: "0 48px" }} />

      {/* ABOUT */}
      <section style={{ padding: "80px 48px" }} id="about">
        <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#7a8394", marginBottom: "48px" }}>About</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: "400", lineHeight: "1.4", letterSpacing: "-.01em", color: "#0a0a0a" }}>
            A small studio that takes the work seriously — without taking itself too seriously.
          </div>
          <div style={{ fontSize: "14px", color: "#5a6472", lineHeight: "1.85" }}>
            <p style={{ marginBottom: "16px" }}>FORM is an independent software studio building products across multiple industries. We don't specialize in a vertical — we specialize in quality.</p>
            <p style={{ marginBottom: "16px" }}>Each product we build is designed for a specific person with a specific problem. No bloat. No noise. Just software that does what it promises.</p>
            <p>Wherever we are, we're building.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "80px 48px", background: "#0d1117" }} id="contact">
        <div style={{ maxWidth: "560px" }}>
          <div style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#2a4a6a", marginBottom: "24px" }}>Get in touch</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "500", letterSpacing: "-.02em", color: "#e8eef4", marginBottom: "16px", lineHeight: "1.15" }}>Let's build something worth building.</h2>
          <p style={{ fontSize: "15px", color: "#4a6070", marginBottom: "40px", lineHeight: "1.75" }}>Have a project in mind or want to know more about what we're working on? We'd like to hear from you.</p>
          <a href="mailto:hello@formworks.io" style={{ fontSize: "17px", color: "#e8eef4", textDecoration: "none", borderBottom: "0.5px solid #2a3a4a", paddingBottom: "4px", letterSpacing: "-.01em" }}>hello@formworks.io</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "28px 48px", borderTop: "0.5px solid #161c24", background: "#0d1117", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: ".08em", color: "#2a3a4a" }}>FORM</div>
        <div style={{ fontSize: "12px", color: "#1e2c3a", letterSpacing: ".04em" }}>formworks.io &nbsp;·&nbsp; As it should be.</div>
      </footer>

    </div>
  );
}

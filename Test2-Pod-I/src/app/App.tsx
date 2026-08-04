import { useState } from "react";
import "../styles/site.css";

// ─── Types ────────────────────────────────────────────────────────────────────
type Page = "home" | "author1" | "author2" | "author3" | "author4" | "author5";

// ─── Shared components ────────────────────────────────────────────────────────

function Navbar({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  return (
    <nav className="tsm-navbar">
      <div className="tsm-navbar-inner">
        <div className="tsm-logo" onClick={() => setPage("home")}>
          <div className="tsm-logo-icon">📖</div>
          Teen Space Map
        </div>
        <ul className="tsm-nav-links">
          {(["home", "author1", "author2", "author3", "author4", "author5"] as Page[]).map((p) => (
            <li key={p}>
              <button
                className={page === p ? "active" : ""}
                onClick={() => { setPage(p); window.scrollTo(0, 0); }}
              >
                {p === "home" ? "Home" : `Author ${p.slice(-1)}`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="tsm-footer">
      <div className="tsm-footer-inner">
        <div className="tsm-footer-top">
          <div>
            <div className="tsm-footer-brand">📖 Teen Space Map</div>
            <p className="tsm-footer-tagline">Find your third place — the spots that aren't home or school.</p>
            <div className="tsm-footer-social">
              {["📸", "🐦", "🎵", "▶️"].map((icon) => (
                <span key={icon}>{icon}</span>
              ))}
            </div>
          </div>
          <div className="tsm-footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><button onClick={() => setPage("home")}>Home</button></li>
              <li><button onClick={() => setPage("home")}>Explore Spaces</button></li>
              <li><button onClick={() => setPage("home")}>Submit a Spot</button></li>
            </ul>
          </div>
          <div className="tsm-footer-col">
            <h4>Team</h4>
            <ul>
              {(["author1","author2","author3","author4","author5"] as Page[]).map((p, i) => (
                <li key={p}><button onClick={() => setPage(p)}>Author {i+1}</button></li>
              ))}
            </ul>
          </div>
          <div className="tsm-footer-col">
            <h4>Categories</h4>
            <ul>
              {["Parks","Libraries","Makerspaces","Arts & Culture"].map((c) => (
                <li key={c}><button onClick={() => setPage("home")}>{c}</button></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tsm-footer-bottom">
          <span>© 2025 Teen Space Map. All rights reserved.</span>
          <span>Made with 💚 by the Teen Space Map Team</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="tsm-hero">
        <div className="tsm-hero-inner">
          <div className="tsm-hero-badge">🗺️ Community-Driven</div>
          <h1 className="tsm-hero-title">Teen Space Map</h1>
          <p className="tsm-hero-sub">
            Find safe, welcoming places outside of home and school where you can socialize,
            learn, volunteer, and connect with your community.
          </p>
          <a href="#spaces" className="tsm-btn tsm-btn-primary">🔍 Explore Spaces</a>
        </div>
      </section>

      {/* What is a Third Space */}
      <div className="tsm-section-wrap alt">
        <div className="tsm-section">
          <div className="tsm-section-label">The Concept</div>
          <h2 className="tsm-section-title">What Is a Third Space?</h2>
          <p className="tsm-section-desc">
            A third space is any place outside of home (first space) and school (second space) where people
            come together, build relationships, and feel a sense of belonging. For teens, these spaces are
            vital for growth, independence, and community connection.
          </p>
          <div className="tsm-why">
            {[
              { icon: "📚", bg: "#dcfce7", title: "Libraries", desc: "Quiet study areas, maker labs, computer access, teen programming, and free events for all ages." },
              { icon: "🏛️", bg: "#ede9fe", title: "Community Centers", desc: "Multipurpose spaces hosting clubs, classes, sports leagues, and youth leadership programs." },
              { icon: "🌳", bg: "#dcfce7", title: "Parks", desc: "Green space for recreation, sports, relaxation, and informal gathering with friends." },
              { icon: "🔧", bg: "#cffafe", title: "Youth Programs", desc: "Mentorship, after-school activities, volunteer opportunities, and career exploration for teens." },
            ].map(({ icon, bg, title, desc }) => (
              <div className="tsm-why-card" key={title}>
                <div className="tsm-why-icon" style={{ background: bg }}>{icon}</div>
                <div className="tsm-why-title">{title}</div>
                <div className="tsm-why-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Spaces */}
      <div className="tsm-section-wrap" id="spaces">
        <div className="tsm-section">
          <div className="tsm-section-label">Discover</div>
          <h2 className="tsm-section-title">Featured Teen Spaces</h2>
          <p className="tsm-section-desc">Explore some of the best spots across New York City where teens can hang out, learn, and grow.</p>
          <div className="tsm-cards">
            {[
              { emoji: "🌳", bg: "#dcfce7", tag: "Parks",           tagStyle: { background: "#dcfce7", color: "#16a34a" }, title: "Central Park – Great Lawn",      desc: "Iconic outdoor space offering sports fields, walking paths, concerts, and open green space for recreation and relaxation." },
              { emoji: "📚", bg: "#dbeafe", tag: "Library",          tagStyle: { background: "#dbeafe", color: "#2563eb" }, title: "NYPL – Rose Main Reading Room", desc: "Stunning reading room offering free access to books, internet, study space, and hundreds of programs for teens." },
              { emoji: "🔧", bg: "#cffafe", tag: "Makerspace",       tagStyle: { background: "#cffafe", color: "#0891b2" }, title: "NYC Resistor",                  desc: "Brooklyn hacker collective with workshops on electronics, laser cutting, 3D printing, and coding." },
              { emoji: "🎨", bg: "#fce7f3", tag: "Arts & Culture",   tagStyle: { background: "#fce7f3", color: "#db2777" }, title: "Bushwick Collective",           desc: "Open-air gallery spanning city blocks, celebrating street art and mural culture in Brooklyn." },
              { emoji: "🛹", bg: "#ffedd5", tag: "Skate Parks",      tagStyle: { background: "#ffedd5", color: "#ea580c" }, title: "Riverside Skate Park",          desc: "Free public skate park along the Hudson River with bowls, rails, and ramps for all skill levels." },
              { emoji: "🏀", bg: "#fee2e2", tag: "Sports",           tagStyle: { background: "#fee2e2", color: "#dc2626" }, title: "LeFrak Center at Lakeside",     desc: "Premier recreation destination in Prospect Park offering ice skating, sports courts, and seasonal programming." },
            ].map(({ emoji, bg, tag, tagStyle, title, desc }) => (
              <div className="tsm-card" key={title}>
                <div className="tsm-card-img" style={{ background: bg }}>{emoji}</div>
                <div className="tsm-card-body">
                  <span className="tsm-card-tag" style={tagStyle}>{tag}</span>
                  <div className="tsm-card-title">{title}</div>
                  <div className="tsm-card-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why It Matters */}
      <div className="tsm-section-wrap alt">
        <div className="tsm-section">
          <div className="tsm-section-label">Why It Matters</div>
          <h2 className="tsm-section-title">The Power of Third Spaces</h2>
          <p className="tsm-section-desc">Third spaces play a crucial role in teen development — far beyond just having somewhere to hang out.</p>
          <div className="tsm-why">
            {[
              { icon: "🤝", bg: "#dcfce7", title: "Social Connection",      desc: "In-person spaces let teens form friendships, develop empathy, and practice communication outside the classroom." },
              { icon: "🌍", bg: "#dbeafe", title: "Community Involvement",   desc: "Volunteering and attending local events builds civic identity and a sense of responsibility toward the neighborhood." },
              { icon: "📖", bg: "#fef3c7", title: "Learning Opportunities",  desc: "From maker workshops to coding clubs, third spaces offer informal learning that sparks curiosity and career paths." },
              { icon: "💜", bg: "#ede9fe", title: "Sense of Belonging",      desc: "Finding a place where you're welcomed and valued is essential for teen mental health and self-confidence." },
            ].map(({ icon, bg, title, desc }) => (
              <div className="tsm-why-card" key={title}>
                <div className="tsm-why-icon" style={{ background: bg }}>{icon}</div>
                <div className="tsm-why-title">{title}</div>
                <div className="tsm-why-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research */}
      <div className="tsm-section-wrap">
        <div className="tsm-section">
          <div className="tsm-section-label">Community Research</div>
          <h2 className="tsm-section-title">What Teens Are Saying</h2>
          <p className="tsm-section-desc">Our research shows a clear need for better awareness and access to local community spaces.</p>
          <div className="tsm-stats">
            {[
              { num: "78%", label: "Teens want safe places to gather with friends" },
              { num: "65%", label: "Want more activities and volunteer opportunities" },
              { num: "52%", label: "Unaware of community resources near them" },
              { num: "89%", label: "Feel more connected after visiting a third space" },
            ].map(({ num, label }) => (
              <div className="tsm-stat" key={num}>
                <div className="tsm-stat-num">{num}</div>
                <div className="tsm-stat-label">{label}</div>
              </div>
            ))}
          </div>
          <div className="tsm-research">
            <blockquote>
              "In-person community spaces remain essential for teen social development. Digital spaces complement, but cannot replace,
              the authentic relationships and lived experiences formed in physical third places. Teens who regularly access third spaces
              report higher levels of community belonging and social wellbeing."
            </blockquote>
            <cite>— Adapted from <em>Tensions in the Third Space: Examining the Digital Visual Culture of Teenagers</em> by Brad Olson</cite>
          </div>
        </div>
      </div>

      {/* Community Impact */}
      <div className="tsm-section-wrap alt">
        <div className="tsm-section">
          <div className="tsm-section-label">Our Impact</div>
          <h2 className="tsm-section-title">How Teen Space Map Makes a Difference</h2>
          <ul className="tsm-impact">
            {[
              "Increases community engagement by connecting teens to local organizations, clubs, and volunteer programs they didn't know existed.",
              "Helps teens discover resources like free tutoring, mental health support, art classes, and career mentorship programs.",
              "Encourages participation in civic life by surfacing community events, town halls, and neighborhood improvement projects.",
              "Strengthens belonging by showing teens they are part of a larger community that values and supports them.",
              "Bridges the digital-physical divide by turning online searches into real in-person connections and experiences.",
            ].map((item) => (
              <li key={item}>
                <span className="tsm-impact-check">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="tsm-cta">
        <h2 className="tsm-section-title">Find Your Third Place</h2>
        <p style={{ color: "#374151", fontSize: "1.05rem", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.6 }}>
          Your perfect hangout spot is out there. Explore local parks, libraries, makerspaces,
          and more — all mapped and rated by teens like you.
        </p>
        <a href="#spaces" className="tsm-btn tsm-btn-primary">🗺️ Explore the Map</a>
      </div>
    </>
  );
}

// ─── Author Page ──────────────────────────────────────────────────────────────

interface AuthorData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  avatarIsImage?: boolean;
  tags: { label: string; cls: string }[];
  skills: { name: string; pct: number }[];
  projects: { emoji: string; bg: string; title: string; desc: string }[];
  interests: { emoji: string; label: string }[];
  contact: { icon: string; label: string; value: string }[];
}

function AuthorPage({ data }: { data: AuthorData }) {
  return (
    <>
      {/* Hero */}
      <div className="tsm-author-hero">
        <div className="tsm-author-hero-inner">
          <div className="tsm-avatar">
            {data.avatarIsImage
              ? <img src={data.avatar} alt={data.name} />
              : <span>{data.avatar}</span>
            }
          </div>
          <div>
            <h1 className="tsm-author-name">{data.name}</h1>
            <p className="tsm-author-title">{data.title}</p>
            <p className="tsm-author-bio">{data.bio}</p>
            <div className="tsm-tags">
              {data.tags.map(({ label, cls }) => (
                <span key={label} className={`tsm-tag ${cls}`}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="tsm-section-wrap alt">
        <div className="tsm-section">
          <div className="tsm-section-label">Expertise</div>
          <h2 className="tsm-section-title">Skills</h2>
          <div className="tsm-skills">
            {data.skills.map(({ name, pct }) => (
              <div className="tsm-skill" key={name}>
                <div className="tsm-skill-name">{name}</div>
                <div className="tsm-skill-bar-bg">
                  <div className="tsm-skill-bar" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="tsm-section-wrap">
        <div className="tsm-section">
          <div className="tsm-section-label">Work</div>
          <h2 className="tsm-section-title">Projects</h2>
          <div className="tsm-projects">
            {data.projects.map(({ emoji, bg, title, desc }) => (
              <div className="tsm-project-card" key={title}>
                <div className="tsm-project-img" style={{ background: bg }}>{emoji}</div>
                <div className="tsm-project-body">
                  <div className="tsm-project-title">{title}</div>
                  <div className="tsm-project-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="tsm-section-wrap alt">
        <div className="tsm-section">
          <div className="tsm-section-label">Beyond the Work</div>
          <h2 className="tsm-section-title">Interests</h2>
          <div className="tsm-interests">
            {data.interests.map(({ emoji, label }) => (
              <div className="tsm-interest" key={label}>
                <span>{emoji}</span> {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="tsm-section-wrap">
        <div className="tsm-section">
          <div className="tsm-section-label">Get in Touch</div>
          <h2 className="tsm-section-title">Contact</h2>
          <div className="tsm-contacts">
            {data.contact.map(({ icon, label, value }) => (
              <div className="tsm-contact-item" key={label}>
                <div className="tsm-contact-icon">{icon}</div>
                <div>
                  <div className="tsm-contact-label">{label}</div>
                  <div className="tsm-contact-value">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Author data ──────────────────────────────────────────────────────────────

const AUTHORS: Record<string, AuthorData> = {
  author1: {
    name: "Your Name Here",
    title: "Add your title · Your City",
    bio: "Upload your photo and share your name, title, and bio to personalize this page. This is your portfolio — tell the world who you are and what you're building.",
    avatar: "🙂",
    avatarIsImage: false,
    tags: [
      { label: "Teen Space Map Team", cls: "tsm-tag-green" },
      { label: "Author 1", cls: "tsm-tag-blue" },
    ],
    skills: [
      { name: "Add Your Skill", pct: 80 },
      { name: "Add Your Skill", pct: 70 },
      { name: "Add Your Skill", pct: 65 },
      { name: "Add Your Skill", pct: 55 },
    ],
    projects: [
      { emoji: "🗺️", bg: "#dcfce7", title: "Teen Space Map", desc: "A community-driven map helping teens discover safe and welcoming spaces across their city." },
      { emoji: "💡", bg: "#fef3c7", title: "Your Project", desc: "Add a description of a project you've worked on — personal, school, or professional." },
      { emoji: "🚀", bg: "#dbeafe", title: "Your Project", desc: "Highlight your work, achievements, or side projects that showcase your skills." },
    ],
    interests: [
      { emoji: "🌳", label: "Community Spaces" },
      { emoji: "🗺️", label: "Urban Mapping" },
      { emoji: "📚", label: "Learning" },
      { emoji: "🤝", label: "Volunteering" },
    ],
    contact: [
      { icon: "📧", label: "Email", value: "your@email.com" },
      { icon: "🐙", label: "GitHub", value: "github.com/you" },
      { icon: "🐦", label: "Twitter", value: "@yourhandle" },
      { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/you" },
    ],
  },
  author2: {
    name: "Author Two",
    title: "Researcher & Community Advocate · New York, NY",
    bio: "Passionate about understanding how teens interact with urban spaces. My research focuses on the social dynamics of third places and how digital tools can help bridge teens to their communities.",
    avatar: "🧑‍🔬",
    avatarIsImage: false,
    tags: [
      { label: "Researcher", cls: "tsm-tag-purple" },
      { label: "Civic Tech", cls: "tsm-tag-green" },
      { label: "Community Advocate", cls: "tsm-tag-teal" },
    ],
    skills: [
      { name: "Community Research", pct: 90 },
      { name: "Data Analysis", pct: 80 },
      { name: "Survey Design", pct: 75 },
      { name: "Public Speaking", pct: 85 },
      { name: "Grant Writing", pct: 65 },
      { name: "Program Development", pct: 70 },
    ],
    projects: [
      { emoji: "🗺️", bg: "#dcfce7", title: "Teen Space Map", desc: "Led community research identifying gaps in teen awareness of local third spaces across NYC." },
      { emoji: "📊", bg: "#ede9fe", title: "Teen Engagement Study", desc: "Surveyed 200+ teens to understand how and why they access (or don't access) community spaces." },
      { emoji: "🎙️", bg: "#cffafe", title: "Community Voices Podcast", desc: "A short-form podcast featuring teens sharing stories about their favorite third places and what made them feel welcomed." },
    ],
    interests: [
      { emoji: "📖", label: "Urban Sociology" },
      { emoji: "🎙️", label: "Podcasting" },
      { emoji: "🌍", label: "Social Justice" },
      { emoji: "🧪", label: "Field Research" },
      { emoji: "🎨", label: "Street Art" },
    ],
    contact: [
      { icon: "📧", label: "Email", value: "author2@teensspacemap.org" },
      { icon: "🐙", label: "GitHub", value: "github.com/author2" },
      { icon: "🐦", label: "Twitter", value: "@author2" },
      { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/author2" },
    ],
  },
  author3: {
    name: "Author Three",
    title: "UI/UX Designer · Brooklyn, NY",
    bio: "I believe design should be accessible and joyful for everyone. I created the visual identity and user experience for Teen Space Map — from the color-coded category system to the mobile-first map layout.",
    avatar: "🎨",
    avatarIsImage: false,
    tags: [
      { label: "UI/UX Designer", cls: "tsm-tag-pink" },
      { label: "Figma", cls: "tsm-tag-purple" },
      { label: "Accessibility", cls: "tsm-tag-teal" },
    ],
    skills: [
      { name: "Figma & Prototyping", pct: 95 },
      { name: "Visual Design",       pct: 90 },
      { name: "User Research",        pct: 75 },
      { name: "CSS / Tailwind",       pct: 80 },
      { name: "Motion Design",        pct: 65 },
      { name: "Accessibility (WCAG)", pct: 70 },
    ],
    projects: [
      { emoji: "🗺️", bg: "#dcfce7", title: "Teen Space Map",      desc: "Designed the full UI — logo, category pill system, color palette, map layout, and all components." },
      { emoji: "📱", bg: "#fce7f3", title: "Youth Center App",     desc: "Mobile-first app helping teens browse activities at their local community center. iOS & Android." },
      { emoji: "🎨", bg: "#ede9fe", title: "Brand Identity Kit",   desc: "Created brand guidelines, typography, and icon system for a Brooklyn youth nonprofit." },
    ],
    interests: [
      { emoji: "🎨", label: "Illustration" },
      { emoji: "📱", label: "Mobile Design" },
      { emoji: "🌈", label: "Color Theory" },
      { emoji: "🏙️", label: "Urban Design" },
      { emoji: "📷", label: "Photography" },
    ],
    contact: [
      { icon: "📧", label: "Email", value: "author3@teenspacemap.org" },
      { icon: "🎨", label: "Dribbble", value: "dribbble.com/author3" },
      { icon: "📷", label: "Instagram", value: "@author3designs" },
      { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/author3" },
    ],
  },
  author4: {
    name: "Author Four",
    title: "Backend Engineer · Queens, NY",
    bio: "I built the data infrastructure behind Teen Space Map — the API, database, and location services that power real-time place discovery. I love solving problems at the intersection of community and technology.",
    avatar: "⚙️",
    avatarIsImage: false,
    tags: [
      { label: "Backend Engineer", cls: "tsm-tag-blue" },
      { label: "Node.js", cls: "tsm-tag-green" },
      { label: "PostgreSQL", cls: "tsm-tag-teal" },
    ],
    skills: [
      { name: "Node.js / Express", pct: 90 },
      { name: "PostgreSQL",        pct: 85 },
      { name: "REST APIs",          pct: 92 },
      { name: "Docker",             pct: 75 },
      { name: "AWS / Cloud",        pct: 70 },
      { name: "Python",             pct: 65 },
    ],
    projects: [
      { emoji: "🗺️", bg: "#dcfce7", title: "Teen Space Map API",   desc: "RESTful API handling place submissions, ratings, geolocation queries, and category filtering." },
      { emoji: "🗄️", bg: "#dbeafe", title: "Community DB Schema",  desc: "Designed the PostgreSQL schema for places, users, reviews, and category taxonomy." },
      { emoji: "🤖", bg: "#fef3c7", title: "Moderation Bot",        desc: "Automated content moderation pipeline to review submitted spots before they go live on the map." },
    ],
    interests: [
      { emoji: "⚙️", label: "Systems Design" },
      { emoji: "🔐", label: "Cybersecurity" },
      { emoji: "🎮", label: "Game Dev" },
      { emoji: "🚴", label: "Cycling" },
      { emoji: "📡", label: "Networking" },
    ],
    contact: [
      { icon: "📧", label: "Email", value: "author4@teenspacemap.org" },
      { icon: "🐙", label: "GitHub", value: "github.com/author4" },
      { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/author4" },
      { icon: "📡", label: "Portfolio", value: "author4.dev" },
    ],
  },
  author5: {
    name: "Author Five",
    title: "Project Manager & Content Lead · The Bronx, NY",
    bio: "I kept the team on track and made sure Teen Space Map told a story people care about. I coordinated our outreach, wrote the copy, and managed relationships with local organizations and youth centers.",
    avatar: "📋",
    avatarIsImage: false,
    tags: [
      { label: "Project Manager", cls: "tsm-tag-orange" },
      { label: "Content Strategy", cls: "tsm-tag-pink" },
      { label: "Community Outreach", cls: "tsm-tag-green" },
    ],
    skills: [
      { name: "Project Management",   pct: 92 },
      { name: "Content Writing",       pct: 88 },
      { name: "Community Outreach",    pct: 85 },
      { name: "Social Media Strategy", pct: 80 },
      { name: "Partnership Building",  pct: 75 },
      { name: "Agile / Scrum",         pct: 70 },
    ],
    projects: [
      { emoji: "🗺️", bg: "#dcfce7", title: "Teen Space Map Launch",   desc: "Coordinated the full project lifecycle — planning, sprints, stakeholder comms, and final launch." },
      { emoji: "✍️", bg: "#ffedd5", title: "Content & Copy",           desc: "Wrote all website copy, space descriptions, and outreach materials for Teen Space Map." },
      { emoji: "🤝", bg: "#fce7f3", title: "Youth Org Partnerships",   desc: "Built relationships with 12 NYC youth organizations to feature their spaces on the map." },
    ],
    interests: [
      { emoji: "✍️", label: "Storytelling" },
      { emoji: "🎭", label: "Theater" },
      { emoji: "📱", label: "Social Media" },
      { emoji: "🌱", label: "Community Building" },
      { emoji: "🍕", label: "Food Culture" },
    ],
    contact: [
      { icon: "📧", label: "Email", value: "author5@teenspacemap.org" },
      { icon: "🐦", label: "Twitter", value: "@author5" },
      { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/author5" },
      { icon: "📱", label: "Instagram", value: "@author5nyc" },
    ],
  },
};

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="tsm-app">
      <Navbar page={page} setPage={setPage} />
      {page === "home" && <HomePage />}
      {page !== "home" && <AuthorPage data={AUTHORS[page]} />}
      <Footer setPage={setPage} />
    </div>
  );
}

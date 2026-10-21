import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  GraduationCap,
  BriefcaseBusiness,
  Mail,
  Menu,
  Moon,
  Send,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'
import profile from './data/profile'
import resumeFile from './assets/resume.pdf'

const iconMap = {
  Languages: Code2,
  Frontend: Sparkles,
  Backend: Send,
  'AI / ML': BrainCircuit,
  Databases: Check,
  Tools: Code2,
}

function ExternalLinkButton({ href, children, secondary = false }) {
  return (
    <a
      className={`button ${secondary ? 'button-secondary' : 'button-primary'}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    const year = new Date().getFullYear()
    document.title = `${profile.name} — Software Engineer`
    document.documentElement.style.setProperty('--current-year', `"${year}"`)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = form.get('subject') || 'Portfolio enquiry'
    const body = `Hi ${profile.firstName},\n\n${form.get('message')}\n\nFrom: ${form.get('name')} (${form.get('email')})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFormStatus('Your email client should open with the message ready to send.')
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Back to top">
            <span className="brand-mark">VK</span>
            <span>{profile.firstName} Kumar</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
            <span className="sr-only">Toggle navigation</span>
          </button>
          <div id="primary-menu" className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            {profile.navigation.map((item) => (
              <a href={item.href} key={item.label} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="nav-resume" href={resumeFile} download="Vijay-Kumar-Resume.pdf" onClick={closeMenu}>
              Resume <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero section container" aria-labelledby="hero-heading">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Available for software engineering opportunities</p>
            <h1 id="hero-heading">Building thoughtful software for <em>real-world</em> problems.</h1>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View selected work <ArrowUpRight size={16} /></a>
              <a className="button button-quiet" href={resumeFile} download="Vijay-Kumar-Resume.pdf">Download resume <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><span className="meta-number">9.45</span> / 10 CGPA</span>
              <span><span className="meta-number">3×</span> competition finalist</span>
              <span><span className="meta-number">2027</span> graduating</span>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay" aria-label="Code editor illustration">
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>vijay-kumar.ts</small></div>
              <div className="code-content">
                <p><i>01</i> <b>const</b> <span>engineer</span> = {'{'}</p>
                <p><i>02</i> &nbsp;name: <strong>&quot;Vijay Kumar&quot;</strong>,</p>
                <p><i>03</i> &nbsp;focus: [</p>
                <p><i>04</i> &nbsp;&nbsp;<strong>&quot;full-stack&quot;</strong>,</p>
                <p><i>05</i> &nbsp;&nbsp;<strong>&quot;backend&quot;</strong>,</p>
                <p><i>06</i> &nbsp;&nbsp;<strong>&quot;applied AI&quot;</strong></p>
                <p><i>07</i> &nbsp;],</p>
                <p><i>08</i> &nbsp;openTo: <strong>true</strong>,</p>
                <p><i>09</i> {'}'}</p>
                <p><i>10</i> </p>
                <p><i>11</i> <b>export default</b> engineer</p>
              </div>
              <div className="code-status"><span>● main</span><span>⌘ TypeScript</span><span>Ln 11, Col 27</span></div>
            </div>
            <div className="visual-note note-one"><Award size={15} /> Hackathon runner-up</div>
            <div className="visual-note note-two"><span className="pulse-line" /> shipping with intent</div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Highlights">
          <div className="container trust-items">
            {profile.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
          </div>
        </section>

        <section id="about" className="section container split-section" aria-labelledby="about-heading">
          <div className="section-label">01 / about</div>
          <div className="section-content about-grid">
            <div>
              <h2 id="about-heading">Curious by default.<br /><em>Useful by design.</em></h2>
            </div>
            <div className="about-copy">
              <p>I&apos;m Vijay, an Artificial Intelligence and Machine Learning student at Anurag University, Hyderabad. I enjoy taking ambiguous problems, finding the simple shape underneath, and turning that shape into software people can actually use.</p>
              <p>My work sits at the intersection of reliable backend systems, polished interfaces, and practical machine learning. I care about the details that make products feel considered: clear states, fast feedback, and code that another engineer can confidently extend.</p>
              <a className="text-link" href="#contact">Let&apos;s build something useful <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="skills" className="section container split-section" aria-labelledby="skills-heading">
          <div className="section-label">02 / toolkit</div>
          <div className="section-content">
            <div className="section-heading-row">
              <div><h2 id="skills-heading">Tools for turning<br /><em>ideas into impact.</em></h2></div>
              <p className="section-aside">A practical stack shaped by building end-to-end projects, not collecting badges.</p>
            </div>
            <div className="skills-grid">
              {Object.entries(profile.skills).map(([category, skills]) => {
                const Icon = iconMap[category]
                return <article className="skill-card" key={category}><Icon size={19} strokeWidth={1.7} /><h3>{category}</h3><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section container split-section" aria-labelledby="projects-heading">
          <div className="section-label">03 / selected work</div>
          <div className="section-content">
            <div className="section-heading-row"><div><h2 id="projects-heading">Work that makes<br /><em>the case.</em></h2></div><p className="section-aside">A few projects where product thinking meets engineering depth.</p></div>
            <div className="projects-list">
              {profile.projects.map((project, index) => (
                <article className="project-card" key={project.name}>
                  <div className={`project-art art-${index + 1}`} aria-hidden="true">
                    <span className="art-kicker">{project.kicker}</span>
                    <span className="art-title">{project.artTitle}</span>
                    <span className="art-lines" />
                  </div>
                  <div className="project-details">
                    <div className="project-title-row"><div><span className="project-index">0{index + 1}</span><h3>{project.name}</h3></div><ExternalLink size={19} aria-hidden="true" /></div>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <div className="project-links"><ExternalLinkButton href={project.github}>Source code</ExternalLinkButton></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section container split-section" aria-labelledby="achievements-heading">
          <div className="section-label">04 / proof of work</div>
          <div className="section-content">
            <div className="section-heading-row"><div><h2 id="achievements-heading">Milestones worth<br /><em>mentioning.</em></h2></div><p className="section-aside">Competitive problem-solving and consistent academic performance.</p></div>
            <div className="achievement-list">
              {profile.achievements.map((achievement) => <article className="achievement-card" key={achievement.title}><span className="achievement-icon">{achievement.icon}</span><div><p className="achievement-eyebrow">{achievement.eyebrow}</p><h3>{achievement.title}</h3><p>{achievement.detail}</p></div></article>)}
            </div>
            <div className="education-card"><GraduationCap size={24} /><div><p className="achievement-eyebrow">Education · 2023 — 2027</p><h3>B.Tech in Artificial Intelligence &amp; Machine Learning</h3><p>Anurag University · Hyderabad <span className="education-score">9.45 / 10 CGPA</span></p></div></div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div><p className="eyebrow">05 / contact</p><h2>Have a good problem?<br /><em>Let&apos;s talk.</em></h2><p className="contact-intro">I&apos;m currently open to internships, software engineering opportunities, and interesting collaborations.</p><div className="contact-links"><a href={`mailto:${profile.email}`}><Mail size={17} /> {profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub <ArrowUpRight size={14} /></a></div></div>
            <form className="contact-form" onSubmit={handleContactSubmit}><label htmlFor="name">Your name<input required id="name" name="name" /></label><label htmlFor="email">Email address<input required type="email" id="email" name="email" /></label><label htmlFor="subject">Subject<input required id="subject" name="subject" /></label><label htmlFor="message">Message<textarea required id="message" name="message" rows="4" /></label><button className="button button-primary" type="submit">Open email draft <Send size={16} /></button>{formStatus && <p className="form-status" role="status">{formStatus}</p>}</form>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed &amp; built with care</span><a href="#top">Back to top <ChevronDown size={14} className="back-top-icon" /></a></div></footer>
      <div className="sr-only"><Moon /> Built in React</div>
    </div>
  )
}

export default App

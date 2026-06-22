import { useState } from 'react'
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  X,
} from 'lucide-react'

const projects = [
  {
    type: 'retina',
    number: '01',
    category: 'Netramind Innovations',
    title: 'Retinal Image Segmentation',
    meta: 'PyTorch · U-Net++ · Medical Imaging',
    text: 'A computer vision pipeline for segmenting retinal non-perfusion regions in fluorescein angiography images.',
    result: 'Preprocessing · training · Dice / IoU evaluation',
  },
  {
    type: 'generation',
    number: '02',
    category: 'Lockheed Martin',
    title: 'Generative Image Service',
    meta: 'Python · SDXL · REST APIs',
    text: 'An internal service for generating and processing images with configurable model parameters and automated workflows.',
    result: 'API design · model orchestration · image processing',
  },
  {
    type: 'airfoil',
    number: '03',
    category: 'University of Florida',
    title: 'Transonic Airfoil Simulation',
    meta: 'Python · FORTRAN · Numerical Methods',
    text: 'Simulation software used to study airflow around airfoils under several transonic flight conditions.',
    result: 'Mach 0.5–1.5 · aerodynamic modeling',
    link: '/papers/CFD-Analysis-of-Airfoil-Shapes.pdf',
    linkLabel: 'View research paper',
  },
  {
    type: 'digit',
    number: '04',
    category: 'Personal ML project',
    title: 'Draw-a-Digit',
    meta: 'Python · TensorFlow · Neural Networks',
    text: 'An interactive digit classifier trained on MNIST. Users can draw a number and see the model’s prediction and confidence scores.',
    result: 'Interactive prediction UI',
    link: 'https://github.com/dshah201/drawing-digits-nn',
    linkLabel: 'View GitHub repository',
  },
  {
    type: 'sensor',
    number: '05',
    category: 'Embedded systems',
    title: 'Embedded Sensor Monitor',
    meta: 'C/C++ · Microcontrollers · I2C',
    text: 'A microcontroller project that reads temperature sensors over I2C and displays the measurements on an LCD.',
    result: 'Sensor-to-display prototype',
  },
  {
    type: 'app',
    number: '06',
    category: 'iOS project',
    title: 'Mighty Calculator',
    meta: 'Swift · iOS · App Store',
    text: 'A multi-purpose calculator and converter that I designed and built in Swift.',
    result: '200+ downloads · 5.0 rating',
  },
]

const panels = [
  {
    id: 'experience',
    label: 'Experience',
    icon: FileText,
    eyebrow: 'Experience',
    title: 'Work and research',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: BriefcaseBusiness,
    eyebrow: 'Projects',
    title: 'Selected projects',
  },
  {
    id: 'academics',
    label: 'Academics',
    icon: GraduationCap,
    eyebrow: 'Education',
    title: 'Carnegie Mellon',
  },
  {
    id: 'accomplishments',
    label: 'Highlights',
    icon: Award,
    eyebrow: 'Highlights',
    title: 'A few accomplishments',
  },
  {
    id: 'resumes',
    label: 'Resumes',
    icon: BookOpen,
    eyebrow: 'Resumes',
    title: 'Choose a resume',
  },
  {
    id: 'contact',
    label: 'Connect',
    icon: Mail,
    eyebrow: 'Contact',
    title: 'Get in touch',
  },
]

const resumes = [
  ['Hardware', 'Circuits, sensors, and embedded systems', '/resumes/Dhruv-Shah-Hardware-Resume.pdf'],
  ['Software', 'APIs, applications, and algorithms', '/resumes/Dhruv-Shah-Software-Resume.pdf'],
]

function Exosuit({ activeZone }) {
  return (
    <div className={`suit-wrap ${activeZone ? 'is-active' : ''}`} aria-label="Animated wearable exosuit schematic">
      <div className="suit-orbit orbit-one" />
      <div className="suit-orbit orbit-two" />
      <div className="scan-line" />
      <svg className="suit" viewBox="0 0 330 680">
        <defs>
          <linearGradient id="armor" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4a4b44" />
            <stop offset=".5" stopColor="#292c29" />
            <stop offset="1" stopColor="#151816" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g className="body-wire">
          <path d="M132 42 L114 72 L117 128 L137 155 L193 155 L213 128 L216 72 L198 42 L165 29 Z" />
          <path d="M119 95 L143 111 L187 111 L211 95" />
          <path d="M136 155 L95 174 L74 231 L103 253 L120 221 L117 349 L139 386 L191 386 L213 349 L210 221 L227 253 L256 231 L235 174 L194 155" />
          <path d="M117 184 L165 205 L213 184 L202 293 L165 325 L128 293 Z" />
          <path d="M95 174 L61 194 L36 300 L62 309 L103 253" />
          <path d="M235 174 L269 194 L294 300 L268 309 L227 253" />
          <path d="M36 300 L27 393 L57 398 L62 309" />
          <path d="M294 300 L303 393 L273 398 L268 309" />
          <path d="M139 386 L111 424 L102 538 L137 542 L158 421 Z" />
          <path d="M191 386 L219 424 L228 538 L193 542 L172 421 Z" />
          <path d="M102 538 L89 637 L132 637 L137 542" />
          <path d="M228 538 L241 637 L198 637 L193 542" />
        </g>
        <g className="body-plates">
          <path d="M133 48 L120 76 L123 123 L141 145 L189 145 L207 123 L210 76 L197 48 L165 38 Z" />
          <path d="M124 165 L99 179 L80 228 L104 242 L123 208 Z" />
          <path d="M206 165 L231 179 L250 228 L226 242 L207 208 Z" />
          <path d="M125 176 L165 196 L205 176 L197 284 L165 312 L133 284 Z" />
          <path d="M129 294 L165 324 L201 294 L204 346 L186 374 L144 374 L126 346 Z" />
          <path d="M91 186 L66 201 L43 294 L60 299 L97 242 Z" />
          <path d="M239 186 L264 201 L287 294 L270 299 L233 242 Z" />
          <path d="M43 310 L35 385 L53 389 L58 311 Z" />
          <path d="M287 310 L295 385 L277 389 L272 311 Z" />
          <path d="M143 394 L119 430 L111 527 L134 530 L155 415 Z" />
          <path d="M187 394 L211 430 L219 527 L196 530 L175 415 Z" />
          <path d="M111 541 L99 626 L127 626 L133 541 Z" />
          <path d="M219 541 L231 626 L203 626 L197 541 Z" />
        </g>
        <g className="panel-lines">
          <path d="M123 208 L144 226 M207 208 L186 226 M133 284 L165 270 L197 284" />
          <path d="M119 430 L139 448 M211 430 L191 448 M111 527 L134 500 M219 527 L196 500" />
        </g>
        <g className="suit-lights" filter="url(#glow)">
          <path d="M142 91 L154 86 L176 86 L188 91 L180 99 L150 99 Z" />
          <circle cx="165" cy="245" r="24" />
          <circle cx="165" cy="245" r="11" />
          <path d="M43 349 L56 349 M274 349 L287 349" />
        </g>
      </svg>
      <span className="suit-caption">WEARABLE TECHNOLOGY STUDY</span>
    </div>
  )
}

function PanelContent({ id }) {
  if (id === 'projects') {
    return <>
      <div className="project-index">
        <div className="index-orb"><i /><i /><span>06</span></div>
        <div><small>PROJECT INDEX</small><strong>Six technical case studies</strong></div>
        <span className="index-state"><i /> ONLINE</span>
      </div>
      <div className="project-gallery">{projects.map((project) => (
        <article className={`project-case ${project.link ? 'project-linked' : ''}`} key={project.title}>
          <ProjectVisual type={project.type} />
          <div className="project-case-copy">
            <div className="project-overline"><span>{project.number}</span>{project.category}</div>
            <h3>{project.title}</h3>
            <small>{project.meta}</small>
            <p>{project.text}</p>
            <strong>{project.result}</strong>
            {project.link && <a className="project-card-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.linkLabel}: ${project.title}`}>
              <span>{project.linkLabel}</span><ExternalLink size={15} />
            </a>}
          </div>
        </article>
      ))}</div>
    </>
  }

  if (id === 'experience') {
    return <>
      <div className="timeline">
        <article><time>2026</time><OrgLogo type="netramind" /><div><h3>Netramind Innovations</h3><small>AI/ML Medical Imaging Intern</small><p>Developing deep-learning pipelines for retinal ischemia segmentation.</p></div></article>
        <article><time>2025</time><OrgLogo type="lockheed" /><div><h3>Lockheed Martin</h3><small>Software Engineering Intern</small><p>Built a generative-image platform using SDXL, Python APIs, and model orchestration.</p></div></article>
        <article><time>2024</time><OrgLogo type="uf" /><div><h3>University of Florida</h3><small>Computational Research Assistant</small><p>Developed transonic airfoil simulation software in Python and FORTRAN.</p><a className="experience-link" href="/papers/CFD-Analysis-of-Airfoil-Shapes.pdf" target="_blank" rel="noreferrer">View paper <ExternalLink size={14} /></a></div></article>
        <article><time>CMU</time><OrgLogo type="cmu" /><div><h3>First-Year Orientation</h3><small>Orientation Counselor</small><p>Helped welcome incoming students and supported them through their transition to Carnegie Mellon.</p></div></article>
      </div>
      <p className="trademark-note">Organization names and marks belong to their respective owners and are shown only to identify affiliations. No endorsement is implied.</p>
    </>
  }

  if (id === 'academics') {
    return <div className="academic-card">
      <GraduationCap size={38} />
      <h3>Carnegie Mellon University</h3>
      <p>B.S. in Electrical and Computer Engineering<br />Minor in Artificial Intelligence</p>
      <strong>3.73 QPA</strong>
      <div className="academic-honor"><Award size={19} /> Dean’s List</div>
      <div className="course-tags">
        <span>Digital Systems</span><span>Data Structures</span><span>Linear Algebra</span>
        <span>Probability</span><span>Computer Engineering</span>
      </div>
    </div>
  }

  if (id === 'accomplishments') {
    return <div className="highlight-grid">
      <div><strong>200+</strong><p>App Store downloads across multiple continents</p></div>
      <div><strong>7th</strong><p>National research placement for predictive economic modeling</p></div>
      <div><strong>Dean’s List</strong><p>Academic distinction at Carnegie Mellon University</p></div>
      <div><strong>3</strong><p>Technical domains: intelligent software, embedded hardware, and research</p></div>
    </div>
  }

  if (id === 'resumes') {
    return <div className="resume-list">{resumes.map(([label, note, file]) => (
      <a href={file} target="_blank" rel="noreferrer" key={label}>
        <div><h3>{label}</h3><p>{note}</p></div><Download size={21} />
      </a>
    ))}</div>
  }

  return <div className="contact-panel">
    <p>I’m interested in internships, research, and projects related to wearable technology, embedded systems, circuit design, and ML/AI.</p>
    <a href="mailto:shahdhruv741@gmail.com"><Mail size={20} /> Email me <ExternalLink size={17} /></a>
    <a href="https://github.com/dshah201" target="_blank" rel="noreferrer"><Github size={20} /> GitHub <ExternalLink size={17} /></a>
    <a href="https://www.linkedin.com/in/dhruvshah07" target="_blank" rel="noreferrer"><Linkedin size={20} /> LinkedIn <ExternalLink size={17} /></a>
  </div>
}

function OrgLogo({ type }) {
  const logos = {
    netramind: ['/logos/netramind.png', 'Netramind Innovations'],
    lockheed: ['/logos/lockheed.png', 'Lockheed Martin'],
    uf: ['/logos/uf.png', 'University of Florida'],
    cmu: ['/logos/cmu.png', 'Carnegie Mellon University'],
  }
  const [src, alt] = logos[type]
  return <div className={`org-logo ${type}-logo`}><img src={src} alt={`${alt} logo`} /></div>
}

function ProjectVisual({ type }) {
  if (type === 'digit') {
    return <div className="project-visual digit-visual">
      <div className="digit-canvas"><span>4</span></div>
      <div className="digit-result">
        <small>PREDICTION</small><strong>4</strong>
        <div className="confidence"><i /><span>100%</span></div>
        <div className="confidence faint"><i /><span>0%</span></div>
        <div className="confidence faint"><i /><span>0%</span></div>
      </div>
    </div>
  }

  if (type === 'app') {
    return <div className="project-visual app-visual">
      <div className="app-icon"><span>MC</span></div>
      <div className="app-copy"><small>BUILT FOR IOS</small><strong>Mighty<br />Calculator</strong><span>★★★★★</span></div>
      <div className="phone-preview"><i /><i /><i /></div>
    </div>
  }

  if (type === 'sensor') {
    return <div className="project-visual sensor-visual">
      <div className="board"><i /><i /><i /><i /><span>MCU</span></div>
      <svg viewBox="0 0 300 100"><path d="M8 51 H58 L69 30 L84 73 L100 51 H157 L171 40 L185 62 L199 51 H292" /></svg>
      <div className="sensor-reading"><small>TEMP</small><strong>23.4°</strong></div>
    </div>
  }

  if (type === 'retina') {
    return <div className="project-visual retina-visual">
      <div className="retina-frame original">
        <div className="retina-eye"><i /></div>
        <small>INPUT</small>
      </div>
      <div className="retina-frame mask"><div className="retina-mask mask-solid" /><small>MASK</small></div>
      <div className="retina-frame mask"><div className="retina-mask mask-vessels" /><small>VESSELS</small></div>
      <div className="retina-frame mask"><div className="retina-mask mask-region" /><small>REGION</small></div>
      <div className="analysis-scan" />
    </div>
  }

  if (type === 'generation') {
    return <div className="project-visual generation-visual">
      <div className="generation-node input-node"><small>REQUEST</small><strong>JSON</strong></div>
      <div className="generation-path"><i /><i /><i /></div>
      <div className="generation-core"><span>SDXL</span><i /></div>
      <div className="generation-path"><i /><i /><i /></div>
      <div className="generation-node output-node"><small>OUTPUT</small><strong>IMG</strong></div>
      <div className="generation-status">MODEL PIPELINE // READY</div>
    </div>
  }

  if (type === 'airfoil') {
    return <div className="project-visual airfoil-visual">
      {['0.5', '0.8', '1.2', '1.5'].map((mach, index) => (
        <div className={`flow-cell flow-${index + 1}`} key={mach}>
          <div className="flow-field"><i className="airfoil-shape" /><span /></div>
          <small>M {mach}</small>
        </div>
      ))}
      <div className="analysis-scan" />
    </div>
  }

  return null
}

function BootSequence() {
  return <div className="boot-screen">
    <div className="boot-mark">DS</div>
    <p>LOADING PORTFOLIO</p>
    <div className="boot-bar"><span /></div>
  </div>
}

function App() {
  const [activePanel, setActivePanel] = useState(null)
  const [hoveredPanel, setHoveredPanel] = useState(null)
  const panel = panels.find((item) => item.id === activePanel)
  const hoveredSection = panels.find((item) => item.id === hoveredPanel)
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <main className="portfolio">
      <BootSequence />
      <header>
        <a className="logo" href="#" aria-label="Dhruv Shah home"><span>DS</span></a>
        <div className="title">
          <h1>Dhruv Shah</h1>
          <p>Electrical & Computer Engineering student at Carnegie Mellon.</p>
        </div>
        <a className="email-link" href="mailto:shahdhruv741@gmail.com">Say hello <Mail size={18} /></a>
      </header>

      <section className="hero">
        <div className="hero-intro-wrap">
          <p className="hero-intro">
            I’m interested in wearable technology, embedded systems, circuit design, and ML/AI. I especially
            enjoy projects that combine hardware and software to interact with the physical world.
          </p>
        </div>
        <div className="suit-area">
          <div className="jarvis-bubble" aria-live="polite">
            <span><i /> DS ASSISTANT</span>
            <p>{greeting}. {hoveredSection ? `${hoveredSection.label} is ready.` : 'Select a section to get started.'}</p>
          </div>
          <Exosuit activeZone={hoveredPanel} />
          <nav className="suit-nav" aria-label="Portfolio sections">
            {panels.map(({ id, label, icon: Icon }, index) => (
              <button
                key={id}
                className={`suit-link suit-link-${index + 1}`}
                onClick={() => setActivePanel(id)}
                onMouseEnter={() => setHoveredPanel(id)}
                onMouseLeave={() => setHoveredPanel(null)}
                onFocus={() => setHoveredPanel(id)}
                onBlur={() => setHoveredPanel(null)}
              >
                <span className="link-line" />
                <span className="link-label">
                  <small>0{index + 1}</small>
                  <Icon size={19} />
                  <b>{label}</b>
                </span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      <footer>
        <span>CMU ECE · PITTSBURGH</span>
        <span>DHRUV SHAH · 2026</span>
      </footer>

      <div className={`info-drawer ${activePanel ? 'open' : ''}`} aria-hidden={!activePanel}>
        {panel && <>
          <button className="close-drawer" onClick={() => setActivePanel(null)} aria-label="Close panel"><X /></button>
          <div className="drawer-heading">
            <span>{panel.eyebrow}</span>
            <h2>{panel.title}</h2>
          </div>
          <PanelContent id={panel.id} />
        </>}
      </div>
      {activePanel && <button className="drawer-backdrop" onClick={() => setActivePanel(null)} aria-label="Close panel" />}
    </main>
  )
}

export default App

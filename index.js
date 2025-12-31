import React, { useState } from "https://esm.sh/react@19.0.0";
import { createRoot } from "https://esm.sh/react-dom@19.0.0/client";
import htm from "https://esm.sh/htm";

const html = htm.bind(React.createElement);

const courseData = {
  phases: [
    {
      id: 1,
      title: "Phase 1: The Foundation",
      subtitle: "Beginner",
      description: "Master the fundamental syntax, document structure, and basic tags that form the skeleton of every website.",
      isLocked: false,
      lessons: [
        {
          id: "1.1",
          title: "HTML Syntax & Elements",
          concept: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It uses 'tags' to annotate text, images, and other content.",
          syntax: `<tagname>Content goes here...</tagname>`,
          example: `<p>Hello, World!</p>\n<p>HTML is <strong>awesome</strong>!</p>`,
          proTip: "Always close your tags! Professional code is always explicit.",
          miniExercise: "Create a paragraph tag that contains your name, with your surname wrapped in a <strong> tag."
        },
        {
          id: "1.2",
          title: "The Skeleton: Document Structure",
          concept: "Every HTML document follows a strict boilerplate. This tells the browser which version of HTML you're using.",
          syntax: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>...</body>\n</html>`,
          example: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Website</title>\n</head>\n<body>\n  <h1>Welcome!</h1>\n</body>\n</html>`,
          proTip: "The <title> tag is a primary factor for SEO search results. Make it descriptive!",
          miniExercise: "Write out the basic boilerplate for a website titled 'Portfolio' from memory."
        }
      ]
    },
    {
      id: 2,
      title: "Phase 2: Data & Interaction",
      subtitle: "Intermediate",
      description: "Dive into complex data display and user input using tables and advanced form controls.",
      isLocked: false,
      lessons: [
        {
          id: "2.1",
          title: "Modern Tables",
          concept: "Tables are used only for tabular data. Semantic table elements help structure rows, headers, and bodies.",
          syntax: `<table>\n  <thead><tr><th>Header</th></tr></thead>\n  <tbody><tr><td>Data</td></tr></tbody>\n</table>`,
          example: `<table>\n  <thead>\n    <tr><th scope="col">Product</th><th scope="col">Price</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Mechanical Keyboard</td><td>$120.00</td></tr>\n  </tbody>\n</table>`,
          proTip: "Always use the scope attribute on your <th> tags for better accessibility.",
          miniExercise: "Create a table showing a weekly weather forecast with Day and High Temp."
        }
      ]
    }
  ],
  capstone: {
    title: "Project 'ChronoFit': Product Landing Page",
    description: "Build a professional, high-performance, and fully accessible landing page for the fictional 'ChronoFit' smart-watch.",
    requirements: [
      "Strict HTML5 Boilerplate with full <head> metadata",
      "Semantic 'Holy Grail' Layout",
      "Interactive pre-order <form> with validation",
      "Technical Specs <table> using semantic headers",
      "Performance optimization with lazy-loading"
    ]
  }
};

const CodeBlock = ({ code }) => html`
  <div className="relative group">
    <pre className="prose-pre whitespace-pre-wrap rounded-xl shadow-inner text-sm md:text-base leading-relaxed">
      <code>${code}</code>
    </pre>
    <button 
      onClick=${() => navigator.clipboard.writeText(code)}
      className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 text-white text-xs px-2 py-1 rounded transition-colors opacity-0 group-hover:opacity-100"
    >
      Copy
    </button>
  </div>
`;

const LessonCard = ({ lesson }) => html`
  <div id=${lesson.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12 scroll-mt-24">
    <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
      <h3 className="text-white font-semibold text-lg flex items-center gap-2">
        <span className="bg-blue-500 text-xs px-2 py-1 rounded">Lesson ${lesson.id}</span>
        ${lesson.title}
      </h3>
    </div>
    <div className="p-8 space-y-8">
      <section><h4 className="text-sm font-bold text-slate-400 uppercase mb-2">Concept</h4><p className="text-slate-700 text-lg">${lesson.concept}</p></section>
      <section><h4 className="text-sm font-bold text-slate-400 uppercase mb-2">Syntax</h4><${CodeBlock} code=${lesson.syntax} /></section>
      <section><h4 className="text-sm font-bold text-slate-400 uppercase mb-2">Example</h4><${CodeBlock} code=${lesson.example} /></section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-blue-50 p-6 rounded-xl"><h4 className="text-blue-800 font-bold mb-2">Pro-Tip</h4><p className="text-blue-900 text-sm">${lesson.proTip}</p></section>
        <section className="bg-amber-50 p-6 rounded-xl"><h4 className="text-amber-800 font-bold mb-2">Exercise</h4><p className="text-amber-900 text-sm">${lesson.miniExercise}</p></section>
      </div>
    </div>
  </div>
`;

const PhaseSection = ({ phase }) => {
  if (phase.isLocked) return html`<div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-3xl p-12 text-center opacity-70 mb-16"><h2 className="text-2xl font-bold text-slate-500">${phase.title} (Locked)</h2></div>`;
  return html`
    <div className="mb-16">
      <div className="mb-12 border-l-4 border-blue-500 pl-6 py-2">
        <span className="text-blue-600 font-bold text-sm uppercase">${phase.subtitle} Level</span>
        <h2 className="text-4xl font-black text-slate-900 mt-1 mb-4">${phase.title}</h2>
        <p className="text-slate-600 text-lg max-w-3xl">${phase.description}</p>
      </div>
      <div className="space-y-4">${phase.lessons.map(lesson => html`<${LessonCard} key=${lesson.id} lesson=${lesson} />`)}</div>
    </div>
  `;
};

const CapstonePreview = () => html`
  <div className="bg-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
    <div className="relative z-10">
      <span className="bg-indigo-500 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-6 inline-block">Final Destination</span>
      <h2 className="text-4xl font-black mb-4">${courseData.capstone.title}</h2>
      <p className="text-indigo-200 text-lg mb-8 max-w-2xl">${courseData.capstone.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${courseData.capstone.requirements.map((req, i) => html`<div key=${i} className="flex items-start gap-3 text-indigo-100 text-sm">${req}</div>`)}
      </div>
    </div>
  </div>
`;

function App() {
  const [activeTab, setActiveTab] = useState('course');
  return html`
    <div className="min-h-screen pb-24">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl">5</div>
            <div><h1 className="font-black text-xl text-slate-900">HTML5 MASTERCLASS</h1><p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Zero to Hero Mastery</p></div>
          </div>
          <nav className="flex gap-1 bg-slate-100 p-1 rounded-xl">
            <button onClick=${() => setActiveTab('course')} className=${`px-4 py-2 rounded-lg text-sm font-bold ${activeTab === 'course' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}>Learn</button>
            <button onClick=${() => setActiveTab('overview')} className=${`px-4 py-2 rounded-lg text-sm font-bold ${activeTab === 'overview' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}>Syllabus</button>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 pt-12">
        ${activeTab === 'overview' ? html`<div><${CapstonePreview} /></div>` : html`
          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-32 space-y-8">
                ${courseData.phases.map(phase => html`
                  <div key=${phase.id}>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Phase ${phase.id}</h4>
                    <nav className="space-y-1">${phase.lessons.map(lesson => html`<a href=${`#${lesson.id}`} className="block px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-white">${lesson.title}</a>`)}</nav>
                  </div>
                `)}
              </div>
            </aside>
            <div className="flex-grow max-w-4xl">
              ${courseData.phases.map(phase => html`<${PhaseSection} key=${phase.id} phase=${phase} />`)}
              <div className="mt-20"><${CapstonePreview} /></div>
            </div>
          </div>
        `}
      </main>
      <footer className="mt-24 border-t pt-12 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="font-bold text-slate-900">Zero to Hero: HTML5 Mastery</h3>
          <p className="text-sm text-slate-500">Built by your Harinath, Technical Illustrator</p>
        </div>
      </footer>
    </div>
  `;
}

const rootEl = document.getElementById("root");
if (rootEl) createRoot(rootEl).render(html`<${App} />`);

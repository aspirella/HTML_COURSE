import React, { useState, useEffect } from "https://esm.sh/react@19.0.0";
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
          concept: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. Elements are the building blocks, usually consisting of a start tag, content, and an end tag.",
          syntax: `<tagname>Content goes here...</tagname>`,
          example: `<!-- A simple paragraph element -->\n<p>Hello, World!</p>\n\n<!-- A nested element -->\n<p>HTML is <strong>awesome</strong>!</p>`,
          proTip: "Always close your tags! While some browsers 'fix' unclosed tags, it leads to unpredictable layouts. Professional code is always explicit.",
          miniExercise: "Create a paragraph tag that contains your name, with your surname wrapped in a <strong> tag."
        },
        {
          id: "1.2",
          title: "The Skeleton: Document Structure",
          concept: "Every HTML document follows a strict boilerplate. This tells the browser which version of HTML you're using (DOCTYPE), sets the language, and divides content into the <head> (metadata) and <body> (visible content).",
          syntax: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    Content...\n  </body>\n</html>`,
          example: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Website</title>\n</head>\n<body>\n  <h1>Welcome!</h1>\n</body>\n</html>`,
          proTip: "The <title> tag isn't just for tabs; it's the primary factor for SEO search result headlines. Make it descriptive!",
          miniExercise: "Write out the basic boilerplate for a website titled 'Portfolio' from memory."
        },
        {
          id: "1.3",
          title: "Lists (Ordered & Unordered)",
          concept: "Lists help group related items. Use <ul> for bullet points and <ol> for numbered lists. Every list item must be wrapped in an <li> tag.",
          syntax: `<ul>\n  <li>Item</li>\n</ul>\n\n<ol>\n  <li>Step 1</li>\n</ol>`,
          example: `<h3>Shopping List</h3>\n<ul>\n  <li>Apples</li>\n  <li>Bread</li>\n</ul>`,
          proTip: "You can nest lists! A <ul> can contain an <li> which itself contains another <ul> to create sub-menus.",
          miniExercise: "Create a numbered list of your 3 favorite movies."
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
          concept: "Tables are for tabular data. Use semantic tags like <thead>, <tbody>, and <tfoot> to structure the data properly.",
          syntax: `<table>\n  <thead>\n    <tr><th>Header</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Data</td></tr>\n  </tbody>\n</table>`,
          example: `<table>\n  <thead>\n    <tr><th scope="col">Product</th><th scope="col">Price</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Keyboard</td><td>$120.00</td></tr>\n  </tbody>\n</table>`,
          proTip: "Always use the scope='col' or scope='row' attribute on your <th> tags to make your table accessible to screen readers.",
          miniExercise: "Create a table showing a weekly weather forecast with Day and High Temp."
        },
        {
          id: "2.2",
          title: "Forms & Labels",
          concept: "Forms allow users to send data. Labels are crucial for accessibility, explicitly linking descriptions to input fields.",
          syntax: `<form action="/submit" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name">\n</form>`,
          example: `<form>\n  <label for="email">Email:</label>\n  <input type="email" id="email" required>\n  <button type="submit">Join</button>\n</form>`,
          proTip: "Never use just a placeholder instead of a <label>. Placeholders disappear when typing, causing confusion for users.",
          miniExercise: "Create a simple 'Newsletter Sign-up' form with a Name and Email field."
        }
      ]
    },
    {
      id: 3,
      title: "Phase 3: Architecture & Semantics",
      subtitle: "Advanced",
      description: "Learn how to structure professional-grade websites using semantic markup and proper metadata.",
      isLocked: false,
      lessons: [
        {
          id: "3.1",
          title: "The 'Holy Grail' Layout",
          concept: "HTML5 introduced specific tags for common areas (header, nav, main, footer), allowing browsers to understand the document structure.",
          syntax: `<header></header>\n<nav></nav>\n<main></main>\n<footer></footer>`,
          example: `<body>\n  <header><h1>Blog</h1></header>\n  <main>\n    <article><h2>Post 1</h2></article>\n  </main>\n  <footer>© 2024</footer>\n</body>`,
          proTip: "The <main> tag is crucial. It allows screen readers to use a 'Skip to Content' feature, bypassing repetitive navigation menus.",
          miniExercise: "Rewrite a layout that uses <div class='footer'> using correct semantic tags."
        }
      ]
    },
    {
      id: 4,
      title: "Phase 4: Professional Standards",
      subtitle: "Expert",
      description: "Accessibility (ARIA), SEO, Performance, and the elite habits of top frontend engineers.",
      isLocked: false,
      lessons: [
        {
          id: "4.1",
          title: "Advanced Accessibility (ARIA)",
          concept: "ARIA attributes bridge the gap for assistive technology when standard HTML elements aren't enough for complex interactions.",
          syntax: `<button aria-label="Close">X</button>`,
          example: `<a href="#" aria-label="Visit Facebook">\n  <img src="fb.png" alt="" aria-hidden="true">\n</a>`,
          proTip: "If an image is purely decorative, use alt='' (empty string). This tells screen readers to ignore it.",
          miniExercise: "Find an icon-only button and inspect it to see if it uses aria-label."
        }
      ]
    }
  ],
  capstone: {
    title: "Project 'ChronoFit': Product Landing Page",
    description: "Build a professional, high-performance, and fully accessible landing page for the fictional 'ChronoFit' smart-watch.",
    requirements: [
      "Strict HTML5 Boilerplate with full metadata",
      "Semantic 'Holy Grail' Layout",
      "Interactive pre-order form with validation",
      "Technical Specs table using semantic headers",
      "Accessibility: ARIA labels and correct heading hierarchy"
    ]
  }
};

const CodeBlock = ({ code }) => html`
  <div className="relative group">
    <pre className="prose-pre">
      <code>${code}</code>
    </pre>
    <button 
      onClick=${() => {
        navigator.clipboard.writeText(code);
        alert('Code copied!');
      }}
      className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 text-white text-[10px] px-2 py-1 rounded transition-opacity opacity-0 group-hover:opacity-100"
    >
      Copy
    </button>
  </div>
`;

const LessonCard = ({ lesson }) => html`
  <div id=${lesson.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8 scroll-mt-24 transition-all hover:shadow-md">
    <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
      <h3 className="text-white font-bold text-lg flex items-center gap-3">
        <span className="bg-blue-600 text-[10px] font-black px-2 py-0.5 rounded tracking-tighter">L-${lesson.id}</span>
        ${lesson.title}
      </h3>
    </div>
    <div className="p-8 space-y-8">
      <section>
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">The Concept</h4>
        <p className="text-slate-700 text-lg leading-relaxed">${lesson.concept}</p>
      </section>

      <section>
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Technical Syntax</h4>
        <${CodeBlock} code=${lesson.syntax} />
      </section>

      <section>
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Live Example</h4>
        <${CodeBlock} code=${lesson.example} />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
          <h5 className="text-blue-800 font-black text-xs uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Expert Tip
          </h5>
          <p className="text-blue-900 text-sm leading-relaxed">${lesson.proTip}</p>
        </div>
        <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
          <h5 className="text-amber-800 font-black text-xs uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span> Mini Challenge
          </h5>
          <p className="text-amber-900 text-sm leading-relaxed">${lesson.miniExercise}</p>
        </div>
      </div>
    </div>
  </div>
`;

const PhaseSection = ({ phase }) => {
  if (phase.isLocked) return null;
  return html`
    <div className="mb-20">
      <div className="mb-12 border-l-8 border-blue-600 pl-8 py-2">
        <span className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase">${phase.subtitle} Courseware</span>
        <h2 className="text-5xl font-black text-slate-900 mt-2 mb-4">${phase.title}</h2>
        <p className="text-slate-600 text-xl max-w-3xl font-medium">${phase.description}</p>
      </div>
      <div className="space-y-4">
        ${phase.lessons.map(lesson => html`<${LessonCard} key=${lesson.id} lesson=${lesson} />`)}
      </div>
    </div>
  `;
};

const SyllabusOverview = () => html`
  <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 mb-20 shadow-xl shadow-slate-200/50">
    <div className="mb-12">
      <h2 className="text-4xl font-black text-slate-900 mb-3">Complete Curriculum</h2>
      <p className="text-slate-500 font-medium">From syntax basics to professional engineering standards.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      ${courseData.phases.map(phase => html`
        <div key=${phase.id} className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-400 hover:bg-white transition-all duration-300 cursor-default">
          <div className="flex justify-between items-start mb-6">
            <span className="bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Phase 0${phase.id}</span>
          </div>
          <h3 className="font-black text-slate-900 text-2xl mb-4 group-hover:text-blue-600 transition-colors">${phase.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">${phase.description}</p>
          <div className="flex flex-wrap gap-2">
            ${phase.lessons.map(l => html`
              <span key=${l.id} className="text-[10px] bg-white border border-slate-200 text-slate-600 font-bold px-3 py-1 rounded-full group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:text-blue-700 transition-colors">${l.title}</span>
            `)}
          </div>
        </div>
      `)}
    </div>
  </div>
`;

const CapstonePreview = () => html`
  <div className="bg-slate-950 rounded-[3rem] p-16 text-white relative overflow-hidden shadow-2xl shadow-indigo-500/20">
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
    <div className="relative z-10 max-w-3xl">
      <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-slate-950 text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-8 inline-block shadow-lg">Phase Final: Capstone Project</span>
      <h2 className="text-6xl font-black mb-6 tracking-tighter leading-[0.9]">${courseData.capstone.title}</h2>
      <p className="text-slate-400 text-xl mb-10 leading-relaxed font-medium">${courseData.capstone.description}</p>
      
      <div className="space-y-4">
        <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">Success Metrics</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${courseData.capstone.requirements.map((req, i) => html`
            <div key=${i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-slate-300 text-sm font-semibold">${req}</span>
            </div>
          `)}
        </div>
      </div>
    </div>
  </div>
`;

function App() {
  const [activeTab, setActiveTab] = useState('course');

  return html`
    <div className="min-h-screen pb-32">
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-blue-200">5</div>
            <div>
              <h1 className="font-black text-2xl text-slate-900 tracking-tighter leading-none">HTML5 MASTERCLASS</h1>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1.5">Zero to Hero Engineering</p>
            </div>
          </div>
          <nav className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/50">
            <button 
              onClick=${() => setActiveTab('course')} 
              className=${`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${activeTab === 'course' ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Curriculum
            </button>
            <button 
              onClick=${() => setActiveTab('overview')} 
              className=${`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${activeTab === 'overview' ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Syllabus
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-16">
        ${activeTab === 'overview' ? html`
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
             <${SyllabusOverview} />
             <${CapstonePreview} />
          </div>
        ` : html`
          <div className="flex flex-col lg:flex-row gap-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-40 space-y-12">
                ${courseData.phases.map(phase => html`
                  <div key=${phase.id} className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                      Phase ${phase.id}
                    </h4>
                    <nav className="space-y-2">
                      ${phase.lessons.map(lesson => html`
                        <a 
                          key=${lesson.id}
                          href=${`#${lesson.id}`}
                          className="group flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-white hover:text-blue-600 hover:shadow-sm border border-transparent transition-all"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></span>
                          ${lesson.title}
                        </a>
                      `)}
                    </nav>
                  </div>
                `)}
                
                <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-2xl shadow-blue-200">
                  <h5 className="font-black text-lg mb-2">My Journey</h5>
                  <p className="text-xs text-blue-100 font-semibold mb-6">You've unlocked Phase ${courseData.phases.filter(p => !p.isLocked).length} of ${courseData.phases.length}.</p>
                  <div className="w-full bg-black/20 h-3 rounded-full overflow-hidden p-0.5">
                    <div 
                      className="bg-white h-full rounded-full transition-all duration-1000" 
                      style=${{ width: `${(courseData.phases.filter(p => !p.isLocked).length / courseData.phases.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex-grow max-w-4xl">
              ${courseData.phases.map(phase => html`<${PhaseSection} key=${phase.id} phase=${phase} />`)}
              <div className="mt-32">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-10 text-center">Your Final Mission</h4>
                <${CapstonePreview} />
              </div>
            </div>
          </div>
        `}
      </main>

      <footer className="mt-40 border-t border-slate-100 pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
             <div className="bg-slate-900 w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm">5</div>
             <span className="font-black text-lg text-slate-900 tracking-tighter uppercase">Zero to Hero Mastery</span>
          </div>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Designed and Compiled by</p>
          <p className="text-slate-900 text-xl font-black mt-2 tracking-tight">Harinath, Technical Illustrator</p>
        </div>
      </footer>
    </div>
  `;
}

const rootEl = document.getElementById("root");
if (rootEl) {
    createRoot(rootEl).render(html`<${App} />`);
}

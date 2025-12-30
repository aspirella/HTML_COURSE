
import React, { useState } from 'react';
import { courseData } from './data/courseContent';
import { Lesson, Phase } from './types';

// Components
const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
  <div className="relative group">
    <pre className="prose-pre whitespace-pre-wrap rounded-xl shadow-inner text-sm md:text-base leading-relaxed">
      <code>{code}</code>
    </pre>
    <button 
      onClick={() => navigator.clipboard.writeText(code)}
      className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 text-white text-xs px-2 py-1 rounded transition-colors opacity-0 group-hover:opacity-100"
    >
      Copy
    </button>
  </div>
);

const LessonCard: React.FC<{ lesson: Lesson }> = ({ lesson }) => (
  <div id={lesson.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12 scroll-mt-24">
    <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
      <h3 className="text-white font-semibold text-lg flex items-center gap-2">
        <span className="bg-blue-500 text-xs px-2 py-1 rounded">Lesson {lesson.id}</span>
        {lesson.title}
      </h3>
    </div>
    <div className="p-8 space-y-8">
      <section>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Concept</h4>
        <p className="text-slate-700 text-lg leading-relaxed">{lesson.concept}</p>
      </section>

      <section>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Syntax</h4>
        <CodeBlock code={lesson.syntax} />
      </section>

      <section>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Example</h4>
        <CodeBlock code={lesson.example} />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h4 className="text-blue-800 font-bold mb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Pro-Tip / Best Practice
          </h4>
          <p className="text-blue-900 text-sm leading-relaxed">{lesson.proTip}</p>
        </section>

        <section className="bg-amber-50 border border-amber-100 p-6 rounded-xl">
          <h4 className="text-amber-800 font-bold mb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            Mini-Exercise
          </h4>
          <p className="text-amber-900 text-sm leading-relaxed">{lesson.miniExercise}</p>
        </section>
      </div>
    </div>
  </div>
);

const PhaseSection: React.FC<{ phase: Phase }> = ({ phase }) => {
  if (phase.isLocked) {
    return (
      <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-3xl p-12 text-center opacity-70 mb-16">
        <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-500 mb-2">{phase.title}</h2>
        <p className="text-slate-400 max-w-md mx-auto">{phase.description}</p>
        <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-200 px-3 py-1 rounded">Coming Soon...</span>
      </div>
    );
  }

  return (
    <div className="mb-16">
      <div className="mb-12 border-l-4 border-blue-500 pl-6 py-2">
        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">{phase.subtitle} Level</span>
        <h2 className="text-4xl font-black text-slate-900 mt-1 mb-4">{phase.title}</h2>
        <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">{phase.description}</p>
      </div>
      
      <div className="space-y-4">
        {phase.lessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

const SyllabusOverview: React.FC = () => (
  <div className="bg-white rounded-3xl p-8 border border-slate-200 mb-16 shadow-sm">
    <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
      <span className="text-blue-500">Full</span> Course Syllabus
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {courseData.phases.map(phase => (
        <div key={phase.id} className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
          <div className="flex justify-between items-start mb-4">
            <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">PHASE 0{phase.id}</span>
            {phase.isLocked ? (
              <span className="text-xs text-slate-400 italic">Locked</span>
            ) : (
              <span className="text-xs text-green-600 font-bold">Unlocked</span>
            )}
          </div>
          <h3 className="font-bold text-slate-800 text-xl mb-2">{phase.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">{phase.description}</p>
          <div className="flex flex-wrap gap-2">
            {!phase.isLocked && phase.lessons.length > 0 ? (
               phase.lessons.map(l => (
                 <span key={l.id} className="text-[10px] bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">{l.title}</span>
               ))
            ) : (
               <span className="text-[10px] bg-slate-200 text-slate-500 font-medium px-2 py-0.5 rounded-full">Curriculum Locked</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CapstonePreview: React.FC = () => (
  <div className="bg-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-800 rounded-full -mr-20 -mt-20 opacity-50 blur-3xl"></div>
    <div className="relative z-10">
      <span className="bg-indigo-500 text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-6 inline-block">The Final Destination</span>
      <h2 className="text-4xl font-black mb-4">{courseData.capstone.title}</h2>
      <p className="text-indigo-200 text-lg mb-8 max-w-2xl">{courseData.capstone.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courseData.capstone.requirements.map((req, i) => (
          <div key={i} className="flex items-start gap-3 text-indigo-100 text-sm">
            <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            {req}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'course'>('course');

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">5</div>
            <div>
              <h1 className="font-black text-xl text-slate-900 tracking-tight leading-none">HTML5 MASTERCLASS</h1>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Zero to Hero Mastery</p>
            </div>
          </div>
          <nav className="flex gap-1 bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('course')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'course' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Learn Now
            </button>
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'overview' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Syllabus
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-12">
        {activeTab === 'overview' ? (
          <div className="animate-in fade-in duration-500">
             <SyllabusOverview />
             <CapstonePreview />
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 animate-in slide-in-from-bottom-4 duration-500">
            {/* Sidebar Navigation */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-32 space-y-8">
                {courseData.phases.filter(p => !p.isLocked && p.lessons.length > 0).map(phase => (
                  <div key={phase.id}>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Phase {phase.id}: {phase.subtitle}</h4>
                    <nav className="space-y-1">
                      {phase.lessons.map(lesson => (
                        <a 
                          key={lesson.id}
                          href={`#${lesson.id}`}
                          className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm border border-transparent transition-all group"
                        >
                          <span className="text-[10px] bg-slate-200 group-hover:bg-blue-100 px-1.5 py-0.5 rounded text-slate-500 group-hover:text-blue-600 font-bold">{lesson.id}</span>
                          <span className="truncate">{lesson.title}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                ))}
                
                <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-200">
                  <h5 className="font-bold mb-2">Progress</h5>
                  <p className="text-xs text-blue-100 leading-relaxed mb-4">You've unlocked {courseData.phases.filter(p => !p.isLocked).length} of {courseData.phases.length} phases.</p>
                  <div className="w-full bg-blue-700 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-white h-full transition-all duration-1000" 
                      style={{ width: `${(courseData.phases.filter(p => !p.isLocked).length / courseData.phases.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Course Material */}
            <div className="flex-grow max-w-4xl">
              {courseData.phases.map(phase => (
                <PhaseSection key={phase.id} phase={phase} />
              ))}
              <div className="mt-20">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Course Culmination</h4>
                <CapstonePreview />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-slate-200 pt-12 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="font-bold text-slate-900">Zero to Hero: HTML5 Mastery</h3>
            <p className="text-sm text-slate-500">Built by your Harinath, Technical Illustrator</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

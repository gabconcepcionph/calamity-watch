import React from 'react';
import { HiOutlineSparkles, HiOutlineArrowUpRight } from 'react-icons/hi2';

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <section className="max-w-2xl text-center space-y-6">
        <div className="flex items-center justify-center gap-3 text-cyan-400">
          <HiOutlineSparkles className="h-8 w-8" aria-hidden="true" />
          <span className="uppercase tracking-[0.4em] text-xs font-semibold">
            Now with Tailwind & Router
          </span>
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl">
          Welcome to Stampcard
        </h1>
        <p className="text-lg text-slate-300">
          Start building with React, Tailwind CSS, and React Router. Modify this
          page in `src/pages/Home.js` and begin crafting your experience.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-lg bg-cyan-500 text-slate-900 font-semibold shadow hover:bg-cyan-400 transition inline-flex items-center gap-2"
          >
            Tailwind Docs
            <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://reactrouter.com/en/main"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-lg border border-slate-700 font-semibold hover:border-slate-500 transition"
          >
            React Router Docs
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;

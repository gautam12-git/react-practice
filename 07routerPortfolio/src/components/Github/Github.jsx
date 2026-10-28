import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  return (
    <main className="min-h-screen px-6 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">GitHub Profile</h1>

      <div className="portfolio-card flex w-full flex-col items-center gap-8 p-8 md:flex-row">
        
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="h-48 w-48 rounded-2xl object-cover shadow-md"
        />

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">{data.name || "Gautam Pandey"}</h2>
          <p className="text-slate-300">
            GitHub Username: <span className="font-medium text-cyan-300">{data.login}</span>
          </p>
          <p className="text-slate-300">
            Followers: <span className="font-medium">{data.followers}</span>
          </p>
          <p className="text-slate-300">
            Following: <span className="font-medium">{data.following}</span>
          </p>
          <p className="text-slate-300">
            Public Repos: <span className="font-medium">{data.public_repos}</span>
          </p>

          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300"
          >
            Visit GitHub
          </a>
        </div>
      </div>
      </div>
    </main>
  );
}

export default Github;

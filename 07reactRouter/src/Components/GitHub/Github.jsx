import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-8">GitHub Profile</h2>

      {/* Main Container */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
        
        {/* Left Side - Avatar */}
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="rounded-2xl shadow-md w-48 h-48 object-cover"
        />

        {/* Right Side - Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-gray-900">{data.name || "Gautam Pandey"}</h3>
          <p className="text-gray-700">
            GitHub Username: <span className="font-medium text-blue-600">{data.login}</span>
          </p>
          <p className="text-gray-700">
            Followers: <span className="font-medium">{data.followers}</span>
          </p>
          <p className="text-gray-700">
            Following: <span className="font-medium">{data.following}</span>
          </p>
          <p className="text-gray-700">
            Public Repos: <span className="font-medium">{data.public_repos}</span>
          </p>

          {/* GitHub Link Button */}
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Github;

// Loader function
export const gitHubInfo = async () => {
  const response = await fetch("https://api.github.com/users/gautam12-git");
  if (!response.ok) throw new Error("Failed to fetch GitHub data");
  return response.json();
};

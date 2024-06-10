import React, { useState, useEffect } from 'react';


export const Service = () => {
  const [profile, setProfile] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [username, setUsername] = useState('SomayPawa');

  useEffect(() => {
    fetchUser(username);
  }, []);

  const fetchUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setProfile(data);
  };

  const handleSearch = () => {
    const searchInput = document.querySelector('.searchinput').value;
    fetchUser(searchInput);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className={theme}>
      <nav>
        <a href="#" className="logo">GitHubFinder</a>
        <div className="mode">
          <span className="light" onClick={toggleTheme}>
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </span>
          <img
            className="modechange"
            src={theme === 'dark' ? './images/icon-sun.svg' : './images/icon-moon.svg'}
            onClick={toggleTheme}
            alt=""
          />
        </div>
      </nav>
      <div className="search">
        <div className="query">
          <img src="./images/icon-search.svg" alt="" />
          <input
            className="searchinput"
            type="text"
            placeholder="Search GitHub username..."
          />
        </div>
        <button className="submit" onClick={handleSearch}>
          Search
        </button>
      </div>
      {profile && (
        <div className="profile">
          <div className="up">
            <img id="pfp" src={profile.avatar_url} alt="" />
            <div className="about">
              <h2 id="name">{profile.name}</h2>
              <div id="username">@{profile.login}</div>
            </div>
            <div>
              <h2>Joined</h2>
              <p className="joined">{profile.created_at.slice(0, 10)}</p>
            </div>
          </div>
          <p id="bio">{profile.bio || "This profile has no bio"}</p>
          <div className="gitstats">
            <div>
              <h2>Repos</h2>
              <p className="repos bold">{profile.public_repos}</p>
            </div>
            <div>
              <h2>Followers</h2>
              <p className="followers bold">{profile.followers}</p>
            </div>
            <div>
              <h2>Following</h2>
              <p className="following bold">{profile.following}</p>
            </div>
          </div>
          <div className="links">
            <div className="gitlinks">
              <img src="./images/icon-location.svg" alt="" />
              <p className="location">{profile.location}</p>
            </div>
            <div className="gitlinks">
              <img src="./images/icon-website.svg" alt="" />
              <p className="url">{profile.blog || "Not available"}</p>
            </div>
            <div className="gitlinks">
              <img src="./images/icon-twitter.svg" alt="" />
              <p className="twitter">{profile.twitter_username || "Not available"}</p>
            </div>
            <div className="gitlinks">
              <img src="./images/icon-company.svg" alt="" />
              <p className="org">{profile.company || "Not available"}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};


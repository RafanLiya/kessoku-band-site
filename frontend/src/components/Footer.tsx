// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-custom-black text-white p-4 mt-auto">
        <div className="flex flex-col items-center space-y-2">
          <p className="font-semibold">Follow Us On:</p>
          <div className="flex space-x-6 p-2">
            <a
              href="https://www.youtube.com/channel/UC6IhDHJbJUoRJGUPnlh5GRQ"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link hover:text-red-500"
            >
              YouTube
            </a>
            <a
              href="https://twitter.com/daily_bocchi?lang=da"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link hover:text-blue-400"
            >
              X
            </a>
            <a
              href="https://www.instagram.com/bocchi.daily/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link hover:text-pink-400"
            >
              Instagram
            </a>
            <a
              href="https://open.spotify.com/artist/2nvl0N9GwyX69RRBMEZ4OD"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link hover:text-green-400"
            >
              Spotify
            </a>
            <a
              href="https://soundcloud.com/kessokuband"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link hover:text-orange-400"
            >
              SoundCloud
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
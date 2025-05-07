import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Header with centered logo */}
      <header className="my-header flex justify-center shadow-md p-4 bg-white">
        <Image
          src="/header_logo.png"
          alt="Header Logo"
          width={100}
          height={100}
          priority
        />
      </header>

      {/* Navigation bar centered below header */}
      <nav className="nav-bar p-4">
        <ul className="flex justify-center space-x-6 text-white font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">User Profile</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Team</a></li>
        </ul>
      </nav>
    </div>
  );
}

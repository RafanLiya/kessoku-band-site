"use client";

import { useState } from "react";

export default function FanZone() {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handlePost = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [...prev, newMessage.trim()]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-pink-100 via-white to-pink-50 flex flex-col gap-10">
      

      {/* Fan Art Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Fan Art Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Placeholder images */}
          {["art1.jpg", "art2.jpg", "art3.jpg", "art4.jpg"].map((src, i) => (
            <img
              key={i}
              src={`/images/fanart/${src}`}
              alt={`Fan Art ${i + 1}`}
              className="rounded-xl shadow-md object-cover w-full h-48"
            />
          ))}
        </div>
      </section>

      {/* Fan Message Board */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Message Board</h2>
        <div className="bg-white p-4 rounded-xl shadow space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow border px-3 py-2 rounded-lg"
              placeholder="Leave a shoutout for the band!"
            />
            <button
              onClick={handlePost}
              className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
            >
              Post
            </button>
          </div>
          <ul className="space-y-2">
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages yet. Be the first to post!</p>
            ) : (
              messages.map((msg, idx) => (
                <li
                  key={idx}
                  className="bg-pink-100 p-3 rounded shadow-sm text-pink-900"
                >
                  {msg}
                </li>
              ))
            )}
          </ul>
        </div>
      </section>
      
    </div>
  );
}

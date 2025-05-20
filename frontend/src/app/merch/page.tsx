"use client";

import { useEffect, useState } from "react";

interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface CartItem extends Item {
  quantity: number;
}

export default function Merch() {
  const [items, setItems] = useState<Item[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
  const fetchItems = async () => {
    try {
      const res = await fetch("/api/items");
      if (!res.ok) throw new Error("Failed to fetch from API");
      const data: Item[] = await res.json();
      setItems(data);
    } catch (err) {
      console.warn("API fetch failed, using mock data.");
      // fallback simulation
      const fallback: Item[] = [
        {
          id: "1",
          name: "Kessoku T-Shirt",
          price: 25,
          description: "Official Kessoku Band T-Shirt in black.",
          image: "/images/kessoku-tshirt.jpg",
        },
        {
          id: "2",
          name: "Bocchi Plushie",
          price: 35,
          description: "Cute Bocchi-chan plush toy.",
          image: "/images/bocchi-plush.jpg",
        },
        {
          id: "3",
          name: "Band Poster",
          price: 15,
          description: "A3 size Kessoku Band concert poster.",
          image: "/images/kessoku-poster.jpg",
        },
      ];
      setItems(fallback);
    }
  };

  fetchItems();
}, []);


  const addToCart = (item: Item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Item List */}
      <section className="md:col-span-2 space-y-4">
        <h2 className="text-2xl font-bold mb-2">Merchandise</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded-xl shadow hover:shadow-md transition">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{item.description}</p>
              <p className="text-md font-bold mb-2">${item.price}</p>
              <button
                className="bg-pink-600 text-white py-1 px-3 rounded hover:bg-pink-700"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart */}
      <aside className="bg-gray-100 p-4 rounded-xl shadow-inner">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-1">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm">
                    ${item.price} × {item.quantity} = ${item.price * item.quantity}
                  </p>
                </div>
                <button
                  className="text-red-500 text-sm hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="mt-4 pt-4 border-t font-bold">
            Total: ${getTotal()}
          </div>
        )}
      </aside>
    </div>
  );
}

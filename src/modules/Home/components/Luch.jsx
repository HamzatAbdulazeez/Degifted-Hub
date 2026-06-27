import { useState, } from "react";
import Countdown from './Countdown';

export default function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // ---- Change this date to your launch ----
  const launchDate = new Date("2025-12-01T00:00:00");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // ---- Replace with your own backend / form service ----
    try {
      await fetch("https://api.example.com/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo */}
          <img src='https://res.cloudinary.com/ddj0k8gdw/image/upload/v1759071880/DigiftedHub/Frame_3_bgkxcs.png' alt="Logo" className="mx-auto h-20 md:h-28" />

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We’re <span className="underline">launching soon</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl opacity-90">
            Get ready for something amazing. Enter your email to be the first to know.
          </p>

          {/* Countdown */}
          <Countdown target={launchDate} />

          {/* Email capture */}
          <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 px-5 py-3 rounded-lg text-white placeholder-white border border-gray-200 outline-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              {status === "sending" ? "Sending…" : "Notify Me"}
            </button>
          </form>

          {/* Status message */}
          {status === "success" && (
            <p className="text-green-300">🎉 Thanks! We'll keep you posted.</p>
          )}
          {status === "error" && (
            <p className="text-red-300">⚠️ Something went wrong. Try again later.</p>
          )}
        </div>
      </section>

      {/* Optional extra section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What’s coming?
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Blazing Fast", desc: "Next-gen performance" },
              { icon: "🔒", title: "Secure by Design", desc: "End-to-end encryption" },
              { icon: "🎨", title: "Beautiful UI", desc: "Tailwind-crafted experience" },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-50">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>© {new Date().getFullYear()} Digifted Hub Site. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          {["Twitter", "GitHub", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="hover:text-white transition"
            >
              {s}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
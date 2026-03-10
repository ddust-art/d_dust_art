import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [inst, setInst] = useState("");
  const [type, setType] = useState("fan");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    if (loading) return; // prevent double submissions
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:3001/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          fname,
          lname,
          inst,
          type,
        }),
      });

      if (res.ok) {
        setStatus(
          "Thank you! Please check your email to confirm your subscription.",
        );
        setEmail("");
        setFname("");
        setLname("");
        setInst("");
        setType("fan");
      } else {
        setStatus("Subscription failed.");
      }
    } catch {
      setStatus("Server error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-almost-black overflow-hidden p-10 md:py-28">
      {/* Decorative background shape */}
      <div
        className="
          absolute h-100 w-100 -top-40 -left-50
          w-96 h-96
          bg-white/20
          rounded-full
          blur-3xl
        "
        aria-hidden
      />
      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-6 text-center">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-dust-orange mb-4">
          Keep updated about news, projects, actions and exhibitions
        </h2>

        <p className="text-sm md:text-base text-white/70 mb-8">
          Subscribe to the newsletter. Receive underground content.
        </p>

        <form
          onSubmit={handleSubmit}
          className="
            grid grid-cols-1 md:grid-cols-2 gap-6 text-left
          "
        >
          {/* FIRST NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-white/60">
              First name
            </label>
            <input
              type="text"
              placeholder="Your first name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
              className="
              w-full
              bg-transparent
              border border-white/30
              px-4 py-3
              text-white
              placeholder:text-white/40
              focus:outline-none
              focus:border-white
              transition
            "
            />
          </div>

          {/* LAST NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-white/60">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Your last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
              className="
              w-full
              bg-transparent
              border border-white/30
              px-4 py-3
              text-white
              placeholder:text-white/40
              focus:outline-none
              focus:border-white
              transition
            "
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-white/60">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
              w-full
              flex-1
              bg-transparent
              border border-white/30
              px-4 py-3
              text-white
              placeholder:text-white/40
              focus:outline-none
              focus:border-white
              transition
            "
            />
          </div>

          {/* INSTITUTION */}
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-white/60">
              Institution{" "}
              <span className="lowercase text-white/40">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="Your institution's name"
              value={inst}
              onChange={(e) => setInst(e.target.value)}
              className="
              w-full
              flex-1
              bg-transparent
              border border-white/30
              px-4 py-3
              text-white
              placeholder:text-white/40
              focus:outline-none
              focus:border-white
              transition
            "
            />
          </div>

          {/* CATEGORY */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-white/60">
              Which category best defines you?
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-transparent border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white"
            >
              <option className="text-black" value="artist">
                Artist
              </option>
              <option className="text-black" value="fan">
                Art fan
              </option>
              <option className="text-black" value="institution">
                Art institution
              </option>
              <option className="text-black" value="investor">
                Art investor
              </option>
              <option className="text-black" value="press">
                Press
              </option>
              <option className="text-black" value="other">
                Other
              </option>
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="md:col-span-2 flex justify-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="
              flex items-center gap-2 px-10 py-3 border border-white text-white uppercase text-sm tracking-wider hover:bg-dark-purple hover:border-dark-purple transition disabled:opacity-60
            "
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Submitting..." : "Subscribe"}
            </button>
          </div>

          <div className="md:col-span-2 text-center">
            <motion.p
              className="text-dust-orange text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {status}
            </motion.p>
          </div>
        </form>
      </div>
    </section>
  );
}

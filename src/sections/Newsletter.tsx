export default function Newsletter() {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-almost-black">
      {/* Decorative background shapes */}
      <div
        className="
          absolute -top-50 -left-36
          w-96 h-96
          bg-dark-purple/20
          rounded-full
          blur-3xl
        "
        aria-hidden
      />
      <div
        className="
          absolute -top-50 -right-48
          w-96 h-96
          bg-dark-purple/20
          
          rounded-full
          blur-3xl
        "
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-6 text-center">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-white mb-4">
          Keep updated about news, projects, actions and exhibitions
        </h2>

        <p className="text-sm md:text-base text-white/70 mb-8">
          Subscribe to the newsletter. Receive underground content.
        </p>

        <form
          className="
            mx-auto
            flex flex-col sm:flex-row
            items-center gap-4
            max-w-xl
          "
        >
          <input
            type="email"
            placeholder="your@email.com"
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

          <button
            type="submit"
            className="
              px-8 py-3
              border border-white
              text-white
              uppercase text-sm tracking-wider
              hover:bg-dark-purple
              hover:border-dark-purple
              transition
            "
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

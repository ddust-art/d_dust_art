export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative
        w-full
        text-white
        overflow-hidden
      "
    >
      {/* Background image placeholder */}
      <div
        className="
              absolute
              inset-0
              bg-[url('@/assets/image/bg_footer.jpg')]
              bg-cover
              bg-center
              
            "
        aria-hidden="true"
      />
      {/* Content overlay box */}
      <div className="relative z-10 px-6 py-12">
        <div
          className="
            mx-auto max-w-6xl
            rounded-md
            bg-black/20
            backdrop-blur-sm
            p-10 md:p-10
          "
        >
          {/* Content */}
          <div className="relative max-w-7xl mx-auto p-6">
            <div
              className="
                grid
                grid-cols-1
                gap-12
                md:grid-cols-2
                lg:grid-cols-4
              "
            >
              {/* Contact */}
              <div>
                <h3 className="mb-4 text-sm uppercase tracking-widest text-gray-300">
                  Contact
                </h3>
                <a
                  href="mailto:ddust.video@gmail.com"
                  className="text-white hover:text-dust-orange transition"
                >
                  ddust.video@gmail.com
                </a>
              </div>

              {/* Site Map */}
              <div>
                <h3 className="mb-4 text-sm uppercase tracking-widest text-gray-300">
                  Site Map
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="footer-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="footer-link">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/image-gallery" className="footer-link">
                      Image Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#schedule" className="footer-link">
                      Schedule
                    </a>
                  </li>
                  <li>
                    <a href="#nfts" className="footer-link">
                      NFTs
                    </a>
                  </li>
                </ul>
              </div>

              {/* External Links */}
              <div>
                <h3 className="mb-4 text-sm uppercase tracking-widest text-gray-300">
                  Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.instagram.com/d_dust_art/"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      Instagram
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC_awq0q48rj-SSZQu0Z9PNA"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/users/954055617230823464"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/d_dust_art"
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      X
                    </a>
                  </li>
                </ul>
              </div>

              {/* Share (placeholder – can replace later) */}
              <div>
                <h3 className="mb-4 text-sm uppercase tracking-widest text-gray-300">
                  Share
                </h3>
                <p className="text-sm text-gray-400">
                  Social sharing tools
                  <br />
                  coming soon.
                </p>
              </div>
            </div>

            {/* Bottom bar */}
            <div
              className="
            mt-16
            pt-6
            border-t
            border-white/20
            text-center
            text-sm
            text-gray-400
          "
            >
              © 2026 D-DUST.ART
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

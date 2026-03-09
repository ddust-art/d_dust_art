export default function NFTs() {
  return (
    <section
      id="nfts"
      className="relative w-full py-0 text-black bg-nft-dark-blue"
    >
      {/* Radial Gradient Overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,_#000523_60%,_#000000_100%)]
        "
      />
      <div
        className="
          relative
          max-w-full
          mx-auto
          p-6
          bg-[url('@/assets/image/NFTsection_BG_Pic.webp')]
          bg-no-repeat
          bg-center
          bg-contain
          min-h-[500px]
          sm:min-h-[600px]
          md:min-h-[650px]
          lg:min-h-[720px]
          flex
          items-end
        "
      >
        <div className="w-full flex flex-col items-center text-center gap-8 pb-10">
          {/* Text */}
          <p className="text-sm text-white md:text-xl font-medium leading-tight">
            Buy, Sell, Collect
            <br />
            Electronic and Digital Art Works
          </p>

          {/* CTA */}
          <a
            href="#"
            className="
              inline-flex
              items-center
              justify-center
              border
              border-white
              px-10
              p-3
              uppercase
              tracking-wide
              text-sm
              text-white
              hover:bg-sky-blue 
              hover:border-sky-blue
              transition
            "
          >
            Soon!
          </a>
        </div>
      </div>
    </section>
  );
}

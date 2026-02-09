export default function NFTs() {
  return (
    <section id="nfts" className="w-full py-32 text-black bg-nft-dark-blue">
      <div
        className="
          relative
          max-w-full
          mx-auto
          p-6
          bg-[url('@/assets/image/OA_Background_NFTs.jpg')]
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
              py-3
              uppercase
              tracking-wide
              text-sm
              text-white
              hover:bg-dust-orange
              hover:border-dust-orange
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

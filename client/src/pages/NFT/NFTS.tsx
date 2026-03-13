import { ArrowLeft } from "lucide-react";

export default function NFTS() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-almost-black text-white text-center px-6">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-dust-orange font-semibold mb-4">NFTs</h1>

        <p className="text-white/70">
          COMING <br />
          SOON!
        </p>

        {/* Back Button */}
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-2 border border-white px-8 py-3 uppercase tracking-wide text-sm text-white hover:text-black hover:bg-dust-orange hover:border-dust-orange"
        >
          <ArrowLeft className="w-4 h-4" /> <span>Back to home</span>
        </a>
      </div>
    </section>
  );
}

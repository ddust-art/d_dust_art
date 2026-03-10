export default function NewsletterConfirmed() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-almost-black text-white text-center px-6">
      <div>
        <h1 className="text-2xl text-dust-orange font-semibold mb-4">
          Subscription confirmed
        </h1>

        <p className="text-white/70">
          Thank you for confirming your subscription. <br />
          Soon we'll send some exciting news!
        </p>
      </div>
    </section>
  );
}

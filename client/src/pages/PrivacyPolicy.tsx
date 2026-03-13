import BackButton from "@/components/BackButton";

export default function PrivacyPolicy() {
  return (
    <section className="bg-almost-black text-white min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400">Last updated: March 2026</p>
        </header>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              1. General Information
            </h2>
            <p>
              This website collects and processes personal data only to the
              extent necessary to provide a functional website and our
              newsletter service. Personal data refers to any information
              relating to an identified or identifiable person, such as an email
              address.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              2. Data Controller
            </h2>
            <p>Responsible for data processing on this website:</p>
            <p className="mt-2">
              D Dust <br />
              Email: ddust.video@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              3. Newsletter Subscription
            </h2>
            <p>
              When you subscribe to the newsletter on this website, we collect
              your email address. This data is used exclusively for sending
              newsletters and related updates.
            </p>
            <p className="mt-2">
              The legal basis for this processing is your consent according to
              Article 6(1)(a) GDPR.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              4. Double Opt-In
            </h2>
            <p>
              To ensure that no one can register with another person's email
              address, we use a double opt-in procedure. After registering, you
              will receive an email asking you to confirm your subscription.
              Only after confirmation will your email address be added to the
              newsletter list.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              5. Newsletter Service Provider
            </h2>
            <p>
              The newsletter is sent using the service provider Brevo
              (Sendinblue). Brevo processes subscriber data on our behalf and
              may store data on servers within the European Union.
            </p>
            <p className="mt-2">
              Brevo is used as a data processor in accordance with GDPR
              requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              6. Data Storage
            </h2>
            <p>
              Your email address will be stored for as long as you remain
              subscribed to the newsletter. You may request deletion of your
              data at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              7. Unsubscribing
            </h2>
            <p>
              You may unsubscribe from the newsletter at any time by clicking
              the unsubscribe link included in every email.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              8. Your Rights
            </h2>
            <p>
              Under the General Data Protection Regulation (GDPR), you have the
              right to request access to your personal data, request correction
              or deletion, restrict processing, and withdraw consent at any
              time.
            </p>
          </div>
        </div>
        <BackButton label="Back to Home" />
      </div>
    </section>
  );
}

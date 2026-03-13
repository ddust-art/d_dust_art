import BackButton from "@/components/BackButton";

export default function Impressum() {
  return (
    <section className="bg-almost-black text-white min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">Impressum</h1>
        </header>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              Information according to §5 DDG
            </h2>

            <p>
              D Dust
              <br />
              Berlin, Germany
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">Contact</h2>

            <p>Email: ddust.video@gmail.com</p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              Responsibility for Content
            </h2>

            <p>
              The contents of this website have been created with the greatest
              possible care. However, we cannot guarantee the accuracy,
              completeness or timeliness of the content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">
              Liability for Links
            </h2>

            <p>
              This website may contain links to external websites of third
              parties. We have no influence on the contents of those websites
              and therefore cannot assume any liability for them. The respective
              provider or operator of the linked pages is always responsible for
              their content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-white mb-2">Copyright</h2>

            <p>
              The content and works on this website created by the site operator
              are subject to copyright law. Duplication, processing,
              distribution or any form of commercialization beyond the scope of
              copyright law requires prior written consent of the respective
              author.
            </p>
          </div>
        </div>
        <BackButton label="Back to Home" />
      </div>
    </section>
  );
}

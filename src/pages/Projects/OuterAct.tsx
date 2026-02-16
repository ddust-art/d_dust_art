export default function OuterAct() {
  return (
    <>
      <div>OuterAct</div>
      {/* Intro / text */}
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl text-tech-green font-bold mb-6">Projects</h2>

        <p className="text-lg text-black leading-relaxed">
          Similar to happenings, actions are artistic interventions and work to
          interrupt the pedestrians routine. Unaware of what is about to happen,
          their movements trigger interactive characters which are projected on
          their way. These performances also occur in the form of street
          exhibitions, where location and time are previously{" "}
          <a
            href="#Schedule"
            className="underline underline-offset-4 hover:opacity-70 transition"
          >
            scheduled
          </a>{" "}
          and publicly notified.
        </p>

        {/* Image grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <img
            src="https://cdn.prod.website-files.com/61b894d706346e5f3ed4003d/61c4bd178083e21ce1083d20_Card%2001_MSI_V3.jpg"
            alt=""
            loading="lazy"
            className="w-full h-auto object-cover"
          />

          <img
            src="https://cdn.prod.website-files.com/61b894d706346e5f3ed4003d/61c4bd177f4aa9e3140961ee_Card%2002_Frankfurt.jpg"
            alt=""
            loading="lazy"
            className="w-full h-auto object-cover"
          />

          <img
            src="https://cdn.prod.website-files.com/61b894d706346e5f3ed4003d/61c4bd17be592e3439b93d64_Card%2003_Rathausbru%CC%88cke.jpg"
            alt=""
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </>
  );
}

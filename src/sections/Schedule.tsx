import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { scheduleEvents } from "@/data/scheduleData";

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-white text-black">
      <h2 className="text-center text-tech-green text-4xl font-bold mb-16">
        Schedule
      </h2>

      <div className="max-w-5xl mx-auto px-6">
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <Accordion type="single" collapsible className="space-y-4">
            {scheduleEvents.map((event, index) => (
              <AccordionItem
                key={index}
                value={`event-${index}`}
                className="border border-black"
              >
                <AccordionTrigger
                  onClick={(e) => {
                    e.currentTarget.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="hover:no-underline px-6 py-5"
                >
                  <div className="flex items-center gap-6 text-left">
                    {/* Date */}
                    <div className="text-center min-w-[70px]">
                      <div className="text-2xl font-bold">{event.day}</div>
                      <div className="uppercase text-sm">{event.month}</div>
                      <div className="text-xs">{event.year}</div>
                    </div>

                    {/* Title */}
                    <div>
                      <div className="text-sm uppercase opacity-70">
                        {event.location}
                      </div>
                      <h4 className="text-lg font-semibold">{event.title}</h4>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6 text-base leading-relaxed">
                  {event.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

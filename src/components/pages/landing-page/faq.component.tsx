import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FaqSection = () => {
  return (
    <div className="h-full min-h-fit w-full max-w-screen-2xl mx-auto">
      <div className="h-full w-full py-14 px-4">
        <div className="h-full w-full flex max-lg:flex-col flex-row-reverse items-center justify-center gap-14">
          {/* Typography presentation */}
          <div className="w-fit h-fit max-lg:text-center">
            <h1 className="text-2xl md:text-4xl font-semibold tracking-wider leading-[1.5] mb-2">
              Frequently asked
              <br />
              questions?
            </h1>
            <p className="text-sm font-light text-black/40 dark:text-white/60 mb-2">
              not found? what are you looking for
            </p>
            <Button 
              variant="link"
              className="text-altermateOrange font-light tracking-wider p-0"
            >
              Contact us
            </Button>
          </div>
          {/* faq section */}
          <div className="max-lg:min-w-fit w-full sm:w-4/5 lg:w-full sm:max-w-[475px]">
            <h1 className="w-full max-lg:hidden text-2xl font-semibold mb-2.5 text-black dark:text-white">
              FAQ
            </h1>
            <Accordion type="single" collapsible className="">
              {faqs.map((faq) => (
                <AccordionItem
                  value={faq.question}
                  key={faq.question}
                  className="backdrop-blur-md px-1"
                >
                  <AccordionTrigger className="hover:no-underline focus-visible:outline-none">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pl-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What is Altermate?",
    answer:
      "A project-based learning platform connecting students with industry mentors.",
  },
  {
    question: "How do I become a mentor?",
    answer: "List your experience, mentor students, and build your network.",
  },
  {
    question: "Are there extra costs?",
    answer: "Basic use is free; some courses and mentorships may have fees.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Secure payments are made directly on the platform for courses and mentorship.",
  },
  {
    question: "Can I collaborate with others?",
    answer: "Yes, team up with peers to work on projects together.",
  },
  {
    question: "What is the 'Fred' AI feature?",
    answer:
      "An AI tool to help you select the ideal tech stack for your projects.",
  },
  {
    question: "How does it boost my career?",
    answer:
      "Gain hands-on experience and build a project portfolio to impress employers.",
  },
];

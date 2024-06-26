import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionSectionProps {
  triggerText?: string;
  descriptionPoints?: string[];
  value?: string;
}
export default function AccordionSection({
  triggerText,
  descriptionPoints,
  value,
}: AccordionSectionProps) {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-5">
      <AccordionItem
        value={`item-${value}`}
        className="shadow-faq-shadow rounded-xl px-10"
      >
        <AccordionTrigger className="hover:no-underline flex">
          <div className="flex gap-5 items-center justify-between w-full">
            <div className="flex gap-[24px] text-[24px] text-[#747264]">
              {triggerText}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="py-14 flex gap-5 flex-col text-[16px] leading-6">
          {descriptionPoints?.map((point, index) => (
            <span key={index}>{point}</span>
          ))}

          {/*<span>
            NutriGrade is a food label that helps consumers make healthier food
            choices. Its a five-point scale that uses letters from A to E and
            colors from green to red.
          </span>
          <span>
            NutriGrade considers the positives and negatives of each product.
          </span>
          <span>
            Negatives include: Calories, Sugar, Saturated fat, Salt.Positives
            include: Vegetables, Fruit, Nuts, Legumes, Fibre, Protein
          </span>*/}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

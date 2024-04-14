type FAQItem = {
  title: string;
  description: string[];
};
export const faqData: FAQItem[] = [
  {
    title: "What is NutriGrade",
    description: [
      "NutriGrade is a food label that helps consumers make healthier food choices. It's a five-point scale that uses letters from A to E and colors from green to red.",
      "NutriGrade considers the positives and negatives of each product.",
      "Negatives include: Calories, Sugar, Saturated fat, Salt.",
      "Positives include: Vegetables, Fruit, Nuts, Legumes, Fibre, Protein",
    ],
  },
  {
    title: "What is Nova Group",
    description: [
      "The NOVA classification is a system for grouping foods based on the extent and purpose of their processing. The NOVA system divides foods into four groups: unprocessed or minimally processed foods, processed culinary ingredients, processed foods, and ultra-processed food and drink products.",
      "The NOVA classification is based on the nature, extent, and purpose of the processing used in the preparation of food and drink products.",
      "The classification is not an assessment of the healthiness of foods and drinks.",
      "The NOVA classification is a useful tool for monitoring the impact of the food system on dietary patterns and health outcomes.",
    ],
  },
  {
    title: "It is made up of a 5-point scale",
    description: [
      "Letter “A” is the most favourable choice and is presented in dark green",
      "Letter “B” is light green, meaning it’s still a favourable choice",
      "Letter “C” is a balanced choice and is yellow",
      "Letter “D” is less favourable and is orange",
      "Letter “E” is the least favourable choice and is red",
    ],
  },
];

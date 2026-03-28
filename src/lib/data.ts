export const services = [
  {
    id: "intensive-reading",
    title: "Intensive Reading Mastery",
    description: "Learn advanced skimming and scanning techniques to ace the reading section within the time limit. Perfect for Band 8.0+ targeting.",
    icon: "BookOpen", // reference to Lucide icon
  },
  {
    id: "speaking-practice",
    title: "1-on-1 Speaking Practice",
    description: "Simulated exam conditions with instant feedback on pronunciation, vocabulary, and grammatical range.",
    icon: "Mic",
  },
  {
    id: "writing-correction",
    title: "Writing Task Correction",
    description: "Detailed line-by-line feedback on your essays to improve coherence, cohesion, and lexical resource.",
    icon: "PenTool",
  },
];

export const statistics = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Students Placed", value: 500, suffix: "+" },
  { label: "Success Rate", value: 98, suffix: "%" },
  { label: "Average Band Score", value: 7.5, suffix: "" },
];

export const testimonials = [
  {
    name: "Sarah Jenkins",
    target: "University of Toronto",
    score: "8.0",
    quote: "The personalized speaking sessions gave me the confidence I needed. I couldn't have achieved my score without this guidance.",
  },
  {
    name: "Ahmed Ali",
    target: "Imperial College London",
    score: "7.5",
    quote: "Writing was my weakest area. The detailed corrections helped me jump from a 6.0 to a 7.5 in just 4 weeks.",
  },
  {
    name: "Mei Lin",
    target: "University of Melbourne",
    score: "8.5",
    quote: "The reading strategies were a game changer. I finished the test with 10 minutes to spare!",
  },
  {
    name: "David Smith",
    target: "UBC",
    score: "7.5",
    quote: "Clear, practical, and incredibly supportive. Highly recommended for anyone serious about studying abroad.",
  },
  {
    name: "Priya Sharma",
    target: "University of Oxford",
    score: "8.0",
    quote: "An elite program that actually delivers. The mock tests were exactly like the real thing.",
  },
];

export const methodologySteps = [
  {
    step: 1,
    title: "Initial Assessment",
    description: "A comprehensive diagnostic test to identify your baseline score, strengths, and weaknesses.",
  },
  {
    step: 2,
    title: "Customized Plan",
    description: "A tailored study schedule focusing strictly on the areas that need the most improvement.",
  },
  {
    step: 3,
    title: "Intensive Execution",
    description: "Rigorous practice sessions using authentic materials, with constant feedback loops.",
  },
  {
    step: 4,
    title: "Exam Ready",
    description: "Final mock tests under timed conditions to ensure you peak exactly on test day.",
  },
];

export const pricingTiers = [
  {
    id: "starter",
    name: "Crash Course",
    monthlyPrice: 199,
    fullPrice: 499,
    features: [
      "10 Hours 1-on-1 Tutoring",
      "2 Full Mock Tests",
      "Basic Writing Corrections",
      "Email Support",
    ],
    isPopular: false,
  },
  {
    id: "pro",
    name: "Mastery Program",
    monthlyPrice: 349,
    fullPrice: 899,
    features: [
      "25 Hours 1-on-1 Tutoring",
      "5 Full Mock Tests",
      "Unlimited Writing Corrections",
      "Priority 24/7 Support",
      "University Application Review",
    ],
    isPopular: true,
  },
  {
    id: "elite",
    name: "Guaranteed Success",
    monthlyPrice: 599,
    fullPrice: 1499,
    features: [
      "50 Hours 1-on-1 Tutoring",
      "Weekly Mock Tests",
      "Unlimited Corrections",
      "VIP 24/7 Support",
      "Full Application Packaging",
      "Visa Interview Prep",
    ],
    isPopular: false,
  },
];

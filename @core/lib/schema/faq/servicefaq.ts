export const createServiceFaqSchema = (
  faqs: {
    question: string;
    answer: string;
  }[],
) => ({
  "@type": "FAQPage",

  mainEntity: faqs.map((faq) => ({
    "@type": "Question",

    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

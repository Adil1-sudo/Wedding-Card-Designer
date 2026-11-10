
import royalWedding from "../assets/images/royal-wedding.webp";
import floralWedding from "../assets/images/floral-wedding.webp";
import classicEngagement from "../assets/images/classic-engagement.webp";
import minimalWedding from "../assets/images/minimal-wedding.webp";

const products = [
  {
    id: "royal-wedding-01",
    name: "Royal Wedding Invitation",
    category: "Wedding",
    price: 250,
    image: royalWedding,
    description:
      "An elegant invitation design with classic details for a memorable wedding celebration.",
  },
  {
    id: "floral-wedding-02",
    name: "Floral Wedding Invitation",
    category: "Wedding",
    price: 220,
    image: floralWedding,
    description:
      "A romantic floral-inspired invitation for couples who love delicate designs.",
  },
  {
    id: "classic-engagement-03",
    name: "Classic Engagement Card",
    category: "Engagement",
    price: 180,
    image: classicEngagement,
    description:
      "A graceful invitation design for celebrating the beginning of a new journey.",
  },
  {
    id: "minimal-wedding-04",
    name: "Minimalist Wedding Invitation",
    category: "Wedding",
    price: 200,
    image: minimalWedding,
    description:
      "A clean and timeless invitation design with a minimal aesthetic.",
  },
];

export default products;

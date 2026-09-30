import client_01 from "../../public/images/clients/logoipsum-286-1.png";
import client_02 from "../../public/images/clients/logoipsum-286-1.png";
import client_03 from "../../public/images/clients/logoipsum-286-1.png";
import client_04 from "../../public/images/clients/logoipsum-286-1.png";
import client_05 from "../../public/images/clients/logoipsum-286-1.png";
import client_06 from "../../public/images/clients/logoipsum-286-1.png";
import card_img_01 from "../../public/images/work-5224077_1920.jpg";
import card_img_02 from "../../public/images/vision.jpg";
import support_1 from "../../public/images/support/support_1.png";
import { FaMapLocationDot, FaHeadphonesSimple } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { label } from "framer-motion/client";

type SupportItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export const staticData = {
  home: {
    banner: {
      label: "PET & POLYESTER STRAPPING · MANUFACTURER & EXPORTER",

      headingParts: [
        {
          text: "Polyester Strap Manufacturer & PET Strapping Exporter from India",
          color: "#FFFFFF",
          weight: "600",
        },
      ],

      description:
        "Strap World Pvt. Ltd. is an India-based manufacturer of PET and polyester strapping with 20+ years of manufacturing experience. We supply strapping for textile, automotive, packaging and industrial applications across India and export to markets including the UAE, Bangladesh, USA, Australia and other international destinations.",

      button: "Get a Quote",
      button2: "Explore Products",
      specifications:[
        {value:"6", name:"Core product families"},
         {value:"3-stage", name:"Quality-control workflow"},
          {value:"B2B", name:"Bulk & repeat supply"},
           {value:"Global", name:"Export documentation support"}
      ]
    },
    ourProducts: {
      label: "OUR PRODUCTS",

      headingParts: [
        {
          text: "PET & Polyester Strapping Products",
          color: "#111118",
          style: "normal",
          weight: "600",
        },
      ],

      description:
        "Explore our range of PET and polyester strapping manufactured for packaging, palletizing, bundling and industrial load-securing applications.",
list: [
  {
    title: "PET Strapping",
    description:
      "High-strength PET strapping for securing cartons, pallets, textile products and industrial loads during storage and transportation.",
    button: "View PET Strapping",
    href: "/products/pet-straps",
    image: "/images/service/service_img_1.png",
    labels: ["High strength", "Load securing"],
  },
  {
    title: "Polyester Strapping",
    description:
      "Durable polyester strapping for applications requiring reliable load retention and consistent performance.",
    button: "View Polyester Strapping",
    href: "/products/polyester-straps",
    image: "/images/service/service_img_2.png",
    labels: ["Durable", "Reliable retention"],
  },
  {
    title: "PET Packing Strap",
    description:
      "PET packing strap for bundling and securing cartons, textile products, packaged goods and industrial materials.",
    button: "View PET Packing Strap",
    href: "/products/packing-straps",
    image: "/images/service/service_img_3.png",
    labels: ["Versatile", "Industrial use"],
  },
  {
    title: "Industrial PET Strapping",
    description:
      "Industrial PET strapping for demanding packaging, palletizing and transportation applications.",
    button: "View Industrial PET Strapping",
    href: "/products/pet-straps",
    image: "/images/service/service_img_4.png",
    labels: ["Heavy duty", "Transport ready"],
  },
  {
    title: "PET Strapping Band",
    description:
      "PET strapping band available in multiple specifications for different load requirements and packaging applications.",
    button: "View PET Strapping Band",
    href: "/products/pet-straps",
    image: "/images/service/service_img_5.png",
    labels: ["Multiple sizes", "Custom specifications"],
  },
  {
    title: "Custom Strapping Solutions",
    description:
      "Strapping specifications can be selected according to application, required strength, dimensions, quantity and packaging requirements.",
    button: "Discuss Your Requirement",
    href: "/contact-us",
    image: "/images/service/service_img_6.png",
    labels: ["Custom specs", "Application based"],
  },
],
    },
    services: {
      label: "Industries served",

      headingParts: [
        {
          text: "Built around real handling conditions.",
          color: "#111118",
          style: "normal",
          weight: "600",
        },
      ],

      description:
        "From rigid heavy loads to high-volume cartons, we help operations select a strapping system with the right balance of strength, recovery and line speed.",

      list: [
        {
          title: "Metals & steel",
          description:
            "Coils, profiles, fabricated parts",
          href: "/services/web-development",
          image: "/images/service/icon_1.svg",
          labels:["High tensile", "Low relaxation"]
        },
        {
          title: "Building materials",
          description:
            "Tiles, boards, blocks, panels",
          href: "/services/software-development",
          image: "/images/service/icon_2.svg",
          labels:["Flexible ", "Machine compatible"]
        },
        {
          title: "Corrugated packaging",
          description:
            "Cartons, sheets, dispatch loads",
          href: "/services/mobile-applications",
          image: "/images/service/icon_3.svg",
          labels:["Durable", "Weather resistant"]
        },
        {
          title: "Food & beverage",
          description:
            "Cases, crates, dry-goods pallets",
          href: "/services/ui-ux-design",
          image: "/images/service/icon_4.svg",
          labels:["Custom width", "Color options"]
        },
        {
          title: "Textiles",
          description:
            "Bales, rolls, bundled finished goods",
          href: "/services/api-backend",
          image: "/images/service/icon_5.svg",
          labels:["Tension", "Seal", "Cut"]
        },
        {
          title: "Automotive",
          description:
            "Components, kits, returnable loads",
          href: "/services/cloud-devops",
          image: "/images/service/icon_6.svg",
          labels:["Tabletop", "Arch", "Integrated"]
        },
                {
          title: "Logistics",
          description:
            "Warehousing, fulfillment, export cargo",
          href: "/services/api-backend",
          image: "/images/service/icon_7.svg",
          labels:["Tension", "Seal", "Cut"]
        },
        {
          title: "Wood & furniture",
          description:
            "Boards, panels, assembled goods",
          href: "/services/cloud-devops",
          image: "/images/service/icon_8.svg",
          labels:["Tabletop", "Arch", "Integrated"]
        },
      ],
    },
    technicalPerformance: {
      label: "Technical performance",

      headingParts: [
        {
          text: "A secure-load system starts with the load itself.",
          color: "#ffffff",
          style: "normal",
          weight: "600",
        },
      ],
      description:
        "Consistent PET and PP strapping, tools and packaging systems built for secure loads, efficient lines and export-ready operations.",

      list: [
        {
          title: "Controlled Tension",
          description:
            "Grades selected around load retention, elongation and recovery needs.",
          href: "/services/web-development",
          image: "/images/products/product_icon_01.svg",
          labels:["High tensile", "Low relaxation"]
        },
        {
          title: "Consistent profile",
          description:
            "Attention to width, thickness, winding and edge quality for reliable feed.",
          href: "/services/software-development",
          image: "/images/products/product_icon_02.svg",
          labels:["Flexible ", "Machine compatible"]
        },
        {
          title: "Secure joining",
          description:
            "Surface options engineered for friction-weld, seal and buckle applications.",
          href: "/services/mobile-applications",
          image: "/images/products/product_icon_03.svg",
          labels:["Durable", "Weather resistant"]
        },
        {
          title: "Transit resilience",
          description:
            "Material options for outdoor exposure, storage and long-haul handling.",
          href: "/services/ui-ux-design",
          image: "/images/products/product_icon_04.svg",
          labels:["Custom width", "Color options"]
        }
      ],
      button:"Discuss Your Requirement"
    },
    solutionsByApplication:{
      label: "Solutions by application",

      headingParts: [
        {
          text: "A secure-load system starts with the load itself.",
          color: "#111118",
          style: "normal",
          weight: "700",
        },
      ],

      description:
        "We align strap material, dimensions, joining method and equipment with your product and process—not the other way around.",

      list: [
        {
          title: "Pallet stabilization",
          description:
            "Maintain load integrity through handling, warehousing and long-haul transit.",
          href: "/services/web-development",
          image: "/images/solutions/solution_01.svg",
          labels:["High tensile", "Low relaxation"]
        },
        {
          title: "Carton closure",
          description:
            "Fast, repeatable strapping for dispatch lines and distribution centers.",
          href: "/services/software-development",
          image: "/images/solutions/solution_02.svg",
          labels:["Flexible ", "Machine compatible"]
        },
        {
          title: "Bundling profiles & tubes",
          description:
            "Contain long, rigid or irregular products without surface damage.",
          href: "/services/mobile-applications",
          image: "/images/solutions/solution_03.svg",
          labels:["Durable", "Weather resistant"]
        },
        {
          title: "Heavy unitizing",
          description:
            "High-retention systems for dense materials and demanding load cycles.",
          href: "/services/ui-ux-design",
          image: "/images/solutions/solution_04.svg",
          labels:["Custom width", "Color options"]
        }
      ],
    },
    manufactureQuality:{
      label: "Manufacturing & quality",

      headingParts: [
        {
          text: "Repeatability is manufactured into every coil.",
          color: "#111118",
          style: "normal",
          weight: "600",
        },
      ],

      description:
        "Our process is structured around material discipline, stable extrusion, controlled winding and practical verification before a batch is prepared for shipment.",

      list: [
        {
          title: "Material & setup review",
          description:
            "Raw material, formulation and production settings are checked against the planned grade.",
          href: "/services/web-development",
          image: "/images/service/service_img_1.png",
          labels:["High tensile", "Low relaxation"]
        },
        {
          title: "In-process verification",
          description:
            "Dimensions, surface, winding and running behavior are monitored during production.",
          href: "/services/software-development",
          image: "/images/service/service_img_2.png",
          labels:["Flexible ", "Machine compatible"]
        },
        {
          title: "Final batch release",
          description:
            "Finished coils receive visual and performance checks, identification and packing review.",
          href: "/services/mobile-applications",
          image: "/images/service/service_img_3.png",
          labels:["Durable", "Weather resistant"]
        }
      ],
      labels:[
        {
          label: "Documented checks",
          image: "/images/service/service_img_1.png",
        },
        {
          label: "Batch traceability",
          image: "/images/service/service_img_2.png",
        },
        {
          label: "Shipment review",
          image: "/images/service/service_img_3.png",
        }
      ],
      button:"How we manufacture",

    },
    exportAndGlobalReach:{
      label: "Export & global reach",

      headingParts: [
        {
          text: "Made in India. Prepared for the world.",
          color: "#ffffff",
          style: "normal",
          size:"48px",
          weight: "700",
        },
      ],

      description:
        "Export supply demands more than a strong strap. We support clear specifications, robust secondary packing and consistent shipment identification for international B2B buyers.",

      labels:[
        {
          label: "Buyer-led labeling",
          image: "/images/service/service_img_1.png",
        },
        {
          label: "Palletized coil protection",
          image: "/images/service/service_img_1.png",
        },
        {
          label: "Commercial documentation",
          image: "/images/service/service_img_2.png",
        },
        {
          label: "Dispatch coordination",
          image: "/images/service/service_img_3.png",
        }
      ],
      specifications:[
        {
          value:15,
          suffix:"K+",
          label: "Projects Delivered",
        },
        {
          value:40,
          suffix:"+",
          label: "Skilled Tech Experts",
        },
        {
          value:20,
          suffix:"+",
          label: "Industries Expertise",
        },
        {
          value:4.5,
          suffix:"K+",
          label: "Trusted Global Clients",
        }
      ],

    },
    blogs: {
      label: "Technical resources",

      headingParts: [
        {
          text: "Better specifications make better shipments.",
          color: "#000000",
          weight: "700",
        },
      ],
      description:"Clear, practical guidance for packaging engineers, procurement teams and operations leaders.",

      list: [
        {
          img: "/images/blogs/blog_001.png",
          category: "Selection guide",
          title:
            "PET vs PP strapping: where each material performs best",
          excerpt:
            "Compare retention, recovery, handling and equipment fit before choosing a grade.",
          date: "Aug 28, 2026",
          readTime: "6 min read",
          href: "/blog/building-modern-web-applications-that-scale",
        },

        {
          img: "/images/blogs/blog_002.png",
          category: "Application checklist",
          title:
            "What to specify for a stable export pallet",
          excerpt:
            "A practical checklist covering load geometry, edges, transit, storage and joining.",
          date: "Aug 21, 2026",
          readTime: "5 min read",
          href: "/blog/why-great-ui-ux-design-matters",
        },

        {
          img: "/images/blogs/blog_003.png",
          category: "Technical note",
          title:
            "Improving friction-weld joint consistency",
          excerpt:
            "Understand tool setup, strap surface and maintenance factors that affect the joint.",
          date: "Aug 14, 2026",
          readTime: "7 min read",
          href: "/blog/from-idea-to-product",
        },
      ],
    },
  },



};

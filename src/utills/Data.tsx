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
      "id": "home",
      "bgImage": "/images/home/hero_banner.png",
      label: "PET Strap Manufacturer & Exporter from India",

      headingParts: [
        {
          text: "High-Strength PET Strapping Solutions for Industrial Packaging",
          color: "#FFFFFF",
          weight: "400",
        },
      ],

      description:
        "Strap World Pvt. Ltd. is an India-based manufacturer of PET and polyester strapping with 20+ years of manufacturing experience. We supply strapping for textile, automotive, packaging and industrial applications across India and export to markets including the UAE, Bangladesh, USA, Australia and other international destinations.",

      button: "Request a Quote",
      button2: "Explore Products",
      specifications: [
        { value: "6", name: "Manufacturing Facility" },
        { value: "3-stage", name: "Bulk Supply" },
        { value: "B2B", name: "Custom Specifications" },
        { value: "Global", name: "Domestic & Export Supply" }
      ]
    },
    keyStats: {
      label: "KEY STATS",

      headingParts: [
        {
          text: "Reliable PET Strapping Manufacturer for Global Packaging Needs",
          color: "#111118",
          style: "normal",
          weight: "500",
        },
      ],

      description:
        "Strap World Pvt. Ltd. is a PET strap manufacturer focused on supplying high-performance strapping solutions for industrial packaging and load securing. Our manufacturing and quality processes are designed to deliver consistent PET strapping for different applications, industries and transportation requirements.",
      specifications: [
        {
          value: 15,
          suffix: "K+",
          label: "Projects Delivered",
        },
        {
          value: 40,
          suffix: "+",
          label: "Skilled Tech Experts",
        },
        {
          value: 20,
          suffix: "+",
          label: "Industries Expertise",
        },
        {
          value: 4.5,
          suffix: "K+",
          label: "Trusted Global Clients",
        }
      ],
    },
    ourProducts: {
      label: "OUR PRODUCTS",
      textColor: "#ffffff",
      headingParts: [
        {
          text: "PET Strapping Products for Industrial Packaging",
          color: "#FFFFFF",
          style: "normal",
          weight: "500",
        },
      ],

      description:
        "Explore our range of PET strapping products designed for secure packaging, load stabilization and transportation. Our PET straps are available in different specifications to meet the requirements of industrial and commercial applications.",
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
          href: "#",
          image: "/images/service/icon_1.svg",
          labels: ["High tensile", "Low relaxation"]
        },
        {
          title: "Building materials",
          description:
            "Tiles, boards, blocks, panels",
          href: "#",
          image: "/images/service/icon_2.svg",
          labels: ["Flexible ", "Machine compatible"]
        },
        {
          title: "Corrugated packaging",
          description:
            "Cartons, sheets, dispatch loads",
          href: "#",
          image: "/images/service/icon_3.svg",
          labels: ["Durable", "Weather resistant"]
        },
        {
          title: "Food & beverage",
          description:
            "Cases, crates, dry-goods pallets",
          href: "#",
          image: "/images/service/icon_4.svg",
          labels: ["Custom width", "Color options"]
        },
        {
          title: "Textiles",
          description:
            "Bales, rolls, bundled finished goods",
          href: "#",
          image: "/images/service/icon_5.svg",
          labels: ["Tension", "Seal", "Cut"]
        },
        {
          title: "Automotive",
          description:
            "Components, kits, returnable loads",
          href: "#",
          image: "/images/service/icon_6.svg",
          labels: ["Tabletop", "Arch", "Integrated"]
        },
        {
          title: "Logistics",
          description:
            "Warehousing, fulfillment, export cargo",
          href: "#",
          image: "/images/service/icon_7.svg",
          labels: ["Tension", "Seal", "Cut"]
        },
        {
          title: "Wood & furniture",
          description:
            "Boards, panels, assembled goods",
          href: "#",
          image: "/images/service/icon_8.svg",
          labels: ["Tabletop", "Arch", "Integrated"]
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
          labels: ["High tensile", "Low relaxation"]
        },
        {
          title: "Consistent profile",
          description:
            "Attention to width, thickness, winding and edge quality for reliable feed.",
          href: "#",
          image: "/images/products/product_icon_02.svg",
          labels: ["Flexible ", "Machine compatible"]
        },
        {
          title: "Secure joining",
          description:
            "Surface options engineered for friction-weld, seal and buckle applications.",
          href: "#",
          image: "/images/products/product_icon_03.svg",
          labels: ["Durable", "Weather resistant"]
        },
        {
          title: "Transit resilience",
          description:
            "Material options for outdoor exposure, storage and long-haul handling.",
          href: "#",
          image: "/images/products/product_icon_04.svg",
          labels: ["Custom width", "Color options"]
        }
      ],
      button: "Discuss Your Requirement"
    },
    solutionsByApplication: {
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
          labels: ["High tensile", "Low relaxation"]
        },
        {
          title: "Carton closure",
          description:
            "Fast, repeatable strapping for dispatch lines and distribution centers.",
          href: "#",
          image: "/images/solutions/solution_02.svg",
          labels: ["Flexible ", "Machine compatible"]
        },
        {
          title: "Bundling profiles & tubes",
          description:
            "Contain long, rigid or irregular products without surface damage.",
          href: "#",
          image: "/images/solutions/solution_03.svg",
          labels: ["Durable", "Weather resistant"]
        },
        {
          title: "Heavy unitizing",
          description:
            "High-retention systems for dense materials and demanding load cycles.",
          href: "/services/ui-ux-design",
          image: "/images/solutions/solution_04.svg",
          labels: ["Custom width", "Color options"]
        }
      ],
    },
    manufactureQuality: {
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
          labels: ["High tensile", "Low relaxation"]
        },
        {
          title: "In-process verification",
          description:
            "Dimensions, surface, winding and running behavior are monitored during production.",
          href: "#",
          image: "/images/service/service_img_2.png",
          labels: ["Flexible ", "Machine compatible"]
        },
        {
          title: "Final batch release",
          description:
            "Finished coils receive visual and performance checks, identification and packing review.",
          href: "/services/mobile-applications",
          image: "/images/service/service_img_3.png",
          labels: ["Durable", "Weather resistant"]
        }
      ],
      labels: [
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
      button: "How we manufacture",

    },
    applications: {
      label: "APPLICATIONS",

      headingParts: [
        {
          text: "PET Strapping Solutions for Secure Load Handling",
          color: "#000000",
          style: "normal",
          weight: "500",
        },
      ],

      description:
        "PET straps are used across a wide range of packaging and load-securing applications. Our strapping solutions help businesses stabilize products during handling, storage and transportation.",

      list: [
        {
          title: "Pallet Stabilization",
          description:
            "Secure palletized products and help minimize movement during storage and transportation.",
          href: "/export-support",
          image: "/images/products/product_icon_01.svg",
          labels: ["Bulk supply", "Industrial orders"],
        },
        {
          title: "Heavy Load Securing",
          description:
            "PET strapping for bundling and securing heavy industrial products and materials.",
          href: "/export-support",
          image: "/images/products/product_icon_02.svg",
          labels: ["Export ready", "Secure packaging"],
        },
        {
          title: "Product Bundling",
          description:
            "Keep pipes, profiles, timber, sheets and other products securely bundled for handling and shipment.",
          href: "/export-support",
          image: "/images/products/product_icon_03.svg",
          labels: ["Documentation", "Shipment support"],
        },
        {
          title: "Export Packaging",
          description:
            "PET strapping solutions for products prepared for domestic transportation and international export.",
          href: "/export-support",
          image: "/images/products/product_icon_04.svg",
          labels: ["Container loading", "Dispatch"],
        }
      ],
      "button": "Find the Right Strapping Solution "

    },
    industriesWeServe: {
      label: "INDUSTRIES",
      textColor: "#000000",
      headingParts: [
        {
          text: "Industries We Serve",
          color: "#000000",
          style: "normal",
          weight: "500",
        },
      ],

      description:
        "Our PET strapping solutions can be used across multiple industries where reliable product bundling, pallet stabilization and load securing are required.",
      list: [
        {
          title: "Steel & Metal",
          description:
            "High-strength PET strapping for securing cartons, pallets, textile products and industrial loads during storage and transportation.",
          button: "View PET Strapping",
          href: "/products/pet-straps",
          image: "/images/industry/Industry_01.png",
          labels: ["High strength", "Load securing"],
        },
        {
          title: "Construction",
          description:
            "Durable polyester strapping for applications requiring reliable load retention and consistent performance.",
          button: "View Polyester Strapping",
          href: "/products/polyester-straps",
          image: "/images/industry/Industry_02.png",
          labels: ["Durable", "Reliable retention"],
        },
        {
          title: "Paper & Packaging",
          description:
            "PET packing strap for bundling and securing cartons, textile products, packaged goods and industrial materials.",
          button: "View PET Packing Strap",
          href: "/products/packing-straps",
          image: "/images/industry/Industry_03.png",
          labels: ["Versatile", "Industrial use"],
        },
        {
          title: "Textile",
          description:
            "Industrial PET strapping for demanding packaging, palletizing and transportation applications.",
          button: "View Industrial PET Strapping",
          href: "/products/pet-straps",
          image: "/images/industry/Industry_04.png",
          labels: ["Heavy duty", "Transport ready"],
        },
        {
          title: "Wood & Timber",
          description:
            "PET strapping band available in multiple specifications for different load requirements and packaging applications.",
          button: "View PET Strapping Band",
          href: "/products/pet-straps",
          image: "/images/industry/Industry_05.png",
          labels: ["Multiple sizes", "Custom specifications"],
        },
        {
          title: "Logistics & Warehousing",
          description:
            "Strapping specifications can be selected according to application, required strength, dimensions, quantity and packaging requirements.",
          button: "Discuss Your Requirement",
          href: "/contact-us",
          image: "/images/industry/Industry_06.png",
          labels: ["Custom specs", "Application based"],
        },
      ],
    },
    manufactureProcess: {
      label: "MANUFACTURING PROCESS",
      "aspectRatio": "16/24",

      headingParts: [
        {
          text: "PET Strap Manufacturing Process",
          color: "#111118",
          style: "normal",
          weight: "400",
        },
      ],

      description:
        "Our PET strap manufacturing process is designed to maintain consistent product dimensions, strength and performance from raw material processing through final packaging.",

      list: [
        {
          title: "Raw Material",
          description:
            "Selected PET raw material is prepared according to the required product specifications.",
          href: "#",
          image: "/images/service/service_img_1.png",
          labels: ["PET raw material", "Specification"],
        },
        {
          title: "Extrusion",
          description:
            "The material is processed through controlled extrusion to form the PET strap.",
          href: "#",
          image: "/images/service/service_img_2.png",
          labels: ["Controlled extrusion", "PET strap"],
        },
        {
          title: "Stretching & Orientation",
          description:
            "Controlled stretching helps develop the required mechanical properties and tensile performance.",
          href: "#",
          image: "/images/service/service_img_3.png",
          labels: ["Tensile performance", "Orientation"],
        },
        {
          title: "Embossing",
          description:
            "Where required, the strap surface is embossed to provide the specified texture and handling characteristics.",
          href: "#",
          image: "/images/service/service_img_4.png",
          labels: ["Surface texture", "Handling"],
        },
        {
          title: "Cooling & Stabilization",
          description:
            "The strap is cooled and stabilized before final processing.",
          href: "#",
          image: "/images/service/service_img_5.png",
          labels: ["Cooling", "Stabilization"],
        },
        {
          title: "Quality Testing",
          description:
            "Product parameters are checked according to defined quality requirements.",
          href: "#",
          image: "/images/service/service_img_6.png",
          labels: ["Quality testing", "Parameter checks"],
        },
        {
          title: "Winding",
          description:
            "Finished PET strap is wound into coils according to the required packaging format.",
          href: "#",
          image: "/images/service/service_img_1.png",
          labels: ["Coil winding", "Packaging format"],
        },
        {
          title: "Packaging & Dispatch",
          description:
            "Finished products are packed and prepared for domestic or international shipment.",
          href: "#",
          image: "/images/service/service_img_2.png",
          labels: ["Export packing", "Dispatch"],
        },
      ],
      labels: [
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
      button: "How we manufacture",

    },
    exportAndGlobalReach: {
      label: "Export & global reach",

      headingParts: [
        {
          text: "PET Strap Manufacturer Supplying Domestic & International Markets",
          color: "#ffffff",
          style: "normal",
          weight: "600",
        },
      ],

      description:
        "From our manufacturing facility in India, we supply PET strapping for domestic customers and international buyers. Our export process is organized around product specifications, packaging requirements, documentation and shipment coordination.",

      list: [
        {
          title: "Bulk Export Supply",
          description:
            "Production and packaging for bulk industrial requirements.",
          href: "/export-support",
          image: "/images/products/product_icon_01.svg",
          labels: ["Bulk supply", "Industrial orders"],
        },
        {
          title: "Export Packaging",
          description:
            "Products prepared according to agreed transportation and packaging requirements.",
          href: "/export-support",
          image: "/images/products/product_icon_02.svg",
          labels: ["Export ready", "Secure packaging"],
        },
        {
          title: "Export Documentation",
          description:
            "Supporting documentation prepared according to applicable shipment requirements.",
          href: "/export-support",
          image: "/images/products/product_icon_03.svg",
          labels: ["Documentation", "Shipment support"],
        },
        {
          title: "Container Loading",
          description:
            "Organized loading and dispatch for international shipments.",
          href: "/export-support",
          image: "/images/products/product_icon_04.svg",
          labels: ["Container loading", "Dispatch"],
        }
      ],

    },
    blogs: {
      label: "Technical resources",

      headingParts: [
        {
          text: "Better specifications make better shipments.",
          color: "#000000",
          weight: "500",
        },
      ],
      description: "Clear, practical guidance for packaging engineers, procurement teams and operations leaders.",

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
    "finalCTA": {
      "isVariant": "01",
      "label": "Start a conversation",
      "headingParts": [
        {
          "text": "Get a Quote for PET Strap",
          "color": "#ffffff",
          "style": "normal",
          "weight": "500"
        }
      ],
      "headingParts2": [
        {
          "text": "Tell us what you need to secure.",
          "color": "#000000",
          "size": "30px",
          "style": "normal",
          "weight": "400"
        }
      ],
      "description": "Share your required specifications, quantity, application, and delivery location with our team.",
      "list": [
        {
          "icon": "FaMapLocationDot",
          "label": "Product and application",
        },
        {
          "icon": "FaMapLocationDot",
          "label": "Required specification",
        },
        {
          "icon": "FaMapLocationDot",
          "label": "Order quantity",
        },
        {
          "icon": "FaMapLocationDot",
          "label": "Delivery location",
        }
      ],
      "description2": "Include your product, load profile, expected quantity and destination for a more relevant response.",
      "button": "Request a Quote",
      "button2": "Contact Us",
      "btn2BgColor": "#FFFFFF",
      "btn2TextColor": "#000000",
      "btnBgColor": "#063F3D",
      "btnTextColor": "#000000"

    },
  },



};

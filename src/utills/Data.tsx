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
          weight: "600",
        },
      ],

      description: "Strap World Pvt. Ltd. is an India-based manufacturer of high-quality PET and polyester strapping solutions. Established in 2018, we bring 9+ years of industry experience, serving packaging and industrial sectors across India and international markets.",

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
          value: 11,
          suffix: "K+",
          label: "Projects Delivered",
        },
        {
          value: 40,
          suffix: "+",
          label: "Skilled Tech Experts",
        },
        {
          value: 9,
          suffix: "+",
          label: "Industries Expertise",
        },
        {
          value: 151,
          suffix: "+",
          label: "Trusted Global Clients",
        }
      ],
    },
    ourProducts: {
      // padding:["0rem", "4rem"],
      label: "OUR PRODUCTS",
      textColor: "#000000",
      bgColor: "#F5F7F2",
      "href": "products",
      headingParts: [
        {
          text: "PET Strapping Products",
          color: "#000000",
          style: "normal",
          weight: "500",
        },
      ],

      description:
        "Explore our range of PET strapping products designed for secure packaging,",

      "list": [
        {
          "title": "PET Strap",
          "description": "Strong, reliable strapping for general packaging",
          "button": "View PET Strap",
          "href": "/pet-strap",
          "image": "/images/products/pet-strap-roll.jpg",
          "labels": ["Strong", "Reliable"]
        },
        {
          "title": "Heavy-Duty PET Strap",
          "description": "High-strength strap for heavy industrial loads",
          "button": "View Heavy-Duty PET Strap",
          "href": "/heavy-duty-pet-strap",
          "image": "/images/products/image_13.webp",
          "labels": ["Heavy Duty", "High Strength"]
        },
        {
          "title": "Green PET Strap",
          "description": "Durable green strap for secure packaging",
          "button": "View Green PET Strap",
          "href": "/green-pet-strap",
          "image": "/images/products/Green_PET_Strap.webp",
          "labels": ["Green", "Durable"]
        },
        {
          "title": "Embossed PET Strap",
          "description": "Textured surface provides improved grip and tension",
          "button": "View Embossed PET Strap",
          "href": "/embossed-pet-strap",
          "image": "/images/products/image_3.jpg",
          "labels": ["Embossed", "Better Grip"]
        },
        {
          "title": "Plain PET Strap",
          "description": "Smooth finish for clean packaging applications",
          "button": "View Plain PET Strap",
          "href": "/plain-pet-strap",
          "image": "/images/products/image_9.webp",
          "labels": ["Smooth Finish", "Clean Packaging"]
        },
        {
          "title": "PET Jumbo Roll",
          "description": "High-volume roll for efficient packaging operations",
          "button": "View PET Jumbo Roll",
          "href": "/pet-jumbo-roll",
          "image": "/images/products/image_12.webp",
          "labels": ["Jumbo Roll", "High Volume"]
        },
        {
          "title": "PET Box Strap",
          "description": "Reliable strapping for cartons and boxes",
          "button": "View PET Box Strap",
          "href": "/pet-box-strap",
          "image": "/images/products/images_4.jpg",
          "labels": ["Box Packaging", "Reliable"]
        },
        {
          "title": "Machine Grade PET Strap",
          "description": "Optimized strap for automated packaging machines",
          "button": "View Machine Grade PET Strap",
          "href": "/machine-grade-pet-strap",
          "image": "/images/products/images_5.avif",
          "labels": ["Machine Grade", "Automation"]
        },
        {
          "title": "Export Grade PET Strap",
          "description": "Premium strap for international shipping requirements",
          "button": "View Export Grade PET Strap",
          "href": "/export-grade-pet-strap",
          "image": "/images/products/Export_Grade_PET_Strap.jpg",
          "labels": ["Export Grade", "Premium"]
        },
        {
          "title": "Custom PET Strap",
          "description": "Customized widths and thicknesses for specific needs",
          "button": "View Custom PET Strap",
          "href": "/custom-pet-strap",
          "image": "/images/products/Custom_PET_Strap.jpg",
          "labels": ["Custom", "Made To Order"]
        }
      ]

      ,
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
        "Our PET strapping solutions can be used across multiple industries where reliable product bundling,",
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

      "floatingCardOne": { "icon": "", "title": "From plant to destination" },
      "floatingCardTwo": { "description": "A practical strapping material for varied products and distribution conditions." },
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
      href:"/manufacturing",

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

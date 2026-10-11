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
          "_id": "6ac930c6a162b404278e3279",
          "title": "Polyester Pet Strap",
          "description": "High-strength PET Straps for reliable, heavy-duty packaging.",
          "button": "View Product",
          "slug": "polyester-pet-strap",
          "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/image_15_olh4my.jpg",
          "labels": [
            "PP Strap",
            "Polypropylene Strap",
            "PP Strapping",
            "Lightweight",
            "Industrial Packaging",
            "Made in India"
          ],
          "productOverview": {
            "label": "PRODUCT OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "High-Strength ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Polyester PET Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": " for Heavy-Duty Packaging",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Polyester PET Straps are manufactured from polyester and provide a strong, durable, and dependable solution for securing heavy packages, palletised goods, and industrial loads during storage and transportation.",
              "Available in different widths, thicknesses, and specifications, Polyester PET Straps are suitable for industries that require secure load containment, including manufacturing, logistics, construction materials, textiles, and export packaging."
            ],
            "labels": [
              {
                "text": "High Tensile Strength",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Excellent Tension Retention",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Rust Resistant",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Heavy-Duty Packaging",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "slides": [
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485906/strapworld/products/slides/image_11.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485907/strapworld/products/slides/images_4.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485908/strapworld/products/slides/image_13.webp"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg"
              }
            ],
            "button": "Request a Quote"
          },
          "technicalOverview": {
            "label": "TECHNICAL OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Polyester PET Strap ",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": "Technical Specifications",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Polyester PET Straps are available in different widths and thicknesses to meet a variety of industrial packaging, palletising, and load-securing requirements.",
              "PET strapping offers high tensile strength, good tension retention, and resistance to rust, making it suitable for securing heavy cartons, palletised products, and industrial materials during storage and transportation.",
              "The specifications below are indicative options only. Actual roll length, roll weight, breaking load, and available dimensions should be confirmed with our technical team."
            ],
            "labels": [
              {
                "text": "High Tensile Strength",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Tension Retention",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Rust Resistant",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Heavy-Duty Packaging",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "list": [
              {
                "productCode": "OPP 806",
                "width": "8.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "5.80",
                "averageBreakLoad": "65",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 807",
                "width": "8.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "6.30",
                "averageBreakLoad": "80",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 955",
                "width": "9.00",
                "thickness": "0.55",
                "length": "4000",
                "weight": "12.00",
                "averageBreakLoad": "75",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 906",
                "width": "9.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "6.30",
                "averageBreakLoad": "80",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 907",
                "width": "9.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "7.00",
                "averageBreakLoad": "85",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1006",
                "width": "10.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "6.75",
                "averageBreakLoad": "85",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1106",
                "width": "11.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "7.00",
                "averageBreakLoad": "90",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1107",
                "width": "11.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "8.00",
                "averageBreakLoad": "110",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1255",
                "width": "12.00",
                "thickness": "0.55",
                "length": "2500",
                "weight": "10.00",
                "averageBreakLoad": "120",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1206",
                "width": "12.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "8.00",
                "averageBreakLoad": "110",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1207",
                "width": "12.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "9.00",
                "averageBreakLoad": "120",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1208",
                "width": "12.00",
                "thickness": "0.80",
                "length": "2000",
                "weight": "10.00",
                "averageBreakLoad": "120",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1506",
                "width": "15.00",
                "thickness": "0.60",
                "length": "1000",
                "weight": "6.00",
                "averageBreakLoad": "130",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1507",
                "width": "15.00",
                "thickness": "0.70",
                "length": "1000",
                "weight": "7.00",
                "averageBreakLoad": "150",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1508",
                "width": "15.00",
                "thickness": "0.80",
                "length": "1000",
                "weight": "8.00",
                "averageBreakLoad": "160",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1509",
                "width": "15.00",
                "thickness": "0.90",
                "length": "1000",
                "weight": "9.00",
                "averageBreakLoad": "170",
                "remarks": "Customized"
              }
            ],
            "button": "Request a Quote"
          },
          "relatedProducts": [
            {
              "productId": {
                "_id": "6ac930c6a162b404278e3279",
                "title": "Polyester Pet Strap",
                "description": "High-strength PET Straps for reliable, heavy-duty packaging.",
                "button": "View Product",
                "slug": "polyester-pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/image_15_olh4my.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9308da162b404278e3278",
                "title": "Cotton Bale Strap",
                "description": "Strong, reliable straps for secure cotton bale packaging.",
                "button": "View Product",
                "slug": "cotton-bale-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614647/strapworld/products/image_9_n04flz.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7e7d6fdc4585da6bc8dd2",
                "title": "PET Strap",
                "description": "High-strength PET Straps for secure, heavy-duty packaging.",
                "button": "View Product",
                "slug": "pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg",
                "labels": [
                  "PET Strap",
                  "PET Strapping",
                  "High Strength",
                  "Heavy Duty",
                  "Eco Friendly",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7ee12fdc4585da6bc8dd3",
                "title": "PP Strap",
                "description": "Lightweight PP Straps for secure, economical packaging.",
                "button": "View Product",
                "slug": "pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791626565/strapworld/products/pp-strap_pa11z5.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f28a162b404278e3273",
                "title": "Industrial Packaging Strap",
                "description": "Heavy-duty industrial straps for secure, reliable load packaging.",
                "button": "View Product",
                "slug": "industrial-packaging-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614658/strapworld/products/pet_strap_roll_01_pvenkd.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f69a162b404278e3274",
                "title": "Heat Sealing PP Strapping Roll",
                "description": "Heat-sealable PP Straps for strong, reliable packaging.",
                "button": "View Product",
                "slug": "heat-sealing-pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/images_4_mewglu.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92ff3a162b404278e3275",
                "title": "PP Box Color Strap",
                "description": "Colorful PP Straps for secure, organized carton packaging.",
                "button": "View Product",
                "slug": "pp-box-color-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_12_rwbmdc.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9301ea162b404278e3276",
                "title": "Plastic Box Strapping Roll",
                "description": "Durable plastic strapping rolls for secure box packaging.",
                "button": "View Product",
                "slug": "plastic-box-strapping-roll",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791481089/strapworld/products/custom_pet_strap.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            }
          ],
          "faqData": {
            "label": "FAQ",
            "headingParts": [
              {
                "text": "Frequently Asked Questions About ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Polyester PET Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              }
            ],
            "list": [
              {
                "question": "What is Polyester PET Strap?",
                "answer": "Polyester PET Strap, also known as PET Strapping, is a high-strength packaging strap made from polyethylene terephthalate. It is used to secure palletized goods, heavy packages, and industrial products during storage, handling, and transportation."
              },
              {
                "question": "What are Polyester PET Straps used for?",
                "answer": "PET Straps are commonly used in industries such as construction, textiles, logistics, manufacturing, and warehousing to secure bricks, timber, metal products, cartons, and other palletized materials."
              },
              {
                "question": "What are the main benefits of PET Strapping?",
                "answer": "PET Strapping offers high tensile strength, good tension retention, and durability for demanding packaging applications. It can provide a practical alternative to steel strapping when the application and load requirements are suitable."
              },
              {
                "question": "What sizes of Polyester PET Strap are available?",
                "answer": "PET Straps are available in different widths, thicknesses, roll lengths, and colors depending on product availability. Contact Strap World to confirm specifications for your packaging requirements."
              },
              {
                "question": "Is PET Strap suitable for heavy-duty packaging?",
                "answer": "Yes. PET Strap is widely used for heavy-duty packaging and palletizing because of its strength and ability to maintain tension. The appropriate strap specification depends on the load weight, package dimensions, and handling conditions."
              },
              {
                "question": "What is the difference between PP Strap and PET Strap?",
                "answer": "PP Strap is generally lightweight and economical for light and medium-duty packaging. PET Strap typically provides higher strength and better tension retention, making it suitable for many heavier industrial applications."
              },
              {
                "question": "Can Polyester PET Strap be used with strapping machines?",
                "answer": "Yes. PET Strap can be used with compatible manual tools, semi-automatic machines, and automatic strapping systems designed for PET strapping. Check the required strap dimensions and machine specifications before ordering."
              },
              {
                "question": "Is PET Strap resistant to outdoor conditions?",
                "answer": "PET Strap can perform well in many storage and transportation environments, including some outdoor applications. Its suitability depends on the strap grade, exposure conditions, duration, and load requirements."
              },
              {
                "question": "Can Polyester PET Strap be customized?",
                "answer": "Depending on availability, PET Strap can be supplied in different dimensions, colors, and roll specifications. Share your application details with Strap World to discuss suitable options."
              },
              {
                "question": "Where does Strap World supply Polyester PET Strap?",
                "answer": "Strap World is an India-based packaging strapping manufacturer serving domestic and export markets. Contact our team to confirm product availability, order quantities, and shipping options."
              },
              {
                "question": "How can I request a quote for Polyester PET Strap?",
                "answer": "You can request a quote by sharing your required width, thickness, estimated load requirements, roll quantity, and intended application with Strap World. Our team can help confirm suitable specifications and pricing."
              }
            ]
          },
          "createdAt": "2026-10-09T18:21:58.494Z"
        },
        {
          "_id": "6ac9308da162b404278e3278",
          "title": "Cotton Bale Strap",
          "description": "Strong, reliable straps for secure cotton bale packaging.",
          "button": "View Product",
          "slug": "cotton-bale-strap",
          "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614647/strapworld/products/image_9_n04flz.webp",
          "labels": [
            "PP Strap",
            "Polypropylene Strap",
            "PP Strapping",
            "Lightweight",
            "Industrial Packaging",
            "Made in India"
          ],
          "productOverview": {
            "label": "PRODUCT OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Strong ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Cotton Bale Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": " for Secure Bale Packaging",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Cotton Bale Straps are designed for securing compressed cotton bales and other fibrous materials during handling, storage, and transportation.",
              "Suitable specifications can be selected according to bale dimensions, load requirements, and baling equipment. Contact our team to confirm the appropriate strap type and specifications for your application."
            ],
            "labels": [
              {
                "text": "Bale Securing",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "High Strength",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Reliable Restraint",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Industrial Use",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "slides": [
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485906/strapworld/products/slides/image_11.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485907/strapworld/products/slides/images_4.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485908/strapworld/products/slides/image_13.webp"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg"
              }
            ],
            "button": "Request a Quote"
          },
          "technicalOverview": {
            "label": "TECHNICAL OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Cotton Bale Strap ",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": "Technical Specifications",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Cotton Bale Straps are designed for securing compressed cotton bales and other fibrous materials during baling, handling, storage, and transportation.",
              "The required strap dimensions and strength depend on bale weight, compression pressure, baling equipment, and handling conditions. Correct specification selection helps maintain bale integrity throughout the supply chain.",
              "The table below provides example specification options only. Please contact our technical team to confirm available dimensions, material type, breaking load, and compatibility with your baling equipment."
            ],
            "labels": [
              {
                "text": "Bale Securing",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "High Strength",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Reliable Restraint",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Industrial Use",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "list": [
              {
                "productCode": "CBS-19",
                "width": "19.00 mm",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Example option for cotton bale securing; confirm material and strength"
              },
              {
                "productCode": "CBS-25",
                "width": "25.00 mm",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Example width for larger bale applications; confirm suitability"
              },
              {
                "productCode": "CBS-CUSTOM",
                "width": "As required",
                "thickness": "As required",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "As required",
                "remarks": "Custom specifications subject to technical confirmation"
              }
            ],
            "button": "Request a Quote"
          },
          "relatedProducts": [
            {
              "productId": {
                "_id": "6ac930c6a162b404278e3279",
                "title": "Polyester Pet Strap",
                "description": "High-strength PET Straps for reliable, heavy-duty packaging.",
                "button": "View Product",
                "slug": "polyester-pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/image_15_olh4my.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9308da162b404278e3278",
                "title": "Cotton Bale Strap",
                "description": "Strong, reliable straps for secure cotton bale packaging.",
                "button": "View Product",
                "slug": "cotton-bale-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614647/strapworld/products/image_9_n04flz.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7e7d6fdc4585da6bc8dd2",
                "title": "PET Strap",
                "description": "High-strength PET Straps for secure, heavy-duty packaging.",
                "button": "View Product",
                "slug": "pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg",
                "labels": [
                  "PET Strap",
                  "PET Strapping",
                  "High Strength",
                  "Heavy Duty",
                  "Eco Friendly",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7ee12fdc4585da6bc8dd3",
                "title": "PP Strap",
                "description": "Lightweight PP Straps for secure, economical packaging.",
                "button": "View Product",
                "slug": "pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791626565/strapworld/products/pp-strap_pa11z5.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f28a162b404278e3273",
                "title": "Industrial Packaging Strap",
                "description": "Heavy-duty industrial straps for secure, reliable load packaging.",
                "button": "View Product",
                "slug": "industrial-packaging-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614658/strapworld/products/pet_strap_roll_01_pvenkd.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f69a162b404278e3274",
                "title": "Heat Sealing PP Strapping Roll",
                "description": "Heat-sealable PP Straps for strong, reliable packaging.",
                "button": "View Product",
                "slug": "heat-sealing-pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/images_4_mewglu.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92ff3a162b404278e3275",
                "title": "PP Box Color Strap",
                "description": "Colorful PP Straps for secure, organized carton packaging.",
                "button": "View Product",
                "slug": "pp-box-color-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_12_rwbmdc.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9301ea162b404278e3276",
                "title": "Plastic Box Strapping Roll",
                "description": "Durable plastic strapping rolls for secure box packaging.",
                "button": "View Product",
                "slug": "plastic-box-strapping-roll",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791481089/strapworld/products/custom_pet_strap.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            }
          ],
          "faqData": {
            "label": "FAQ",
            "headingParts": [
              {
                "text": "Frequently Asked Questions About ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Cotton Bale Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              }
            ],
            "list": [
              {
                "question": "What is Cotton Bale Strap?",
                "answer": "Cotton Bale Strap is a strapping solution used to secure compressed cotton bales during baling, handling, storage, and transportation. The suitable strap material and specification depend on the baling process and bale requirements."
              },
              {
                "question": "What are Cotton Bale Straps used for?",
                "answer": "Cotton Bale Straps are used to hold compressed cotton bales together and help maintain bale integrity during movement, storage, and shipment. They are commonly relevant to cotton processing, ginning, and textile supply chains."
              },
              {
                "question": "What are the benefits of using Cotton Bale Straps?",
                "answer": "A suitable cotton bale strapping solution helps keep compressed bales securely bound, supports safer handling, and reduces the risk of bales loosening during storage and transportation when correctly specified and applied."
              },
              {
                "question": "Which material is used for Cotton Bale Strapping?",
                "answer": "Cotton bale strapping may use different materials depending on the baling equipment, required strength, and industry practice. Contact Strap World to confirm the material options available for your application."
              },
              {
                "question": "Can Cotton Bale Strap handle high bale compression?",
                "answer": "The strap must be selected for the compression pressure, bale weight, and handling conditions involved. Confirm the required breaking load and compatibility with your baling equipment before choosing a product."
              },
              {
                "question": "Are Cotton Bale Straps available in different sizes?",
                "answer": "Available widths, thicknesses, lengths, and other specifications depend on the product range. Contact Strap World with your bale dimensions and equipment details to confirm suitable options."
              },
              {
                "question": "How do I choose the right Cotton Bale Strap?",
                "answer": "Consider bale weight, compression pressure, baling machine requirements, fastening method, and transportation conditions. The selected strap should meet the required strength and be compatible with the equipment used."
              },
              {
                "question": "Can Cotton Bale Strap be used with automatic baling machines?",
                "answer": "Compatibility depends on the strap material, dimensions, feeding system, and machine design. Confirm the machine specifications and recommended strapping type before ordering."
              },
              {
                "question": "How should Cotton Bale Straps be stored?",
                "answer": "Store strapping in a clean, dry area away from direct sunlight, excessive heat, and damage. Follow the supplier's storage guidance and inspect the strap before use."
              },
              {
                "question": "Where does Strap World supply Cotton Bale Strap?",
                "answer": "Strap World is an India-based manufacturer of packaging strapping products serving domestic and export requirements. Contact our team to confirm cotton bale strapping availability, specifications, and shipping options."
              },
              {
                "question": "How can I request a quote for Cotton Bale Strap?",
                "answer": "Share your required dimensions, bale weight, baling equipment details, estimated quantity, and delivery destination with Strap World. Our team can help confirm suitable specifications and prepare a quotation."
              }
            ]
          },
          "createdAt": "2026-10-09T18:21:01.673Z"
        },
        {
          "_id": "6ac93056a162b404278e3277",
          "title": "Semi Automatic PP Strap",
          "description": "Durable PP Straps for efficient, secure carton packaging.",
          "button": "View Product",
          "slug": "semi-automatic-pp-strap",
          "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_14_kuj8mc.jpg",
          "labels": [
            "PP Strap",
            "Polypropylene Strap",
            "PP Strapping",
            "Lightweight",
            "Industrial Packaging",
            "Made in India"
          ],
          "productOverview": {
            "label": "PRODUCT OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Reliable ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Semi Automatic PP Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": " for Efficient Packaging",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Semi Automatic PP Straps are made from polypropylene and designed for efficient bundling and securing of cartons, boxes, and packaged goods using semi-automatic strapping machines.",
              "These straps offer lightweight construction, flexibility, and convenient machine feeding, helping streamline packaging operations while maintaining reliable bundle security.",
              "Available in different widths, thicknesses, and roll specifications, Semi Automatic PP Strap can be selected according to machine compatibility, package dimensions, and load requirements."
            ],
            "labels": [
              {
                "text": "Machine Compatible",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Smooth Feeding",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Cost Effective",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Packaging Efficiency",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "slides": [
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485906/strapworld/products/slides/image_11.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485907/strapworld/products/slides/images_4.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485908/strapworld/products/slides/image_13.webp"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg"
              }
            ],
            "button": "Request a Quote"
          },
          "technicalOverview": {
            "label": "TECHNICAL OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Semi Automatic PP Strap ",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": "Technical Specifications",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Semi Automatic PP Straps are designed for use with compatible semi-automatic strapping machines to secure cartons, boxes, bundles, and packaged goods.",
              "Available in different widths and thicknesses, these polypropylene straps support smooth machine feeding and reliable packaging performance across a range of applications.",
              "Actual roll dimensions, core size, roll weight, length, and breaking load depend on the selected product and machine requirements. Please contact our technical team to confirm specifications before ordering."
            ],
            "labels": [
              {
                "text": "Machine Compatible",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Smooth Feeding",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Consistent Quality",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Custom Options",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "list": [
              {
                "productCode": "SA-PP-9",
                "width": "9.00 mm",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "For compatible semi-automatic strapping machines; confirm machine suitability"
              },
              {
                "productCode": "SA-PP-12",
                "width": "12.00 mm",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "For carton sealing and general packaging applications"
              },
              {
                "productCode": "SA-PP-15",
                "width": "15.00 mm",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "For compatible machine-based bundling and packaging"
              },
              {
                "productCode": "SA-PP-CUSTOM",
                "width": "As required",
                "thickness": "As required",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Custom specifications subject to availability and machine compatibility"
              }
            ],
            "button": "Request a Quote"
          },
          "relatedProducts": [
            {
              "productId": {
                "_id": "6ac930c6a162b404278e3279",
                "title": "Polyester Pet Strap",
                "description": "High-strength PET Straps for reliable, heavy-duty packaging.",
                "button": "View Product",
                "slug": "polyester-pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/image_15_olh4my.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9308da162b404278e3278",
                "title": "Cotton Bale Strap",
                "description": "Strong, reliable straps for secure cotton bale packaging.",
                "button": "View Product",
                "slug": "cotton-bale-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614647/strapworld/products/image_9_n04flz.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7e7d6fdc4585da6bc8dd2",
                "title": "PET Strap",
                "description": "High-strength PET Straps for secure, heavy-duty packaging.",
                "button": "View Product",
                "slug": "pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg",
                "labels": [
                  "PET Strap",
                  "PET Strapping",
                  "High Strength",
                  "Heavy Duty",
                  "Eco Friendly",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7ee12fdc4585da6bc8dd3",
                "title": "PP Strap",
                "description": "Lightweight PP Straps for secure, economical packaging.",
                "button": "View Product",
                "slug": "pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791626565/strapworld/products/pp-strap_pa11z5.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f28a162b404278e3273",
                "title": "Industrial Packaging Strap",
                "description": "Heavy-duty industrial straps for secure, reliable load packaging.",
                "button": "View Product",
                "slug": "industrial-packaging-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614658/strapworld/products/pet_strap_roll_01_pvenkd.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f69a162b404278e3274",
                "title": "Heat Sealing PP Strapping Roll",
                "description": "Heat-sealable PP Straps for strong, reliable packaging.",
                "button": "View Product",
                "slug": "heat-sealing-pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/images_4_mewglu.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92ff3a162b404278e3275",
                "title": "PP Box Color Strap",
                "description": "Colorful PP Straps for secure, organized carton packaging.",
                "button": "View Product",
                "slug": "pp-box-color-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_12_rwbmdc.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9301ea162b404278e3276",
                "title": "Plastic Box Strapping Roll",
                "description": "Durable plastic strapping rolls for secure box packaging.",
                "button": "View Product",
                "slug": "plastic-box-strapping-roll",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791481089/strapworld/products/custom_pet_strap.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            }
          ],
          "faqData": {
            "label": "FAQ",
            "headingParts": [
              {
                "text": "Frequently Asked Questions About ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Machine Grade PET Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              }
            ],
            "list": [
              {
                "question": "What is Machine Grade PET Strap?",
                "answer": "Machine Grade PET Strap is polyester strapping designed for use with compatible automatic and semi-automatic strapping machines. It is used to secure cartons, palletized goods, and industrial loads during handling, storage, and transportation."
              },
              {
                "question": "What are Machine Grade PET Straps used for?",
                "answer": "Machine Grade PET Straps are commonly used in manufacturing, warehousing, logistics, construction materials, textiles, and other industries that require consistent machine-based bundling and load securing."
              },
              {
                "question": "What are the benefits of Machine Grade PET Strap?",
                "answer": "Machine Grade PET Strap offers high strength, good tension retention, and consistent feeding when matched to suitable equipment. It can help improve packaging efficiency and support secure load handling."
              },
              {
                "question": "Can Machine Grade PET Strap be used in automatic strapping machines?",
                "answer": "Yes. Machine Grade PET Strap is intended for compatible automatic and semi-automatic strapping systems. Confirm the machine's supported strap width, thickness, roll dimensions, and material requirements before ordering."
              },
              {
                "question": "What is the difference between Machine Grade PET Strap and regular PET Strap?",
                "answer": "Machine Grade PET Strap is selected for consistent feeding and operation in strapping equipment. Other PET Strap products may be intended for manual or different machine applications, so equipment compatibility should be checked."
              },
              {
                "question": "What sizes are available for Machine Grade PET Strap?",
                "answer": "Available widths, thicknesses, roll lengths, core dimensions, and roll weights depend on the product range. Contact Strap World to confirm specifications compatible with your machine."
              },
              {
                "question": "Is Machine Grade PET Strap suitable for heavy-duty packaging?",
                "answer": "PET Strapping is widely used for demanding packaging and palletizing applications. The correct machine-grade strap should be selected based on load weight, required breaking strength, package dimensions, and handling conditions."
              },
              {
                "question": "Can Machine Grade PET Strap replace steel strapping?",
                "answer": "In some applications, PET Strap can be an alternative to steel strapping. Suitability depends on load characteristics, transport conditions, required restraint, and applicable safety requirements."
              },
              {
                "question": "How do I choose the right Machine Grade PET Strap?",
                "answer": "Consider your machine model, required strap dimensions, core size, load weight, breaking-load requirements, and operating conditions. Matching the strap to the equipment helps support reliable feeding and sealing."
              },
              {
                "question": "Where does Strap World supply Machine Grade PET Strap?",
                "answer": "Strap World is an India-based manufacturer of packaging strapping products serving domestic and export requirements. Contact our team to confirm availability, specifications, order quantities, and shipping options."
              },
              {
                "question": "How can I request a quote for Machine Grade PET Strap?",
                "answer": "Share your machine model, required strap width and thickness, roll specifications, estimated quantity, and delivery destination with Strap World. Our team can help confirm suitable options and provide a quotation."
              }
            ]
          },
          "createdAt": "2026-10-09T18:20:06.842Z"
        },
        {
          "_id": "6ac9301ea162b404278e3276",
          "title": "Plastic Box Strapping Roll",
          "description": "Durable plastic strapping rolls for secure box packaging.",
          "button": "View Product",
          "slug": "plastic-box-strapping-roll",
          "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791481089/strapworld/products/custom_pet_strap.jpg",
          "labels": [
            "PP Strap",
            "Polypropylene Strap",
            "PP Strapping",
            "Lightweight",
            "Industrial Packaging",
            "Made in India"
          ],
          "productOverview": {
            "label": "PRODUCT OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Durable ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Plastic Box Strapping Roll",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": " for Secure Packaging",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Plastic Box Strapping Rolls provide a reliable and economical solution for bundling, sealing, and securing cartons, boxes, and packaged products during storage, handling, and transportation.",
              "Designed for everyday packaging operations, these strapping rolls offer practical flexibility, convenient handling, and dependable bundling performance for warehouses, distribution centres, manufacturing units, and shipping facilities.",
              "Available in different specifications to suit various packaging requirements, Plastic Box Strapping Rolls help keep packages organised and securely bundled while supporting efficient packing and dispatch operations."
            ],
            "labels": [
              {
                "text": "Secure Bundling",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Easy Handling",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Cost Effective",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Packaging Ready",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "slides": [
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485906/strapworld/products/slides/image_11.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485907/strapworld/products/slides/images_4.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485908/strapworld/products/slides/image_13.webp"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg"
              }
            ],
            "button": "Request a Quote"
          },
          "technicalOverview": {
            "label": "TECHNICAL OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Plastic Box Strapping Roll ",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": "Technical Specifications",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Plastic Box Strapping Rolls are designed for bundling and securing cartons, boxes, and packaged goods across a wide range of packaging and dispatch operations.",
              "Available in different widths and thicknesses, these strapping rolls can be selected according to package dimensions, bundling requirements, and the type of strapping equipment used.",
              "Roll length, roll weight, and breaking load depend on the selected specification. Contact our technical team to confirm product availability and obtain specifications suited to your packaging requirements."
            ],
            "labels": [
              {
                "text": "Secure Bundling",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Easy Handling",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Consistent Quality",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Custom Options",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "list": [
              {
                "productCode": "OPP 806",
                "width": "8.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "5.80",
                "averageBreakLoad": "65",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 807",
                "width": "8.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "6.30",
                "averageBreakLoad": "80",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 955",
                "width": "9.00",
                "thickness": "0.55",
                "length": "4000",
                "weight": "12.00",
                "averageBreakLoad": "75",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 906",
                "width": "9.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "6.30",
                "averageBreakLoad": "80",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 907",
                "width": "9.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "7.00",
                "averageBreakLoad": "85",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1006",
                "width": "10.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "6.75",
                "averageBreakLoad": "85",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1106",
                "width": "11.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "7.00",
                "averageBreakLoad": "90",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1107",
                "width": "11.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "8.00",
                "averageBreakLoad": "110",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1255",
                "width": "12.00",
                "thickness": "0.55",
                "length": "2500",
                "weight": "10.00",
                "averageBreakLoad": "120",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1206",
                "width": "12.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "8.00",
                "averageBreakLoad": "110",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1207",
                "width": "12.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "9.00",
                "averageBreakLoad": "120",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1208",
                "width": "12.00",
                "thickness": "0.80",
                "length": "2000",
                "weight": "10.00",
                "averageBreakLoad": "120",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1506",
                "width": "15.00",
                "thickness": "0.60",
                "length": "1000",
                "weight": "6.00",
                "averageBreakLoad": "130",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1507",
                "width": "15.00",
                "thickness": "0.70",
                "length": "1000",
                "weight": "7.00",
                "averageBreakLoad": "150",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1508",
                "width": "15.00",
                "thickness": "0.80",
                "length": "1000",
                "weight": "8.00",
                "averageBreakLoad": "160",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1509",
                "width": "15.00",
                "thickness": "0.90",
                "length": "1000",
                "weight": "9.00",
                "averageBreakLoad": "170",
                "remarks": "Customized"
              }
            ],
            "button": "Request a Quote"
          },
          "relatedProducts": [
            {
              "productId": {
                "_id": "6ac930c6a162b404278e3279",
                "title": "Polyester Pet Strap",
                "description": "High-strength PET Straps for reliable, heavy-duty packaging.",
                "button": "View Product",
                "slug": "polyester-pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/image_15_olh4my.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9308da162b404278e3278",
                "title": "Cotton Bale Strap",
                "description": "Strong, reliable straps for secure cotton bale packaging.",
                "button": "View Product",
                "slug": "cotton-bale-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614647/strapworld/products/image_9_n04flz.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7e7d6fdc4585da6bc8dd2",
                "title": "PET Strap",
                "description": "High-strength PET Straps for secure, heavy-duty packaging.",
                "button": "View Product",
                "slug": "pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg",
                "labels": [
                  "PET Strap",
                  "PET Strapping",
                  "High Strength",
                  "Heavy Duty",
                  "Eco Friendly",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7ee12fdc4585da6bc8dd3",
                "title": "PP Strap",
                "description": "Lightweight PP Straps for secure, economical packaging.",
                "button": "View Product",
                "slug": "pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791626565/strapworld/products/pp-strap_pa11z5.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f28a162b404278e3273",
                "title": "Industrial Packaging Strap",
                "description": "Heavy-duty industrial straps for secure, reliable load packaging.",
                "button": "View Product",
                "slug": "industrial-packaging-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614658/strapworld/products/pet_strap_roll_01_pvenkd.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f69a162b404278e3274",
                "title": "Heat Sealing PP Strapping Roll",
                "description": "Heat-sealable PP Straps for strong, reliable packaging.",
                "button": "View Product",
                "slug": "heat-sealing-pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/images_4_mewglu.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92ff3a162b404278e3275",
                "title": "PP Box Color Strap",
                "description": "Colorful PP Straps for secure, organized carton packaging.",
                "button": "View Product",
                "slug": "pp-box-color-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_12_rwbmdc.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9301ea162b404278e3276",
                "title": "Plastic Box Strapping Roll",
                "description": "Durable plastic strapping rolls for secure box packaging.",
                "button": "View Product",
                "slug": "plastic-box-strapping-roll",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791481089/strapworld/products/custom_pet_strap.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            }
          ],
          "faqData": {
            "label": "FAQ",
            "headingParts": [
              {
                "text": "Frequently Asked Questions About ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Plastic Box Strapping Roll",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              }
            ],
            "list": [
              {
                "question": "What is a Plastic Box Strapping Roll?",
                "answer": "A Plastic Box Strapping Roll is a continuous roll of plastic strapping material used to bundle, secure, and stabilize cartons, boxes, and packaged goods during storage, handling, and transportation."
              },
              {
                "question": "What are Plastic Box Strapping Rolls used for?",
                "answer": "They are commonly used in packaging, warehousing, logistics, e-commerce, manufacturing, and distribution for securing cartons, boxes, and other packaged products."
              },
              {
                "question": "What are the benefits of Plastic Box Strapping Rolls?",
                "answer": "Plastic strapping helps keep packages securely bundled, supports easier handling, and offers a lightweight and practical packaging solution for everyday shipping and storage needs."
              },
              {
                "question": "Which materials are used to manufacture Plastic Box Strapping Rolls?",
                "answer": "Plastic strapping rolls are commonly manufactured from polypropylene (PP) or polyester (PET), depending on the required strength, application, and packaging conditions."
              },
              {
                "question": "Are Plastic Box Strapping Rolls suitable for heavy-duty packaging?",
                "answer": "They can be suitable for a range of packaging requirements. The appropriate material, width, thickness, and strength should be selected according to the package weight and load-securing needs."
              },
              {
                "question": "Can Plastic Box Strapping Rolls be used with strapping machines?",
                "answer": "Yes, compatible rolls can be used with manual tools, semi-automatic machines, or automatic strapping machines. Check the machine's supported strap material, width, thickness, roll dimensions, and core size before ordering."
              },
              {
                "question": "What sizes are available for Plastic Box Strapping Rolls?",
                "answer": "Available sizes depend on the material and intended application. Width, thickness, roll length, and core dimensions can be discussed with the supplier to find a suitable option."
              },
              {
                "question": "How do I choose the right Plastic Box Strapping Roll?",
                "answer": "Consider the size and weight of the package, required holding strength, strapping method, machine compatibility, and transportation conditions. These factors help determine the appropriate strap specification."
              },
              {
                "question": "Can Plastic Box Strapping Rolls be customized?",
                "answer": "Depending on manufacturing availability, options may include different widths, thicknesses, roll lengths, materials, and colors. Confirm the required specifications with the supplier."
              },
              {
                "question": "Where can I buy Plastic Box Strapping Rolls from Strap World?",
                "answer": "Strap World Pvt. Ltd. supplies plastic strapping solutions for packaging and industrial applications. Contact the team to discuss your requirements, available specifications, and supply options."
              },
              {
                "question": "How can I request a quote for Plastic Box Strapping Rolls?",
                "answer": "Contact Strap World with your preferred material, strap dimensions, package application, estimated quantity, and machine requirements, if applicable, to request a quotation."
              }
            ]
          },
          "createdAt": "2026-10-09T18:19:10.025Z"
        },
        {
          "_id": "6ac92ff3a162b404278e3275",
          "title": "PP Box Color Strap",
          "description": "Colorful PP Straps for secure, organized carton packaging.",
          "button": "View Product",
          "slug": "pp-box-color-strap",
          "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_12_rwbmdc.webp",
          "labels": [
            "PP Strap",
            "Polypropylene Strap",
            "PP Strapping",
            "Lightweight",
            "Industrial Packaging",
            "Made in India"
          ],
          "productOverview": {
            "label": "PRODUCT OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Vibrant ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "PP Box Color Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": " for Secure Packaging",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World PP Box Color Straps are manufactured from polypropylene and provide a lightweight, practical, and economical solution for bundling and securing cartons, boxes, and packaged goods.",
              "Designed for everyday packaging operations, these coloured strapping rolls offer convenient handling, flexibility, and reliable bundling performance while helping identify, organise, and distinguish packages during storage and transportation.",
              "Available in different colours, widths, and thicknesses, PP Box Color Straps can be selected to match packaging requirements, product dimensions, and operational needs across warehouses, manufacturing facilities, and distribution centres."
            ],
            "labels": [
              {
                "text": "Multiple Colours",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Lightweight",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Easy Handling",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Cost Effective",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "slides": [
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485906/strapworld/products/slides/image_11.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485907/strapworld/products/slides/images_4.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485908/strapworld/products/slides/image_13.webp"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg"
              }
            ],
            "button": "Request a Quote"
          },
          "technicalOverview": {
            "label": "TECHNICAL OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "PP Box Color Strap ",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": "Technical Specifications",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World PP Box Color Straps are available in different widths, thicknesses, and colour options to meet a variety of carton packaging, bundling, and identification requirements.",
              "These polypropylene straps provide a practical solution for securing boxes and packaged goods while helping distinguish shipments, organise inventory, and streamline warehouse operations.",
              "The table below shows indicative specification options. Actual dimensions, roll length, roll weight, colour availability, and breaking load should be confirmed with our technical team."
            ],
            "labels": [
              {
                "text": "Multiple Colours",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Lightweight",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Easy Handling",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Custom Options",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "list": [
              {
                "productCode": "OPP 806",
                "width": "8.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "5.80",
                "averageBreakLoad": "65",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 807",
                "width": "8.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "6.30",
                "averageBreakLoad": "80",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 955",
                "width": "9.00",
                "thickness": "0.55",
                "length": "4000",
                "weight": "12.00",
                "averageBreakLoad": "75",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 906",
                "width": "9.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "6.30",
                "averageBreakLoad": "80",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 907",
                "width": "9.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "7.00",
                "averageBreakLoad": "85",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1006",
                "width": "10.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "6.75",
                "averageBreakLoad": "85",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1106",
                "width": "11.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "7.00",
                "averageBreakLoad": "90",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1107",
                "width": "11.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "8.00",
                "averageBreakLoad": "110",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1255",
                "width": "12.00",
                "thickness": "0.55",
                "length": "2500",
                "weight": "10.00",
                "averageBreakLoad": "120",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1206",
                "width": "12.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "8.00",
                "averageBreakLoad": "110",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1207",
                "width": "12.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "9.00",
                "averageBreakLoad": "120",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1208",
                "width": "12.00",
                "thickness": "0.80",
                "length": "2000",
                "weight": "10.00",
                "averageBreakLoad": "120",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1506",
                "width": "15.00",
                "thickness": "0.60",
                "length": "1000",
                "weight": "6.00",
                "averageBreakLoad": "130",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1507",
                "width": "15.00",
                "thickness": "0.70",
                "length": "1000",
                "weight": "7.00",
                "averageBreakLoad": "150",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1508",
                "width": "15.00",
                "thickness": "0.80",
                "length": "1000",
                "weight": "8.00",
                "averageBreakLoad": "160",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1509",
                "width": "15.00",
                "thickness": "0.90",
                "length": "1000",
                "weight": "9.00",
                "averageBreakLoad": "170",
                "remarks": "Customized"
              }
            ],
            "button": "Request a Quote"
          },
          "relatedProducts": [
            {
              "productId": {
                "_id": "6ac930c6a162b404278e3279",
                "title": "Polyester Pet Strap",
                "description": "High-strength PET Straps for reliable, heavy-duty packaging.",
                "button": "View Product",
                "slug": "polyester-pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/image_15_olh4my.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9308da162b404278e3278",
                "title": "Cotton Bale Strap",
                "description": "Strong, reliable straps for secure cotton bale packaging.",
                "button": "View Product",
                "slug": "cotton-bale-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614647/strapworld/products/image_9_n04flz.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7e7d6fdc4585da6bc8dd2",
                "title": "PET Strap",
                "description": "High-strength PET Straps for secure, heavy-duty packaging.",
                "button": "View Product",
                "slug": "pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg",
                "labels": [
                  "PET Strap",
                  "PET Strapping",
                  "High Strength",
                  "Heavy Duty",
                  "Eco Friendly",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7ee12fdc4585da6bc8dd3",
                "title": "PP Strap",
                "description": "Lightweight PP Straps for secure, economical packaging.",
                "button": "View Product",
                "slug": "pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791626565/strapworld/products/pp-strap_pa11z5.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f28a162b404278e3273",
                "title": "Industrial Packaging Strap",
                "description": "Heavy-duty industrial straps for secure, reliable load packaging.",
                "button": "View Product",
                "slug": "industrial-packaging-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614658/strapworld/products/pet_strap_roll_01_pvenkd.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f69a162b404278e3274",
                "title": "Heat Sealing PP Strapping Roll",
                "description": "Heat-sealable PP Straps for strong, reliable packaging.",
                "button": "View Product",
                "slug": "heat-sealing-pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/images_4_mewglu.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92ff3a162b404278e3275",
                "title": "PP Box Color Strap",
                "description": "Colorful PP Straps for secure, organized carton packaging.",
                "button": "View Product",
                "slug": "pp-box-color-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_12_rwbmdc.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9301ea162b404278e3276",
                "title": "Plastic Box Strapping Roll",
                "description": "Durable plastic strapping rolls for secure box packaging.",
                "button": "View Product",
                "slug": "plastic-box-strapping-roll",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791481089/strapworld/products/custom_pet_strap.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            }
          ],
          "faqData": {
            "label": "FAQ",
            "headingParts": [
              {
                "text": "Frequently Asked Questions About ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "PP Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              }
            ],
            "list": [
              {
                "question": "What is PP Strap?",
                "answer": "PP Strap, also known as Polypropylene Strap or PP Strapping, is a lightweight plastic strapping material used for bundling, securing and stabilizing packaged products during handling, storage and transportation."
              },
              {
                "question": "What are PP Straps used for?",
                "answer": "PP Straps are commonly used for carton packaging, box bundling, textile packaging, paper and printing products, palletized goods and general industrial packaging applications."
              },
              {
                "question": "What are the advantages of PP Strapping?",
                "answer": "PP Strapping is lightweight, flexible and easy to handle. It provides a practical and economical solution for many light and medium-duty packaging requirements."
              },
              {
                "question": "Can PP Strap specifications be customized?",
                "answer": "Yes. Depending on the application and production requirements, PP Strap can be supplied in different widths, thicknesses, colors and other specifications. Contact Strap World to discuss your requirements."
              },
              {
                "question": "Is PP Strap suitable for heavy-duty applications?",
                "answer": "PP Strap is primarily used for light and medium-duty packaging and bundling. For demanding heavy-duty load-securing applications, PET Strap or other suitable strapping solutions may be more appropriate."
              },
              {
                "question": "What is the difference between PP Strap and PET Strap?",
                "answer": "PP Strap is generally lighter and more flexible and is commonly used for light and medium-duty packaging. PET Strap provides higher load-securing performance and is generally preferred for heavier and more demanding applications."
              },
              {
                "question": "Is PP Strap suitable for automated packing machines?",
                "answer": "PP Strap can be used with compatible manual, semi-automatic and automatic strapping equipment. Machine compatibility depends on strap dimensions and equipment specifications."
              },
              {
                "question": "Where does Strap World manufacture PP Straps?",
                "answer": "Strap World manufactures packaging strapping products in India and supplies solutions for domestic and export requirements."
              }
            ]
          },
          "createdAt": "2026-10-09T18:18:27.709Z"
        },
        {
          "_id": "6ac92f69a162b404278e3274",
          "title": "Heat Sealing PP Strapping Roll",
          "description": "Heat-sealable PP Straps for strong, reliable packaging.",
          "button": "View Product",
          "slug": "heat-sealing-pp-strap",
          "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/images_4_mewglu.jpg",
          "labels": [
            "PP Strap",
            "Polypropylene Strap",
            "PP Strapping",
            "Lightweight",
            "Industrial Packaging",
            "Made in India"
          ],
          "productOverview": {
            "label": "PRODUCT OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Reliable ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Heat Sealing PP Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": " for Secure Packaging",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Heat Sealing PP Straps are made from polypropylene and designed for securing cartons, boxes, bundles, and packaged goods using compatible heat-sealing strapping machines.",
              "These straps support heat-welded joints when used with suitable equipment, helping create neat and secure packaging for storage, handling, and transportation.",
              "Available in different widths and thicknesses, Heat Sealing PP Strap can be selected according to machine compatibility, package dimensions, and load requirements."
            ],
            "labels": [
              {
                "text": "Heat Weldable",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Secure Sealing",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Lightweight",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Machine Compatible",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "slides": [
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485906/strapworld/products/slides/image_11.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485907/strapworld/products/slides/images_4.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485908/strapworld/products/slides/image_13.webp"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg"
              }
            ],
            "button": "Request a Quote"
          },
          "technicalOverview": {
            "label": "TECHNICAL OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Heat Sealing PP Strap ",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": "Technical Specifications",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Heat Sealing PP Straps are designed for use with compatible strapping equipment that joins the strap ends through heat welding.",
              "Available dimensions and performance characteristics depend on the selected strap grade and the requirements of the packaging machine.",
              "Please contact our technical team to confirm strap width, thickness, roll dimensions, weight, breaking load, and compatibility with your heat-sealing equipment."
            ],
            "labels": [
              {
                "text": "Heat Weldable",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Consistent Quality",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Machine Compatible",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Custom Options",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "list": [
              {
                "productCode": "HS-PP-9",
                "width": "9.00 mm",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Example size; confirm heat-welding and machine compatibility"
              },
              {
                "productCode": "HS-PP-12",
                "width": "12.00 mm",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "For compatible carton and general packaging applications"
              },
              {
                "productCode": "HS-PP-15",
                "width": "15.00 mm",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Example size for machine-based industrial bundling"
              },
              {
                "productCode": "HS-PP-16",
                "width": "16.00 mm",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Confirm suitability for the machine and package load"
              },
              {
                "productCode": "HS-PP-CUSTOM",
                "width": "As required",
                "thickness": "As required",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Custom specifications subject to availability and technical confirmation"
              }
            ],
            "button": "Request a Quote"
          },
          "relatedProducts": [
            {
              "productId": {
                "_id": "6ac930c6a162b404278e3279",
                "title": "Polyester Pet Strap",
                "description": "High-strength PET Straps for reliable, heavy-duty packaging.",
                "button": "View Product",
                "slug": "polyester-pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/image_15_olh4my.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9308da162b404278e3278",
                "title": "Cotton Bale Strap",
                "description": "Strong, reliable straps for secure cotton bale packaging.",
                "button": "View Product",
                "slug": "cotton-bale-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614647/strapworld/products/image_9_n04flz.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7e7d6fdc4585da6bc8dd2",
                "title": "PET Strap",
                "description": "High-strength PET Straps for secure, heavy-duty packaging.",
                "button": "View Product",
                "slug": "pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg",
                "labels": [
                  "PET Strap",
                  "PET Strapping",
                  "High Strength",
                  "Heavy Duty",
                  "Eco Friendly",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7ee12fdc4585da6bc8dd3",
                "title": "PP Strap",
                "description": "Lightweight PP Straps for secure, economical packaging.",
                "button": "View Product",
                "slug": "pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791626565/strapworld/products/pp-strap_pa11z5.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f28a162b404278e3273",
                "title": "Industrial Packaging Strap",
                "description": "Heavy-duty industrial straps for secure, reliable load packaging.",
                "button": "View Product",
                "slug": "industrial-packaging-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614658/strapworld/products/pet_strap_roll_01_pvenkd.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f69a162b404278e3274",
                "title": "Heat Sealing PP Strapping Roll",
                "description": "Heat-sealable PP Straps for strong, reliable packaging.",
                "button": "View Product",
                "slug": "heat-sealing-pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/images_4_mewglu.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92ff3a162b404278e3275",
                "title": "PP Box Color Strap",
                "description": "Colorful PP Straps for secure, organized carton packaging.",
                "button": "View Product",
                "slug": "pp-box-color-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_12_rwbmdc.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9301ea162b404278e3276",
                "title": "Plastic Box Strapping Roll",
                "description": "Durable plastic strapping rolls for secure box packaging.",
                "button": "View Product",
                "slug": "plastic-box-strapping-roll",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791481089/strapworld/products/custom_pet_strap.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            }
          ],
          "faqData": {
            "label": "FAQ",
            "headingParts": [
              {
                "text": "Frequently Asked Questions About ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Heat Sealing PP Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              }
            ],
            "list": [
              {
                "question": "What is a Heat Sealing PP Strap?",
                "answer": "A Heat Sealing PP Strap is a polypropylene strapping material designed to secure cartons, boxes, and packaged goods using compatible heat-sealing equipment. Heat and pressure bond the overlapping strap ends to form a secure closure."
              },
              {
                "question": "What are Heat Sealing PP Straps used for?",
                "answer": "They are commonly used in packaging, warehousing, logistics, manufacturing, and distribution to bundle cartons, boxes, and other lightweight to medium-weight packages."
              },
              {
                "question": "What are the benefits of Heat Sealing PP Straps?",
                "answer": "Heat-sealable PP straps provide a lightweight and practical packaging solution. With compatible equipment and correct settings, they help create consistent seals and support efficient packaging operations."
              },
              {
                "question": "How does heat sealing work with PP Straps?",
                "answer": "The overlapping strap ends are joined by a compatible heat-sealing mechanism. The machine applies the required heat and pressure, then allows the joint to set. Correct temperature, strap compatibility, and machine settings are important for a reliable seal."
              },
              {
                "question": "Are Heat Sealing PP Straps suitable for automatic strapping machines?",
                "answer": "They can be used with compatible automatic or semi-automatic strapping machines designed for heat-sealing PP straps. Always confirm the machine's supported strap dimensions, material, roll specifications, and sealing method."
              },
              {
                "question": "Are Heat Sealing PP Straps suitable for heavy-duty packaging?",
                "answer": "PP strapping is generally used for lightweight to medium-duty packaging. For heavier loads or applications requiring greater strength and tension retention, PET strapping may be more suitable depending on the application."
              },
              {
                "question": "What sizes are available for Heat Sealing PP Straps?",
                "answer": "Available dimensions depend on the product range and intended use. Width, thickness, roll length, and core size should be selected according to the packaging requirements and machine specifications."
              },
              {
                "question": "Can Heat Sealing PP Straps be used for carton packaging?",
                "answer": "Yes, they are suitable for securing cartons and boxes in shipping, storage, and distribution when the strap strength and sealing method match the package requirements."
              },
              {
                "question": "How do Heat Sealing PP Straps differ from other PP Straps?",
                "answer": "The main consideration is compatibility with the intended joining method and strapping equipment. Heat-sealing applications require a strap and machine combination that can create a reliable heat-bonded joint."
              },
              {
                "question": "How do I choose the right Heat Sealing PP Strap?",
                "answer": "Consider package weight, carton dimensions, required holding strength, strap dimensions, machine compatibility, and the sealing method. Confirm these details with your supplier before ordering."
              },
              {
                "question": "Can Heat Sealing PP Straps be customized?",
                "answer": "Depending on availability, options may include different widths, thicknesses, roll lengths, and colors. Share your required specifications with Strap World to confirm suitable options."
              },
              {
                "question": "Where can I buy Heat Sealing PP Straps from Strap World?",
                "answer": "Strap World Pvt. Ltd. supplies strapping solutions for packaging and industrial applications. Contact the team to discuss product specifications, machine compatibility, quantities, and supply options."
              },
              {
                "question": "How can I request a quote for Heat Sealing PP Straps?",
                "answer": "To request a quotation, provide your required strap dimensions, estimated quantity, packaging application, preferred color, and strapping machine details, if applicable."
              }
            ]
          },
          "createdAt": "2026-10-09T18:16:09.276Z"
        },
        {
          "_id": "6ac92f28a162b404278e3273",
          "title": "Industrial Packaging Strap",
          "description": "Heavy-duty industrial straps for secure, reliable load packaging.",
          "button": "View Product",
          "slug": "industrial-packaging-strap",
          "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614658/strapworld/products/pet_strap_roll_01_pvenkd.webp",
          "labels": [
            "PP Strap",
            "Polypropylene Strap",
            "PP Strapping",
            "Lightweight",
            "Industrial Packaging",
            "Made in India"
          ],
          "productOverview": {
            "label": "PRODUCT OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Durable ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Industrial Packaging Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": " for Heavy-Duty Bundling",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Industrial Packaging Straps are designed to secure cartons, palletized goods, industrial components, and bulk packages during handling, storage, and transportation.",
              "Suitable strapping helps keep packaged loads bundled and stable while supporting efficient handling across manufacturing, warehousing, logistics, and distribution operations.",
              "Available in suitable material types and dimensions according to application requirements, the right strap can be selected based on package weight, load conditions, and strapping equipment."
            ],
            "labels": [
              {
                "text": "Industrial Strength",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Reliable Bundling",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Load Security",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Multiple Applications",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "slides": [
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485906/strapworld/products/slides/image_11.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485907/strapworld/products/slides/images_4.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485908/strapworld/products/slides/image_13.webp"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg"
              }
            ],
            "button": "Request a Quote"
          },
          "technicalOverview": {
            "label": "TECHNICAL OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Industrial Packaging Strap ",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": "Technical Specifications",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Industrial Packaging Straps can be selected to meet different bundling, palletizing, and load-securing requirements across industrial applications.",
              "Technical specifications depend on the strap material, width, thickness, package weight, and whether manual or machine strapping is used.",
              "Contact our technical team to confirm available dimensions, roll specifications, breaking load, and compatibility with your packaging process."
            ],
            "labels": [
              {
                "text": "Load Security",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Durable Performance",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Industrial Use",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Custom Options",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "list": [
              {
                "productCode": "IPS-PP",
                "width": "To be confirmed",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Polypropylene option for suitable industrial packaging applications"
              },
              {
                "productCode": "IPS-PET",
                "width": "To be confirmed",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Polyester option for applications requiring higher load restraint"
              },
              {
                "productCode": "IPS-CUSTOM",
                "width": "As required",
                "thickness": "As required",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Specifications selected according to load, application, and equipment"
              }
            ],
            "button": "Request a Quote"
          },
          "relatedProducts": [
            {
              "productId": {
                "_id": "6ac930c6a162b404278e3279",
                "title": "Polyester Pet Strap",
                "description": "High-strength PET Straps for reliable, heavy-duty packaging.",
                "button": "View Product",
                "slug": "polyester-pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/image_15_olh4my.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9308da162b404278e3278",
                "title": "Cotton Bale Strap",
                "description": "Strong, reliable straps for secure cotton bale packaging.",
                "button": "View Product",
                "slug": "cotton-bale-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614647/strapworld/products/image_9_n04flz.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7e7d6fdc4585da6bc8dd2",
                "title": "PET Strap",
                "description": "High-strength PET Straps for secure, heavy-duty packaging.",
                "button": "View Product",
                "slug": "pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg",
                "labels": [
                  "PET Strap",
                  "PET Strapping",
                  "High Strength",
                  "Heavy Duty",
                  "Eco Friendly",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7ee12fdc4585da6bc8dd3",
                "title": "PP Strap",
                "description": "Lightweight PP Straps for secure, economical packaging.",
                "button": "View Product",
                "slug": "pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791626565/strapworld/products/pp-strap_pa11z5.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f28a162b404278e3273",
                "title": "Industrial Packaging Strap",
                "description": "Heavy-duty industrial straps for secure, reliable load packaging.",
                "button": "View Product",
                "slug": "industrial-packaging-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614658/strapworld/products/pet_strap_roll_01_pvenkd.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f69a162b404278e3274",
                "title": "Heat Sealing PP Strapping Roll",
                "description": "Heat-sealable PP Straps for strong, reliable packaging.",
                "button": "View Product",
                "slug": "heat-sealing-pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/images_4_mewglu.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92ff3a162b404278e3275",
                "title": "PP Box Color Strap",
                "description": "Colorful PP Straps for secure, organized carton packaging.",
                "button": "View Product",
                "slug": "pp-box-color-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_12_rwbmdc.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9301ea162b404278e3276",
                "title": "Plastic Box Strapping Roll",
                "description": "Durable plastic strapping rolls for secure box packaging.",
                "button": "View Product",
                "slug": "plastic-box-strapping-roll",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791481089/strapworld/products/custom_pet_strap.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            }
          ],
          "faqData": {
            "label": "FAQ",
            "headingParts": [
              {
                "text": "Frequently Asked Questions About ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Industrial Packaging Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              }
            ],
            "list": [
              {
                "question": "What is an Industrial Packaging Strap?",
                "answer": "An Industrial Packaging Strap is a strapping material used to bundle, secure, and stabilize products, cartons, pallets, and industrial loads during storage, handling, and transportation."
              },
              {
                "question": "What are Industrial Packaging Straps used for?",
                "answer": "They are used across manufacturing, warehousing, logistics, construction materials, textile packaging, and distribution industries to secure products and prepare shipments for transport."
              },
              {
                "question": "What are the benefits of Industrial Packaging Straps?",
                "answer": "Industrial packaging straps help keep loads bundled, support safer handling, reduce package movement, and provide a practical solution for organizing products during storage and shipping."
              },
              {
                "question": "What materials are used for Industrial Packaging Straps?",
                "answer": "Common materials include polypropylene (PP) and polyester (PET). PP is often used for lightweight to medium-duty packaging, while PET may be suitable for heavier loads that require greater strength and tension retention."
              },
              {
                "question": "Are Industrial Packaging Straps suitable for heavy loads?",
                "answer": "Yes, the appropriate strapping material can be selected for many industrial loads. Suitability depends on the load weight, dimensions, handling conditions, and required strap strength. Heavy-duty applications should be assessed carefully before selecting a strap."
              },
              {
                "question": "Can Industrial Packaging Straps be used with strapping machines?",
                "answer": "Yes, compatible straps can be used with manual tools, semi-automatic machines, or automatic strapping systems. Confirm the supported material, strap width, thickness, roll dimensions, and core size before ordering."
              },
              {
                "question": "What sizes are available for Industrial Packaging Straps?",
                "answer": "Available sizes vary by material and application. Width, thickness, roll length, and strength should be selected according to the product being secured and the equipment used."
              },
              {
                "question": "How do I choose between PP and PET Industrial Packaging Straps?",
                "answer": "Consider the load weight, required tension retention, packaging conditions, and budget. PP straps are commonly used for general carton bundling, while PET straps are often considered for heavier or more demanding packaging applications."
              },
              {
                "question": "Can Industrial Packaging Straps be used for palletizing?",
                "answer": "Yes, suitable industrial strapping can help secure palletized goods. The strap type and specifications should match the load, pallet configuration, transport conditions, and applicable safety requirements."
              },
              {
                "question": "Can Industrial Packaging Straps be customized?",
                "answer": "Depending on availability, options may include different materials, widths, thicknesses, roll lengths, and colors. Contact Strap World to confirm the specifications available for your application."
              },
              {
                "question": "Where can I buy Industrial Packaging Straps from Strap World?",
                "answer": "Strap World Pvt. Ltd. supplies strapping solutions for packaging and industrial applications. Contact the team to discuss your application, required specifications, quantities, and supply options."
              },
              {
                "question": "How can I request a quote for Industrial Packaging Straps?",
                "answer": "Share details such as the material preference, load type, required strap dimensions, estimated quantity, and machine requirements, if applicable, with the Strap World team to request a quotation."
              }
            ]
          },
          "createdAt": "2026-10-09T18:15:04.095Z"
        },
        {
          "_id": "6ac92ee8a162b404278e3272",
          "title": "Manual Box Strapping",
          "description": "Reliable manual strapping for secure, efficient carton packaging.",
          "button": "View Product",
          "slug": "manual-box-strapping",
          "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791633026/strapworld/products/manual_packing_yc4ims.jpg",
          "labels": [
            "PP Strap",
            "Polypropylene Strap",
            "PP Strapping",
            "Lightweight",
            "Industrial Packaging",
            "Made in India"
          ],
          "productOverview": {
            "label": "PRODUCT OVERVIEW",
            "isSlides": true,
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Reliable ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Manual Box Strapping",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": " for Secure Packaging",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Manual Box Strapping provides a practical solution for bundling and securing cartons, boxes, and packaged goods during storage, handling, and transportation.",
              "Designed for manual packaging workflows, compatible strapping can be tensioned and fastened using suitable hand tools, seals, or buckles according to the strap type.",
              "Available in suitable widths and thicknesses, the strapping can be selected according to package dimensions, load requirements, and the preferred manual fastening method."
            ],
            "labels": [
              {
                "text": "Easy Handling",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Secure Bundling",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Flexible Application",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Manual Packaging",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "slides": [
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791633026/strapworld/products/manual_packing_yc4ims.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791633026/strapworld/products/manual_packing2_dasbl9.jpg"
              }
            ],
            "button": "Request a Quote"
          },
          "technicalOverview": {
            "label": "TECHNICAL OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Manual Box Strapping ",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": "Technical Specifications",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World Manual Box Strapping can be selected for hand-operated packaging processes across warehouses, distribution centers, retail operations, and manufacturing facilities.",
              "Specifications depend on the strap material, width, thickness, package weight, and fastening method. Compatible hand tools and seals should be selected for the chosen strap.",
              "Contact our technical team to confirm available sizes, roll length, roll weight, breaking load, and suitable manual fastening accessories."
            ],
            "labels": [
              {
                "text": "Manual Use",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Reliable Bundling",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Easy Application",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Custom Options",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "list": [
              {
                "productCode": "MBS-PP",
                "width": "To be confirmed",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Polypropylene strap option for suitable manual carton bundling"
              },
              {
                "productCode": "MBS-PET",
                "width": "To be confirmed",
                "thickness": "To be confirmed",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Polyester strap option for applications requiring higher load restraint"
              },
              {
                "productCode": "MBS-CUSTOM",
                "width": "As required",
                "thickness": "As required",
                "length": "As required",
                "weight": "As required",
                "averageBreakLoad": "To be specified",
                "remarks": "Select specifications and fastening method according to the packaging application"
              }
            ],
            "button": "Request a Quote"
          },
          "relatedProducts": [
            {
              "productId": {
                "_id": "6ac930c6a162b404278e3279",
                "title": "Polyester Pet Strap",
                "description": "High-strength PET Straps for reliable, heavy-duty packaging.",
                "button": "View Product",
                "slug": "polyester-pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/image_15_olh4my.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9308da162b404278e3278",
                "title": "Cotton Bale Strap",
                "description": "Strong, reliable straps for secure cotton bale packaging.",
                "button": "View Product",
                "slug": "cotton-bale-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614647/strapworld/products/image_9_n04flz.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7e7d6fdc4585da6bc8dd2",
                "title": "PET Strap",
                "description": "High-strength PET Straps for secure, heavy-duty packaging.",
                "button": "View Product",
                "slug": "pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg",
                "labels": [
                  "PET Strap",
                  "PET Strapping",
                  "High Strength",
                  "Heavy Duty",
                  "Eco Friendly",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7ee12fdc4585da6bc8dd3",
                "title": "PP Strap",
                "description": "Lightweight PP Straps for secure, economical packaging.",
                "button": "View Product",
                "slug": "pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791626565/strapworld/products/pp-strap_pa11z5.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f28a162b404278e3273",
                "title": "Industrial Packaging Strap",
                "description": "Heavy-duty industrial straps for secure, reliable load packaging.",
                "button": "View Product",
                "slug": "industrial-packaging-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614658/strapworld/products/pet_strap_roll_01_pvenkd.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f69a162b404278e3274",
                "title": "Heat Sealing PP Strapping Roll",
                "description": "Heat-sealable PP Straps for strong, reliable packaging.",
                "button": "View Product",
                "slug": "heat-sealing-pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/images_4_mewglu.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92ff3a162b404278e3275",
                "title": "PP Box Color Strap",
                "description": "Colorful PP Straps for secure, organized carton packaging.",
                "button": "View Product",
                "slug": "pp-box-color-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_12_rwbmdc.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9301ea162b404278e3276",
                "title": "Plastic Box Strapping Roll",
                "description": "Durable plastic strapping rolls for secure box packaging.",
                "button": "View Product",
                "slug": "plastic-box-strapping-roll",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791481089/strapworld/products/custom_pet_strap.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            }
          ],
          "faqData": {
            "label": "FAQ",
            "headingParts": [
              {
                "text": "Frequently Asked Questions About ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Manual Box Strapping",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              }
            ],
            "list": [
              {
                "question": "What is Manual Box Strapping?",
                "answer": "Manual Box Strapping is a packaging method used to secure cartons, boxes, and bundled products with plastic strapping applied using hand tools. It is a practical option for businesses that do not require a fully automated strapping system."
              },
              {
                "question": "What is Manual Box Strapping used for?",
                "answer": "Manual Box Strapping is commonly used in warehouses, retail distribution, e-commerce, manufacturing, logistics, and small packaging operations to secure cartons and prepare goods for storage or shipping."
              },
              {
                "question": "What are the benefits of Manual Box Strapping?",
                "answer": "It offers a straightforward packaging process, requires relatively simple equipment, and can be suitable for low-volume or flexible packaging operations. It also helps keep boxes bundled during handling and transportation."
              },
              {
                "question": "Which straps are suitable for manual box strapping?",
                "answer": "Polypropylene (PP) straps are commonly used for general carton bundling. Polyester (PET) straps may be suitable for heavier loads when their strength and specifications meet the application requirements."
              },
              {
                "question": "What tools are required for Manual Box Strapping?",
                "answer": "Depending on the strapping system, tools may include a tensioner, sealer or sealing tool, and compatible seals or buckles. Some systems use other manual joining methods, so tool selection should match the strap and application."
              },
              {
                "question": "Is Manual Box Strapping suitable for heavy packages?",
                "answer": "It can be used for different package weights when the strap, tools, and joining method are appropriately selected. For heavy or high-risk loads, verify the required strap strength and closure performance before use."
              },
              {
                "question": "Can Manual Box Strapping be used without electricity?",
                "answer": "Yes, manual strapping tools generally operate without electricity, making them useful in locations where powered strapping equipment is unavailable or unnecessary."
              },
              {
                "question": "What strap sizes are available for manual box strapping?",
                "answer": "Suitable widths, thicknesses, and roll lengths depend on the strap material and packaging requirements. Confirm the dimensions supported by your manual tools before selecting a roll."
              },
              {
                "question": "How does Manual Box Strapping differ from machine strapping?",
                "answer": "Manual strapping relies on an operator to position, tension, and secure the strap. Machine strapping automates some or all of these steps and may be more efficient for higher-volume packaging operations."
              },
              {
                "question": "How do I choose the right Manual Box Strapping solution?",
                "answer": "Consider carton dimensions, package weight, required holding strength, daily packaging volume, strap material, and the tools available. These factors help determine a suitable strap and joining method."
              },
              {
                "question": "Can Manual Box Strapping materials be customized?",
                "answer": "Depending on availability, strapping options may vary by material, width, thickness, roll length, and color. Contact Strap World to confirm suitable options for your packaging needs."
              },
              {
                "question": "Where can I buy Manual Box Strapping materials from Strap World?",
                "answer": "Strap World Pvt. Ltd. supplies strapping solutions for packaging and industrial applications. Contact the team to discuss suitable strap materials, specifications, and order quantities."
              },
              {
                "question": "How can I request a quote for Manual Box Strapping?",
                "answer": "Share your packaging application, preferred strap material, required dimensions, estimated quantity, and manual tool or sealing method with the Strap World team to request a quotation."
              }
            ]
          },
          "createdAt": "2026-10-09T18:14:00.744Z"
        },
        {
          "_id": "6ac7ee12fdc4585da6bc8dd3",
          "title": "PP Strap",
          "description": "Lightweight PP Straps for secure, economical packaging.",
          "button": "View Product",
          "slug": "pp-strap",
          "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791626565/strapworld/products/pp-strap_pa11z5.jpg",
          "labels": [
            "PP Strap",
            "Polypropylene Strap",
            "PP Strapping",
            "Lightweight",
            "Industrial Packaging",
            "Made in India"
          ],
          "productOverview": {
            "label": "PRODUCT OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Reliable ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "PP Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": " for Secure Packaging",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World PP Straps are manufactured from high-quality polypropylene to provide a lightweight, durable, and cost-effective solution for bundling and securing cartons, boxes, and packaged goods.",
              "Designed for reliable performance in everyday packaging operations, PP Strapping offers good flexibility, easy handling, and compatibility with manual, semi-automatic, and automatic strapping systems, depending on the product specification.",
              "Available in various widths, thicknesses, and colours, our PP Straps can be selected to suit different packaging requirements across warehouses, manufacturing facilities, logistics operations, and distribution centres."
            ],
            "labels": [
              {
                "text": "Lightweight",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Flexible",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Cost Effective",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Versatile",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "slides": [
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485906/strapworld/products/slides/image_11.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485907/strapworld/products/slides/images_4.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485908/strapworld/products/slides/image_13.webp"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg"
              }
            ],
            "button": "Request a Quote"
          },
          "technicalOverview": {
            "label": "TECHNICAL OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "PP Strap ",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": "Technical Specifications",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "Strap World PP Straps are available in different widths and thicknesses to support diverse packaging and bundling requirements.",
              "The following specifications represent standard PP Strap options. Customized dimensions and specifications may be available according to application and customer requirements.",
              "For exact break-load, roll-length and weight requirements, please contact our technical team for product confirmation."
            ],
            "labels": [
              {
                "text": "Lightweight",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Flexible",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Consistent Quality",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Custom Options",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "list": [
              {
                "productCode": "OPP 806",
                "width": "8.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "5.80",
                "averageBreakLoad": "65",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 807",
                "width": "8.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "6.30",
                "averageBreakLoad": "80",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 955",
                "width": "9.00",
                "thickness": "0.55",
                "length": "4000",
                "weight": "12.00",
                "averageBreakLoad": "75",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 906",
                "width": "9.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "6.30",
                "averageBreakLoad": "80",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 907",
                "width": "9.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "7.00",
                "averageBreakLoad": "85",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1006",
                "width": "10.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "6.75",
                "averageBreakLoad": "85",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1106",
                "width": "11.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "7.00",
                "averageBreakLoad": "90",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1107",
                "width": "11.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "8.00",
                "averageBreakLoad": "110",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1255",
                "width": "12.00",
                "thickness": "0.55",
                "length": "2500",
                "weight": "10.00",
                "averageBreakLoad": "120",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1206",
                "width": "12.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "8.00",
                "averageBreakLoad": "110",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1207",
                "width": "12.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "9.00",
                "averageBreakLoad": "120",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1208",
                "width": "12.00",
                "thickness": "0.80",
                "length": "2000",
                "weight": "10.00",
                "averageBreakLoad": "120",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1506",
                "width": "15.00",
                "thickness": "0.60",
                "length": "1000",
                "weight": "6.00",
                "averageBreakLoad": "130",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1507",
                "width": "15.00",
                "thickness": "0.70",
                "length": "1000",
                "weight": "7.00",
                "averageBreakLoad": "150",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1508",
                "width": "15.00",
                "thickness": "0.80",
                "length": "1000",
                "weight": "8.00",
                "averageBreakLoad": "160",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1509",
                "width": "15.00",
                "thickness": "0.90",
                "length": "1000",
                "weight": "9.00",
                "averageBreakLoad": "170",
                "remarks": "Customized"
              }
            ],
            "button": "Request a Quote"
          },
          "relatedProducts": [
            {
              "productId": {
                "_id": "6ac930c6a162b404278e3279",
                "title": "Polyester Pet Strap",
                "description": "High-strength PET Straps for reliable, heavy-duty packaging.",
                "button": "View Product",
                "slug": "polyester-pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/image_15_olh4my.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9308da162b404278e3278",
                "title": "Cotton Bale Strap",
                "description": "Strong, reliable straps for secure cotton bale packaging.",
                "button": "View Product",
                "slug": "cotton-bale-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614647/strapworld/products/image_9_n04flz.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7e7d6fdc4585da6bc8dd2",
                "title": "PET Strap",
                "description": "High-strength PET Straps for secure, heavy-duty packaging.",
                "button": "View Product",
                "slug": "pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg",
                "labels": [
                  "PET Strap",
                  "PET Strapping",
                  "High Strength",
                  "Heavy Duty",
                  "Eco Friendly",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7ee12fdc4585da6bc8dd3",
                "title": "PP Strap",
                "description": "Lightweight PP Straps for secure, economical packaging.",
                "button": "View Product",
                "slug": "pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791626565/strapworld/products/pp-strap_pa11z5.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f28a162b404278e3273",
                "title": "Industrial Packaging Strap",
                "description": "Heavy-duty industrial straps for secure, reliable load packaging.",
                "button": "View Product",
                "slug": "industrial-packaging-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614658/strapworld/products/pet_strap_roll_01_pvenkd.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f69a162b404278e3274",
                "title": "Heat Sealing PP Strapping Roll",
                "description": "Heat-sealable PP Straps for strong, reliable packaging.",
                "button": "View Product",
                "slug": "heat-sealing-pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/images_4_mewglu.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92ff3a162b404278e3275",
                "title": "PP Box Color Strap",
                "description": "Colorful PP Straps for secure, organized carton packaging.",
                "button": "View Product",
                "slug": "pp-box-color-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_12_rwbmdc.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9301ea162b404278e3276",
                "title": "Plastic Box Strapping Roll",
                "description": "Durable plastic strapping rolls for secure box packaging.",
                "button": "View Product",
                "slug": "plastic-box-strapping-roll",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791481089/strapworld/products/custom_pet_strap.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            }
          ],
          "faqData": {
            "label": "FAQ",
            "headingParts": [
              {
                "text": "Frequently Asked Questions About ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "PP Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              }
            ],
            "list": [
              {
                "question": "What is a PP Strap?",
                "answer": "A PP Strap, also known as a polypropylene strap, is a lightweight plastic strapping material used to bundle, secure, and stabilize cartons, boxes, and packaged goods during storage, handling, and transportation."
              },
              {
                "question": "What are PP Straps used for?",
                "answer": "PP Straps are widely used in packaging, warehousing, e-commerce, logistics, printing, textiles, and manufacturing to secure cartons, parcels, and lightweight to medium-weight packages."
              },
              {
                "question": "What are the benefits of PP Straps?",
                "answer": "PP Straps are lightweight, flexible, easy to handle, and suitable for everyday packaging applications. They help keep packages bundled and can be used with compatible manual tools and strapping machines."
              },
              {
                "question": "Are PP Straps suitable for heavy-duty packaging?",
                "answer": "PP Straps are generally used for lightweight to medium-duty packaging. For heavier loads or applications requiring greater strength and tension retention, PET strapping may be a more suitable option."
              },
              {
                "question": "What sizes are available for PP Straps?",
                "answer": "PP Straps are available in different widths, thicknesses, and roll lengths, depending on the supplier's product range. The right size depends on package weight, dimensions, and the intended strapping method."
              },
              {
                "question": "Can PP Straps be used with automatic strapping machines?",
                "answer": "Yes, compatible PP Straps can be used with suitable semi-automatic and automatic strapping machines. Check the machine's supported strap width, thickness, core size, roll dimensions, and sealing method before ordering."
              },
              {
                "question": "What is the difference between PP Strap and PET Strap?",
                "answer": "PP Strap is commonly used for general carton bundling and lighter packaging applications. PET Strap is often selected for heavier loads because it can provide higher strength and better tension retention, depending on the specifications."
              },
              {
                "question": "Are PP Straps available in different colors?",
                "answer": "Yes, PP Straps may be available in different colors depending on the product range and order requirements. Color options can help with package identification, product grouping, and warehouse organization."
              },
              {
                "question": "Can PP Straps be used for manual packaging?",
                "answer": "Yes, PP Straps can be applied using compatible manual tensioners and joining tools. The appropriate tools and closure method depend on the strap dimensions and packaging requirements."
              },
              {
                "question": "Can PP Straps be customized?",
                "answer": "Depending on availability, PP Straps may be supplied in different widths, thicknesses, roll lengths, and colors. Contact Strap World to confirm the options suitable for your application."
              },
              {
                "question": "Where can I buy PP Straps from Strap World?",
                "answer": "Strap World Pvt. Ltd. supplies strapping solutions for packaging and industrial applications. Contact the team to discuss available specifications, application requirements, and order quantities."
              },
              {
                "question": "How can I request a quote for PP Straps?",
                "answer": "To request a quotation, share your required strap dimensions, preferred color, estimated quantity, packaging application, and whether you will use manual tools or a strapping machine."
              }
            ]
          },
          "createdAt": "2026-10-08T19:25:06.586Z"
        },
        {
          "_id": "6ac7e7d6fdc4585da6bc8dd2",
          "title": "PET Strap",
          "description": "High-strength PET Straps for secure, heavy-duty packaging.",
          "button": "View Product",
          "slug": "pet-strap",
          "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg",
          "labels": [
            "PET Strap",
            "PET Strapping",
            "High Strength",
            "Heavy Duty",
            "Eco Friendly",
            "Made in India"
          ],
          "productOverview": {
            "label": "PET STRAP",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Strong, Reliable ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "PET Strapping",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              },
              {
                "text": " for Secure Packaging",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              }
            ],
            "description": [
              "PET Strap, also known as Polyethylene Terephthalate Strap or polyester strapping, is a high-performance packaging solution designed for securing, bundling and stabilizing medium and heavy-duty loads during storage, handling and transportation.",
              "Manufactured by Strap World in India, our PET Straps are engineered to provide high tensile strength, excellent load retention and controlled elongation. They help keep packaged goods firmly secured throughout the supply chain while reducing the risk of shifting, loosening or damage."
            ],
            "labels": [
              {
                "text": "High Tensile Strength",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Low Elongation",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Corrosion Resistant",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Recyclable",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "slides": [
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485906/strapworld/products/slides/image_11.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485907/strapworld/products/slides/images_4.jpg"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485908/strapworld/products/slides/image_13.webp"
              },
              {
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg"
              }
            ],
            "button": "Request a Quote"
          },
          "technicalOverview": {
            "label": "TECHNICAL OVERVIEW",
            "aspectRatio": "16/14",
            "headingParts": [
              {
                "text": "Consistent Performance for ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "Industrial Packaging",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              }
            ],
            "description": [
              "Strap World PET Straps are manufactured with a focus on consistent dimensions, reliable tensile performance and dependable load retention.",
              "PET strapping provides strong resistance to tension and is designed to maintain package stability during transportation, loading, unloading and storage.",
              "Compared with conventional steel strapping, PET Strap is lightweight, corrosion resistant and easier to handle. Its flexibility also helps reduce the risk of sharp-edge injuries during manual packaging operations.",
              "The appropriate PET Strap specification depends on the load weight, package dimensions, packaging method and required break load. Strap World can provide suitable PET Strapping specifications according to individual application requirements."
            ],
            "labels": [
              {
                "text": "Consistent Quality",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Excellent Load Retention",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              },
              {
                "text": "Weather Resistant",
                "color": "#2E9B4F",
                "bgColor": "#EAF7EE"
              }
            ],
            "list": [
              {
                "productCode": "OPP 806",
                "width": "8.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "5.80",
                "averageBreakLoad": "65",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 807",
                "width": "8.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "6.30",
                "averageBreakLoad": "80",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 955",
                "width": "9.00",
                "thickness": "0.55",
                "length": "4000",
                "weight": "12.00",
                "averageBreakLoad": "75",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 906",
                "width": "9.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "6.30",
                "averageBreakLoad": "80",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 907",
                "width": "9.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "7.00",
                "averageBreakLoad": "85",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1006",
                "width": "10.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "6.75",
                "averageBreakLoad": "85",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1106",
                "width": "11.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "7.00",
                "averageBreakLoad": "90",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1107",
                "width": "11.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "8.00",
                "averageBreakLoad": "110",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1255",
                "width": "12.00",
                "thickness": "0.55",
                "length": "2500",
                "weight": "10.00",
                "averageBreakLoad": "120",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1206",
                "width": "12.00",
                "thickness": "0.60",
                "length": "2000",
                "weight": "8.00",
                "averageBreakLoad": "110",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1207",
                "width": "12.00",
                "thickness": "0.70",
                "length": "2000",
                "weight": "9.00",
                "averageBreakLoad": "120",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1208",
                "width": "12.00",
                "thickness": "0.80",
                "length": "2000",
                "weight": "10.00",
                "averageBreakLoad": "120",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1506",
                "width": "15.00",
                "thickness": "0.60",
                "length": "1000",
                "weight": "6.00",
                "averageBreakLoad": "130",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1507",
                "width": "15.00",
                "thickness": "0.70",
                "length": "1000",
                "weight": "7.00",
                "averageBreakLoad": "150",
                "remarks": "Standard"
              },
              {
                "productCode": "OPP 1508",
                "width": "15.00",
                "thickness": "0.80",
                "length": "1000",
                "weight": "8.00",
                "averageBreakLoad": "160",
                "remarks": "Customized"
              },
              {
                "productCode": "OPP 1509",
                "width": "15.00",
                "thickness": "0.90",
                "length": "1000",
                "weight": "9.00",
                "averageBreakLoad": "170",
                "remarks": "Customized"
              }
            ],
            "button": "View Specifications"
          },
          "relatedProducts": [
            {
              "productId": {
                "_id": "6ac930c6a162b404278e3279",
                "title": "Polyester Pet Strap",
                "description": "High-strength PET Straps for reliable, heavy-duty packaging.",
                "button": "View Product",
                "slug": "polyester-pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/image_15_olh4my.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9308da162b404278e3278",
                "title": "Cotton Bale Strap",
                "description": "Strong, reliable straps for secure cotton bale packaging.",
                "button": "View Product",
                "slug": "cotton-bale-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614647/strapworld/products/image_9_n04flz.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7e7d6fdc4585da6bc8dd2",
                "title": "PET Strap",
                "description": "High-strength PET Straps for secure, heavy-duty packaging.",
                "button": "View Product",
                "slug": "pet-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791485909/strapworld/products/slides/image_3.jpg",
                "labels": [
                  "PET Strap",
                  "PET Strapping",
                  "High Strength",
                  "Heavy Duty",
                  "Eco Friendly",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac7ee12fdc4585da6bc8dd3",
                "title": "PP Strap",
                "description": "Lightweight PP Straps for secure, economical packaging.",
                "button": "View Product",
                "slug": "pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791626565/strapworld/products/pp-strap_pa11z5.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f28a162b404278e3273",
                "title": "Industrial Packaging Strap",
                "description": "Heavy-duty industrial straps for secure, reliable load packaging.",
                "button": "View Product",
                "slug": "industrial-packaging-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614658/strapworld/products/pet_strap_roll_01_pvenkd.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92f69a162b404278e3274",
                "title": "Heat Sealing PP Strapping Roll",
                "description": "Heat-sealable PP Straps for strong, reliable packaging.",
                "button": "View Product",
                "slug": "heat-sealing-pp-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614653/strapworld/products/images_4_mewglu.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac92ff3a162b404278e3275",
                "title": "PP Box Color Strap",
                "description": "Colorful PP Straps for secure, organized carton packaging.",
                "button": "View Product",
                "slug": "pp-box-color-strap",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791614648/strapworld/products/image_12_rwbmdc.webp",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            },
            {
              "productId": {
                "_id": "6ac9301ea162b404278e3276",
                "title": "Plastic Box Strapping Roll",
                "description": "Durable plastic strapping rolls for secure box packaging.",
                "button": "View Product",
                "slug": "plastic-box-strapping-roll",
                "image": "https://res.cloudinary.com/dzxajcpnm/image/upload/v1791481089/strapworld/products/custom_pet_strap.jpg",
                "labels": [
                  "PP Strap",
                  "Polypropylene Strap",
                  "PP Strapping",
                  "Lightweight",
                  "Industrial Packaging",
                  "Made in India"
                ]
              }
            }
          ],
          "faqData": {
            "label": "FAQ",
            "headingParts": [
              {
                "text": "Frequently Asked Questions About ",
                "color": "#111111",
                "style": "normal",
                "weight": "500"
              },
              {
                "text": "PET Strap",
                "color": "#2E9B4F",
                "style": "normal",
                "weight": "700"
              }
            ],
            "list": [
              {
                "question": "What is a PET Strap?",
                "answer": "A PET Strap, also known as a polyester strap, is a strong plastic strapping material made from polyethylene terephthalate. It is used to secure, bundle, and stabilize packaged goods, palletized loads, and industrial products during storage and transportation."
              },
              {
                "question": "What are PET Straps used for?",
                "answer": "PET Straps are commonly used in manufacturing, logistics, warehousing, construction materials, textiles, and packaging industries to secure cartons, pallets, compressed bales, and other heavy or bulky products."
              },
              {
                "question": "What are the benefits of PET Straps?",
                "answer": "PET Straps offer high tensile strength, good tension retention, and resistance to rust. They are a practical alternative to steel strapping in many suitable applications, depending on the load and required performance."
              },
              {
                "question": "Are PET Straps suitable for heavy-duty packaging?",
                "answer": "Yes, PET Straps are commonly used for demanding packaging applications. The appropriate width, thickness, and strength should be selected according to the load weight, dimensions, handling conditions, and transportation requirements."
              },
              {
                "question": "What is the difference between PET Strap and PP Strap?",
                "answer": "PP Strap is generally used for lightweight to medium-duty carton bundling. PET Strap is often chosen for heavier loads because it typically offers greater tensile strength and better tension retention. The best option depends on the specific application."
              },
              {
                "question": "What sizes are available for PET Straps?",
                "answer": "PET Straps are available in different widths, thicknesses, roll lengths, and strength specifications. Available options depend on the product range and should be matched to the packaging application and strapping equipment."
              },
              {
                "question": "Can PET Straps be used with automatic strapping machines?",
                "answer": "Yes, compatible PET Straps can be used with suitable automatic or semi-automatic strapping machines. Confirm the machine's supported strap material, dimensions, core size, roll specifications, and joining method before ordering."
              },
              {
                "question": "Can PET Straps replace steel strapping?",
                "answer": "PET Straps can replace steel strapping in many applications, particularly where strong plastic strapping and good tension retention are suitable. The load requirements, edge conditions, transport environment, and safety standards should be assessed before switching."
              },
              {
                "question": "Are PET Straps suitable for outdoor storage?",
                "answer": "PET Straps can be used in some outdoor applications, but suitability depends on exposure duration, sunlight, weather, and load requirements. Discuss the intended storage conditions with your supplier when selecting a strap."
              },
              {
                "question": "Can PET Straps be customized?",
                "answer": "Depending on availability, PET Straps may be supplied in different widths, thicknesses, roll lengths, colors, and strength specifications. Contact Strap World to confirm the options available for your requirements."
              },
              {
                "question": "Where can I buy PET Straps from Strap World?",
                "answer": "Strap World Pvt. Ltd. supplies PET and polyester strapping solutions for packaging and industrial applications. Contact the team to discuss product specifications, application requirements, and order quantities."
              },
              {
                "question": "How can I request a quote for PET Straps?",
                "answer": "To request a quotation, share your required strap width and thickness, estimated quantity, application, load details, and strapping machine requirements, if applicable, with the Strap World team."
              }
            ]
          },
          "createdAt": "2026-10-08T18:58:30.266Z"
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
      href: "/pet-strap-manufacturing",

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
          href: "/blogs/building-modern-web-applications-that-scale",
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
          href: "/blogs/why-great-ui-ux-design-matters",
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
          href: "/blogs/from-idea-to-product",
        },
      ],
    },
    "faqData": {
      "label": "FAQ",
      "headingParts": [
        {
          "text": "Frequently Asked Questions About ",
          "color": "#111111",
          "style": "normal",
          "weight": "500"
        },
        {
          "text": "Strap World",
          "color": "#2E9B4F",
          "style": "normal",
          "weight": "700"
        }
      ],
      "list": [
        {
          "question": "What products does Strap World manufacture?",
          "answer": "Strap World manufactures PET straps, PP straps, polyester strapping, cotton bale straps, and other packaging strapping solutions for industrial and commercial applications."
        },
        {
          "question": "What is the difference between PET strap and PP strap?",
          "answer": "PET straps offer high strength for heavy-duty packaging, while PP straps are lightweight and suitable for cartons, boxes, and general packaging."
        },
        {
          "question": "Which industries use Strap World's products?",
          "answer": "Our strapping products serve packaging, textile, automotive, logistics, manufacturing, and other industries requiring reliable bundling and load-securing solutions."
        },
        {
          "question": "Can I order strapping products in bulk?",
          "answer": "Yes, Strap World caters to bulk requirements for businesses, distributors, manufacturers, and industrial customers. Contact our team to discuss your quantity and product specifications."
        },
        {
          "question": "Does Strap World supply products internationally?",
          "answer": "Strap World serves packaging requirements for domestic and international markets. Contact our team to discuss export availability, shipping, and destination-specific requirements."
        },
        {
          "question": "How do I choose the right strapping product?",
          "answer": "The right strap depends on your packaging application, load weight, strapping equipment, and required strength. Our team can help you select a suitable solution."
        },
        {
          "question": "How can I request a quotation?",
          "answer": "You can contact Strap World through our website inquiry form or contact details. Share your product requirements, quantity, and delivery location to request a quotation."
        },
        {
          "question": "Why choose Strap World for packaging straps?",
          "answer": "Strap World focuses on dependable strapping solutions, product quality, varied packaging applications, and customer support to meet diverse industrial packaging needs."
        }
      ]
    },
    "finalCTA": {
      "isVariant": "01",
      "label": "Start a conversation",
      "headingParts": [
        {
          "text": "Request a Quote for PET Strap",
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

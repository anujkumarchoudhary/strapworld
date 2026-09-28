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
      label: "INDUSTRIAL STRAPPING · MADE FOR GLOBAL SUPPLY CHAINS",

      headingParts: [
        {
          text: "Reliable Strapping. Engineered to move goods farther.",
          color: "#FFFFFF",
          size:"65px",
          weight: "600",
        },
      ],

      description:
        "Consistent PET and PP strapping, tools and packaging systems built for secure loads, efficient lines and export-ready operations.",

      button: "Get a Quote",
      button2: "See Projects",
      specifications:[
        {value:"6", name:"Core product families"},
         {value:"3-stage", name:"Quality-control workflow"},
          {value:"B2B", name:"Bulk & repeat supply"},
           {value:"Global", name:"Export documentation support"}
      ]
    },
    ourProducts: {
      label: "Product system",

      headingParts: [
        {
          text: "Strapping products built as one dependable system.",
          color: "#111118",
          style: "normal",
          weight: "600",
        },
      ],

      description:
        "Choose the material, tool and automation level that fits your load profile, throughput and handling conditions.",

      list: [
        {
          title: "PET Straps",
          description:
            "High-retention strapping for demanding pallet and unit loads.",
          href: "/services/web-development",
          image: "/images/service/service_img_1.png",
          labels:["High tensile", "Low relaxation"]
        },
        {
          title: "PP Straps",
          description:
            "Lightweight, economical strapping for cartons and bundling.",
          href: "/services/software-development",
          image: "/images/service/service_img_2.png",
          labels:["Flexible ", "Machine compatible"]
        },
        {
          title: "Polyester Straps",
          description:
            "Stable tension and handling performance across transit cycles.",
          href: "/services/mobile-applications",
          image: "/images/service/service_img_3.png",
          labels:["Durable", "Weather resistant"]
        },
        {
          title: "Packing Straps",
          description:
            "Versatile grades for everyday securing, baling and logistics.",
          href: "/services/ui-ux-design",
          image: "/images/service/service_img_4.png",
          labels:["Custom width", "Color options"]
        },
        {
          title: "Strapping Tools",
          description:
            "Manual and battery-operated tools for reliable joining.",
          href: "/services/api-backend",
          image: "/images/service/service_img_5.png",
          labels:["Tension", "Seal", "Cut"]
        },
        {
          title: "Packaging Machines",
          description:
            "Semi-automatic and automatic systems for line efficiency.",
          href: "/services/cloud-devops",
          image: "/images/service/service_img_6.png",
          labels:["Tabletop", "Arch", "Integrated"]
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
          text: "Specify with confidence. Run with consistency.",
          color: "#ffffff",
          style: "normal",
          weight: "600",
        },
      ],
      description:
        "A practical product architecture designed around load security, repeatable feed and dependable sealing across manual and automated operations.",

      listOne: [
        {
          title: "Controlled tension",
          description:
            "Grades selected around load retention, elongation and recovery needs.",
          href: "/services/web-development",
          image: "/images/service/icon_1.svg",
          labels:["High tensile", "Low relaxation"]
        },
        {
          title: "Consistent profile",
          description:
            "Attention to width, thickness, winding and edge quality for reliable feed.",
          href: "/services/software-development",
          image: "/images/service/icon_2.svg",
          labels:["Flexible ", "Machine compatible"]
        },
        {
          title: "Secure joining",
          description:
            "Surface options engineered for friction-weld, seal and buckle applications.",
          href: "/services/mobile-applications",
          image: "/images/service/icon_3.svg",
          labels:["Durable", "Weather resistant"]
        },
        {
          title: "Transit resilience",
          description:
            "Material options for outdoor exposure, storage and long-haul handling.",
          href: "/services/ui-ux-design",
          image: "/images/service/icon_4.svg",
          labels:["Custom width", "Color options"]
        }
      ],
      listTwo: [
        {
          label:"Surface",
          title: "Embossed / smooth",
          description:
            "Selected for grip, feed path and joining method.",
          href: "/services/web-development",
          image: "/images/service/icon_1.svg",
          labels:["High tensile", "Low relaxation"]
        },
        {
          label:"Operation",
          title: "Manual to automatic",
          description:
            "Compatible grades for hand tools, table systems and production lines.",
          href: "/services/software-development",
          image: "/images/service/icon_2.svg",
          labels:["Flexible ", "Machine compatible"]
        },
        {
          label:"Configuration",
          title: "Coil & pallet supply",
          description:
            "Core, winding and packing planned around handling and volume.",
          href: "/services/mobile-applications",
          image: "/images/service/icon_3.svg",
          labels:["Durable", "Weather resistant"]
        },
        {
          label:"Customization",
          title: "Width, color, print",
          description:
            "Application-led options subject to technical and order review.",
          href: "/services/ui-ux-design",
          image: "/images/service/icon_4.svg",
          labels:["Custom width", "Color options"]
        }
      ],
    },
    caseStudies: {
      label: "Our Work",

      headingParts: [
        {
          text: "Turning ideas into digital products",
          color: "#FFFFFF",
          style: "normal",
          weight: "600",
        },
      ],
      list: [
        {
          title: "Web Development",
          description:
            "Modern, responsive and high-performance web applications.",
          href: "/services/web-development",
          icon: "Code2",
        },
        {
          title: "Software Development",
          description:
            "Scalable, secure and custom software built for your business.",
          href: "/services/software-development",
          icon: "Layers3",
        },
        {
          title: "Mobile Applications",
          description: "Powerful mobile apps with great user experiences.",
          href: "/services/mobile-applications",
          icon: "Smartphone",
        },
        {
          title: "UI/UX Design",
          description:
            "Beautiful, intuitive and user-focused digital experiences.",
          href: "/services/ui-ux-design",
          icon: "Palette",
        },
        {
          title: "API & Backend",
          description: "Robust APIs and backend systems built for performance.",
          href: "/services/api-backend",
          icon: "Boxes",
        },
        {
          title: "Cloud & DevOps",
          description:
            "Reliable infrastructure, deployment and cloud solutions.",
          href: "/services/cloud-devops",
          icon: "Cloud",
        },
      ],
    },
    ourClients: {
      heading: "Our Clients",
      data: [client_01, client_02, client_03, client_04, client_05, client_06],
    },
    aboutUs: {
      label: "About Us",
      headingParts: [
        {
          text: "Welcome to our custom software development service For Any Needs",
          color: "#001845",
          weight: "700",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    process: {
      label: "Our Process",
      headingParts: [
        {
          text: "We don't just build.",
          color: "#ffffff",
          style: "normal",
          weight: "600",
        },
        {
          text: " We build with purpose.",
          style: "normal",
          weight: "600",
          gradient: "linear-gradient(90deg, #A855F7, #3B82F6)",

        },
      ],

      description:
        "A focused process that turns ideas into meaningful digital products — from the first conversation to continuous growth.",

      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "We start by understanding your business, your audience, and the opportunity behind your idea.",
          tag: "CLARITY",
        },
        {
          number: "02",
          title: "Define",
          description:
            "We turn ideas into a focused direction — defining the experience, structure, and technology required.",
          tag: "STRATEGY",
        },
        {
          number: "03",
          title: "Create",
          description:
            "We design and build the product with precision, combining thoughtful UX with reliable technology.",
          tag: "EXECUTION",
        },
        {
          number: "04",
          title: "Evolve",
          description:
            "We launch, learn, refine, and continue improving the product as your business moves forward.",
          tag: "GROWTH",
        },
      ],

      result: {
        label: "The Result",
        text: "A digital product that doesn't just look good —",
        highlight: " it works for your business.",
      },
    },
    team: {
      label: "Meet The Team",

      headingParts: [
        {
          text: "Small team.",
          color: "#111118",
          weight: "700",
        },
        {
          text: " Big ideas.",
          color: "#111118",
          weight: "700",
          gradient:
            "linear-gradient(90deg, #A855F7 0%, #7C3AED 50%, #2563EB 100%)",
        },
      ],

      description:
        "A focused team of designers, developers, and problem-solvers working together to turn ambitious ideas into meaningful digital experiences.",

      members: [
        {
          name: "Anuj Choudhary",
          role: "Founder & CEO",
          image: "/images/author/softqivo_ceo.png",
          linkedin: "FaLinkedinIn",
          instagram: "BsInstagram",
          twitter: "https://x.com/softqivo",
        },
        {
          name: "Sherry Lin",
          role: "UI/UX Designer",
          image: "/images/team/team_1.png",
          linkedin: "FaLinkedinIn",
          instagram: "BsInstagram",
          twitter: "https://x.com/softqivo",
        },
        {
          name: "John Smith",
          role: "Lead Developer",
          image: "/images/team/team_2.png",
          linkedin: "FaLinkedinIn",
          instagram: "BsInstagram",
          twitter: "https://x.com/softqivo",
        },
        {
          name: "Team Member",
          role: "Sales & Marketing",
          image: "/images/team/team_3.png",
          linkedin: "FaLinkedinIn",
          instagram: "BsInstagram",
          twitter: "https://x.com/softqivo",
        },
      ],
    },

    blogs: {
      label: "Our Insights",

      headingParts: [
        {
          text: "Ideas, insights & digital thinking.",
          color: "#000000",
          weight: "700",
        },
      ],

      list: [
        {
          img: "/images/blogs/blog_01.png",
          category: "Web Development",
          title:
            "Building Modern Web Applications That Scale With Your Business",
          excerpt:
            "Discover how the right technology, architecture, and development approach can help businesses build faster, more secure, and scalable web applications.",
          date: "Aug 28, 2026",
          readTime: "6 min read",
          href: "/blog/building-modern-web-applications-that-scale",
        },

        {
          img: "/images/blogs/blog_02.png",
          category: "UI/UX Design",
          title:
            "Why Great UI/UX Design Is More Than Just a Beautiful Interface",
          excerpt:
            "Learn how thoughtful user experiences, intuitive interactions, and purposeful design can create digital products people enjoy using and trust.",
          date: "Aug 21, 2026",
          readTime: "5 min read",
          href: "/blog/why-great-ui-ux-design-matters",
        },

        {
          img: "/images/blogs/blog_03.png",
          category: "Software Development",
          title:
            "From Idea to Product: Building Software That Creates Real Business Value",
          excerpt:
            "Explore the key decisions behind successful software products, from validating an idea and choosing technology to building for long-term growth.",
          date: "Aug 14, 2026",
          readTime: "7 min read",
          href: "/blog/from-idea-to-product",
        },
      ],
    },
    blogs2: {
      label: "Our Insights",

      headingParts: [
        {
          text: "Ideas, insights & digital thinking.",
          color: "#000000",
          weight: "700",
        },
      ],

      list: [
        {
          img: "/images/blogs/blog_01.png",
          category: "Web Development",
          title:
            "Building Modern Web Applications That Scale With Your Business",
          excerpt:
            "Discover how the right technology, architecture, and development approach can help businesses build faster, more secure, and scalable web applications.",
          date: "Aug 28, 2026",
          readTime: "6 min read",
          href: "/blog/building-modern-web-applications-that-scale",
        },

        {
          img: "/images/blogs/blog_02.png",
          category: "UI/UX Design",
          title:
            "Why Great UI/UX Design Is More Than Just a Beautiful Interface",
          excerpt:
            "Learn how thoughtful user experiences, intuitive interactions, and purposeful design can create digital products people enjoy using and trust.",
          date: "Aug 21, 2026",
          readTime: "5 min read",
          href: "/blog/why-great-ui-ux-design-matters",
        },

        {
          img: "/images/blogs/blog_03.png",
          category: "Software Development",
          title:
            "From Idea to Product: Building Software That Creates Real Business Value",
          excerpt:
            "Explore the key decisions behind successful software products, from validating an idea and choosing technology to building for long-term growth.",
          date: "Aug 14, 2026",
          readTime: "7 min read",
          href: "/blog/from-idea-to-product",
        },

        {
          img: "/images/blogs/blog_03.png",
          category: "Mobile Development",
          title:
            "How to Build Mobile Apps People Actually Want to Use",
          excerpt:
            "Explore the principles behind useful mobile applications, from user-focused experiences and performance to reliable architecture and long-term maintenance.",
          date: "Aug 7, 2026",
          readTime: "6 min read",
          href: "/blog/how-to-build-mobile-apps-people-use",
        },

        {
          img: "/images/blogs/blog_02.png",
          category: "Backend Development",
          title:
            "Why a Strong Backend Is the Foundation of a Reliable Digital Product",
          excerpt:
            "Understand how APIs, databases, authentication, and backend architecture work together to create secure and dependable digital products.",
          date: "Jul 31, 2026",
          readTime: "7 min read",
          href: "/blog/strong-backend-reliable-digital-products",
        },

        {
          img: "/images/blogs/blog_01.png",
          category: "API Development",
          title:
            "Designing APIs That Are Ready for Growth and Integration",
          excerpt:
            "Learn how thoughtful API architecture, consistent standards, security, and documentation can make applications easier to integrate and scale.",
          date: "Jul 24, 2026",
          readTime: "6 min read",
          href: "/blog/designing-apis-for-growth-and-integration",
        },

        {
          img: "/images/blogs/blog_01.png",
          category: "Cloud & DevOps",
          title:
            "How Cloud Infrastructure Helps Modern Businesses Scale Faster",
          excerpt:
            "Discover how cloud infrastructure, automation, monitoring, and deployment practices can improve reliability while supporting business growth.",
          date: "Jul 17, 2026",
          readTime: "8 min read",
          href: "/blog/cloud-infrastructure-for-business-growth",
        },

        {
          img: "/images/blogs/blog_02.png",
          category: "Web Development",
          title:
            "Choosing the Right Technology Stack for Your Web Project",
          excerpt:
            "A practical look at the factors businesses should consider when selecting frameworks, languages, databases, and infrastructure for a new web product.",
          date: "Jul 10, 2026",
          readTime: "7 min read",
          href: "/blog/choosing-the-right-technology-stack",
        },

        {
          img: "/images/blogs/blog_03.png",
          category: "UI/UX Design",
          title:
            "Designing Digital Experiences That Turn Visitors Into Customers",
          excerpt:
            "Learn how research, information architecture, visual hierarchy, and clear interactions can create experiences that guide users toward meaningful actions.",
          date: "Jul 3, 2026",
          readTime: "6 min read",
          href: "/blog/designing-experiences-that-convert-visitors",
        },

        {
          img: "/images/blogs/blog_10.png",
          category: "Software Development",
          title:
            "MVP Development: Turning a Business Idea Into a Working Product",
          excerpt:
            "Learn how an MVP can help businesses validate product ideas, understand users, reduce unnecessary development, and build a foundation for future growth.",
          date: "Jun 26, 2026",
          readTime: "6 min read",
          href: "/blog/mvp-development-business-ideas",
        },

        {
          img: "/images/blogs/blog_11.png",
          category: "Web Performance",
          title:
            "Why Website Performance Matters for Business Growth",
          excerpt:
            "Explore how loading speed, optimized assets, efficient code, and responsive experiences can improve usability and create better digital experiences.",
          date: "Jun 19, 2026",
          readTime: "5 min read",
          href: "/blog/why-website-performance-matters",
        },

        {
          img: "/images/blogs/blog_12.png",
          category: "Cybersecurity",
          title:
            "Essential Security Practices for Modern Web Applications",
          excerpt:
            "Understand the fundamental security practices businesses can use to protect applications, user data, APIs, authentication systems, and infrastructure.",
          date: "Jun 12, 2026",
          readTime: "8 min read",
          href: "/blog/web-application-security-practices",
        },

        {
          img: "/images/blogs/blog_13.png",
          category: "Product Development",
          title:
            "What Makes a Digital Product Ready for Long-Term Growth",
          excerpt:
            "Explore the technical and product decisions that help digital solutions remain maintainable, adaptable, reliable, and ready for changing business needs.",
          date: "Jun 5, 2026",
          readTime: "7 min read",
          href: "/blog/digital-product-long-term-growth",
        },

        {
          img: "/images/blogs/blog_14.png",
          category: "Mobile Development",
          title:
            "Native vs Cross-Platform App Development: What Businesses Should Know",
          excerpt:
            "Compare the key considerations behind native and cross-platform mobile development, including performance, development speed, maintenance, and scalability.",
          date: "May 29, 2026",
          readTime: "8 min read",
          href: "/blog/native-vs-cross-platform-app-development",
        },

        {
          img: "/images/blogs/blog_15.png",
          category: "Cloud & DevOps",
          title:
            "Continuous Deployment: Building a Faster Software Delivery Process",
          excerpt:
            "Learn how automated testing, continuous integration, and deployment workflows can help development teams release software more consistently and efficiently.",
          date: "May 22, 2026",
          readTime: "7 min read",
          href: "/blog/continuous-deployment-software-delivery",
        },

        {
          img: "/images/blogs/blog_16.png",
          category: "UI/UX Design",
          title:
            "The Role of User Research in Creating Better Digital Products",
          excerpt:
            "Discover how understanding user needs, behaviors, and challenges can help teams make better design decisions and create more useful digital experiences.",
          date: "May 15, 2026",
          readTime: "6 min read",
          href: "/blog/user-research-better-digital-products",
        },

        {
          img: "/images/blogs/blog_17.png",
          category: "Software Development",
          title:
            "Custom Software vs Off-the-Shelf Solutions: What Businesses Need to Consider",
          excerpt:
            "Explore the differences between custom software and ready-made solutions and the factors businesses should consider before making a technology investment.",
          date: "May 8, 2026",
          readTime: "7 min read",
          href: "/blog/custom-software-vs-off-the-shelf",
        },

        {
          img: "/images/blogs/blog_18.png",
          category: "Database Development",
          title:
            "Building a Database Architecture That Can Grow With Your Application",
          excerpt:
            "Learn how thoughtful database design, indexing, data relationships, backups, and scalability planning can support reliable application growth.",
          date: "May 1, 2026",
          readTime: "8 min read",
          href: "/blog/database-architecture-for-scalable-applications",
        },

        {
          img: "/images/blogs/blog_19.png",
          category: "Digital Transformation",
          title:
            "How Businesses Can Turn Digital Ideas Into Scalable Solutions",
          excerpt:
            "Discover a practical approach to transforming business ideas into digital products through strategy, design, development, testing, and continuous improvement.",
          date: "Apr 24, 2026",
          readTime: "7 min read",
          href: "/blog/digital-ideas-into-scalable-solutions",
        },

        {
          img: "/images/blogs/blog_20.png",
          category: "Technology",
          title:
            "Technology Decisions That Can Shape the Future of Your Digital Product",
          excerpt:
            "Explore the technology, architecture, design, and development decisions that can influence how effectively a digital product evolves over time.",
          date: "Apr 17, 2026",
          readTime: "6 min read",
          href: "/blog/technology-decisions-for-digital-products",
        },
      ],
    },
    technologes: {
      label: "Technology",

      headingParts: [
        {
          text: "Built with technology that moves your business forward.",
          color: "#ffffff",
          weight: "600",
        },
      ],

      description:
        "We use modern, reliable technologies to create fast, scalable, secure, and maintainable digital products.",

      technologies: [
        {
          name: "React",
          category: "Frontend",
          icon: "/images/technology/icon_1.webp",
          description: "Flexible interfaces built for modern web experiences.",
        },
        {
          name: "Next.js",
          category: "Framework",
          icon: "/images/technology/icon_2.png",
          description:
            "High-performance applications with powerful full-stack capabilities.",
        },
        {
          name: "TypeScript",
          category: "Language",
          icon: "/images/technology/icon_4.svg",
          description:
            "Reliable and maintainable code for scalable applications.",
        },
        {
          name: "Node.js",
          category: "Backend",
          icon: "/images/technology/icon_3.png",
          description: "Fast and scalable backend systems and APIs.",
        },
        {
          name: "MongoDB",
          category: "Database",
          icon: "/images/technology/icon_5.png",
          description:
            "Flexible data architecture built for growing applications.",
        },
        {
          name: "PostgreSQL",
          category: "Database",
          icon: "/images/technology/icon_7.webp",
          description:
            "Powerful relational data solutions for complex systems.",
        },
        {
          name: "AWS",
          category: "Cloud",
          icon: "/images/technology/icon_6.webp",
          description:
            "Secure and scalable cloud infrastructure for production.",
        },
        {
          name: "Docker",
          category: "DevOps",
          icon: "/images/technology/icon_9.png",
          description:
            "Consistent and reliable application deployment environments.",
        },
        {
          name: "Figma",
          category: "Design",
          icon: "/images/technology/icon_8.png",
          description:
            "Collaborative product design and prototyping workflows.",
        },
        // {
        //   name: "Git",
        //   category: "Development",
        //   icon: "/images/technology/icon_2.png",
        //   description:
        //     "Reliable version control for collaborative development.",
        // },
        // {
        //   name: "REST API",
        //   category: "Backend",
        //   icon: "/images/technology/icon_2.png",
        //   description:
        //     "Clean and scalable APIs connecting products and services.",
        // },
        // {
        //   name: "Cloudflare",
        //   category: "Infrastructure",
        //   icon: "/images/technology/icon_2.png",
        //   description:
        //     "Performance, security, and reliable edge infrastructure.",
        // },
      ],
    },

    feedbacks: {
      label: "Client Feedback",

      headingParts: [
        {
          text: "What our clients say.",
          color: "#000000",
          weight: "700",
        },
      ],

      data: [
        {
          img: "/images/review/review_1.jpg",

          message:
            "SoftQivo understood our vision quickly and turned our ideas into a polished digital product that matched our goals.",

          name: "Arjun Mehta",

          comment:
            "The team was responsive, professional, and technically strong throughout the project. Their attention to detail and willingness to understand our requirements made the development process smooth.",

          designation: "Founder & CEO, Nexora",
        },

        {
          img: "/images/review/review_2.webp",

          message:
            "Working with SoftQivo made our development process clear, collaborative, and straightforward from design through delivery.",

          name: "Sarah Williams",

          comment:
            "The team handled design, development, and delivery with care. They listened to our feedback, communicated clearly, and consistently worked toward practical solutions for our product.",

          designation: "Director, BrightLabs",
        },

        {
          img: "/images/review/review_3.jpg",

          message:
            "SoftQivo helped us build a modern, scalable solution that gave our business a stronger technology foundation.",

          name: "Rahul Sharma",

          comment:
            "Their combination of design thinking and technical expertise stood out throughout the project. The final product is fast, intuitive, and aligned with the way our business operates.",

          designation: "Co-Founder, ElevateX",
        },
      ],
    },

    finalCta: {
      label: "Let's Build",

      headingParts: [
        {
          text: "Have an idea worth building?",
          color: "#FFFFFF",
          weight: "700",
        },
      ],

      description:
        "Tell us what you're building. We'll help turn your idea into a thoughtful, scalable digital product designed for real business growth.",

      buttonText: "Start a Project",

      buttonHref: "/contact",

      image: "/images/cta/final-cta.jpg",

      imageAlt: "Digital product development at SoftQivo",
    },
  },

  about: {
    banner: {
      label: "About SoftQivo",
      headingParts: [
        {
          text: "Building digital products",
          color: "#000000",
          font: "playfair",
        },
        {
          text: " that help businesses grow.",
          gradient: "linear-gradient(90deg, #A855F7, #3B82F6)",
        },
      ],
    },

    description:
      "SoftQivo is a software development and digital product company helping startups, businesses, and entrepreneurs turn ideas into reliable digital products. We design and develop modern websites, web applications, custom software, mobile applications, APIs, and scalable cloud solutions with a focus on performance, usability, and long-term growth.",

    button: "Book a Consultation",

    blogs: {
      label: "Our Insights",

      headingParts: [
        {
          text: "Ideas, insights & digital thinking.",
          color: "#000000",
          weight: "700",
        },
      ],

      list: [
        {
          img: "/images/blogs/blog_01.png",
          category: "Web Development",
          title:
            "Building Modern Web Applications That Scale With Your Business",
          excerpt:
            "Explore how thoughtful architecture, modern technologies, performance optimization, and scalable development practices help businesses build reliable web applications for long-term growth.",
          date: "Sep 26, 2026",
          readTime: "8 min read",
          href: "/blog/building-modern-web-applications-that-scale",
        },

        {
          img: "/images/blogs/blog_02.png",
          category: "UI/UX Design",
          title:
            "Why Great UI/UX Design Is More Than Just a Beautiful Interface",
          excerpt:
            "Discover how user research, intuitive navigation, accessibility, and purposeful interactions can turn a visually appealing interface into a digital product people actually enjoy using.",
          date: "Sep 20, 2026",
          readTime: "7 min read",
          href: "/blog/why-great-ui-ux-design-matters",
        },

        {
          img: "/images/blogs/blog_03.png",
          category: "Software Development",
          title:
            "From Idea to Product: Building Software That Creates Real Business Value",
          excerpt:
            "Learn how product strategy, user experience, technology choices, and continuous improvement can transform an early idea into a reliable software product built for real business needs.",
          date: "Sep 15, 2026",
          readTime: "8 min read",
          href: "/blog/from-idea-to-product",
        },
      ],
    },
  },

  contact: {
    label: "LET'S CONNECT",
    headingParts: [
      {
        text: "Let’s Build  ",
        color: "#001845",
        size: "clamp(24px, 4vw, 46px)",
        weight: "700",
      },
      {
        text: "Together.",
        gradient: "linear-gradient(90deg, #A855F7, #7C3AED, #2563EB)",
        size: "clamp(24px, 4vw, 46px)",
        weight: "700",
      },
    ],
    description:
      "Have an idea, a project, or a business challenge in mind? Tell us what you’re looking to build, and our team will get back to you with the right direction.",
    button: "Send Message",
    data: [
      {
        icon: <FaMapLocationDot size={40} className="text-[#001845]" />,
        title: "Head Office",
        description:
          "A-21, 2nd Floor, BSI Business Park, Sector-63, Noida, Uttar Pradesh, India",
      },
      {
        icon: <IoIosMailOpen size={40} className="text-[#001845]" />,
        title: "Email Us",
        description: "softqivo@gmail.com",
      },
      {
        icon: <FaHeadphonesSimple size={40} className="text-[#001845]" />,
        title: "Working Hours",
        description: "Monday - Friday, 9:00 AM - 6:00 PM",
      },
    ],
  },

  serviceDetails: {
    pointOfService: {
      title: "Custom Point of Sale (POS) Software Development",
      description: [
        "Build a modern point-of-sale system tailored to your business operations, products, customers, and sales processes. SoftQivo develops custom POS solutions that help businesses manage transactions, inventory, customers, staff, and reporting from a centralized platform.",
        "Whether you need a retail POS, restaurant POS, multi-location sales system, or a customized business management solution, we design and develop software around your actual workflows instead of forcing your business to adapt to a generic system.",
      ],
      list: [
        "Custom billing and sales management workflows",
        "Inventory and product management",
        "Customer and staff management",
        "Real-time sales and business reporting",
        "Multi-location and multi-user support",
        "Third-party API and payment integrations",
      ],
    },

    weCreate: {
      title:
        "We Design and Build POS Software Around Your Business Workflow",
      description: [
        "A successful POS system needs more than a billing screen. We combine intuitive UI/UX design with reliable backend architecture to create software that is easy for employees to use and flexible enough to support changing business requirements.",
        "From product and inventory management to sales reporting, customer records, user permissions, and integrations, every part of the application is planned around your operational needs. Our development approach also considers security, performance, scalability, and future feature expansion.",
      ],
      list: [
        "User-friendly POS interface designed for fast daily operations",
        "Scalable backend architecture for growing transaction volumes",
        "Role-based access and user permission management",
        "Integration with payment gateways, APIs, and third-party systems",
        "Responsive web-based POS applications for different devices",
        "Analytics and reporting for better business decisions",
      ],

      cardData: [
        {
          title: "UI/UX Design",
          description:
            "We design simple, intuitive POS interfaces that help staff complete sales and manage daily operations quickly and efficiently.",
        },
        {
          title: "POS Development",
          description:
            "Our developers build secure, scalable POS applications with reliable frontend, backend, database, API, and integration architecture.",
        },
      ],

      cardImges: [card_img_01, card_img_02],
    },

    teamWork: {
      label: "Dedicated Development Team",
      title:
        "Build a POS Solution That Grows With Your Business",
      description: [
        "Our team works closely with you to understand your business processes, define the right features, design the experience, develop the platform, and continuously improve the product as your requirements evolve.",
        "Whether you are replacing an outdated POS system or building a new solution from the ground up, SoftQivo can provide the development expertise needed to turn your requirements into reliable business software.",
      ],
      list: [
        "Requirement analysis and product planning",
        "UI/UX design and interactive prototypes",
        "Frontend and backend development",
        "Database and API development",
        "Testing, deployment, and optimization",
        "Ongoing maintenance and feature improvements",
      ],
    },
  },

  privacyPolicy: {
  label: "Privacy Policy",
  title: "Your Privacy Matters to Us",
  lastUpdated: "September 26, 2026",

  introduction:
    "At SoftQivo, we respect your privacy and are committed to protecting the information you share with us. This Privacy Policy explains what information we may collect, how we use it, how we protect it, and the choices available to you when you use our website and services.",

  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [
        "We may collect information that you voluntarily provide when you contact us, request a consultation, submit an inquiry, or otherwise interact with our website.",
      ],
      list: [
        "Name",
        "Email address",
        "Phone number",
        "Company or organization name",
        "Project or service requirements",
        "Information included in your messages or inquiries",
        "Any other information you choose to provide",
      ],
      additionalParagraphs: [
        "We may also automatically collect limited technical information when you visit our website, such as:",
      ],
      additionalList: [
        "IP address",
        "Browser type and version",
        "Device type",
        "Operating system",
        "Pages visited",
        "Referring pages or websites",
        "Approximate usage and interaction information",
        "Date and time of website access",
      ],
      closingParagraphs: [
        "The information collected automatically may be used to understand website usage, maintain security, and improve website performance.",
      ],
    },

    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      paragraphs: [
        "SoftQivo may use the information we collect to:",
      ],
      list: [
        "Respond to inquiries and requests",
        "Provide information about our services",
        "Understand your project requirements",
        "Schedule consultations or discussions",
        "Provide and manage our services",
        "Improve our website, products, and services",
        "Communicate with you regarding your inquiry or project",
        "Maintain website security and prevent misuse",
        "Analyze website performance and user experience",
        "Comply with applicable legal and regulatory requirements",
      ],
      closingParagraphs: [
        "We will use personal information only for legitimate business purposes and in accordance with applicable laws.",
      ],
    },

    {
      id: "communication",
      title: "Communication",
      paragraphs: [
        "If you contact SoftQivo through our website, email, phone, or another communication channel, we may use the information you provide to respond to your request.",
        "We do not intend to use your contact information for unrelated promotional communications without an appropriate legal basis or, where required, your consent.",
        "You may request that we stop sending non-essential communications at any time.",
      ],
    },

    {
      id: "cookies",
      title: "Cookies and Similar Technologies",
      paragraphs: [
        "Our website may use cookies and similar technologies to support website functionality, understand website usage, improve performance, and provide a better user experience.",
        "Cookies are small files stored on your device by a website.",
        "Depending on how our website is configured, cookies may be used for purposes such as:",
      ],
      list: [
        "Essential website functionality",
        "Security",
        "Performance monitoring",
        "Understanding website traffic",
        "Remembering preferences",
      ],
      closingParagraphs: [
        "You can control or disable cookies through your browser settings. However, disabling certain cookies may affect some website functionality.",
        "If we introduce additional analytics, advertising, or other third-party tracking technologies, this Privacy Policy may be updated accordingly.",
      ],
    },

    {
      id: "third-party-services",
      title: "Third-Party Services",
      paragraphs: [
        "SoftQivo may use third-party services or technology providers to support website functionality, hosting, analytics, communication, security, or other business operations.",
        "These providers may process information on our behalf where necessary to provide their services.",
        "We expect applicable service providers to handle information responsibly and in accordance with appropriate contractual, technical, and organizational safeguards.",
        "We do not sell your personal information to third parties.",
      ],
    },

    {
      id: "data-security",
      title: "Data Security",
      paragraphs: [
        "We take reasonable technical and organizational measures to protect personal information from unauthorized access, alteration, disclosure, misuse, or destruction.",
        "However, no internet transmission or electronic storage system can be guaranteed to be completely secure. Therefore, while we work to protect your information, we cannot guarantee absolute security.",
      ],
    },

    {
      id: "data-retention",
      title: "Data Retention",
      paragraphs: [
        "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing services, maintaining business records, resolving disputes, enforcing agreements, and complying with applicable legal obligations.",
        "The retention period may vary depending on the type of information and the reason it was collected.",
      ],
    },

    {
      id: "privacy-rights",
      title: "Your Privacy Rights",
      paragraphs: [
        "Depending on applicable law and your location, you may have rights regarding your personal information, which may include the right to:",
      ],
      list: [
        "Request access to personal information we hold about you",
        "Request correction of inaccurate information",
        "Request deletion of certain personal information",
        "Request restriction of certain processing",
        "Object to certain uses of your information",
        "Withdraw consent where processing is based on consent",
        "Request information about how your personal information is processed",
      ],
      closingParagraphs: [
        "These rights may be subject to applicable legal limitations and exceptions.",
        "To exercise a privacy-related right, you can contact us using the details provided below.",
      ],
    },

    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      paragraphs: [
        "Our website and services are intended for businesses, organizations, and general users and are not specifically directed toward children.",
        "We do not knowingly collect personal information from children where prohibited by applicable law.",
        "If you believe that a child has provided personal information to us, please contact us so that we can review and take appropriate action.",
      ],
    },

    {
      id: "third-party-links",
      title: "Links to Other Websites",
      paragraphs: [
        "Our website may contain links to third-party websites, platforms, or services.",
        "SoftQivo is not responsible for the privacy practices, security, content, or policies of third-party websites. We recommend reviewing the privacy policy of any third-party website you visit.",
      ],
    },

    {
      id: "international-data",
      title: "International Data Processing",
      paragraphs: [
        "Depending on the technologies and service providers used by SoftQivo, your information may be processed or stored in countries other than the country in which you reside.",
        "Where required by applicable law, we will take appropriate measures for the lawful transfer and protection of personal information.",
      ],
    },

    {
      id: "policy-changes",
      title: "Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our services, website, technology, legal requirements, or privacy practices.",
        "When we make changes, we will update the Last Updated date at the top of this page.",
        "We encourage you to review this Privacy Policy periodically to stay informed about how we handle personal information.",
      ],
    },

    {
      id: "contact-us",
      title: "Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy, your personal information, or our privacy practices, please contact us.",
      ],
      contact: {
        company: "SoftQivo",
        email: "YOUR_OFFICIAL_EMAIL",
        website: "https://www.softqivo.com/",
      },
      closingParagraphs: [
        "We will make reasonable efforts to respond to privacy-related requests and inquiries within an appropriate period.",
      ],
    },
  ],
},

termsOfService: {
  label: "Terms of Service",
  title: "Terms & Conditions for Using SoftQivo",
  lastUpdated: "September 26, 2026",

  introduction:
    "These Terms of Service govern your access to and use of the SoftQivo website and the services we provide. By accessing our website, submitting an inquiry, or engaging SoftQivo for services, you agree to comply with these Terms and any applicable laws and regulations.",

  sections: [
    {
      id: "acceptance-of-terms",
      title: "Acceptance of Terms",
      paragraphs: [
        "By accessing or using the SoftQivo website and services, you acknowledge that you have read, understood, and agreed to these Terms of Service.",
        "If you do not agree with any part of these Terms, you should not use our website or services.",
      ],
    },

    {
      id: "our-services",
      title: "Our Services",
      paragraphs: [
        "SoftQivo provides digital technology and software development services for businesses, startups, entrepreneurs, and organizations.",
        "Our services may include web development, web application development, custom software development, mobile application development, UI/UX design, API and backend development, cloud and DevOps services, and other related digital solutions.",
        "The specific scope, deliverables, timelines, pricing, technologies, and responsibilities for a project will be agreed upon separately between SoftQivo and the client where applicable.",
      ],
    },

    {
      id: "project-engagements",
      title: "Project Engagements",
      paragraphs: [
        "Before beginning a project, SoftQivo and the client may agree on the project scope, requirements, deliverables, milestones, estimated timeline, fees, payment terms, and other applicable conditions.",
        "Changes to the agreed project scope may affect the project timeline, cost, or deliverables. Additional requirements or features may require a separate estimate or agreement.",
        "Project-specific agreements, proposals, statements of work, invoices, or other written agreements may contain additional terms that apply to a particular engagement.",
      ],
    },

    {
      id: "client-responsibilities",
      title: "Client Responsibilities",
      paragraphs: [
        "Clients are responsible for providing accurate information, requirements, content, credentials, approvals, assets, and other materials reasonably required for the project.",
        "Clients are also responsible for reviewing deliverables and providing timely feedback, approvals, or requested changes when required.",
        "Delays caused by missing information, approvals, access, content, or other client dependencies may affect the project schedule.",
      ],
    },

    {
      id: "payments-and-fees",
      title: "Payments and Fees",
      paragraphs: [
        "Project fees, payment schedules, deposits, milestones, and other payment conditions will be communicated and agreed upon before or during the relevant project engagement.",
        "Unless otherwise agreed in writing, work may be scheduled or delivered according to the payment milestones established for the project.",
        "Additional work outside the agreed scope may result in additional charges.",
        "Any applicable taxes, third-party service charges, licenses, hosting costs, domain costs, or other external expenses may be handled separately where applicable.",
      ],
    },

    {
      id: "intellectual-property",
      title: "Intellectual Property",
      paragraphs: [
        "Ownership and usage rights for project deliverables will depend on the terms agreed between SoftQivo and the client for the specific engagement.",
        "Unless otherwise agreed, SoftQivo may retain rights to its pre-existing tools, frameworks, libraries, reusable components, development methodologies, know-how, and other materials that were not created exclusively for the client.",
        "Third-party software, libraries, fonts, images, APIs, services, or other licensed materials remain subject to their respective licenses and terms.",
      ],
    },

    {
      id: "client-content",
      title: "Client Content and Materials",
      paragraphs: [
        "Clients are responsible for ensuring that any content, images, logos, documents, data, software, or other materials they provide to SoftQivo can legally be used for the intended project.",
        "Clients should not provide materials that infringe the intellectual property, privacy, contractual, or other legal rights of third parties.",
        "SoftQivo may rely on the information and materials provided by the client when performing services.",
      ],
    },

    {
      id: "third-party-services",
      title: "Third-Party Services and Integrations",
      paragraphs: [
        "Projects may require third-party platforms, APIs, hosting providers, payment services, analytics tools, cloud services, software libraries, or other external technologies.",
        "Third-party services are generally subject to their own terms, policies, availability, pricing, and technical limitations.",
        "SoftQivo is not responsible for changes, outages, restrictions, pricing changes, or failures caused by third-party services that are outside our reasonable control.",
      ],
    },

    {
      id: "website-use",
      title: "Acceptable Use",
      paragraphs: [
        "You agree to use the SoftQivo website and services only for lawful purposes and in a manner that does not violate applicable laws or the rights of others.",
        "You must not attempt to gain unauthorized access to our website, systems, servers, accounts, or other infrastructure.",
        "You must not knowingly introduce malicious code, attempt to disrupt website functionality, abuse our services, or use our website for fraudulent or unlawful activities.",
      ],
    },

    {
      id: "confidentiality",
      title: "Confidentiality",
      paragraphs: [
        "During a project, SoftQivo and the client may exchange confidential business, technical, commercial, or other information.",
        "Both parties should take reasonable steps to protect confidential information and use it only for legitimate purposes related to the relevant engagement.",
        "Specific confidentiality obligations may be established through a separate confidentiality agreement or project agreement where required.",
      ],
    },

    {
      id: "warranties",
      title: "Warranties and Disclaimers",
      paragraphs: [
        "SoftQivo will make reasonable efforts to provide services professionally and in accordance with the agreed project requirements.",
        "However, unless expressly agreed in writing, we do not guarantee that a website, application, software system, or other digital product will be completely error-free, continuously available, or compatible with every third-party system or future technology.",
        "The SoftQivo website and general information provided through it are provided for informational purposes and may be changed or updated without notice.",
      ],
    },

    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      paragraphs: [
        "To the extent permitted by applicable law, SoftQivo will not be liable for indirect, incidental, consequential, special, or other losses arising from the use of our website, services, third-party services, or project deliverables.",
        "This may include losses related to business interruption, loss of profits, loss of data, or loss of opportunities, except where liability cannot legally be excluded or limited.",
      ],
    },

    {
      id: "termination",
      title: "Termination",
      paragraphs: [
        "A project or service engagement may be terminated in accordance with the terms agreed between SoftQivo and the client.",
        "Where a project is terminated, the parties may remain responsible for fees, deliverables, expenses, or other obligations that became due before termination.",
        "SoftQivo may suspend or restrict access to its website or services where reasonably necessary to protect its systems, comply with legal obligations, or address misuse.",
      ],
    },

    {
      id: "changes-to-services",
      title: "Changes to Services",
      paragraphs: [
        "SoftQivo may modify, update, suspend, or discontinue parts of its website or services from time to time.",
        "We may also update technologies, service offerings, features, processes, or website content as our business develops.",
      ],
    },

    {
      id: "changes-to-terms",
      title: "Changes to These Terms",
      paragraphs: [
        "We may update these Terms of Service from time to time to reflect changes in our services, business practices, technology, or legal requirements.",
        "When changes are made, we will update the Last Updated date at the top of this page.",
        "Your continued use of the website or services after updated Terms become available may constitute acceptance of the revised Terms, to the extent permitted by applicable law.",
      ],
    },

    {
      id: "governing-law",
      title: "Governing Law",
      paragraphs: [
        "These Terms will be interpreted and applied in accordance with applicable laws and regulations.",
        "Where a specific project agreement contains governing-law or dispute-resolution provisions, those provisions may apply to that engagement.",
      ],
    },

    {
      id: "contact-us",
      title: "Contact Us",
      paragraphs: [
        "If you have questions about these Terms of Service or our services, please contact SoftQivo using the details below.",
      ],
      contact: {
        company: "SoftQivo",
        email: "YOUR_OFFICIAL_EMAIL",
        website: "https://www.softqivo.com/",
      },
    },
  ],
},

sitemap: {
  label: "Sitemap",
  title: "Explore SoftQivo",
  description:
    "Explore SoftQivo's website to discover our digital services, projects, insights, company information, and ways to get in touch with our team.",

  groups: [
    {
      title: "Main Pages",
      links: [
        {
          title: "Home",
          description: "Discover SoftQivo and our digital solutions.",
          href: "/",
        },
        {
          title: "About Us",
          description:
            "Learn more about SoftQivo, our approach, and how we build digital products.",
          href: "/about",
        },
        {
          title: "Services",
          description:
            "Explore our web, software, mobile, UI/UX, backend, and cloud services.",
          href: "/services",
        },
        {
          title: "Case Studies",
          description:
            "Explore selected projects and digital solutions developed by SoftQivo.",
          href: "/case-studies",
        },
        {
          title: "Blog",
          description:
            "Read insights about web development, UI/UX, software, and digital products.",
          href: "/blog",
        },
        {
          title: "Contact",
          description:
            "Get in touch with SoftQivo to discuss your project or business requirements.",
          href: "/contact",
        },
      ],
    },

    {
      title: "Our Services",
      links: [
        {
          title: "Web Development",
          description:
            "Modern websites and web applications built for performance and scalability.",
          href: "/services/web-development",
        },
        {
          title: "Software Development",
          description:
            "Custom software solutions designed around your business workflows.",
          href: "/services/software-development",
        },
        {
          title: "Mobile Applications",
          description:
            "User-focused mobile applications for modern businesses and digital products.",
          href: "/services/mobile-applications",
        },
        {
          title: "UI/UX Design",
          description:
            "Purposeful user experiences and interfaces designed for usability and engagement.",
          href: "/services/ui-ux-design",
        },
        {
          title: "API & Backend",
          description:
            "Secure backend systems and APIs that power applications and integrations.",
          href: "/services/api-backend",
        },
        {
          title: "Cloud & DevOps",
          description:
            "Cloud infrastructure and DevOps solutions for reliable deployment and operations.",
          href: "/services/cloud-devops",
        },
      ],
    },

    {
      title: "Insights",
      links: [
        {
          title:
            "Building Modern Web Applications That Scale With Your Business",
          description:
            "Explore modern architecture, performance, scalability, and web application development.",
          href: "/blog/building-modern-web-applications-that-scale",
        },
        {
          title:
            "Why Great UI/UX Design Is More Than Just a Beautiful Interface",
          description:
            "Learn how thoughtful design improves usability and digital product experiences.",
          href: "/blog/why-great-ui-ux-design-matters",
        },
        {
          title:
            "From Idea to Product: Building Software That Creates Real Business Value",
          description:
            "Explore the process of turning an idea into a reliable software product.",
          href: "/blog/from-idea-to-product",
        },
      ],
    },

    {
      title: "Company & Legal",
      links: [
        {
          title: "Privacy Policy",
          description:
            "Learn how SoftQivo collects, uses, and protects personal information.",
          href: "/privacy-policy",
        },
        {
          title: "Terms of Service",
          description:
            "Review the terms and conditions governing the use of SoftQivo's website and services.",
          href: "/terms-of-service",
        },
      ],
    },
  ],
},

};

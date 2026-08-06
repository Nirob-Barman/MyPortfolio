export const projectsData = [
    {
        slug: "carshop",
        name: "CarShop",
        subtitle: "Drive Your Dream",
        overview:
            "CarShop is a full-featured car marketplace built with ASP.NET Core 8 following Clean Architecture " +
            "(Domain → Application → Infrastructure → Web). It supports user authentication and role-based access, " +
            "advanced car browsing/filtering with reviews and wishlists, and a complete order workflow with real-time " +
            "stock management and payment processing.",
        features: [
            "Built a full-featured car marketplace with user authentication, account management, and role-based access.",
            "Developed advanced car browsing and filtering with detailed listings, reviews, wishlist, and personalization.",
            "Implemented order workflow with real-time stock, payment integration, and order lifecycle management.",
        ],
        techStack: {
            Backend: ["C#", "ASP.NET Core 8", "Entity Framework Core", "Clean Architecture"],
            Database: ["SQL Server", "Redis"],
            Frontend: ["Razor Views", "Bootstrap"],
            Payments: ["Stripe"],
        },
        dependencies: [
            "Microsoft.EntityFrameworkCore.SqlServer",
            "Microsoft.AspNetCore.Identity",
            "Stripe.net",
            "StackExchange.Redis",
            "AutoMapper",
            "FluentValidation",
            "Swashbuckle.AspNetCore",
        ],
        challenges: [
            "Coordinating real-time stock updates and preventing overselling under concurrent checkout requests.",
            "Structuring the codebase around Clean Architecture while keeping cross-cutting concerns like caching and validation consistent across layers.",
            "Integrating Stripe payment processing securely while keeping the checkout flow resilient to failures.",
        ],
        futureImprovements: [
            "Add automated integration tests around the checkout and payment flow.",
            "Introduce a background job queue for stock-alert notifications instead of synchronous processing.",
            "Add an admin analytics dashboard with revenue trends.",
        ],
        links: {
            website: "https://carshop.runasp.net/",
            github: "https://github.com/Nirob-Barman/CarShop",
        },
        tags: ["ASP.NET Core 8", "C#", "EF Core", "SQL Server", "Clean Architecture", "Redis", "Stripe"],
        images: [
            "https://i.ibb.co.com/R49RG73P/Screenshot-1.png",
            "https://i.ibb.co.com/8DV1r2Hz/Screenshot-3.png",
            "https://i.ibb.co.com/6c4c1Nj4/Screenshot-2.png",
        ],
        gradient: "from-blue-600 to-indigo-700",
    },
    {
        slug: "eliteacademy",
        name: "EliteAcademy",
        subtitle: "Learning Hub",
        overview:
            "EliteAcademy is a role-based online learning platform built with ASP.NET Core MVC, supporting " +
            "Admin, Instructor, and Student roles with secure authorization, course approval workflows, and " +
            "analytics/reporting dashboards for business insight.",
        features: [
            "Built a role-based learning platform (Admin, Instructor, Student) with secure authorization, approval workflows, and seamless role transitions",
            "Admin manages course approval, feedback, and empowers instructors administratively.",
            "Designed admin analytics and reporting dashboards with revenue insights (monthly, per-class, per-instructor) and CSV export for business intelligence.",
        ],
        techStack: {
            Backend: ["C#", "ASP.NET Core MVC", "Entity Framework Core"],
            Auth: ["ASP.NET Core Identity"],
            Database: ["SQL Server"],
            Frontend: ["Razor Views", "Bootstrap"],
        },
        dependencies: [
            "Microsoft.AspNetCore.Identity.EntityFrameworkCore",
            "Microsoft.EntityFrameworkCore.SqlServer",
            "Bootstrap 5",
            "CsvHelper",
        ],
        challenges: [
            "Designing a permission model that supports admin/instructor/student roles with approval workflows and safe role transitions.",
            "Building analytics and reporting (monthly, per-class, per-instructor revenue) without over-complicating the data access layer.",
        ],
        futureImprovements: [
            "Add automated email notifications for course approval status changes.",
            "Introduce unit tests for the service layer.",
            "Add a notification center for students and instructors.",
        ],
        links: {
            website: "https://eliteacademy.runasp.net/",
            github: "https://github.com/Nirob-Barman/EliteAcademy",
        },
        tags: ["ASP.NET Core MVC", "C#", "EF Core", "SQL Server", "Identity", "Bootstrap"],
        images: [
            "https://i.ibb.co.com/3YG1Qq80/Screenshot-1.png",
            "https://i.ibb.co.com/XxZqhGfZ/Screenshot-2.png",
            "https://i.ibb.co.com/Ld1znvPr/Screenshot-3.png",
        ],
        gradient: null,
    },
    {
        slug: "grow-green",
        name: "Grow Green",
        subtitle: "Gardening E-Commerce",
        overview:
            "Grow Green is a full-stack gardening e-commerce platform built on the MERN stack with Firebase " +
            "authentication and Stripe payments, featuring role-based access control and admin statistics for " +
            "users, products, orders, and revenue.",
        features: [
            "Role-based access control, allowing administrators to manage roles for users.",
            "Users can create, retrieve, and delete bookings for products and Stripe API for processing payments.",
            "Admins can retrieve statistics, such as the total number of users, products, orders, and revenue.",
        ],
        techStack: {
            Frontend: ["React", "Tailwind CSS"],
            Backend: ["Node.js", "Express.js"],
            Database: ["MongoDB"],
            Other: ["Firebase Auth", "Firebase Hosting"],
            Payments: ["Stripe"],
        },
        dependencies: ["react-router-dom", "firebase", "express", "mongoose", "stripe", "jsonwebtoken"],
        challenges: [
            "Implementing secure role-based access control across a MERN stack without a built-in auth framework like ASP.NET Identity.",
            "Keeping booking state consistent between client and server around Stripe payment confirmation.",
        ],
        futureImprovements: [
            "Add order tracking and status updates for customers.",
            "Introduce pagination and search for the product catalog.",
            "Add automated testing for the Express API.",
        ],
        links: {
            website: "https://grow-green-aa1e1.web.app/",
            github: "https://github.com/Nirob-Barman/Grow-Green",
        },
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe"],
        images: [
            "https://i.ibb.co/2h8CynF/image.png",
            "https://i.ibb.co/4dtjQm2/image.png",
            "https://i.ibb.co/pKXj4PF/image.png",
        ],
        gradient: null,
    },
];

export const getProjectBySlug = (slug) => projectsData.find((p) => p.slug === slug);

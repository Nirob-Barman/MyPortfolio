import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        name: "CarShop",
        subtitle: "Drive Your Dream",
        features: [
            // "Clean Architecture (Domain → Application → Infrastructure → Web) with Unit of Work, Generic Repository, Strategy Pattern for payment processors, and Result<T> for consistent service responses.",
            // "Full admin panel with revenue analytics, audit logs, rate-limited auth (10 req/min/IP), Redis caching, real-time stock alerts, and bulk CSV car import.",
            // "Admin panel with revenue analytics, audit logs, rate-limited auth, Redis caching, real-time stock alerts, and bulk CSV car import.",
            // "Two-tier homepage loading via IntersectionObserver — critical content renders instantly; secondary sections lazy-load with skeleton placeholders. Open Graph + Twitter Card meta tags on all car detail pages.",
            // "Wishlist, recently viewed cars (cookie-based, 30-day), promo codes with discount caps, test drive bookings, and stock alerts with email + in-app notifications via 60-second polling.",
            // "Multi-gateway checkout — Stripe, SSLCommerz, BKash, SurjoPay — with gateway credentials encrypted at rest via ASP.NET Data Protection and 30-min order auto-expiry with stock restoration.",
            // "Multi-gateway checkout with gateway credentials encrypted at rest via ASP.NET Data Protection and 30-min order auto-expiry with stock restoration.",
            "Built a full-featured car marketplace with user authentication, account management, and role-based access.",
            "Developed advanced car browsing and filtering with detailed listings, reviews, wishlist, and personalization.",
            "Implemented order workflow with real-time stock, payment integration, and order lifecycle management.",
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
        // gradient: "null",
    },
    {
        name: "EliteAcademy",
        subtitle: "Learning Hub",
        features: [
            // "Full stack web development supporting admin, instructor, and student roles.",
            "Built a role-based learning platform (Admin, Instructor, Student) with secure authorization, approval workflows, and seamless role transitions",
            "Admin manages course approval, feedback, and empowers instructors administratively.",
            "Designed admin analytics and reporting dashboards with revenue insights (monthly, per-class, per-instructor) and CSV export for business intelligence.",
            // "Followed clean separation of concerns (MVC + Service Layer pattern) to maintain testability and scalability.",
            // "Students have access to enroll in and view their selected and enrolled classes.",
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
        name: "Grow Green",
        subtitle: "Gardening E-Commerce",
        features: [
            "Role-based access control, allowing administrators to manage roles for users.",
            "Users can create, retrieve, and delete bookings for products and Stripe API for processing payments.",
            "Admins can retrieve statistics, such as the total number of users, products, orders, and revenue.",
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

const Thumbnail = ({ project }) => {
    const [current, setCurrent] = useState(0);
    const hasImages = project.images.length > 0;
    const isCarousel = project.images.length > 1;

    useEffect(() => {
        if (!isCarousel) return;
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % project.images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [isCarousel, project.images.length]);

    if (!hasImages) {
        return (
            <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold tracking-wide opacity-90">
                    {project.name}
                </span>
            </div>
        );
    }

    return (
        <>
            <img
                src={project.images[current]}
                alt={`${project.name} screenshot ${current + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
            />
            {isCarousel && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {project.images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                                i === current ? 'bg-white w-3' : 'bg-white/50'
                            }`}
                            aria-label={`Image ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

const ProjectCard = ({ project }) => {
    const { links } = project;

    return (
        <div className="rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md hover:border-blue-200 transition-all duration-200">

            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
                <Thumbnail project={project} />

                {/* Icon links overlay */}
                <div className="absolute top-3 right-3 flex gap-2">
                    {links.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow transition"
                            title="GitHub"
                        >
                            <FaGithub size={16} />
                        </a>
                    )}
                    {links.website && (
                        <a
                            href={links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow transition"
                            title="Live Demo"
                        >
                            <FaExternalLinkAlt size={14} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-gray-800">{project.name}</h2>
                <p className="text-xs text-blue-500 font-medium mb-2">{project.subtitle}</p>
                {project.features ? (
                    <ul className="flex-1 space-y-1.5">
                        {project.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-sm text-gray-600">
                                <span className="mt-0.5 text-green-500 flex-shrink-0">&#10003;</span>
                                {f}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{project.description}</p>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${
                                i === 0
                                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                                    : 'bg-slate-50 text-slate-600 border-slate-200'
                            }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div id="Projects" className="py-12">
            <h2 className="text-center text-3xl font-bold mb-2 text-gray-800">Projects</h2>
            <p className="text-center text-gray-500 mb-8">
                {/* View all projects{" "}
                <Link to="/projects" className="text-blue-500 hover:text-blue-700 font-medium">
                    here
                </Link> */}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;

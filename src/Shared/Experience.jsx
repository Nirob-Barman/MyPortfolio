import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

const experiences = [
    {
        company: "SoftifyBD Limited",
        role: "IMSS Specialist Engineer",
        period: "October 2024 – July 2026",
        type: "Full-time",
        project: "ISP Digital — ISP Management & Billing Software (SaaS)",
        bullets: [
            "Part of an 8–10 member development team on ISP Digital, a SaaS product live for 7+ years.",
            "Designed and developed the OLT Integration module in C#/.NET RESTful APIs, enabling real-time ONU monitoring (OLT/Port, Optical Power, MAC, Status, Last Deregister Time/Distance).",
            "Built and managed multi-tenant ASP.NET Core Web APIs and a microservice module supporting multiple client databases, enabling independent deployment and smooth inter-service communication.",
            "Migrated a single MySQL multi-tenant database into separate tenant-specific databases, improving performance, scalability, and data integrity.",
            "Integrated MikroTik RouterOS API for client monitoring and live network tracking.",
            "Managed Windows Server/IIS and SQL Server environments, including deployments, configurations, and production support.",
            "Investigated and resolved production bugs in collaboration with QA, improving system reliability.",
        ],
        tags: ["C#", "ASP.NET Core", "Web API", "MySQL", "SQL Server", "Microservices", "IIS", "MikroTik API"],
    },
    {
        company: "SoftifyBD Limited",
        role: "Software Engineer Intern",
        period: "April 2024 – October 2024",
        type: "Internship",
        project: null,
        bullets: [
            "Contributed to frontend and backend development in a .NET MVC application.",
            "Worked with JavaScript, jQuery, ASP.NET MVC, Web API, and wrote SQL queries.",
            "Assisted in API testing, documentation, and IIS deployment.",
            "Monitored logs, supported bug fixing, and documented code and deployment steps.",
        ],
        tags: ["ASP.NET MVC", "Web API", "jQuery", "JavaScript", "SQL", "IIS"],
    },
];

const Experience = () => {
    return (
        <div id="Experience" className="py-12">
            <SectionHeading title="Work Experience" />
            <div className="relative border-l-2 border-blue-500 ml-4 md:ml-8 space-y-10">
                {experiences.map((exp, index) => (
                    <AnimatedSection key={index} className="relative pl-8">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow" />
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                                <span className="text-sm text-gray-500 whitespace-nowrap">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-blue-600 font-semibold">{exp.company}</span>
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{exp.type}</span>
                            </div>
                            {exp.project && (
                                <p className="text-sm text-gray-500 italic mb-3">Project: {exp.project}</p>
                            )}
                            <ul className="mt-3 space-y-2">
                                {exp.bullets.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <span className="mt-1 text-blue-500 flex-shrink-0">&#10003;</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {exp.tags.map((tag, i) => (
                                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full border border-gray-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default Experience;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';


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

                <Link
                    to={`/projects/${project.slug}`}
                    className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 border border-blue-200 rounded-lg py-2.5 hover:bg-blue-50 transition-colors duration-200"
                >
                    View Details <FaArrowRight size={12} />
                </Link>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div id="Projects" className="py-12">
            <SectionHeading title="Projects" subtitle="A few things I've built end-to-end — from data model to deployment." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                    <AnimatedSection key={project.slug}>
                        <ProjectCard project={project} />
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default Projects;

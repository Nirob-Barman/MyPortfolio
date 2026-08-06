import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { getProjectBySlug } from '../data/projectsData';

const Gallery = ({ project }) => {
    const [current, setCurrent] = useState(0);
    const hasImages = project.images?.length > 0;

    if (!hasImages) {
        return (
            <div className={`w-full h-64 md:h-80 rounded-xl bg-gradient-to-br ${project.gradient || 'from-slate-600 to-slate-800'} flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold tracking-wide opacity-90">{project.name}</span>
            </div>
        );
    }

    return (
        <div>
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gray-100">
                <img
                    src={project.images[current]}
                    alt={`${project.name} screenshot ${current + 1}`}
                    className="w-full h-full object-cover"
                />
            </div>
            {project.images.length > 1 && (
                <div className="flex gap-2 mt-3">
                    {project.images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                                i === current ? 'border-blue-500' : 'border-transparent'
                            }`}
                        >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const DetailBlock = ({ title, children }) => (
    <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
        {children}
    </section>
);

const BulletList = ({ items }) => (
    <ul className="space-y-2">
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                <span className="mt-1 text-blue-500 flex-shrink-0">&#10003;</span>
                {item}
            </li>
        ))}
    </ul>
);

const ProjectDetails = () => {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-16 max-w-3xl mx-auto text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-3">Project not found</h1>
                <p className="text-gray-500 mb-6">The project you&rsquo;re looking for doesn&rsquo;t exist or may have moved.</p>
                <Link to="/#Projects" className="text-blue-600 font-semibold hover:text-blue-700">
                    &larr; Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 max-w-4xl mx-auto">
            <Link to="/#Projects" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors mb-6">
                <FaArrowLeft size={12} /> Back to Projects
            </Link>

            <h1 className="text-3xl font-bold text-gray-800">{project.name}</h1>
            <p className="text-blue-500 font-medium mb-6">{project.subtitle}</p>

            <Gallery project={project} />

            <div className="mt-8">
                <DetailBlock title="Overview">
                    <p className="text-gray-700 text-sm leading-relaxed">{project.overview}</p>
                </DetailBlock>

                <DetailBlock title="Main Technology Stack">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {Object.entries(project.techStack).map(([category, items]) => (
                            <div key={category}>
                                <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">{category}</h3>
                                <ul className="space-y-1">
                                    {items.map((item) => (
                                        <li key={item} className="text-sm text-gray-700">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </DetailBlock>

                <DetailBlock title="Features">
                    <BulletList items={project.features} />
                </DetailBlock>

                <DetailBlock title="Dependencies">
                    <div className="flex flex-wrap gap-2">
                        {project.dependencies.map((dep) => (
                            <span key={dep} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200">
                                {dep}
                            </span>
                        ))}
                    </div>
                </DetailBlock>

                <DetailBlock title="Live Link">
                    {project.links.website ? (
                        <a
                            href={project.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 transition-colors"
                        >
                            <FaExternalLinkAlt size={12} /> Visit Live Site
                        </a>
                    ) : (
                        <p className="text-sm text-gray-500">Not deployed publicly.</p>
                    )}
                </DetailBlock>

                <DetailBlock title="GitHub Repository Link">
                    {project.links.github ? (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 border border-gray-300 hover:bg-gray-50 rounded-lg px-4 py-2 transition-colors"
                        >
                            <FaGithub size={14} /> View Source Code
                        </a>
                    ) : (
                        <p className="text-sm text-gray-500">Private repository.</p>
                    )}
                </DetailBlock>

                <DetailBlock title="Challenges Faced">
                    <BulletList items={project.challenges} />
                </DetailBlock>

                <DetailBlock title="Future Improvements">
                    <BulletList items={project.futureImprovements} />
                </DetailBlock>
            </div>
        </div>
    );
};

export default ProjectDetails;

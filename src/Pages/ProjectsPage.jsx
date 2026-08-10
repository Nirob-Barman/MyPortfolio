import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { projectsData } from "../data/projectsData";

const ProjectsPage = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const allTags = Array.from(new Set(projectsData.flatMap((project) => project.tags)));

    const handleTagToggle = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const filteredProjects = projectsData.filter(
        (project) =>
            selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag))
    );

    return (
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 md:p-16 max-w-6xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">All Projects</h1>
                <p className="text-gray-500 text-lg">Filter by technology</p>
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
                            selectedTags.includes(tag)
                                ? "bg-blue-600 text-white font-semibold border-blue-600"
                                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-white"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div
                        key={project.slug}
                        className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all flex flex-col"
                    >
                        <h2 className="text-lg font-bold text-gray-800">{project.name}</h2>
                        <p className="text-xs text-blue-500 font-medium mb-3">{project.subtitle}</p>
                        <p className="text-sm text-gray-600 flex-1">{project.overview}</p>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200"
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
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;

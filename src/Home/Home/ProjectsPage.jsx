import { useState, useEffect } from "react";
import { projectsData } from "../../data/projectsData";

const ProjectsPage = () => {
    useEffect(() => {
        // Scroll to the top when the page loads
        window.scrollTo(0, 0);
    }, []);

    const [selectedCategories, setSelectedCategories] = useState([]);

    // Extract unique categories from all projects
    const allCategories = Array.from(
        new Set(projectsData.flatMap(project => project.categories))
    );

    // Handle category filter toggle
    const handleCategoryToggle = (category) => {
        setSelectedCategories(prevSelected =>
            prevSelected.includes(category)
                ? prevSelected.filter(cat => cat !== category)
                : [...prevSelected, category]
        );
    };

    // Filter projects based on selected categories
    const filteredProjects = projectsData.filter(project =>
        selectedCategories.length === 0 ||
        selectedCategories.some(cat => project.categories.includes(cat))
    );

    return (
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 md:p-16 max-w-6xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">Projects</h1>
                <p className="text-gray-900 text-lg">Filter by your favorite technologies</p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {allCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleCategoryToggle(category)}
                        className={`px-4 py-2 rounded-full border transition-all duration-300 shadow-sm 
                            ${selectedCategories.includes(category) ?
                                "bg-blue-500 text-white font-semibold border-blue-500" :
                                "bg-gray-200 text-gray-700 border-gray-300 hover:bg-white"}
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <div key={project.name} className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all">
                        <h2 className="text-xl font-semibold mb-3">{project.name}</h2>
                        <ul className="text-gray-700 mb-4 h-40 overflow-auto">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="mr-2 text-green-500">&#10003;</span> {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-3">

                            {project.links.website && (
                                <a
                                    href={project.links.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-full"
                                >
                                    Website
                                </a>
                            )}

                            {project.links.repository && (
                                <a
                                    href={project.links.repository}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-full"
                                >
                                    Repository
                                </a>
                            )}

                            {project.links.server && (
                                <a
                                    href={project.links.server}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-full"
                                >
                                    Server
                                </a>
                            )}

                            {project.links.client && (
                                <a
                                    href={project.links.client}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-full"
                                >
                                    Client
                                </a>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;

import React from 'react';

const ProjectsPage = () => {
    const projectsData = {
        "projects": [
            {
                "name": "Grow Green",
                "links": {
                    "website": "https://grow-green-aa1e1.web.app/",
                    "server": "https://github.com/Nirob-Barman/Grow-Green/tree/main/Grow-Green-Server/",
                    "client": "https://github.com/Nirob-Barman/Grow-Green/tree/main/Grow-Green-Client/"
                },
                "features": [
                    "Role-based access control, allowing administrators to manage roles for users.",
                    "Users can create, retrieve, and delete bookings for products and Stripe API for processing payments.",
                    "Admins can retrieve statistics, such as the total number of users, products, orders, and revenue."
                ]
            },
            {
                "name": "EliteSportsAcademy",
                "links": {
                    "website": "https://summer-camp-school-b1cb7.web.app/",
                    "server": "https://github.com/rsnirob/summer-camp-server",
                    "client": "https://github.com/rsnirob/summer-camp-client"
                },
                "features": [
                    "Full stack web development supporting admin, instructor, and student roles.",
                    "Admin manages course approval, feedback, and empowers instructors administratively.",
                    "Students have access to enroll in and view their selected and enrolled classes."
                ]
            },
            {
                "name": "ToyVerse",
                "links": {
                    "website": "https://toy-marketplace-5c0d6.firebaseapp.com/",
                    "server": "https://github.com/rsnirob/toy-marketplace-server",
                    "client": "https://github.com/rsnirob/toy-marketplace-client"
                },
                "features": [
                    "Customers can browse and buy a wide variety of toy cars online.",
                    "Sellers can list their toys on the marketplace for sale.",
                    "Administrators have the ability to view, edit, and delete marketplace toys."
                ]
            },
            {
                "name": "Delicious Seeds",
                "links": {
                    "website": "https://chef-recipe-hunting-a4314.web.app/",
                    "server": "https://github.com/rsnirob/chef-recipe-hunter-server",
                    "client": "https://github.com/rsnirob/chef-recipe-hunter-client"
                },
                "features": [
                    "The website provides a wide range of recipes from well-known chefs.",
                    "Platform facilitating exploration, sharing, and learning about diverse foods and recipes.",
                    "Users can explore and try out the most exquisite recipes from featured chefs."
                ]
            }
        ]
    };
    return (
        <div className='mt-20'>
            <div>
                <div className='text-center text-xl mb-3'>
                    <h2 className="">All Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projectsData.projects.map(project => (
                        <div key={project.name} className="relative overflow-hidden group">
                            <div className="project-info p-4 bg-gray-100">
                                <h2 className="text-xl font-semibold">{project.name}</h2>
                                <ul className="mt-2 h-40">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="mr-1 text-green-500">&#10003;</span> {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex mt-4 justify-around">
                                    <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                        Visit Website
                                    </a>
                                    <a href={project.links.server} target="_blank" rel="noopener noreferrer" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                        Server
                                    </a>
                                    <a href={project.links.client} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                        Client
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
import React from 'react';

const ProjectsPage = () => {
    const projectsData = {
        "projects": [
            {
                "name": "Social Canvas",
                "links": {
                    "website": "https://social-canvas-3b50e.web.app/",
                    "server": "https://github.com/Nirob-Barman/Social-Canvas/tree/main/SocialCanvas/",
                    "client": "https://github.com/Nirob-Barman/Social-Canvas/tree/main/Social-Canvas-Client/"
                },
                "features": [
                    "Safely handle user authentication, registration, and more for enhanced account security.",
                    "Efficiently explore recent posts with seamless interaction for likes and dislikes.",
                    "Efficiently navigate top liked and top commented posts, interact with likes, and engage in discussions."
                ],
                "images": [
                    "https://i.ibb.co/n3xbXxn/image.png",
                    "https://i.ibb.co/5jyx2fJ/image.png",
                    "https://i.ibb.co/kB7XHzs/image.png"
                ]
            },
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
                ],
                "images": [
                    "https://i.ibb.co/2h8CynF/image.png",
                    "https://i.ibb.co/4dtjQm2/image.png",
                    "https://i.ibb.co/pKXj4PF/image.png"
                ]
            },
            {
                "name": "EliteSportsAcademy",
                "links": {
                    "website": "https://summer-camp-school-b1cb7.web.app/",
                    "server": "https://github.com/Nirob-Barman/summer-camp-server",
                    "client": "https://github.com/Nirob-Barman/summer-camp-client"
                },
                "features": [
                    "Full stack web development supporting admin, instructor, and student roles.",
                    "Admin manages course approval, feedback, and empowers instructors administratively.",
                    "Students have access to enroll in and view their selected and enrolled classes."
                ],
                "images": [
                    "https://i.ibb.co/bJKSnT0/pi.png",
                    "https://i.ibb.co/CH6rBXq/pii.png",
                    "https://i.ibb.co/4gNrfhJ/piii.png"
                ]
            },
            {
                "name": "ToyVerse",
                "links": {
                    "website": "https://toy-marketplace-5c0d6.firebaseapp.com/",
                    "server": "https://github.com/Nirob-Barman/toy-marketplace-server",
                    "client": "https://github.com/Nirob-Barman/toy-marketplace-client"
                },
                "features": [
                    "Customers can browse and buy a wide variety of toy cars online.",
                    "Sellers can list their toys on the marketplace for sale.",
                    "Administrators have the ability to view, edit, and delete marketplace toys."
                ],
                "images": [
                    "https://i.ibb.co/F46B8tL/ppi.png",
                    "https://i.ibb.co/YhsZDgB/ppii.png",
                    "https://i.ibb.co/wrW4qHY/ppiii.png"
                ]
            },
            {
                "name": "Delicious Seeds",
                "links": {
                    "website": "https://chef-recipe-hunting-a4314.web.app/",
                    "server": "https://github.com/Nirob-Barman/chef-recipe-hunter-server",
                    "client": "https://github.com/Nirob-Barman/chef-recipe-hunter-client"
                },
                "features": [
                    "The website provides a wide range of recipes from well-known chefs.",
                    "Platform facilitating exploration, sharing, and learning about diverse foods and recipes.",
                    "Users can explore and try out the most exquisite recipes from featured chefs."
                ],
                "images": [
                    "https://i.ibb.co/QbCFpHn/pppi.png",
                    "https://i.ibb.co/6YtYV8P/pppii.png",
                    "https://i.ibb.co/G28CSyt/pppiii.png"
                ]
            }
        ]
    };
    return (
        <div className='my-24'>
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
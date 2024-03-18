import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {

    const projectsData = [
        {
            "name": "EliteSportsAcademy",
            "description": "Full stack web development supporting admin, instructor, and student roles.",
            "features": [
                "Admin manages course approval, feedback, and empowers instructors administratively.",
                "Students have access to enroll in and view their selected and enrolled classes."
            ],
            "links": {
                "website": "https://summer-camp-school-b1cb7.web.app/",
                "server": "https://github.com/rsnirob/summer-camp-server",
                "client": "https://github.com/rsnirob/summer-camp-client"
            },
            "images": [
                "https://i.ibb.co/bJKSnT0/pi.png",
                "https://i.ibb.co/CH6rBXq/pii.png",
                "https://i.ibb.co/4gNrfhJ/piii.png"
            ]
        },
        {
            "name": "ToyVerse",
            "description": "Customers can browse and buy a wide variety of toy cars online.",
            "features": [
                "Sellers can list their toys on the marketplace for sale.",
                "Administrators have the ability to view, edit, and delete marketplace toys."
            ],
            "links": {
                "website": "https://toy-marketplace-5c0d6.firebaseapp.com/",
                "server": "https://github.com/rsnirob/toy-marketplace-server",
                "client": "https://github.com/rsnirob/toy-marketplace-client"
            },
            "images": [
                "https://i.ibb.co/F46B8tL/ppi.png",
                "https://i.ibb.co/YhsZDgB/ppii.png",
                "https://i.ibb.co/wrW4qHY/ppiii.png"
            ]
        },
        {
            "name": "Delicious Seeds",
            "description": "The website provides a wide range of recipes from well-known chefs.",
            "features": [
                "Platform facilitating exploration, sharing, and learning about diverse foods and recipes.",
                "Users can explore and try out the most exquisite recipes from featured chefs."
            ],
            "links": {
                "website": "https://chef-recipe-hunting-a4314.web.app/",
                "server": "https://github.com/rsnirob/chef-recipe-hunter-server",
                "client": "https://github.com/rsnirob/chef-recipe-hunter-client"
            },
            "images": [
                "https://i.ibb.co/QbCFpHn/pppi.png",
                "https://i.ibb.co/6YtYV8P/pppii.png",
                "https://i.ibb.co/G28CSyt/pppiii.png"
            ]
        }
    ]

    return (
        <div id='Projects'>
            <div className='text-center text-xl mb-3'>
                <h2 className="">Projects</h2>
            </div>
            <div className='text-center text-xl mb-3'>
                <h2 className="">All Projects are
                    <span><Link to="/projects"> here</Link></span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                    <div key={index} className="relative overflow-hidden group">
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
                        <div className="scrollable-images h-0 overflow-hidden transition-all duration-300 group-hover:h-full">
                            {project.images.map((image, index) => (
                                <img key={index} src={image} alt="Project" className="w-full" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;

{/* {
    https://i.ibb.co/YhsZDgB/ppii.png
    https://i.ibb.co/wrW4qHY/ppiii.png
    https://i.ibb.co/QbCFpHn/pppi.png
    https://i.ibb.co/6YtYV8P/pppii.png
    https://i.ibb.co/G28CSyt/pppiii.png
    https://i.ibb.co/bJKSnT0/pi.png
    https://i.ibb.co/CH6rBXq/pii.png
    https://i.ibb.co/4gNrfhJ/piii.png
    https://i.ibb.co/F46B8tL/ppi.png
    } 
*/}
import React from 'react';

const Project = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className="">Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden group">
                    <div className="project-info p-4 bg-gray-100">
                        <h2 className="text-xl font-semibold">EliteSportsAcademy</h2>
                        {/* <p className="text-gray-600">Project Title 1</p> */}
                        <ul className="mt-2 h-40">
                            <li className="flex items-center">
                                <span className="mr-1 text-green-500">&#10003;</span> Full stack web development supporting admin, instructor, and student roles.

                            </li>
                            <li className="flex items-center">
                                <span className="mr-1 text-green-500">&#10003;</span> Admin manages course approval, feedback, and empowers instructors administratively.
                            </li>
                            <li className="flex items-center">
                                <span className="mr-1 text-green-500">&#10003;</span> Students have access to enroll in and view their selected and enrolled classes.
                            </li>
                        </ul>

                        <div className="flex mt-4 justify-around">
                            <a href="https://summer-camp-school-b1cb7.web.app/" target="_blank" rel="noopener noreferrer" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Visit Website
                            </a>
                            <a href="https://github.com/rsnirob/summer-camp-server" target="_blank" rel="noopener noreferrer" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Server
                            </a>
                            <a href="https://github.com/rsnirob/summer-camp-client" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Client
                            </a>
                        </div>

                    </div>
                    <div className="scrollable-images h-0 overflow-hidden transition-all duration-300 group-hover:h-full">
                        <img src="../../public/Projects/pi.png" alt="Project 1" className="w-full" />
                        <img src="../../public/Projects/pii.png" alt="Project 1" className="w-full" />
                        <img src="../../public/Projects/piii.png" alt="Project 1" className="w-full" />
                    </div>
                </div>
                <div className="relative overflow-hidden group">
                    <div className="project-info p-4 bg-gray-100">
                        <h2 className="text-xl font-semibold">ToyVerse</h2>
                        {/* <p className="text-gray-600">Project Title 1</p> */}
                        <ul className="mt-2 h-40">
                            <li className="flex items-center">
                                <span className="mr-1 text-green-500">&#10003;</span> Customers can browse and buy a wide variety of toy cars online.

                            </li>
                            <li className="flex items-center">
                                <span className="mr-1 text-green-500">&#10003;</span> Sellers can list their toys on the marketplace for sale.
                            </li>
                            <li className="flex items-center">
                                <span className="mr-1 text-green-500">&#10003;</span> Administrators have the ability to view, edit, and delete marketplace toys.
                            </li>
                        </ul>

                        <div className="flex mt-4 justify-around">
                            <a href="https://toy-marketplace-5c0d6.firebaseapp.com/" target="_blank" rel="noopener noreferrer" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Visit Website
                            </a>
                            <a href="https://github.com/rsnirob/toy-marketplace-server" target="_blank" rel="noopener noreferrer" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Server
                            </a>
                            <a href="https://github.com/rsnirob/toy-marketplace-client" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Client
                            </a>
                        </div>

                    </div>
                    <div className="scrollable-images h-0 overflow-hidden transition-all duration-300 group-hover:h-full">
                        <img src="../../public/Projects/ppi.png" alt="Project 1" className="w-full" />
                        <img src="../../public/Projects/ppii.png" alt="Project 1" className="w-full" />
                        <img src="../../public/Projects/ppiii.png" alt="Project 1" className="w-full" />
                    </div>
                </div>
                <div className="relative overflow-hidden group">
                    <div className="project-info p-4 bg-gray-100">
                        <h2 className="text-xl font-semibold">Delicious Seeds</h2>
                        {/* <p className="text-gray-600">Project Title 1</p> */}
                        <ul className="mt-2 h-40">
                            <li className="flex items-center">
                                <span className="mr-1 text-green-500">&#10003;</span> The website provides a wide range of recipes from well-known chefs.

                            </li>
                            <li className="flex items-center">
                                <span className="mr-1 text-green-500">&#10003;</span> Platform facilitating exploration, sharing, and learning about diverse foods and recipes.
                            </li>
                            <li className="flex items-center">
                                <span className="mr-1 text-green-500">&#10003;</span> Users can explore and try out the most exquisite recipes from featured chefs.
                            </li>
                        </ul>

                        <div className="flex mt-4 justify-around">
                            <a href="https://chef-recipe-hunting-a4314.web.app/" target="_blank" rel="noopener noreferrer" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Visit Website
                            </a>
                            <a href="https://github.com/rsnirob/chef-recipe-hunter-server" target="_blank" rel="noopener noreferrer" className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Server
                            </a>
                            <a href="https://github.com/rsnirob/chef-recipe-hunter-client" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Client
                            </a>
                        </div>

                    </div>
                    <div className="scrollable-images h-0 overflow-hidden transition-all duration-300 group-hover:h-full">
                        <img src="../../public/Projects/pppi.png" alt="Project 1" className="w-full" />
                        <img src="../../public/Projects/pppii.png" alt="Project 1" className="w-full" />
                        <img src="../../public/Projects/pppiii.png" alt="Project 1" className="w-full" />
                    </div>
                </div>


                {/* Repeat the above structure for Project 2 and Project 3 */}

            </div>

        </div>
    );
};

export default Project;



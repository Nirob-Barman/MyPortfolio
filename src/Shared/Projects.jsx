import { useRef } from 'react';

const Projects = () => {
    const projectData = [
        {
            name: 'Project 1',
            title: 'Project Title 1',
            serverLink: 'https://example.com/server1',
            clientLink: 'https://example.com/client1',
            liveSiteLink: 'https://example.com/live1',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            images: [
                'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-68148.jpg',
                'https://img.freepik.com/premium-photo/chinese-crested-dog-naked-dressed-jacket_558469-2751.jpg',
                'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-68148.jpg',
            ],
        },
        {
            name: 'Project 2',
            title: 'Project Title 2',
            serverLink: 'https://example.com/server2',
            clientLink: 'https://example.com/client2',
            liveSiteLink: 'https://example.com/live2',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            images: [
                'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-68148.jpg',
                'https://img.freepik.com/premium-photo/chinese-crested-dog-naked-dressed-jacket_558469-2751.jpg',
                'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-68148.jpg',
            ],
        },
        {
            name: 'Project 3',
            title: 'Project Title 3',
            serverLink: 'https://example.com/server3',
            clientLink: 'https://example.com/client3',
            liveSiteLink: 'https://example.com/live3',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            images: [
                'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-68148.jpg',
                'https://img.freepik.com/premium-photo/chinese-crested-dog-naked-dressed-jacket_558469-2751.jpg',
                'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-68148.jpg',
            ],
        },
    ];

    // console.log(projectData);
    // console.log(projectData[0]);
    console.log(projectData[0].images[0]);
    console.log(projectData[0].images[1]);
    console.log(projectData[0].images[2]);

    const scrollRef = useRef(null);

    const handleScroll = (e) => {
        const container = e.currentTarget;
        const scrollDistance = container.scrollHeight - container.offsetHeight;
        const scrollAmount = (scrollDistance / projectData.length) * 0.2;
        container.scrollBy(0, scrollAmount);
    };

    return (
        <div id='Projects' className="flex flex-wrap justify-center">
            {projectData.map((project, index) => (
                <div
                    key={index}
                    className="w-64 h-64 m-4 relative"
                    onMouseOver={handleScroll}
                    onMouseOut={() => {
                        scrollRef.current.scrollTo(0, 0);
                        scrollRef.current.querySelectorAll('.project-image').forEach((img) => {
                            img.style.transform = 'translateY(0)';
                        });
                    }}
                >
                    <div className="image-wrap" ref={scrollRef}>
                        {project.images.map((image, i) => (
                            <img
                                key={i}
                                className={`project-image transition-transform duration-500 ease-in-out`}
                                src={image}
                                alt={`Project ${index + 1} Image ${i + 1}`}
                                onMouseOver={(e) => {
                                    const imgElements = Array.from(e.target.parentElement.querySelectorAll('.project-image'));
                                    imgElements.forEach((img, idx) => {
                                        img.style.transform = `translateY(-${100 * idx}%)`;
                                    });
                                }}
                                onMouseOut={(e) => {
                                    const imgElements = Array.from(e.target.parentElement.querySelectorAll('.project-image'));
                                    imgElements.forEach((img) => {
                                        img.style.transform = 'translateY(0)';
                                    });
                                }}
                            />
                        ))}
                    </div>
                    <div className="bg-white p-4">
                        <h2 className="text-lg font-bold mb-2">{project.name}</h2>
                        <p className="text-gray-600 mb-2">{project.title}</p>
                        <div className="mb-4">
                            <h4 className="font-bold">Overview:</h4>
                            <ul className="list-disc list-inside">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <a href={project.serverLink} className="text-blue-500 hover:text-blue-700 mb-2">
                            Server Link
                        </a>
                        <a href={project.clientLink} className="text-blue-500 hover:text-blue-700 mb-2">
                            Client Link
                        </a>
                        <a href={project.liveSiteLink} className="text-blue-500 hover:text-blue-700">
                            Visit Website
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;

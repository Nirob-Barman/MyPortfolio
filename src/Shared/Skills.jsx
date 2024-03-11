import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiBootstrap, DiJava, DiCode, DiPython } from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiFigma, SiVercel, SiNetlify, SiFirebase, SiDjango, SiVisualstudiocode, SiGithub, SiGooglechrome, SiRender } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: DiHtml5 },
        { name: 'CSS', icon: DiCss3 },
        { name: 'JavaScript', icon: DiJavascript1 },
        { name: 'ES6', icon: DiJavascript1 },
        { name: 'React', icon: DiReact },
        { name: 'Node.js', icon: DiNodejsSmall },
        { name: 'MongoDB', icon: DiMongodb },
        { name: 'Express.js', icon: SiExpress },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Bootstrap', icon: DiBootstrap },
        { name: 'C', icon: DiCode },
        { name: 'C++', icon: DiCode },
        { name: 'Java', icon: DiJava },
        { name: 'Python', icon: DiPython },
        { name: 'Django', icon: SiDjango },
        { name: 'VS Code', icon: SiVisualstudiocode },
        { name: 'GitHub', icon: SiGithub },
        { name: 'Chrome DevTools', icon: SiGooglechrome },
        { name: 'Render', icon: SiRender },
        { name: 'Vercel', icon: SiVercel },
        { name: 'Netlify', icon: SiNetlify },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Figma', icon: SiFigma },
        { name: 'MERN', icon: DiMongodb },
    ];

    return (
        <div id='Skills' className="my-4">
            <h4 className="text-center mb-3 text-xl">Skills</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center justify-center transform transition duration-500 hover:scale-105">
                        <skill.icon className="text-4xl mb-2" />
                        <p className="text-center">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;


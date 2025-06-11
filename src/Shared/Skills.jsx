import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiBootstrap, DiCode, DiCodeBadge, DiMsqlServer, DiJqueryLogo } from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiFigma, SiVercel, SiNetlify, SiFirebase, SiVisualstudiocode, SiGithub, SiGooglechrome, SiRender, SiCsharp, SiDotnet, SiMysql, SiDaisyui, SiGit } from 'react-icons/si';
import { BiLogoCPlusPlus, BiLogoVisualStudio } from "react-icons/bi";
import { TbCircleLetterC } from "react-icons/tb";
import { FaGitlab } from "react-icons/fa";

const Skills = () => {
    const skills = [
        { name: 'C#', icon: SiCsharp },
        { name: '.NET', icon: SiDotnet },
        { name: 'ASP.NET MVC', icon: SiDotnet },
        { name: 'ASP.NET Core', icon: SiDotnet },
        { name: 'ASP.NET Web API', icon: DiCodeBadge },
        { name: 'REST API', icon: DiCodeBadge },
        { name: 'HTML', icon: DiHtml5 },
        { name: 'CSS', icon: DiCss3 },
        { name: 'JavaScript', icon: DiJavascript1 },
        { name: 'jQuery', icon: DiJqueryLogo },
        { name: 'ES6', icon: DiJavascript1 },
        { name: 'React', icon: DiReact },
        { name: 'Node.js', icon: DiNodejsSmall },
        { name: 'MongoDB', icon: DiMongodb },
        { name: 'Express.js', icon: SiExpress },
        { name: 'MSSQL', icon: DiMsqlServer },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Bootstrap', icon: DiBootstrap },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'DaisyUI', icon: SiDaisyui },
        { name: 'C', icon: TbCircleLetterC },
        { name: 'C++', icon: BiLogoCPlusPlus },
        // { name: 'Java', icon: DiJava },
        { name: 'Visual Studio', icon: BiLogoVisualStudio },
        { name: 'VS Code', icon: SiVisualstudiocode },
        { name: 'Git', icon: SiGit },
        { name: 'GitHub', icon: SiGithub },
        { name: 'GitLab', icon: FaGitlab },
        { name: 'Chrome DevTools', icon: SiGooglechrome },
        { name: 'Render', icon: SiRender },
        { name: 'Vercel', icon: SiVercel },
        { name: 'Netlify', icon: SiNetlify },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Figma', icon: SiFigma },
        { name: 'MERN', icon: DiMongodb },
        { name: 'Data Structures & Algorithms', icon: DiCodeBadge },
        { name: 'OOP', icon: DiCode },
    ];

    return (
        <div id='Skills' className="my-8 px-4">
            <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
                        <skill.icon className="text-5xl mb-3 text-blue-600" />
                        <p className="text-center text-lg font-semibold text-gray-700">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

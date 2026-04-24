import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiBootstrap, DiMsqlServer, DiJqueryLogo } from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiFirebase, SiVisualstudiocode, SiGithub, SiRender, SiCsharp, SiDotnet, SiMysql, SiDaisyui, SiGit, SiRedis, SiPostman, SiSwagger } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGitlab, FaServer } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const skillGroups = [
    {
        category: "Backend",
        skills: [
            { name: 'C#',               icon: SiCsharp },
            { name: '.NET',             icon: SiDotnet },
            { name: 'ASP.NET Core',     icon: SiDotnet },
            { name: 'ASP.NET MVC',      icon: SiDotnet },
            { name: 'ASP.NET Web API',  icon: TbApi },
            { name: 'REST API',         icon: TbApi },
            { name: 'Node.js',          icon: DiNodejsSmall },
            { name: 'Express.js',       icon: SiExpress },
        ],
    },
    {
        category: "Frontend",
        skills: [
            { name: 'HTML',         icon: DiHtml5 },
            { name: 'CSS',          icon: DiCss3 },
            { name: 'JavaScript',   icon: DiJavascript1 },
            { name: 'React',        icon: DiReact },
            { name: 'jQuery',       icon: DiJqueryLogo },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'Bootstrap',    icon: DiBootstrap },
            { name: 'DaisyUI',      icon: SiDaisyui },
        ],
    },
    {
        category: "Databases",
        skills: [
            { name: 'SQL Server', icon: DiMsqlServer },
            { name: 'MySQL',      icon: SiMysql },
            { name: 'MongoDB',    icon: DiMongodb },
            { name: 'Redis',      icon: SiRedis },
        ],
    },
    {
        category: "Tools & DevOps",
        skills: [
            { name: 'Visual Studio', icon: BiLogoVisualStudio },
            { name: 'VS Code',       icon: SiVisualstudiocode },
            { name: 'Git',           icon: SiGit },
            { name: 'GitHub',        icon: SiGithub },
            { name: 'GitLab',        icon: FaGitlab },
            { name: 'Postman',       icon: SiPostman },
            { name: 'Swagger',       icon: SiSwagger },
            { name: 'IIS',           icon: FaServer },
            { name: 'Firebase',      icon: SiFirebase },
            { name: 'Render',        icon: SiRender },
        ],
    },
];

const Skills = () => {
    return (
        <div id="Skills" className="py-12">
            <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">Skills</h2>
            <div className="space-y-8">
                {skillGroups.map((group) => (
                    <div key={group.category}>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 pl-1">
                            {group.category}
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                            {group.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-md hover:border-blue-200 transition-all duration-200"
                                >
                                    <skill.icon className="text-3xl mb-1.5 text-blue-600" />
                                    <p className="text-center text-xs font-medium text-gray-700 leading-tight">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

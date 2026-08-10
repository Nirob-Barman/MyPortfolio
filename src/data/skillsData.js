import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiBootstrap, DiMsqlServer, DiJqueryLogo } from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiFirebase, SiVisualstudiocode, SiGithub, SiRender, SiCsharp, SiDotnet, SiMysql, SiDaisyui, SiGit, SiRedis, SiPostman, SiSwagger, SiDocker } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGitlab, FaServer, FaCode } from "react-icons/fa";
import { TbApi, TbDatabaseCog } from "react-icons/tb";

export const skillGroups = [
    {
        category: "Backend",
        skills: [
            { name: 'C#',               icon: SiCsharp },
            { name: '.NET',             icon: SiDotnet },
            { name: 'ASP.NET Core',     icon: SiDotnet },
            { name: 'ASP.NET MVC',      icon: SiDotnet },
            { name: 'ASP.NET Web API',  icon: TbApi },
            { name: 'Entity Framework Core', icon: TbDatabaseCog },
            { name: 'LINQ',             icon: FaCode },
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
            // { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'MySQL',      icon: SiMysql },
            // { name: 'MongoDB',    icon: DiMongodb },
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
            { name: 'Docker',        icon: SiDocker },
            { name: 'Postman',       icon: SiPostman },
            { name: 'Swagger',       icon: SiSwagger },
            { name: 'IIS',           icon: FaServer },
            { name: 'Firebase',      icon: SiFirebase },
            { name: 'Render',        icon: SiRender },
        ],
    },
];

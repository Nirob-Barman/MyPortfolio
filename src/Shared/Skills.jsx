import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { skillGroups } from '../data/skillsData';

const Skills = () => {
    return (
        <div id="Skills" className="py-12">
            <SectionHeading title="Skills" subtitle="Technologies I use to design, build, and ship backend-driven applications." />
            <div className="space-y-8">
                {skillGroups.map((group) => (
                    <AnimatedSection key={group.category}>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 pl-1">
                            {group.category}
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                            {group.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group flex flex-col items-center bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-200"
                                >
                                    <skill.icon className="text-3xl mb-1.5 text-blue-600 transition-transform duration-200 group-hover:scale-110" />
                                    <p className="text-center text-xs font-medium text-gray-700 leading-tight">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default Skills;

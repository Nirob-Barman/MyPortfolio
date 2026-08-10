import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { educationData } from '../data/educationData';

const Education = () => {
    return (
        <div id="Education" className="py-12">
            <SectionHeading title="Education" />
            <div className="relative border-l-2 border-blue-500 ml-4 md:ml-8 space-y-8">
                {educationData.map((edu, index) => (
                    <AnimatedSection key={index} className="relative pl-8">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow" />
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                                <span className="text-sm text-gray-500 whitespace-nowrap">{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-blue-600 font-semibold">{edu.institution}</span>
                                {edu.board && (
                                    <span className="text-xs text-gray-500">— {edu.board}</span>
                                )}
                            </div>
                            <span className="inline-block text-sm font-semibold text-green-600 bg-green-50 border border-green-200 px-3 py-0.5 rounded-full">
                                {edu.result}
                            </span>
                            {edu.details && (
                                <p className="text-sm text-gray-500 mt-3 leading-relaxed">{edu.details}</p>
                            )}
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default Education;

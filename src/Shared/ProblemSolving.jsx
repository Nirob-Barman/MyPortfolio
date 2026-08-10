import { problemSolvingProfiles } from '../data/problemSolvingData';

const ProblemSolving = () => {
    return (
        <section id="ProblemSolving" className="my-16">
            <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Explore My Competitive Programming Profiles</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {problemSolvingProfiles.map((profile, index) => (
                    <a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 shadow-md transition-transform hover:scale-105 hover:shadow-2xl"
                    >
                        <profile.icon className="text-5xl mb-3 text-blue-600" />
                        <span className="text-lg font-semibold text-gray-800">{profile.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ProblemSolving;

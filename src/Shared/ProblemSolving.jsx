import { FaGlobe } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef, SiHackerrank, SiHackerearth } from "react-icons/si";

const profiles = [
    { name: "LeetCode", url: "https://leetcode.com/u/nirob-barman-19/", icon: <SiLeetcode /> },
    { name: "Codeforces", url: "https://codeforces.com/profile/rsnirob", icon: <SiCodeforces /> },
    { name: "CodeChef", url: "https://www.codechef.com/users/nirob_barman", icon: <SiCodechef /> },
    { name: "UVa Online Judge", url: "https://uhunt.onlinejudge.org/id/966628", icon: <FaGlobe /> },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/Nirob_Barman", icon: <SiHackerrank /> },
    { name: "HackerEarth", url: "https://www.hackerearth.com/@nirob.barman", icon: <SiHackerearth /> },
];

const ProblemSolving = () => {
    return (
        <section id="ProblemSolving" className="my-16">
            <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Explore My Competitive Programming Profiles</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {profiles.map((profile, index) => (
                    <a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 shadow-md transition-transform hover:scale-105 hover:shadow-2xl"
                    >
                        <span className="text-5xl mb-3 text-blue-600">{profile.icon}</span>
                        <span className="text-lg font-semibold text-gray-600">{profile.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ProblemSolving;

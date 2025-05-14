import certifications from '../data/certifications';

const Certifications = () => {
    return (
        <div id="Certifications" className="my-16">
            <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Certifications & Courses</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {/* {certifications */}
                {[...certifications]
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((cert, index) => (
                        <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
                        {/* <img src={cert.image} alt={cert.organization} className="h-10 mx-auto mb-4" /> */}
                        <h3 className="text-xl font-semibold text-gray-900 truncate" title={cert.title}>{cert.title}</h3>
                        <p className="text-gray-600">{cert.organization}</p>
                        <p className="text-sm text-gray-500">{cert.date}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Certifications;

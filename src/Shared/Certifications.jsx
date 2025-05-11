const Certifications = () => {
    const certifications = [
        {
            title: 'Introduction to C#',
            organization: 'Sololearn',
            date: 'April 2025',
            link: 'https://www.sololearn.com/certificates/CC-QKD9H3WG',
            // image: 'https://drive.google.com/uc?export=view&id=1_E6ztHQv5TXNsB6XHC9WlinevQna15do'
        },
        {
            title: 'C# Intermediate',
            organization: 'Sololearn',
            date: 'April 2025',
            link: 'https://www.sololearn.com/certificates/CC-9JUPIAAV',
            // image: 'https://drive.google.com/uc?export=view&id=1_E6ztHQv5TXNsB6XHC9WlinevQna15do'
        },
        {
            title: 'CSE Fundamentals With Phitron',
            organization: 'Phitron',
            date: 'April 2024',
            link: 'https://phitron.io/verification?validationNumber=PHBATCH361409881089',
            // image: 'https://drive.google.com/uc?export=view&id=1_E6ztHQv5TXNsB6XHC9WlinevQna15do'
        },
        {
            title: 'Complete Web Development',
            organization: 'Programming Hero',
            date: 'September 2023',
            link: 'https://drive.google.com/file/d/1AnEjc8O-wS1qzeLE0KxwsPy62apStK1N/view?usp=drive_link',
            // image: 'https://drive.google.com/uc?export=view&id=1_E6ztHQv5TXNsB6XHC9WlinevQna15do'
        },
        {
            title: 'Introduction to ASP.Net',
            organization: 'Simplilearn',
            date: 'April 2025',
            link: 'https://simpli-web.app.link/e/X4yqofJmhTb',
            // image: 'https://drive.google.com/uc?export=view&id=1_E6ztHQv5TXNsB6XHC9WlinevQna15do'
        },
        {
            title: 'Introduction to jQuery',
            organization: 'Simplilearn',
            date: 'November 2024',
            link: 'https://simpli-web.app.link/e/XaOjgsSmhTb',
            // image: 'https://drive.google.com/uc?export=view&id=1_E6ztHQv5TXNsB6XHC9WlinevQna15do'
        },
    ];

    return (
        <div id="Certifications" className="my-16">
            <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Certifications & Courses</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert, index) => (
                    <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="block p-6 bg-gray-100 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
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

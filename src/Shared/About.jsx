import AnimatedSection from '../components/AnimatedSection';

const About = () => {
    return (
        <div id="About" className="py-12">
            <AnimatedSection className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    I&rsquo;m a <span className="font-semibold text-blue-600">.NET developer</span> with{' '}
                    <span className="font-semibold">2 years</span> of professional experience
                    specializing in <span className="font-semibold">ASP.NET Core Web APIs</span>, <span className="font-semibold">ASP.NET MVC</span>,
                    and <span className="font-semibold">Clean Architecture</span>. I most recently worked as an
                    IMSS Specialist Engineer at <span className="font-semibold">SoftifyBD</span>, where I built and maintained
                    production backend systems for <span className="font-semibold">ISP Digital</span> — a multi-tenant SaaS platform
                    serving enterprise ISP clients, live for 7+ years.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    My backend work there included designing multi-tenant ASP.NET Core APIs, building microservice modules with
                    independent deployment pipelines, integrating third-party hardware APIs
                    (MikroTik RouterOS, OLT devices for real-time network monitoring), and managing
                    SQL Server and Windows Server / IIS environments.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                    Beyond that, I build full-stack projects applying Clean Architecture, the Repository / Unit of Work pattern,
                    Redis caching, and multi-gateway payment integration. Code quality is a default,
                    not an afterthought — layered separation, <span className="font-semibold">Result&lt;T&gt;</span> patterns,
                    and service abstraction are built in from the start.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    I hold a <span className="font-semibold">B.Sc in Computer Science & Engineering</span> (CGPA 3.54 / 4.00)
                    and have a background in competitive programming across LeetCode, Codeforces, and HackerRank.
                </p>
            </AnimatedSection>
        </div>
    );
};

export default About;

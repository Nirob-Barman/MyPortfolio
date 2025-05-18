import { Link } from "react-router-dom";
// import blogsData from "../data/blogsData";
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        fetch('https://my-portfolio-api-lake.vercel.app/blogs')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch blogs');
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []); // Runs once when Blogs is rendered

    if (loading) return <p className="text-center text-white">Loading blogs...</p>;
    if (error) return <p className="text-center text-red-400">Error: {error}</p>;

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center my-12 text-gray-200">Thoughts, Tutorials & Insights</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* {blogsData */}
                    {[...blogs]
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((blog, index) => (
                            <a key={index} href={blog.link} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transform hover:scale-105 hover:rotate-3d transition duration-300">
                                <h3 className="text-2xl font-semibold mb-3">{blog.title}</h3>
                                <p className="text-gray-400 mb-2">{blog.date}</p>
                                <p className="text-gray-300 mb-4">{blog.description}</p>
                                <span className="text-blue-400 hover:text-blue-300">Read More →</span>
                            </a>
                        ))}
                </div>
                <div className="my-12 text-center">
                    <Link to="/" className="text-gray-400 hover:text-gray-200">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

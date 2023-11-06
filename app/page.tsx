import Link from 'next/link';
import GetBlogMocks from '@/components/Service/GetBlogMocks';
import BlogPreiew from '@/components/BlogPreview';

const Home = ()=> {
    const blog = GetBlogMocks();
    const blogList = blog.map((blog) => (
        <BlogPreiew key={blog.slug} {...blog}/>
    ));

 return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{blogList}</div>;
};
export default Home;
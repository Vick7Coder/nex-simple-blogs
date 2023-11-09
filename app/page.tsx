import GetBlogMocks from '@/components/Service/GetBlogMocks';
import BlogPreiew from '@/components/BlogPreview';

const Home = () => {
    const blog = GetBlogMocks();
    const blogList = blog.map((blog) => (
        <BlogPreiew key={blog.slug} {...blog} />
    ));

    return (
        <main className="px-6 mx-auto">
            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                Bài viết mới nhất của nhà &nbsp;
                <span className="whitespace-nowrap">
                    <span className="font-bold">NEX</span>
                </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
                {blogList}
            </div>
        </main>
    );
};
export default Home;
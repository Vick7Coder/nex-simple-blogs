import GetBlogMocks from '@/components/Service/GetBlogMocks';
import GetBlogs from '@/components/Service/GetBlogs';
import Markdown from 'markdown-to-jsx'



export const generateStaticParams = async() => {
    const blogs = GetBlogMocks();
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
};

const BlogDetails = (props: any) => {
    const slug = props.params.slug;
    const detail = GetBlogs(slug);
    return (
        <div>
        <div className="my-12 text-center">
          <h1 className="text-3xl text-border text-green-950 ">{detail.data.title}</h1>
          <p className="text-slate-400 mt-2">{detail.data.date}</p>
        </div>
  
        <article className="prose">
          <Markdown>{detail.content}</Markdown>
        </article>
      </div>
    );
};

export default BlogDetails;
import fs from 'fs';
import matter from 'gray-matter';
import { BlogModel } from '@/components/Model/BlogModel';
const GetBlogMocks = (): BlogModel[] => {
    const folder = "mocks/";
    const files = fs.readdirSync(folder);
    const makdownBlogs = files.filter((file) => file.endsWith(".md") );
    const blogs = makdownBlogs.map((fileName) => {
        const fileContents = fs.readFileSync(`mocks/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
          title: matterResult.data.title,
          date: matterResult.data.date,
          subtitle: matterResult.data.subtitle,
          slug: fileName.replace(".md", ""),
        };
      });
      return blogs;
}
;
export default GetBlogMocks;
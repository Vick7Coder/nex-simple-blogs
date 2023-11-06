import fs from 'fs';
import matter from "gray-matter";
const GetBlogs = (slug: string) => {
    const folder = "mocks/";
    const file = `${folder}${slug}.md`;
    const matterResult = matter(fs.readFileSync(file, "utf8"));
    return matterResult;
};
export default GetBlogs;
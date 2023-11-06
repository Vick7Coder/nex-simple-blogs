import { BlogModel } from "./Model/BlogModel";
import Link from "next/link";

const BlogPreiew = (props: BlogModel) => {
    return (
        <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <p className="text-sm text-slate-400">{props.date}</p>

      <Link href={`/blogs/${props.slug}`}>
        <h2 className=" text-green-900 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
    );

};
export default BlogPreiew;
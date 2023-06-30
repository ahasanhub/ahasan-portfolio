import Link from "next/link";
const PostPreview = (props) => {
    return <div className="border border-violet-800 p-4 rounded-md shadow-md">
        <Link href={`/posts/${props.slug}`}>
            <h1 className="font-bold text-violet-900 hover:underline">{props.title}</h1>
        </Link>
        <p className="text-sm text-slate-400">{props.date}</p>
        <p className="text-slate-400">{props.subtitle}</p>
    </div>;
}
export default PostPreview;
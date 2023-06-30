import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

export default function BlogPage() {
    const postMetadata = getPostMetadata();
    const postPreview = postMetadata.map((post) =>
        <PostPreview key={post.slug}{...post}></PostPreview>);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreview}</div>
    );
}


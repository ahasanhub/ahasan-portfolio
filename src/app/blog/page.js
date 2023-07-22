import {getPostMetadata} from "@/utils/getPostMetadata";
import PostPreview from "@/components/PostPreview";


export default function BlogPage() {
    const postMetadata = getPostMetadata();
    const postPreview = postMetadata.map((post,index) =>
        <PostPreview key={index} post={post}></PostPreview>);
    return (
        // <div className="mx-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">{postPreview}</div>
        <section id="featured-posts" className="grid  sm:grid-cols-2 gap-4 p-2">
            <h2 className="col-span-full text-3xl md:text-4xl mb-8 border-l-4   border-blue-800 pl-2   my-4 text-blue-800 ">Featured posts</h2>
             {postPreview}    
         </section>
    );
}


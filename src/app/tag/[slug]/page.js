import getTags from "@/utils/getTags";

export const generateStaticParams = async () => {
    const tags = getTags();
    return tags.map((tag) => ({ slug: tag }));
}

const TagPage=({params})=>{
    const slug = params.slug;
    const postMetadata = getPostMetadataByTag(slug);
    const postPreview = postMetadata.map((post,index) =>
        <PostPreview key={index} post={post}></PostPreview>);
    return (        
        <section id="featured-posts" className="grid  sm:grid-cols-2 gap-4 p-2">
            <h2 className="col-span-full text-3xl md:text-4xl mb-8 border-l-4   border-blue-800 pl-2   my-4 text-blue-800 ">Featured tags : {slug}</h2>
             {postPreview}    
         </section>
    );
}
export default CategoryPage;
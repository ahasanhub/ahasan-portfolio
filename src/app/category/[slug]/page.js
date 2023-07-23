import {getPostMetadataByCategory } from "@/utils/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import getCategories from "@/utils/getCategories";

export const generateStaticParams = async () => {
    const categories = getCategories();    
    return categories.map((category) => ({ slug: category }));
}

const CategoryPage=({params})=>{
    const slug = params.slug;    
    const postMetadata = getPostMetadataByCategory(slug);
    
    const postPreview = postMetadata.map((post,index) =>
        <PostPreview key={index} post={post}></PostPreview>);
    return (        
        <section id="featured-posts" className="grid  sm:grid-cols-2 gap-4 p-2">
            <h2 className="col-span-full text-3xl md:text-4xl mb-8 border-l-4   border-blue-800 pl-2   my-4 text-blue-800 ">Category: {slug}</h2>
             {postPreview}    
         </section>
    );
}
export default CategoryPage;
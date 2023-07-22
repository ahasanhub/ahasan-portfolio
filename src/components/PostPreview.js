"use client"
import Image  from "next/image";
import profilePic from 'public/images/site/profile-img.jpg'
import { slugify } from "@/utils/common";
import { useRouter } from 'next/navigation'
import Link from "next/link";
const PostPreview = ({post}) => {
    const router = useRouter();
    
    return (    
    <div className="grid lg:grid-cols-2 border rounded-lg gap-4 h-auto p-4 shadow-md">
        <Image src={post.frontmatter.image} width={500} height={300} quality={100} alt="placeholder img"/>
                 {/* <div className="max-w-2xl  h-auto  flex items-center relative ">
                     <Image src={post.frontmatter.image} width={200} height={200} quality={100} alt="placeholder img"/>
                     <div className="bg-green-400  w-24 pt-1  h-8 text-gray-50 font-semibold text-center absolute top-0">
                         Javascript
                     </div>
                 </div> */}
                 <div >
                    <Link href={`/posts/${post.slug}`}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 ">{post.frontmatter.title}</h3>
                    </Link>
                     
                     <div className="flex gap-2 mb-2">
                         
                         <Image className="h-9 w-9 rounded-full border border-slate-300" src={profilePic} alt="Profile pic" />  
                         <div className="text-sm text-gray-600">
                             <h4>By Ahasan Habib</h4>
                             <h4>{post.frontmatter.date}</h4>
                         </div>
                     </div>
                     <p className="text-gray-700">{post.frontmatter.subtitle}</p> 
                     {
                        post.frontmatter.categories.map(category=>{
                            const slug = slugify(category)
                            return (<Link href={`/category/${slug}`}><button className="px-1 border">{slug}</button></Link> )
                        }
                            
                    )
                     }                    
                     <button onClick={()=>router.push(`/posts/${post.slug}`)} className="py-2 border px-4  rounded-lg mt-3 outline-none  text-sm font-medium bg-blue-200 hover:bg-blue-500 focus:outline-none focus-visible:ring-2">Read More</button>
                 </div>
             </div>
    )
    
}
export default PostPreview;
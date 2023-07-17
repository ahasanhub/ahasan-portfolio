"use client"
import Image  from "next/image";
import bp from "/public/images/thumbnail/npm-commands.png"
import profilePic from '/public/img/profile-img.jpg'
import { useRouter } from 'next/navigation'
import Link from "next/link";
const PostPreview = (props) => {
    const router = useRouter();
    return (
    // <div className="border border-violet-800 p-4 rounded-md shadow-md">
    //     <Link href={`/posts/${props.slug}`}>
    //         <h1 className="font-bold text-violet-900 hover:underline">{props.title}</h1>
    //     </Link>
    //     <p className="text-sm text-slate-400">{props.date}</p>
    //     <p className="text-slate-400">{props.subtitle}</p>
    // </div>
    <div class="grid lg:grid-cols-2 border rounded-lg gap-4 h-auto p-4 shadow-md">
                 <div class="max-w-2xl  h-auto  flex items-center relative ">
                     <Image src={bp} full quality={100} alt="placeholder img"/>
                     <div class="bg-green-400  w-24 pt-1  h-8 text-gray-50 font-semibold text-center absolute top-0">
                         Javascript
                     </div>
                 </div>
                 <div class="">
                    <Link href={`/posts/${props.slug}`}>
                    <h3 class="text-2xl font-bold text-gray-800 mb-2 ">{props.title}</h3>
                    </Link>
                     
                     <div class="flex gap-2 mb-2">
                         {/* <div class="w-10 h-10 rounded-full bg-gray-300"></div> */}
                         <Image className="h-9 w-9 rounded-full border border-slate-300" src={profilePic} alt="" />  
                         <div class="text-sm text-gray-600">
                             <h4>By Ahasan Habib</h4>
                             <h4>{props.date}</h4>
                         </div>
                     </div>
                     <p class="text-gray-700">{props.subtitle}</p>                     
                     <button onClick={()=>router.push(`/posts/${props.slug}`)} class="py-2 border px-4  rounded-lg mt-3 outline-none  text-sm font-medium bg-blue-200 hover:bg-blue-500 focus:outline-none focus-visible:ring-2">Read More</button>
                 </div>
             </div>
    )
    
}
export default PostPreview;
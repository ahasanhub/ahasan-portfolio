"use client"
import Image  from "next/image";
import bp from "/public/images/thumbnail/npm-commands.png"
const ContactPage = () => {
    return (
<section id="featured-posts" class="grid  sm:grid-cols-2 gap-4 p-2">
            <h2 class="col-span-full text-3xl md:text-4xl mb-8 border-l-4   border-blue-800 pl-2   my-4 text-blue-800 ">Featured posts</h2>
             <div class="grid lg:grid-cols-2 border rounded-lg gap-4 h-auto p-4">
                 <div class="max-w-2xl  h-auto  flex items-center relative ">
                     <img src="img/aaa.png" class="w-full h-auto" alt="placeholder img"/>
                     <div class="bg-blue-400  w-24 pt-1  h-8 text-gray-50 font-semibold text-center absolute top-0">
                         Javascript
                     </div>
                 </div>
                 <div class="">
                     <h3 class="text-2xl font-bold text-gray-800 mb-2 cursor-pointer ">How to create tailwind Template</h3>
                     <div class="flex gap-2 mb-2">
                         <div class="w-10 h-10 rounded-full bg-gray-300"></div>
                         <div class="text-sm text-gray-600">
                             <h4>By Sarthak Kaushik</h4>
                             <h4>Updated over 2 weeks ago</h4>
                         </div>
                     </div>
                     <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sit dolores aspernatur doloremque quis neque quo cupiditate id obcaecati qui. Magnam magni natus voluptas laboriosam ad iste, praesentium explicabo aliquid?</p>
                     <button class="py-2 border px-4 w-full bg-blue-500 text-gray-50 rounded-lg mt-3 outline-none focus:outline-none hover:bg-blue-600 hover:text-gray-100">Read More</button>
                 </div>
             </div>
 
             <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 border rounded-lg gap-4 h-auto p-4">
                 <div class="max-w-2xl  h-auto  flex items-center relative ">
                     <img src="img/aaa.png" class="w-full h-auto" alt="placeholder img"/>
                     <div class="bg-green-400  w-24 pt-1  h-8 text-gray-50 font-semibold text-center absolute top-0">
                         Python
                     </div>
                 </div>
                 <div class="">
                     <h3 class="text-2xl font-bold text-gray-800 mb-2 cursor-pointer ">How to create tailwind Template</h3>
                     <div class="flex gap-2 mb-2">
                         <div class="w-10 h-10 rounded-full bg-gray-300"></div>
                         <div class="text-sm text-gray-600">
                             <h4>By Sarthak Kaushik</h4>
                             <h4>Updated over 2 weeks ago</h4>
                         </div>
                     </div>
                     <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sit dolores aspernatur doloremque quis neque quo cupiditate id obcaecati qui. Magnam magni natus voluptas laboriosam ad iste, praesentium explicabo aliquid?</p>
                     <button class="py-2 border px-4 w-full bg-blue-500 text-gray-50 rounded-lg mt-3 outline-none focus:outline-none hover:bg-blue-600 hover:text-gray-100">Read More</button>
                 </div>
             </div>
 
             <div class="grid lg:grid-cols-2 border rounded-lg gap-4 h-auto p-4">
                 <div class="max-w-2xl  h-auto  flex items-center relative ">
                     <img src="img/aaa.png" class="w-full h-auto" alt="placeholder img"/>
                     <div class="bg-blue-400  w-24 pt-1  h-8 text-gray-50 font-semibold text-center absolute top-0">
                         Javascript
                     </div>
                 </div>
                 <div class="">
                     <h3 class="text-2xl font-bold text-gray-800 mb-2 cursor-pointer ">How to create tailwind Template</h3>
                     <div class="flex gap-2 mb-2">
                         <div class="w-10 h-10 rounded-full bg-gray-300"></div>
                         <div class="text-sm text-gray-600">
                             <h4>By Sarthak Kaushik</h4>
                             <h4>Updated over 2 weeks ago</h4>
                         </div>
                     </div>
                     <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sit dolores aspernatur doloremque quis neque quo cupiditate id obcaecati qui. Magnam magni natus voluptas laboriosam ad iste, praesentium explicabo aliquid?</p>
                     <button class="py-2 border px-4 w-full bg-blue-500 text-gray-50 rounded-lg mt-3 outline-none focus:outline-none hover:bg-blue-600 hover:text-gray-100">Read More</button>
                 </div>
             </div>
 
             <div class="grid lg:grid-cols-2 border rounded-lg gap-4 h-auto p-4">
                 <div class="max-w-2xl  h-auto  flex items-center relative ">
                     <img src="img/aaa.png" class="w-full h-auto" alt="placeholder img"/>
                     <div class="bg-red-400  w-24 pt-1  h-8 text-gray-50 font-semibold text-center absolute top-0">
                         CSS
                     </div>
                 </div>
                 <div class="">
                     <h3 class="text-2xl font-bold text-gray-800 mb-2 cursor-pointer ">How to create tailwind Template</h3>
                     <div class="flex gap-2 mb-2">
                         <div class="w-10 h-10 rounded-full bg-gray-300"></div>
                         <div class="text-sm text-gray-600">
                             <h4>By Sarthak Kaushik</h4>
                             <h4>Updated over 2 weeks ago</h4>
                         </div>
                     </div>
                     <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sit dolores aspernatur doloremque quis neque quo cupiditate id obcaecati qui. Magnam magni natus voluptas laboriosam ad iste, praesentium explicabo aliquid?</p>
                     <button class="py-2 border px-4 w-full bg-blue-500 text-gray-50 rounded-lg mt-3 outline-none focus:outline-none hover:bg-blue-600 hover:text-gray-100">Read More</button>
                 </div>
             </div>
             
            
            
         </section>
    );

}

export default ContactPage;
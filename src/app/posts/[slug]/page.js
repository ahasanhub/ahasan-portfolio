import path from 'path';
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/utils/getPostMetadata';
import Image from 'next/image'
import profilePic from '/public/images/site/profile-img.jpg'



const getPost = (slug) => {
    const folder = path.join(process.cwd(), 'src/posts/');
    const file = `${folder}${slug}.md`;
    const markdownWithMeta = fs.readFileSync(file, "utf-8");    
    return matter(markdownWithMeta);
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({ slug: post.slug }));
}

const PostPage = ({params}) => {  
    const slug = params.slug;
    const post = getPost(slug);   
    return (
        <div className='mx-12 mt-6' >
            <h3 style={{ fontSize: 40, fontWeight: 'bold' }}>{post.data.title}</h3>
            <div className="relative mt-1 flex items-center gap-x-4">
                <Image src={profilePic} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Ahasan Habib
                    </a>
                  </p>
                  <p className="text-gray-600">{post.data.date}</p>
                </div>
              </div>
            <article className="prose lg:prose-xl">
              <div className='m-3'>
                   <Image src={post.data.image} width={700} height={600} quality={100} alt="placeholder img"/>
              </div>
              
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
}
export default PostPage;
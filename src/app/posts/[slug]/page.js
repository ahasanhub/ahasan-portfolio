import path from 'path';
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';

const getPost = (slug) => {
    const folder = path.join(process.cwd(), 'src/posts/');
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf-8");
    return matter(content);
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({ slug: post.slug }));
}

const PostPage = (props) => {
    const slug = props.params.slug;
    const post = getPost(slug);
    return (
        <div className='mx-6 mt-6'>
            <h3 style={{ fontSize: 40, fontWeight: 'bold' }}>{post.data.title}</h3>
            <article className="prose lg:prose-xl">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
}
export default PostPage;
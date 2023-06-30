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
        <div>
            <h1>{post.data.title}</h1>
            <article class="prose lg:prose-xl">
                <Markdown>{post.content}</Markdown>
            </article>

        </div>
    );
}
export default PostPage;
import fs from "fs";
import matter from "gray-matter";
import path from 'path';

const getPostMetadata = () => {
    const folder = path.join(process.cwd(), 'src/posts');
    //Get files from posts directory
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));

    const tempPosts = markdownPosts.map((fileName => {
        const slug= fileName.replace(".md", "");
        const markdownWithMeta = fs.readFileSync(`${folder}/${fileName}`, 'utf-8');
        const {data:frontmatter} = matter(markdownWithMeta);
        if(frontmatter.draft===false)
        {
            return {
            slug,
            frontmatter,
            }
        }
        else
        {
            return null
        }
        // return {
        //     title: matterResult.data.title,
        //     date: matterResult.data.date,
        //     subtitle: matterResult.data.subtitle,
        //     slug: fileName.replace(".md", "")
        // };
    }));
    const posts=tempPosts.filter(post=> post!==null);
    return posts;
}
export default getPostMetadata;
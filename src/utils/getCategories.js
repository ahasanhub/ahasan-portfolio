import fs from "fs";
import matter from "gray-matter";
import path from 'path';

const getCategories = () => {
    const folder = path.join(process.cwd(), 'src/posts');
    //Get files from posts directory
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));
    const tempStorage=[];

     markdownPosts.forEach((fileName => {
        //const slug= fileName.replace(".md", "");
        const markdownWithMeta = fs.readFileSync(`${folder}/${fileName}`, 'utf-8');
        const {data:frontmatter} = matter(markdownWithMeta);
        if(frontmatter.draft===false)
        {
             tempStorage.concat(frontmatter.categories);
        }       
    }));
    const categories = tempStorage.filter((value, index, array) => array.indexOf(value) === index);
    //const posts=tempPosts.filter(post=> post!==null);
    return categories;
}

export default getCategories;
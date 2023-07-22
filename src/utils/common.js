export function slugify(title){
    return title.toLowerCase().trim().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}
export function sortByDate(a, b) {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}
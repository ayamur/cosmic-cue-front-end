import styles from './BlogList.modules.css'
import BlogCard from "../../components/BlogCard/BlogCard"

const BlogList = (props) => {
  return (
    <>
      <main className={styles.container}>
        {props.blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}/>
        ))}
        <h4>Blog List</h4>
      </main>
    </>
  )
}

export default BlogList
import styles from './BlogList.module.css'

const BlogList = (props) => {
  return (
    <main className={styles.container}>
      {props.blogs.map((blog) => (
        <div key={blog._id}>
          {blog.title}
        </div>
      ))}
    </main>
  )
}

export default BlogList
import styles from './BlogList.modules.css'

const BlogList = (props) => {
  return (
    <>
      <main className={styles.container}>
        {props.blogs.map((blog) => (
          <div key={blog._id}>
            {blog.title}
          </div>
        ))}
        <h4>Blog List</h4>
      </main>
    </>
  )
}

export default BlogList
import styles from './BlogList.module.css'
import BlogCard from '../../components/BlogCard/BlogCard'
import { Link } from 'react-router-dom'

const BlogList = (props) => {
  return (
    <>
      <Link to='/blogs/new'>
        <button>CLICK HERE TO ADD YOUR MANIFESTATION TO THE POSITIVITY BOARD</button></Link>
      <div className={styles.blogsInfo}>
        <h1>POSITIVITY BOARD 🌙 </h1>
        <h4>Post your manifestations and positve affirmations</h4></div>

      <div className={styles.container}>
        {props.blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </>
  )
}

export default BlogList
import styles from './BlogList.module.css'
import BlogCard from '../../components/BlogCard/BlogCard'
import { Link } from 'react-router-dom'

const BlogList = (props) => {
  // console.log(props.blog, "PROPS DOT BLOG")
  return (
    <>
    <Link to='/blogs/new'>Add your own Manifestation!</Link>
    <main className={styles.container}>
      {props.blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </main>
    </>
  )
}

export default BlogList
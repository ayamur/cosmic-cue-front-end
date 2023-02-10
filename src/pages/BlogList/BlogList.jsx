import styles from './BlogList.module.css'
import BlogCard from '../../components/BlogCard/BlogCard'
import { Link } from 'react-router-dom'

const BlogList = (props) => {
  return (
    <>
    <Link to='/blogs/new'>
      <button>Click Here to Add Your Manifestation</button></Link>
    
    <main className={styles.container}>
      {props.blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </main>
    </>
  )
}

export default BlogList
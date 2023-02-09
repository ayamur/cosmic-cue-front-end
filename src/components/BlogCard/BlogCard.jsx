import { Link } from 'react-router-dom'
import styles from './BlogCard.module.css'

// Components
import AuthorInfo from '../AuthorInfo/AuthorInfo'

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{blog.author.name}</h1>
          </span>
          <AuthorInfo content={blog} />
        </header>
        <p>{blog.content}</p>
      </article>
    </Link>
  )
}

export default BlogCard
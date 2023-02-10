import { Link } from 'react-router-dom'
import styles from './BlogCard.module.css'

// Components
import AuthorInfo from '../AuthorInfo/AuthorInfo'

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.main}>
      <Link to={`/blogs/${blog._id}`}>
        <article className={styles.container} key={blog._id}>
          <header>
            <AuthorInfo content={blog} />
            <span>
              <h1>{blog.author?.name}</h1>
            </span>
          </header>
          <p>{blog.content}</p>
        </article>
      </Link>

    </div>
  )
}

export default BlogCard
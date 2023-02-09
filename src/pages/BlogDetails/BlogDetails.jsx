import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './BlogDetails.module.css'
import { Link } from 'react-router-dom'

// Services
import * as blogService from '../../services/blogService'

// Components
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'

const BlogDetails = (props) => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  useEffect(() => {
    const fetchBlog = async () => {
      const data = await blogService.show(id)
      setBlog(data)
    }
    fetchBlog()
  }, [id])

  if (!blog) return 'Loading....Please Wait.'

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>{blog.author.name}</h1>
          <span>
            <AuthorInfo content={blog} />
            {blog.author._id === props.user.profile &&
              <>
                <Link to={`/blogs/${id}/edit`} state={blog}>Edit</Link>
      <button onClick={() => props.handleDeleteBlog(id)}>Delete</button>
    </>
  }
</span>
        </header>
        <p>{blog.content}</p>
      </article>
    </main>
  )
}

export default BlogDetails
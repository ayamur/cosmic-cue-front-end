import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './BlogDetails.module.css'

// Services
import * as blogService from '../../services/blogService'

// Components
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'

const BlogDetails = (props) => {
  const { id } = useParams()
  const [blog, setBlog] = useState({})
  
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
          <h1>{blog.author?.name}</h1>
            <h1>{blog.content}</h1>
          <span>
            <AuthorInfo content={blog} />
            {blog.author?._id === props.user.profile &&
              <div className="blogs">
                <Link to={`/blogs/${id}/edit`} state={blog}>
                  <button>EDIT</button></Link>
                <button onClick={() => props.handleDeleteBlog(id)}>DELETE</button>
              </div>
            }
          </span>
        </header>
      </article>
    </main>
  )
}

export default BlogDetails
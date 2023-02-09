import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './BlogDetails.module.css'

// Services
import * as blogService from '../../services/blogService'

// Components
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'

const BlogDetails = (props) => {
  const { id } = useParams()
  // const id  = blog?._id
  console.log("PROPS!", props)
  const [blog, setBlog] = useState({})
  
  useEffect(() => {
    const fetchBlog = async () => {
      const data = await blogService.show(id)
      console.log("BLG DEETS DATA", data)
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
          <span>
            <AuthorInfo content={blog} />
            {blog.author?._id === props.user.profile &&
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
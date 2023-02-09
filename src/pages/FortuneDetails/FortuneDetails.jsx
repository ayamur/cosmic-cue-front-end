import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './FortuneDetails.module.css'

import * as fortuneService from '../../services/fortuneService'

const FortuneDetails = (props) => {
  const { id } = useParams()
  const [fortune, setFortune] = useState(null)

  useEffect(() => {
    const fetchFortune = async () => {
      const data = await fortuneService.show(id)
      console.log('data:', data)
      setFortune(data)
    }
    fetchFortune()
  }, [id])

  return (
    <main>
      <span>
        {/* <FortuneInfo message={fortune} /> */}
        <h4>{fortune?.message}</h4>
        {/* {fortune.owner._id === props.user.profile && */}
          <>
            <Link to={`/fortunes/${id}/edit`} state={fortune}>Edit</Link>
            <button onClick={() => props.handleDeleteFortune(id)}>Delete</button>
            {/* <button>Delete</button> */}
          </>
        {/* } */}

      </span>
 
    </main>
  )
}

export default FortuneDetails
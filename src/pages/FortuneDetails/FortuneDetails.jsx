import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

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
    <>
      <h1>You have the power to edit or delete this fortune:</h1>
      <main>
        <div className="fortuneDetails">
          <img src="/icons/Food.png" alt="" />
          <h4>Fortune Details:</h4>
          <h4>{fortune?.message?.toUpperCase()}</h4>
          <>
            <div className='fortuneDetailsButtons'>
              <Link to={`/fortunes/${id}/edit`} state={fortune}><button>EDIT</button></Link>
              <button onClick={() => props.handleDeleteFortune(id)}>DELETE</button>
            </div>
          </>
        </div>
      </main>
    </>
  )
}

export default FortuneDetails
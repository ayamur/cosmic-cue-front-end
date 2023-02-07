import { useState, useEffect, Profiler } from 'react'
import { useParams } from 'react-router-dom'
import { getMyProfileInfo } from '../../services/profileService'
import FortuneList from '../FortuneList/FortuneList'



const MyProfile = (props) => {
  const [myProfile, setMyProfile] = useState({})
  let { id } = useParams()


  useEffect(() => {
    const fetchMyProfile = async () => {
      const profileData = await getMyProfileInfo(id)
      setMyProfile(profileData)
    }
    fetchMyProfile()
  }, [id])
  


  return (
    <>
      <h4>My profile</h4>
      <h4>{myProfile.name}</h4>

      <h4> < FortuneList id={id}/>  </h4> 
      
  </>
  )
}

export default MyProfile
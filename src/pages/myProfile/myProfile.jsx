import { useState, useEffect, Profiler } from 'react'
import { useParams } from 'react-router-dom'
import { getMyProfileInfo } from '../../services/profileService'



const MyProfile = (props) => {
  const [myProfile, setMyProfile] = useState({})
  let { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetchMyProfile = async () => {
      const profileData = await getMyProfileInfo(id)
      setMyProfile(profileData)
      console.log(profileData)
    }
    fetchMyProfile()
  }, [id])
  // if (user === profileId)
  


  return (
    <>
      <h4>My profile</h4>
      <h4>{myProfile.name}</h4>
      
  </>
  )
}

export default MyProfile
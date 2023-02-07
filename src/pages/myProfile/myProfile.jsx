import { useState, useEffect, Profiler } from 'react'
import { useParams } from 'react-router-dom'
import { getMyProfileInfo } from '../../services/profileService'
import FortuneList from '../FortuneList/FortuneList'



const MyProfile = (props) => {
  const [myProfile, setMyProfile] = useState({})
  let { id } = useParams()

  useEffect(() => {

    // setMyProfiles(profiles.filter(profile => profile.owner._id === user.profile))

    const fetchMyProfile = async () => {
      const profileData = await getMyProfileInfo(id)
      setMyProfile(profileData)
    }
    fetchMyProfile()
  }, [id])
  
  return (
    <>
      <h4>Welcome to your profile</h4>
      <h4>{myProfile.name}</h4>

      <h4> < FortuneList id={id} profile={myProfile} fortunes={props.fortunes} user={props.user}/>  </h4> 
      
  </>
  )
}

export default MyProfile
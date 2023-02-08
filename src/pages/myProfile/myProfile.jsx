import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMyProfileInfo } from '../../services/profileService'
import FortuneList from '../FortuneList/FortuneList'
import { Link } from 'react-router-dom'



const MyProfile = (props) => {
  const [myProfile, setMyProfile] = useState({})
  let { id } = useParams()

  //if you are the user with this profile, filter you out, then..

  // setMyProfiles(props.profiles.filter(profile => profile.owner._id === props.user.profile))

  useEffect(() => {
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

      <Link to="/fortunes/new">Create a New Fortune</Link>

      <h4> < FortuneList id={id} profile={myProfile} fortunes={props.fortunes} user={props.user} key={myProfile.id}/>  </h4> 

      
  </>
  )
}

export default MyProfile
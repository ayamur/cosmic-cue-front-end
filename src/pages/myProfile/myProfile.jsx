import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMyProfileInfo } from '../../services/profileService'
import FortuneList from '../FortuneList/FortuneList'
import { Link } from 'react-router-dom'



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

  if (
    props.user.profile === myProfile?._id
    ) {
      if (!myProfile) return "loading"
      return (
        <>
          <h4>Welcome to your profile</h4>
          <h4>{myProfile.name}</h4>
    
          <Link to="/fortunes/new">Create a New Fortune</Link>
    
          < FortuneList id={id} profile={myProfile} fortunes={props.fortunes} user={props.user}/>     
      </>
      );
    } else {

      return <h4>this is not your profile</h4>

    }
  }
  


export default MyProfile
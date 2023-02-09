import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMyProfileInfo } from '../../services/profileService'
import FortuneList from '../FortuneList/FortuneList'
import { Link } from 'react-router-dom'
import Love from '../../assets/icons/Love.png'

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
        <div className="myProfile">
        <div className="profileImages">
          <img src={Love} alt="" />
        </div>
        <div className="profileLinks">
          <h4>Welcome to your Cosmic Cue profile,</h4>
          <h4>{myProfile.name}!</h4>
        </div>
        <div className="fortuneLinks">
          <h4>Click these links to create with cosmos:</h4>
          <Link to="/fortunes/new">Create a New Fortune</Link>
          <Link to='/signs/new'>Create a Sign</Link>
        </div>
        </div>
          < FortuneList id={id} profile={myProfile} fortunes={props.fortunes} user={props.user}/>     
      </>
      );
    } else {

      return <h4>This is not your profile.</h4>

    }
  }
  


export default MyProfile
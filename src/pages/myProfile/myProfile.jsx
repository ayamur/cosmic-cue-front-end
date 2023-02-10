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
        <div className="profileImages">
          <img src={Love} alt="" />
          <h1>Welcome to your Cosmis Cue Profile, {myProfile.name}!</h1>
        </div>
        <div className="myProfile">
        <div className="profileLinks">
        </div>
        <div className="fortuneLinks">
          <h4>Click these links to create fortunes and signs with cosmos:</h4>
          <Link to="/fortunes/new">Create a New Fortune</Link>
          <Link to='/signs/new'>Create a Sign</Link>
          <><Link to='/change-password'>Change Password</Link></>
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
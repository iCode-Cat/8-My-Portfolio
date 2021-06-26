import React from 'react'
import { profile } from '../api/profile.object';
import './scss/profile.style.scss'

const Profile = () => {
    const { name,role,image,about,contact } = profile[0];
    return (
        <section className='profile global-pd'>
            <div className="profile-img-container">
            <img src={image} alt={name} className="profile-img" />
            </div>
            <div className="profile-info">
            <h1 className="profile-name">{name}</h1>
            <p className="profile-role">{role}</p>
            </div>
            <div className="profile-contact">
               {
                   contact.map((contact,index) => (
                    <div key={index} className="profile-contact-box">
                    <span className='material-icons'>{contact.icon}</span>
                    <p>{contact.text}</p>
                    </div>
                   ))
               }
            </div>
            <p className="profile-about">
                {about}
            </p>
        </section>
    )
}

export default Profile

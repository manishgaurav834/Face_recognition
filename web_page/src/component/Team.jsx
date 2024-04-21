import React from 'react'
import { ImGithub } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";
import test from '../Image/test.png'
import ashutosh from '../Image/rename.jpeg'
import jaiswal from '../Image/jaiswal.jpeg'
import gaurav from '../Image/gaurav.jpg'
import hitesh from '../Image/hitesh.jpg'
import vibhor from '../Image/vibhor.jpg'
function Team() {
    const teams=[
        {
            name:"Ashutosh kumar",
            img:ashutosh,
            linkdin:"https://www.linkedin.com/in/ashutosh-kumar-5aa3b3259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github:"https://github.com/a19hu"
        },
        {
            name:"Gaurav Manish",
            img:gaurav,
            linkdin:"https://www.linkedin.com/in/gaurav-manish-36b047254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github:"https://github.com/manishgaurav834"
        },
        {
            name:"Aditya Jaiswal",
            img:jaiswal,
            linkdin:"https://www.linkedin.com/in/aditya-jaiswal-875565254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github:"https://github.com/Aditya-Jaiswal-534"
        },
        {
            name:"Hitesh singh",
            img:hitesh,
            linkdin:"https://www.linkedin.com/in/hitesh-singh-parihar-97ba7b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github:"https://github.com/HiteshSinghParihar7"
        },
        {
            name:"Vibhor",
            img:vibhor,
            linkdin:"",
            github:"https://github.com/VibhorSaxena-23"
        },
    ]
  return (
    <div className="container mx-auto flex justify-center mb-4">
    <div className="flex flex-col items-center justify-center w-3/4">
            <p className='header_Problem'>Team</p>
            <div className='container'>
                {teams.map((team,index)=>(
                    
                <div key={index} className='profile_container '>
                    <img src={`${team.img}`} alt="" className='prfile_pic' style={{width:"120px",height:"120px"}}/>
                    <h4 className="m-1 text-center">{team.name}</h4>
                    <div className="flex justify-between">
                    <a href={team.github} target="_blank" rel="noopener noreferrer"> <ImGithub  size={30} color='black'style={{marginRight:"15px"}}/></a>
                    <a href={team.linkdin} target="_blank" rel="noopener noreferrer"> <IoLogoLinkedin size={30} color='black'/></a>
                    </div>
                </div>
                ))}
            </div>

    </div>
    </div>
  )
}

export default Team

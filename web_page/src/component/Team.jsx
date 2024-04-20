import React from 'react'
import { ImGithub } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";
import test from '../Image/test.png'
function Team() {
    const teams=[
        {
            name:"Ashutosh kumar",
            img:test,
            linkdin:"",
            github:""
        },
        {
            name:"Gaurav Manish",
            img:test,
            linkdin:"https://www.linkedin.com/in/gaurav-manish-36b047254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github:"https://github.com/manishgaurav834"
        },
        {
            name:"name",
            img:test,
            linkdin:"",
            github:""
        },
        {
            name:"name",
            img:test,
            linkdin:"",
            github:""
        },
        {
            name:"name",
            img:test,
            linkdin:"",
            github:""
        },
    ]
  return (
    <div className="container mx-auto flex justify-center mb-4">
    <div className="flex flex-col items-center justify-center w-3/4">
            <p className='header_Problem'>Team</p>
            <div className='container'>
                {teams.map((team,index)=>(
                    
                <div key={index} className='profile_container '>
                    <img src={`${team.img}`} alt="" className='prfile_pic'/>
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

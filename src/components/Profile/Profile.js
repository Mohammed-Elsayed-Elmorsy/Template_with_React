import React , {useState , useEffect} from 'react'
import axios from 'axios'
import {StyledPrfile , StyledSkill,Span} from './PrfoileStyle'
const Profile = () => {

  const [skills , setSkills] = useState([])

  useEffect(()=>{

    axios.get("data/data.json").then(res=>{
      setSkills(res.data[0].skills)
    })
  } , [])

  const updated = skills.map(skill=>{
    return <StyledSkill progress={skill.progress} className='skill' key={skill.id}>
      <span>{skill.name}</span>
      <Span>{skill.progress}</Span>
    </StyledSkill>
  }) 
  return (


    <StyledPrfile className='section'>
      <h2>Skills</h2>
      {updated}
    </StyledPrfile>
  )
}

export default Profile

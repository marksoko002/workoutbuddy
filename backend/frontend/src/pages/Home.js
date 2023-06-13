import React from 'react'
import { useState, useEffect } from 'react'

// components
import Workoutdetails from '../components/workoutdetails'
const Home = () => {
  const [workouts,setWorkouts] = useState(null)
  useEffect(()=>{
     const fetchworkouts = async()=>{
       const response = await fetch('/api/workout')
       const json = await response.json()

       if(response.ok){
        setWorkouts(json)
       }
     }
     fetchworkouts()
  },[])
  return (
    <div className='workouts'>
      {workouts && workouts.map((workout)=>(
        <Workoutdetails key={workout._id} workout={workout}/>
      ))}
    </div>
  )
}

export default Home
import React from 'react'
import { useState, useEffect } from 'react'

// components
import Workoutdetails from '../components/workoutdetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const [workouts,setWorkouts] = useState(null)
  useEffect(()=>{
     const fetchworkouts = async()=>{
       const response = await fetch('http://localhost:4000/api/workout')
       const json = await response.json()

       if(response.ok){
        setWorkouts(json)
       }
     }
     fetchworkouts()
  },[])
  return (
    <div className='home'>
    <div className='workouts'>
      {workouts && workouts.map((workout)=>(
        <Workoutdetails key={workout._id} workout={workout}/>
      ))}
    </div>
    <div>
      <WorkoutForm/>
    </div>
    </div>
  )
}

export default Home
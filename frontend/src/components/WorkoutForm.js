import { useState } from "react"
const WorkoutForm = () => {

const [title, setTitle] = useState('') 
const [load,setLoads] = useState('') 
const [reps, setReps] = useState('') 
const [error,setError] =useState('')

const handleSubmit = async (e)=>{
    e.preventDefault()
    const workout = {title,load,reps}

    const response =await fetch('api/workouts/',{
        method:"POST",
        body:JSON.stringify(workout),
        headers:{
            "Cotent-Type":"application/json"
        }       
    })

    const json = await response.json()
    
    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
        setTitle('')
        setLoads('')
        setReps('')
        setError(null)
        console.log('New workout added',json)
    }
}
  return (
    <form className="create" onSubmit={handleSubmit}>
       <h3>Add new workout</h3>

       <label >Exercise Title</label>
       <input
         type="text"
         onChange={(e)=>setTitle(e.target.value)}
         value= {title}
       />
        <label >Loads in (KGs)</label>
        <input
         type="number"
         onChange={(e)=>setLoads(e.target.value)}
         value= {load}
       />
        <label >Number of reps</label>
        <input
         type="number"
         onChange={(e)=>setReps(e.target.value)}
         value= {reps}
       />
       <button>Add workout</button>
       {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm
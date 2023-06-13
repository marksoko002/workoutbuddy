const workoutdetails =({workout})=>{
    return(
       <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (KG)</strong> {workout.loads}</p>
        <p><strong>Reps</strong> {workout.reps}</p>
        <p> created at: {workout.createdAt}</p>
        </div>
    )
}

export default workoutdetails
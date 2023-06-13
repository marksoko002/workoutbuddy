const workoutdetails =({workout})=>{
    return(
       <div className="workout-details">
        <h3>{workout.title}</h3>
        <p><strong>Load (KG)</strong> {workout.load}</p>
        <p><strong>Reps</strong> {workout.reps}</p>
        <p> created at: {workout.createdAt}</p>
        </div>
    )
}

export default workoutdetails
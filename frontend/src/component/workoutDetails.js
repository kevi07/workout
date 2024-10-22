const workoutDetails = (workout) => {


    return(
        <div className="workout_details">
            <h4>{workoutDetails.title}</h4>
            <p><strong>Load (kgs) :</strong>{workout.load}</p>
            <p><strong>Reps :</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default workoutDetails
import { useEffect , useState } from 'react'
import workoutDetails from '../component/workoutDetails'

const Home = () => {
    const [workouts , setWorkouts] = useState(null)
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workout/')
            const json = response.json()

            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    },[])
    return(
        <div className="home">
            <h1>Hello</h1>
            <h2>{workouts && workouts.map((workout)=>(
                <workoutDetails key={workout._id} workout = {workout} />
            ))}</h2>
        </div>
    )
}

export default Home
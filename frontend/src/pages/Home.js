import { useEffect , useState } from 'react'
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
                <p key={workout._id}>{workout.title}</p>
            ))}</h2>
        </div>
    )
}

export default Home
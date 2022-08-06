import { useEffect } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { fetchPost } from "../api";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      //   const response = await fetch(`/api/workouts/`, {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //   });

      const { data } = await fetchPost();

      // console.log(data);

      // const json = await response.data;
      // console.log(json.data);
      // if (response.ok) {
      //   dispatch({ type: "SET_WORKOUT", payload: json });
      // }
      dispatch({ type: "SET_WORKOUT", payload: data });
      return data;
    };

    fetchWorkouts();
  }, [dispatch, workouts]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;

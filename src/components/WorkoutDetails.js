import { useWorkoutContext } from "../hooks/useWorkoutContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

import DeleteIcon from "@mui/icons-material/Delete";
import { deletePost } from "../api";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const handleClick = async () => {
    // const response = await fetch(`/api/workouts/` + workout._id, {
    //   method: "DELETE",
    // });

    const { data } = await deletePost(workout._id);
    console.log(data);

    // const json = await response.json();

    dispatch({ type: "DELETE", payload: data });

    // if (response.ok) {
    //   dispatch({ type: "DELETE", payload: json });
    // }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Content: </strong>
        {workout.load}
      </p>
      <p>
        <strong>Final thoughts: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>
        <DeleteIcon />
      </span>
    </div>
  );
};

export default WorkoutDetails;

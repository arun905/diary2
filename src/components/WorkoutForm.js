import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

import { createPost } from "../api";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    // const response = await fetch(`/api/workouts`, {
    //   method: "POST",
    //   body: JSON.stringify(workout),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    const { data, statusText } = await createPost(workout);

    console.log(data);

    // const json = await response.json();

    if (!statusText.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);
    }
    if (statusText === "OK") {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      setEmptyFields([]);
      console.log("new workout added:", data);
      dispatch({ type: "CREATE_WORKOUT", payload: data });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a Note</h3>

      <label> Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
        required
      />

      <label>Content:</label>
      {/* <input
        type="text"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
      /> */}

      <textarea
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        cols="30"
        rows="10"
        className={emptyFields.includes("load") ? "error" : ""}
        required
      ></textarea>

      <label>How was your Day?</label>
      <input
        type="text"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? "error" : ""}
        required
      />

      <button>Add Note</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;

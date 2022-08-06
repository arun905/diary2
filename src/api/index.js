import axios from "axios";

const url = "https://dailynotediary.herokuapp.com";

export const fetchPost = () => axios.get(`${url}/api/workouts`);

export const createPost = (newPost) =>
  axios.post(`${url}/api/workouts`, newPost);

export const deletePost = (id) => axios.delete(`${url}/api/workouts/` + id);

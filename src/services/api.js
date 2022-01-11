import axios from "axios";
const url = "http://localhost:9000/users";

export const getUser = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};
export const addUser = (user) => {
  return axios.post(`${url}/add`, user);
};
export const UpdateDetails = async (id, user) => {
  return axios.put(`${url}/${id}`, user);
};

export const deleteUser = async (id) => {
  return axios.delete(`${url}/${id}`);
};


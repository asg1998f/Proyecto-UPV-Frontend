import axios from "axios";

const API_USERS = "http://localhost:3001/users";
const API_DNI = "http://localhost:3001/DNIVerificados";

const register = async (userData) => {
  const res = await axios.post(API_USERS, userData);
  return res.data;
};

const login = async(userData)=>{
    const res = await axios.post(API_USERS + '/login',userData)
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));      
}
    return res.data
}

const getUserById = async (id) => {
  const res = await axios.get(API_USERS + "/id/" + id);
  return res.data;
};
const getDniById = async (id) => {
  const res = await axios.get(API_DNI + "/id/" + id);
  return res.data;
};

const getAllUsers = async () => {
  const res = await axios.get(API_USERS + "/");
  return res.data;
};
const getAllDni = async () => {
  const res = await axios.get(API_DNI + "/");
  return res.data;
};

const authService = {
  register,
  login,
  getUserById,
  getDniById,
  getAllUsers,
  getAllDni
};

export default authService;
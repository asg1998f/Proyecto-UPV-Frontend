import axios from "axios";


const API_URL = "http://localhost:8080";

const register = async (userData) => {
  const res = await axios.post(API_URL+"/users", userData);
  return res.data;
};


const login = async(userData)=>{
    const res = await axios.post(API_URL + '/login/users',userData)
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));      
}
    return res.data
}

const validar = async(dni)=>{
  const res = await axios.get(API_URL + '/dniVerificados')
  let esCorrecto = false
  res.data.map((user)=>{
    if(user.dni == dni){
      esCorrecto = true
    }
  })
  localStorage.setItem("dni", esCorrecto);
  return res.data
}


const authService = {
  register,
  login,
  validar
};

export default authService;
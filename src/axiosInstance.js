//creating an axios instance to set the default properties

import axios from "axios";
const instance = axios.create({
  baseURL: "https://my-burger-maker-b1260-default-rtdb.firebaseio.com/",
});

export default instance;

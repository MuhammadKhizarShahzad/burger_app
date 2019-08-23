import Axios from "axios";
const instance = Axios.create({
    baseURL: "https://burger-app-e4073.firebaseio.com/"
});

export default instance;
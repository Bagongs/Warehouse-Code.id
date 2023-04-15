import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/users"

const loginUser = async (user, loginCbHandler) => {
    if (user.username === "") {
        Swal.fire("Login", "Username can not be empty.", "error");
    } else if (user.password === "") {
        Swal.fire("Login", "Password can not be empty.", "error");
    } else {
        try {
            let result = await axios({
                method: "POST",
                url: URL + "/login",
                data: user,
            });
            Swal.fire("Login", result.data.message, "success");
            const access_token = result.data.access_token
            localStorage.setItem('access_token', access_token)

            loginCbHandler(true)
            console.log(result.data)
        } catch (err) {
            console.log(err)
        }
    }
};

const registerUser = async (user, loginCbHandler) => {
    try {
        let result = await axios({
            method: "POST",
            url: URL + "/register",
            data: user,
          });

        Swal.fire("Register", result.data.message, "success");
        loginCbHandler(true)
    } catch (e) {
        console.log(e);
    }
};

const deleteUser = async (user,id) => {
    try {
        let result = await axios({
            method: "DELETE",
            url: URL + "/delete/"+id,
            data: user,
          });

        Swal.fire("Delete User", result.data.message, "success");
    } catch (e) {
        console.log(e);
    }
};


export {
    loginUser, registerUser, deleteUser
}
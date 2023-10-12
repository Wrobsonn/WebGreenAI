import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './Signin.css';
import Title from "../Templates/Title.jsx"
import Foot from "../Templates/Foot.jsx"



const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [error, setError] = useState("")
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/auth/signin"
            const { data: res } = await axios.post(url, data)
            localStorage.setItem("token", res.data)
            window.location = "/"
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }
    return (
        // <div >
        //     <div >
        //         <div >
        //             <form
        //                 onSubmit={handleSubmit}>
        //                 <h1>Login</h1>
        //                 <input
        //                     type="email"
        //                     placeholder="Email"
        //                     name="email"
        //                     onChange={handleChange}
        //                     value={data.email}
        //                     required

        //                 />
        //                 <input
        //                     type="password"
        //                     placeholder="Password"
        //                     name="password"
        //                     onChange={handleChange}
        //                     value={data.password}
        //                     required

        //                 />
        //                 {error && <div
        //                 >{error}</div>}
        //                 <button type="submit"
        //                 >
        //                     Sing In
        //                 </button>
        //             </form>
        //         </div>

        <div>
            <Title />
            <div class="login">

                <header class="login__header">
                    <h2>
                        Sign In</h2>
                </header>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="mail@address.com" required />
                    </div>

                    <div>
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="password" required />
                    </div>
                    <a href="#" class="forgetpass">Forget Password?</a>
                    <div>
                        <input class="button" type="submit" value="Sign In" />
                    </div>

                </form>

            </div>
            <Foot />
        </div>
    )
}
export default Login;



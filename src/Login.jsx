import React,{useState} from "react";


export const Login =(props)=>{
    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className ="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlfor="password">password</label>
            <input value={password} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')} >Don't have an account? Register here</button>
        </div>
    )
}
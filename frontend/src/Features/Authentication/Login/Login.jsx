export default function Login({onCreateAccount}){
    return(
        <div>
            <h1>Sign In</h1>
            <div>
                <h3>Email Address</h3>
                <input type="text" />
            </div>
            <div>
                <h3>Password</h3>
                <input type="text" />
            </div>
            <div><p>Forget Password?</p></div>
            <div><button>Sign In</button></div>
            <div>
                <hr/>
                <p>Or continue with</p>
                <hr />
            </div>
            <div>New to EduLearn? <button onClick={onCreateAccount}>Create Account</button></div>
        </div>
    )
}
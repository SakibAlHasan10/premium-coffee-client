import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignIn = () => {
    const {signInWithEmail}= useContext(AuthContext)
    const handleSignIn = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInWithEmail(email, password)
        .then(res =>{
            console.log(res.user)
            const lastSignInTime= res.user?.metadata?.lastSignInTime;
            const user = {lastSignInTime, email}
            fetch(`https://premium-coffee-sever.vercel.app/users`,{
                method:"PUT",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        })
        .catch(error=>console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUIn now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">SignIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignIn;
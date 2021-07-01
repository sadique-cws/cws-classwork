
import React, {useState} from 'react';
const Login = () => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = () => {
        return fetch("http://127.0.0.1:8000/api/login", {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
              },
            body: JSON.stringify({ email: email, password: password })
        }).then(data => {
            if(data.status === 200){
                localStorage.setItem("isLoginIn", true);
                localStorage.setItem("userdata", data.data);
            }
        });
    };

    return (
        <div className="container mt-5">
           <div className="row">
               <div className="col-lg-3 offset-4">
                   <div className="card">
                       <div className="card-body"> 
                           <div className="mb-3">
                               <label htmlFor="">Username</label>
                               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                           </div>
                           <div className="mb-3">
                               <label htmlFor="">password</label>
                               <input type="password" className="form-control" value={password}  onChange={(e) => setPassword(e.target.value)} />
                           </div>                           
                           <div className="mb-3">
                               <input type="submit" className="btn btn-primary" onClick={signin} />
                           </div>        
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
}


export default Login;
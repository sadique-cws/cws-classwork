
import react , {useState } from 'react';

const Register = () => {
    const [fullname, setfullname] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = () => {
        return fetch("http://127.0.0.1:8000/api/register", {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
              },
            body: JSON.stringify({fullname: fullname, email: email, password: password })
        }).then(data => data.json()).then(alert => console.log("successfully signup")).then(clear());
    };

    const clear = () => {
        setfullname("");
        setContact("");
        setEmail("");
        setPassword("");
    }
    return (
        <div className="container mt-5">
           <div className="row">
               <div className="col-lg-3 offset-4">
                   <div className="card">
                       <div className="card-body">
                           <div className="mb-3">
                               <label htmlFor="">Fullname</label>
                               <input type="text" className="form-control" value={fullname} onChange={(e) => setfullname(e.target.value)} />
                           </div>
                           <div className="mb-3">
                               <label htmlFor="">contact</label>
                               <input type="text" className="form-control"  value={contact} onChange={(e) => setContact(e.target.value)}/>
                           </div>
                           <div className="mb-3">
                               <label htmlFor="">email</label>
                               <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                           </div>
                           <div className="mb-3">
                               <label htmlFor="">password</label>
                               <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                           </div>                           
                           <div className="mb-3">
                               <input type="submit" className="btn btn-primary" onClick={signup}/>
                           </div>

                           
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
}


export default Register;
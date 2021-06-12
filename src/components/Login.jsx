

const Login = () => {
    return (
        <div className="container mt-5">
           <div className="row">
               <div className="col-lg-3 offset-4">
                   <div className="card">
                       <div className="card-body">
                           <div className="mb-3">
                               <label htmlFor="">Username</label>
                               <input type="text" className="form-control" />
                           </div>
                           <div className="mb-3">
                               <label htmlFor="">password</label>
                               <input type="password" className="form-control" />
                           </div>                           
                           <div className="mb-3">
                               <input type="submit" className="btn btn-primary" />
                           </div>

                           
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
}


export default Login;
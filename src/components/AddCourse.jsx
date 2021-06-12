import React, { useState , useEffect} from 'react';


const AddCourse = () => {
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [instructor, setInstructor] = useState("");
    
    const SubmitData = () => {
        return fetch("http://127.0.0.1:8000/api/course", {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
              },
            body: JSON.stringify({title: title, price: price, instructor: instructor })
        }).then(data => data.json())
    };
    return (
        <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-3">
                            <div className="mb-3">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" className="form-control" onChange={(e)=>setTitle(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price">price</label>
                                <input type="text" id="price" className="form-control"onChange={(e)=>setPrice(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="instructor">instructor</label>
                                <input type="text" id="instructor" className="form-control"onChange={(e)=>setInstructor(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <input type="submit" className="btn btn-success" onClick={SubmitData} />
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )

}

export default AddCourse;
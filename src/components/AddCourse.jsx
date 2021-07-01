import React, { useState , useEffect} from 'react';

class AddCourse extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title : "",
            price : "",
            instructor : "",
        }
        this.SubmitData = this.SubmitData.bind(this);

    }
    
    SubmitData(e){
        let formdata = this.state;
        console.log(formdata);
        return fetch("http://127.0.0.1:8000/api/course", {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
              },
            body:JSON.stringify(formdata)
        }).then(data => data.json())
    };

    render(){
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-3">
                        <div className="mb-3">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" value={this.state.title} className="form-control" onChange={(e)=>this.setState({title:e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price">price</label>
                            <input type="text" id="price" value={this.state.price} className="form-control"onChange={(e)=>this.setState({price:e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="instructor">instructor</label>
                            <input type="text" id="instructor" value={this.state.instructor} className="form-control"onChange={(e)=>this.setState({instructor:e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="btn btn-success" onClick={this.SubmitData} />
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
        )
    }
}


export default AddCourse;
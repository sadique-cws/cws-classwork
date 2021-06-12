import React from 'react';
import {Link} from 'react-router-dom';
const Course = (props) =>{
    return(
        <React.Fragment>
            <div className="card mb-3">
                    <img src={props.img} alt="" />
                    <div className="card-body">
                        <h2>{props.title}</h2>
                        <p className="lead">{props.desc}</p>
                    </div>
                    <div className="card-footer">
                        <Link className="btn btn-success" to={`/course/${props.id}`}>Know More</Link>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Course;


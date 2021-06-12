import React from 'react';
import Course from './Course';



const CourseLayout = (props) =>{
    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    {
                        props.data.map((value, index) => {
                            return <div key={index} className="col-lg-3"><Course id={value.id} title={value.title} desc={value.desc}/></div>
                        })
                    }
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default CourseLayout;


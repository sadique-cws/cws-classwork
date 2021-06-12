import React from 'react';


const VideoStreamView = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                    <div className="row m-0">
                        <div className="col-lg-3">
                            <div className="list-group">
                                <a href="#demo" className="list-group-item list-group-item-action">Module 1</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 2</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 3</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 4</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 4</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 4</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 4</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 4</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 4</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 4</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 4</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 4</a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                                <iframe height="515" width="100%" src="https://www.youtube.com/embed/ArgP21VcmBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
} 

export default VideoStreamView;
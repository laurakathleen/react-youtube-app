import React from 'react';

//functional component because it doesn't need to keep track of state
const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    //below is the same as: const url = 'https://www.youtube.com/embed/' + videoId; (not the back ticks)
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16y9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )

};

export default VideoDetail;
import React from 'react';
import { Link } from 'react-router-dom'

const Trucks = (props) => {
    const { track } = props
    return ( <div className = 'col-md-6'>
        <div className = "card md-3 shadow-sm">
        <div className = "card-body">
                <h5 > {track.artist_name} </h5>
                <p className="card-text ">
                    <strong > < i className="fas fa-play text-danger" > </i>track</strong >: {track.track_name}
                    <br/>
                    <strong > < i className="fas fa-compact-disc text-danger" > </i>album</strong >: {track.album_name} </p>
                <Link to={`lyrics/track${track.track_id}`} className = 'btn btn-info btn-block' >
                    <i className="fas fa-chevron-right" > </i>view lyrics </Link>
            </div>
        </div>
    </div>
    );
}

export default Trucks;
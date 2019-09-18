import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import Spiner from '../layout/Spiner'
class Lyrics extends Component {
    state = {
        lyrics: {},
        track: {}
        
    }
    componentDidMount() {
        axios.get(`http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=
        ${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                //console.log(res.data.message.body.lyrics)
                this.setState({ lyrics: res.data.message.body.lyrics });


                return axios.get(`http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=
                ${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
                    .then(res => {
                       
                        this.setState({ track: res.data.message.body.track });
                    })

    })

     .catch (err => console.log(err))
    
    }
    render() {
        const { track, lyrics } = this.state
        
        if (track === undefined ||
            lyrics === undefined ||
            Object.keys(track).length === 0 ||
           Object.keys(lyrics).length ===0) {
            return <Spiner/>
        }
        else {
            return (
                <React.Fragment>
                    <Link to='/' className="btn btn-info mb-4 btn-sm">Go back<h5 className="fas fa-home text-danger "></h5></Link>
                    <div className="card">
                        <h4 className="card-headr">
                            {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
                        </h4>
                        <div className="card-body">
                            <p className="card-text">{lyrics.lyrics_body}</p>
                        </div>
                    </div>
                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>album Id</strong>:{track.album_id}
                        </li>
                        <li className="list-group-item">
                        <strong>song genre</strong>:{track.primary_genres.length === 0 ? track.primary_genres.music_genre_list[0]
                                .music_genre.music_genre_name : 'Unknown'}
                        </li>
                        <li className="list-group-item">
                           <strong>Explicit Words</strong> :{track.explicit === 0 ? 'no' : 'yes'}
                        </li>
                        <li className="list-group-item">
                           <strong>Release Date</strong>:<Moment format='dd/mm/YYYY'>{track.updated_time}</Moment> 
                        </li>
                    </ul>
                </React.Fragment>
            )
        }
    }
}

export default Lyrics
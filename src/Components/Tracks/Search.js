import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../Context'
import play from '../layout/img/play.gif'
class Search extends Component {
    state = {
         trackTitle:''
    }
    findSong = (dispatch,e) => {
        e.preventDefault()
        axios.get(`https://cors-anywhere.herokuapp.com/http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?
        q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                   
                })
                
            })
            .catch(err => console.log(err))
    }
    onChange=(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <Consumer>
                {value => {
                   const {dispatch} = value
                    return (
                        <div className="card card-body mb-4 p-4 bg-info text-white">
                            <h3 className="display-4 text-center">
                                <i className="fas fa-music text-danger "></i>search for your favorite song
                            </h3>
                            <p className="lead text-center">Get lyrics for any song</p>
                            <form className='form-inline' onSubmit={this.findSong.bind(this,dispatch)}>
                                <div className="input-group md-form form-sm form-1 pl-0 d-sm-flex">
                                <div className="input-group-prepend">
                                        <span className="input-group-text cyan lighten-2"
                                            id="basic-text1"><i class="fas fa-search text-white"
                                  aria-hidden="true"></i></span>
                                </div>
                                    <input type="text" className="form-control my-0 py-1"
                                         aria-label="Search"
                                        placeholder='song title ....'
                                        name='trackTitle'
                                        value={this.state.trackTitle}
                                        onChange={this.onChange} />
                                   <input className="btn input-group-text cyan lighten-2" type="submit" value="search"/>
                                </div>
                               
                                
                            </form>

                            
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
export default Search
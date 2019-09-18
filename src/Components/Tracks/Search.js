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
        axios.get(`http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?
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
                                <div className="form-group">
                                    <input type="text" className="form-control "
                                        placeholder='song title ....'
                                        name='trackTitle'
                                        value={this.state.trackTitle}
                                        onChange={this.onChange} />
                                    <button className='btn btn-primary btn-md mr-5' type='submit'><i class="fas fa-search"></i>search</button>
                                <img className='ml-2' src={play} alt="playing" width='400' height='50'/>
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
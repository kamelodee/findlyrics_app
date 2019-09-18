import React from 'react'
import { Consumer } from '../../Context'
import Spiner from '../layout/Spiner'
import Trucks from './Trucks'
export default function Tracks() {
    return (
        <Consumer>
            {value => {
                const { track_list,heading } = value
                if(track_list === undefined || track_list.length === 0){
                  return  <Spiner/>
                } else {
                    return (
                        <React.Fragment>
                            <h3 className='text-center'>{heading}</h3>
                            <div className ='row'>
                                {
                                    track_list.map(item => (
                                        <Trucks key={item.track.track_id} track={item.track}/>
                                ))
                                }

                          </div>
                        </React.Fragment>
                        
                   
                    )}
           }} 
        </Consumer>
    )
}

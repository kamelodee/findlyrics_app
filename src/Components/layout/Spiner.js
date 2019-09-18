import React from 'react'
import spinner from './img/spinner.gif'
export default () => {
    return (
        <div className='container'>
            <h2 className='text-center'>Loading .....</h2>
            <img className='card-img' src={spinner} alt="loading" width='100px' height='100px' />
                
       </div>
   )
}
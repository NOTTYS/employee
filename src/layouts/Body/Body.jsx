import React from 'react'
import '../../css/Body.css'
import Routers from '../../routes/Routers'

function Body() {
    return (
        <div> <div className='main_content'>
        <div className='row justify-content-start'>
            <div className='col-2'>

            </div>
            <div className='col'>
                <div className='header'>
                    <p className='py-2 pb-3 text-white text-center fs-3'>Admin</p>
                </div>
            </div>
        </div>

        <div className='row justify-content-start'>
            <div className='leftside'>

            </div>
            <div className='rightside'>
            <Routers/>
            </div>
        </div>

    </div>
            
        </div>
    )
}

export default Body
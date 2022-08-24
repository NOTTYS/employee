import React from 'react'
import '../css/About.css'
import logo from '../images/logo.jpeg'

function AboutManagement() {
    return (
        <div>
            <div className='container my-5 border border-5 w-75'>

                <div className='px-4'>

                    <input className='form-control mt-4' type="file" />

                    <p className='my-3 px-3 fs-5 preview'>Preview</p>

                    <img className='my-3' style={{ width: 150 }} src={logo} alt="" />

                </div>
                <div className='ms-2 my-3 description'>
                    <p className='py-1 text-center'>Description</p>
                </div>
                <form action="">
                    <textarea className='form-control fs-4 mx-2 mb-3' name="" id="" cols="30" rows="10">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus magnam nam soluta, natus recusandae ab quas fugiat a autem dicta tenetur vel quae culpa nihil obcaecati saepe eveniet dolore officia accusantium veniam. Consectetur atque possimus, ex reprehenderit maxime sunt obcaecati explicabo distinctio tempora ducimus mollitia voluptatum, deserunt exercitationem molestiae accusamus aut illo sit corrupti blanditiis voluptatibus? Quibusdam ipsum tempora quasi voluptatem nulla? Culpa autem impedit est maxime reiciendis delectus iusto, veritatis explicabo commodi magnam perferendis voluptatibus odit doloribus vitae nulla quos nemo perspiciatis, inventore voluptatem omnis quasi magni quidem. At optio quia natus velit delectus, repudiandae facere consequuntur itaque impedit!
                    </textarea>
                    <button className='btnSave py-2 px-5 fs-4 shadow rounded rounded-3 mb-3'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default AboutManagement
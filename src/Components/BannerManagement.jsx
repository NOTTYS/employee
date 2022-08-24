import React from 'react'
import '../css/Banner.css'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BannerManagement() {
    return (
        <div>
            <div>
                <p className='fs-1 mt-5 text-center fw-bold'>ຈັດການຣູບ Banner</p>
                <table className='d-block mx-auto w-100'>
                    <thead className='border border-1 w-100 '>
                        <tr>
                            <th style={{ width: 100 }} className='text-center'>No</th>
                            <th style={{ width: 500 }} className='text-center'>Name</th>
                            <th style={{ width: 500 }} className='text-center'>Preview</th>
                            <th style={{ width: 400 }} className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='border border-1'>
                        <tr className='border border-1'>
                            <td className='text-center'>1</td>
                            <td className='text-center'>Event.png</td>
                            <td><img className='d-block mx-auto my-2' height={400} src="https://laotel.com/BBImages/TopPromotionSlide/Website/E72TopPrice1.jpg?323976003" alt="" /></td>
                            <td className='text-center justify-items-between'><FontAwesomeIcon className='icon' icon={faEdit} fontSize={30} /><FontAwesomeIcon className='icon' icon={faTrash} fontSize={30} /></td>
                        </tr>
                        <tr className='border border-1'>
                            <td className='text-center'>2</td>
                            <td className='text-center'>File.png</td>
                            <td><img className='d-block mx-auto my-2' height={400} src="https://laotel.com/BBImages/TopPromotionSlide/Website/EE30TopPrice1.jpg?568426226" alt="" /></td>
                            <td className='text-center justify-items-between'><FontAwesomeIcon className='icon' icon={faEdit} fontSize={30} /><FontAwesomeIcon className='icon' icon={faTrash} fontSize={30} /></td>
                        </tr>
                    </tbody>
                    <tr>

                    </tr>
                </table>
                <p style={{ marginTop: 150 }} className='fs-1 text-center fw-bold'>ເລືອກຣູບພາບ</p>
                <input className='form-control mb-5 w-50 d-block mx-auto' type="file" name="file" />
                <button className='d-block mx-auto mb-5 fs-1 px-5 rounded rounded-5 shadow buttonSave'>Save</button>
            </div>
        </div>
    )
}

export default BannerManagement
import React from 'react'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Event.css'
import {Link} from 'react-router-dom'

function EventManagement() {
  return (
    <div>
      <div className='d-flex justify-content-between'>

        <div className='mt-5 col-4'>
          <p className='fs-3'>Total: </p>
          </div>

        <div>
          <p className='fs-1 mt-3 text-center eventText'>Event ທັງຫມົດ</p>
        </div>

        <div className='d-flex float-end'>
          <p className='fs-3 pe-3'>ສ້າງ Event ໃຫມ່</p> <span><Link to="/CreateEvent"><button style={{ width: 80, backgroundColor: "#B2C8DF" }} className='fs-3 rounded rounded-2'>+</button></Link></span>
        </div>

      </div>

      <div>

        <table className='d-block mx-auto w-100 mb-5'>
          <thead className='border border-1 w-100 '>
            <tr>
            <th style={{ width: 100 }} className='text-center'></th>
              <th style={{ width: 100 }} className='text-center'>ຫົວຂໍ້</th>
              <th style={{ width: 500 }} className='text-center'>ຄຳອະທີບາຍ</th>
              <th style={{ width: 400 }} className='text-center'>ວັນ/ເດືອນ/ປີ ເລີ່ມກິດຈະກຳ</th>
              <th style={{ width: 400 }} className='text-center'>ເວລາເລີ່ມກິດຈະກຳ</th>
              <th style={{ width: 500 }} className='text-center'>ຣູບພາບ</th>
              <th style={{ width: 400 }} className='text-center'>ແກ້ໄຂ ຫລື ລົບ</th>
            </tr>
          </thead>
          <tbody className='border border-1'>
            <tr className='border border-1'>
              <td className='text-center'>1</td>
              <td className='text-center'>Random</td>
              <td>Random loun sok thouk r thit kup huay som jai nuek</td>
              <td className='text-center'>Start 02.12.2022</td>
              <td className='text-center'>Live: 20:30 Pm</td>
              <td><img className='d-block mx-auto my-2' height={400} src="https://laotel.com/BBImages/TopPromotionSlide/Website/E72TopPrice1.jpg?323976003" alt="" /></td>
              <td className='text-center justify-items-between'><FontAwesomeIcon className='icon' icon={faEdit} fontSize={30} /><FontAwesomeIcon className='icon' icon={faTrash} fontSize={30} /></td>
            </tr>
            <tr className='border border-1'>
            <td className='text-center'>1</td>
              <td className='text-center'>Random</td>
              <td>Random loun sok thouk r thit kup huay som jai nuek</td>
              <td className='text-center'>Start 02.12.2022</td>
              <td className='text-center'>Live: 20:30 Pm</td>
              <td><img className='d-block mx-auto my-2' height={400} src="https://laotel.com/BBImages/TopPromotionSlide/Website/E72TopPrice1.jpg?323976003" alt="" /></td>
              <td className='text-center justify-items-between'><FontAwesomeIcon className='icon' icon={faEdit} fontSize={30} /><FontAwesomeIcon className='icon' icon={faTrash} fontSize={30} /></td>
            </tr>
          </tbody>
          <tr>

          </tr>
        </table>
    
      </div>

    </div>

  )
}

export default EventManagement
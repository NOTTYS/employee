import React, { useState } from 'react'
import Date_picker from 'react-datepicker'
import '../../css/CreateEvent.css'

function CreaeEvent() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <p className='text-center fs-1 mt-5'>ສ້າງ Event</p>
            <div className='container border border-5 mb-5'>
                <form action="">
                    <div className='form-group p-3'>
                        <p>ຫົວຂໍ້</p>
                        <input className='form-control shadow-sm' type="text" />
                    </div>

                    <div className='form-group p-3'>
                        <p>ຄຳອະທິບາຍ</p>
                        <textarea className='form-control shadow-sm' name="" id="" cols="30" rows="10" placeholder='ຄຳອະທິບາຍ...'></textarea>
                    </div>

                    <div className='form-group d-flex p-3'>
                        <p className=''>ວັນ/ເດືອນ/ປີ ແລະ ເວລາ ເລີ່ມກິດຈະກຳ</p>
                        <Date_picker
                            className='form-control shadow-sm mt-2'
                            selected={startDate} onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            dateFormat="Pp"
                        />
                    </div>

                    <div className='form-group p-3'>
                    <p className=''>ອັບໂຫລດຣູບພາບ</p>
                        <input className='form-control my-3' type="file" name="file" />
                    </div>

                    <div className='d-flex mb-5 text-center justify-content-evenly'>
                        <button className='btnCancel w-25 py-3 shadow rounded rounded-3'>Cancel</button>
                        <button className='btnCreate w-25 py-3 shadow rounded rounded-3'>Create</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CreaeEvent
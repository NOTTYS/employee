import React from 'react'
import Select from 'react-select';
import './manage.css'

const Manage = () => {
  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" }
  ];
  
  
  return (
    <div className="App">
      <div style={{marginTop: 100}}>
      <h2>Choose your color</h2>
    <div className="dropdown-container mb-5">
      <Select
      className='mt-5'
        options={optionList}
        placeholder="Select color"
      />
    </div>
    <div class="form-outline">
  <textarea class="form-control" id="textAreaExample2" rows="8" cols="50"></textarea>
  
</div>
      </div>
    
  </div>
  )
}

export default Manage
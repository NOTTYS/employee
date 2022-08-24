import Login from '../src/Login/Login'
import test from './test';
import FormEmployee from './Add_info/FormEmployee';
import Create_Even from './layouts/Body/Table/Create_Even'
import History from './layouts/Body/Table/History';
import axios from 'axios';
import {useState} from 'react'
import Sidebar from './layouts/sidebar/Sidebar';
import Body from './layouts/Body/Body';

function App() {
  // const [post, setPost] = useState([])

  // axios.get('http://192.168.100.51:8080/api/event').then(res => {
  //   const data = res.data;
  //   setPost(data)
  // })
  return (
    <div>
    {/* <div>
      {post.map((e) => {
        return (
          <div>
            <h1>{e.title}</h1>
            <img src={e.image} alt={e.image}/>
          </div>
        )
      })}
    </div> */}
  {/* <div className='row justify-content-start'>
    <div className='col-3 border border-1'> */}
    <Sidebar/>
    {/* </div> */}
    {/* <div className='col-8 border border-1'> */}
    <Body/>
    {/* </div>
  </div> */}
   
   
   </div>

  
  );
}

export default App;

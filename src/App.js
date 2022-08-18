import Login from '../src/Login/Login'
import test from './test';
import FormEmployee from './Add_info/FormEmployee';
import Create_Even from './layouts/New_page/Table/Create_Even'
import History from './layouts/New_page/Table/History';
import axios from 'axios';
import {useState} from 'react'

function App() {
  // const [post, setPost] = useState([])

  // axios.get('http://192.168.100.51:8080/api/event').then(res => {
  //   const data = res.data;
  //   setPost(data)
  // })
  return (
    <>
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
   <History/> 
      </>

  
  );
}

export default App;

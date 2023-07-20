import {useState , useEffect}  from 'react';
import axios from "axios";


// or less ideally
import { Button ,Badge,ListGroup,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
export default function App(){


 const api = "http://localhost:3002" 
const [users,setUsers]=useState([])
const [name,setName]=useState("")
const [age,setAge]=useState("")
const [email,setEmail]=useState("")
//import data from DB
useEffect(()=>{  
  axios.get(`${api}/users`)
.then(res=>{ setUsers(res.data);
})

},[users])

const creatUser =()=>{
  if(name && age && email){
  axios.post(`${api}/creatUser`,{ name,age,email
    // name: name,
    // age: age,
    // email: email
  })
  .then(res=>res.data // try .user
  )

}}


return(
  <container>
<Form className='form'>
      
      <Form.Control type="text" placeholder="Enter name" onChange={e=>setName(e.target.value)} />
      <Form.Control type="number" placeholder="Enter age" onChange={e=>setAge(e.target.value)}/>
      <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
     


    <Button variant="primary" type="submit" onClick={creatUser}>creatUser
      
    </Button>
  </Form>

  <div className='result'>
    { users.map(user=>{

return(


<ListGroup  key={user._id}>
<ListGroup.Item variant='dark' className='d-flex justify-content-between'> 
<div className='ms-2 me-auto'>
  <div className='fw-bold'>{user.name}</div>{user.email}
</div>
<Badge bg='success' pill>{user.age}</Badge>
</ListGroup.Item>


</ListGroup>


)


})}</div>


{/* <div>
<input type='text' placeholder='name' onChange={e=>setName(e.target.value)}/>
<input type='number' placeholder='age' onChange={e=>setAge(e.target.value)}/>
<input type='text' placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
<button onClick={creatUser}>creatUser</button>

</div> */}





</container>



    
    
);
}


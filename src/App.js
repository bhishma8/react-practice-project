import React,{useState} from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [userArray,setUserArray]=useState([]);
  const addUserHandler=(newName,newAge)=>{
    setUserArray((prevUserArray)=>{
      return [...prevUserArray,{name:newName,age:newAge,id:Math.random().toString()}];
    });
  }
  return (
    <div>
      <UserForm onAddUser={addUserHandler}></UserForm>
      <UserList users={userArray}></UserList>
    </div>
  );
}

export default App;

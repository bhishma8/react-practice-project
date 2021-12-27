import React,{useState} from 'react';

import Card from './Card';
import classes from './UserForm.module.css'
function UserForm(){

    const [userName,setUserName]=useState('');
    const [age,setAge]=useState('');
    const formSubmitHandler=(event)=>
    {
        event.preventDefault();
        if(userName.trim().length===0 || age.trim().length===0)
        {
            return;
        }
        if(+age<1)
        {
            return;
        }
        console.log(userName,age);
        setUserName('');
        setAge('');
    }
    const userNameChangeHandler=(event)=>{
        setUserName(event.target.value);
    }
    const ageChangeHandler=event=>{
        setAge(event.target.value);
    }
        return(
            <Card className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' onChange={userNameChangeHandler} value={userName}></input>
                <label htmlFor='age'>Age</label>
                <input type='number' id='age' onChange={ageChangeHandler} value={age}></input>
                <button type='submit' >Add User</button>
            </form>
            </Card>
        );
}
export default UserForm;
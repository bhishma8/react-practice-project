import React,{useState} from 'react';
import Wrapper from './Wrapper';
import Card from './Card';
import classes from './UserForm.module.css'
import ErrorModal from './ErrorModal';
function UserForm(props){

    const [userName,setUserName]=useState('');
    const [age,setAge]=useState('');
    const [error,setError]=useState();
    const formSubmitHandler=(event)=>
    {
        event.preventDefault();
        if(userName.trim().length===0 || age.trim().length===0)
        {
            setError({
                title:'Invalid Input',
                message:'Please provide a valid name and age.'
            });
            return;
        }
        if(+age<1)
        {
            setError({
                title:'Invalid Age',
                message:'Please enter a valid age.'
            });
            return;
        }
        props.onAddUser(userName,age);
        setUserName('');
        setAge('');
    }
    const userNameChangeHandler=(event)=>{
        setUserName(event.target.value);
    }
    const ageChangeHandler=event=>{
        setAge(event.target.value);
    }
    const errorHandler=()=>{
        setError(null);
    }
        return(
            <Wrapper>
            
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}></ErrorModal>}
            
            <Card className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' onChange={userNameChangeHandler} value={userName}></input>
                <label htmlFor='age'>Age</label>
                <input type='number' id='age' onChange={ageChangeHandler} value={age}></input>
                <button type='submit' >Add User</button>
            </form>
            </Card>
            </Wrapper>
        );
}
export default UserForm;
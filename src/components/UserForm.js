import React,{useState,useRef} from 'react';
import Wrapper from './Wrapper';
import Card from './Card';
import classes from './UserForm.module.css'
import ErrorModal from './ErrorModal';
function UserForm(props){

    const nameInputRef=useRef();
    const ageInputRef=useRef();
    
    const [error,setError]=useState();
    const formSubmitHandler=(event)=>
    {
        event.preventDefault();
        const userName=nameInputRef.current.value;
        const age=ageInputRef.current.value;
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
        nameInputRef.current.value='';
        ageInputRef.current.value='';
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
                <input type='text' id='username'  ref={nameInputRef}></input>
                <label htmlFor='age'>Age</label>
                <input type='number' id='age'  ref={ageInputRef}></input>
                <button type='submit' >Add User</button>
            </form>
            </Card>
            </Wrapper>
        );
}
export default UserForm;
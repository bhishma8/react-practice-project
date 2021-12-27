import React from 'react';
function UserForm(){

    const formSubmitHandler=(event)=>
    {
        event.preventDefault();
    }
        return(
            <form onSubmit={formSubmitHandler}>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username'></input>
                <label htmlFor='age'>Age</label>
                <input type='number' id='age'></input>
                <button type='submit' >Add User</button>
            </form>
        );
}
export default UserForm
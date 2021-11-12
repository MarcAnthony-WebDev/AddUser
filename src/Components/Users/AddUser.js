import React, { useState } from 'react';
import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import { getByLabelText } from '@testing-library/dom';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    setEnteredUsername('');
    setEnteredAge('');
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log(enteredUsername);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log(enteredAge);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' onChange={usernameChangeHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from './InputItem.module.css';

const InputItem = ({
  onClickAdd,
}) => {

const initialState =  {
    textField: {
      inputValue: '',
      errorStatus: false,
      helperText: ' ',
    },
  };

  const [inputValue,setInputvalue,] = useState(initialState.textField.inputValue);

  const [errorStatus,setErrorStatus,] = useState(initialState.textField.errorStatus);

  const [helperText,setHelperText,] = useState(initialState.textField.helperText);


 const onButtonClick = () => {
     setInputvalue('');
     setErrorStatus(false);
     setHelperText(' ');

 if (inputValue) {
      onClickAdd(inputValue);
} else { setInputvalue('');
    setErrorStatus(true);
    setHelperText("The field must not be empity");
  } 
};

 return (<Grid className={styles.wrapper}> 
   <TextField
      error={errorStatus}
      helperText={helperText}
      className={styles.textField}
      fullWidth
      label="Type the name of the task">
    </TextField>
           
    <Button className={styles.button}
        variant='contained'
        fullWidth
        onClick={onButtonClick}
        onClickAdd={onClickAdd}> 
                Add
    </Button>
  </Grid>);
};

export default InputItem;
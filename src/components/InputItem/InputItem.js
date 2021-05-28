import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class InputItem extends React.Component {
    state = {
        inputValue: ''
    };

    onButtonClick = () => {
            this.setState ({
    		    inputValue: ''
    	    });

            this.props.onClickAdd(this.state.inputValue)
    }

    render(){

        return (<Grid>
            <TextField 
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Type the name of the task"
                fullWidth
                value={this.state.inputValue}
                isError={this.props.isError}
                onChange={event => this.setState({inputValue: event.target.value})}
            />
            <Button
                variant='contained'
                color='#d3d3d3'
                fullWidth
                onClick={this.onButtonClick}
                onClickAdd ={this.onClickAdd}
                > 
                Add
            </Button>
            </Grid>);
    }
}

export default InputItem;
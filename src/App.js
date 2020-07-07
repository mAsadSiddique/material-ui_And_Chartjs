import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import BarChart from './Bar';
import PieChart from './pieChart';

function App() {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
        },
        paper: {
            height: 300,
            width: 400,
            margin: '0px auto',
            marginTop: '30px',
            textAlign: 'center',
        },
        input_type: {
            padding: 10,
            margin: '0px 5px',
            width: '95%',
        }
    }));
    const classes = useStyles();

    return ( <
        div > { /* //  <div className={classes.root} > */ }

        {
            /* <Paper elevation={3} className={classes.paper} >
                    <h1>Login</h1>
                    
                      
                    <TextField id="standard-basic" label="Email"  className={classes.input_type}/>
                    <TextField id="standard-basic" label="Password" className={classes.input_type}/>
                    <br/>
                    <Button variant="contained" color="primary" className={classes.input_type}>
                    Primary
                    </Button>
             


                  </Paper>
                  <Navbar/> */
        } <
        PieChart / >
        <
        BarChart / >
        // {/* </div> */}
        <
        /div>
    );
}

export default App;
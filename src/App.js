import logo from './logo.svg';
import React from "react";
import './App.css';
import Grid from '@material-ui/core/Grid'
import Header from "./views/Header";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Product from "./views/Product";
import User from "./views/User";

class App extends React.Component {
    render(){
        return (
            <Grid container>
                <Grid item style={{background : 'red'}} xs={12}>
                    <Header/>
                </Grid>
                <Grid item style={{background : 'white'}} className="center" xs={12}>
                    <Router>
                        <Switch>
                            <Route path="/product">
                                <Product/>
                            </Route>
                            <Route path="/user">
                                <User/>
                            </Route>
                            <Route path="/">
                                Home
                            </Route>
                        </Switch>

                    </Router>
                </Grid>
                <Grid item style={{background : 'blue'}}  xs={12}>Footer</Grid>
            </Grid>
        );
    }

}

export default App;

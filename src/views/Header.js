import React from "react";
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

class Header extends React.Component{
    render() {
        return(
            <Grid container>
                <Button href="/product">Product</Button>
                <Button href="/user">User</Button>
                <Button href="/login">Login</Button>
            </Grid>

        )
    }
}

export default Header;
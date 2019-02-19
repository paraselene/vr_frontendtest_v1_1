import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import CssBaseline from '@material-ui/core/CssBaseline';

//initialize the localStorage
window.localStorage["store"] = window.localStorage["store"] ? window.localStorage["store"] : "[]"
const store = createStore(reducers)

//save the Redux store to localStorage
store.subscribe(() => {
    window.localStorage["store"] = JSON.stringify(store.getState());
    console.log(store.getState());
})

//style of TabBar
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

//Main App for the Shopping Cart which contains 2 Tabs
class App extends React.Component {
    state = {
        value: 0,
    };
    
    changeTab = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <Provider store={store}>
                <div className={classes.root}>
                <CssBaseline />
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.changeTab}>
                            <Tab label="Product List" />
                            <Tab label="Shopping Cart" />
                        </Tabs>
                    </AppBar>
                    {value === 0 && <ProductList />}
                    {value === 1 && <ShoppingCart />}
                </div>
            </Provider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
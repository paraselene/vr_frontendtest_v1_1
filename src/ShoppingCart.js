import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { modifyQuantity, removeProduct } from './actions'
import { connect } from 'react-redux';

/* 
 * second tab for Shopping Cart
 * input: productsInCart - products that currently in the Shopping Cart
 *         dispatch - dispatch function for the Redux
 * output: JSX for the Shopping Cart Tab
*/
const ShoppingCart = ({ productsInCart, dispatch }) => {
    var overallTotal = 0;
    return <>
        {
            productsInCart.map((product) => {
                overallTotal += product.price * product.quantity;
                return <React.Fragment key={product.name}>
                    <Card>
                        <CardContent>
                            <Typography variant="title"> {product.name}</Typography>
                            <Typography variant="subheading">Unit Price: ${product.price.toFixed(2)}</Typography>
                            <div>
                                <Typography inline={true} variant="subheading">Quantity: </Typography>
                                <TextField id="time" type="number" value={product.quantity} onChange={(e) => {
                                    if (!e.target.value || parseInt(e.target.value) < 0)
                                        e.target.value = "0"
                                    dispatch(modifyQuantity({ name: product.name, quantity: parseInt(e.target.value) }))
                                }} />
                            </div>
                            <Typography variant="subheading">Total: ${(product.price * product.quantity).toFixed(2)}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => { dispatch(removeProduct(product.name)) }}>Remove from Cart</Button>
                        </CardActions>
                    </Card>
                    <Divider />
                </React.Fragment>
            })
        }
        <Typography variant="subheading">Overall Total: ${overallTotal.toFixed(2)}</Typography>
    </>
}

const mapStateToProps = state => (
    { productsInCart: state }
)

export default connect(
    mapStateToProps
)(ShoppingCart);
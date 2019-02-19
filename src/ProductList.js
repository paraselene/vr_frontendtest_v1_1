import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { products } from "./products";
import { addProduct } from './actions';
import { connect } from 'react-redux';

/* 
 * first tab for Product List
 * input: dispatch - dispatch function for the Redux
 * output: JSX for the Product List Tab
*/
const ProductList = ({ dispatch }) => (
    <>
        {products.map((product) =>
            <React.Fragment key={product.name}>
                <Card>
                    <CardContent>
                        <Typography variant="title"> {product.name}</Typography>
                        <Typography variant="subheading">Unit Price: ${product.price.toFixed(2)}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => { dispatch(addProduct(products.filter(product2 => product.name === product2.name)[0])) }}>Add to Cart</Button>
                    </CardActions>
                </Card>
                <Divider />
            </React.Fragment>
        )}
    </>
)

export default connect()(ProductList)
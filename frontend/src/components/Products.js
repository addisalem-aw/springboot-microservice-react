import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import { Card, CardContent, Typography, Container } from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(response => setProducts(response.data)).catch(error => console.error(error));
    }, []);

    return (
        <Container>
            <Typography variant="h4">Product List</Typography>
            {products.map(product => (
                <Card key={product.id} style={{ marginBottom: 10 }}>
                    <CardContent>
                        <Typography>{product.name} - ${product.price}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default Products;
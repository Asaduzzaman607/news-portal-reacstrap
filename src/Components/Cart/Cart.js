import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cart = (props) => {
    const{title, description,urlToImage}=props.article;

    return (
        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
            
            <Card  style={{ width: '20rem' }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                
                 <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}
                    
                    </Card.Text>
                    <Button variant="secondary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;
import React from 'react';

import { Card } from 'react-bootstrap';
const Comments = ({items}) => {
  return (
//   <p style={{fontSize:'35px',textTransform:'uppercase',color:'red'}}><strong>CARD Title</strong></p>


        <div className='col-lg-3 mb-4'>
        <Card >
            <Card.Body>
                <Card.Title>{items.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{items.email}</Card.Subtitle>
                <Card.Text>
                    {items.body}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
         </Card>
        </div>

  );
}

export default Comments;

import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import Footer from './Footer';
import { Button, Card, Col, Container,Row } from 'react-bootstrap';
import { blog } from './Data/blog';
import Comments from './comments'
import { comments } from './Data/comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
function App() {
 let headerInfo={
  email:"vishal.malviya9639@gmail.com",
  phone:"+919982319639"
 }
  return (
    <div className="App">
        <Header headerInfo ={headerInfo} cname="Vishal Malviya">
            <h1>Welcome to Header section</h1>
            <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>
        </Header>
        {/* <Container fluid>
          <Container>
              <Row>
                <Col className='col-12 col py-4'>
                  <h1>Our Courses</h1>
                </Col>
              </Row>

              <Row>
                <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </Col>
                <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </Col>
                <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </Col>
                <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
                
          </Container>
        </Container> */}
        <Container>
          <Row >
            {blog.map((v,i)=>{
              return(
                 <ProductItems pitems={v} key={i}/>    
              )
            })}
          </Row>

          <Row>
            <p style={{fontSize:'35px',textTransform:'uppercase',color:'red'}}><strong>CARD Title</strong></p>
            {comments.map((v,i)=>{ 
              return(
                  <Comments items={v} key={i} />
              )
            })}            
          </Row>


                       
        </Container>

        <Footer/>

    </div>
  );
}

export default App;

function ProductItems({pitems}){
  return(
    <div className='col-lg-3 mb-4'>
       <Card >                 
          <Card.Body>
            <Card.Title>
              {pitems.title}
            </Card.Title>
            <Card.Text>
              {pitems.body}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    </div>
  )
}
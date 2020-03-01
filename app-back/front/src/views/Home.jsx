import React from 'react';
import NavigationBar from '../components/navigation/NavigationBar';
import Footer from '../components/navigation/Footer';
import View from '../components/layouts/View';
import MainViewContent from '../components/layouts/MainViewContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, Container, Image, Col, Row } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styled from 'styled-components';

const Logo = styled.div`
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 150px;
`;

class Home extends React.Component {
    render() {
        return (
            <View>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <NavigationBar />
                <MainViewContent>

                    <h1>PetSociety</h1>

                    <Container>
                        <Row>
                            <Col xs={12}>
                                <Carousel>
                                    <Carousel.Item>
                                        <Image
                                            className="d-block w-100"
                                            src="https://s6.eestatic.com/2019/03/06/como/Perros-Mascotas-Alimentacion-Motivacion-Estres-Gatos-Educacion-Como_hacer_381222727_117155265_1024x576.jpg"
                                            alt="First slide"
                                            fluid
                                            rounded
                                        />
                                        <Carousel.Caption>
                                            <h3>Encuentra tu mascota ideal</h3>
                                            <p>El unico lugar donde puedes encontrar la mascota que buscas en poco tiempo</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                            className="d-block w-100"
                                            src="https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2017/12/gato-curioso-felino-08-12-2017.jpg?itok=P0c-OAEz"
                                            alt="Third slide"
                                            fluid
                                            rounded
                                        />

                                        <Carousel.Caption>
                                            <h3>Contacta con los dueños en pocos clicks</h3>
                                            <p>La adoción de mascotas nunca fué tan fácil y rapida.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>

                        </Row>
                    </Container>


                </MainViewContent>
                <Footer />
            </View>
        );
    }
}

export default Home;
import React from "react";
import profile from "../profile";
import {Carousel, CarouselCaption, CarouselItem, Container} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import WaterWave from 'react-water-wave';
import backgroundImage from '../assets/intro_background.jpg'

class IntroPage extends React.Component {
    render() {
        return <WaterWave
            imageUrl={backgroundImage}
            perturbance="0.7"
            dropRadius="100"
            style={{
                backgroundSize: 'cover',
                height:"100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            {({}) =>
                (
                    <Container>
                        <h1
                            className="unselectable"
                            style={{
                                fontSize: "100px",
                                color: "white"
                            }}
                            align="center">Random Asian Dude</h1>
                        <footer>
                            <Container>
                                <a href="https://www.linkedin.com/in/luke-zhang/"><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="https://github.com/EDLuke"><FontAwesomeIcon icon={faGithub}/></a>
                                <a href="https://www.instagram.com/ed_lukez/"><FontAwesomeIcon icon={faInstagram}/></a>
                            </Container>
                        </footer>
                        <p
                            className="bottom"
                            style={{
                                fontSize: "10px",
                                color: "white"
                            }}>Photo by Michael Benz on Unsplash</p>
                    </Container>
                )
            }
        </WaterWave>
    }
}

export default IntroPage;
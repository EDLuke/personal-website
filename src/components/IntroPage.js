import React from "react";
import { Container} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

class IntroPage extends React.Component {
    render() {
        return  <div className="intro-background-component">
                    <div>
                        <h1
                            className="unselectable"
                            style={{
                                fontSize: "calc(80px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
                                lineHeight: "calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
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
                    </div>
                </div>
    }
}

export default IntroPage;
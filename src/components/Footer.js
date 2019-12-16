import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '../../node_modules/@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <hr/>
                <Container>
                    <a href="https://www.linkedin.com/in/luke-zhang/"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="https://github.com/EDLuke"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.instagram.com/ed_lukez/"><FontAwesomeIcon icon={faInstagram}/></a>
                </Container>
            </footer>
        )
    }
}

export default Footer;
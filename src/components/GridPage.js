import React from "react";
import {Card, CardImg, Col, Container, Row} from "reactstrap";
import giltImg from "../assets/gilt-card-img.jpg"
import latchImg from "../assets/latch-card-img.jpg"

class GridPage extends React.Component {
    render() {
        return (
            <div className="grid-background-component">
                <Container style={{backgroundColor: 'transparent'}}>
                    <Row>
                        <Col xs="6" sm="4">
                            <a href="https://play.google.com/store/apps/details?id=com.saksfifthavenue.android&hl=en_US">
                                <Card style={{border: "none"}}>
                                    <CardImg top width="100%" src={giltImg} alt="Gilt Tech" />
                                </Card>
                            </a>
                        </Col>

                        <Col xs="6" sm="4">
                            <a href="https://www.youtube.com/watch?v=lb_9oYGL2z4">
                                <Card style={{border: "none"}}>
                                    <CardImg top height="100%" src={latchImg} alt="Gilt Tech" />
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default GridPage;
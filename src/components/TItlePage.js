import React from "react";
import {Button, Container} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class TitlePage extends React.Component {
    render() {
        return <Container
                style={{
                    height:"20vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
            <div className="text-center">
                <p
                    style={{
                        fontSize: "calc(20px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
                        lineHeight: "calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
                        color: "black"
                    }}
                    align="center"
                >
                    Hi I'm Luke Zhang, a Random Asian Dude.
                </p>
                <a href="mailto:anything@randomasiandude.me">
                    <Button
                        outline
                        buttonStyle={{ borderRadius: 0 }}
                        style={{
                            marginTop: "20px",
                            borderRadius: 0,
                            fontFamily: "Roboto"
                        }}
                        color="secondary"
                    >
                        got an idea?
                    </Button>
                </a>
            </div>
        </Container>
    }
}

export default TitlePage;
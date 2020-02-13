import React from "react";
import {Button, Container} from "reactstrap";

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
                <a href="mailto:anything@randomasiandude.me">
                    <Button
                        outline
                        style={{
                            fontSize: "calc(20px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
                            borderRadius: 0,
                            paddingTop: "12px",
                            paddingBottom: "12px",
                            paddingLeft: "24px",
                            paddingRight: "24px",
                            fontFamily: "Roboto"
                        }}
                        color="secondary"
                    >
                        got idea?
                    </Button>
                </a>
            </div>
        </Container>
    }
}

export default TitlePage;
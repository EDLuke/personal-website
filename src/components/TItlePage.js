import React from "react";
import {Container} from "reactstrap";

class TitlePage extends React.Component {
    render() {
        return <Container
                style={{
                    height:"20vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
            <div>
                <h2
                    style={{
                        fontSize: "calc(20px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
                        lineHeight: "calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
                        color: "black"
                    }}
                    align="center"
                >
                    Hi I'm Luke Zhang, a Random Asian Dude.
                </h2>
            </div>
        </Container>
    }
}

export default TitlePage;
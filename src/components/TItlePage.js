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
            <h1>Hi I'm Luke Zhang. A Random Asian Dude.</h1>
        </Container>
    }
}

export default TitlePage;
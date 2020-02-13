import React from 'react';
import './App.css';
import IntroPage from "./components/IntroPage";
import TitlePage from "./components/TItlePage";
import {Helmet} from 'react-helmet';

class App extends React.Component  {
    render() {

        return (
            <div className="App" style={{height : '100vh'}}>
                <Helmet>
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Random Asian Dude"/>
                    <meta property="og:description" content="A bit random"/>
                    <meta property="og:image" content="https://random-asian-dude-site.s3.us-east-2.amazonaws.com/assets/v0_1_2.png"/>
                    <meta property="og:url" content="http://randomasiandude.me/"/>
                    <meta name="description" content="A Random Asian Dude's Website" />
                </Helmet>
                <IntroPage />
                <TitlePage />
            </div>
        );
    }

}

export default App;

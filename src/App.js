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
                    <meta property="og:image" content="http://randomasiandude.me/static/media/intro_background.866989c7.jpg"/>
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

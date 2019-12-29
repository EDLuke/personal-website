import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import IntroPage from "./components/IntroPage";
import TitlePage from "./components/TItlePage";

class App extends React.Component  {
    render() {

        return (
            <div className="App" style={{height : '100vh'}}>
                <IntroPage />
                <TitlePage />
                {/*<TopBar />*/}
                {/*<Profile />*/}
            </div>
        );
    }

}

export default App;

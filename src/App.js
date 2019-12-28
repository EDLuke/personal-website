import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import IntroPage from "./components/IntroPage";

class App extends React.Component  {
    render() {

        return (
            <div className="App" style={{height : '100vh'}}>
                <IntroPage />
                {/*<TopBar />*/}
                {/*<Profile />*/}
            </div>
        );
    }

}

export default App;

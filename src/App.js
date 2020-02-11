import React from 'react';
import './App.css';
import IntroPage from "./components/IntroPage";
import TitlePage from "./components/TItlePage";
import GridPage from "./components/GridPage";

class App extends React.Component  {
    render() {

        return (
            <div className="App" style={{height : '100vh'}}>
                <IntroPage />
                <TitlePage />
                <GridPage />
            </div>
        );
    }

}

export default App;

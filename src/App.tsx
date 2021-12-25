import React from 'react';
import './App.css';
import {
    useRoutes
} from "react-router-dom";
import {rootPath} from "./routes/routes";


function App() {
    const element = useRoutes(rootPath)
    return (<div className="App">{element}</div>);
}

export default App;

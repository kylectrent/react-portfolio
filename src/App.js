import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Projects from './pages/projects/projects';
import About from './pages/about/about';
import Header from './components/header/header.component';
import Home from './pages/home/home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content p-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

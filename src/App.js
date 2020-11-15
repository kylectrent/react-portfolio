import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Projects from './pages/projects/projects';
import About from './pages/about/about';
import Header from './components/header/header.component';
import Home from './pages/home/home';
import AspNet, {ConstructionAdvocates, DragonChain, UWPAutomation, SDOTPermits} from './pages/project-components/project-components';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content p-3">
          <Switch>
            <Route path="/react-portfolio" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/aspnet" component={AspNet} />
            <Route path="/constructionadvocates" component={ConstructionAdvocates} />
            <Route path="/dragonchain" component={DragonChain} />
            <Route path="/uwpautomation" component={UWPAutomation} />
            <Route path="/sdotpermits" component={SDOTPermits} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

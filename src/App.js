import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';
//import Resume from './components/Resume';

function App() {
  return (
<div className="demo-big-content">
  {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
    <Layout>
        <Header title="Title" className="header-color" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">Aboout Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">Aboout Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        {/*The body of the page is within the <Content> */}
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;

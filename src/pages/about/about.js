import React from 'react';
import { Modal } from 'react-bootstrap';
import ContentBlock from '../../components/content-block/content-block.component'
import './about.styles.scss'

class About extends React.Component {
    state = {
        show: false
    }
    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };
    render() {
        return (
            <div className="about-page">
                 <ContentBlock title="Kyle Trent, Software Developer"
                    description="Welcome to my website! My name is Kyle Trent, and I am a software developer. The technologies I am most familier 
                    with are C#, and full stack web development!">
                    <img src={require('../../assets/kyle-trent.jpg')} alt="Kyle Trent" />
                </ContentBlock>
                <ContentBlock title="My Up to Date Resume"
                    description="Click on the image of my Resume to get a closer look at my experience, education, skills,
                        accredations and more!">
                        <img className="resume" src={require("../../assets/Resume.PNG")} alt="Kyle's Resume" onClick={this.showModal} />
                        <Modal show={this.state.show} onHide={this.showModal} size="lg">
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="iframe-container">
                                    <iframe title="Resume PDF" src={require("../../assets/resume.pdf")} alt="Kyle's Resume" />
                                </div>
                            </Modal.Body>
                        </Modal>
                </ContentBlock>
                <ContentBlock title="My GitHub" 
                    description="Go check out my github, where I work on existing projects and upload my own! Click on the 
                        thumbnail to visit my github page.">
                   <a href="https://github.com/kylectrent" target="_blank" rel="noopener noreferrer">
                       <div className="github">
                            <img src={require('../../assets/github.jpeg')} alt="GitHub" />
                            <p style={{textAlign:"center"}}>Click Here to Navigate to my GitHub</p>
                       </div>
                   </a>
                </ContentBlock>
                <ContentBlock title="My LinkedIn" 
                    description="Go check out my LinkedIn where you can view testimonials from co workers as well as other 
                        professional information about me!">
                    <a href="https://www.linkedin.com/in/kylectrent" target="_blank" rel="noopener noreferrer">
                        <div className="github" >
                            <img src={require('../../assets/linkedin.webp')} alt="LinkedIn" />
                            <p style={{textAlign:"center"}}>Click Here to Navigate to my LinkedIn</p>
                        </div>
                   </a>
                </ContentBlock>
            </div>
        );
    }
}
export default About;
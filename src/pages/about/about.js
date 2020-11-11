import React from 'react';
import { Modal, Row, Container } from 'react-bootstrap';
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
            <div>
                <Container className="about-page">
                    <Row>
                            <ContentBlock title="Software Developer, BS"
                                description="Welcome to my website! My name is Kyle Trent, I am a software developer. The technologies I am most familier 
                                    with are C#, and full stack web development.">
                                <img src={require('../../assets/kyle-trent.jpg')} alt="Kyle Trent" />
                            </ContentBlock>
                            <ContentBlock title="Skills and Experience"
                                description="I utilize many technologies daily to develop software, both professionally and for fun! Click my resume to view it.">
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
                    </Row>
                    <Row>
                            <a href="https://github.com/kylectrent" target="_blank" rel="noopener noreferrer">
                                <div className="github">
                                    <img src={require('../../assets/github.jpeg')} alt="GitHub" />
                                    <p style={{ textAlign: "center" }}>GitHub</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/kylectrent" target="_blank" rel="noopener noreferrer">
                                <div className="github" >
                                    <img src={require('../../assets/linkedin.webp')} alt="LinkedIn" />
                                    <p style={{ textAlign: "center" }}>LinkedIn</p>
                                </div>
                            </a>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default About;
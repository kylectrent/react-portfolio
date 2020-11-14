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
                            description="Welcome to my website, my name is Kyle Trent! The technologies I am most familier 
                                    with are C#, and full stack web development." maxWidth="550px" fontSize="21px">
                            <img src={require('../../assets/kyle-trent.jpg')} alt="Kyle Trent" />
                        </ContentBlock>
                        <ContentBlock title="Skills and Experience"
                            description="I utilize many technologies daily to develop software, both professionally and for fun! Click my resume to view it."
                            maxWidth="550px" fontSize="21px" >
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
                        <a className="github" href="https://github.com/kylectrent" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/github.jpeg')} alt="GitHub" />
                            <p style={{ textAlign: "center" }}>GitHub</p>
                        </a>
                        <a className="linkedin" href="https://www.linkedin.com/in/kylectrent" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/linkedin.jpeg')} alt="LinkedIn" />
                            <p style={{ textAlign: "center" }}>LinkedIn</p>
                        </a>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default About;
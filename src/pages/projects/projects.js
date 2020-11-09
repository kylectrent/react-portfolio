import React from 'react';
import  Thumbnail  from '../../components/thumbnail/thumbnail.component';
import ContentBlock from '../../components/content-block/content-block.component'

function Projects(props) {
    return(
        <>
            <ContentBlock title="Asp.Net Applications" 
                description="At the company Allyis, Inc I used Asp.Net to facilitate development and maintenance 
                    of many fantastic web applications using proper coding guidelines in a detail oriented fashion. Click on the thumbnail
                    for a deeper explanation!">
                <Thumbnail link="" image= {require('../../assets/aspnet.png')} title="Full Stack Experience" 
                    category="I worked on this project project profesisonally" />
            </ContentBlock>
            <ContentBlock title="Construction Advocates" 
                description="I created a website for my friend who works with a lawyer to advertise his business. The site includes 
                    some beautiful css and html thanks to bootstrap, with fluid animations and an engaging user interface.">
                <Thumbnail link="" image= {require('../../assets/construction-watchdogs.PNG')} title="Showcasing CSS and HTML" 
                    category="I worked on this project for a friend" />
            </ContentBlock>
            <ContentBlock title="DragonChain Mobile App" 
                description="This was my senior capstone project. We built a cross platform mobile forum using the api
                    created by the blockchain company DragonChain. ">
            </ContentBlock>
            <ContentBlock title="UWP Automation" 
                description="">
            </ContentBlock>
            <ContentBlock title="SDOT Permits Conversion Helper" 
                description="">                    
            </ContentBlock>
        </>
    )
}

export default Projects;
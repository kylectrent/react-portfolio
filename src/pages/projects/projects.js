import React from 'react';
import  Thumbnail  from '../../components/thumbnail/thumbnail.component';
import ContentBlock from '../../components/content-block/content-block.component'

function Projects(props) {
    return(
        <>
            <ContentBlock title="Asp.Net Applications" 
                description="Using Asp.Net, React.Js, and Javascript flavors to faciliate development and maintenance of 
                    web applications">
                <Thumbnail link="/aspnet" image= {require('../../assets/aspnet.png')} title="Full Stack Experience" 
                    category="Internal applications used by a Microsoft partner company" />
            </ContentBlock>
            <ContentBlock title="Construction Advocates" 
                description="Bootstrap made website with some customization">
                <Thumbnail link="" image= {require('../../assets/construction-watchdogs.PNG')} title="CSS and HTML Project" 
                    category="A website promoting a business associated with law practice" />
            </ContentBlock>
            <ContentBlock title="DragonChain Mobile App" 
                description="Cross platform, developed with Flutter programming language combined with the dart repository">
                <Thumbnail link="" image={require('../../assets/dragonchain.png')} title="Mobile Development" 
                    category="Skeleton mobile version of an existing forum" />
            </ContentBlock>
            <ContentBlock title="UWP Automation" 
                description="C# application utilizing Appium to read JSON scripts designed to automate UWP applications">
                <Thumbnail link="" image={require('../../assets/automation.jpg')} title="Automation for Testing" 
                    category="Used to aid the manual testing of applications" />
            </ContentBlock>
            <ContentBlock title="SDOT Permits Conversion" 
                description="Utilized Python and the Kivy framework, packaged into Windows .exe">
                <Thumbnail link="" image={require('../../assets/sdot.png')} title="Automation for Manual Conversion" 
                    category="Accelerated conversion of permit data with new solution" />       
            </ContentBlock>
        </>
    )
}

export default Projects;
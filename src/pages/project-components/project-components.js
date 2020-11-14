import React from 'react';
import ProjectPage from '../../components/project-page/project-page.component';
import './project-components.styles.scss';

function AspNet() {
    //return heading, bullet list of points, and an image at the bottom
    return (
        <>
            <ProjectPage title="Asp.Net" bulletPoints={
                ['Helped develop and maintain a number of web applications using Asp.Net',
                'Users of these apps includes employees of Allyic, Inc. as well as various Microsoft partner vendor companies',
                'Worked on all aspects of the websites: full stack experience',
                'Technologies used includes React.Js, CSS, HTML, C#, SQL, Javascript, JQuery, Ajax',
                'Also conducted exensive work to increase accessibility standards in the UI of the Microsoft incentives enrollment landing page']} >
                
            </ProjectPage>
        </>
    );
}

function ConstructionAdvocates() {
    //return heading, bullet list of points, and an image at the bottom
    return (
        <>
            <ProjectPage title="Construction Advocates" bulletPoints={
                ['Utilized bootstrap template to generate of website to promote a business',
                'Users of this app includes anyone who qualifies to file a certain type of class action lawsuit',
                'Technologies used indludes HTML, CSS, Javascript, Website Hosting & Deployment']} >
                
                <a className="project-page-link" href="http://constructionwatchdogs.com/index.html" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../assets/construction-watchdogs2.PNG')} alt="Construction Advocates" />
                    <p >Click to Navigate to the Website</p>
                </a>
            </ProjectPage>
        </>
    );
}

function DragonChain() {
    //return heading, bullet list of points, and an image at the bottom
    return (
        <>
            <ProjectPage title="Dragon Chain" bulletPoints={
                ['Created skeleton cross platform mobile forum for the blockchain company DraginChain',
                'Users include members of the crypto-aware community and cutsomers of DragonChain',
                'Developed using the API DragonChain had created for its web forum',
                'Technologies used included Dart, Flutter SDK, Android/IOS Emulation, token-based communication with RESTful JSON API']} >
                
                <a className="project-page-link" href="https://den.social/" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../assets/den.PNG')} alt="Dragon Den" />
                    <p >My project is based off of DragonChains existing forum</p>
                </a>
            </ProjectPage>
        </>
    );
}

function UWPAutomation() {
    //return heading, bullet list of points, and an image at the bottom
    return (
        <>
            <ProjectPage title="UWP Automation" bulletPoints={
                ['Developed software that automates UWP applications to aid manual testing',
                'Users included manual testers of a new POS system at Microsoft',
                'Appium is used after reading external JSON script which describes the behavior of a UWP app',
                'Technologies used include C#, JSON, Appium']} >
                
            </ProjectPage>
        </>
    );
}

function SDOTPermits() {
    //return heading, bullet list of points, and an image at the bottom
    return (
        <>
            <ProjectPage title="SDOT Permits" bulletPoints={
                ['Developed software to aid in manual conversion of permit data with new solution',
                'Users included data analysts at Seattle Dept. of Transportation converting data manually',
                'The software includes a UI which allows for searching of Excell spreadsheets for matching permit data',
                'Technologies used include Python, Kivy Framework, PyInstaller, Spec#']} >
                
            </ProjectPage>
        </>
    );
}


export { 
  ConstructionAdvocates,
  DragonChain,
  UWPAutomation,
  SDOTPermits
}

export default AspNet;
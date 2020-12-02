import React from 'react';
import Anime, {anime} from 'react-anime';
import './home.styles.scss';

class Home extends React.Component {
    componentDidMount() {
        var lettersContainer = document.getElementsByClassName("letters");
        lettersContainer[0].style.minWidth = this.container1.offsetWidth + "px";
        lettersContainer[1].style.minWidth = this.container2.offsetWidth + "px";
        lettersContainer[2].style.minWidth = this.container3.offsetWidth + "px";
        var textWrapper = document.getElementsByClassName('letters');
        for(var i=0; i<textWrapper.length;i++) {
            textWrapper[i].innerHTML = textWrapper[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        }

        anime.timeline()
            .add({
                targets: '.home-text .letter',
                scale: [0.3,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 70 * (i+1)
            }).add({
                targets: '.home-text .line',
                scaleX: [0,1],
                opacity: [0.5,1],
                easing: "easeOutExpo",
                duration: 700,
                offset: '-=875',
                delay: (el, i, l) => 80 * (l - i)
            });
    }
    render() {
        return(
            <div className="home-page">
                <Anime easing="easeOutElastic"
                duration={1000}
                direction="reverse"
                delay={(el, index) => index * 240}
                translateX='13rem'
                scale={[.75, .9]}>
                    <h1 className="home-text">
                    <span className="text-wrapper">
                        <span className="line line1"></span>
                        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                            <span className="letters" ref={el => (this.container1 = el)}>KYLE'S </span>
                            <span className="letters" ref={el => (this.container2 = el)}>PORTFOLIO </span>
                            <span className="letters" ref={el => (this.container3 = el)}>SITE</span>
                        </div>
                        <span className="line line2"></span>
                    </span>
                    </h1>
                </Anime>
                <img src={require('../../assets/portfolio-svgrepo-com.svg')} alt="Portfolio" />
            </div>
        );
    }
}

export default Home;
import React from 'react';
import Anime, {anime} from 'react-anime';
import './home.styles.scss';

class Home extends React.Component {
    componentDidMount() {
        var textWrapper = document.querySelector('.home-text .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

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
                    <h1 class="home-text">
                    <span class="text-wrapper">
                        <span class="line line1"></span>
                        <span class="letters">KYLE'S PORTFOLIO SITE</span>
                        <span class="line line2"></span>
                    </span>
                    </h1>
                </Anime>
                <img src={require('../../assets/portfolio-svgrepo-com.svg')} alt="Portfolio" />
            </div>
        );
    }
}

export default Home;
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import moon from './moon/moon.png';
import bg from './moon/bg.jpg';
import mountain from './moon/mountain.png';
import road from './moon/road.png';
import Text from './Text'
import MoonText from './MoonText';

export default function Moon() {
    return (
        <div className="App">
            <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
                <ParallaxLayer offset={0} speed={0.25}>
                    <img src={bg}></img>
                </ParallaxLayer>
                <ParallaxLayer offset={-0.1} speed={0.05} factor = {5}>
                    <img src={moon} id='moon'></img>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.005}>
                    <img src={mountain}></img>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.1}>
                    <img src={road}></img>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.25}>
                    <MoonText></MoonText>
                </ParallaxLayer>

            </Parallax>
        </div>
    );
}
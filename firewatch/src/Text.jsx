import './App.css';
import Click from './Click';
import Scroll from './Scroll';

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
                <Click></Click>
                <p id="textblock-content">
                Scrolling / parallax animation libraries<br/><br/>
                Many modern websites such as DogstudioLinks to an external site. and FirewatchLinks to an external site.
                 use scrolling & parallax animation effects to provide distinctive visuals and a real sense of depth to their sites. <br/><br/>
                 Several libraries exist which ease the creation of such effects in your own pages. 
                 Pick one of these libraries and prepare a comprehensive demo and video explaining how it works, and how to get started with it.<br/><br/>
                </p>
            </div>
            </div>
    );
}

export default TextBlock;
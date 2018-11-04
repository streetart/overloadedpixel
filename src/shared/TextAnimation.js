import React, {Component} from 'react';
import './Sharedstyles.css';
class TextAnimation extends Component {
    render() {
        return (
            <React.Fragment>
            UX works for
            <div className="dropping-texts">
                <div>Developers</div>
                <div>Designers</div>
                <div>Coders</div>
                <div>EVERYONE!</div>
            </div>
            </React.Fragment>
        );
    }
}
export default TextAnimation;

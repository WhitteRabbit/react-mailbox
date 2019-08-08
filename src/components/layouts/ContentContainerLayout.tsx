import * as React from "react";
import "./ContentContainer.css";

class ContentContainerLayout extends React.Component {

    render(): JSX.Element {
        return (
            <div id="app-content-container">
                {this.props.children}
            </div>
        );
    }
}

export default ContentContainerLayout;
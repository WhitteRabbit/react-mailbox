import * as React from "react";

class MainLayout extends React.Component {

    render(): JSX.Element {
        return (
            <div className="app-main">
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout;
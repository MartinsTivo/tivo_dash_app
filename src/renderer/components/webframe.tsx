import * as React from 'react';

interface WebFrameProps {
    source: string;
}

interface WebFrameState {
    source: string;
}

class WebFrame extends React.Component<WebFrameProps, WebFrameState> {
    constructor(props: any) {
        super(props);
    }

    resize = () => {
        let height = window.innerHeight;
        let width = window.innerWidth - 88;
        document.getElementById("webframe").style.height = `${height}px`;
        document.getElementById("webframe").style.width = `${width}px`;
    }

    componentDidMount() {
        this.resize();
        window.addEventListener('resize', this.resize);
    }

    render(){
        console.log(window.location.href)
        return(
            <div id="webframe">
                <iframe src={this.props.source} frameBorder="0"></iframe>
            </div>
        )
    }
}

export default WebFrame
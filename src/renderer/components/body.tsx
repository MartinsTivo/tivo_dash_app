import * as React from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';

// Component import 

import Menu from './menu';
import WebFrame from './webframe';

const sources: sourceobj = {
    tivo: {name: "tivo", url: "https://app.powerbi.com/view?r=eyJrIjoiYWRiNmFlNzQtYzdiNi00MjE5LThhYmItYTk0Njc4OTdlMjNjIiwidCI6Ijc3MTE3YjJhLWVjYjQtNGU0Mi1hYmIwLWRlNWY2NTdmNzY5ZSIsImMiOjl9&pageName=ReportSection"},
    sales: {name: "sales", url: "https://app.powerbi.com/view?r=eyJrIjoiYWRiNmFlNzQtYzdiNi00MjE5LThhYmItYTk0Njc4OTdlMjNjIiwidCI6Ijc3MTE3YjJhLWVjYjQtNGU0Mi1hYmIwLWRlNWY2NTdmNzY5ZSIsImMiOjl9&pageName=ReportSectioncec0581a5cc97a70100e"},
    design: {name: "design", url: "https://app.powerbi.com/view?r=eyJrIjoiYzA4NGNkNmItNDg1Ny00NWI1LWI5NjMtYzhjYTI2MGU4NWM4IiwidCI6Ijc3MTE3YjJhLWVjYjQtNGU0Mi1hYmIwLWRlNWY2NTdmNzY5ZSIsImMiOjl9"},
    marketing: {name: "marketing", url: "https://app.powerbi.com/view?r=eyJrIjoiZmZmYTExMjAtOGFjMi00YThmLThlMzEtYzdiZDNlYzNkMDIzIiwidCI6Ijc3MTE3YjJhLWVjYjQtNGU0Mi1hYmIwLWRlNWY2NTdmNzY5ZSIsImMiOjl9"}
}

interface sourceobj {
    [index: string] : {name: string, url: string}
}

interface bodystate {
    name: string,
    url: string
}

class Body extends React.Component<any, bodystate> {
    constructor(props: any){
        super(props);
        this.state = {
            name: sources.tivo.name,
            url: sources.tivo.url
        }
        this.changeUrl = this.changeUrl.bind(this);
    }

    changeUrl(source: string) {
        this.setState({
            name: sources[source]["name"],
            url: sources[source]["url"]
        })
        console.log(`Name: ${this.state.name}`);
        console.log(`URL: ${this.state.url}`)
    }

    render() {
        return(
            <div id="wrapper">
                    <Menu click={this.changeUrl}/>
                    <WebFrame source={this.state.url} />
            </div>
        )
    }

}

export default Body;
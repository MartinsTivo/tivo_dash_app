import * as React from 'react';
import { Url } from 'url';
import { throws } from 'assert';
import { render } from 'react-dom';
import { any, number } from 'prop-types';
import {Link} from 'react-router-dom';
import { userInfo } from 'os';

import Fab from '@material-ui/core/Fab';

interface ItemInterface {
    name: string;
    src: string;
    icon: string;
    click?(): void;
}

interface MenuProps {
    source: string;
    click(src: string): void;
}
    

class Menu extends React.Component <any, any> {
    
    menuItems: Array<ItemInterface>;
    constructor(props: any) {
        super(props)
        this.menuItems = this.getItems()
    }
    
    getItems() {
        return (
            [
                {name: "TIVO", src: "tivo", icon: "fas fa-home"},
                {name: "Pārdošana", src: "sales", icon: "fas fa-money-bill-alt"},
                {name: "Projektēšana", src: "design", icon: "fas fa-drafting-compass"},
                {name: "Mārketings", src:"marketing", icon: "fas fa-funnel-dollar"}
            ]
            )
        }
        
        resize = () => {
            let height = window.innerHeight;
            document.getElementById("menu").style.height = `${height}px`;
        }
        
        componentDidMount() {
            this.resize;
            window.addEventListener('resize', this.resize);
        }
        
        
        render() {
            return(
                <div id="menu">
               {
                   this.menuItems.map((item: ItemInterface, idx: number) => {
                       return <ItemComp name={item.name} click={this.props.click} src={item.src} icon={item.icon} key={idx} />
                    })
                }
            </div>
        )
    }
}

class ItemComp extends Menu {
    constructor(props: any) {
        super(props)
    }
    
    render(){
        return(
            <div className="menuLink" onClick={() => this.props.click(this.props.src)}>
                <Fab className="menuItem" color="primary" size="large">
                    <i className={this.props.icon}></i>
                </Fab>
                <p className="itemDesc">{this.props.name}</p>
                </div>
        )
    }
}
export default Menu;

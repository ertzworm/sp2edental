import React, {Component} from 'react';
import {Menu, Button, Icon, Image} from 'semantic-ui-react';
import logo from '../images/eDental-logo.png';

import {createBrowserHistory} from 'history';
import {withRouter} from 'react-router-dom';

const history = createBrowserHistory();


class Nav extends Component{

    constructor(props){
        super(props);
    }

    handleBack(){
        history.goBack();
    }

    
   
    render(){

        

        return(
            <Menu inverted>

                <Menu.Item>
                   <Button animated="vertical" color="black" onClick={this.handleBack.bind(this)}>
                       <Button.Content visible><Icon name="angle left" /></Button.Content>	
                       <Button.Content hidden >
							Back
                       </Button.Content>
                   </Button>
                </Menu.Item>

				<Menu.Item>
					<Image src={logo} size="mini"></Image>
				</Menu.Item>

                <Menu.Item position="right">Sign out</Menu.Item>
            </Menu>

        );
    }
}



export default Nav;
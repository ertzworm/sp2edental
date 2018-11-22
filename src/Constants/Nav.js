import React, {Component} from 'react';
import {Menu, Button, Icon, Image} from 'semantic-ui-react';
import logo from '../images/eDental-logo.png';



class Nav extends Component{
    
    render(){
        return(
            <Menu inverted>

                <Menu.Item>
                   <Button animated="vertical" color="black">
                       <Button.Content visible><Icon name="angle left" /></Button.Content>	
                       <Button.Content hidden>
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
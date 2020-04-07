import React, {Component} from 'react';

/**
 * @author Justine Paul B. Guiao 
 * @createdAt March 07, 2020
 * @description Parent component for all routes in the app
*/

class Home extends Component{
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
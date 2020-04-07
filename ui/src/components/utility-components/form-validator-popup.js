import React, {Component} from 'react';

//@ MODULES
import {Transition, Label} from 'semantic-ui-react';

/**
 * @author Justine Paul B. Guiao
 * @createdDate - March 06, 2020
 * @description - a custom made form validator popup
 * @arguments
 *  @pointing - string input that determines where label is pointing    ["above", "below"]
 *  @isValidatorActive - triggers the enter or leave animation          "boolean"
 *  @message - form validation message to display                       "string"
*/

class FormValidatorPopUp extends Component {

  render(){
    return(
      <Transition
        animation={this.props.animation}
        duration="500"
        visible={this.props.isValidatorActive}
      >
        <Label
          pointing={this.props.pointing}
          color="red"
        >
          {this.props.message}
        </Label>
      </Transition>
    )
  }
}

export default FormValidatorPopUp;
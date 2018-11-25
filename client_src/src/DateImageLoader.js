import React, {Component} from 'react';
import {Form, Input, Button} from 'semantic-ui-react';


class DateImageLoader extends Component{

    constructor(props){
        super(props);
        this.state = {
            date: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.reflect = this.reflect.bind(this);
    }

    handleChange(e){
        this.setState({ date: e.target.value })
    }

    reflect(){
        console.log(this.state.date);
    }


    render(){
        return(
            <div>
                <h1>Sample date</h1>
                <Form>
                    <Input type="date" value={this.state.date} onChange={this.handleChange} placeholder="Date"></Input>
                    <Button onClick={this.reflect}>Reflect date</Button>
                </Form>
            </div>
            
        );
    }
}

export default DateImageLoader;
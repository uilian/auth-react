import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = {
    text: ''
  };

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onTextChange={text => this.setState({ text })}
            style={{ height: 40, width: 150 }} 
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

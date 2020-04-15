import React, { Component } from 'react';
import Header from '../Header/Header';
// method 1 for import of material-ui component
// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
// method 2 for import of components from material-ui
import {
  Button,
  Container,
} from '@material-ui/core';
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  palette: {
    primary: teal
  }
});

class App extends Component {
  clickMe = () => {
    console.log('CLICKED');
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />

          <Container>
            {/* Button from material-ui */}
            <Button onClick={this.clickMe} variant="contained" color="primary" size="large">Default</Button>
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

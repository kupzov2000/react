import { Component } from 'react';
import Header from './components/Header';
import Main from './components/MainComp';
import { MainProps } from './types/types';

class App extends Component<MainProps> {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main data={this.props.data} />
      </div>
    );
  }
}

export default App;

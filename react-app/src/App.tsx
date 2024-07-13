import { Component } from 'react';
import Header from './components/Header';
import Main from './components/MainComp';
import GetFilms from './components/GetFilms';
import { FilmsData, MainProps } from './types/types';

class App extends Component<Record<string, never>> {
  state: FilmsData = {
    data: null,
  };

  constructor(props: Record<string, never>) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    GetFilms()
      .then((result) => {
        this.setState({ data: result });
      })
      .catch((err) => {
        console.log('Ошибка получения данных:', err);
      });
  }

  async handleSearch() {
    try {
      const data: MainProps = await GetFilms();
      this.setState({ data: data });
    } catch (error) {
      console.log('Ошибка при получении данных:', error);
      this.setState({ data: null });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header handleFn={this.handleSearch} />
        {this.state.data && <Main data={this.state.data} />}
      </div>
    );
  }
}

export default App;

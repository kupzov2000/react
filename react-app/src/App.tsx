import './App.css';
import Header from './components/Header';
import Main from './components/MainComp';
import { MainProps } from './types/types';

function App({ data }: MainProps) {
  return (
    <div className="wrapper">
      <Header />
      <Main data={data} />
    </div>
  );
}

export default App;

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import logo from './logo.png';
import './index.css';

function App() {
  return (
  <>
    <div className='container'>
      <Header
        logo={ logo }
        title='Peach Calculator' />
      <Content />
      <Footer />
    </div>
  </>
  );
}

export default App;
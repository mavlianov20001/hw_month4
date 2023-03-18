import './App.css';
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import Main from './Main/Main'
import { Text }  from './Text/Text'
import Button from './Button/Button'



function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Text text={'text'} />
        <Button/>
        <Footer/>
    </div>
  );
}

export default App;

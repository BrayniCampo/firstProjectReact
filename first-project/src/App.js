
import { Route, Routes  } from 'react-router';
import { Footer } from './components/layouts/Footer/Footer';
import { HeaderHome } from './components/layouts/HeaderHome/HeaderHome';
import { AboutUS } from './components/pages/About/AboutUS';
import { ContactUS } from './components/pages/Contact/ContactUS';
import { Counter } from './components/pages/Counter/Counter';
import { Home } from './components/pages/Home/Home';
import { NotFound } from './components/pages/NotFound/NotFound';
import { RickAndMorty } from './components/pages/RickAndMorty/RickAndMorty';
import {ApiDeRick} from'./components/pages/ApiDeRick/ApiDeRick'


function App() {
  return (
    <>
      <div className="App">
        <HeaderHome/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutUS" element={<AboutUS/>}/>
          <Route path="/contactUS" element={<ContactUS/>}/>
          <Route path="/counterNumbers" element={<Counter/>}/>
          <Route path="/counterImage" element={<RickAndMorty/>}/>
          <Route path='/apiRick' element={<ApiDeRick/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;

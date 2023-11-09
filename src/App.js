
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Actualite from './Page/Actualite';
import Prepa from './Page/Prepa';
import Formation from './Page/Formation';
import ProjetEtudiandt from './Page/ProjetEtudiandt';
import Quisommesnous from './Page/Quisommesnous';
import Error from './Page/Error';

/* Le particles de react peut être supprimé à tout moment*/
function App() {

  return (
 
<BrowserRouter>
<Routes>
  <Route index element={<Home/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/actualite" element={<Actualite/>}/>
  <Route path="/prepa" element={<Prepa/>}/>
  <Route path="/formation" element={<Formation/>}/>
  <Route path="/projet-etudiant" element={<ProjetEtudiandt/>}/>
  <Route path="/qui-sommes-nous" element={<Quisommesnous/>}/>
  <Route path="*" element={<Error/>}/>
  
  </Routes>
  </BrowserRouter>

    
  );
}

export default App;

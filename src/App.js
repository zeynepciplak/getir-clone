import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
   <>
   <div>
    <Header/>
   </div>
   <AppRoutes/>
   <div>
    <Footer/>
   </div>
   </>
  );
}

export default App;

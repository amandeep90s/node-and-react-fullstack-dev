import M from 'materialize-css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './compoonents/Header';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import SurveyNew from './pages/SurveyNew';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/surveys' element={<Dashboard />} />
        <Route path='/surveys/new' element={<SurveyNew />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

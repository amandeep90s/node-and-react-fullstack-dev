import M from 'materialize-css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './compoonents/Header';
import PrivateRoute from './compoonents/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import SurveyNew from './pages/SurveyNew';
import { fetchUserData } from './redux/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route element={<PrivateRoute />}>
          <Route path='/surveys' element={<Dashboard />} />
          <Route path='/surveys/new' element={<SurveyNew />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

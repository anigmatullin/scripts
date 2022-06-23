import React from 'react'
import {useState} from 'react'
import {Route, Routes} from 'react-router-dom'

import './App.css'

import {AuthContext} from './context/AuthContext';

import Layout from './pages/Layout';
import PageBugs from './pages/PageBugs';
import PageContacts from './pages/PageContacts';
import Login from './pages/Login';
import Logout from './pages/Logout';

import Home from './components/Home';
import NotFound from './components/NotFound';

import FormContact from './forms/FormContact';
import FormBug from './forms/FormBug';

import ContactsList from './components/contacts/ContactsList';
import BugsList from './components/bugs/BugList';


function App()
{
  const [auth, setAuth] = useState(null);

  function handleLogin(user)
  {
    setAuth(user);
  }

  if (!auth) {
    return (
      <Login handleLogin={handleLogin} />
    )
  }

  return (
    <div className="App">
      <AuthContext.Provider value={[auth, setAuth]}>
      <Routes>

        <Route path='/' element={<Layout />}>

          <Route index             element={<Home />} />
          <Route path="logout"     element={<Logout />} />
          <Route path="*"          element={<NotFound />} />

          <Route path='bugs/*' element={<PageBugs />} >
            <Route index               element={<BugsList />} />
            <Route path="list"         element={<BugsList />} />
            <Route path="new"          element={<FormBug action="Add"     go="/bugs" />} />
            <Route path="update/:id"   element={<FormBug action="Update"  go="/bugs" />} />
            
          </Route>

          <Route path='contacts/*' element={<PageContacts />} >
            <Route index          element={<ContactsList />} />
            <Route path="list"    element={<ContactsList />} />
            <Route path="new"     element={<FormContact action="Add" go="/contacts" />} />
            <Route path="update/:id"   element={<FormContact action="Update" go="/contacts" />} />

            <Route path="details/:id"   element={<ContactsList />} />            
          </Route>

        </Route>

      </Routes>
      </AuthContext.Provider>

    </div>
  );
}

export default App;

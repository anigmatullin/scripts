import React from 'react'
import {useState} from 'react'
import {Route, Routes, Link} from 'react-router-dom'

import './App.css'

import Login from './pages/Login';
import Logout from './pages/Logout';

import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ContactUpdate from './pages/ContactUpdate';
import ContactCreate from './pages/ContactCreate';

import {AuthContext} from './context/AuthContext';
import {useProfileInfo, ProfileProvider} from './context/ProfileContext';
import {ContactsProvider} from './context/ContactsContext';

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
      <ProfileProvider>
      <ContactsProvider>
      <Routes>

        <Route path='/' element={<Layout />}>      
          <Route index             element={<Home />} />
          <Route path="logout"     element={<Logout />} />
          <Route path="about"      element={<About />} />

          <Route path="contacts/list"   element={<Contacts />} />
          <Route path="contacts/create"   element={<ContactCreate />} />
          <Route path="contacts/update/:id"   element={<ContactUpdate />} />
          <Route path="contacts/:id"   element={<Contacts />} />

          <Route path="*"          element={<NotFound />} />
        </Route>

      </Routes>

      </ContactsProvider>
      </ProfileProvider>
      </AuthContext.Provider>

    </div>
  );
}

export default App;

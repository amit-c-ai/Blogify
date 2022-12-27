import React, { useState } from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';


export default function App() {
  const [closedNav, setClosedNav] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  }

  const getNavWidth = () => closedNav ? 'w-16' : 'w-56';

  return (
    <div className='flex'>
      {/*  nav section  */}
      <div className={getNavWidth() + " h-screen transition-width"}>
        <Navbar closed={closedNav}/>
      </div>

      {/*  content section  */}
      <div className="flex-1 min-h-screen bg-blue-100">
        <div className='flex items-center'>
          <button onClick={toggleNav}>
            { closedNav ? <AiOutlineMenuFold size={25}/> : <AiOutlineMenuUnfold size={25}/>}
          </button>

          <SearchForm/>
        </div>

        <div className='max-w-screen-lg mx-auto'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create-post' element={<CreatePost/>}/>
            <Route path='/update-post' element={<UpdatePost/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}
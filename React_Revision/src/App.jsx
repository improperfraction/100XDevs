import { lazy, Suspense, useState } from 'react'
const Counter = lazy(() => import('./components/Count'));
const Props = lazy(() => import('./components/Props'));
const Memo = lazy(() => import('./components/Memo'));
const Memoize = lazy(() => import('./components/Memoize'));
const Ref = lazy(() => import('./components/Ref'));
const Drill = lazy(() => import('./components/Drill'));
const Context = lazy(() => import('./components/Context'));
const Recoil = lazy(() => import('./components/Recoil'));
const Callback = lazy(() => import('./components/Callback'))
const ConditionalR = lazy(() => import('./components/ConditionalRend'))
const Welcome = lazy(() => import('./components/Class'))



import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
//import Useeff from './components/UseEffect';
import Routing, { About, Dashboard } from './components/Routes';
import Asyncrecoil from './components/Asyncrecoil';
import UseReducer from './components/UseReducer';
import Slider from './components/Popupslider';
import { EnhancedComponent } from './components/HOC';
import Prac from './components/Prac';
import Pagination from './components/Pagination';
import DarkMode from './components/DarkMode';
import ReduxCounter from './components/ReduxCounter';
import Debouncing from './components/Debouncing';

const Selectors = lazy(() => import('./components/Selectors'));

const Useeff = lazy(() => import('./components/UseEffect'));

// import Welcome from './components/Class';
//import ConditionalR from './components/ConditionalRend';


function App() {
  return (
    <>
      <BrowserRouter>
        <Bar></Bar>
        <Routes>
          <Route path='/counter' element={<Suspense fallback={"Loading..."}><Counter /></Suspense>}></Route>
          <Route path='/props' element={<Suspense fallback={"Loading..."}><Props /></Suspense>}></Route>
          <Route path='/memo' element={<Suspense fallback={"Loading..."}><Memo /></Suspense>}></Route>
          <Route path='/memoize' element={<Suspense fallback={"Loading..."}><Memoize /></Suspense>}></Route>
          <Route path='/ref' element={<Suspense fallback={"Loading..."}><Ref /></Suspense>}></Route>
          <Route path='/drill' element={<Suspense fallback={"Loading..."}><Drill /></Suspense>}></Route>
          <Route path='/context' element={<Suspense fallback={"Loading..."}><Context /></Suspense>}></Route>
          <Route path='/recoil' element={<Suspense fallback={"Loading..."}><Recoil /></Suspense>}></Route>
          <Route path='/callback' element={<Suspense fallback={"Loading..."}><Callback /></Suspense>}></Route>
          <Route path='/condrend' element={<Suspense fallback={"Loading..."}><ConditionalR /></Suspense>}></Route>
          <Route path='/Classcompt' element={<Suspense fallback={"Loading..."}><Welcome /></Suspense>}></Route>
          <Route path='/useeffect' element={<Suspense fallback={"Loading..."}><Useeff /></Suspense>}></Route>
          <Route path='/routing' element={<Suspense fallback={"Loading..."}><Routing /></Suspense>}></Route>
          <Route path='/selector' element={<Suspense fallback={"Loading..."}><Selectors /></Suspense>}></Route>
          <Route path='/asyncrecoil' element={<Suspense fallback={"Loading..."}><Asyncrecoil /></Suspense>}></Route>
          <Route path='/usereducer' element={<Suspense fallback={"Loading..."}><UseReducer /></Suspense>}></Route>
          <Route path='/slider' element={<Suspense fallback={"Loading..."}><Slider /></Suspense>}></Route>
          <Route path='/hoc' element={<Suspense fallback={"Loading..."}><EnhancedComponent /></Suspense>}></Route>
          <Route path='/prac' element={<Suspense fallback={"Loading..."}><Prac /></Suspense>}></Route>
          <Route path='/pagination' element={<Pagination />}></Route>
          <Route path='/routing/dashboard' element={<Dashboard />}></Route>
          <Route path='/routing/about' element={<About />}></Route>
          <Route path='/darkmode' element={<DarkMode />}></Route>
          <Route path='/reduxcounter' element={<ReduxCounter />}></Route>
          <Route path='/debouncing' element={<Debouncing />}></Route>



        </Routes>
      </BrowserRouter>

    </>
  )
}

function Bar() {
  const navigate = useNavigate()

  return (
    <div>
      <button className="bg-blue-500 m-1 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/counter');
      }}>counter</button>
      <button className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/memo');
      }}>Memo</button>
      <button className="bg-blue-500 m-1 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/props');
      }}>props</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/memoize');
      }}>memoize</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/ref');
      }}>ref</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/drill');
      }}>Drill</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/context');
      }}>Context</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/recoil');
      }}>Recoil</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/callback');
      }}>Callback</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/condrend');
      }}>Conditional Rendering</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/classcompt');
      }}>Class component</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/useeffect');
      }}>UseEffect</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/routing');
      }}>Routing</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/selector');
      }}>selector</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/asyncrecoil');
      }}>Async query Recoil</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/usereducer');
      }}>Use Reducer Counter</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/slider');
      }}>Slider</button>
      <button className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/hoc');
      }}>HOC</button>
      <button className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/pagination');
      }}>Pagination</button>
      <button className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/darkmode');
      }}>Darkmode</button>
      <button className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/reduxcounter');
      }}>Redux Counter</button>
      <button className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/debouncing');
      }}>Debouncing</button>
      <button className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
        navigate('/prac');
      }}>Practise sheeet</button>
    </div>
  )
}

export default App

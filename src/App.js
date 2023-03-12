import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './public/index.js';
import WebApp from './public/app';
import Templates from './public/templates';
import Model1 from './public/model';
import Model2 from './public/model2';
import Model3 from './public/model3';
import Model4 from './public/model4';
import Model5 from './public/model5';
import Model6 from './public/model6';
import Model7 from './public/model7';
import Model8 from './public/model8';
import Model9 from './public/model9';
import Model10 from './public/model10';
import Productivity from './public/productivity';
import Calendar from './public/calendar';
import Doc from './public/doc';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/launchApp' element={<WebApp />} />
          <Route path='/templates' element={<Templates />} />
          <Route path='/templates/model2' element={<Model2 />} />
          <Route path='/templates/model3' element={<Model3 />} />
          <Route path='/templates/model4' element={<Model4 />} />
          <Route path='/templates/model5' element={<Model5 />} />
          <Route path='/templates/model6' element={<Model6 />} />
          <Route path='/templates/model7' element={<Model7 />} />
          <Route path='/templates/model8' element={<Model8 />} />
          <Route path='/templates/model9' element={<Model9 />} />
          <Route path='/templates/model10' element={<Model10 />} />
          <Route path='/productivity' element={<Productivity />} />
          <Route path='/productivity/calendar' element={<Calendar />} />
          <Route path='/productivity/doc' element={<Doc />} />
          <Route path='/questions' element={<Model1 />} />
        </Routes> 
      </Router>

    </div>

  );
}

export default App;

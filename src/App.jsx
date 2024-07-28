import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import BestPicture from './BestPicture'; 
import BestDirector from './BestDirector'; 
import BestActor from './BestActor'; 
import BestActress from './BestActress';
import BestSupportingActor from './BestSupportingActor';
import BestSupportingActress from './BestSupportingActress';

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/best-picture" element={<BestPicture />} />
                <Route path="/best-director" element={<BestDirector />} />
                <Route path="/best-actor" element={<BestActor />} />
                <Route path="/best-actress" element={<BestActress />} />
                <Route path="/best-supporting-actor" element={<BestSupportingActor />} />
                <Route path="/best-supporting-actor" element={<BestSupportingActress />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;

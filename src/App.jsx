import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import ScrollToTop from './Component/ScrollToTop';
import Career from './Pages/Career';
import DataAnalytics from './Pages/data-analytics'; 
import CyberSecurity from './Pages/cyber-security';
import Purpose from './Pages/purpose';
import BuildOnlinePresence from './Pages/build-online-presence';
import Coldoutreach from './Pages/cold-outreach';
import FreeITAudit from './Pages/free-it-audit';
import Referrals from './Pages/ask-for-referrals';
import NetworkOffline from './Pages/network-offline';
import ShareCaseStudies from './Pages/share-case-studies';
import RunAds from './Pages/run-ads';
import TrackPipeline from './Pages/track-pipeline';
import AboutUs from './Pages/about-us';
import Technologies from './Pages/technologies';


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/career' element={<Career />} />
        <Route path='/data-analytics' element={<DataAnalytics />} />
        <Route path='/cyber-security' element={<CyberSecurity />} />
        <Route path='/purpose' element={<Purpose />} />
        <Route path='/build-online-presence' element={<BuildOnlinePresence />} />
        <Route path='/cold-outreach' element={<Coldoutreach />} />
        <Route path='/free-it-audit' element={<FreeITAudit />} />
        <Route path='/ask-for-referrals' element={<Referrals />} />
        <Route path='/network-offline' element={<NetworkOffline />} />
        <Route path='/share-case-studies' element={<ShareCaseStudies />} />
        <Route path='/run-ads' element={<RunAds />} />
        <Route path='/track-pipeline' element={<TrackPipeline />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/technologies' element={<Technologies />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

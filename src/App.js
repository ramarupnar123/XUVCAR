import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Mileage from './components/Mileage';
import ExpertAdvice from './components/ExpertAdvice';
import ProsAndCons from './components/ProsAndCons';
import UserReviews from './components/UserReviews';
import RelatedVideos from './components/RelatedVideos';
import Footer from './components/Footer'; 

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    { id: 'features', component: <Features />, title: "Features" },
    { id: 'pricing', component: <Pricing />, title: "Pricing" },
    { id: 'mileage', component: <Mileage />, title: "Mileage" },
    { id: 'expert-advice', component: <ExpertAdvice />, title: "Expert Advice" },
    { id: 'pros-and-cons', component: <ProsAndCons />, title: "Pros and Cons" },
    { id: 'user-reviews', component: <UserReviews />, title: "User Reviews" },
    { id: 'related-videos', component: <RelatedVideos />, title: "Related Videos" },
  ];

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <CustomNavbar onSearch={(value) => setSearchTerm(value)} />
      <Header />
      
      {filteredSections.map((section) => (
        <div key={section.id} id={section.id}>
          {section.component}
        </div>
      ))}

      {filteredSections.length === 0 && (
        <p className="text-center text-muted mt-5">No results found.</p>
      )}

      <Footer /> 
    </div>
  );
}

export default App;

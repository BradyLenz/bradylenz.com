import React from 'react';

import {
    AboutSection, 
    LandingSection,
    EducationSection,
    WorkSection,
    ContactSection,
    Footer,
} from './components';


const App: React.FC = () => {
    return (
        <>
            <LandingSection scrollOffset={0} />
            <AboutSection hideScrollFabSmDown />
            <EducationSection hideScrollFabSmDown />
            <WorkSection  hideScrollFabSmDown />
            <ContactSection />
            <Footer />
        </>
    );
};

export default App;

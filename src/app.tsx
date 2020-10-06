import React from 'react';

import {
    AboutSection, 
    LandingSection,
    EducationSection,
    WorkSection,
    ContactSection,
    Footer,
} from './components';

function App() {
    return (
        <>
            <LandingSection />
            <AboutSection hideScrollFabSmDown />
            <EducationSection hideScrollFabSmDown />
            <WorkSection  hideScrollFabSmDown />
            <ContactSection />
            <Footer />
        </>
    );
}

export default App;

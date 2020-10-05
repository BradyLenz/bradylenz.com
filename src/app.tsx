import React from 'react';

import {
    AboutSection, 
    LandingSection,
    EducationSection,
    WorkSection,
    ContactSection,
} from './components';

function App() {
    return (
        <>
            <LandingSection />
            <AboutSection hideScrollFabSmDown />
            <EducationSection hideScrollFabSmDown />
            <WorkSection  hideScrollFabSmDown />
            <ContactSection />
        </>
    );
}

export default App;

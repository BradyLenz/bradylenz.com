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
            <LandingSection scrollOffset={0} />
            <AboutSection hideScrollFabSmDown />
            <EducationSection hideScrollFabSmDown />
            <WorkSection  hideScrollFabSmDown />
            <ContactSection />
            <Footer />
        </>
    );
}

export default App;

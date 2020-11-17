import React from 'react';
import ReactGA from 'react-ga';

import {
    AboutSection, 
    LandingSection,
    EducationSection,
    WorkSection,
    ContactSection,
    Footer,
} from './components';


ReactGA.initialize('G-QFLTG6VF4L', {
    debug: process.env.NODE_ENV === 'development',
});
ReactGA.pageview(window.location.pathname);

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

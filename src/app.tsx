import React from 'react';

import { LandingSection } from './components';
import { ScrollFab } from './components'

function App() {
    return (
        <>
            <LandingSection />
            <ScrollFab direction='down' />
        </>
    );
}

export default App;

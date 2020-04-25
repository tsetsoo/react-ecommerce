import React, { Profiler } from 'react'
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles.jsx'

const HomePage = () => (
    <HomePageContainer>
        <Profiler id="Directory" onRender={(id, phase, duration) => {
            console.log({
                id,
                phase,
                duration
            })
        }}>
            <Directory />
        </Profiler>
    </HomePageContainer>
)

export default HomePage;
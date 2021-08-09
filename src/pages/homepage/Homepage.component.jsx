import React from 'react'

import DirectoryMenu from '../../components/directory-menu/directory-menu.component'

import './homepage.styles.scss'

import { HomePageContainer } from './Homepage.styles'

const Homepage = () =>(
    <HomePageContainer>
        <DirectoryMenu />
    </HomePageContainer>
)

export default Homepage
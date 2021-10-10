import React, { useState, useEffect } from 'react'
import axios from "axios"
import HomeHero from './HomeHero'
import HomeFeatures from './HomeFeatures'
import HomeCounter from './HomeCounter'
import Footer from '../../root/Footer'

function HomePage() {

    return (
        <>
            <HomeHero />
            <HomeCounter />
            <HomeFeatures />
        </>
    )
}

export default HomePage

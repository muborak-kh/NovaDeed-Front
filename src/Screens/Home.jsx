import { useTonConnectUI, useTonWallet } from '@tonconnect/ui-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


import Hero from '../Components/Home/Hero'
import WhyUs from '../Components/Home/WhyUs'
import HowItWorks from '../Components/Home/HowItWorks'
import Advantages from '../Components/Home/Advantages'
import ForWhom from '../Components/Home/ForWhom'
import Header from '../Components/Home/Header'

const Home = () => {

    const [tonConnectUI] = useTonConnectUI()

    const handleConnectWallet = async () => {
        try {
            tonConnectUI.openModal()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="app">
            <Header/>
            <Hero connectWallet={handleConnectWallet}/>
            <WhyUs/>
            <HowItWorks/>
            <Advantages/>
            <ForWhom/>
            
            {/* {
                wallet === null ? <div className="btn btn-primary" onClick={handleConnectWallet}>CONNECT WALLET</div> : <></>
            } */}

            {/* <Link
                to={{
                    pathname: "/projects"
                }}
            >
                PROJECTS
            </Link> */}
        </div>
    )
}

export default Home

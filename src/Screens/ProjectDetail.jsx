import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react'
import '../Styles/Project.css'
import Header from '../Components/Home/Header'
import SubNav from '../Components/Home/SubNav'

const ProjectDetail = () => {

    const walletAddress = useTonAddress()
    const [tonConnectUI] = useTonConnectUI()
    const [data, setData] = useState({
        daoWallet: null,
        amount: null
    })

    useEffect(() => {
        if(!walletAddress) {
            tonConnectUI.openModal()
        }
    }, [])

    const [projectStatus, setProjectStatus] = useState({
        isLoaded: false,
        isDealRequest: false,
        isDealConfirmed: false
    })

    const handlePay = async () => {
        try {
            if(!walletAddress) {
                tonConnectUI.openModal()
                return
            }

            const defaultTx = {
                validUntil: Math.floor(Date.now() / 1000) + 600,
                messages: [{
                    address: data.daoWallet,
                    amount: data.amount * 1000000000
                }]
            }
        
            const result = await tonConnectUI.sendTransaction(defaultTx, {
                modals: ['before', 'success', 'error'],
                notifications: ['before', 'success', 'error']
            })

            console.log(walletAddress)
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
        // setInterval(() => {
        //     if(projectStatus.isDealRequest) {
        //         axios.post("http://127.0.0.1:8000/api/customer/projects/load-projects-to-pay").then(function(resp) {
        
        //         }).catch(function(err) {
        //             console.log(err)
        //         })
        //     }
        // }, 1500)
    // }, [])

    const handlePurchase = async () => {
        try {
            if(!walletAddress) {
                tonConnectUI.openModal()
                return
            }
            axios.post("http://127.0.0.1:8000/api/customer/projects/submit", {
                wallet: walletAddress
            }).then(function(resp) {
                if(resp.data.success) {
                    setProjectStatus(prev => ({
                        ...prev,
                        isDealRequest: true
                    }))

                    setTimeout(() => {
                        axios.post("http://127.0.0.1:8000/api/customer/projects/load-projects-to-pay").then(function(resp) {
                            if(resp.data.success) {
                                setData({
                                    daoWallet: resp.data.data.dao_wallet,
                                    amount: resp.data.data.amount
                                })
                            }
                        }).catch(function(err) {
                            console.log(err)
                        })
                        setProjectStatus(prev => ({
                            ...prev,
                            isDealConfirmed: true
                        }))
                    }, 10000)
                }
            }).catch(function(err) {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="main-content">
            <Header/>
            <SubNav/>

            {
                data.daoWallet !== null ?
                <div className="alert alert-primary">
                    <div>Для завершения оплаты, пожалуйста, переведите сумму на следующий счет:</div>
                    <div>Реквизиты: { data.daoWallet }</div>
                    <div>Сумма к оплате: { data.amount } TON</div>
                </div> : <></>
            }

            {
                !projectStatus.isDealRequest ? <button className="btn btn-primary" onClick={handlePurchase}>Отправить заявку</button> : <></>
            }

            {
                projectStatus.isDealConfirmed ? <button className="btn btn-primary" onClick={handlePay}>Произвести оплату</button> : <></>
            }
        </main>
    )
}

export default ProjectDetail

import React, { useEffect, useState } from 'react'
import Navigator from '../../Components/Developer/Navigator'
import Header from '../../Components/Developer/Header'
import axios from 'axios'

const DContracts = () => {

    const [deals, setDeals] = useState([])
    const [appStatus, setAppStatus] = useState({
        isProcessing: false
    })

    const handleRequestDeals = async () => {
        try {
            axios.post("http://127.0.0.1:8000/api/builder/projects/deals").then(function(resp) {
                if(resp.data.success) {
                    setDeals(resp.data.data)
                }
            }).catch(function(err) {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleDealAction = async (type, id) => {
        axios.post("http://127.0.0.1:8000/api/builder/projects/confirm", {
            action: type,
            deal: id
        }).then(function(resp) {
            if(resp.data.success) {
                setDeals(resp.data.data)
            }
        }).catch(function(err) {
            console.log(err)
        })

        setAppStatus({
            isProcessing: true
        })
    }

    useEffect(() => {
        handleRequestDeals()
    }, [])

    return (
        <main>
            <Header/>
            <div className="row">
                <Navigator/>
                <div className="col-md-8 col-xl-10">
                    <div className="p-3">
                        <div className="d-flex justify-content-between">
                            <h3>
                                Контракты
                            </h3>
                        </div>
                        {
                            deals.length === 0 ? <div className="alert alert-warning">Пока заявок не поступило</div> :
                            deals?.map((val, key) => {
                                return (
                                    <div className="card p-3 mt-3">
                                        <h5 style={{
                                            fontWeight: 700
                                        }}>Новая заявка</h5>
                                        <div className="card-body p-0 mt-2">
                                            <div className="alert alert-primary">
                                                Покупатель инициировал сделку. Подтвердите или отклоните заявку, чтобы продолжить процесс продажи квартиры.
                                            </div>
                                            <div className={appStatus.isProcessing ? "d-none" : "d-flex w-25"}>
                                                <div className="btn btn-success" onClick={() => handleDealAction("accept", val.id)}>
                                                    Подтвердить
                                                </div>
                                                <div className="btn btn-danger" style={{
                                                    marginLeft: 15
                                                }} onClick={() => handleDealAction("reject", val.id)}>
                                                    Отклонить
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DContracts

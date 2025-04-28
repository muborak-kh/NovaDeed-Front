import React from 'react'
import Navigator from '../../Components/Developer/Navigator'
import Header from '../../Components/Developer/Header'

const DMain = () => {
    return (
        <main>
            <Header />
            <div className="row">
                <Navigator/>
                <div className="col-md-8 col-xl-10">
                    <div className="p-3">
                        <div className="d-flex justify-content-between">
                            <h3>
                                Панель управления
                            </h3>
                        </div>
                        Контент
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DMain

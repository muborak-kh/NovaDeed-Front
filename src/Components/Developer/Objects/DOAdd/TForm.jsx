import React from 'react'

const TForm = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h5>Документы экспертизы</h5>
                    </div>
                    <div className="card-body">
                        <input type="file"/>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="card">
                    <div className="card-header">
                        <h5>Документы разрешения</h5>
                    </div>
                    <div className="card-body">
                        <input type="file"/>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="card">
                    <div className="card-header">
                        <h5>Технические документы</h5>
                    </div>
                    <div className="card-body">
                        <input type="file"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TForm

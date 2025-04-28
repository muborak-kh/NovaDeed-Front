import React from 'react'

const SForm = ({ floatNum }) => {
    return (
        <div className="card mb-3">
            <div className="card-header">
                <h5>Данные квартиры №{ floatNum+1 }</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-2">
                        <label className="form-label">Номер квартиры</label>
                        <input type="number" className="form-control w-100" placeholder="Номер квартиры"/>
                    </div>
                    <div className="col-2">
                        <label className="form-label">Площадь</label>
                        <input type="text" className="form-control w-100" placeholder="Укажите площадь квартиры"/>
                    </div>
                    <div className="col-2">
                        <label className="form-label">Этаж</label>
                        <input type="number" min={1} className="form-control w-100" placeholder="Какой этаж"/>
                    </div>
                    <div className="col-2">
                        <label className="form-label">Кол-во комнат</label>
                        <input type="number" min={1} className="form-control w-100" placeholder="Сколько комнат в квартире"/>
                    </div>
                    <div className="col-2">
                        <label className="form-label">Цена</label>
                        <input type="number" min={1} className="form-control w-100" placeholder="Стоимость квартиры"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SForm

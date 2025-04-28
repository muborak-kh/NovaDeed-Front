import React from 'react'

const FForm = ({ formData, onChange }) => {
    return (
        <>
            <div className="row">
                <div className="col-3">
                    <label className="form-label">Название объекта</label>
                    <input onChange={(e) => onChange('name', e.target.value)} type="text" placeholder="Введите название вашего объекта" className="form-control"/>
                </div>
                <div className="col-3">
                    <label className="form-label">Регион</label>
                    <select className="form-control" onChange={(e) => onChange('region', e.target.value)}>
                        <option value="1">Андижан</option>
                        <option value="2">Бухара</option>
                        <option value="3">Фергана</option>
                        <option value="4">Джизак</option>
                        <option value="5">Кашкадарья</option>
                        <option value="6">Хорезм</option>
                        <option value="7">Наманган</option>
                        <option value="8">Навоий</option>
                        <option value="9">Самарканд</option>
                        <option value="10">Сырдарья</option>
                        <option value="11">Сурхандарья</option>
                        <option value="12">Ташкент</option>
                        <option value="13">Каракалпакстан</option>
                    </select>
                </div>
                <div className="col-3">
                    <label className="form-label">Адрес</label>
                    <input type="text" onChange={(e) => onChange('address', e.target.value)} placeholder="Введите точный адрес стройки" className="form-control"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <textarea onChange={(e) => onChange('text', e.target.value)} rows={12} className="form-control" placeholder="Описание вашего проекта"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <label className="form-label">Кол-во квартир</label>
                    <input type="number" onChange={(e) => onChange('flats', e.target.value)} min={1} className="form-control"/>
                </div>
                <div className="col-3">
                    <label className="form-label">Начало стройки</label>
                    <input type="date" onChange={(e) => onChange('start_date', e.target.value)} className="form-control"/>
                </div>
                <div className="col-3">
                    <label className="form-label">Завершения стройки</label>
                    <input type="date" onChange={(e) => onChange('expected_finish_date', e.target.value)} className="form-control"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <input type="file" accept="image/*"/>
                </div>
                <div className="col-12 mt-3">
                    <img
                        className="border border-dark rounded w-25"
                        src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
                    />
                    <img
                        className="border border-dark rounded w-25"
                        src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
                    />
                </div>
            </div>
        </>
    )
}

export default FForm

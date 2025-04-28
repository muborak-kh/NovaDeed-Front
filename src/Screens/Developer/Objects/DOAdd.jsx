import React, { useState } from 'react'
import Header from '../../../Components/Developer/Header'
import Navigator from '../../../Components/Developer/Navigator'
import FForm from '../../../Components/Developer/Objects/DOAdd/FForm';
import SForm from '../../../Components/Developer/Objects/DOAdd/SForm';
import TForm from '../../../Components/Developer/Objects/DOAdd/TForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DOAdd = () => {

    const [page, setPage] = useState(1)
    const navigate = useNavigate()

    const [status, setStatus] = useState({
        error: false,
        success: false,
        message: null
    })

    const [formData, setFormData] = useState({
        name: null,
        region: 1,
        address: null,
        text: null,
        flats: 1,
        start_date: null,
        expected_finish_date: null
    })

    const handleChangeInputValues = (name, value) => {
        setFormData(prev => ({
          ...prev,
          [name]: name === "flats" && isNaN(parseInt(value)) ? 1 : value
        }))
    }

    const handleChangePage = async (type) => {

        if(type === "next" && page < 3) {
            if(page === 1 && Object.values(formData).includes(null)) {
                setStatus({
                    error: true,
                    message: "Заполните все поля для продолжения!"
                })

                setTimeout(() => {
                    setStatus({
                        error: false,
                        message: null
                    })
                }, 2500)
                return
            }
            setPage((page) => page + 1)
        }

        if(type === "next" && page === 3) {
            try {
                axios.post("http://127.0.0.1:8000/api/builder/projects/store", {
                    name: "Hello world"
                }).then(function(resp) {
                    if(resp.data.success) {
                        setStatus({
                            error: false,
                            success: true,
                            message: "Проект был успешно добавлен"
                        })

                        setTimeout(() => {
                            navigate("/crm/objects", { replace: false })
                        }, 1000)
                        return
                    }

                    setStatus({
                        error: true,
                        success: false,
                        message: "Не удалось связаться с базой данных"
                    })
                }).catch(function(err) {
                    console.log(err)
                })
            } catch (error) {
                console.log(error)
            }
        }

        if(type === "previous" && page !== 1) {
            setPage((page) => page - 1)
        }
    }

    const FlatsInfo = () => {
        let flats = [];
        for(let i = 0; i < formData.flats; i++) {
            flats.push(<SForm floatNum={i}/>);
        }

        return flats
    }

    return (
        <main>
            <Header/>
            <div className="row">
                <Navigator/>
                <div className="col-md-8 col-xl-10">
                    <div className="p-3">
                        <div className="d-flex justify-content-between">
                            <h3>
                                Добавление объекта
                            </h3>
                        </div>
                        <div className="btn-group mt-3" role="group" aria-label="Basic example">
                            <button type="button" className={page === 1 ? "btn btn-primary" : "btn btn-light border border-dark"}>Начало</button>
                            <button type="button" className={page === 2 ? "btn btn-primary" : "btn btn-light border border-dark"}>Продолжение</button>
                            <button type="button" className={page === 3 ? "btn btn-primary" : "btn btn-light border border-dark"}>Завершение</button>
                        </div>
                        {
                            status.error ? <div className="alert alert-danger mt-3" role="alert">{ status.message }</div> : <></>
                        }
                        {
                            status.success ? <div className="alert alert-success mt-3" role="alert">{ status.message }</div> : <></>
                        }
                        <div className="doa-multi-form mt-4" style={{
                            display: page === 1 ? "block" : "none"
                        }}>
                            <FForm formData={formData} onChange={handleChangeInputValues}/>
                        </div>
                        <div className="doa-multi-form mt-4" style={{
                            display: page === 2 ? "block" : "none"
                        }}>
                            <FlatsInfo/>
                        </div>
                        <div className="doa-multi-form mt-4" style={{
                            display: page === 3 ? "block" : "none"
                        }}>
                            <TForm/>
                        </div>

                        <div className={`${status.success ? "d-none" : "d-flex"} mt-3`}>
                            {
                                page > 1 ?
                                <div className="btn btn-secondary d-block" style={{
                                    marginRight: 15
                                }} onClick={() => handleChangePage("previous")}>
                                    Назад
                                </div> : <></>
                            }
                            <div className="btn btn-primary" onClick={() => handleChangePage("next")}>
                                { page === 3 ? "Сохранить" : "Далее" }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DOAdd

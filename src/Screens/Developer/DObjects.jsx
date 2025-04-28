import React, { useEffect, useState } from 'react'
import Header from '../../Components/Developer/Header'
import Navigator from '../../Components/Developer/Navigator'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DObjects = () => {

    const [data, setData] = useState({
        isLoaded: false,
        projects: []
    })

    const handleRequestListObjects = async () => {
        try {
            axios.post("http://127.0.0.1:8000/api/builder/projects/list").then(function(resp) {
                if(resp.data.success) {
                    setData({
                        isLoaded: true,
                        projects: resp.data.data
                    })
                }
            }).catch(function(err) {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleRequestListObjects()
    }, [])

    return (
        <main>
            <Header />
            <div className="row">
                <Navigator />
                <div className="col-md-8 col-xl-10">
                    <div className="p-3">
                        <div className="d-flex justify-content-between">
                            <h3>
                                Список объектов
                            </h3>
                            <Link
                                className="btn btn-primary"
                                to={{
                                    pathname: "/crm/objects/create"
                                }}
                            >
                                Добавить объект
                            </Link>
                        </div>
                        {
                            !data.isLoaded ? "Загрузка..." :
                            data.projects.length === 0 ? "Проекты не найдены" :
                            <div className="row">
                                {
                                    data?.projects?.map((val, key) => {
                                        return (
                                            <div className="col-3">
                                                <div className="card">
                                                    <img src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg" class="card-img-top"/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{ val?.name }</h5>
                                                        <p className="card-text" style={{
                                                            fontSize: 14,
                                                            fontWeight: 500,
                                                            marginTop: 15,
                                                            marginBottom: 10
                                                        }}>{ val?.description }</p>
                                                        <a href="#" class="btn btn-primary">Посмотреть</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DObjects

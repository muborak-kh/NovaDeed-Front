import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Projects.css'
import BuildingCard from '../Components/BuildingCard'
import Header from '../Components/Home/Header'
import SubNav from '../Components/Home/SubNav'

const Projects = () => {

    const [data, setData] = useState({
        isLoaded: false,
        projects: []
    })

    const handleRequestListProjects = async () => {
        try {
            axios.post("http://127.0.0.1:8000/api/customer/projects/list").then(function (resp) {
                if (resp.data.success) {
                    setData({
                        isLoaded: true,
                        projects: resp.data.data
                    })
                }
            }).catch(function (err) {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleRequestListProjects()
    }, [])

    return (
        <main className="main-content">
            <Header/>
            <SubNav/>
            <div className="buildings-page">
                <section className="buildings-hero">
                    <div className="buildings-hero-content">
                        <h1 className="buildings-hero-title">Найди дом своей мечты</h1>
                        <div className="buildings-hero-search">
                            <div className="search-filters">
                                <select className="filter-item">
                                    <option value="">Количество комнат</option>
                                    <option value="1">1 комната</option>
                                    <option value="2">2 комнаты</option>
                                    <option value="3">3 комнаты</option>
                                    <option value="4">4 комнаты</option>
                                </select>
                                <select className="filter-item">
                                    <option value="">Цена</option>
                                    <option value="100-200">100-200 млн</option>
                                    <option value="200-300">200-300 млн</option>
                                    <option value="300-400">300-400 млн</option>
                                    <option value="400+">400+ млн</option>
                                </select>
                                <select className="filter-item">
                                    <option value="">По всему Узбекистану</option>
                                    <option value="tashkent">Ташкент</option>
                                    <option value="samarkand">Самарканд</option>
                                    <option value="bukhara">Бухара</option>
                                    <option value="andijan">Андижан</option>
                                </select>
                                <button className="btn-map">На карте</button>
                                <button className="btn-search">Поиск</button>
                            </div>
                            <div className="search-tags">
                                <span className="tag">23-70 м2</span>
                                <span className="tag">Ипотека</span>
                                <span className="tag">Из центра Ташкента</span>
                                <span className="tag">Бизнес класс</span>
                                <span className="tag">Сданные новостройки 2025</span>
                                <span className="tag">Со скидкой</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="popular-buildings">
                    <div className="popular-buildings-container">
                        <h2 className="popular-buildings-title">Популярные новостройки</h2>
                        <div className="buildings-grid">
                            { data?.projects.length === 0 ? "Список проектов пуст" : data?.projects?.map((building, index) => (
                                <BuildingCard key={index} {...building} />
                            ))}
                        </div>
                        <button className="btn-show-more">Показать еще</button>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Projects

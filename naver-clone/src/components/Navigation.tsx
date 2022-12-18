import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {IoIosMailOpen} from 'react-icons/io'
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';

const Wrap = styled.div`
    height: 52px;
    width: 1190px;
    margin: 0 auto;
    padding: 0 30px 0 30px;
    line-height: 52px;
    display: flex;
    position: relative;
    overflow:hidden ;
`
const NavigationWrap = styled.div`
    display: flex;
    font-size: 15px;
    font-weight: 700;
    span {
        margin-left: 10px;
    }
`
const NavigationGr = styled.div`
    color: #03c75a;
    cursor: pointer;
`
const NavigationBl = styled(NavigationGr)`
    color: black;
`
const WeatherWrap = styled(motion.div)`
    position:absolute;
    right:0;
    height: 100%;
    
`
const WeatherDes = styled(motion.div)`
    text-align: end;
    span {
        margin-left: 10px;
    }
    span:first-child{
        font-size: 20px;
    }
    span:nth-child(n+2):nth-child(-n+3){
        font-weight: bold;
    }
    span:nth-child(4){
        color: #387ff1
    }
    span:nth-child(5){
        margin:0;
        color: #bdc3c7;
    }
    span:nth-child(6){
        margin: 0;
        color:red;
    }
    span:last-child {
        color: #bdc3c7;
    }
`
const FineDustDes = styled(motion.div)`
    text-align: end;
    span {
        margin-left: 6px;
    }
    span:nth-child(3){
        font-weight:bold ;
    }
    span:nth-child(4){
        color:#e2e6e6
    }
    span:nth-child(7){
        font-weight:bold ;
    }
    span:last-child{
        color: #bdc3c7;
    }

`

const navigationGrText = [
    "메일", "카페", "블로그", "지식IN", "쇼핑", "쇼핑", "Pay", "TV"
]
const navigationBlText = [
    "Keep", "VIBE", "날씨", "예약"
]
const API_KEY = "9785dfe45ad749fc5ec1d09983fee741";

const weatherDes = [
    {
        des: "clear sky",
        묘사 : "맑음",
        emogi: "🌞"
    },
    {
        des:"few clouds",
        묘사: "약간 맑음",
        emogi:"🌥️"
    },
    {
        des:"scattered clouds",
        묘사:"약간 흐림",
        emogi:"☁️"
    },
    {
        des:"broken clouds",
        묘사:"약간 흐림",
        emogi:"☁️"
    },
    {
        des:"overcast clouds",
        묘사:"구름많음",
        emogi: "☁️"
    },
    {
        des:"shower rain",
        묘사:"소나기",
        emogi: "🌧️"
    },
    {
        des:"light rain",
        묘사: "약간 비",
        emogi: "🌧️"
    },
    {
        des:"moderate rain",
        묘사: "적당한 비",
        emogi: "☔"
    },
    {
        des:"Rain",
        묘사: "비",
        emogi: "💧"
    },
    {
        des:"Thunderstorm",
        묘사: "뇌우",
        emogi: "🌩️"
    },
    {
        des:"snow",
        묘사: "눈",
        emogi: "🌨️"
    },
    {
        des:"mist",
        묘사: "안개",
        emogi: "☁️"
    }
];

const variants = {
    hidden: {
        y: 50,
    },
    visible: {
        y: 0,
    },
    exit: {
        y: -50,
        
    },
  };


const Navigation = () => {
    const [lat,setLat] = useState(0);
    const [lon,setLon] = useState(0);
    const [url, setUrl] = useState("");
    const [index, setIndex] = useState(0);

    const [weather, setWeather] = useState({
        temp:0,
        tempMax:0,
        tempMin:0,
        des: "",
        name: ""
    })
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(function(pos) {
            setLat(pos.coords.latitude);
            setLon(pos.coords.longitude);

            setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            console.log(lat,lon)
        });
    }
    const getWeather = () => {
        axios.get(url).then(res=> {
            const newWeather = {
                temp: res.data.main.temp,
                tempMax :res.data.main.temp_max , 
                tempMin:res.data.main.temp_min , 
                des:res.data.weather[0].description,
                name: res.data.name
            };
            setWeather(newWeather);
            console.log(weather)
        })
    }
    useEffect(()=> {
        const loop = setInterval(() => {
            setIndex(prev => prev === 1? 0 : prev + 1);
        },4000)
        return () => {
            clearInterval(loop);
        };
    },[])
    useEffect(()=> {
        getLocation();
        getWeather();
    },[])


    return (
        <Wrap>
            <NavigationWrap>
                <NavigationGr>
                   <IoIosMailOpen/>
                    {navigationGrText.map(n => <span>{n}</span>)} 
                </NavigationGr>
                <NavigationBl>
                    {navigationBlText.map(n => <span>{n}</span>)}
                </NavigationBl>
                
            </NavigationWrap>
            <AnimatePresence initial = {false}>
                <WeatherWrap
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key = {index}
                >
                    {index===0 ? 
                    <WeatherDes>
                        {weatherDes.map(w => w.des === weather.des ? <span>{w.emogi}</span>: null)}
                        <span>{weather.temp}°</span>
                        {weatherDes.map(w => w.des === weather.des ? <span>{w.묘사}</span>: null)}
                        <span>{weather.tempMin}°</span>
                        <span>/</span>
                        <span>{weather.tempMax}°</span>
                        <span>{weather.name}</span>
                    </WeatherDes>:
                    <FineDustDes>
                        <span>미세</span>
                        <span>😊</span>
                        <span>좋음</span>
                        <span>l</span>
                        <span>초미세</span>
                        <span>😊</span>
                        <span>좋음</span>
                        <span>{weather.name}</span>
                    </FineDustDes>
                    }
                    
                    
                </WeatherWrap>
            </AnimatePresence>
            
        </Wrap>
    )
}

export default Navigation;
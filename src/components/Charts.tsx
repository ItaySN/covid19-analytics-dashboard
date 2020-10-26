import React,{useEffect,useState} from 'react'


function Charts() {
    
    const [data,setData] = useState<unknown>();

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')
        .then(res=>res.text())
        .then(res=>{
            setData(res)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return (
        <div>
            
        </div>
    )
}

export default Charts;








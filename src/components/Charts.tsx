import React,{useEffect,useState,useCallback} from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Select from 'react-select';





function Charts({data,label1,lebel2}) {
    
    // const [data,setData] = useState<unknown>();
    // const [countries,setCountries] = useState<any>();
    // const [isLoading,setLoading] = useState<boolean>(true);

    // const orderByCountry = useCallback((csv:string)=>{
    //         var lines = csv.split("\n");
    //         var counrties:any = [];

    //         var result:any = [];

    //         var headers = lines[0].split(",");
            
    //         for (var i = 1; i < lines.length; i++) {

    //             var obj:any = {};
    //             var currentline = lines[i].split(",");

    //             for (var j = 0; j < headers.length; j++) {
    //                 obj[headers[j]] = currentline[j];
    //             }
    //             counrties.push(obj['Country/Region'])
    //             result.push(obj);
    //         }
    //         setCountries(counrties)
    //         return result;
    // },[])

    // useEffect(()=>{
    //     fetch('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')
    //     .then(res=>res.text())
    //     .then(res=>{

    //         const lines:string[] = orderByCountry(res)
    //         // console.log(lines)
    //         setData(lines)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    // },[])

    // const dataCharting = (countries:Object[]) =>{
            
    // }


    return (
        <div>
            <div>
                <LineChart width={800} height={500} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={label1} stroke="#8884d8" activeDot={{r:8}} />
                    <Line type="monotone" dataKey={lebel2} stroke="#82ca9d" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        </div>
    )
}

export default Charts;








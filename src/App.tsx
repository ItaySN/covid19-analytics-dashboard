import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Charts from './components/Charts';
import Select from 'react-select';


function App() {
  const [data, setData] = useState<unknown>();
  const [countries, setCountries] = useState<{label:string,value:number}[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [firstCountryName, setFirstCountryName] = useState<string>('ISRAEL')
  const [secondCountryName, setSecondCountryName] = useState<string>('US')
  const [firstCountryIndex,setFirstSelect] = useState<number>(149)
  const [secondCountryIndex,setSecondSelect] = useState<number>(244)
  

  //Get data from the CSV for two countries
  const reRender = async () =>{
    try{
      fetch('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')
        .then(res => res.text())
        .then(resData => {
          console.log(resData)
          
          const dates: string[] = resData.split('\n').slice(0).map(line => (line.split(',')))[0].slice(4);

          //Get the data of the two countries by their index
          const firstCountry: string[] = resData.split('\n').slice(0).map(line => (line.split(',')))[firstCountryIndex];
          const secondCountry: string[] = resData.split('\n').slice(0).map(line => (line.split(',')))[secondCountryIndex];
          
          const firstCountryName1 = firstCountry[1].toUpperCase();
          
          const secondCountryName1 = secondCountry[1].toUpperCase();

          const formatData: any = [];
         
          for (let i = 4; i < dates.length; i++) {
            let newRow: any = {};
            newRow["date"] = dates[i];
            newRow[firstCountryName1] = parseInt(firstCountry[i]);
            newRow[secondCountryName1] = parseInt(secondCountry[i]);            
            formatData.push(newRow);
          }

          
          const countriesList: string[][] = resData.split('\n').slice(1).map(line => (line.split(',').slice(0, 2)));
          const countriesArr: { label: string, value: number }[] = [];

          for (let i = 0; i < countriesList.length; i++) {
            countriesArr.push({ label: countriesList[i].reverse().join(' : '), value: i + 1 })
          }
  
          setData(formatData);
          setFirstCountryName(firstCountryName1);
          setSecondCountryName(secondCountryName1)
          setCountries(countriesArr)
          setIsLoading(false)
        })
    }
    catch(err){
      console.error(err.message)
    }
  }

  useEffect(() =>{
    reRender();
  },[])

  //When changing the first selcet value
  const firstInput = (input:any) =>{
    setFirstSelect(input.value)
  }
  //When changing the second selcet value
  const secondInput = (input: any) => {
    setSecondSelect(input.value)
  }

  useEffect(()=>{
      reRender()
   },[firstCountryIndex, secondCountryIndex])
  

  return(
    <div className="App">
      <h1>Covid-19 Confirmed Cases</h1>
      {isLoading ? 
        <div> loading...</div>
      :
      <>
        {
          countries &&
          <>
            <Charts data={data} label1={firstCountryName} lebel2={secondCountryName} />
            <div>
              <Select options={countries} onChange={firstInput} placeholder="Israel" />
              <Select options={countries} onChange={secondInput} placeholder="USA" />
            </div>
          </>
        }
      </>
    }
    </div>
  )
  
}




export default App;

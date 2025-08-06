import React,{useState,useEffect,createContext} from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import "./App.css"
import axios from "axios"
import {useSelector} from 'react-redux'
import {selectTheme} from './Reducer'
export const themeContext = createContext(null)
const App = () => {
  
  
  
  const [searchResult,setSearchResult] = useState('general');
  const [querySearch,setQuerySearch] = useState(null);
  const [newsArray,setNewsArray] = useState([]);
  const [page,setPage] = useState(1);
  const mode = useSelector(selectTheme)

  useEffect(() => {
    NewsData()
    mode==='light'?document.body.classList.add('white'):document.body.classList.add('black')
  
    
  })
  
 
  
  
  
  

  
  const updateNextPage = async() => {
    if(querySearch){
      setPage(page+1)
      axios.get(`https://newsapi.org/v2/everything?q=${querySearch}&apiKey=6acf43732f554b51b71d6e9f120fd1cc&page=${page+1}&pageSize=8`).then((res)=>{
      setNewsArray(res.data.articles);
      })
      
    }
  else{
      setPage(page+1);
      axios.get(`https://newsapi.org/v2/top-headlines?category=${searchResult}&country=us&apiKey=6acf43732f554b51b71d6e9f120fd1cc&page=${page+1}&pageSize=8`)
      .then((res)=>{
      setNewsArray(res.data.articles);
      })
      
    
  }
  }

  const updatePreviousPage = async () => {
    if(querySearch){
      setPage(page-1);
      axios.get(`https://newsapi.org/v2/everything?q=${querySearch}&apiKey=6acf43732f554b51b71d6e9f120fd1cc&page=${page-1}&pageSize=8`).then((res)=>{
        setNewsArray(res.data.articles);
      })
      
    }
  else{
    setPage(page-1);
    axios.get(`https://newsapi.org/v2/top-headlines?category=${searchResult}&country=us&apiKey=6acf43732f554b51b71d6e9f120fd1cc&page=${page-1}&pageSize=8`).then((res)=>{
      setNewsArray(res.data.articles);
    })
    
    
  }
  }

   function updateState(stateName){
    setSearchResult(stateName);
    setPage(1);
    setQuerySearch(null);
    NewsData(stateName)
  }

  function updateQuery(query){
  setQuerySearch(query);
  setPage(1);
    axios
    .get(`https://newsapi.org/v2/everything?q=${query}&apiKey=6acf43732f554b51b71d6e9f120fd1cc&page=${page}&pageSize=8`)
    .then((res)=>{
      setNewsArray(res.data.articles);
    console.log(`previous query: ${querySearch}`)
    })
  }

  const updateHomeClickBtn = async()=>{
    setQuerySearch(null);
    setPage(1);
    setSearchResult('general');
    NewsData('general')
  }


  


const NewsData =  (categoryName=searchResult)=>{
axios
.get(`https://newsapi.org/v2/top-headlines?category=${categoryName}&country=us&apiKey=6acf43732f554b51b71d6e9f120fd1cc&page=${page}&pageSize=8`)
.then((res)=>{
setNewsArray(res.data.articles);

})
}
  
  
  return (
    <>
    
      

      <Navbar name={searchResult} updateState={updateState}   NewsData={NewsData} updateQuery={updateQuery} updateHomeClickBtn={updateHomeClickBtn}/>

      <News  querySearch={querySearch} page={page} newsArray={newsArray} updateNextPage={updateNextPage} updatePreviousPage={updatePreviousPage} NewsData={NewsData} searchResult={searchResult}/>
      
 
    </>
  )
}

export default App
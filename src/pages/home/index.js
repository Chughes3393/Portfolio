import React from 'react';
import './styles.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

const Home = () => {

  var ReactRotatingText = require('react-rotating-text');

  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetchQuotes()
  }, [])

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/portfolio-back/allquotes')

      // console.log(response)
      setQuotes(response.data)

    } catch (err) {
      console.log(err)
    }
  }

  return (

    <div>
      {
        quotes.map(quotes => {
          return (
            <div className='mt-5'>
            <center>
            <ReactRotatingText 
            items={[
              `${quotes.quote} ${quotes.from1}`,
             `${quotes.quote} ${quotes.from1}`, 
             `${quotes.quote} ${quotes.from1}`
            ]} 
             />
              </center>
            </div>
          )
        })
      }

    </div>

  );
}


export default Home;

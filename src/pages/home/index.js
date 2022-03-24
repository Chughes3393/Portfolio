import React from 'react';
import './styles.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

const Home = () => {

  const [quotes, setQuotes] = useState([])

  // useEffect(() => {
  //   fetchQuotes()
  // }, [])

  // const fetchQuotes = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8081/api/v1/portfolio-back/allquotes')

  //     // console.log(response)
  //     setQuotes(response.data)

  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

//   useEffect(() => {
//     const url = `http://localhost:8081/api/v1/portfolio-back/allquotes`;

//     const fetchQuotes = async () => {
//         try {
//             const response = await fetch(url);
//             const json = await response.json();
//             console.log(response);
//             setQuotes(json.slip.quotes);
//         } catch (error) {
//             console.log("error", error);
//         }
//     };

//     fetchQuotes();
// }, []);

// const quoted = [{
//   quote: 'blah blah blah',
//   from: 'heh heh heh',
//   whenre: 'here here here'
// },
// {  quote: 'blah blah blah',
// from: 'heh heh heh',
// whenre: 'here here here'}]

// console.log=('quote' {quoted.quote})

  return (

      <div className='m-5' id='home-div'>
<h2>
"A 2019 study showed Greater Boston’s arts sector not only serves more people than the Red Sox, Celtics and Bruins combined, but contributes $2 billion into the local economy."
</h2>
<h5>- from 'Artists in Somerville’s Central Street Studios struggle to find space as leases end abruptly'</h5>


      </div>

  );
}

export default Home;

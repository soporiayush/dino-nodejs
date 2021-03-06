const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

const fetch = require('node-fetch');
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  app.get('/dinoname', async (req,res)=>{
      //run code
      const fetchApi = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=2&words=2&format=json", {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-key": "",
		"x-rapidapi-host": ""
	    }
    })
    console.log(fetchApi);
    const dinoresponse = await fetchApi.json();
    console.log('the response form the API is ',dinoresponse)
    res.json(dinoresponse)
  
})

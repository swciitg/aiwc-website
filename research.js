const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=>, initial-scale=1.0">
      <title>Document</title>
     
  </head>
  <style>.align {
    margin-left: 7%;
    margin-right: 7%;
    

}

.font {
    font-size: x-small;
    margin-right: 20%;
    font-size: 1px;
}

.link {
    color: #F16B58;
    font-family: 'Bebas Neue', sans-serif;
}

#arrow {
    font-size: 25px
   
}

.subtitles {
    font-weight: 100;
    font-family: 'Lato', sans-serif;
    
}
#research_font{font-family: 'Bebas Neue', sans-serif;}

.bold {
    font-weight: bold;
    
}</style>
  
  
  <body>
      <section class="align">
          <h1 class="bold" id="research_font">RESEARCH</h1>
          <hr color="black" width="100%">
          <br><br>
          <ol type="1" class="bold">
              <li><span class="subtitles"> Water for Agricultural and Food Sustainability: Developing <br>
                      Transdisciplinary Approach to Groundwater Management<br>
                      <a href="https://sparc.iitkgp.ac.in/detailpage.php?id=1285"><span class="link">
                              https://sparc.iitkgp.ac.in/detailpage.php?id=1285</a>
              </li><br><br><br>
              <li><span class="subtitles">Coastal reservoirs as a sustainable strategy for Water Security<br>
                      <a href="https://sparc.iitkgp.ac.in/detailpage.php?id=330"><span class="link">
                              https://sparc.iitkgp.ac.in/detailpage.php?id=330</a>
              </li><br><br><br>
              <li><span class="subtitles">Managing Aquifer Recharge and Sustaining Groundwater Use through <br>
                      Village-level Intervention<br>
                      <a href="http://www.marvi.org.in/"><span class="link">
                              http://www.marvi.org.in/</p></a>
              </li>
          </ol>
          <p><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://"><span class="link">Further Research</a>
              <!-- <span style="color: white">&#8594;</span></p> -->
              <span class="link" id="arrow">&#8594;</span>
          </p>
          <br><br>
          <!-- <p class="font" style="color: rgba(212, 204, 204, 0.87);"></p>NB : Signing of MoUs is in Progress.</p> -->
      </section>
  </body>
  
  </html>`
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

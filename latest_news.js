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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="latest_news.css">
    </head>
    <style>
    .align {
        margin-left: 5%;
        margin-right: 5%;
    }
    
    h1{
    position: absolute;
    width: 1177px;
    height: 43px;
    left: 100px;
    top: 38px;
    
    font-family: Bebas Neue;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 43px;
    letter-spacing: 0.05em;
    
    color: #000000;
    }
    #ruler{
    position: absolute;
    width: 1000px;
    height: 0px;
    left: 100px;
    top: 100px;
    
    border: 1.3px solid #000000;
    }
    
    #cont1{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        
        position: absolute;
        width: 4000px;
        height: 234px;
        left: 30px;
        top: 148px;
        margin-top: 50px;
        padding-right: 30px;
        }
    #left{
        padding-left: 120px;
    }
    #right{
        padding-left: 130px;
    }
    #right2{
        padding-left: 120px;
    }
    
        #cont2{
            display: flex;
        flex-direction: row;
        align-items: flex-start;
        position: absolute;
        width: 4000px;
        height: 234px;
        left: 30px;
        top: 499px;
        padding-right: 30px;
        }
    
    .subtitles {
       
        width: 484px;
        height: 30px;
     
        top: 0px;
        
        font-family: Lato;
        font-style:inherit;
        font-weight: 500;
        font-size: 20px;
        line-height: 127%;
        /* or 30px */
        
        align-items: center;
        letter-spacing: 0.12em;
             
    }
    .text{
    
    width: 232px;
    height: 70px;
    left: 40px;
    top: 49px;
    
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 149.02%;
    /* or 24px */
    
    display: flex;
    align-items: center;
    
    color: #4E4E4E;
    
    }
    a{
        text-decoration: none;
    }
    .link {
    position: static;
    width: 99px;
    height: 22px;
    left: 0px;
    top: 164px;
    
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    
    /* identical to box height */
    
    letter-spacing: 0.05em;
    
    color: #F16B58;
    }
    
    .grey-hr{
    position: absolute;
    width: 204px;
    height: 0px;
    display: flex;
    border: 0.5px solid #C9C9C9;
        transform: rotate(90deg);
    }
    
    </style>  
    
    
    <body>
            <section class="align">
                <h1 class="bold" id="latest-news-font">LATEST NEWS</h1>
                <hr color="black" width="100%" id = "ruler">
                <br>
            <table id = "cont1">
                <td >
                    <hr class = "grey-hr"> <br><br><br></td>
                    <td id = "left">
                    <span class="subtitles"> Webinar series on Hydro-Diplomacy<br><br><br>
                        <span class = "text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Pharetra neque, tristique aenean scelerisque. </span><br>
                        <a href="#"><span class="link">
                                Know more</a> </div><br><br><br>
                </td>
                
                <td id = "right">
                    <hr class = "grey-hr"><br><br><br></td>
                    <td id = "right2" >
                    <span class="subtitles"> Water Conclave<br><br><br>
                        <span class = "text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Pharetra neque, tristique aenean scelerisque. </span><br>
                        <a href="#"><span class="link">
                                Know more</a><br><br><br>
                </td>
    
            </table>
    
            <table id = "cont2">
                <td >
                    <hr class = "grey-hr"><br><br><br>
                </td>
                <td id = "left">
                    <span class="subtitles"> Australia India Water Centre Launched<br> <br><br>
                        <span class = "text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Pharetra neque, tristique aenean scelerisque. </span><br>
                        <a href="#"><span class="link">
                                Know more</a> </div>
                                <br><br><br>
                </td>
                <td id = "right">
                    <hr class = "grey-hr"><br><br><br></td>
                    <td id = "right2">
                    <span class="subtitles">Virtual Lamp Lighting during Launching of AIWC<br><br><br>
                        <span class = "text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Pharetra neque, tristique aenean scelerisque. </span><br>
                        <a href="#"><span class="link">
                                Know more</a><br><br><br>
                </td>
    
            </table>
    </body>
    </html>`
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
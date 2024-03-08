# Crypto Coin App

**How does my project look**


![crypto coin app](https://github.com/kaplanh/Crypto-Coin-App/assets/101884444/a0a449c1-d8c0-4566-b5a7-f3f43ae79359)

[Live link!](https://kaplanh.github.io/Crypto-Coin-App/)


 **What's used in this app ?** | **How to run ?** | **Author** |
|----------|---------|------------
|Api-Server | Once you clone the project|[Take a look at my portfolio](https://kaplanh.github.io/Portfolio_with_CssFlex/)|
|axios | open index.html with Go Live in vs cod|[Visit me on Linkedin](https://www.linkedin.com/in/kaplan-h/)|
|postman| |
|Html| |
|Css||   
|Javascript |  |
  

**What is this project about ?**




## Project Skeleton 

```
Crypto Coin App (folder)
|
|----img (folder)
|----index.html
|----css (folder)
       |----style.css
|----crypto.js
|----js (folder)
       |----aes.css
       |----Extentions-custom-main.css
|----readme.md                        

```

### At the end of the project, the following topics are to be covered;

- API's
  - [Coinranking API ](https://developers.coinranking.com/api)
- HTML
  - semantic-elements
   ~~~html
      <center>
          <h1 class="heading">Crypto Coin App</h1>
      </center>
   ~~~
   ~~~html
     <small>Coded by <span>❤</span>FullStack Team</a></small>
   ~~~
   ~~~html
     <figure>
       <img class="coin-icon" src=${iconUrl}>                
       <figcaption style='color:${change < 0 ? "red" : "green"}'>
         <span><i class="fa-solid fa-chart-line"></i></span>
         <span>${change}%</span>
      </figcaption>
    </figure>
   ~~~
- CSS
  -grid
  - z-index
  - position [^p]
    [^p]:div'in sag üst kösesine carpi butonu koymak icin
   ~~~css
        .top-banner form {
        position: relative;
        display: flex;
        align-items: center;
      }
    
       .remove-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
      }

   ~~~
 
  
- js
   -  EncryptStringAES
   -  DecryptStringAES
       ```
       <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Crypto Coin App</title>         
          <script src="js/aes.js"></script>
          <script src="js/Extentions-custom-main.js"></script>
          
        </head>
       
       //js/Extentions-custom-main.js
       function EncryptStringAES(text) {
            if (text != null) {
                var key = CryptoJS.enc.Utf8.parse("8080808080808080");
                var iv = CryptoJS.enc.Utf8.parse("8080808080808080");

              var encryptedstr = CryptoJS.AES.encrypt(
                  CryptoJS.enc.Utf8.parse(text),
                  key,
                  {
                keySize: 128,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
            }
        );
        return encryptedstr;
          } else {
              return "";
          }
        }

        function DecryptStringAES(text) {
            if (text != null) {
                var key = CryptoJS.enc.Utf8.parse("8080808080808080");
                var iv = CryptoJS.enc.Utf8.parse("8080808080808080");

        const crypted = CryptoJS.enc.Base64.parse(text);

        var decryptedstr = CryptoJS.AES.decrypt({ ciphertext: crypted }, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return decryptedstr.toString(CryptoJS.enc.Utf8);
            } else {
            }
        }
       ```
   -  Axios

      ```
             //index.html
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Crypto Coin App</title>
              
              <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
          </head>

           //crypto.js
           const response = await axios(url, options);
          
         ```
   -  template literal(2015 ES-6 ile gelmistir ` ${...} `
     
     ```
           const url = `https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`;

     ```
   -   style class ekleme
       ```
       <figcaption style='color:${change < 0 ? "red" : "green"}'>
       ```
     
   -  prepend() :son ekleneni basa yazdirir
         ```
         coinList.prepend(createdLi);

         ```
   - async-await
     
   - DOM Manipulations
     - innerHTML
     
  - DOM Selectors
  - Events
    - submit
    - click
    -  load
 
   - Array Methods
      - forEach() &  filter()

     ```
            if (coinNameSpans.length > 0) {//kart yoksa bosuna filter islemi yapmasin diye
            const filteredArray = [...coinNameSpans].filter(
                (span) => span.innerText == name
            );
       ```




## Feedback and Collaboration
I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!
clone this repo  to your folder 
Requirement: Node version using v22


run: npm install
 - package: react, react,dome,typescript,axios, tailwindcss



 Environment used:

 vagrant : ubuntu 20.04
----------------------APACHE CONFIGURATION ------------------------------------
 apache virtualhost configuration
 <VirtualHost *:80>
       
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/public/nextjsexam
        #frontend
        ServerName product-nextjs.local
        
        ProxyPass / http://localhost:3000/
        ProxyPassReverse / http://localhost:3000/
        
        
</VirtualHost>

 --------------configuuration-----------------------------------------------------
 Configuration: communicate to laravel 

 utils/global.ts  
  - change the url, this url is the second package in my github 

  note: did not  use any .env setup

------------------------LIMITATION------------------------------------------
  Limitation:
     hompage 
      - only display the  https://dummyjson.com/products
      - no pagination or next page 
      -  no categories implementation 

    product page 
     - a sample UI with add to cart ( no function implementation in add to cart )
    - search result page 
       - display data  in row 
       - no next page display whatever the results in  https://dummyjson.com
    
     
     --------------running ------------------------------
     command: num run dev 
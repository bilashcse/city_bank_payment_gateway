# City Bank Payment Gateway
City Bank Payment Gateway Implementation using NodeJs

# Environment Setup
- Coming soon . . .

# Server Setup
1. To install dependencies type this command on terminal
 ```
 > npm install
 ```
2. To start the server type this command on terminal
```
> npm start
```

# Gateway API
## Pay payment through Gateway

1. Open your browser & type on the url :
```
> http://localhost:3000
```
> This url will hit our api & this api will send request to city Bank gateway to initiate create order session. Order amount & description will needed to send the request. Amount must needed to multiply by 100 before sending the request. You must need to provide approved url, denied url & canceled url for this request also. this url will be hit after payment will successful or unsuccessful.
> If this request will successful you will get redirect url, orderId & sessionId from the request. This redirect url will be used to redirect your browser url & this url redirect to payment page.
> Need to fill Card No, Expire date, CVV No properly. Then submit your info for payment.
> If your payment will be successful, then you will get the response on
```
> http://localhost:3000/approved
```
Now you will get this response & retrieve payment information from app.js & api will be 
```
/approved
```
> If you payment will be denied then you will get response on
```
> http://localhost:3000/denied
```
Now you will get this response & retrieve order information from app.js & api will be 
```
/denied
```
> If your payment will be canceled, then you will get the response on
```
> http://localhost:3000/canceled
```
Now you will get this response & retrieve order information from app.js & api will be 
```
/canceled
```

## Get Payment Information
> To get existing payment information you need to type on your browser:
```
http://localhost:3000/payment?orderId='XXXX'&sessionId='XXXXXXXXXXXX'
```
Here, OrderId & sessionId must be that orderId & sessionId; which you will get from initiate create order session.
> On successful request you will get full details of the payment. 


# Copyright

Copyright (c) 2019 Nazmul Hossain

# License : The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## City Bank Payment Gateway
City Bank Payment Gateway Implementation using NodeJs

## How to setup ?
- Coming soon . . .

## How to start ?
# Pay Payment
At first run `npm install`. Now server is ready to start. 
Open browser & hit `http://localhost:3000`. Now a request will send to city bank gateway to initiate create order session. If this request will successful, you will get a redirect url, orderId, sessionId; Here redirectUrl is needed to hit on browser. Now you will see Payment page of City bank. You will need to fill all the fields properly. Then submit the request. 
If your payment will approved, then you will get the response on `http://localhost:3000/approved`. 
If you payment will denied then you will get response on `http://localhost:3000/denied`. 
Similarly if payment will canceled, then you will get response on `http://localhost:3000/canceled` with payment details information.

# Get Payment Information
If you want to get your payment information, hit `http://localhost:3000/payment?orderId='XXXX'&sessionId='XXXXXXXXXXXX'` on your browser. If this request will successful, you will get payment info against those orderId & sessionId.

# Copyright

Copyright (c) 2019 Nazmul Hossain

# License : The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

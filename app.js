const express = require('express');
const bodyParser = require('body-parser');
const parser = require('xml2json');
const helper = require('./helper');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get('/', async (req, res) => {
    try {
        const sessionInfo = await helper.startOrderSession({
            amount: 10000, //Must be multiply by 100
            description: 'Payment gateway testing . . '
        });

        res.json({
            isError: false,
            orderId: sessionInfo.OrderID,
            sessionId: sessionInfo.SessionID,
            redirectUrl: `${sessionInfo.URL}?OrderID=${sessionInfo.OrderID}&SessionID=${sessionInfo.SessionID}`
        });

    } catch(err) {
        res.json({
            isError: true,
            message: err
        });
    }
});

app.get('/payment', async (req, res) => {
    try {
        const paymentInfo = await helper.getOrderInformation(req.query);
        res.json({
            isError: false,
            paymentInfo
        });

    } catch(err) {
        res.json({
            isError: true,
            message: err
        });
    }
});

app.post('/approved', function (req, res) {
    const json = parser.toJson(req.body.xmlmsg);
    res.json({
        isError: false,
        status: 'approved',
        info: JSON.parse(json)
    });
});

app.post('/canceled', function (req, res) {
    const json = parser.toJson(req.body.xmlmsg);
    res.json({
        isError: false,
        status: 'canceled',
        info: JSON.parse(json)
    });
});

app.post('/denied', function (req, res) {
    const json = parser.toJson(req.body.xmlmsg);
    res.json({
        isError: false,
        status: 'denied',
        info: JSON.parse(json)
    });
});

app.listen(port, function () {
    console.log('Server started on port ' + port);
});
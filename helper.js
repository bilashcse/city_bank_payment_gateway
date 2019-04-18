const rp = require('request-promise');
const parser = require('xml2json');
const port = 3000;
const configs = {
    merchantId: 'XXXXXXXX',
    host: `http://localhost:7743`,
    approveUrl: `http://localhost:${port}/approved`,
    cancelUrl: `http://localhost:${port}/canceled`,
    declineUrl: `http://localhost:${port}/denied`
};


async function callCityBank(data) {
    const options = {
        uri: configs.host + '/Exec',
        method: 'POST',
        body: data,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    };

    try {
        const res = await rp(options);
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function startOrderSession(order) {
    const data = `<?xml version="1.0" encoding="UTF-8"?>
  <TKKPG>
    <Request>
      <Operation>CreateOrder</Operation>
      <Language>EN</Language>
      <Order>
        <OrderType>Purchase</OrderType>
        <Merchant>${configs.merchantId}</Merchant>
        <Amount>${order.amount}</Amount>
        <Currency>050</Currency>
        <Description>${order.description}</Description>
        <ApproveURL>${configs.approveUrl}</ApproveURL>
        <CancelURL>${configs.cancelUrl}</CancelURL>
        <DeclineURL>${configs.declineUrl}</DeclineURL>
      </Order>
    </Request>
  </TKKPG>`;
    try {
        const xml = await callCityBank(data);
        const json = parser.toJson(xml);
        const parseData = JSON.parse(json);
        return parseData.TKKPG.Response.Order;
    } catch (err) {
        throw new Error(err);
    }
}

async function getOrderInformation(order) {
    const info = `<?xml version="1.0" encoding="UTF-8"?>
  <TKKPG>
    <Request>
      <Operation>GetOrderInformation</Operation>
      <Language>EN</Language>
      <Order>
        <Merchant>${configs.merchantId}</Merchant>
        <OrderID>${order.orderId}</OrderID>
      </Order>
      <SessionID>${order.sessionId}</SessionID>
      <ShowParams>true</ShowParams>
      <ShowOperations>false</ShowOperations>
      <ClassicView>true</ClassicView>
    </Request>
  </TKKPG>`

    try {
        const xml = await callCityBank(data);
        const json = parser.toJson(xml);
        const parseData = JSON.parse(json);
        return parseData;
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    startOrderSession,
    getOrderInformation
};
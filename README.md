# BTC TRANSACTIONS TRACKER
---
## A small app written with React, Redux and Electron to retrieve the history of btc transactions that belong to a certain address. 

---
The app can be run on the localhost as well as an Electron app. Please follow the steps below to start it up.

1) Clone this repo:
```
git clone https://github.com/NastiaS/btc-transactions-tracker
```
2) Run: 
```
npm install
```
3) To run on the localhost in the browser run:
```
npm start
```
When running on the localhost you might hit a CORS issue. One way to overcome this is to use a Chrome extension: Allow-Control-Allow-Origin: * that eliminates this problem and can be sufficient for local dev testing purposes.

4) To open it as an electron app run:
```
npm run build
```
It will create a build folder required by Electron and then:
```
npm run electron
```
That will start the app!


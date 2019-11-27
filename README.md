# BOARDRACK (PRIVATE)

### Classified Advertisement Website for New / Used / Custom Suftboards

#### Built Using MongoDB, Express.js, React/Redux, Node.js with Ant design UI framework

\*\*\* If need to make public, check config/default.json (DB admin uName/pwd visible)

## Dev Notes

Update AntD default variables in /client/public/config-overrides.js
primary blue: `#00458a`  
secondary blue: `#4878a9`  
primary white: `#ffffff`  
primary grey: `#f3f7f9`  
primary green: `#52c41a`
compress image options: client/src/actions/imageUpload.js

## Production checklist

- Change db location in config/DB.js
- Change proxy in client/package.json, to connect to express server (not sure if this is actually required)
- configure /api/externalAPI/getApproximateLocation route to make sure correct ip address is retreived from user
  - ^ might require bypass caused from proxy / nginx

## How to run (deployed in production)

- Start express server with pm2 with `$ npm start pro` or `$ pm2 start server.js --env production`
- Start react client with `$ npm run deploy-production` or build react app with `$ react-app-rewired build`, remove current build from nginx selected folder with `$ rm -r /var/www/boardrack.org/html/*`, move current build to nginx folder with `$ cp -r ./build/* /var/www/boardrack.org/html`
- Change location of mongo database in /config/DB.js
- Create config/default.json with entries:
  `"mongoURI": "xxxxxxxxxxxxxxxx",`  
  `"mongoURI_dev": "xxxxxxxxxxxxxxxx",`  
  `"jwtSecret": "xxxxxxxxxxxxxxxx",`  
  `"S3_Access_Key_Id": "xxxxxxxxxxxxxxxx",`  
  `"S3_Secret_Acess_Key": "xxxxxxxxxxxxxxxx",`  
  `"S3_Region": "xxxxxxxxxxxxxxxx",`  
  `"S3_Bucket": "xxxxxxxxxxxxxxxx"`

### SSH Commands

- `$ sudo nginx` start nginx server
- `$ sudo nginx -s stop` stop nginx server
- `$ pm2 status` check status of pm2 processess
- `$ pm2 start server.js --env production` start express api server in production
- `$ pm2 stop 0` stop pm2 process with id == 0
- `$ pm2 delete 0` delete pm2 process with id == 0

## Scripts

### From /BoardRack

    "prod": "NODE_ENV=production pm2 start server.js",
    "start": "node server",
    "server": "nodemon server",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""

### From /BoardRack/client

    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject",
    "deploy-production": "react-app-rewired build && rm -r /var/www/boardrack.org/html/* && cp -r ./build/* /var/www/boardrack.org/html"

    //deploy-production must be ran from remote server in ~/BoardRack/client directory

## Dependencies

### Frontend

- "antd": "^3.21.2",
- "axios": "^0.19.0",
- "babel-plugin-import": "^1.12.0",
- "customize-cra": "^0.4.1",
- "less": "^3.9.0",
- "less-loader": "^5.0.0",
- "react": "^16.8.6",
- "react-app-rewired": "^2.1.3",
- "react-dom": "^16.8.6",
- "react-redux": "^7.1.0",
- "react-router-dom": "^5.0.1",
- "react-scripts": "3.0.1",
- "redux": "^4.0.4",
- "redux-devtools-extension": "^2.13.8",
- "redux-form": "^8.2.6",
- "redux-thunk": "^2.3.0",
- "uuid": "^3.3.2"

### Backend

- bcryptjs: ^2.4.3,
- config: ^3.1.0,
- express: ^4.17.1,
- express-validator: ^5.3.1,
- jsonwebtoken: ^8.5.1,
- mongoose: ^5.5.11

## Authors

- **David Dropping** - [ddropping](https://github.com/ddropping)

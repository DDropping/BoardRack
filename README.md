![screenshot](https://github.com/DDropping/portfolio/blob/master/src/images/project-boardrack.png)

# BoardRack

### Project has been discontinued. Updated version 2 repository can be found [here](https://github.com/DDropping/BoardRack_v2)

Classified Advertisement Website for New / Used / Custom Suftboards

---

### Clone

- Clone this repo to your local machine using `https://github.com/DDropping/BoardRack.git`

### Setup

#### How to run (deployed in production)

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

---

## Technologies

- Create-React-App

- Custom Express 

- [Here API](https://developer.here.com/) integration for location based services.

- [IPStack API](https://ipstack.com/) integration for IP location based services.

- [Ant Design](https://ant.design/components/overview/) component library used for rich ui elements.

- [Redux](https://redux.js.org/) used for application state management.

- [JWT](https://jwt.io/) used for authorization.

---

## Developer Notes

Update AntD default variables in /client/public/config-overrides.js
primary blue: `#00458a`  
secondary blue: `#4878a9`  
primary white: `#ffffff`  
primary grey: `#f3f7f9`  
primary green: `#52c41a`
compress image options: client/src/actions/imageUpload.js

## Production Notes

change base url: utils/baseUrl

## Other Notes

- fix: pre-load antd library styles into \_app.js
- note: any antd components used need to be pre-loaded into \_app.js

---

## Support

Reach out to me at one of the following places!

- Website at <a href="http://ddropping.com" target="_blank">`ddropping.com`</a>
- LinkedIn at <a href="https://www.linkedin.com/in/ddropping/" target="_blank">`@ddropping`</a>
- Email at <a href="mailto:ddropping@gmail.com" target="_blank">`ddropping@gmail.com`</a>

---

## Authors

- **David Dropping** - [ddropping](https://github.com/ddropping)

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="http://ddropping.com" target="_blank">David Dropping</a>

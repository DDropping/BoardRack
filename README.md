# BOARDRACK

### Classified Advertisement Website for New / Used / Custom Suftboards

#### Built Using MongoDB, Express.js, React/Redux, Node.js with Ant design UI framework

## Scripts

### From /BoardRack

    `"start": "node server"`
    `"server": "nodemon server"`
    `"client": "npm start --prefix client"`
    `"dev": "concurrently \"npm run server\" \"npm run client\""`

### From /BoardRack/client

    `"start": "react-app-rewired start"`
    `"build": "react-app-rewired build"`
    `"test": "react-app-rewired test"`
    `"eject": "react-scripts eject"`
    `"deploy-production": "react-app-rewired build && rm -r /var/www/boardrack.org/html/* && cp -r ./build/* /var/www/boardrack.org/html"`
    deploy-production must be ran from remote server in ~/BoardRack/client directory

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

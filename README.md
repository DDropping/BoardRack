# BOARDRACK
### Classified Advertisement Website for New / Used / Custom Suftboards  
#### Built Using The Mern Stack (MongoDB, Express.js, React/Redux, Node.js) with Ant design UI framework

## Dependencies
### Frontend
- axios: ^0.19.0,
- moment: ^2.24.0,
- react: ^16.8.6,
- react-dom: ^16.8.6,
- react-moment: ^0.9.2,
- react-redux: ^7.1.0,
- react-router-dom: ^5.0.1,
- react-scripts: 3.0.1,
- redux: ^4.0.1,
- redux-devtools-extension: ^2.13.8,
- redux-thunk: ^2.3.0
### Backend
- bcryptjs: ^2.4.3,
- config: ^3.1.0,
- express: ^4.17.1,
- express-validator: ^5.3.1,
- jsonwebtoken: ^8.5.1,
- mongoose: ^5.5.11

## Authors

- **David Dropping** - [ddropping](https://github.com/ddropping)  


## Todo - routes
#### Accounts
- [x] GET api/accounts (retrieve all account profiles)
- [x] GET api/myAccount (retrieve current user account given JWT)
- [x] GET api/accounts/:user_id (retrieve user given user ID)
- [x] POST api/accounts (create a new account with username, email, password, userType)
- [x] DELETE api/myAccount (remove current signed in users account and all posts associated with the account)

#### Users
- [x] GET api/users (retrieve all users profiles)

#### Shops
- [x] GET api/shops (retrieve all shop profiles)

#### Shapers
- [x] GET api/shapers (retrieve all shaper profiles)

#### Auth
- [x] GET api/auth (get user info)
- [x] POST api/auth (Login user / get jwt token)

#### Posts
- [x] POST api/posts (create a new post)
- [x] POST api/posts/update/:id (update an existing post)
- [x] POST api/posts/like/:id (add like to a post)
- [x] POST api/posts/unlike/:id (unlike a post)
- [x] GET api/posts/:id (retrieve post given id)
- [x] GET api/posts (retrieve all posts)
- [x] GET api/posts/fitred (retrieve posts from a filted search)
- [x] DELETE api/posts/delete/:id (delete a post given the post ID)

#### Messages
- [x] GET api/messages/allMessages (ADMIN only: get all messages)
- [x] GET api/messages/ (get all messages associated with user)
- [x] POST api/messages/openMessages/:postId (create new message thread)
- [x] PUT api/messages/addMessages/:threadId (add new message)


## Middlewares
- [x] auth (check if jwt is a valid jwt)
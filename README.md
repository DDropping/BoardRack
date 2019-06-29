# BOARDRACK
### Classified Advertisement Website for New / Used / Custom Suftboards  
#### Built Using The Mern Stack (MongoDB, Express.js, React/Redux, Node.js)

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
- [x] GET api/posts/:id (retrieve post given id)
- [x] GET api/posts (retrieve all posts)
- [x] GET api/posts/fitred (retrieve posts from a filted search)
- [x] DELETE api/posts/delete/:id (delete a post given the post ID)

## Middlewares
- [x] auth (check if jwt is a valid jwt)
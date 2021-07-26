# portfolioTracker

## Team:

- Monica
- Moony
- Shav
- Akash

### General Purpose of the App:

Allow users the ability to track their portfolio, with their chosen stocks, monitoring the individual price changes, returning their profit/loss on their investments, trace the movement of their individual holdings and get a general idea of how their portfolio is doing.

### Features:

- Users are able to login
- Users are able to track their portfolio.
- Users are able to track their and mark it as complete for the month.
- Users are able to see if they have completed a habit for the day and see their most recent completion streak.
- Users are able to delete themself from the app

### Technologies:

- Non relational database- PostgreSQL
- Node
- Express
- HTML,CSS and JS
- CORS
- AWS
- Nodemon
- BCrypt
- JWT Tokens

## Database Schema
![Database Schema](./readme-src/DB-schema.JPG)

## API Endpoints

### Post 

| Route Name | URL | HTTP Verb | Description |
|-----|----|----|--|
| Create | /user | POST | Create a new user | 
| Create | /user/buys | POST | User buy new stock |


### Get

| Route Name | URL | HTTP Verb | Description |
|-----|----|----|--|
| Root | / | GET | api started |
| Show | /user/:id | GET | Retrieve all the stocks of a user |
| Show | /user/buys/:id | GET | Show a particular buy |

###  Update

| Route Name | URL | HTTP Verb | Description |
|-----|----|----|--|
| Update | /user/buys/:id | UPDATE | Change the status of a buy to been sold |

### Delete

| Route Name | URL | HTTP Verb | Description |
|-----|----|----|--|
| Destroy | /user | DELETE | Destroy user and their buys history |


## Changelog 

Find the full changelog (here)[changelog.md]

## License

(MIT License)[https://opensource.org/licenses/mit-license.php]
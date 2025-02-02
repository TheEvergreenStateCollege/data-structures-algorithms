![screenshot](img/overlays/LanChessWordmarkLogoWhite.png)


LAN Chess is an online multiplayer chess web application completed as a final project for the course Student Originated Software Winter 24' at TESC.

### [LAN Chess](https://wshine.arcology.builders)




https://github.com/TheEvergreenStateCollege/upper-division-cs/assets/156841820/2ce63dc7-8e49-4792-9f54-49ffdc73e7bc



## Features

👤 User account registration and login.

🌐 Play an online multiplayer chess game by creating a room and sharing the code with a friend!

♟️ A local chess client to play chess games with a friend on the same screen.


## Documentation

### Pages

#### Login Page
Here the user can register or login with an account using a simple username and password.


#### Home Page
Here the user can either create a new online game which will provide them a code for a friend to search for. Or if the user's friend already has an online game started they can put the code into the textbox and click search to join!

### Clients
#### Local Game Client
To play online the user will need an account, but the local game feature can be accessed from anywhere, just click the 'local game' icon and start playing on the same monitor!

#### Online Game Client
This is the client that connects both players in a match to one another and render the subsequent board.

## Board rendering with chessboard.js

This library is used in the project to render a the chessboard and piece configuration of an FEN string to the screen. We decided to take a unique approach to creating an online chess application by rendering each board using FEN strings and not just by altering current board states with move notation. We did this mainly out of curiosity as we don't know of any project that has done it this way, but have yet to see if there exists any technical advantages to this method.

You can edit board configurations within the clients using the var config object. The clients then render the board according to the needed conditions of the game.
```
    var config = {
        //Static configurations
        showNotation: false,
        draggable: true,
        moveSpeed: 'slow',
        snapbackSpeed: 1000,
        snapSpeed: 200,
        dropOffBoard: 'snapback',
        position: localBoardCache, //This is the board state the user should always be seeing.
        orientation: orientationBufferLocal //This should change dynamically depending on what side the player is playing as represented by the colorOfPiecesForUser as a string of either "White" or "Black".
    };

    localBoard = Chessboard('board', config);
    localBoardCache = localBoard.fen();
}
```
### Server

An `express` http server using a `postgresql` database to store client/game data.
`prisma` is used as an ORM for interacting with the database.  
`wss` is used as a websocket server to relay chess moves to clients.
##### TODO
* Continue adding error handling, particulary around datbase queries
* Add more unit tests and improve the quality of the current tests
* Implement use of ping/pong messsages on websockets to keep connection alive (or any other way to keep the connection from timing out)
* refactor/simplify database table and column naming to align with prisma. currently there are some differences in naming which I believe could be made more clear
* refine database scheme. For example modify a `move` to reference a `game_participant` instead of referencing both a `user` and a `game`
##### Database


```mermaid
erDiagram
    USER ||--o{ GAME_PARTICIPANT : is   
    USER ||--o{ MOVE : makes
    GAME_PARTICIPANT }o--|| GAME : has
    MOVE }o--|| GAME : contains
    
    USER {
        string id
        datetime createdAt
        string username
        string password
    }
    GAME {
        string id
        datetime start
        datetime end
        enum status
    }
    GAME_PARTICIPANT {
        string id
        string user_id
        string game_id
    }
    MOVE {
        string id
        string fen_string
        datetime timestamp
        string user_id
        string game_id
    }
```


## Credits


####Development by:

Winston Shine

Taylor Wolff 



#### Library used for Chessboard rendering and FEN strings.
[Chessboard.js](https://github.com/oakmac/chessboardjs/)

#### Font for logo and UI: 
‘Changeling Neo’ used under Standard Adobe License:
https://fonts.adobe.com/fonts/changeling-neo#details-section+changeling-neo-light

#### Fonts for user input:
‘3D Isometric Font’ used under SIL Open Font License:
https://www.fontspace.com/3d-isometric-font-f71550

#### ‘Chess pieces’ by eestingnef under Standard Adobe License:
https://stock.adobe.com/images/chess-pieces-isolated-on-black-background-vector-outline-illustration/169563817

#### ‘Retrofuturistic geometry design elements collection’ by merfin under Standard Adobe License:
https://stock.adobe.com/images/retrofuturistic-geometry-design-elements-collection-cyber-neo-futuristic-style-80s-90s-glitch-brutalism-shapes-minimalist-geometric-elements-abstract-bauhaus-minimalist-star-and-flower-forms/515224676





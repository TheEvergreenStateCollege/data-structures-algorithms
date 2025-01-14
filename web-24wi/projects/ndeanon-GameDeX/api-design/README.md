<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->

<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]

<!-- PROJECT LOGO -->

<br />
<div align="center">
  <a href="https://github.com/TheEvergreenStateCollege/upper-division-cs/tree/main/web-24wi/assignments/ndeanon25/infra/api-design">
    <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo" width="400" height="400">
  </a>

<h3 align="center">GameDeX</h3>

<p align="center">
    Welcome to GameDex! This portfolio will be for all my games, ideas, and projects. 
    It will serve as a platform to continue my thought process and further develop my skills. 
    Through GameDex, my goal is to share my passion for software development and contribute to the community. 
    <br />
    <a href="https://github.com/TheEvergreenStateCollege/upper-division-cs/tree/main/web-24wi/assignments/ndeanon25/infra/api-design"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7175577341241303040/">View Sign in Page</a>
    <a> || </a>
    <a href="https://www.youtube.com/watch?v=E9zOaXOfmpo&feature=youtu.be"> View Data Mystery Demo</a>
  </p>
  
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <li><a href="game-tree">User Flow Chart
    </li>
    <li>
      <a href="#inspiration">Inspiration</a>
      <ul>
        <li><a href="#inspiration">What Inspired Me</a></li>
        <li><a href="#getting-started-and-running-the-game">Getting Started and Running the Game</a></li>
      </ul>
    </li>
    <li><a href="#how-i-did-i-make-it-run">How I did I Make it Run</a></li>
    <li><a href="#challenges-i-ran-into">Challenges I ran into</a></li>
    <li><a href="#the-learning-experience">The Learning Experience</a></li>
    <li><a href="#accomplishments-I-am-proud-of">Accomplishments I am Proud of</a></li>
    <li><a href="#big-O()-and-data-structures-i-used">Big O() and Data Structures I used</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHFxYjQ1eDlvOGdvczF4MmFnZDB6ZjUwNnc0eWQ4b3Z2Z20wbmdtciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif" alt="Logo" width="400" height="300" img align="right">

This is GameDex. I wanted to create this project as it's on my bucket list; I have always wanted to create my own game. Data Mystery is an RPG inspired by my childhood.
My intentions are to help players understand different data structures while solving a case. Data Mystery will also have its battle UI to make it more like a game rather than a lesson. 
These are all big-picture ideas with future versions that will introduce more features.
 
 <li> Github User : ndeanon25
 <li> Repo : Upper-Division-CS


### Built With

* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* [![VSCode]][VSCode-url]
* Pain  / Headaches  / No Sleep
* Tears


<!-- Game Tree -->
## Game Tree
```mermaid
graph TB
A("Landing Page ")
B("User Login/ Register")
C("About")
D("Services")
E("Contact")
F[Porfolio for Games, Projects, and Ideas]
G[Webpage about GameDeX and me]
H[Webpage about services I will provide]
I[Webpage with my contact]
J[Data Mystery]
K[Other Projects]

A--->B
B--->F
F--->J
F--->K
A--->C
C--->G
D--->H
A--->E
E--->I
A--->D




```
<p align="right">
<a href="#top" >Back to top</a>

<!-- Inspiration  -->

## Inspiration

Like in my final project for DSA, my inspiration is my love for video games. GameDeX is going to be my portfolio for all my games and projects. 
GameDeX will not only showcase my games but also serve as a platform for all my ideas and projects. 
I aim to continue this work and make my website public, sharing my passion for software engineering and learning with others. 
Through GameDeX, I hope to connect with fellow software engineers and game enthusiasts to collaborate on these exciting projects.

<p align="right">
<a href="#top" >Back to top</a>


## Software Design Diagram

GameDeX is currently under development, so the software design is not fully finished. I've built the back-end and front-end separately.
Ideally, my API should link my website to my database, which is hosted on Render, and connect everything to my domain. However, I haven't created a diagram to show how everything will work together yet.
Once completed, the flow will allow users to interact with the website, with requests being handled by the back-end and data being stored and retrieved from the database. 
This setup will ensure a smooth and responsive experience for users accessing GameDeX.

### Major Components of GameDeX v.1
<li> My API design from FrontEndMasters and Schema used in Render</li>
<li> Landing Page </li>
<li> Data Mystery </li>


<p align="right">
<a href="#top" >Back to top</a>



## Getting Started and Running the Game

1. Go to this Website {Not Working Yet}
   ```sh
   nd25Corp.arcology.builders
   ```
2. Sign Up and start playing Data Mystery!
  
3. ENJOY THE GAME!!

<p align="right">
<a href="#top" >Back to top</a>


<!-- How I did I Make it Run -->

## How I did I Make it Run?!?


<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm0zYXNtMWVqZ2oxMGxkNnZ1dDV0bHp1dWw2eWxybzZ1am5paTJsbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btPCcdNniyf0ArS/giphy.gif" alt="Logo" width="250" height="190" img align="right" >


That is the thing, it is not in a running state as of v.1. Like every project I start, I divide and conquer. I did my back-end and front-end separately. I feel like if I were to try to do both, I would get bogged down and feel overwhelmed, so separating them seemed more achievable. I have not connected my front end and my back end yet, so I have a server up with my API and database ready to go, but I do not have my UI connected to it. 

I want to be able to connect my users to my games and keep track of their progress in my games. This was the goal for the project. Additionally, I plan to implement user authentication and secure data storage to ensure a smooth and safe user experience. Once these components are connected and functional, I believe the project will be ready for its first release.





<ins>**Tips and tricks**
<li>Understanding JavaScript and the flow of what the backend requires. 
<li>Always divide and conquer because projects like this seem simple but once you break down everything you need, you get overwhelmed.  
<li>Use all your resources, this is my first time doing anything related to building a website and I am still trying to learn more.  
<li>Your website will never be perfect, there will always be bugs and updates you can make.
<li> Believe in yourself - Naruto</li>

<p align="right">
<a href="#top" >Back to top</a>


<!-- Challenges I ran into-->

## Challenges I ran into
Although the list of challenges I faced during this project is extensive, I will highlight the three major ones. Managing time constraints and grappling with the vast complexities of backend development were particularly daunting. Despite these difficulties, I persevered. I recognize that the learning curve is steep. But, it is incredibly rewarding when my code functions as work as intended. While this project remains incomplete, I am committed to overcoming these challenges and achieving my goals to get this website running.  

### Three Major Challenges
<li> I had no experience with developing a back-end so understanding what an API was and pulling information from a database was all new to me</li>
<li> Learning how to handle errors and debugging is critical when dealing with JavaScript, I am not the best at error handling so I spent the most time with this</li>
<li> Underestimating this project, I thought I would have plenty of time but this project is bigger than I imagined.  </li>





```mermaid
xychart-beta
    title "Level of difficulty"
    x-axis [API-Design, Prisma-Schema, Data-Mystery, Front-End ]
    y-axis "Scale" 0 --> 10
    bar [8, 4, 8, 5]
```

<p align="right">
<a href="#top" >Back to top</a>

<!-- What I learned-->

## The Learning Experience 

My experience with the final project for DSA was like a rollercoaster ride. It was a fast-paced and crucial period for me, and I had initially thought I would have enough time to get my website up and running. But, that turned out not to be the case.

There were moments when I felt proud of myself, especially when I was learning different languages like JavaScript, TypeScript, HTML, and CSS. I particularly enjoyed working on the front end of the project, designing the website and creating the game without using a framework.

However, the most challenging part was the back-end development. While it was rewarding and fascinating when things worked, I spent the most time on it. I had to make multiple changes, and initially, I struggled to connect my API to my database.

Subsequently, I faced difficulties connecting my API and database to my UI. This was frustrating, and I ran out of time before the final project deadline. Despite this setback, I am still eager to complete this project, but I will need to do it in my own time. It has been an interesting experience because creating my website with my own portfolio has always been on my bucket list.   

 

<img src="https://i.giphy.com/Z5xk7fGO5FjjTElnpT.webp" alt="Logo" width="200" height="200">

<p align="right">
<a href="#top" >Back to top</a>

  
<!-- Accomplishments I am proud of  -->

## Accomplishments I am Proud of
<li> My landing page is pretty.
<li> Learning about the flow of a back-end design
<li> Have a working game, not much content but it has maps and characters 
<li> Getting users with bearer tokens and to be able to log in on ThunderClient
<li> Learning multiple languages 



<p align="right">
<a href="#top" >Back to top</a>



<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

* [Thank you, othneildrew for the Github README Template](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md?plain=1)
* [ChatGPT helped debug my code](https://chat.openai.com/)
* [StackOverFlow helped debug as well](https://stackoverflow.com/)
* [Thank you Drew with the Game](https://www.youtube.com/@DrewConley)
* [Thank you, FrontEnd Masters, API Design by Scott](https://frontendmasters.com/courses/api-design-nodejs-v4/)
<p align="right">
<a href="#top" >Back to top</a>



<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[contributors-url]: https://github.com/ndeanon25
[VSCode]: https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white
[VSCode-url]: https://code.visualstudio.com/

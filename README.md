<a name = "title"></a>

# Tech Blog

### Table of Contents
1. [Title](#title)
2. [Description](#description)
3. [Links](#links)
4. [Video](#video)
5. [Installation](#installation)
6. [Contact](#contact)

``` 
As a USER ... I want site where I can see blog posts made by myself or other users

So that ... I can see my posts, comment on others, login, or signup if necessary. 
```

<a name = "description"></a>

## Description

This is a super basic blogging site, similar to wordpress in the sense that you can either login or signup, and then post content, comment on others content, and even get an overview of all users posts. 

Below you'll find links to the repository and a video demo. Be sure to install properly (instructions below).

Thanks and happy blogging!

<a name = "links"></a>

## Links

[Repository](https://github.com/joecliffordofficial/tech_blog)

[Heroku](https://tech-blog-jc.herokuapp.com/)

<a name = "video"></a>

[Video](https://watch.screencastify.com/v/rkTunc8K1RD2E5KqGSkg)

<a name = "installation"></a>

## Installation

Make sure you have all the necessary programs to make this program work properly. You will need [SQLWorkbench](https://dev.mysql.com/downloads/workbench/) . Once  downloaded, you will need to 
```
npm install
``` 
everything from the package.json file. Don't forget to 
```
npm init -y
```
to download all the dependencies. Once that is all finished, you will need to create your database on Workbench and seed that database with the seeds file!

Run
```
node seeds/index.js
```

Finally you can run 
```
node server.js
```
to turn on the localhost in your browser and start blogging! You can also view the deployed site via Heroku in the links above. 


<a name = "contact"></a>

## Contact Me!

Feel free to reach out to me if you have any questions or if you have anything you think should be added to the program!

You can reach me via my [LinkedIn](https://www.linkedin.com/in/joe-clifford/)

Or on my [GitHub](https://github.com/joecliffordofficial)
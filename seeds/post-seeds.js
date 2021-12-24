const { Post } = require('../models');

const postData = [{
    title: "Post One",
    content: "This is the stuff we are putting into post one.",
    user_id: 1
},
{
    title: "Post Two",
    content: "Post two has some cool things too!",
    user_id: 2
},
{
    title: "Post Three",
    content: "Post three is where it gets really crazy!",
    user_id: 3
},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
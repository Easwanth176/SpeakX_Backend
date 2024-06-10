# SpeakX

SpeakX is a Twitter-like application built with React, Apollo Server, GraphQL, and MongoDB. It provides functionalities such as user registration, login, creating tweets, liking and retweeting tweets, following/unfollowing users, and commenting on tweets.

# SpeakX_Backend graphql API Link
```bash
https://speakx-backend.onrender.com/graphql
```


## Features

- User authentication (registration and login)
- Create, delete, like, and retweet tweets
- Comment on tweets and delete comments
- Follow and unfollow users
- Secure access to routes using JWT
## Installation

  Clone the repository:

   \`\`\`bash
   git clone https://github.com/Easwanth176/SpeakX_Backend.git
   \`\`\`

## How to run the project
```bash
npm install
npm start
```


## GraphQL API

### Queries

- \`user\`: Get the current authenticated user.
- \`allUsers\`: Get all registered users.
- \`allTweets\`: Get all tweets.
- \`allComments\`: Get all comments.
- \`tweet(id: ID!)\`: Get a tweet by ID.
- \`comment(id: ID!)\`: Get a comment by ID.

### Mutations

- \`register(username: String!, email: String!, password: String!)\`: Register a new user.
- \`login(email: String!, password: String!)\`: Login and get a JWT token.
- \`createTweet(text: String!)\`: Create a new tweet.
- \`deleteTweet(id: ID!)\`: Delete a tweet by ID.
- \`likeTweet(id: ID!)\`: Like or unlike a tweet by ID.
- \`retweet(id: ID!)\`: Retweet or unretweet a tweet by ID.
- \`createComment(text: String!, tweetId: ID!)\`: Create a comment on a tweet.
- \`deleteComment(id: ID!)\`: Delete a comment by ID.
- \`followUser(userId: ID!)\`: Follow a user by ID.
- \`unfollowUser(userId: ID!)\`: Unfollow a user by ID.

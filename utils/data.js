const usersData = [
    {
      username: "user1",
      email: "user1@example.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "user2",
      email: "user2@example.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "user3",
      email: "user3@example.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "user4",
      email: "user4@example.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "user5",
      email: "user5@example.com",
      thoughts: [],
      friends: [],
    }
  ];

const thoughtsData = [
    {
      thoughtText: "What a beautiful day!",
      createdAt: new Date(),
      username: "user1",
      reactions: [
        {
          reactionBody: "I agree!",
          username: "user2",
          createdAt: new Date(),
        },
        {
          reactionBody: "Not really...",
          username: "user3",
          createdAt: new Date(),
        },
      ],
    },
    {
      thoughtText: "Just finished a great book.",
      createdAt: new Date(),
      username: "user2",
      reactions: [
        {
          reactionBody: "Tell me more!",
          username: "user5",
          createdAt: new Date(),
        },
      ],
    },
    {
      thoughtText: "Coding is so much fun!",
      createdAt: new Date(),
      username: "user3",
      reactions: [
        {
          reactionBody: "Absolutely!",
          username: "user1",
          createdAt: new Date(),
        },
        {
          reactionBody: "I find it challenging.",
          username: "user2",
          createdAt: new Date(),
        },
      ],
    },
    {
      thoughtText: "Planning my next vacation...",
      createdAt: new Date(),
      username: "user4",
      reactions: [
        {
          reactionBody: "Where are you going?",
          username: "user5",
          createdAt: new Date(),
        },
      ],
    },
    {
      thoughtText: "Learning a new language is exciting!",
      createdAt: new Date(),
      username: "user5",
      reactions: [
        {
          reactionBody: "I'm struggling with it.",
          username: "user2",
          createdAt: new Date(),
        },
      ],
    }
  ];
  
  module.exports = { usersData, thoughtsData };
  
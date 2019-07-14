// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    pictureUrl
    followingCount
    createdCount
  }
}
`;

export const followingBoards = `query FollowingBoard($id: ID!, $limit: Int, $nextToken: String) {
  followingBoards: getUser(id: $id) {
    id
    followingBoards(limit: $limit, nextToken: $nextToken) {
      nextToken
      items {
        id
        name
        description
        status
        isPublic
        isFollowing
        isAuthor
        author {
          id
          name
          email
          pictureUrl
          followingCount
          createdCount
        }
        eventsCount
        followersCount
        createdAt
        updatedAt
      }
    }
  }
}`;

export const createdBoards = `query FollowingBoard($id: ID!, $limit: Int, $nextToken: String) {
  createdBoards: getUser(id: $id) {
    id
    createdBoards(limit: $limit, nextToken: $nextToken) {
      nextToken
      items {
        id
        name
        description
        status
        isPublic
        isFollowing
        isAuthor
        author {
          id
          name
          email
          pictureUrl
          followingCount
          createdCount
        }
        eventsCount
        followersCount
        createdAt
        updatedAt
      }
    }
  }
}`;

export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    title
    description
    venue
    startAt
    endAt
    allDay
    isCancelled
    repeat
    forever
    until
    eventType
    isPublic
    board {
      id
      name
      eventsCount
      isFollowing
      isPublic
    }
    author {
      id
      name
    }
    cancelledDates
    starsCount
    isStarred
    isAuthor
    commentsCount
    createdAt
    updatedAt
  }
}
`;

export const getBoard = `query GetBoard($id: ID!) {
  getBoard(id: $id) {
    id
    name
    description
    status
    isPublic
    isFollowing
    isAuthor
    author {
      id
      name
      email
      pictureUrl
      followingCount
      createdCount
    }
    eventsCount
    followersCount
    createdAt
    updatedAt
  }
}
`;

export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) @client {
    id
    content
    author {
      id
      name
    }
  }
}`;

export const listAllEvents = `query ListAllEvents($filter: TableEventFilterInput) {
  listAllEvents(filter: $filter) @connection(key: "listAllEvents") {
    nextToken
    items {
      id
      title
      description
      venue
      startAt
      endAt
      allDay
      isCancelled
      repeat
      forever
      until
      eventType
      isPublic
      board {
        id
        name
        isFollowing
        eventsCount
        isPublic
      }
      author {
        id
        name
      }
      cancelledDates
      starsCount
      isStarred
      isAuthor
      commentsCount
      createdAt
      updatedAt  
    }
  }
}`;

export const listEventComments = `query ListEventComments($id: ID!, $limit: Int, $nextToken: String) {
  listComments(id: $id, limit: $limit, nextToken: $nextToken) @connection(key: "listComments", filter: ["id"]) {
    nextToken
    items {
      id
      content
      isReply
      toComment {
        id
        content
        author {
          id
          name
        }
      }
      event {
        id
        commentsCount
      }
      isAuthor
      author {
        id
        name
        pictureUrl
      }
      createdAt
    }
  }
}`;

export const listAllBoards = `query ListAllBoards {
  listAllBoards {
    nextToken
    items {
      id
      name
      description
      status
      isPublic
      isFollowing
      isAuthor
      author {
        id
        name
        email
        pictureUrl
        followingCount
        createdCount
      }
      eventsCount
      followersCount
      createdAt
      updatedAt
    }
  }
}
`;

export const listBoardEvents = `query ListBoardEvents($id: ID!, $limit: Int, $nextToken: String, $filter: TableEventFilterInput) {
  listBoardEvents: getBoard(id: $id) {
    id
    events(limit: $limit, nextToken: $nextToken, filter: $filter) {
      nextToken
      items {
        id
        title
        description
        venue
        startAt
        endAt
        allDay
        isCancelled
        repeat
        forever
        until
        eventType
        isPublic
        board {
          id
          name
          eventsCount
          isFollowing
          isPublic
        }
        author {
          id
          name
        }
        cancelledDates
        starsCount
        isStarred
        isAuthor
        commentsCount
        createdAt
        updatedAt  
      }
    }
  }
}`

export const listBoardFollowers = `query Followers($id: ID!, $limit: Int, $nextToken: String) {
  listFollowers(id: $id, limit: $limit, nextToken: $nextToken)  @connection(key: "listFollowers",filter: ["id"])  {
    nextToken
    items {
      id
      name
      email
      pictureUrl
      followingCount
      createdCount
    }
  }
}`

export const searchEvent = `query SearchEvent($filter: SearchFilterInput, $size: Int, $from: Int) {
  searchEvent(filter: $filter, size: $size, from: $from) @connection(key: "searchEvent") {
    nextToken
    items {
      id
      title
      description
      venue
      startAt
      endAt
      allDay
      isCancelled
      repeat
      forever
      until
      eventType
      isPublic
      board {
        id
        name
        eventsCount
        isFollowing
        isPublic
      }
      author {
        id
        name
      }
      cancelledDates
      starsCount
      isStarred
      isAuthor
      commentsCount
      createdAt
      updatedAt
    }
  }
}
`;
export const searchBoard = `query SearchBoard($filter: SearchFilterInput, $size: Int, $from: Int) {
  searchBoard(filter: $filter, size: $size, from: $from) @connection(key: "searchBoard") {
    nextToken
    items {
      id
      name
      description
      status
      isPublic
      isFollowing
      isAuthor
      author {
        id
        name
        email
        pictureUrl
        followingCount
        createdCount
      }
      eventsCount
      followersCount
      createdAt
      updatedAt
    }
  }
}
`;

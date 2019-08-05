/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSchedule = `mutation CreateSchedule($input: CreateScheduleInput!) {
  createSchedule(input: $input) {
    id
    name
    description
    status
    isPublic
    isFollowing
    isOwner
    owner {
      id
      name
      email
      pictureUrl
      followingCount
      createdCount
      comments {
        nextToken
      }
      events {
        nextToken
      }
      schedules {
        nextToken
      }
      following {
        nextToken
      }
    }
    eventsCount
    followersCount
    followers
    location {
      lat
      lon
    }
    events {
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
        until
        forever
        eventType
        isPublic
        cancelledDates
        bookmarksCount
        isBookmarked
        isOwner
        commentsCount
      }
      nextToken
    }
  }
}
`;
export const updateSchedule = `mutation UpdateSchedule($input: UpdateScheduleInput!) {
  updateSchedule(input: $input) {
    id
    name
    description
    status
    isPublic
    isFollowing
    isOwner
    owner {
      id
      name
      email
      pictureUrl
      followingCount
      createdCount
      comments {
        nextToken
      }
      events {
        nextToken
      }
      schedules {
        nextToken
      }
      following {
        nextToken
      }
    }
    eventsCount
    followersCount
    followers
    location {
      lat
      lon
    }
    events {
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
        until
        forever
        eventType
        isPublic
        cancelledDates
        bookmarksCount
        isBookmarked
        isOwner
        commentsCount
      }
      nextToken
    }
  }
}
`;
export const deleteSchedule = `mutation DeleteSchedule($input: DeleteScheduleInput!) {
  deleteSchedule(input: $input) {
    id
    name
    description
    status
    isPublic
    isFollowing
    isOwner
    owner {
      id
      name
      email
      pictureUrl
      followingCount
      createdCount
      comments {
        nextToken
      }
      events {
        nextToken
      }
      schedules {
        nextToken
      }
      following {
        nextToken
      }
    }
    eventsCount
    followersCount
    followers
    location {
      lat
      lon
    }
    events {
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
        until
        forever
        eventType
        isPublic
        cancelledDates
        bookmarksCount
        isBookmarked
        isOwner
        commentsCount
      }
      nextToken
    }
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    content
    isReply
    toComment {
      id
      content
      isReply
      toComment {
        id
        content
        isReply
        isOwner
      }
      isOwner
      event {
        id
        title
        description
        venue
        startAt
        endAt
        allDay
        isCancelled
        repeat
        until
        forever
        eventType
        isPublic
        cancelledDates
        bookmarksCount
        isBookmarked
        isOwner
        commentsCount
      }
      owner {
        id
        name
        email
        pictureUrl
        followingCount
        createdCount
      }
    }
    isOwner
    event {
      id
      title
      description
      venue
      startAt
      endAt
      allDay
      isCancelled
      repeat
      until
      forever
      eventType
      location {
        lat
        lon
      }
      schedule {
        id
        name
        description
        status
        isPublic
        isFollowing
        isOwner
        eventsCount
        followersCount
        followers
      }
      isPublic
      cancelledDates
      bookmarksCount
      isBookmarked
      isOwner
      owner {
        id
        name
        email
        pictureUrl
        followingCount
        createdCount
      }
      commentsCount
      comments {
        nextToken
      }
    }
    owner {
      id
      name
      email
      pictureUrl
      followingCount
      createdCount
      comments {
        nextToken
      }
      events {
        nextToken
      }
      schedules {
        nextToken
      }
      following {
        nextToken
      }
    }
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    content
    isReply
    toComment {
      id
      content
      isReply
      toComment {
        id
        content
        isReply
        isOwner
      }
      isOwner
      event {
        id
        title
        description
        venue
        startAt
        endAt
        allDay
        isCancelled
        repeat
        until
        forever
        eventType
        isPublic
        cancelledDates
        bookmarksCount
        isBookmarked
        isOwner
        commentsCount
      }
      owner {
        id
        name
        email
        pictureUrl
        followingCount
        createdCount
      }
    }
    isOwner
    event {
      id
      title
      description
      venue
      startAt
      endAt
      allDay
      isCancelled
      repeat
      until
      forever
      eventType
      location {
        lat
        lon
      }
      schedule {
        id
        name
        description
        status
        isPublic
        isFollowing
        isOwner
        eventsCount
        followersCount
        followers
      }
      isPublic
      cancelledDates
      bookmarksCount
      isBookmarked
      isOwner
      owner {
        id
        name
        email
        pictureUrl
        followingCount
        createdCount
      }
      commentsCount
      comments {
        nextToken
      }
    }
    owner {
      id
      name
      email
      pictureUrl
      followingCount
      createdCount
      comments {
        nextToken
      }
      events {
        nextToken
      }
      schedules {
        nextToken
      }
      following {
        nextToken
      }
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    content
    isReply
    toComment {
      id
      content
      isReply
      toComment {
        id
        content
        isReply
        isOwner
      }
      isOwner
      event {
        id
        title
        description
        venue
        startAt
        endAt
        allDay
        isCancelled
        repeat
        until
        forever
        eventType
        isPublic
        cancelledDates
        bookmarksCount
        isBookmarked
        isOwner
        commentsCount
      }
      owner {
        id
        name
        email
        pictureUrl
        followingCount
        createdCount
      }
    }
    isOwner
    event {
      id
      title
      description
      venue
      startAt
      endAt
      allDay
      isCancelled
      repeat
      until
      forever
      eventType
      location {
        lat
        lon
      }
      schedule {
        id
        name
        description
        status
        isPublic
        isFollowing
        isOwner
        eventsCount
        followersCount
        followers
      }
      isPublic
      cancelledDates
      bookmarksCount
      isBookmarked
      isOwner
      owner {
        id
        name
        email
        pictureUrl
        followingCount
        createdCount
      }
      commentsCount
      comments {
        nextToken
      }
    }
    owner {
      id
      name
      email
      pictureUrl
      followingCount
      createdCount
      comments {
        nextToken
      }
      events {
        nextToken
      }
      schedules {
        nextToken
      }
      following {
        nextToken
      }
    }
  }
}
`;
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
    id
    title
    description
    venue
    startAt
    endAt
    allDay
    isCancelled
    repeat
    until
    forever
    eventType
    location {
      lat
      lon
    }
    schedule {
      id
      name
      description
      status
      isPublic
      isFollowing
      isOwner
      owner {
        id
        name
        email
        pictureUrl
        followingCount
        createdCount
      }
      eventsCount
      followersCount
      followers
      location {
        lat
        lon
      }
      events {
        nextToken
      }
    }
    isPublic
    cancelledDates
    bookmarksCount
    isBookmarked
    isOwner
    owner {
      id
      name
      email
      pictureUrl
      followingCount
      createdCount
      comments {
        nextToken
      }
      events {
        nextToken
      }
      schedules {
        nextToken
      }
      following {
        nextToken
      }
    }
    commentsCount
    comments {
      items {
        id
        content
        isReply
        isOwner
      }
      nextToken
    }
  }
}
`;
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
    id
    title
    description
    venue
    startAt
    endAt
    allDay
    isCancelled
    repeat
    until
    forever
    eventType
    location {
      lat
      lon
    }
    schedule {
      id
      name
      description
      status
      isPublic
      isFollowing
      isOwner
      owner {
        id
        name
        email
        pictureUrl
        followingCount
        createdCount
      }
      eventsCount
      followersCount
      followers
      location {
        lat
        lon
      }
      events {
        nextToken
      }
    }
    isPublic
    cancelledDates
    bookmarksCount
    isBookmarked
    isOwner
    owner {
      id
      name
      email
      pictureUrl
      followingCount
      createdCount
      comments {
        nextToken
      }
      events {
        nextToken
      }
      schedules {
        nextToken
      }
      following {
        nextToken
      }
    }
    commentsCount
    comments {
      items {
        id
        content
        isReply
        isOwner
      }
      nextToken
    }
  }
}
`;
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
    id
    title
    description
    venue
    startAt
    endAt
    allDay
    isCancelled
    repeat
    until
    forever
    eventType
    location {
      lat
      lon
    }
    schedule {
      id
      name
      description
      status
      isPublic
      isFollowing
      isOwner
      owner {
        id
        name
        email
        pictureUrl
        followingCount
        createdCount
      }
      eventsCount
      followersCount
      followers
      location {
        lat
        lon
      }
      events {
        nextToken
      }
    }
    isPublic
    cancelledDates
    bookmarksCount
    isBookmarked
    isOwner
    owner {
      id
      name
      email
      pictureUrl
      followingCount
      createdCount
      comments {
        nextToken
      }
      events {
        nextToken
      }
      schedules {
        nextToken
      }
      following {
        nextToken
      }
    }
    commentsCount
    comments {
      items {
        id
        content
        isReply
        isOwner
      }
      nextToken
    }
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
    pictureUrl
    followingCount
    createdCount
    comments {
      items {
        id
        content
        isReply
        isOwner
      }
      nextToken
    }
    events {
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
        until
        forever
        eventType
        isPublic
        cancelledDates
        bookmarksCount
        isBookmarked
        isOwner
        commentsCount
      }
      nextToken
    }
    schedules {
      items {
        id
        name
        description
        status
        isPublic
        isFollowing
        isOwner
        eventsCount
        followersCount
        followers
      }
      nextToken
    }
    following {
      items {
        id
        name
        description
        status
        isPublic
        isFollowing
        isOwner
        eventsCount
        followersCount
        followers
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    email
    pictureUrl
    followingCount
    createdCount
    comments {
      items {
        id
        content
        isReply
        isOwner
      }
      nextToken
    }
    events {
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
        until
        forever
        eventType
        isPublic
        cancelledDates
        bookmarksCount
        isBookmarked
        isOwner
        commentsCount
      }
      nextToken
    }
    schedules {
      items {
        id
        name
        description
        status
        isPublic
        isFollowing
        isOwner
        eventsCount
        followersCount
        followers
      }
      nextToken
    }
    following {
      items {
        id
        name
        description
        status
        isPublic
        isFollowing
        isOwner
        eventsCount
        followersCount
        followers
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    email
    pictureUrl
    followingCount
    createdCount
    comments {
      items {
        id
        content
        isReply
        isOwner
      }
      nextToken
    }
    events {
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
        until
        forever
        eventType
        isPublic
        cancelledDates
        bookmarksCount
        isBookmarked
        isOwner
        commentsCount
      }
      nextToken
    }
    schedules {
      items {
        id
        name
        description
        status
        isPublic
        isFollowing
        isOwner
        eventsCount
        followersCount
        followers
      }
      nextToken
    }
    following {
      items {
        id
        name
        description
        status
        isPublic
        isFollowing
        isOwner
        eventsCount
        followersCount
        followers
      }
      nextToken
    }
  }
}
`;

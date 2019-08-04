// eslint-disable
// this is an auto generated file. This will be overwritten

export const LoginUser = `mutation LoginUser($input: LoginInput!) {
  loginUser(input: $input) {
    id
    name
    email
    pictureUrl
    followingCount
    createdCount
  }
}
`;

export const createSchedule = `mutation CreateSchedule($input: CreateScheduleInput!) {
  createSchedule(input: $input) {
    id
    name
    description
    status
    isPublic
    isFollowing
    isOwner
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
export const updateSchedule = `mutation UpdateSchedule($input: UpdateScheduleInput!) {
  updateSchedule(input: $input) {
    id
    name
    description
    isPublic
    updatedAt
  }
}
`;
export const deleteSchedule = `mutation DeleteSchedule($input: DeleteScheduleInput!) {
  deleteSchedule(input: $input) {
    id
  }
}
`;
export const followSchedule = `mutation FollowSchedule($input: FollowScheduleInput!) {
  followSchedule(input: $input) {
    id
    name
    description
    status
    isPublic
    isFollowing
    isOwner
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
export const unfollowSchedule = `mutation UnfollowSchedule($input: UnfollowScheduleInput!) {
  unfollowSchedule(input: $input) {
    id
    isFollowing
    followersCount
  }
}
`;
export const closeSchedule = `mutation CloseSchedule($input: CloseScheduleInput!) {
  closeSchedule(input: $input) {
    id
    status
    updatedAt
  }
}
`;
export const openSchedule = `mutation OpenSchedule($input: OpenScheduleInput!) {
  openSchedule(input: $input) {
    id
    status
    updatedAt
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
    forever
    until
    eventType
    isPublic
    schedule {
      id
      name
      eventsCount
      isFollowing
    }
    author {
      id
      name
    }
    cancelledDates
    bookmarksCount
    isBookmarked
    isOwner
    commentsCount
    createdAt
    updatedAt
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
    repeat
    forever
    until
    isPublic
    eventType
    updatedAt
    schedule {
      id
      name
      eventsCount
      isFollowing
    }
  }
}
`;
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
    id
    schedule {
      id
      eventsCount
    }
  }
}
`;
export const cancelEvent = `mutation CancelEvent($input: CancelEventInput!) {
  cancelEvent(input: $input) {
    id
    isCancelled
    cancelledDates
    updatedAt
  }
}
`;
export const bookmarkEvent = `mutation BookmarkEvent($input: BookmarkEventInput!) {
  bookmarkEvent(input: $input) {
    id
    bookmarksCount
    isBookmarked
  }
}
`;
export const unbookmarkEvent = `mutation UnbookmarkEvent($input: UnbookmarkEventInput!) {
  unbookmarkEvent(input: $input) {
    id
    bookmarksCount
    isBookmarked
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
      author {
        id
        name
      }
    }
    event {
      id
      commentsCount
    }
    isOwner
    author {
      id
      name
      pictureUrl
    }
    createdAt
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    event {
      id
      commentsCount
    }
  }
}
`;

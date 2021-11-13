import {ALL_COURSE, ADD_FOLLOWER, BUY_COURSE} from "../constants";

export const addAllCourse = (payload) => (
    {
        type: ALL_COURSE,
        payload: payload
    }
);

export const addUserFollower = (payload) => (
    {
        type: ADD_FOLLOWER,
        payload: payload
    }
);

export const buyCourse = (payload) => (
    {
        type: BUY_COURSE,
        payload: payload
    }
);

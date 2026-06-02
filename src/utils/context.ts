
import {createContext} from "react";
import type {ShmitterContextValue} from "./types";

export const ShmitterContext = createContext<ShmitterContextValue>({
user: {
    name: 'User',
    avatar: 'url',
},
    stats: {
    followers: 0,
        following: 0,
    },

    changeAvatar: (url:string | null) => console.log('Avatar changed', url),
    changeName: (newName: string | null) => console.log('Name changed', newName),
    changeFollowing: (following: number) => console.log('Following changed', following),
    changeFollowers: (followers: number) => console.log('Followers changed', followers)

})
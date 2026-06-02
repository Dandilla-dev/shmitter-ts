
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
    changeName: (newName: string | null) => console.log('Name changed', newName)

})
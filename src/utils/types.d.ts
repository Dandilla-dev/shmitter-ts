export interface User {
    avatar: string;
    name: string;
}

export interface Stats {
    followers: number;
    following: number;

}

export interface ShmitterContextValue {
    user: User;
    stats: Stats;
    changeAvatar: (url: string | null) => void;
    changeName: (newName: string | null) => void;
    changeFollowers: (followers: number) => void;
    changeFollowing: (following: number) => void;
}
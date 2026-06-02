
import Avatar from "./Avatar.tsx";
import {ShmitterContext} from "../utils/context.ts";
import {useContext} from "react";

const Stats = () => {
    const {user, stats, changeFollowers, changeFollowing} =useContext(ShmitterContext)
    const handleAddFollower = () => {
        changeFollowers(1)}
    const handleAddFollowing = () => {
        changeFollowing(1)}
    const handleRemoveFollower = (e) => {
        e.preventDefault();
        changeFollowers(-1)}
    const handleRemoveFollowing = (e) => {
        e.preventDefault();
        changeFollowing(-1)}

    return (
        <div className={'user-stats'}>
        <div>
            <Avatar />
            <span className="user-name">{user.name}</span>
        </div>
        <div className={'stats'} style={{cursor: 'pointer' }}>
                <div
                    onClick={handleAddFollower}
                    onContextMenu={handleRemoveFollower}>
                    Followers: {stats.followers}
                </div>
            <div
                onClick={handleAddFollowing}
                 onContextMenu={handleRemoveFollowing}>
                Following: {stats.following}
            </div>
        </div>
        </div>
    );
};

export default Stats;

import Avatar from "./Avatar.tsx";
import {ShmitterContext} from "../utils/context.ts";
import {useContext} from "react";

const Stats = () => {
    const {user, stats} =useContext(ShmitterContext)
    return (
        <div className={'user-stats'}>
        <div>
            <Avatar />
        </div>
        <div className={'stats'}>
                <div> Followers: {stats.followers}</div>
            <div>Following: {stats.following}</div>
        </div>
        </div>
    );
};

export default Stats;
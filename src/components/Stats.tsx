
import Avatar from "./Avatar.tsx";
import {ShmitterContext} from "../utils/context.ts";
import {useContext} from "react";
import Name from "./Name.tsx";

const Stats = () => {
    const {user, stats} =useContext(ShmitterContext)
    return (
        <div className={'user-stats'}>
        <div>
            <Avatar />
            <Name/>
        </div>
        <div className={'stats'}>
                <div> Followers: {stats.followers}</div>
            <div>Following: {stats.following}</div>
        </div>
        </div>
    );
};

export default Stats;
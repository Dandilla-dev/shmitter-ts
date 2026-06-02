import {ShmitterContext} from "../utils/context.ts";
import {useContext} from "react";

interface AvatarProps {
    size?: 'small'
}

const Avatar = ({size}: AvatarProps) => {
    const {user, changeAvatar} = useContext(ShmitterContext);

const handleAvatarClick = () => {
    const url = prompt("Change your Avatar?")
    changeAvatar(url)
}

    return (
     <img  className={`user-avatar ${size ?? ''}`}
          src={user.avatar}
          alt={user.name}
           onClick={handleAvatarClick}
           style={{ cursor: 'pointer' }}
     />
    );
};

export default Avatar;
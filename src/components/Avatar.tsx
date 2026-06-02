import {ShmitterContext} from "../utils/context.ts";
import {useContext} from "react";


interface AvatarProps {
    size?: 'small'
}

const Avatar = ({size}: AvatarProps) => {
    const {user, changeAvatar, changeName} = useContext(ShmitterContext);

const handleAvatarClick = () => {
    const url = prompt("Change your Avatar?")
    changeAvatar(url)
}

const handleRightClick = (e) => {
        e.preventDefault();
        const newName = prompt('Enter your name');
        changeName(newName);
    }

    return (
        <div>
     <img  className={`user-avatar ${size ?? ''}`}
          src={user.avatar}
          alt={user.name}
           onClick={handleAvatarClick}
           onContextMenu={handleRightClick}
           style={{ cursor: 'pointer' }}
     />

        </div>
    );
};

export default Avatar;
import {useContext} from "react";
import {ShmitterContext} from "../utils/context.ts";

const Name = () => {
    const {user, changeName} = useContext(ShmitterContext);

    const handleRightClick = (e) => {
        e.preventDefault();
        const newName = prompt('Enter your name');
        changeName(newName);
    }


    return (
        <span
            className={`user-name`}
              onContextMenu={handleRightClick}
              style={{ cursor: 'pointer' }}
        >
    {user.name}
    </span>
    );
};

export default Name;
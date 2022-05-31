import { useState } from 'react';

const LikeButton = () => {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <button type="button" onClick={updateCount}>{count} Likes</button>
    );
}

export default LikeButton;
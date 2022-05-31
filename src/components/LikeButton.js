import { useState } from 'react';

const LikeButton = () => {
    const [count, setCount] = useState(0);
    const [likeWord, setLikeWord] = useState('Likes');

    const updateButtonText = () => {
        setCount(count + 1);
        if (count > 1) {
            return;
        }
        else if (count === 0) {
            setLikeWord('Like');
            return;
        }
        else if (count === 1) {
            setLikeWord('Likes');
        }
    }

    return (
        <button type="button" onClick={updateButtonText}>
            <p>{count} {likeWord}</p>
        </button>
    );
}

export default LikeButton;
import { useState, useEffect } from 'react';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/posts');
            const data = await response.json();
            setPosts(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Feed; 

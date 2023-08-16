import React from 'react';
import { useRouter } from 'next/router';
const Blog = () => {
    const router = useRouter();
    return (
        <div>
            <h1>blog - {router.query.blogId}</h1>
        </div>
    );
};

export default Blog;
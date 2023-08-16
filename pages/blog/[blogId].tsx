import React from 'react';
import { useRouter } from 'next/router';

const Blog = () => {
    const router = useRouter();
    const blogId = router.query.blogId;
    return (
        <div>
            <h1>{blogId}</h1>
        </div>
    );
};

export default Blog;
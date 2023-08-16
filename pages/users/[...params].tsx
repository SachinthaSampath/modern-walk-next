import React from 'react';
import { useRouter } from 'next/router';
const User = () => {
    const router = useRouter();
    const {params} = router.query;
    return (
        <div>
            <pre>{JSON.stringify(params,null,4)}</pre>
        </div>
    );
};

export default User;
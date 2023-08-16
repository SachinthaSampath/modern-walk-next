import React from "react";
import { useRouter } from "next/router";
const Comment = () => {
  const router = useRouter();
  return (
    <div>
      <h1>
        Blog - {router.query.blogId} / comment - {router.query.commentId}
      </h1>
    </div>
  );
};

export default Comment;

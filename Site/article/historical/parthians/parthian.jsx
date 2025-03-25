;import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return; // Prevent empty comments
    setComments([...comments, { id: Date.now(), text: newComment }]);
    setNewComment("");
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="comment-section">
      <h2>دیدگاه‌ها و پرسش‌ها</h2>
      <div className="new-comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="دیدگاه یا پرسش خود را وارد کنید..."
        ></textarea>
        <button onClick={handleAddComment}>ارسال دیدگاه</button>
      </div>
      <div className="comments-container">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <button onClick={() => handleDeleteComment(comment.id)}>حذف</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;

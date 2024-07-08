import { useState } from "react";
function CommentList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const removeComment = (id) => {
    setComments(comments.filter((item) => item.id !== id));
  };
  return (
    <div>
      <ul>
        {comments.map((item) => (
          <li key={comments.indexOf(item)}>
            {item.text}
            <button type="click" onClick={() => removeComment(item.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;

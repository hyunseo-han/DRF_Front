import React, { useState } from "react";
import styled from "styled-components";
import data from "./data.json";

const CommentWrapper = styled.div`
  border: 1px solid black;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
`;

const Comment = () => {
  const [input, setInput] = useState();
  const [comments, setComments] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const addComment = (data) => {
    // 코멘트 추가
    setComments(
      comments.concat({
        id: comments.length + 1,
        content: input,
        userName: data.id,
      })
    );
  };

  return (
    <div>
      <input value={input} onChange={onChange}></input>
      <button
        onClick={() => {
          addComment(input);
          setInput("");
        }}
      >
        등록
      </button>
      {comments.map((comment, index) => (
        <CommentWrapper key={`${comment.userName}_${index}`}>
          내용: {comment.content}
        </CommentWrapper>
      ))}
    </div>
  );
};

export default Comment;

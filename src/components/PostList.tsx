import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type tabType = "all" | "my"

export default function PostList({hasNavigation = true}:PostListProps) {
  const [activeTab, setActiveTab] = useState("all")
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div 
            role="presentation" 
            onClick={()=>setActiveTab("all")}
            className={activeTab==="all" ? "post__navigation--active":""}>전체</div>
          <div 
            role="presentation" 
            onClick={()=>setActiveTab("my")}
            className={activeTab==="my" ? "post__navigation--active":""}>나의글</div>
        </div>
      )}
      
      <div className="post__list"> 
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`\posts/${index}`}>게시글 {index}</Link>
              <div className="post__profile-box">
                <div className="post__profile"/>
                <div className="post__author-name">패스트캠퍼스</div>
                <div className="post__date">2023.07.08 토요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">안녕하세요 이직하고 싶습니다.</div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
          </div> 
        ))}
        </div>
    </> 
  )
}
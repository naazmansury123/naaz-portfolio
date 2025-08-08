import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href="https://docs.google.com/presentation/d/1p6qwbG3fKmjnld-_OO_LaroCz68N-D3UTm8BarccUOA/edit?usp=sharing" target="_" className="talk-button">
              Slides
            </a>
            <a href="https://docs.google.com/presentation/d/1p6qwbG3fKmjnld-_OO_LaroCz68N-D3UTm8BarccUOA/edit?usp=sharing" target="_" className="talk-button">
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

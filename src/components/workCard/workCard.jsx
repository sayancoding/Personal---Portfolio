import React from "react";
import "./workCard.css";
import { Link } from "react-router-dom";

export default function workCard(props) {
  return (
    <div>
      <div className="work_card">
        <div className="work_card_upper">
          <div className="work_card_title">
            <div className="work_card_title_item">
              <i className="icon far fa-folder-open"></i>
            </div>
            <div className="work_card_title_item">
              <p>{props.name}</p>
            </div>
          </div>
        </div>
        <div className="work_card_lower">
          <div className="description">{props.desc}</div>
          <div className="tag_row">
            {props.tags.map((el) => {
              return <div className="tag">{el}</div>;
            })}
          </div>
          <div className="action_row">
            <div className="action_row_item _1">
              <Link onClick={(_) => window.open(props.source)}>
                <i className="fas fa-expand-alt"></i>
              </Link>
            </div>
            <div className="action_row_item _2">
              <Link onClick={(_) => window.open(props.demo)}>
                <i className="fas fa-expand"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

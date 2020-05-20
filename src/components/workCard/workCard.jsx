import React from "react";
import "./workCard.css";
import {Link} from 'react-router-dom'

export default function workCard() {
  return (
    <div>
      <div className="work_card">
        <div className="work_card_upper">
          <div className="work_card_title">
            <div className="work_card_title_item">
              <i className="icon far fa-folder-open"></i>
            </div>
            <div className="work_card_title_item">
              <p>StockBox</p>
            </div>
          </div>
        </div>
        <div className="work_card_lower">
          <div className="description">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </div>
          <div className="tag_row">
            <div className="tag">typescript</div>
            <div className="tag">typescript</div>
            <div className="tag">typescript</div>
            <div className="tag">typescript</div>
          </div>
          <div className="action_row">
            <div className="action_row_item">
              <Link to={_=>window.open('')}>
              <i class="fas fa-expand-alt"></i>
              </Link>
            </div>
            <div className="action_row_item">
              <Link to={_=>window.open('')}>
              <i class="fas fa-expand"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

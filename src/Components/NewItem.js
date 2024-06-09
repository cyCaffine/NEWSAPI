import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let { title, description, imgUrl, imgUrlId } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "100%", height: "auto" }}>
          <img
            className=""
            src={
              !imgUrl
                ? "https://images.macrumors.com/t/UTzZsicB4zYEQAh8Cf3ec3v53sg=/2500x/article-new/2022/06/Hero0004.jpg"
                : imgUrl
            }
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={imgUrlId}
              target="_blank"
              className="btn  btn-sm btn-primary"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;

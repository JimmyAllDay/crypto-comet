import React from "react";

import { Container } from "react-bootstrap";

import { MdAccessTime } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

import "../../Styles/news.scss";

function NewsContainer(props) {
  const newsItems = props.news.map((article, i) => {
    return (
      <div key={i} className="d-flex flex-column mb-2 rounded-1 shadow">
        <div className="ms-auto me-5 px-1 w-auto bg-secondary text-light">
          News
        </div>
        <div className="p-2">
          <a className="news-article-link" href={article.link}>
            <div className="news-title mb-2"> {article.title}</div>
            <div className="mb-2" style={{ fontSize: "0.8em" }}>
              {article.description}
            </div>
            <div className="article-link" style={{ fontSize: "0.7em" }}></div>
            <div className="d-flex flex-column">
              <div className="d-flex">
                <BsPerson className="my-auto me-1" />
                <div className="my-auto" style={{ fontSize: "0.7em" }}>
                  {article.creator}
                </div>
              </div>
              <div className="d-flex">
                <MdAccessTime className="my-auto me-1" />
                <div className="my-auto" style={{ fontSize: "0.7em" }}>
                  {article.pubDate}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return (
    <Container
      fluid
      className="border border-dark rounded-3 p-1 pe-3 bg-light"
      style={{ height: "250px", overflowY: "auto" }}
    >
      <div className="mb-2 p-1 d-flex">
        <h6 className="my-auto rounded-1 w-auto px-2 py-1">News</h6>
      </div>
      <div>{newsItems}</div>
    </Container>
  );
}

export default NewsContainer;

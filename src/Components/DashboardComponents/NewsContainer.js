import React from "react";

import { Container } from "react-bootstrap";

import { MdAccessTime } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

function NewsContainer({ news }) {
  const newsItems = news.map((article, i) => {
    const { keywords, link, title, description, creator, pubDate } = article;
    return (
      <Container
        key={i}
        fluid
        className="p-0 d-flex flex-column mb-2 rounded-1 shadow"
      >
        <div className="ms-auto me-5 px-1 w-auto bg-secondary text-light">
          {keywords ? keywords[0] : "News"}
        </div>
        <div className="p-2">
          <a className="news-article-link" href={link}>
            <div className="news-title mb-2"> {title}</div>
            <div className="mb-2" style={{ fontSize: "0.8em" }}>
              {description}
            </div>
            <div className="article-link" style={{ fontSize: "0.7em" }}></div>
            <div className="d-flex flex-column">
              <div className="d-flex">
                <BsPerson className="my-auto me-1" />
                <div className="my-auto" style={{ fontSize: "0.7em" }}>
                  {creator}
                </div>
              </div>
              <div className="d-flex">
                <MdAccessTime className="my-auto me-1" />
                <div className="my-auto" style={{ fontSize: "0.7em" }}>
                  {pubDate}
                </div>
              </div>
            </div>
          </a>
        </div>
      </Container>
    );
  });

  return (
    <Container
      fluid
      className="border border-dark rounded-3 p-1 bg-light news-container"
    >
      <div className="mb-2 p-1 d-flex">
        <h6 className="my-auto rounded-1 w-auto px-2 py-1">News</h6>
      </div>
      <div>{newsItems}</div>
    </Container>
  );
}

export default NewsContainer;

import React from "react";

import { Container } from "react-bootstrap";

function NewsContainer(props) {
  const newsItems = props.news.map((article, i) => {
    return (
      <div key={i} className="d-flex flex-column border mb-1 p-2 rounded-1">
        <div className="news-title mb-2"> {article.title}</div>
        <div className="mb-2" style={{ fontSize: "0.8em" }}>
          {article.description}
        </div>
        <div className="article-link" style={{ fontSize: "0.7em" }}>
          <a href={article.link}>{`${article.link.slice(0, 30)}...`}</a>
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
      <div className="mb-1">
        <h5>News</h5>
      </div>
      <div>{newsItems}</div>
    </Container>
  );
}

export default NewsContainer;

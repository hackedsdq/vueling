import React from "react";
import "./style.css";
export default function PaginationBar({
  setCurrentPage,
  currentPage,
  pagesNumber,
}) {
  return (
    <div>
      <div className="pagination:container">
        <div
          onClick={() => {
            currentPage > 1 && setCurrentPage(currentPage - 1);
          }}
          className="pagination:number arrow"
        >
          <svg width={18} height={18}>
            <use xlinkHref="#left" />
          </svg>
        </div>
        {Array(pagesNumber)
          .fill(0)
          .map((x, index) => (
            <div
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={
                "pagination:number " +
                `${index + 1 === currentPage && "pagination:active"}`
              }
            >
              {index + 1}
            </div>
          ))}

        <div
          onClick={() =>
            currentPage < pagesNumber && setCurrentPage(currentPage + 1)
          }
          className="pagination:number arrow"
        >
          <svg width={18} height={18}>
            <use xlinkHref="#right" />
          </svg>
        </div>
      </div>
      <svg className="hide">
        <symbol
          id="left"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </symbol>
        <symbol
          id="right"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </symbol>
      </svg>
    </div>
  );
}

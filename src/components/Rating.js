import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span>
        {value && value >= 1 ? (
          <FaStar style={{ color: "gold" }} />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt style={{ color: "gold" }} />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value && value >= 2 ? (
          <FaStar style={{ color: "gold" }} />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt style={{ color: "gold" }} />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value && value >= 3 ? (
          <FaStar style={{ color: "gold" }} />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt style={{ color: "gold" }} />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value && value >= 4 ? (
          <FaStar style={{ color: "gold" }} />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt style={{ color: "gold" }} />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value && value >= 5 ? (
          <FaStar style={{ color: "gold" }} />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;

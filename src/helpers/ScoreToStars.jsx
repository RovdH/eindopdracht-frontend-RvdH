import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const getStarRating = (score) => (score / 100) * 5;

export const StarRating = ({ score }) => {
    const stars = getStarRating(score);

    return (
        <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
            {[...Array(5)].map((_, i) => (
                i + 1 <= Math.floor(stars) ? ( // Full star
                    <FaStar key={i} color="gold" />
                ) : i < stars ? ( // Half star
                    <FaStarHalfAlt key={i} color="gold" />
                ) : ( // Empty star
                    <FaRegStar key={i} color="gold" />
                )
            ))}
        </div>
    );
};

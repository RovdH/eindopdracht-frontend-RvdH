import {useContext, useEffect, useState} from "react";
import styles from "./RecipeComments.module.css";
import {AuthContext} from "../../context/auth/AuthContext.jsx";
import Button from "../../buttons/Button.jsx";
import {Link} from "react-router-dom";

function RecipeComments({recipeId}) {
    const {isAuth, user} = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const [userComment, setUserComment] = useState("");
    const [infoMessage, setInfoMessage] = useState("");
    const [currentCommentId, setCurrentCommentId] = useState(null);

    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem("comments")) || {};
        setComments(storedComments[recipeId] || []);
    }, [recipeId]);

    const handleCommentSubmit = () => {
        if (!isAuth) {
            setInfoMessage("You need to sign in to comment.");
            return;
        }

        if (comments.filter(c => c.userId === user.id).length >= 3) {
            setInfoMessage("You can only post up to 3 comments per recipe.");
            return;
        }

        const today = new Date().toLocaleDateString("nl-NL");
        const storedComments = JSON.parse(localStorage.getItem("comments")) || {};
        const recipeComments = storedComments[recipeId] || [];

        const updatedComments = [
            ...recipeComments,
            {
                username: user.username,
                userId: user.id,
                date: today,
                comment: userComment,
            }
        ];

        storedComments[recipeId] = updatedComments;
        localStorage.setItem("comments", JSON.stringify(storedComments));

        setComments(updatedComments);
        setUserComment(""); // Clear the input field
    };

    const handleEditComment = (comment) => {
        setUserComment(comment.comment);
        setCurrentCommentId(comment.userId);
    };

    const handleDeleteComment = (commentId) => {
        const storedComments = JSON.parse(localStorage.getItem("comments")) || {};
        const recipeComments = storedComments[recipeId] || [];
        const updatedComments = recipeComments.filter(c => c.userId !== commentId);
        storedComments[recipeId] = updatedComments;
        localStorage.setItem("comments", JSON.stringify(storedComments));

        setComments(updatedComments);
        setUserComment("");
        setCurrentCommentId(null);
    };

    return (
        <section className={styles.recipe_comments__wrapper}>
            <h3>Recipe Comments</h3>

            {comments.length === 0 && <p>No comments yet. Be the first!</p>}
            <ul className={styles.commentList}>
                {comments.map((c, index) => (
                    <li key={index} className={styles.commentItem}>
                        <strong>{c.username}</strong> <span>({c.date})</span>
                        <p>{c.comment}</p>
                        {c.userId === user.id && (
                            <div className={styles.commentActions}>
                                <span
                                    className={styles.editIcon}
                                    onClick={() => handleEditComment(c)}
                                >
                                    ✏️ Edit
                                </span>
                                <span
                                    className={styles.deleteIcon}
                                    onClick={() => handleDeleteComment(c.userId)}
                                >
                                    🗑️ Delete
                                </span>
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            {isAuth && !currentCommentId && (
                <article className={styles.recipe_comments__input}>
                    <textarea
                        value={userComment}
                        onChange={(e) => setUserComment(e.target.value)}
                        placeholder="Add a comment here..."
                        rows={3}
                        className={styles.recipe_comments__textarea}
                    />
                    <Button variant={"btn_darkgreen"} onClick={handleCommentSubmit}>
                        Post Comment
                    </Button>
                </article>
            )}

            {!isAuth && (
                <article className={styles.guestMessage}>
                    <p>You need to <Link to={"/sign-in"}>sign in</Link> to post a comment.</p>
                </article>
            )}

            {infoMessage && <p className={styles.info}>{infoMessage}</p>}
        </section>
    );
}

export default RecipeComments;


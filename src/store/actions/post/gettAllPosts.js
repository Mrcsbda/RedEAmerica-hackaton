import { getAllPosts } from "../../../services/posts";
import { getActionPost } from "../../slides/posts/postsThunk";

export const actionGetPostssAsync = () => {
    return async (dispatch) => {
     try {
       const allPosts = await getAllPosts();
     //  console.log(allPosts);
       dispatch(getActionPost({posts: allPosts}))
     } catch (error) {
        console.log(error);
     }
    };
  };


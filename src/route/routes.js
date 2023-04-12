import { createBrowserRouter } from "react-router-dom";
import Post from "../features/post/Post";
import SinglePost from "../features/post/SinglePost";


//  create Browserrouter
const route = createBrowserRouter([
    {
        "path" : "/",
        element : <Post/>
    },
    {
        "path" : "/:id",
        element : <SinglePost />
    }
])

// export default
export default route
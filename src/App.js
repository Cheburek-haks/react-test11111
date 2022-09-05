import React, { useMemo, useRef, useState } from "react";
import PostList from "./components/PostList";
import "bootstrap";
import Slayder from "./tests/Slayder";
import Test from "./tests/Test";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "aa", body: "Dn" },
        { id: 2, title: "bb 2", body: "Descr1" },
        { id: 3, title: "gg 3", body: "Des" },
    ]);

    const [filter, setFilter] = useState({ sort: "", query: "" });

    const sortedPosts = useMemo(() => {
        console.log("Отрбаотала функция GetSortedPosts");
        if (filter.sort) {
            return [...posts].sort((a, b) =>
                a[filter.sort].localeCompare(b[filter.sort])
            );
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
            post.title
                .toLocaleLowerCase()
                .trim()
                .includes(filter.query.toLocaleLowerCase().trim())
        );
    }, [filter.query, sortedPosts]);
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };
    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <div className="App">
            <Test />
            <Slayder />
            <PostForm create={createPost} />
            <hr style={{ margin: "15px 0" }} /> 
            <PostFilter filter={filter} setFilter={setFilter} />

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Посты про JS"} />
            

        </div>
    );
}

export default App;

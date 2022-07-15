import Post from "./Post";

const posts = [
    {
        id: "123",
        username: "Pratigya",
        userImg: "https://raw.githubusercontent.com/Pratigya99/Images/main/profile-photo.png",
        img: "https://raw.githubusercontent.com/Pratigya99/Images/main/post1.jpg",
        caption: "this is a dummy post1!",
    },
    {
        id: "123",
        username: "Pratigya",
        userImg: "https://raw.githubusercontent.com/Pratigya99/Images/main/profile-photo.png",
        img: "https://raw.githubusercontent.com/Pratigya99/Images/main/post2.jpg",
        caption: "this is a dummy post2!",
    },
];

function Posts() {
    return (
        <div>
            {posts.map((post)=>(
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />

            ))}
            
        </div>

    )
}

export default Posts
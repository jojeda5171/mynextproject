import PostCard from "@/components/PostCard"
import "./Posts.css"

async function loadPost(){
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    //await new Promise((resolve) => setTimeout(resolve, 5000))
    return data
}

//React Server Component
async function PostPages(){
    //usestate
    //useeffect
    const posts=await loadPost()
    console.log(posts)
    return (
    <div className="grid">
        {
            posts.map((post)=>(
                <PostCard post={post} key={post.id}></PostCard>
                
            ))
        }
    </div>
    )
}

export default PostPages
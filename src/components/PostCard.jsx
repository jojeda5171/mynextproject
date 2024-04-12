"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

// React Client Component
export default function PostCard({ post }) {
  const params=useParams();
  console.log(params);
  return (
    <div className="bg-gray-950 p10">
      <Link href={`posts/${post.id}`}>
        <h3 className="text-xl font-bold mb-4">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p className="text-slate-300">{post.body}</p>
      <button
        onClick={() => {
          alert("Click Funcionando");
        }}
      >
        Click
      </button>
    </div>
  );
}

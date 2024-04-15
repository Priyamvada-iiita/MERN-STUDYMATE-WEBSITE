import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      title: '',
      content: ''
    }
  });

  useEffect(() => {
    fetch("http://localhost:3000/forum-posts")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch posts:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const onSubmit = data => {
    console.log('Form data:', data);
    setIsLoading(true);
    fetch("http://localhost:3000/post-forum", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to submit post');
      }
      return res.json();
    })
    .then(() => {
      alert("Post submitted successfully!");
      reset();
      setError(null);
    })
    .catch(err => {
      console.error("Error submitting form:", err);
      setError(err.message);
    })
    .finally(() => setIsLoading(false));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Forum Posts</h2>
      <div>
        <h3 className="text-xl font-bold mb-2">Create New Post</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-lg mb-2">Title</label>
            <input {...register("title", { required: "Title is required" })}
              placeholder="Enter post title"
              className="w-full px-4 py-2 border rounded focus:outline-none"/>
            {errors.title && <span className="text-red-500">{errors.title.message}</span>}
          </div>
          <div>
            <label className="block text-lg mb-2">Content</label>
            <textarea {...register("content", { required: "Content is required" })}
              rows="4"
              placeholder="Write your post content here..."
              className="w-full px-4 py-2 border rounded focus:outline-none"/>
            {errors.content && <span className="text-red-500">{errors.content.message}</span>}
          </div>

          <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2  rounded-sm cursor-pointer"/>
          <p className="text-lg italic text-center mb-6">“Sharing knowledge is the most fundamental act of friendship. Because it is a way you can give something without losing something.” — Richard Stallman</p>
        </form>
      </div>
      
      <div>
        {posts.map(post => (
          <div key={post.id} className="my-5 p-4 border rounded shadow-lg flex justify-between items-start">
            <div>
              <h4 className="text-lg font-bold">{post.title}</h4>
              <p className="text-gray-700">{post.content}</p>
              <p className="text-sm text-gray-500">Posted by: <a href={`/profile/${post.userId}`} className="text-blue-500 hover:underline">{post.username}</a></p>
            </div>
            <div className="text-sm text-gray-500">Posted on: {new Date(post.createAt.slice(0,10)).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Forum;

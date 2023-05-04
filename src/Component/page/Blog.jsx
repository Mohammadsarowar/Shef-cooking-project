import { useEffect, useState } from 'react';


const Blog = ()=> {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // TODO: Fetch posts from backend API
    setPosts([
      {
        id: 1,
        title: 'Tell us the differences between uncontrolled and controlled components.',
        content: 'the choice between controlled and uncontrolled components depends on the specific needs of your application. Uncontrolled components are simpler and require less setup, but they are also less flexible and harder to customize. Controlled components require more setup and can be more complex, but they are also more flexible and customizable.',
        author: 'John Doe',
        date: 'May 1, 2023',
      },
      {
        id: 2,
        title: 'How to validate React props using PropTypes',
        content: 'React is a popular JavaScript library used for building user interfaces. One of its key features is the ability to define and validate the props that are passed to a component using PropTypes.PropTypes is a type-checking library that comes with React. It provides a way to specify the data type and structure of each prop that a component expects to receive. This helps ensure that the component is being used correctly and can help prevent bugs caused by incorrect data types or missing data.',
        author: 'Jane Smith',
        date: 'April 28, 2023',
      },
      {
        id: 3,
        title: 'Tell us the difference between nodejs and express js.',
        content: 'Node.js is a server-side JavaScript runtime, while Express.js is a web framework built on top of Node.js. Node.js provides a set of built-in modules and APIs for handling I/O operations and other server-side tasks, while Express.js provides a set of abstractions and utilities for building web applications with Node.js. In summary, Node.js is the underlying platform, while Express.js is a toolset for building web applications on top of Node.js.',
        author: 'Md Smith',
        date: 'April 18, 2020',
      },
      {
        id: 4,
        title: 'What is a custom hook, and why will you create a custom hook?',
        content: 'A custom hook is a reusable piece of logic that can be shared across multiple React components. It is a JavaScript function that uses one or more of the built-in React hooks (like useState or useEffect) to encapsulate complex logic and state management into a single,reusable unit.You might create a custom hook when you find yourself repeating the same logic or state management in multiple components. By encapsulating that logic into a custom hook, you can avoid duplicating code and make your components more modular and easier to maintain.',
        author: 'Md Smith',
        date: 'May 5, 2022',
      }
      // Add more posts here
    ]);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Blog</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Read the latest posts from our blog
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{post.title}</h3>
                <p className="mt-2 max-w-2xl text-sm text-gray-500">{post.content}</p>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <p className="text-xs text-gray-500">{post.author} | {post.date}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

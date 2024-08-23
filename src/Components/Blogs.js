import React from 'react';
import './Blogs.css'; // Import the CSS file for styling

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Manage Your Finances",
      description: "Discover tips and strategies for effective financial management and budgeting.",
      image: "/images/single_blog_1.png.webp",
      link: "#",
      date: "August 23, 2024"
    },
    {
      title: "Understanding Loan Interest Rates",
      description: "Learn about different types of loan interest rates and how they impact your payments.",
      image: "/images/single_blog_2.png.webp",
      link: "#",
      date: "August 20, 2024"
    },
    {
      title: "Tips for Improving Your Credit Score",
      description: "Find out how you can improve your credit score with these actionable tips.",
      image: "/images/single_blog_3.png.webp",
      link: "#",
      date: "August 15, 2024"
    },
    {
      title: "The Benefits of Refinancing Your Loan",
      description: "Explore the advantages of refinancing and whether it's right for you.",
      image: "/images/single_blog_5.png.webp",
      link: "#",
      date: "August 10, 2024"
    }
  ];

  return (
    <div className="blog-container">
      <center><h1>Latest Blogs</h1></center>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image-container">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-date">{post.date}</div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <a href={post.link} className="blog-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

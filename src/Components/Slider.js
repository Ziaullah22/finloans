import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const workers = [
    {
      id: 1,
      name: 'John Doe',
      profileImage: '/images/author.png.webp',
      paragraph: 'John is a skilled developer with 5 years of experience in web development. He has worked on various projects, including e-commerce websites, content management systems, and custom web applications. John is passionate about learning new technologies and constantly improving his skills to stay up-to-date with the latest trends in web development.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      profileImage: '/images/author2.jpg.webp',
      paragraph: 'Jane is an expert in frontend technologies and UI/UX design. With a keen eye for detail, she ensures that every application she works on is not only functional but also visually appealing and user-friendly. Jane has a strong background in graphic design, which allows her to create seamless and intuitive user interfaces that enhance the overall user experience.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      profileImage: '/images/author3.webp',
      paragraph: 'Alice specializes in backend development and database management. She has extensive experience working with various server-side languages and databases, ensuring that applications run smoothly and efficiently. Alice is known for her ability to solve complex problems and optimize system performance, making her an invaluable asset to any development team.',
    },
    {
      id: 4,
      name: 'Bob Brown',
      profileImage: '/images/author4.jpg',
      paragraph: 'Bob is a full-stack developer with a passion for coding. He enjoys working on both the frontend and backend of web applications, allowing him to take projects from concept to completion. Bob is always eager to learn new skills and is constantly exploring new technologies to expand his knowledge and improve his development process.',
    },
    {
      id: 5,
      name: 'Carol White',
      profileImage: '/images/author5.jpg',
      paragraph: 'Carol is a software engineer with expertise in machine learning. She has a strong background in mathematics and computer science, which enables her to develop sophisticated algorithms and models that drive intelligent applications. Carol is particularly interested in the ethical implications of AI and is committed to developing fair and unbiased machine learning systems.',
    },
    {
      id: 6,
      name: 'David Black',
      profileImage: '/images/author6.jpg',
      paragraph: 'David is a DevOps engineer who loves automating workflows. He has a deep understanding of the software development lifecycle and is skilled in using various tools and technologies to streamline processes and improve efficiency. David is passionate about continuous integration and deployment, and he is always looking for ways to make the development process faster and more reliable.',
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? workers.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === workers.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <button onClick={goToPrevious} className="slider-button">❮</button>
      <div className="slider-content">
        <img src={workers[currentIndex].profileImage} alt={workers[currentIndex].name} className="profile-image" />
        <p className="worker-description">
          {workers[currentIndex].paragraph}
          <span className="worker-name"> - {workers[currentIndex].name}</span>
        </p>
      </div>
      <button onClick={goToNext} className="slider-button">❯</button>
    </div>
  );
};

export default Slider;

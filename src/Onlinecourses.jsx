import React from 'react';
import './Onlinecourses.css'; 
import StickyFooter from './StickyFooter';

const courses = [
  { id: 1, name: 'Introduction to Aeromodelling', description: 'Learn the basics of aeromodelling.', price: 20, image: 'course1.jpg' },
  { id: 2, name: 'Advanced Aerodynamics', description: 'Explore advanced concepts in aerodynamics.', price: 30, image: 'course2.jpg' },
  { id: 3, name: 'Drone Building Workshop', description: 'Hands-on workshop on building your own drone.', price: 40, image: 'course3.jpg' },
  
];

const Onlinecourses = () => {
  return (
    <>
    <div className="aeromodelling-page">
      <h1 className="page-title">Aeromodelling Courses</h1>
      <div className="courses">
        {courses.map((course) => (
          <div key={course.id} className="course">
            <img className="course-image" src="https://source.unsplash.com/random?mountain" alt={course.name} />
            <h2 className="course-name">{course.name}</h2>
            <p className="course-description">{course.description}</p>
            <p className="course-price">${course.price}</p>
            <button className="purchase-button">Purchase</button>
          </div>
        ))}
      </div>
    </div>
    <StickyFooter />
    </>
  );
};

export default Onlinecourses;

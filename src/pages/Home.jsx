import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios';
import hero from "../assets/here.svg";
import { MdGolfCourse } from "react-icons/md";
import background from "../assets/background.avif";
import '../index.css';
import LoadingScreen from './LoadingScreen';

const Home = () => {
  const [topCourses, setTopCourses] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        const reviewsRes = await axios.get('https://wisdomize-backend.onrender.com/api/reviews', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setReviews(reviewsRes.data.slice(0, 6));

        const coursesRes = await axios.get('https://wisdomize-backend.onrender.com/api/courses', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTopCourses(coursesRes.data.slice(0, 5));

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[650px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={background}
            alt="Online Learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <div className="text-white text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Transform Your Future Through Learning
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 opacity-90">
                  Join thousands of students mastering new skills with our interactive courses and expert instructors.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link
                    to="/courses"
                    className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-gray-100 transition-all text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    Explore Courses
                  </Link>
                  <Link
                    to="/mylearning"
                    className="border-2 border-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-white/10 transition-all text-base sm:text-lg font-semibold text-white flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Continue Learning
                  </Link>
                </div>
              </div>

              {/* Floating Animation Container - Hidden on mobile */}
              <div className="hidden lg:block relative">
                <div className="animate-float">
                  <img
                    src={hero}
                    alt="Learning Illustration"
                    className="w-full max-w-xl mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Courses Carousel */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Top Courses</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
            showStatus={false}
            centerMode={true}
            centerSlidePercentage={window.innerWidth < 768 ? 80 : 33.33}
            renderArrowPrev={(clickHandler, hasPrev) => (
              <button
                onClick={clickHandler}
                className="absolute top-1/2 left-0 z-10 bg-white/80 p-1 sm:p-2 rounded-full shadow-lg hover:bg-white transform -translate-y-1/2"
                aria-label="Previous course"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            renderArrowNext={(clickHandler, hasNext) => (
              <button
                onClick={clickHandler}
                className="absolute top-1/2 right-0 z-10 bg-white/80 p-1 sm:p-2 rounded-full shadow-lg hover:bg-white transform -translate-y-1/2"
                aria-label="Next course"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          >
            {topCourses.map(course => (
              <div key={course.course_id} className="px-2 h-full">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                  <img
                    src={course.thumbnail}
                    alt={course.course_name}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-3 sm:p-4 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{course.course_name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2 flex-grow">{course.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-[10px] border border-blue-200">
                        {course.category_name}
                      </span>
                      <Link
                        to={`/courses/${course.course_id}`}
                        className="bg-blue-600 text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View Course
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Student Reviews</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={2010}
            showStatus={false}
            centerMode={true}
            centerSlidePercentage={window.innerWidth < 768 ? 90 : 50}
            renderArrowPrev={(clickHandler, hasPrev) => (
              <button
                onClick={clickHandler}
                className="absolute top-1/2 left-0 z-10 bg-white/80 p-1 sm:p-2 rounded-full shadow-lg hover:bg-white transform -translate-y-1/2"
                aria-label="Previous review"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            renderArrowNext={(clickHandler, hasNext) => (
              <button
                onClick={clickHandler}
                className="absolute top-1/2 right-0 z-10 bg-white/80 p-1 sm:p-2 rounded-full shadow-lg hover:bg-white transform -translate-y-1/2"
                aria-label="Next review"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          >
            {reviews.map(review => (
              <div key={review.created_at} className="px-2 h-full">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl h-full">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold">
                      {review.user_email?.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <p className="font-semibold text-sm sm:text-base">{review.user_email}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg sm:text-xl ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">{review.review}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Development Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Nandeesh J Aradhya */}
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                  NJ
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Nandeesh J Aradhya</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">USN: U25UV22T029037</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Responsible for course management system,
                user authentication, and API integrations. Contributed to both
                frontend and backend development.
              </p>
            </div>

            {/* Narendra Kumar Reddy */}
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                  NK
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Narendra Kumar Reddy</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">USN: U25UV22T029038</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Responsible for course management system,
                user authentication, and API integrations. Contributed to both
                frontend and backend development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
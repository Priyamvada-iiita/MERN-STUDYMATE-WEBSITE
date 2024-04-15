import React from 'react';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology')" }}>
        <div className="text-white p-5 bg-black bg-opacity-60 rounded-lg">
          <h1 className="text-5xl font-bold mb-3">Innovate with Us</h1>
          <p className="text-xl mb-5">Join our community to explore cutting-edge technology!</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Explore Now</button>
        </div>
      </div>

      {/* Founder Info */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Meet Our Founder</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <img className="w-48 h-48 rounded-full" src="https://source.unsplash.com/150x150/?portrait" alt="Founder"/>
            <div>
              <p className="text-lg">Jane Doe, a visionary with over 20 years in technology, founded this platform to bridge the gap between technology and daily challenges. Jane's mission is to empower innovation through a supportive community and accessible resources.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-3">User-Friendly Interface</h3>
              <p>Our platform offers an intuitive, easy-to-use interface that simplifies your technological journey.</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-3">Community Support</h3>
              <p>Connect with like-minded individuals and industry experts to exchange ideas and get support.</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-3">Latest Technology News</h3>
              <p>Stay updated with the latest trends and innovations in technology with our curated news section.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="bg-blue-600 text-white text-center p-6">
        <h3 className="text-2xl font-bold">Ready to Start?</h3>
        <p>Sign up today and begin your journey with us.</p>
        <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition duration-300">Join Now</button>
      </div>
    </div>
  );
}

export default LandingPage;

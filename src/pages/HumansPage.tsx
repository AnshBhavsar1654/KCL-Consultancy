
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { scrollToSection } from '../utils/scrollToSection';

const HumansPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the correct section based on hash
    if (location.hash) {
      scrollToSection(location.hash);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const stories = [
    {
      title: "Why Mantra Left Corporate",
      content: "After 7 years in a prestigious consulting firm, I realized I wanted to build something with real purpose. At KCL, I found a place where impact matters more than prestige, where we're solving problems that truly make a difference in people's lives.",
      author: "Mantra Gupta, Strategy Consultant"
    },
    {
      title: "Making a Dent",
      content: "Working on healthcare policy reform for underserved communities showed me how our work directly impacts real people. When we saw the data on improved access to care after implementing our recommendations, I knew we were making a meaningful dent in one of society's biggest challenges.",
      author: "Elena Rodriguez, Healthcare Specialist"
    }
  ];

  const openPositions = [
    {
      title: "Senior Healthcare Consultant",
      location: "New Delhi",
      type: "Full-time",
      description: "Leading consulting projects in healthcare sector, developing policy recommendations, and managing client relationships.",
      requirements: ["7+ years healthcare consulting experience", "Strong analytical skills", "Excellent communication ability"]
    },
    {
      title: "Urban Planning Specialist",
      location: "Ahmedabad",
      type: "Full-time",
      description: "Supporting our Urban Rejuvenation practice with technical expertise in urban planning, sustainability, and infrastructure development.",
      requirements: ["Urban planning qualification", "Experience with sustainability initiatives", "Project management skills"]
    },
    {
      title: "Digital Transformation Consultant",
      location: "New Delhi",
      type: "Full-time",
      description: "Helping clients navigate digital transformation with strategic planning, implementation support, and change management.",
      requirements: ["Experience in digital strategy", "Understanding of emerging technologies", "Change management expertise"]
    }
  ];

  return (
    <div className="pt-10">
      {/* Who We Are */}
      <section id="who-we-are" className="section-padding-top bg-white">
        <div className="container">
          <SectionHeading 
            title="Who We Are"
            subtitle="We thrive on diversity, creativity, and expertise"
            alignment="left"
          />
          
          <p className="text-lg text-gray-700 mb-8 max-w-4xl">
            At KCL, our strength lies in our people. We are a diverse team of young Indian professionals, engineers, and non-engineers, all united by a shared passion for impact, purpose, and innovation. Our multidisciplinary team brings fresh perspectives to solve complex challenges and drive meaningful change across India.
          </p>
        </div>
      </section>
      
      {/* Our Stories */}
      <section id="stories" className="section-padding-top bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Our Stories"
            subtitle="We believe in the power of personal journeys"
            alignment="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {stories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
                <p className="text-gray-600 mb-8 italic">"{story.content}"</p>
                <p className="text-right text-kcl-blue font-medium">— {story.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Life @ KCL */}
      <section id="life" className="section-padding bg-white">
        <div className="container">
          <SectionHeading 
            title="Life @ KCL"
            subtitle="More than just a workplace—we're a community"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Collaboration & Innovation</h3>
              <p className="text-gray-600">
                From brainstorming sessions to strategy discussions, we foster an environment where ideas flow freely and innovation thrives. We believe the best solutions come from diverse perspectives working together.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Learning & Growth</h3>
              <p className="text-gray-600">
                We're committed to the continuous development of our team. Through mentorship, training opportunities, and challenging assignments, we help our people grow both professionally and personally.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Impact & Purpose</h3>
              <p className="text-gray-600">
                Everyone at KCL contributes to work that matters. We celebrate our successes and learn from our challenges, knowing that our collective efforts create meaningful change across India.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Culture</h3>
                <p className="text-gray-700 mb-4">
                  KCL isn't just a workplace—it's a community. We foster an environment of collaboration, continuous learning, and innovation. From brainstorming sessions to fieldwork, from strategy discussions to team retreats, we create experiences that inspire and energize our people.
                </p>
                <p className="text-gray-700">
                  We value balance, wellness, and the unique contributions of each team member. Our inclusive culture celebrates diverse perspectives and empowers everyone to bring their authentic selves to work.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4 h-8 w-8 rounded-full bg-kcl-blue flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </div>
                  <p className="font-medium">Purpose-driven work</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 h-8 w-8 rounded-full bg-kcl-blue flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M17 6.1H3"></path>
                      <path d="M21 12.1H3"></path>
                      <path d="M15.1 18H3"></path>
                    </svg>
                  </div>
                  <p className="font-medium">Flexible and inclusive environment</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 h-8 w-8 rounded-full bg-kcl-blue flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect width="18" height="10" x="3" y="11" rx="2"></rect>
                      <circle cx="12" cy="5" r="2"></circle>
                      <path d="M12 7v4"></path>
                      <line x1="8" x2="16" y1="16" y2="16"></line>
                    </svg>
                  </div>
                  <p className="font-medium">Continuous learning opportunities</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 h-8 w-8 rounded-full bg-kcl-blue flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <p className="font-medium">Collaborative team environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us */}
      <section id="careers" className="section-padding bg-kcl-blue text-white">
        <div className="container">
          <SectionHeading 
            title="Come Work With Us"
            subtitle="Shape the Future with a Career at KCL"
            className="text-white"
          />
          
          <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto text-center">
            Looking for a career where you can create impact, challenge the status quo, and be part of something bigger? Join us at KCL and help shape the future.
          </p>
          
          <div className="bg-white/10 p-8 rounded-lg border border-white/20 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-white">Why Join KCL?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-3">
                  <div className="mr-3 h-8 w-8 rounded-full bg-white flex items-center justify-center text-kcl-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold">Meaningful Work</h4>
                </div>
                <p className="text-gray-300">
                  Make a real difference with work that directly impacts organizations and communities across India.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <div className="mr-3 h-8 w-8 rounded-full bg-white flex items-center justify-center text-kcl-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold">Growth & Development</h4>
                </div>
                <p className="text-gray-300">
                  Continuous learning opportunities and career progression in a dynamic field.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <div className="mr-3 h-8 w-8 rounded-full bg-white flex items-center justify-center text-kcl-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold">Inclusive Culture</h4>
                </div>
                <p className="text-gray-300">
                  A workplace that values diversity, collaboration, and innovative thinking.
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Open Positions</h3>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-kcl-blue">{position.title}</h4>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{position.location}</span>
                    <span className="bg-kcl-blue/10 text-kcl-blue px-3 py-1 rounded-full text-sm">{position.type}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{position.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-medium mb-2">Requirements:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="text-gray-600">{req}</li>
                    ))}
                  </ul>
                </div>
                
                <Link to="/contact" className="btn-primary inline-block">Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumansPage;

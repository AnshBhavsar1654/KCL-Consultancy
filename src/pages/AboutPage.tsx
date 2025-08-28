
import SectionHeading from '../components/SectionHeading';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the correct section based on hash
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      {/* Vision & Mission */}
      <section id="vision-mission" className="section-padding-top bg-white pt-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-kcl-blue mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-8">
                To be the leading partner in governance and policy consulting, driving transformative change that fosters sustainable growth, accountability, and positive impact across organizations and societies worldwide.
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold text-kcl-blue mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700">
                At KCL, our mission is to empower organizations with evidence-based insights and strategic solutions that enhance governance, shape effective policies, and promote sustainable development. Through innovative thinking and collaborative partnerships, we are committed to delivering long-term value that supports the success and integrity of our clients, stakeholders, and communities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">1</div>
                  <div>
                    <h4 className="font-semibold text-lg">Excellence</h4>
                    <p className="text-gray-600">We strive for the highest standards in all our work</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">2</div>
                  <div>
                    <h4 className="font-semibold text-lg">Integrity</h4>
                    <p className="text-gray-600">We uphold honesty, ethics, and transparency in all interactions</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">3</div>
                  <div>
                    <h4 className="font-semibold text-lg">Innovation</h4>
                    <p className="text-gray-600">We embrace creative solutions and new approaches</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">4</div>
                  <div>
                    <h4 className="font-semibold text-lg">Impact</h4>
                    <p className="text-gray-600">We measure our success by the positive changes we create</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">5</div>
                  <div>
                    <h4 className="font-semibold text-lg">Collaboration</h4>
                    <p className="text-gray-600">We believe in the power of working together</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section id="approach" className="section-padding bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Our Approach"
            subtitle="How we create value for our clients and partners"
            alignment="left"
          />
          
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <div className="text-3xl font-bold text-kcl-blue mb-4">01</div>
                <h3 className="text-xl font-semibold mb-3">Understand</h3>
                <p className="text-gray-600">
                  We begin by thoroughly understanding your organization's unique context, challenges, and objectives through comprehensive research and stakeholder engagement.
                </p>
              </div>
              
              <div className="card">
                <div className="text-3xl font-bold text-kcl-blue mb-4">02</div>
                <h3 className="text-xl font-semibold mb-3">Analyze</h3>
                <p className="text-gray-600">
                  Our team conducts rigorous analysis using data-driven methodologies to identify patterns, gaps, and opportunities for improvement.
                </p>
              </div>
              
              <div className="card">
                <div className="text-3xl font-bold text-kcl-blue mb-4">03</div>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <p className="text-gray-600">
                  We develop tailored strategies and solutions that address your specific needs while incorporating global best practices and innovative approaches.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <div className="text-3xl font-bold text-kcl-blue mb-4">04</div>
                <h3 className="text-xl font-semibold mb-3">Implement</h3>
                <p className="text-gray-600">
                  Our team works closely with yours to execute the strategy, providing guidance, support, and expertise throughout the implementation process.
                </p>
              </div>
              
              <div className="card">
                <div className="text-3xl font-bold text-kcl-blue mb-4">05</div>
                <h3 className="text-xl font-semibold mb-3">Evaluate</h3>
                <p className="text-gray-600">
                  We employ comprehensive monitoring and evaluation frameworks to assess performance, measure impact, and identify areas for refinement.
                </p>
              </div>
              
              <div className="card">
                <div className="text-3xl font-bold text-kcl-blue mb-4">06</div>
                <h3 className="text-xl font-semibold mb-3">Refine</h3>
                <p className="text-gray-600">
                  Based on evaluation findings, we continuously refine and optimize strategies to ensure sustained success and maximum impact over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose KCL */}
      <section id="about-us" className="section-padding bg-kcl-blue text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">
            What Sets Us Apart in Governance Consulting
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Multidisciplinary Expertise</h3>
              <p className="text-gray-200">
                Our team brings together diverse skills and knowledge from various fields, allowing for comprehensive and innovative solutions.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Evidence-Based Approach</h3>
              <p className="text-gray-200">
                We ground all our recommendations in thorough research and data analysis, ensuring reliable and effective outcomes.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Global Perspective, Local Insights</h3>
              <p className="text-gray-200">
                We combine international best practices with deep understanding of local contexts to create solutions that are both world-class and relevant.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Long-Term Partnership</h3>
              <p className="text-gray-200">
                We build lasting relationships with our clients, providing ongoing support and guidance beyond project completion.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Focus on Implementation</h3>
              <p className="text-gray-200">
                We don't just provide recommendations—we work alongside you to turn strategies into actionable results.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Commitment to Impact</h3>
              <p className="text-gray-200">
                Our ultimate goal is to create meaningful, measurable impact that advances your organization's mission and benefits society.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

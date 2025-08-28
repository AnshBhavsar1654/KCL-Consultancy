
import { Link } from 'react-router-dom';
import { Search, TrendingUp, BarChart3, PieChart, Users, ShieldCheck, GraduationCap, Cpu, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import HeroCarousel from '../components/HeroCarousel';
import CaseStudy from '../components/CaseStudy';

const Home = () => {
  const services = [
    {
      title: 'Research & Market Intelligence',
      description: 'In-depth research and analysis for informed decision-making, identifying market opportunities, and mitigating business risks through evidence-based insights.',
      icon: <Search size={28} />,
      link: '/services#research'
    },
    {
      title: 'Strategy Development & Facilitation',
      description: 'Comprehensive strategic planning and facilitation services that accelerate organizational growth, improve operational performance, and deliver measurable outcomes.',
      icon: <TrendingUp size={28} />,
      link: '/services#strategy'
    },
    {
      title: 'Regulatory Advisory & Compliance',
      description: 'Navigate complex regulatory landscapes with confidence. Stay ahead of regulatory changes, minimize compliance risks, and build stakeholder trust.',
      icon: <ShieldCheck size={28} />,
      link: '/services#regulatory'
    },
    {
      title: 'Programme Design & Evaluation',
      description: 'Design, launch, and measure high-impact programs with robust monitoring and evaluation frameworks that ensure sustainable results.',
      icon: <PieChart size={28} />,
      link: '/services#programme'
    },
    {
      title: 'Program Delivery & Performance',
      description: 'Transform strategic plans into actionable results through efficient program delivery, rigorous performance monitoring, and continuous optimization.',
      icon: <BarChart3 size={28} />,
      link: '/services#delivery'
    },
    {
      title: 'Capacity Building & Institutional Strengthening',
      description: 'Empower teams and strengthen institutions with tailored capacity building programs designed for sustainable organizational transformation.',
      icon: <GraduationCap size={28} />,
      link: '/services#capacity'
    },
    {
      title: 'Stakeholder Consultations & Public Engagement',
      description: 'Build trust, legitimacy, and develop better policies through strategic stakeholder engagement and comprehensive public consultation processes.',
      icon: <Users size={28} />,
      link: '/services#consultations'
    },
    {
      title: 'Digital Governance & Transformation',
      description: 'Leverage cutting-edge technology to enhance governance effectiveness, improve service delivery, and strengthen institutional accountability.',
      icon: <Cpu size={28} />,
      link: '/services#digital'
    }
  ];
  
  const caseStudies = [
    {
      title: "A Reform Blueprint for India’s Organ Donation Ecosystem",
      client: "A Leading NGO in Ahmedabad",
      challenge: "Widespread stigma, religious myths, and lack of awareness led to low donor pledges and higher number of instances of family refusals, especially in rural and semi-urban India.",
      solution: "Partnered with an Ahmedabad based NGO to design a nationwide reform roadmap-combining grassroots campaigns, faith-leader engagement, survivor storytelling, and regulatory submissions targeting consent laws and registry digitization.",
      results: "2.57x rise in awareness, 3,000+ donor pledges, our output documents were submitted to the relevant authority for the broader adoption by the client.",
      imageSrc: "/lovable-uploads/12.jpg"
    },
    {
      title: "Designing Structural Reforms to Enhance Senior Citizen Living Standards",
      client: "A Think Tank in Delhi NCR",
      solution: "Developed a policy framework focused on elderly dignity, financial independence, and active ageing. Proposed structural reforms including state-run assisted living networks, digitized pension delivery, age-friendly urban infrastructure norms, and district-level grievance redressal cells. Engaged with senior citizen associations and ran stakeholder consultations across 5 states",
      challenge: "Rapidly ageing population, fragmented welfare schemes, and lack of integrated social support systems led to poor quality of life, isolation, and financial insecurity among senior citizens.",
      results: "Over 1,200 elderly voices represented through the participatory design process.Stakeholder feedback score of 92% satisfaction.",
      imageSrc: "/lovable-uploads/11.png"
    }
  ];

  return (
    <div>
      <HeroCarousel />
      
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-kcl-blue tracking-wider uppercase mb-3">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive Solutions for Complex Challenges</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We deliver end-to-end consulting services designed to help organizations navigate complexity, drive growth, and achieve sustainable impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-kcl-blue/20 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-kcl-blue/10 rounded-lg text-kcl-blue group-hover:bg-kcl-blue group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-kcl-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-kcl-blue hover:text-kcl-blue/80 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="section-padding-top bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Our Impact"
            subtitle="Real results for organizations across India"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
            {caseStudies.map((study, index) => (
              <CaseStudy
                key={index}
                title={study.title}
                client={study.client}
                challenge={study.challenge}
                solution={study.solution}
                results={study.results}
                imageSrc={study.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Centers of Excellence */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading 
            title="Our Centers of Excellence"
            subtitle="Specialized expertise to address complex challenges across sectors"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-kcl-blue mb-3">Healthcare 2.0</h3>
              <p className="text-gray-600 mb-4">Revolutionizing healthcare with innovative models, technology-driven solutions, and patient-centric approaches.</p>
              <Link to="/excellence/healthcare" className="text-kcl-blue font-medium hover:underline">Learn more</Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-kcl-blue mb-3">Urban Rejuvenation</h3>
              <p className="text-gray-600 mb-4">Transforming cities into vibrant, sustainable, and livable spaces through strategic planning and smart infrastructure.</p>
              <Link to="/excellence/urban" className="text-kcl-blue font-medium hover:underline">Learn more</Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-kcl-blue mb-3">AI + Digital Transformation</h3>
              <p className="text-gray-600 mb-4">Harnessing the power of artificial intelligence and digital technology to drive innovation and efficiency.</p>
              <Link to="/excellence/digital" className="text-kcl-blue font-medium hover:underline">Learn more</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About KCL Highlight */}
      <section className="section-padding bg-kcl-blue text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg mb-6">
                At KCL, our mission is to empower organizations with evidence-based insights and strategic solutions that enhance governance, shape effective policies, and promote sustainable development.
              </p>
              <p className="text-lg mb-8">
                Through innovative thinking and collaborative partnerships, we are committed to delivering long-term value that supports the success and integrity of our clients, stakeholders, and communities across India.
              </p>
              <Link 
                to="/about" 
                className="inline-block bg-white text-kcl-blue px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                About Our Vision
              </Link>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/10 p-8 rounded-lg border border-white/20 max-w-md">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg">
                  To be the leading partner in governance and policy consulting, driving transformative change that fosters sustainable growth, accountability, and positive impact across organizations and societies in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="bg-gray-50 p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your organization?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with KCL to develop effective governance strategies and policies that drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="btn-primary"
              >
                Contact Us
              </Link>
              <Link 
                to="/services" 
                className="btn-outline"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

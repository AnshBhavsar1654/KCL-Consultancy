
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, BarChart3, PieChart, Users, ShieldCheck, GraduationCap, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import CaseStudy from '../components/CaseStudy';

const ServicesPage = () => {
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
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="relative container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Strategic Solutions for
              <span className="text-blue-400 block">Complex Challenges</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              We help governments, institutions and enterprises design strategies, build capabilities and deliver outcomes with evidence-led, stakeholder-centric interventions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="#services-overview" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive consulting solutions designed to drive meaningful impact and sustainable growth across public and private sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Research & Intelligence", desc: "Data-driven insights for informed decision making", link: "#research" },
              { icon: Cpu, title: "Digital Transformation", desc: "Technology solutions for modern governance", link: "#digital" },
              { icon: TrendingUp, title: "Strategy & Planning", desc: "Roadmaps for sustainable growth", link: "#strategy" },
              { icon: ShieldCheck, title: "Regulatory Advisory", desc: "Navigate complex compliance landscapes", link: "#regulatory" },
              { icon: BarChart3, title: "Program Delivery", desc: "Execute initiatives with precision", link: "#delivery" },
              { icon: PieChart, title: "Design & Evaluation", desc: "Measure and optimize impact", link: "#programme" },
              { icon: GraduationCap, title: "Capacity Building", desc: "Strengthen institutional capabilities", link: "#capacity" },
              { icon: Users, title: "Stakeholder Engagement", desc: "Build consensus and drive adoption", link: "#consultations" }
            ].map((service, index) => (
              <Link key={index} to={service.link} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 h-full flex flex-col">
                <div className="text-kcl-blue mb-4 group-hover:text-kcl-lightblue transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{service.desc}</p>
                <div className="flex items-center mt-auto pt-4 text-kcl-blue group-hover:text-kcl-lightblue transition-colors">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Market Intelligence */}
      <section id="research" className="section-padding-top bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="mb-4">
                <div className="inline-flex items-center bg-sky-100 p-3 rounded-lg mr-3">
                  <Search className="text-sky-600" size={28} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">Research & Market Intelligence</h2>
              <p className="text-sky-700 font-medium mb-6">Evidence-led insights to de-risk decisions</p>
              <p className="text-lg text-slate-700 mb-8">
                We provide in-depth research to help you make informed decisions, identify opportunities, and mitigate risks. Our expertise includes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Market Research</h4>
                  <p className="text-slate-700">Understanding market trends, customer behavior, and competitive landscapes.</p>
                </div>
                
                <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Market Assessment</h4>
                  <p className="text-slate-700">Evaluating industry potential, market entry strategies, and business viability.</p>
                </div>
                
                <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Field Work</h4>
                  <p className="text-slate-700">Conducting surveys, interviews, and on-ground data collection for accurate insights.</p>
                </div>
                
                <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Policy Benchmarking</h4>
                  <p className="text-slate-700">Analyzing policies against industry standards to identify gaps and best practices.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-5 rounded-lg mb-8 border border-sky-200">
                <h4 className="font-semibold text-slate-900 mb-2">Regulatory Assessment</h4>
                <p className="text-slate-700">Reviewing compliance requirements, legal frameworks, and their impact on your business.</p>
              </div>
              
              <Link to="/contact" className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors">Request Research Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-6 rounded-lg border border-sky-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Research Methodology</h3>
                <ol className="space-y-4 text-slate-700">
                  <li className="flex">
                    <span className="mr-3 font-bold">1.</span>
                    <span>Define research objectives and scope</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3 font-bold">2.</span>
                    <span>Design data collection framework</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3 font-bold">3.</span>
                    <span>Conduct primary and secondary research</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3 font-bold">4.</span>
                    <span>Analyze findings and identify patterns</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3 font-bold">5.</span>
                    <span>Develop insights and actionable recommendations</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3 font-bold">6.</span>
                    <span>Present findings in accessible formats</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="mt-16 justified-text">
            <h3 className="text-2xl font-semibold mb-6">Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justified-text">
              <CaseStudy 
                title="Comparative State Index Report"
                client="One of the Leading Think Tanks of India"
                challenge="A central policy think tank sought to evaluate and compare the performance of all 29 Indian states across diverse governance themes, but faced challenges in defining measurable indicators, standardizing data sources, and ensuring stakeholder buy-in."
                solution="We led the design and execution of a comprehensive benchmarking framework covering 9 categories and 147 indicators. The project involved multi-source data aggregation, inter-departmental consultations, and validation workshops with state governments to ensure accuracy and credibility."
                results="The final Comparative State Index has been submitted to a key ministry to institutionalize performance linked funding mechanism."
              />
              <CaseStudy 
                title="SWB Implementation Benchmarking Across 14 Districts"
                client="State Governemnt of an Indian State"
                challenge="The client aimed to benchmark the implementation of the Swachh Bharat Mission across 14 districts in the state to identify performance gaps and promote cross-district learning. However, the absence of uniform metrics and limited access to ground-level insights made comparison difficult."
                solution="We developed a benchmarking framework with 30+ performance indicators spanning infrastructure coverage, behavioural adoption, IEC effectiveness, and grievance redressal. Primary data was collected from district officials, sanitation workers, and households, and supplemented with secondary MIS and field verification."
                results="The benchmarking exercise highlighted top- and bottom-performing districts, enabling targeted policy corrections and capacity-building efforts. The findings were incorporated into the state’s performance review system and informed SBM Phase II planning, including resource reallocation and IEC redesign."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Digital Governance & Transformation */}
      <section id="digital" className="section-padding-top bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="mb-4">
                <div className="inline-flex items-center bg-indigo-100 p-3 rounded-lg">
                  <Cpu className="text-indigo-600" size={28} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">Digital Governance & Transformation</h2>
              <p className="text-indigo-700 font-medium mb-6">Technology roadmaps that elevate governance and delivery</p>
              <p className="text-lg text-slate-700 mb-8">
                Harness technology to enhance governance effectiveness, service delivery, and institutional accountability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Digital Strategy</h4>
                  <p className="text-slate-700">Roadmaps aligning technology investments with policy priorities and outcomes.</p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-600">
                  <h4 className="font-semibold text-slate-900 mb-2">GovTech Platforms</h4>
                  <p className="text-slate-700">Design and implementation of citizen-centric digital services and platforms.</p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Data & Analytics</h4>
                  <p className="text-slate-700">Building data pipelines, dashboards, and decision intelligence systems.</p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Security & Privacy</h4>
                  <p className="text-slate-700">Risk-based controls, privacy-by-design, and regulatory compliance.</p>
                </div>
              </div>
              <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors">Start Digital Transformation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://www.shutterstock.com/image-photo/female-hand-holding-tablet-creative-600nw-2447467907.jpg" 
                  alt="Digital governance and analytics" 
                  className="block w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Regulatory Advisory & Compliance */}
      <section id="regulatory" className="section-padding-top bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="mb-4">
                <div className="inline-flex items-center bg-emerald-100 p-3 rounded-lg">
                  <ShieldCheck className="text-emerald-700" size={28} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">Regulatory Advisory & Compliance</h2>
              <p className="text-emerald-700 font-medium mb-6">Practical compliance frameworks that build trust</p>
              <p className="text-lg text-slate-700 mb-8">
                Navigate complex regulatory landscapes with confidence. Stay ahead of regulatory changes, minimize compliance risks, and build stakeholder trust.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 p-5 rounded-lg border-l-4 border-emerald-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Regulatory Mapping</h4>
                  <p className="text-slate-700">Comprehensive review of applicable laws, standards, and sectoral guidelines.</p>
                </div>
                <div className="bg-emerald-50 p-5 rounded-lg border-l-4 border-emerald-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Compliance Frameworks</h4>
                  <p className="text-slate-700">Design of practical policies, SOPs, and audit mechanisms.</p>
                </div>
                <div className="bg-emerald-50 p-5 rounded-lg border-l-4 border-emerald-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Risk & Controls</h4>
                  <p className="text-slate-700">Proactive risk identification and control implementation.</p>
                </div>
                <div className="bg-emerald-50 p-5 rounded-lg border-l-4 border-emerald-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Regulatory Engagement</h4>
                  <p className="text-slate-700">Interface with regulators and industry bodies for clarity and alignment.</p>
                </div>
              </div>
              <Link to="/contact" className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors">Request Regulatory Advisory <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://riddlecompliance.com/wp-content/uploads/2024/06/REGULATORY-COMPLIANCE-CONSULTING.jpg" 
                  alt="Regulatory compliance and risk controls" 
                  className="block w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Development & Facilitation */}
      <section id="strategy" className="section-padding-top bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 lg:order-2">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Featured Case Study</h3>
                <p className="text-slate-700 mb-4">
                  We helped a national government develop a comprehensive healthcare policy framework, resulting in improved access to services for over 5 million citizens.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-700 bg-white px-3 py-1 rounded-full">Healthcare Policy Reform</span>
                  <Link to="#strategy-case-studies" className="text-orange-600 hover:text-orange-700 font-medium">View Details →</Link>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 lg:order-1">
              <div className="mb-4">
                <div className="inline-flex items-center bg-orange-100 p-3 rounded-lg">
                  <TrendingUp className="text-orange-600" size={28} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">Strategy Development & Facilitation</h2>
              <p className="text-orange-700 font-medium mb-6">Actionable roadmaps for sustainable growth</p>
              <p className="text-lg text-slate-700 mb-8">
                Success starts with a well-defined strategy. We assist organizations in shaping policies and frameworks for sustainable growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Policy Conceptualization & Formulation</h4>
                  <p className="text-slate-700">Designing effective policies based on global best practices and local needs.</p>
                </div>
                
                <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Project Management</h4>
                  <p className="text-slate-700">Structuring, planning, and overseeing projects to ensure timely and efficient execution.</p>
                </div>
                
                <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Gap Analysis & Reengineering</h4>
                  <p className="text-slate-700">Identifying areas of improvement and opportunities for optimization.</p>
                </div>
                
                <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Organizational Restructuring</h4>
                  <p className="text-slate-700">Streamlining operations and improving organizational efficiency.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Domain Knowledge</h4>
                  <p className="text-slate-700">Expertise across industries to craft tailored strategies.</p>
                </div>
                
                <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Framework + Systems + Technology + Data</h4>
                  <p className="text-slate-700">Integrating cutting-edge frameworks and technologies for enhanced decision-making.</p>
                </div>
              </div>
              
              <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors">Request Strategy Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </div>
          </div>
          
          <div id="strategy-case-studies" className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CaseStudy 
                title="Healthcare Policy Framework Reform"
                client="National Government"
                challenge="A national government needed to modernize its healthcare policy framework to improve access and quality of care while managing costs."
                solution="We developed a comprehensive policy framework based on international best practices, local context analysis, and stakeholder engagement across healthcare providers, insurers, and patient groups."
                results="The implementation of the new framework resulted in improved access to healthcare services for over 5 million citizens, 25% reduction in administrative costs, and improved health outcomes across key metrics."
              />
              <CaseStudy 
                title="Corporate Strategy for Digital Transformation"
                client="Large Financial Institution"
                challenge="A traditional financial institution was losing market share to fintech startups and needed a comprehensive strategy to modernize operations and customer experience."
                solution="We crafted a phased digital transformation strategy that included organizational restructuring, technology adoption roadmap, and change management framework."
                results="The client successfully transformed their digital capabilities, resulting in 40% improvement in customer satisfaction scores, 35% reduction in processing times, and successful launch of three innovative digital products within 18 months."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Program Delivery & Performance */}
      <section id="delivery" className="section-padding-top bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="mb-4">
                <div className="inline-flex items-center bg-blue-100 p-3 rounded-lg">
                  <BarChart3 className="text-blue-700" size={28} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">Program Delivery & Performance</h2>
              <p className="text-blue-700 font-medium mb-6">From plan to outcomes with disciplined execution</p>
              <p className="text-lg text-slate-700 mb-8">
                Transforming strategy into action with seamless execution and effective governance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Program Implementation</h4>
                  <p className="text-slate-700">Deploying initiatives that drive measurable outcomes with clear milestones and accountability.</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Stakeholder Management</h4>
                  <p className="text-slate-700">Ensuring effective collaboration between key players and maintaining alignment with objectives.</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Capacity Development</h4>
                  <p className="text-slate-700">Building capabilities within organizations for sustainable growth and self-sufficiency.</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-slate-900 mb-2">Quality Assurance</h4>
                  <p className="text-slate-700">Maintaining high standards across all initiatives through rigorous quality control processes.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg mb-8 border border-blue-200">
                <h4 className="font-semibold text-slate-900 mb-2">MIS System</h4>
                <p className="text-slate-700">Implementing robust Management Information Systems for data-driven operations and decision-making.</p>
              </div>
              
              <Link to="/contact" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors">Request Implementation Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-4">Our Implementation Approach</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-blue-700 flex items-center justify-center text-white">1</div>
                    <div>
                      <h4 className="font-semibold">Clear Roadmap</h4>
                      <p className="text-slate-700">Detailed action plans with defined milestones</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-blue-700 flex items-center justify-center text-white">2</div>
                    <div>
                      <h4 className="font-semibold">Stakeholder Alignment</h4>
                      <p className="text-slate-700">Engaging all relevant parties throughout the process</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-blue-700 flex items-center justify-center text-white">3</div>
                    <div>
                      <h4 className="font-semibold">Resource Optimization</h4>
                      <p className="text-slate-700">Efficient allocation of time, talent and budgets</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-blue-700 flex items-center justify-center text-white">4</div>
                    <div>
                      <h4 className="font-semibold">Continuous Monitoring</h4>
                      <p className="text-slate-700">Regular tracking of progress against KPIs</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CaseStudy 
                title="Healthcare System Implementation"
                client="Regional Hospital Network"
                challenge="A hospital network needed to implement a new healthcare delivery system across multiple facilities while maintaining service quality and minimizing disruption."
                solution="We developed a phased implementation plan with clear milestones, staff training programs, and continuous monitoring systems to ensure smooth transition."
                results="The new system was successfully implemented across all facilities with minimal service disruption, resulting in 28% improvement in operational efficiency and 22% increase in patient satisfaction scores."
              />
              <CaseStudy 
                title="Smart City Initiative Implementation"
                client="Municipal Government"
                challenge="A city government needed to implement a complex smart city initiative involving multiple departments, vendors, and stakeholders with competing interests."
                solution="We established a project management office, developed a comprehensive stakeholder engagement plan, and created governance structures to ensure effective coordination and accountability."
                results="The initiative was successfully implemented on time and within budget, delivering a 40% improvement in targeted city services and winning a national award for public sector innovation."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Programme Design & Evaluation */}
      <section id="programme" className="section-padding-top bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 lg:order-2">
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 p-6 rounded-lg border border-violet-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Evaluation Framework</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-bold text-violet-700 mr-2">•</span>
                    <span>Clearly defined metrics aligned with objectives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-violet-700 mr-2">•</span>
                    <span>Regular data collection through multiple channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-violet-700 mr-2">•</span>
                    <span>Sophisticated analysis using both quantitative and qualitative approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-violet-700 mr-2">•</span>
                    <span>Actionable insights that drive continuous improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-violet-700 mr-2">•</span>
                    <span>Transparent reporting to all stakeholders</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-8 lg:order-1">
              <div className="mb-4">
                <div className="inline-flex items-center bg-violet-100 p-3 rounded-lg">
                  <PieChart className="text-violet-700" size={28} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">Programme Design & Evaluation</h2>
              <p className="text-violet-700 font-medium mb-6">Measure what matters, improve what works</p>
              <p className="text-lg text-slate-700 mb-8">
                Design, launch, and measure high-impact programs with robust monitoring and evaluation frameworks that ensure sustainable results.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-violet-50 p-5 rounded-lg border-l-4 border-violet-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Monitoring & Evaluation</h4>
                  <p className="text-slate-700">Implementing a 360-degree monitoring approach to track progress and ensure objectives are met.</p>
                </div>
                
                <div className="bg-violet-50 p-5 rounded-lg border-l-4 border-violet-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Impact Assessment</h4>
                  <p className="text-slate-700">Measuring success and refining strategies based on data-driven insights and outcomes.</p>
                </div>
                
                <div className="bg-violet-50 p-5 rounded-lg border-l-4 border-violet-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Performance Management</h4>
                  <p className="text-slate-700">Setting performance standards and evaluating against global best practices.</p>
                </div>
                
                <div className="bg-violet-50 p-5 rounded-lg border-l-4 border-violet-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Capability Assessment</h4>
                  <p className="text-slate-700">Identifying organizational strengths and areas for development to build capacity.</p>
                </div>
              </div>
              
              <Link to="/contact" className="bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors">Request Evaluation Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CaseStudy 
                title="Education Program Evaluation"
                client="International Development Agency"
                challenge="An international development agency needed to evaluate the effectiveness of a multi-year education program across five countries with varying contexts and implementation approaches."
                solution="We designed a comprehensive evaluation framework with standardized metrics alongside context-specific indicators, implemented data collection systems, and conducted mixed-method analysis."
                results="The evaluation identified key success factors and improvement areas, leading to program refinements that increased educational outcomes by 35% in subsequent implementation phases while reducing costs by 18%."
              />
              <CaseStudy 
                title="Corporate Performance Management System"
                client="Fortune 500 Company"
                challenge="A large corporation was struggling with inconsistent performance across business units and needed a robust system to monitor, evaluate, and improve performance."
                solution="We developed an integrated performance management framework with balanced scorecards, KPI dashboards, and regular review processes aligned with the company's strategic objectives."
                results="The new system helped identify and address performance gaps, resulting in 15% overall performance improvement, standardization of best practices across units, and more effective resource allocation."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Capacity Building & Institutional Strengthening */}
      <section id="capacity" className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="mb-4">
                <div className="inline-flex items-center bg-cyan-100 p-3 rounded-lg">
                  <GraduationCap className="text-cyan-700" size={28} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">Capacity Building & Institutional Strengthening</h2>
              <p className="text-cyan-700 font-medium mb-6">Enable people, embed processes, ensure continuity</p>
              <p className="text-lg text-slate-700 mb-8">
                Empower teams and strengthen institutions with tailored capacity-building programs and governance systems for sustained outcomes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-cyan-50 p-5 rounded-lg border-l-4 border-cyan-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Training & Workshops</h4>
                  <p className="text-slate-700">Role-based curricula, toolkits, simulations, and on-the-job enablement.</p>
                </div>
                <div className="bg-cyan-50 p-5 rounded-lg border-l-4 border-cyan-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Process Institutionalization</h4>
                  <p className="text-slate-700">Embedding systems, SOPs, and governance mechanisms for scale and continuity.</p>
                </div>
                <div className="bg-cyan-50 p-5 rounded-lg border-l-4 border-cyan-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Change Management</h4>
                  <p className="text-slate-700">Structured adoption strategies, communications, and leadership alignment.</p>
                </div>
                <div className="bg-cyan-50 p-5 rounded-lg border-l-4 border-cyan-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Capability Assessment</h4>
                  <p className="text-slate-700">Diagnostics to identify gaps, design learning journeys, and track progress.</p>
                </div>
              </div>
              <Link to="/contact" className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors">Discuss Capacity Building <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCjtXb6Z6ijxijJ1ssnZgu9Zt3U2QHEPwwY3oiS9aC0eg1WDYfln2xpMraFDN7SI1bDbnmBnCkrFi6ZMV9eOeEFODh38DXDPS_sB-LCtAH0HVA1EGuN1gKQ2HXxSVIrilGsc3EvPBA9Gw8hkM-ale68iNzeBMOa5tXt6MRKv_FzwjBXRSmNX-By3M79rc/s1900/Capacity%20Building.jpg" 
                  alt="Capability building and training" 
                  className="block w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stakeholder Consultations & Public Engagement */}
      <section id="consultations" className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="mb-4">
                <div className="inline-flex items-center bg-amber-100 p-3 rounded-lg">
                  <Users className="text-amber-700" size={28} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">Stakeholder Consultations & Public Engagement</h2>
              <p className="text-amber-700 font-medium mb-6">Co-create with communities for lasting adoption</p>
              <p className="text-lg text-slate-700 mb-8">
                Build trust, legitimacy, and develop better policies through strategic stakeholder engagement and comprehensive public consultation processes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Community Engagement</h4>
                  <p className="text-slate-700">Collaborating with stakeholders to ensure inclusivity and long-term success of initiatives.</p>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Advocacy</h4>
                  <p className="text-slate-700">Championing causes that align with organizational values and public good.</p>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Amplification</h4>
                  <p className="text-slate-700">Enhancing visibility and influence through strategic communication and outreach.</p>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-700">
                  <h4 className="font-semibold text-slate-900 mb-2">Stakeholder Engagement</h4>
                  <p className="text-slate-700">Building strong relationships with key stakeholders to ensure alignment and collaboration.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg mb-8 border border-amber-200">
                <h4 className="font-semibold text-slate-900 mb-2">Mission & Values Integration</h4>
                <p className="text-slate-700">Embedding core organizational values into policies and initiatives to drive purpose-driven impact.</p>
              </div>
              
              <Link to="/contact" className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors">Request Community Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Engagement Principles</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 h-6 w-6 rounded-full bg-amber-700 flex items-center justify-center text-white">1</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Inclusivity</h4>
                      <p className="text-slate-700">Ensuring all voices are heard and represented</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 h-6 w-6 rounded-full bg-amber-700 flex items-center justify-center text-white">2</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Transparency</h4>
                      <p className="text-slate-700">Open and honest communication with all stakeholders</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 h-6 w-6 rounded-full bg-amber-700 flex items-center justify-center text-white">3</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Sustainability</h4>
                      <p className="text-slate-700">Focus on long-term impact and community ownership</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 h-6 w-6 rounded-full bg-amber-700 flex items-center justify-center text-white">4</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Evidence-based</h4>
                      <p className="text-slate-700">Grounding advocacy in solid research and data</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Kalliope Consulting? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose Kalliope Consulting?</h2>
            <p className="text-lg text-slate-700 mt-4">
              We bring together deep expertise, proven methodologies, and a commitment to sustainable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-10 w-10 rounded-lg bg-kcl-blue/10 text-kcl-blue flex items-center justify-center mb-3">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Deep Expertise</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Cross-sector knowledge with practical experience in government, development, and enterprise contexts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-10 w-10 rounded-lg bg-kcl-blue/10 text-kcl-blue flex items-center justify-center mb-3">
                <CheckCircle size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Proven Methodologies</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Evidence-led frameworks, clear governance, and repeatable delivery models tailored to your objectives.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-10 w-10 rounded-lg bg-kcl-blue/10 text-kcl-blue flex items-center justify-center mb-3">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Measurable Outcomes</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Clear KPIs, robust monitoring, and continuous improvement to deliver lasting value at scale.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-10 w-10 rounded-lg bg-kcl-blue/10 text-kcl-blue flex items-center justify-center mb-3">
                <Users size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Stakeholder-Centric</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Collaborative engagement and co-creation ensure alignment, adoption, and sustained impact.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
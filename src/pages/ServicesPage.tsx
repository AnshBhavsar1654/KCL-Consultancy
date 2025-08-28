
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
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
              <div className="text-kcl-blue mb-4">
                <Search size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-kcl-blue mb-6">Research & Market Intelligence</h2>
              <p className="text-lg text-gray-700 mb-8">
                We provide in-depth research to help you make informed decisions, identify opportunities, and mitigate risks. Our expertise includes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Market Research</h4>
                  <p className="text-gray-600">Understanding market trends, customer behavior, and competitive landscapes.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Market Assessment</h4>
                  <p className="text-gray-600">Evaluating industry potential, market entry strategies, and business viability.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Field Work</h4>
                  <p className="text-gray-600">Conducting surveys, interviews, and on-ground data collection for accurate insights.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Policy Benchmarking</h4>
                  <p className="text-gray-600">Analyzing policies against industry standards to identify gaps and best practices.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-8">
                <h4 className="font-semibold text-kcl-blue mb-2">Regulatory Assessment</h4>
                <p className="text-gray-600">Reviewing compliance requirements, legal frameworks, and their impact on your business.</p>
              </div>
              
              <Link to="/contact" className="btn-primary inline-block">Request Research Services</Link>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Research Methodology</h3>
                <ol className="space-y-4">
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
              <div className="text-kcl-blue mb-4">
                <Cpu size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-kcl-blue mb-6">Digital Governance & Transformation</h2>
              <p className="text-lg text-gray-700 mb-8">
                Harness technology to enhance governance effectiveness, service delivery, and institutional accountability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Digital Strategy</h4>
                  <p className="text-gray-600">Roadmaps aligning technology investments with policy priorities and outcomes.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">GovTech Platforms</h4>
                  <p className="text-gray-600">Design and implementation of citizen-centric digital services and platforms.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Data & Analytics</h4>
                  <p className="text-gray-600">Building data pipelines, dashboards, and decision intelligence systems.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Security & Privacy</h4>
                  <p className="text-gray-600">Risk-based controls, privacy-by-design, and regulatory compliance.</p>
                </div>
              </div>
              <Link to="/contact" className="btn-primary inline-block">Start Digital Transformation</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Regulatory Advisory & Compliance */}
      <section id="regulatory" className="section-padding-top bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="text-kcl-blue mb-4">
                <ShieldCheck size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-kcl-blue mb-6">Regulatory Advisory & Compliance</h2>
              <p className="text-lg text-gray-700 mb-8">
                Navigate complex regulatory landscapes with confidence. Stay ahead of regulatory changes, minimize compliance risks, and build stakeholder trust.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Regulatory Mapping</h4>
                  <p className="text-gray-600">Comprehensive review of applicable laws, standards, and sectoral guidelines.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Compliance Frameworks</h4>
                  <p className="text-gray-600">Design of practical policies, SOPs, and audit mechanisms.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Risk & Controls</h4>
                  <p className="text-gray-600">Proactive risk identification and control implementation.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Regulatory Engagement</h4>
                  <p className="text-gray-600">Interface with regulators and industry bodies for clarity and alignment.</p>
                </div>
              </div>
              <Link to="/contact" className="btn-primary inline-block">Request Regulatory Advisory</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Development & Facilitation */}
      <section id="strategy" className="section-padding-top bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 lg:order-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Featured Case Study</h3>
                <p className="text-gray-600 mb-4">
                  We helped a national government develop a comprehensive healthcare policy framework, resulting in improved access to services for over 5 million citizens.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Healthcare Policy Reform</span>
                  <Link to="#strategy-case-studies" className="text-kcl-blue hover:underline">View Details</Link>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 lg:order-1">
              <div className="text-kcl-blue mb-4">
                <TrendingUp size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-kcl-blue mb-6">Strategy Development & Facilitation</h2>
              <p className="text-lg text-gray-700 mb-8">
                Success starts with a well-defined strategy. We assist organizations in shaping policies and frameworks for sustainable growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Policy Conceptualization & Formulation</h4>
                  <p className="text-gray-600">Designing effective policies based on global best practices and local needs.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Project Management</h4>
                  <p className="text-gray-600">Structuring, planning, and overseeing projects to ensure timely and efficient execution.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Gap Analysis & Reengineering</h4>
                  <p className="text-gray-600">Identifying areas of improvement and opportunities for optimization.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Organizational Restructuring</h4>
                  <p className="text-gray-600">Streamlining operations and improving organizational efficiency.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Domain Knowledge</h4>
                  <p className="text-gray-600">Expertise across industries to craft tailored strategies.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Framework + Systems + Technology + Data</h4>
                  <p className="text-gray-600">Integrating cutting-edge frameworks and technologies for enhanced decision-making.</p>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary inline-block">Request Strategy Services</Link>
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
              <div className="text-kcl-blue mb-4">
                <BarChart3 size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-kcl-blue mb-6">Program Delivery & Performance</h2>
              <p className="text-lg text-gray-700 mb-8">
                Transforming strategy into action with seamless execution and effective governance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Program Implementation</h4>
                  <p className="text-gray-600">Deploying initiatives that drive measurable outcomes with clear milestones and accountability.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Stakeholder Management</h4>
                  <p className="text-gray-600">Ensuring effective collaboration between key players and maintaining alignment with objectives.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Capacity Development</h4>
                  <p className="text-gray-600">Building capabilities within organizations for sustainable growth and self-sufficiency.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Quality Assurance</h4>
                  <p className="text-gray-600">Maintaining high standards across all initiatives through rigorous quality control processes.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-8">
                <h4 className="font-semibold text-kcl-blue mb-2">MIS System</h4>
                <p className="text-gray-600">Implementing robust Management Information Systems for data-driven operations and decision-making.</p>
              </div>
              
              <Link to="/contact" className="btn-primary inline-block">Request Implementation Services</Link>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Implementation Approach</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">1</div>
                    <div>
                      <h4 className="font-semibold">Clear Roadmap</h4>
                      <p className="text-gray-600">Detailed action plans with defined milestones</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">2</div>
                    <div>
                      <h4 className="font-semibold">Stakeholder Alignment</h4>
                      <p className="text-gray-600">Engaging all relevant parties throughout the process</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">3</div>
                    <div>
                      <h4 className="font-semibold">Resource Optimization</h4>
                      <p className="text-gray-600">Efficient allocation of time, talent and budgets</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">4</div>
                    <div>
                      <h4 className="font-semibold">Continuous Monitoring</h4>
                      <p className="text-gray-600">Regular tracking of progress against KPIs</p>
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
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Our Evaluation Framework</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-bold text-kcl-blue mr-2">•</span>
                    <span>Clearly defined metrics aligned with objectives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-kcl-blue mr-2">•</span>
                    <span>Regular data collection through multiple channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-kcl-blue mr-2">•</span>
                    <span>Sophisticated analysis using both quantitative and qualitative approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-kcl-blue mr-2">•</span>
                    <span>Actionable insights that drive continuous improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-kcl-blue mr-2">•</span>
                    <span>Transparent reporting to all stakeholders</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-8 lg:order-1">
              <div className="text-kcl-blue mb-4">
                <PieChart size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-kcl-blue mb-6">Programme Design & Evaluation</h2>
              <p className="text-lg text-gray-700 mb-8">
                Design, launch, and measure high-impact programs with robust monitoring and evaluation frameworks that ensure sustainable results.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Monitoring & Evaluation</h4>
                  <p className="text-gray-600">Implementing a 360-degree monitoring approach to track progress and ensure objectives are met.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Impact Assessment</h4>
                  <p className="text-gray-600">Measuring success and refining strategies based on data-driven insights and outcomes.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Performance Management</h4>
                  <p className="text-gray-600">Setting performance standards and evaluating against global best practices.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-kcl-blue mb-2">Capability Assessment</h4>
                  <p className="text-gray-600">Identifying organizational strengths and areas for development to build capacity.</p>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary inline-block">Request Evaluation Services</Link>
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
              <div className="text-kcl-blue mb-4">
                <GraduationCap size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-kcl-blue mb-6">Capacity Building & Institutional Strengthening</h2>
              <p className="text-lg text-gray-700 mb-8">
                Empower teams and strengthen institutions with tailored capacity-building programs and governance systems for sustained outcomes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Training & Workshops</h4>
                  <p className="text-gray-600">Role-based curricula, toolkits, simulations, and on-the-job enablement.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Process Institutionalization</h4>
                  <p className="text-gray-600">Embedding systems, SOPs, and governance mechanisms for scale and continuity.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Change Management</h4>
                  <p className="text-gray-600">Structured adoption strategies, communications, and leadership alignment.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Capability Assessment</h4>
                  <p className="text-gray-600">Diagnostics to identify gaps, design learning journeys, and track progress.</p>
                </div>
              </div>
              <Link to="/contact" className="btn-primary inline-block">Discuss Capacity Building</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stakeholder Consultations & Public Engagement */}
      <section id="consultations" className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="text-kcl-blue mb-4">
                <Users size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-kcl-blue mb-6">Stakeholder Consultations & Public Engagement</h2>
              <p className="text-lg text-gray-700 mb-8">
                Build trust, legitimacy, and develop better policies through strategic stakeholder engagement and comprehensive public consultation processes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Community Engagement</h4>
                  <p className="text-gray-600">Collaborating with stakeholders to ensure inclusivity and long-term success of initiatives.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Advocacy</h4>
                  <p className="text-gray-600">Championing causes that align with organizational values and public good.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Amplification</h4>
                  <p className="text-gray-600">Enhancing visibility and influence through strategic communication and outreach.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-kcl-blue mb-2">Stakeholder Engagement</h4>
                  <p className="text-gray-600">Building strong relationships with key stakeholders to ensure alignment and collaboration.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg mb-8">
                <h4 className="font-semibold text-kcl-blue mb-2">Mission & Values Integration</h4>
                <p className="text-gray-600">Embedding core organizational values into policies and initiatives to drive purpose-driven impact.</p>
              </div>
              
              <Link to="/contact" className="btn-primary inline-block">Request Community Services</Link>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Engagement Principles</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">1</div>
                    <div>
                      <h4 className="font-semibold">Inclusivity</h4>
                      <p className="text-gray-600">Ensuring all voices are heard and represented</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">2</div>
                    <div>
                      <h4 className="font-semibold">Transparency</h4>
                      <p className="text-gray-600">Open and honest communication with all stakeholders</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">3</div>
                    <div>
                      <h4 className="font-semibold">Sustainability</h4>
                      <p className="text-gray-600">Focus on long-term impact and community ownership</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 h-6 w-6 rounded-full bg-kcl-blue flex items-center justify-center text-white">4</div>
                    <div>
                      <h4 className="font-semibold">Evidence-based</h4>
                      <p className="text-gray-600">Grounding advocacy in solid research and data</p>
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
                title="Public Health Advocacy Campaign"
                client="National Health Coalition"
                challenge="A coalition of health organizations needed to advocate for policy changes to address a growing public health crisis but faced opposition from industry groups and public misconceptions."
                solution="We developed a comprehensive advocacy strategy including evidence-based messaging, stakeholder mapping and engagement, coalition building, and targeted communication campaigns."
                results="The campaign successfully influenced policy changes at both national and local levels, leading to new regulations that are projected to improve public health outcomes for millions of citizens."
              />
              <CaseStudy 
                title="Community Engagement for Infrastructure Development"
                client="Urban Development Authority"
                challenge="A major urban infrastructure project faced significant community opposition and delays due to inadequate stakeholder engagement in the planning process."
                solution="We implemented a comprehensive community engagement program with public consultations, co-design workshops, transparent information sharing, and ongoing feedback mechanisms."
                results="The project gained community support and with the co-operation of community leaders, the district administration could resume the work."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Kalliope Consulting? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose Kalliope Consulting?</h2>
            <p className="text-lg text-slate-600 mt-4">
              We bring together deep expertise, proven methodologies, and a commitment to sustainable impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <ShieldCheck className="text-slate-700 mr-2" size={20} />
                <h3 className="font-semibold text-slate-900">Deep Expertise</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cross-sector knowledge with practical experience in government, development, and enterprise contexts.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <CheckCircle className="text-slate-700 mr-2" size={20} />
                <h3 className="font-semibold text-slate-900">Proven Methodologies</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Evidence-led frameworks, clear governance, and repeatable delivery models tailored to your objectives.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <TrendingUp className="text-slate-700 mr-2" size={20} />
                <h3 className="font-semibold text-slate-900">Measurable Outcomes</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear KPIs, robust monitoring, and continuous improvement to deliver lasting value at scale.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Users className="text-slate-700 mr-2" size={20} />
                <h3 className="font-semibold text-slate-900">Stakeholder-Centric</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
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

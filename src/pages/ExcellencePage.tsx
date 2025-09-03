
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { Heart, Building, Cpu } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

const ExcellencePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the correct section based on hash
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Check if we're on a specific route
      const path = location.pathname;
      if (path.includes('healthcare')) {
        const element = document.getElementById('healthcare');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else if (path.includes('urban')) {
        const element = document.getElementById('urban');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else if (path.includes('digital')) {
        const element = document.getElementById('digital');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  return (
    <div className="pt-10">
      {/* Healthcare 2.0 */}
      <section id="healthcare" className="section-padding-top bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center mb-8">
                <Heart size={32} className="text-kcl-blue mr-4" />
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Healthcare 2.0</h2>
              </div>
              
              <p className="text-lg text-slate-700 mb-8">
                Revolutionizing healthcare with innovative models, technology-driven solutions, and patient-centric approaches. We focus on:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Digital Health & Telemedicine</h4>
                  <p className="text-slate-700">Enhancing access to healthcare through digital transformation and remote care solutions.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Health Policy & Systems Strengthening</h4>
                  <p className="text-slate-700">Crafting policies that improve healthcare efficiency, equity, and outcomes for all populations.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Data-Driven Healthcare</h4>
                  <p className="text-slate-700">Leveraging analytics for precision medicine, better health interventions, and improved resource allocation.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Knowledge Hub</h4>
                  <p className="text-slate-700">Serving as a center for best practices, innovation, and industry insights in the healthcare sector.</p>
                </div>
              </div>
              
              <div className="bg-kcl-blue text-white rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Our Healthcare Impact</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl md:text-5xl font-bold mb-2">50M+</div>
                    <p className="text-lg">Lives touched through our healthcare initiatives</p>
                  </div>
                  
                  <div>
                    <div className="text-3xl md:text-5xl font-bold mb-2">30%</div>
                    <p className="text-lg">Average improvement in healthcare access metrics</p>
                  </div>
                  
                  <div>
                    <div className="text-3xl md:text-5xl font-bold mb-2">75%</div>
                    <p className="text-lg">Cost reduction through digital health solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Featured Case Study</h3>
                <h4 className="font-medium text-slate-900 mb-2">National Telemedicine Network</h4>
                <p className="text-slate-700 mb-4">
                  We helped a national government establish a comprehensive telemedicine network connecting rural areas to specialist care, improving access for over 15 million people in rural India.
                </p>
                {/* <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span>Impact</span>
                    <span>95% satisfaction rate</span>
                  </div>
                </div> */}
                <h4 className="font-medium text-slate-900 mb-2">Healthcare Policy Reform</h4>
                <p className="text-slate-700 mb-4">
                  Our team supported the Ministry of Health in redesigning their health insurance framework, increasing coverage while reducing administrative costs.
                </p>
                {/* <div className="flex justify-between text-sm">
                  <span>Impact</span>
                  <span>27% increase in coverage</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Urban Rejuvenation */}
      <section id="urban" className="section-padding-top bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-slate-900 mb-2">Smart Cities Development</h4>
                  <p className="text-slate-700">
                    Implementing technology-driven solutions to enhance urban life, optimize resources, and improve service delivery.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-slate-900 mb-2">Sustainable Urban Planning</h4>
                  <p className="text-slate-700">
                    Designing environmentally conscious, people-centric cities that balance development with preservation of natural resources.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-slate-900 mb-2">Infrastructure & Mobility</h4>
                  <p className="text-slate-700">
                    Enhancing public spaces, transportation networks, and urban ecosystems to create more livable and accessible cities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="flex items-center mb-8">
                <Building size={32} className="text-kcl-blue mr-4" />
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Urban Rejuvenation</h2>
              </div>
              
              <p className="text-lg text-slate-700 mb-8">
                Transforming cities into vibrant, sustainable, and livable spaces through strategic planning and smart infrastructure. Our approach focuses on human-centered design that balances technological innovation with environmental sustainability.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Featured Project: Riverside District Transformation</h3>
                <p className="text-slate-700 mb-4">
                  We partnered with a mid-sized city in Maharashtra to transform an abandoned industrial riverside area into a thriving mixed-use district. The project incorporated green spaces, affordable housing, commercial zones, and integrated public transport.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-bold text-kcl-blue">120 acres</div>
                    <p className="text-sm">Revitalized</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-bold text-kcl-blue">3,000+</div>
                    <p className="text-sm">New Housing Units</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-bold text-kcl-blue">5,000+</div>
                    <p className="text-sm">Jobs Created</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-semibold text-slate-900 mb-2">Environment and Social Risks</h4>
                  <p className="text-slate-700">Mitigating risks and ensuring sustainable urban development through comprehensive impact assessments.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-semibold text-slate-900 mb-2">Design Standards & Guidelines</h4>
                  <p className="text-slate-700">Setting industry benchmarks for urban growth that balance innovation with cultural heritage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI + Digital Transformation */}
      <section id="digital" className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="flex items-center mb-8">
                <Cpu size={32} className="text-kcl-blue mr-4" />
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">AI + Digital Transformation</h2>
              </div>
              
              <p className="text-lg text-slate-700 mb-8">
                Harnessing the power of artificial intelligence and digital technology to drive innovation and efficiency across organizations. We help organizations navigate the complex digital landscape with strategic solutions that drive real business value.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">AI-Driven Decision Making</h4>
                  <p className="text-slate-700">Empowering organizations with predictive analytics, automation, and data-driven insights.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Digital Transformation Strategies</h4>
                  <p className="text-slate-700">Helping businesses and governments transition into the digital era with comprehensive roadmaps.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Cybersecurity & Data Ethics</h4>
                  <p className="text-slate-700">Ensuring safe and responsible adoption of digital solutions with robust security frameworks.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Digital Transformation Framework</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-kcl-blue flex items-center justify-center text-white font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900">Assess</h4>
                      <p className="text-slate-700">Comprehensive evaluation of current digital maturity, capabilities, and opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-kcl-blue flex items-center justify-center text-white font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900">Envision</h4>
                      <p className="text-slate-700">Co-creating a clear digital vision and strategy aligned with organizational goals</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-kcl-blue flex items-center justify-center text-white font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900">Roadmap</h4>
                      <p className="text-slate-700">Developing a practical implementation plan with prioritized initiatives</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-kcl-blue flex items-center justify-center text-white font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900">Transform</h4>
                      <p className="text-slate-700">Executing the digital initiatives with agile methodology and change management</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-kcl-blue flex items-center justify-center text-white font-semibold">5</div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900">Optimize</h4>
                      <p className="text-slate-700">Continuous improvement based on outcomes and emerging technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">IT Advisory Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-kcl-blue mr-2">•</span>
                    <span>Technology Strategy & Architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kcl-blue mr-2">•</span>
                    <span>Enterprise Systems Assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kcl-blue mr-2">•</span>
                    <span>IT Governance & Operating Models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kcl-blue mr-2">•</span>
                    <span>Technology Vendor Selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-kcl-blue mr-2">•</span>
                    <span>IT Cost Optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-kcl-blue text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Success Story</h3>
                <h4 className="font-medium mb-2">Public Sector Digital Transformation</h4>
                <p className="text-gray-200 mb-4">
                  We helped a government department in Delhi modernize its citizen services platform, reducing processing time by 70% and increasing citizen satisfaction scores by 85%.
                </p>
                <div className="border-t border-white/20 pt-4 mt-4">
                  <h4 className="font-medium mb-2">AI-Powered Healthcare Analytics</h4>
                  <p className="text-gray-200">
                    Our AI solution helped a healthcare provider in Mumbai improve diagnostic accuracy by 40% and reduce administrative workload by 60% for medical professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExcellencePage;

import SectionHeading from '../../components/SectionHeading';
import { Link } from 'react-router-dom';
import { Activity, ClipboardList, Shield, ArrowLeft, ArrowRight } from 'lucide-react';

// Import images
import NutritionImg from '../../imgs/RBSK.png';
import NcdImg from '../../imgs/NCD.png';
import ScreeningImg from '../../imgs/NCD.png';

const HealthcareEvidencePrioritisation = () => {
  return (
    <div className="pt-4">
      <section className="section-padding-top bg-white pb-20">
        <div className="container max-w-5xl">
          <div className="mb-6">
            <Link
              to="/excellence#healthcare"
              className="inline-flex items-center text-sm text-kcl-blue hover:underline"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Healthcare 2.0
            </Link>
          </div>

          <div className="rounded-xl border border-kcl-blue/20 bg-kcl-blue/5 p-6 md:p-8 mb-8">
            <div className="flex items-start">
              <div className="mr-4 mt-1 hidden sm:block">
                <div className="h-12 w-12 rounded-lg bg-kcl-blue/10 text-kcl-blue flex items-center justify-center">
                  <Activity size={24} />
                </div>
              </div>
              <div className="flex-1">
                <SectionHeading title="Evidence-based Health Prioritisation" />
                <p className="text-slate-700 text-lg mt-2">
                  The emphasis is on determining what to prioritise and how to prioritise within the state’s health agenda. Using data-driven methods, comparative analysis, and contextual insights, the team highlights emerging challenges such as malnutrition, anaemia, and non-communicable diseases. The output enables governments to allocate resources effectively and time interventions for maximum impact.
                </p>
              </div>
            </div>
          </div>

          {/* Task 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-7">
              <div className="flex items-start">
                <div className="text-[80px] md:text-[110px] leading-none font-bold text-slate-200 mr-4 select-none">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">Nutrition</h3>
                  <p className="text-slate-700 mt-2">
                    Undertook district-wise mapping of nutrition indicators from NFHS-5 to identify underperforming districts on malnutrition and anaemia. Helped prioritise regions most in need of targeted interventions to improve nutritional outcomes.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/excellence/healthcare/evidence-prioritisation/nutrition"
                      className="inline-flex items-center px-4 py-2 rounded-md bg-kcl-blue text-white hover:bg-kcl-blue/90 transition"
                    >
                      Read more <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-gray-200 shadow-inner">
                <img
                  src={NutritionImg}
                  alt="Nutrition Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Task 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-gray-200 shadow-inner">
                <img
                  src={NcdImg}
                  alt="NCD Burden and Action Plan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Assessment of NCD Burden in the State and Action Plan
                  </h3>
                  <p className="text-slate-700 mt-2">
                    Assessed the status of Non-Communicable Diseases (NCDs) in the state and proposed an action plan for implementing a comprehensive health screening policy. Emphasised prevention and early detection to reduce long-term disease burden.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/excellence/healthcare/evidence-prioritisation/ncd"
                      className="inline-flex items-center px-4 py-2 rounded-md bg-kcl-blue text-white hover:bg-kcl-blue/90 transition"
                    >
                      Read more <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="text-[80px] md:text-[110px] leading-none font-bold text-slate-200 ml-4 select-none">
                  2
                </div>
              </div>
            </div>
          </div>

          {/* Task 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-start">
                <div className="text-[80px] md:text-[110px] leading-none font-bold text-slate-200 mr-4 select-none">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Mandatory Health Screening for Government Workforce
                  </h3>
                  <p className="text-slate-700 mt-2">
                    Recommended the introduction of mandatory health screening for Gujarat’s government workforce. Designed this intervention to enable early detection of chronic conditions, reduce future health risks, and improve health-seeking behaviour across the workforce.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/excellence/healthcare/evidence-prioritisation/mandatory-screening"
                      className="inline-flex items-center px-4 py-2 rounded-md bg-kcl-blue text-white hover:bg-kcl-blue/90 transition"
                    >
                      Read more <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-gray-200 shadow-inner">
                <img
                  src={ScreeningImg}
                  alt="Mandatory Health Screening"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareEvidencePrioritisation;
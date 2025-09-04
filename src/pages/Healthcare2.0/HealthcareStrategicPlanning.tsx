import SectionHeading from '../../components/SectionHeading';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, ArrowLeft, ArrowRight } from 'lucide-react';

// Import images
import ViksitImg from '../../imgs/VG_page-0001.jpg';
import ImrImg from '../../imgs/IMG_5712.jpg';

const HealthcareStrategicPlanning = () => {
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
                  <Target size={24} />
                </div>
              </div>
              <div className="flex-1">
                <SectionHeading title="Strategic Planning & Target Setting" />
                <p className="text-slate-700 text-lg mt-2">
                  This track focuses on translating long-term health visions into actionable medium-term milestones. By applying forecasting, target mapping, and evidence-based analysis, the team identifies the most critical goals and charts realistic pathways for achieving them. The work provides policymakers with clear direction and measurable priorities to guide investments and interventions.
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
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Viksit Gujarat@2047 Target Mapping
                  </h3>
                  <p className="text-slate-700 mt-2">
                    Conducted a systematic mapping of health-related targets aligned to Viksit Gujarat@2047 vision, identifying those that need prioritisation by 2030
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/excellence/healthcare/strategic-planning/viksit-2047"
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
                  src={ViksitImg}
                  alt="Viksit Gujarat@2047 Target Mapping"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Task 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-gray-200 shadow-inner">
                <img
                  src={ImrImg}
                  alt="IMR Forecasting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">IMR</h3>
                  <p className="text-slate-700 mt-2">
                    Carried out trend analysis and forecasting of Infant Mortality Rate (IMR) targets for Gujarat
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/excellence/healthcare/strategic-planning/imr"
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
        </div>
      </section>
    </div>
  );
};

export default HealthcareStrategicPlanning;
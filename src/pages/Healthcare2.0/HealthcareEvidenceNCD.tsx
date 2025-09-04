import SectionHeading from '../../components/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowLeft, Activity } from 'lucide-react';

const HealthcareEvidenceNCD = () => {
  return (
    <div className="pt-4">
      <section className="section-padding-top bg-white pb-20">
        <div className="container max-w-4xl">
          <div className="mb-6">
            <Link to="/excellence/healthcare/evidence-prioritisation" className="inline-flex items-center text-sm text-kcl-blue hover:underline">
              <ArrowLeft size={16} className="mr-2" /> Back to Evidence-based Prioritisation
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
                <SectionHeading title="Assessment of NCD Burden in the State and Action Plan" />
              </div>
            </div>
          </div>

          <article className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="space-y-5 text-slate-800 leading-relaxed">
              <p>
                Non-communicable diseases are a growing cause of morbidity and mortality in Gujarat, creating long-term health and economic challenges. Preventive strategies, particularly early detection through population-based screening, have proven effective in reducing the burden of NCDs in several states. For Gujarat, the critical question was when and how such an initiative should be rolled out.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p>
                The team assessed Gujarat’s projected NCD burden for 2025 and compared it with the levels at which states like Kerala, Tamil Nadu, and Andhra Pradesh launched their door-to-door screening programmes. The analysis indicated that Gujarat was entering a similar risk zone, making this a timely moment to initiate comprehensive screening. Recommendations also included instituting mandatory health screening for the government workforce as a model for early detection and preventive care.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p>
                The findings provided clear justification for early intervention, equipping the state with evidence to act decisively on NCDs and reduce the risk of escalating disease burden in the years ahead.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HealthcareEvidenceNCD;

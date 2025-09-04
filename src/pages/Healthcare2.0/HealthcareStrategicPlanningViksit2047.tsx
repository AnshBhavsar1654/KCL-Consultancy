import SectionHeading from '../../components/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';

const HealthcareStrategicPlanningViksit2047 = () => {
  return (
    <div className="pt-4">
      <section className="section-padding-top bg-white pb-20">
        <div className="container max-w-4xl">
          <div className="mb-6">
            <Link to="/excellence/healthcare/strategic-planning" className="inline-flex items-center text-sm text-kcl-blue hover:underline">
              <ArrowLeft size={16} className="mr-2" /> Back to Strategic Planning
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
                <SectionHeading title="Viksit Gujarat@2047 Target Mapping" />
              </div>
            </div>
          </div>

          <article className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="space-y-5 text-slate-800 leading-relaxed">
              <p>
                Health-related targets are central to Gujarat’s long-term vision under Viksit Gujarat@2047. Yet, with multiple commitments spanning maternal health, child health, nutrition, and system strengthening, it was important to identify which targets required acceleration in the near term. Prioritisation was necessary to avoid dilution of efforts and to ensure that the state’s immediate actions were aligned with its broader health agenda.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p>
                The team conducted a systematic mapping of the health-related commitments outlined in the vision document. Each target was assessed for relevance, feasibility, and urgency, allowing them to be categorised into those requiring urgent acceleration and those that could be pursued on a longer horizon. This exercise brought clarity on where policy attention and resources must be concentrated over the next five years.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p>
                The exercise gave policymakers a clear, evidence-backed roadmap, ensuring resources are channelled toward the most pressing challenges while aligning short-term actions with Gujarat’s long-term health goals.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HealthcareStrategicPlanningViksit2047;
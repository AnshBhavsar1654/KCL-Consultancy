import SectionHeading from '../../components/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardList } from 'lucide-react';

const HealthcareEvidenceNutrition = () => {
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
                  <ClipboardList size={24} />
                </div>
              </div>
              <div className="flex-1">
                <SectionHeading title="Mapping Gujarat’s Nutrition Challenges" />
              </div>
            </div>
          </div>

          <article className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="space-y-5 text-slate-800 leading-relaxed">
              <p>
                Malnutrition and anaemia remain persistent public health challenges in Gujarat, undermining progress in child growth, maternal health, and overall human development. Despite improvements in service delivery, district-level variations often mask underperformance, making it essential to identify where problems are concentrated to guide corrective action.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p>
                The team carried out a systematic mapping of NFHS-5 nutrition indicators across districts, with a focus on malnutrition and anaemia. By comparing relative performance, underperforming districts were identified and prioritised. This exercise provided a disaggregated view of the state’s nutrition profile, ensuring that the burden of poor outcomes was not diluted within state-level averages.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p>
                The findings equipped the government with sharper visibility into district-level disparities, enabling targeted interventions in the worst-affected areas and strengthening Gujarat’s fight against malnutrition and anaemia.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HealthcareEvidenceNutrition;

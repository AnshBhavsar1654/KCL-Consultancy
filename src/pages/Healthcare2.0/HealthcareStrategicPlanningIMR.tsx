import SectionHeading from '../../components/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';

const HealthcareStrategicPlanningIMR = () => {
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
                  <TrendingUp size={24} />
                </div>
              </div>
              <div className="flex-1">
                <SectionHeading title="Trend Analysis and Forecasting of IMR" />
              </div>
            </div>
          </div>

          <article className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="space-y-5 text-slate-800 leading-relaxed">
              <p>
                Infant mortality is a critical indicator of both health system performance and overall development, reflecting outcomes in nutrition, maternal care, and living conditions. While Gujarat has made progress in reducing IMR, persistent rural–urban disparities and preventable infant deaths remain a concern. Achieving the state’s 2030 targets required a closer understanding of trends and underlying determinants.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p>
                The team conducted a structured analysis of infant deaths in Gujarat, identifying major contributing factors such as low birth weight, neonatal infections, and birth-related complications. Using statistical forecasting and regression-based techniques, including ARIMA modelling, future trajectories of IMR were projected. A variable index was also constructed to link determinants such as maternal mortality, fertility, institutional delivery, and education to IMR outcomes.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p>
                The insights highlighted where targeted interventions would yield the greatest gains, allowing Gujarat to sharpen its focus on preventable causes of infant deaths and strengthen its trajectory toward the 2030 targets.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HealthcareStrategicPlanningIMR;

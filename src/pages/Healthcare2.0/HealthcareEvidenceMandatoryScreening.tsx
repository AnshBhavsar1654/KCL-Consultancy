import SectionHeading from '../../components/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const HealthcareEvidenceMandatoryScreening = () => {
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
                  <Shield size={24} />
                </div>
              </div>
              <div className="flex-1">
                <SectionHeading title="Mandatory Health Screening for Government Workforce" />
              </div>
            </div>
          </div>

          <article className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="space-y-5 text-slate-800 leading-relaxed">
              <p>
                Strengthening Gujarat’s health system required a forward-looking framework that combined political vision, best practices, and stakeholder perspectives. With rising challenges such as workforce shortages, growing demand for digital health, and climate-linked risks, it was necessary to craft a comprehensive set of recommendations that reflected both local realities and global lessons.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p>
                The team incorporated insights from the Gujarat Manifesto 2022, national and international best practices, and extensive stakeholder consultations. Recommendations were structured around strengthening human resources, expanding digital health, integrating AYUSH, and improving disease surveillance. Additional measures were outlined to address equitable service delivery, elderly care, mental health, and climate resilience, ensuring a holistic approach to system strengthening.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p>
                The recommendations offered policymakers a balanced, evidence-informed roadmap to modernise Gujarat’s health system and deliver more equitable and resilient healthcare outcomes.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HealthcareEvidenceMandatoryScreening;

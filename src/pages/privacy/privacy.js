import React from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const Privacy = () => {
  return (
    <>
      <PreHeader />
      <Header />
      <section className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-emerald-100">
            <h1 className="text-4xl font-bold text-emerald-700 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-emerald-600 mb-3">1. Introduction</h2>
                <p className="leading-relaxed">
                  Welcome to Hurudzai AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our agricultural AI platform and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-600 mb-3">2. Information We Collect</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">2.1 Personal Information</h3>
                    <p className="leading-relaxed">
                      We may collect personal information that you provide to us, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Location data for agricultural predictions</li>
                      <li>Farm and crop information</li>
                      <li>Voice recordings when using voice search features</li>
                      <li>SMS queries and responses</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">2.2 Usage Data</h3>
                    <p className="leading-relaxed">
                      We automatically collect information about how you interact with our platform, including:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Search queries and preferences</li>
                      <li>Feature usage patterns</li>
                      <li>Device information and browser type</li>
                      <li>IP address and access times</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-600 mb-3">3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-3">We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>To provide and improve our agricultural AI services (crop prediction, fertilizer recommendations, disease detection, weather forecasting)</li>
                  <li>To process and respond to your queries via SMS, voice, or text</li>
                  <li>To personalize your experience and provide relevant agricultural insights</li>
                  <li>To communicate with you about our services, updates, and support</li>
                  <li>To analyze usage patterns and improve our platform's functionality</li>
                  <li>To ensure the security and integrity of our services</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-600 mb-3">4. Data Sharing and Disclosure</h2>
                <p className="leading-relaxed mb-3">We do not sell your personal information. We may share your information in the following circumstances:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Service Providers:</strong> We may share data with third-party service providers who assist in operating our platform (e.g., cloud hosting, SMS services, AI processing)</li>
                  <li><strong>Ministry of Agriculture:</strong> As supported by the Ministry of Agriculture and Farmer's Welfare, we may share aggregated, anonymized data for agricultural research and policy development</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale, your information may be transferred as part of the transaction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-600 mb-3">5. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-600 mb-3">6. Your Rights and Choices</h2>
                <p className="leading-relaxed mb-3">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information we hold</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
                  <li><strong>Opt-out:</strong> Opt-out of certain data collection or marketing communications</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  To exercise these rights, please contact us at <a href="mailto:fmakeba@cut.ac.zw" className="text-emerald-600 hover:underline">fmakeba@cut.ac.zw</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-600 mb-3">7. Third-Party Services</h2>
                <p className="leading-relaxed">
                  Our platform may integrate with third-party services (e.g., OpenAI for AI processing, SMS gateways). These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-600 mb-3">8. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-600 mb-3">9. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-600 mb-3">10. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-3 p-4 bg-emerald-50 rounded-lg">
                  <p className="font-medium text-gray-800">Hurudzai Software Team</p>
                  <p className="text-gray-700">Email: <a href="mailto:fmakeba@cut.ac.zw" className="text-emerald-600 hover:underline">fmakeba@cut.ac.zw</a></p>
                  <p className="text-gray-700 mt-2">Supported by Ministry of Agriculture and Farmer's Welfare</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacy;


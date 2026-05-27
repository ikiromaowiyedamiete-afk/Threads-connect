function Terms() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Terms & Services
          </h1>
          <p className="text-gray-600">
            Please read these terms carefully before using Threads Connect.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Introduction
            </h2>
            <p>
              Threads Connect is a platform that connects customers with professional tailors
              for custom clothing services. By using this platform, you agree to follow these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. User Accounts
            </h2>
            <p>
              Users must provide accurate information when creating an account.
              You are responsible for maintaining the security of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. Tailor Services
            </h2>
            <p>
              Tailors are independent service providers. Threads Connect does not guarantee
              the quality of work but provides a platform for connection and communication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. Payments
            </h2>
            <p>
              Payment terms are agreed directly between customers and tailors.
              Future updates may include secure payment integration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. User Responsibilities
            </h2>
            <p>
              Users must not misuse the platform, upload harmful content, or engage in fraudulent activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              6. Changes to Terms
            </h2>
            <p>
              We may update these terms at any time. Continued use of the platform means you accept the changes.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}

export default Terms;
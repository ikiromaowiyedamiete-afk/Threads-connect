function Features() {
    const features = [
        "Verified Tailors",
        "Easy Booking",
        "Custom Designs",
        "Secure Payments",
    ];

    return (
        <section className="py-20 px-8">

            <h2 className="tex-3xl font-bold text-center mb-10">
                Why Choose Us
            </h2>
            <div className="grid md:grid-cols-4 gap-6">

                {features.map((item, index) => (
                    <div key={index} className="bg-white shadow rounded-xl p-6 text-center">
                        <h3 className="font-semibold">
                            {item}
                            </h3>
                        </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
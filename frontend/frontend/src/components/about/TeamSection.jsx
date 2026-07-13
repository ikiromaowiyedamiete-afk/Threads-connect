function TeamSection() {
    return ( 
        <section className="bg-stone-100 py-20 px-6">

            <h2 className="text-3xl font-bold text-center mb-10">
                Who We Serve 
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-bold mb-3">
                        Customers
                    </h3>

                    <p>
                        Find trusted tailors and create custom outfits .
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-bold mb-3">
                        Tailors
                    </h3>

                    <p>
                        Showcase your skills and grow your client base.
                    </p>
                </div>
                    
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-bold mb-3">
                        Fashion Creators 
                    </h3>

                    <p>
                        Share designs and connect with professionals 
                    </p>
                </div>
            </div>
        </section>
    );
}
export default TeamSection;
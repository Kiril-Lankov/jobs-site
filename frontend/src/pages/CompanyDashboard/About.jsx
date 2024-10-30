const About = () => {
    return (
        <div className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg text-center">
            {/* Section: Our Mission  */}
            <section className="my-12">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                    At Job Portal, our mission is to connect talented individuals with their dream jobs and provide companies
                    with the best candidates. We believe in the power of people and are committed to making the hiring process
                    easier, faster, and more effective for everyone involved.
                </p>
            </section>

            {/*  Section: Our Team  */}
            <section className="my-12">
                <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                    <div className="text-center">
                        <img src="https://placehold.co/150x150" alt="Team member photo" className="rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p className="text-gray-600">CEO & Founder</p>
                    </div>

                    <div className="text-center">
                        <img src="https://placehold.co/150x150" alt="Team member photo" className="rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Jane Smith</h3>
                        <p className="text-gray-600">Chief Marketing Officer</p>
                    </div>

                    <div className="text-center">
                        <img src="https://placehold.co/150x150" alt="Team member photo" className="rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Alex Johnson</h3>
                        <p className="text-gray-600">Head of Engineering</p>
                    </div>
                </div>
            </section>

            {/*  Section: Our History  */}
            <section className="my-12">
                <h2 className="text-2xl font-bold mb-4">Our History</h2>
                <p className="text-lg leading-relaxed">
                    Founded in 2022, Job Portal started with a simple goal: to create a platform where companies and job seekers
                    can connect easily. Over the years, we have grown to become one of the most trusted job platforms, helping
                    thousands of people find their perfect career match and enabling companies to hire top talent efficiently.
                </p>
            </section>
        </div>
    )
}

export default About;
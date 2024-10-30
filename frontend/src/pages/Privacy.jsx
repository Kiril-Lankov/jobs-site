const Privacy = () => {
    return (
        <div className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg text-center">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>

            {/*  Section: Our Mission  */}
            <section className="my-12">
                <h2 className="text-2xl font-bold mb-4">Общи Условия</h2>
                <p className="text-lg leading-relaxed">
                    At Job Portal, our mission is to connect talented individuals with their dream jobs and provide companies
                    with the best candidates. We believe in the power of people and are committed to making the hiring process
                    easier, faster, and more effective for everyone involved.
                </p>
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

export default Privacy
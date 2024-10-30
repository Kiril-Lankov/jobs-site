const CompanyProfile = () => {
    return (
        <section className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg text-center">
            <a href="company-dashboard.html" className="inline-block px-8 py-4 bg-[#004AAD] text-white font-semibold rounded hover:bg-blue-700">Обратно в Профила</a>
            <p></p>
            <h1 className="text-4xl font-bold mb-8">Профил на Компанията</h1>

            {/* <!-- Profile Picture --> */}
            <div className="mb-8">
                <label htmlFor="profile-picture">
                    <img id="profile-pic-preview" src="https://placehold.co/150x150" alt="Profile Picture" className="rounded-full mx-auto mb-4 cursor-pointer hover:opacity-80" />
                </label>
                <input type="file" id="profile-picture" className="hidden" accept="image/*" />
            </div>

            {/* <!-- Company Information --> */}
            <form id="company-form" className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="company-name" className="block text-left text-lg font-medium mb-2">Company Name</label>
                    <input type="text" id="company-name" className="w-full p-3 border border-gray-300 rounded" placeholder="Enter company name" />
                </div>

                <div className="mb-4">
                    <label htmlFor="vat" className="block text-left text-lg font-medium mb-2">VAT Number</label>
                    <input type="text" id="vat" className="w-full p-3 border border-gray-300 rounded" placeholder="Enter VAT number" />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-left text-lg font-medium mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded" placeholder="Enter email" />
                </div>

                <div className="mb-4">
                    <label htmlFor="website" className="block text-left text-lg font-medium mb-2">Website</label>
                    <input type="url" id="website" className="w-full p-3 border border-gray-300 rounded" placeholder="https://yourcompany.com" />
                </div>

                <div className="mb-4">
                    <label htmlFor="short-info" className="block text-left text-lg font-medium mb-2">Short Info</label>
                    <textarea id="short-info" className="w-full p-3 border border-gray-300 rounded h-32" placeholder="Write a short description about your company"></textarea>
                </div>
                <button type="button" id="profile-button" className="w-full p-3 bg-[#004AAD] text-white rounded hover:bg-blue-700">Edit</button>
            </form>
        </section>
    )
}

export default CompanyProfile
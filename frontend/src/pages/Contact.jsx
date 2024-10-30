const Contact = () => {
    return (
        <main className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg text-center">
            <h1 className="text-4xl font-bold mb-8">Контакт с Нас</h1>
            {/*  Contact Form  */}
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-left text-lg font-medium mb-2">Твоето Име</label>
                    <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded" placeholder="Въведи тук твоето Име" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-left text-lg font-medium mb-2">Email Адрес</label>
                    <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded" placeholder="Въведи тук твоят Email Адрес" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block text-left text-lg font-medium mb-2">Относно</label>
                    <input type="text" id="subject" className="w-full p-3 border border-gray-300 rounded" placeholder="Въведи темата на твоето съобщение" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-left text-lg font-medium mb-2">Съобщение</label>
                    <textarea id="message" className="w-full p-3 border border-gray-300 rounded h-32" placeholder="Въведи твоето съобщение" required></textarea>
                </div>

                <button type="submit" className="w-full p-3 bg-[#004AAD] text-white rounded hover:bg-blue-700">Изпрати</button>
                <div className="mb-4">
                    <p></p>
                    <p>Телефон за връзка: 088</p>
                </div>
            </form>
        </main>
    )
}

export default Contact

import images from "../assets/images"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <main className="container mx-auto my-8">
            <section className="my-12">
                <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-lg p-6 rounded-lg text-center">
                    <img src={images.Image13} alt="Frontend development image with code on screen and developers" className="w-full md:w-1/2 mb-6 md:mb-0" />
                    <div className="md:mr-8 text-center w-full">
                        <h2 className="text-3xl font-semibold mb-4">Намери Мечтаната Работа Бързо и Лесно</h2>
                        <p className="text-xl">Много Възможности</p>
                        <Link to="#" className="mt-4 inline-block px-8 py-4 bg-[#A55DD8] text-white font-semibold rounded">Виж Всички Обяви</Link>
                    </div>
                </div>
            </section>
            {/* Backend Section (Image Left, Centered Text)  */}
            <section className="my-12">
                <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg text-center">
                    <img src={images.Image18} alt="Backend development image with coding and server icons" className="w-full md:w-1/2 mb-6 md:mb-0" />
                    <div className="md:ml-8 text-center w-full">
                        <h2 className="text-3xl font-semibold mb-4">BackEnd</h2>
                        <p className="text-xl">Свободни позиции</p>
                        <Link to="#" className="mt-4 inline-block px-8 py-4 bg-[#4A008B] text-white font-semibold rounded">Виж Всички Обяви</Link>
                    </div>
                </div>
            </section>

            {/* Frontend Section (Image Right, Centered Text) */}
            <section className="my-12">
                <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-lg p-6 rounded-lg text-center">
                    <img src={images.Image17} alt="Frontend development image with code on screen and developers" className="w-full md:w-1/2 mb-6 md:mb-0" />
                    <div className="md:mr-8 text-center w-full">
                        <h2 className="text-3xl font-semibold mb-4">FrontEnd</h2>
                        <p className="text-xl">Свободни позиции</p>
                        <Link to="#" className="mt-4 inline-block px-8 py-4 bg-[#A55DD8] text-white font-semibold rounded">Виж Всички Обяви</Link>
                    </div>
                </div>
            </section>

            {/*  Database Section (Image Left, Centered Text) */}
            <section className="my-12">
                <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg text-center">
                    <img src={images.Image15} alt="Database management image with database icons" className="w-full md:w-1/2 mb-6 md:mb-0" />
                    <div className="md:ml-8 text-center w-full">
                        <h2 className="text-3xl font-semibold mb-4">Database</h2>
                        <p className="text-xl">Свободни позиции</p>
                        <Link to="#" className="mt-4 inline-block px-8 py-4 bg-[#004AAD] text-white font-semibold rounded">Виж Всички Обяви</Link>
                    </div>
                </div>
            </section>

            {/*  Marketing Section (Image Right, Centered Text) */}
            <section className="my-12">
                <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-lg p-6 rounded-lg text-center">
                    <img src={images.Image16} alt="Marketing image with social media icons" className="w-full md:w-1/2 mb-6 md:mb-0" />
                    <div className="md:mr-8 text-center w-full">
                        <h2 className="text-3xl font-semibold mb-4">Marketing</h2>
                        <p className="text-xl">Свободни позиции</p>
                        <Link to="#" className="mt-4 inline-block px-8 py-4 bg-[#5E48D9] text-white font-semibold rounded">Виж Всички Обяви</Link>
                    </div>
                </div>
            </section>

            {/*  Support Section (Image Left, Centered Text)  */}
            <section className="my-12">
                <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg text-center">
                    <img src={images.Image14} alt="Support role image showing customer service icons" className="w-full md:w-1/2 mb-6 md:mb-0" />
                    <div className="md:ml-8 text-center w-full">
                        <h2 className="text-3xl font-semibold mb-4">Support</h2>
                        <p className="text-xl">Свободни позиции</p>
                        <Link to="#" className="mt-4 inline-block px-8 py-4 bg-[#F9B75E] text-white font-semibold rounded">Виж Всички Обяви</Link>
                    </div>
                </div>
            </section>

            {/*  Latest Job Listings  */}
            <section className="my-12 text-center">
                <h2 className="text-4xl font-bold mb-6">Всички Обяви</h2>
                <p className="text-xl">Последно добавените обяви от всяка категория</p>
                <Link to="#" className="mt-6 inline-block px-8 py-4 bg-[#3CBDDC] text-white font-semibold rounded">Виж Всички Обяви</Link>
            </section>
        </main>
    )
}

export default Home
const Blog = () => {
    return (
        <section className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
            {/* Blog Post Title */}
            <h1 className="text-4xl font-bold mb-4 text-center">How to Find Your Dream Job Quickly and Easily</h1>

            {/* Author Info */}
            <div className="text-gray-500 text-sm text-center mb-6">
                <p>By <strong>John Doe</strong> | Published on <strong>September 24, 2024</strong></p>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
                <img src="https://placehold.co/800x400" alt="Blog post image" className="mx-auto rounded-lg shadow-lg" />
            </div>

            {/* Blog Post Content */}
            <article className="prose prose-lg max-w-4xl mx-auto">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor eget nibh feugiat egestas ut sit amet dui. Proin vitae ligula in lectus interdum placerat nec at lacus. Donec scelerisque ligula magna, id pretium elit fermentum ut.</p>

                <p>Ut bibendum, nunc id posuere euismod, ligula justo gravida est, vel condimentum neque libero et lorem. Curabitur eget erat nulla. Aliquam erat volutpat. Phasellus viverra tincidunt urna, nec scelerisque orci eleifend vel.</p>

                <p>Quisque finibus, sapien id facilisis sollicitudin, magna ante facilisis ex, nec ullamcorper nulla justo sed nulla. In nec nisl vitae ligula consequat tincidunt. Integer semper convallis tortor et efficitur.</p>

                <h2>Why You Need to Focus on Job Search Strategies</h2>
                <p>Phasellus volutpat fringilla odio, ac aliquet libero tristique et. Nam ullamcorper faucibus elit vel ultricies. Donec elementum dapibus orci et malesuada. Nulla consequat, magna vel vehicula tristique, sem sapien facilisis dui, vitae auctor orci mauris a metus.</p>

                <blockquote>
                    &quot;Success in your job search starts with understanding your strengths and crafting a plan.&quot;
                </blockquote>

                <p>Sed ac urna purus. Pellentesque euismod metus vitae nisl condimentum, a vehicula orci dapibus. Mauris id ante nec velit consectetur varius vitae sed justo. Duis et libero sed erat pretium vehicula. Sed malesuada ac orci a tincidunt. Integer gravida dolor nec tincidunt volutpat.</p>
            </article>
        </section>
    )
}

export default Blog
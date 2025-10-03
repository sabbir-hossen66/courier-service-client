export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Courier Service</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We provide fast, reliable, and secure courier solutions across the
          country. From important documents to fragile packages – we deliver
          with care.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            Our mission is to make deliveries simple, affordable, and
            lightning-fast. We aim to connect people and businesses through
            trust and timely service.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            To become the most customer-focused courier company, leveraging
            technology and innovation to make shipping hassle-free for everyone.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>
              Get your parcels delivered in the shortest possible time with
              real-time tracking.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Secure Handling</h3>
            <p>
              We treat your package with utmost care, ensuring safe and secure
              delivery.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>
              Our support team is always ready to assist you, anytime and
              anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Send Your Package?</h2>
        <p className="mb-6">
          Join thousands of happy customers who trust us every day.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

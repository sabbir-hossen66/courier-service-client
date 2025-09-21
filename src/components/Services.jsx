
import { service } from '../utils/Data';

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className=" px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12">
          We provide a wide range of digital services to help you grow your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import CategoryCard from './CategoryCard';
import heroImage from '../assets/hero-image.png'; // Upload your image to this folder

export default function HeroSection() {
  return (
    <section className="text-center p-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Your <span className="text-blue-600">future</span> starts here
      </h2>
      <p className="text-gray-600 mb-6">
        25,000+ Internships for freshers, students & graduates!
      </p>
      <div className="space-x-4 mb-10">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Find Internships</button>
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50">Post Internships</button>
      </div>
      
      <img src={heroImage} alt="Hero Visual" className="mx-auto w-96 mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
        <CategoryCard title="Human Resources" />
        <CategoryCard title="Software Development" />
        <CategoryCard title="Marketing" />
        <CategoryCard title="Operations" />
        <CategoryCard title="Finance" />
      </div>
    </section>
  );
}

export default function CategoryCard({ title }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
      <div className="text-blue-600 text-3xl mb-2">📚</div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
    </div>
  );
}

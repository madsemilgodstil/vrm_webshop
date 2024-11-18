const Category = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="">
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="border p-2 rounded">
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;

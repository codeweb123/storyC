import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

// eslint-disable-next-line react/prop-types
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;

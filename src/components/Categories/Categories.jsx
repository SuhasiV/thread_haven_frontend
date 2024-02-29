import useFetch from "../../hooks/useFetch";
import "./Categories.scss";
import { useSelectedItemId } from "../../SelectedItemIdContext";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const { setSelectedItemId } = useSelectedItemId();

  const { data, loading, error } = useFetch(`/sub-categories`);

  const handleClick = (itemId) => {
    setSelectedItemId(itemId);
    if (itemId === 1 || itemId === 4 || itemId === 5) {
      navigate("/products/1"); // Absolute path
    } else if (itemId === 6 || itemId === 7 || itemId === 9) {
      navigate("products/2"); // Absolute path
    }
  };

  return (
    <>
      {" "}
      <div className="categories">
        {data?.map((item) => (
          <div
            className="section"
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <div className="popUp">
              <div className="heading">{item.attributes.title}</div>
            </div>
            <div className="popUp2">
              <div className="heading">{item.attributes.title}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;

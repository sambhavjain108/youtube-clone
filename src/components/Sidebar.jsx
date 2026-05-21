<button
  className="category-btn"
  onClick={() => setSelectedCategory(category.name)}
  style={{
    background: category.name === selectedCategory ? "#FC1503" : "transparent",
    color: "white",
    border: "none",
    borderRadius: "20px",
    padding: "10px 15px",
    margin: "5px 0",
    cursor: "pointer",
    transition: "0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
  }}
  key={category.name}
>
  <span
    style={{
      color: category.name === selectedCategory ? "white" : "red",
      marginRight: "15px",
      fontSize: "20px",
    }}
  >
    {category.icon}
  </span>

  <span
    style={{
      opacity: category.name === selectedCategory ? "1" : "0.8",
      fontWeight: category.name === selectedCategory ? "bold" : "normal",
    }}
  >
    {category.name}
  </span>
</button>

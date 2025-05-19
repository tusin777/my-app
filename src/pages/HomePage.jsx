import "./HomePage.css";

function HomePage() {
  const handleScroll = ({ target }) => {
    console.log(`прокрутка ${target.scrollTop}`);
  };

  return (
    <div onScroll={handleScroll} style={{ height: 300, overflow: "auto" }}>
      <div style={{ height: 900 }}>Прокучиваемый элемент</div>
    </div>
  );
}

export default HomePage;

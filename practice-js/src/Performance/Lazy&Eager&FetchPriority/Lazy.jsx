

function ProductImage() {
  return (
    <img src="dummy-ru" alt="dummy" loading="lazy" width="100%" height="auto" />
  );
}
const Lazy = () => {
  return (
    <div>
      <ProductImage />
    </div>
  );
};

export default Lazy;

function Productcard(props) {
  return (
    <>
      <div className="max-w-sm w-full mx-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        <img
          src={props.image}
          alt="Product"
          className="w-full h-48 object-cover object-center"
        />

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {props.name}
          </h3>

          <p className="text-sm text-gray-600 mb-4">{props.description}</p>

          <div className="flex justify-between items-center">
            <span className="text-indigo-600 font-bold text-lg">
              ${props.price}
            </span>
            <button className="px-4 py-2 bg-[#0081A3] text-white text-sm rounded hover:bg-indigo-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productcard;

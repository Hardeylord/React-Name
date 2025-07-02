function Card(props) {

  const handleClick = (name, title) => {
    alert(`You have clicked the ${name} ${title}`);
  };

  return (
    <div className="border-amber-600 rounded-2xl">
      <img className="size-48 w-full" src={props.imageUrl} alt="" />
      <div className="bg-amber-600 p-7">
        <h1>{props.header}</h1>
        <p className="m-4">{props.title}</p>
        <button
          onClick={()=>handleClick(props.header, props.title)}
          className="bg-purple-600 px-3 py-3 rounded-4xl"
        >
          Book Vacation
        </button>
      </div>
    </div>
  );
}

export default Card;

const CardTemplate = ({ cardImage, cardTitle }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-lg image-full relative">
      <figure>
        <img className="img" src={cardImage} alt="Shoes" />
      </figure>
      <div className="card-body absolute top-56">
          <h2 className="text-right text-xl">{cardTitle}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-accent bg-transparent border-t-0 border-l-0 border-r-0 text-[#CED0D4]">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;

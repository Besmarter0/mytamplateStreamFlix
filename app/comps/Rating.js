export function Rating() {
  return (
    <div className="w-full m-auto flex flex-col justify-center items-center my-20 p-10">
      <h1 className="text-3xl text-center font-bold p-5">
        Our Rating Based On Our Customer are
      </h1>
      {/* lg */}
      <div className="rating rating-lg  ">
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
    </div>
  );
}

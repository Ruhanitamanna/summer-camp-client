import useAllData from "../../hooks/useAllData";

const PopularInstructers = () => {
  const [allData] = useAllData();
  console.log(allData);
  return (
    <div>
      <h1 className="text-3xl">Instructors</h1>
      {allData.map((data, index) => (
        <p key={index}>Total info:{data.instructorName}</p>
      ))}
      {/* <div className="grid lg:grid-cols-3 gap-3">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PopularInstructers;

import useAllData from "../../hooks/useAllData";

const PopularInstructers = () => {
  const [allData] = useAllData();
  const sortedData = allData.sort(
    (a, b) => b.numberOfStudents - a.numberOfStudents
  );

  return (
    <div>
      <div className="text-center my-4 p-6">
        <h1 className="text-4xl uppercase font-semibold">Popular classes </h1>
      </div>
      <div className="divider"></div>
      <div className="grid lg:grid-cols-3 gap-4 mt-10">
        {sortedData.slice(0, 6).map((data, index) => (
          <div key={index}>
            <div>
              <div className="card w-96 glass bg-blue-100">
                <figure>
                  <img src={data.instructorImage} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.instructorName}</h2>
                  <p>{data.className}</p>
                  <p>{data.numberOfStudents}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructers;

import { useQuery } from "@tanstack/react-query";

const useAllData = () => {
  //   const {
  //     data: allData = [],
  //     isLoading: loading,
  //     refetch,
  //   } = useQuery(["allData"], async () => {
  //     const res = await fetch("http://localhost:5000/allData");
  //     return res.json();
  //   });
  //   return [allData, loading, refetch];
  const {
    data: allData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["allData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allData");
      return res.json();
    },
  });
  return [allData, loading, refetch];
};

export default useAllData;

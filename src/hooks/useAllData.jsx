import { useQuery } from "@tanstack/react-query";

const useAllData = () => {
  //   const {
  //     data: allData = [],
  //     isLoading: loading,
  //     refetch,
  //   } = useQuery(["allData"], async () => {
  //     const res = await fetch("https://summer-camp-server-umber.vercel.app/allData");
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
      const res = await fetch(
        "https://summer-camp-server-umber.vercel.app/allData"
      );
      return res.json();
    },
  });
  return [allData, loading, refetch];
};

export default useAllData;

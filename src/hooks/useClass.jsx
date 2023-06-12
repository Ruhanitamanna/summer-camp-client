import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();

  const {
    isLoading,
    refetch,
    data: item = [],
  } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      if (!user || !user.email) {
        return [];
      }
      const response = await axiosSecure(`/classes?email=${user?.email}`);
      return response.json();
    },
  });
  return [item, refetch, isLoading];
};

export default useClass;

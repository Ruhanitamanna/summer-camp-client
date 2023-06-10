import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useClass = () => {
  const { user } = useContext(AuthContext);

  const { isLoading, refetch, isError, data, error } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/classes?email=${user.email}`
      );
      return response.json();
    },
  });
  return [classes, refetch, isLoading];
};

export default useClass;
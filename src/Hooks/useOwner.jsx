import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useOwner = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isOwner, isLoading: isOwnerLoading } = useQuery({
    queryKey: ["isOwner", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/owner/${user?.email}`);
      return res.data.owner;
    },
  });
  return [isOwner, isOwnerLoading];
};

export default useOwner;

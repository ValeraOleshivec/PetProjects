import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins.js";
import toast from "react-hot-toast";

const UseCreateCabin = () => {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin succesfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => {
      toast.error("New cabin wasn't created ", error);
    },
  });
  return { createCabin, isLoading };
};

export default UseCreateCabin;

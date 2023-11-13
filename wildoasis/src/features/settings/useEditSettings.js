import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins.js";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings.js";

const useEditSettings = () => {
  const queryClient = useQueryClient();

  const { mutate: editSetting, isLoading: isEditing } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Settings succesfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (error) => {
      toast.error("New cabin wasn't created ", error);
    },
  });
  return { editSetting, isEditing };
};

export default useEditSettings;

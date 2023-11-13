import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings.js";

const UseBookings = () => {
  const { isLoading, data: bookings } = useQuery({
    queryKey: ["cabins"],
    queryFn: getBookings,
  });
  return { isLoading, bookings };
};

export default UseBookings;

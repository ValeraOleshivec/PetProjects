import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import useBookings from "./useBookings.js";
import Empty from "../../ui/Empty.jsx";
import Spinner from "../../ui/Spinner.jsx";

function BookingTable() {
  const { bookings, isLoading } = useBookings();
  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        {!bookings?.length ? (
          <Table.Body
            data={bookings}
            render={(booking) => (
              <BookingRow key={booking.id} booking={booking} />
            )}
          />
        ) : (
          <Empty />
        )}
      </Table>
    </Menus>
  );
}

export default BookingTable;

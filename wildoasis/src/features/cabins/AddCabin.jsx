import Button from "../../ui/Button.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import { useState } from "react";
import Modal from "../../ui/Modal.jsx";

const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open opens={"newCabin"}>
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name={"newCabin"}>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
};
// const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((cur) => !cur)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onClose={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// };

export default AddCabin;

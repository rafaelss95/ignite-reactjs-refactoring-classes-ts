import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { Food } from "../../types";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { Form } from "./styles";

type Props = Readonly<{
  isOpen: boolean;
  handleAddFood: (food: Food) => void;
  setIsOpen: () => void;
}>;

export function ModalAddFood({ isOpen, handleAddFood, setIsOpen }: Props) {
  const formRef = useRef(null);

  async function handleSubmit(food: Food) {
    handleAddFood(food);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

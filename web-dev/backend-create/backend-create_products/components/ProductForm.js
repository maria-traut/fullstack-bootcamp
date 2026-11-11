import styled from "styled-components";
import StyledButton from "@/components/Button";
import useSWR from "swr";
import { useId } from "react";

export default function ProductForm({ isEditMode = false }) {
  const { mutate } = useSWR("/api/products");
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }
  const ageInputId = useId();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>
        {isEditMode ? "Edit the fish" : "Add a new Fish"}
      </StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <hr />
      <StyledLabel>
        First met:{" "}
        <input name="myInput" defaultValue="Tell me where you met this fish." />
      </StyledLabel>
      <p>
        Characteristics:{" "}
        <label>
          <input type="checkbox" name="myCheckbox" defaultChecked={true} />
          hungry
        </label>
        <label>
          <input type="checkbox" name="myCheckbox" />
          foolish
        </label>
        <label>
          <input type="checkbox" name="myCheckbox" />
          super sweet
        </label>
      </p>
      <p>
        Fitness Range:{" "}
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option1"
            defaultChecked={true}
          />
          lame
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          fit
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          wow
        </label>
      </p>
      <StyledLabel htmlFor={ageInputId}>
        Expected lifespan:
        <input id={ageInputId} name="age" type="number" />
      </StyledLabel>
      <StyledButton type="submit">
        {isEditMode ? "Update" : "Submit"}
      </StyledButton>
    </StyledForm>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

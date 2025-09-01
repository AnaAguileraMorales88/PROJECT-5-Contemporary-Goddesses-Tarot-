import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TextInput from "./TextInput";

describe("TextInput component", () => {
  it("renderiza el label y el input", () => {
    render(
      <TextInput
        id="nombre"
        label="Nombre"
        value=""
        onChange={() => {}}
        placeholder="Escribe tu nombre"
      />
    );

    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Escribe tu nombre")).toBeInTheDocument();
  });

  it("muestra el valor correctamente", () => {
    render(
      <TextInput
        id="nombre"
        label="Nombre"
        value="Juan"
        onChange={() => {}}
        placeholder="Escribe tu nombre"
      />
    );

    expect(screen.getByDisplayValue("Juan")).toBeInTheDocument();
  });

  it("llama a onChange cuando se escribe en el input", () => {
    const handleChange = vi.fn();

    render(
      <TextInput
        id="nombre"
        label="Nombre"
        value=""
        onChange={handleChange}
        placeholder="Escribe tu nombre"
      />
    );

    const input = screen.getByPlaceholderText("Escribe tu nombre");
    fireEvent.change(input, { target: { value: "Maria" } });

    expect(handleChange).toHaveBeenCalledOnce();
  });

  it("acepta la ref y permite enfocarse", () => {
    const ref = { current: null };

    render(
      <TextInput
        id="nombre"
        label="Nombre"
        value=""
        onChange={() => {}}
        placeholder="Escribe tu nombre"
        ref={ref}
      />
    );

    expect(ref.current).not.toBeNull();
    ref.current.focus();
    expect(ref.current).toHaveFocus();
  });
});

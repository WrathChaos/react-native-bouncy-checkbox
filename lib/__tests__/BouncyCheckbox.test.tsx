import React, { createRef } from "react";
import { Text } from "react-native";
import {
  render,
  screen,
  fireEvent,
  act,
} from "@testing-library/react-native";
import BouncyCheckbox from "../BouncyCheckbox";
import { BouncyCheckboxHandle } from "../BouncyCheckbox.type";

describe("BouncyCheckbox", () => {
  it("renders with text", () => {
    render(<BouncyCheckbox testID="cb" text="Accept terms" />);
    expect(screen.getByText("Accept terms")).toBeTruthy();
    expect(screen.getByTestId("cb")).toBeTruthy();
  });

  it("exposes the checkbox accessibility role and unchecked state by default", () => {
    render(<BouncyCheckbox testID="cb" />);
    const node = screen.getByTestId("cb");
    expect(node.props.accessibilityRole).toBe("checkbox");
    expect(node.props.accessibilityState).toEqual({ checked: false });
  });

  it("toggles the built-in state on press and reports the next value", () => {
    const onPress = jest.fn();
    render(<BouncyCheckbox testID="cb" onPress={onPress} />);
    const node = screen.getByTestId("cb");

    fireEvent.press(node);
    expect(onPress).toHaveBeenNthCalledWith(1, true);
    expect(node.props.accessibilityState).toEqual({ checked: true });

    fireEvent.press(node);
    expect(onPress).toHaveBeenNthCalledWith(2, false);
    expect(node.props.accessibilityState).toEqual({ checked: false });
  });

  it("honors defaultChecked for the initial uncontrolled state", () => {
    const onPress = jest.fn();
    render(<BouncyCheckbox testID="cb" defaultChecked onPress={onPress} />);
    const node = screen.getByTestId("cb");
    expect(node.props.accessibilityState).toEqual({ checked: true });

    fireEvent.press(node);
    expect(onPress).toHaveBeenNthCalledWith(1, false);
  });

  it("does not mutate its own state in controlled mode (useBuiltInState=false)", () => {
    const onPress = jest.fn();
    render(
      <BouncyCheckbox
        testID="cb"
        useBuiltInState={false}
        isChecked={false}
        onPress={onPress}
      />,
    );
    const node = screen.getByTestId("cb");

    fireEvent.press(node);
    // Controlled: callback receives the current isChecked, internal state is unchanged.
    expect(onPress).toHaveBeenCalledWith(false);
    expect(node.props.accessibilityState).toEqual({ checked: false });
  });

  it("reflects a controlled isChecked prop change", () => {
    const { rerender } = render(
      <BouncyCheckbox testID="cb" useBuiltInState={false} isChecked={false} />,
    );
    expect(screen.getByTestId("cb").props.accessibilityState).toEqual({
      checked: false,
    });

    rerender(
      <BouncyCheckbox testID="cb" useBuiltInState={false} isChecked={true} />,
    );
    expect(screen.getByTestId("cb").props.accessibilityState).toEqual({
      checked: true,
    });
  });

  it("fires onLongPress with the next value", () => {
    const onLongPress = jest.fn();
    render(<BouncyCheckbox testID="cb" onLongPress={onLongPress} />);
    fireEvent(screen.getByTestId("cb"), "longPress");
    expect(onLongPress).toHaveBeenCalledWith(true);
  });

  it("exposes imperative onCheckboxPress / onCheckboxLongPress via ref", async () => {
    const onPress = jest.fn();
    const onLongPress = jest.fn();
    const ref = createRef<BouncyCheckboxHandle>();
    render(
      <BouncyCheckbox
        testID="cb"
        ref={ref}
        onPress={onPress}
        onLongPress={onLongPress}
      />,
    );

    expect(typeof ref.current?.onCheckboxPress).toBe("function");
    expect(typeof ref.current?.onCheckboxLongPress).toBe("function");

    await act(async () => {
      ref.current?.onCheckboxPress();
    });
    expect(onPress).toHaveBeenCalledWith(true);

    await act(async () => {
      ref.current?.onCheckboxLongPress();
    });
    expect(onLongPress).toHaveBeenCalledWith(false);
  });

  it("hides the text when disableText is set", () => {
    render(<BouncyCheckbox testID="cb" disableText text="Hidden" />);
    expect(screen.queryByText("Hidden")).toBeNull();
  });

  it("renders a custom textComponent instead of the default text", () => {
    render(
      <BouncyCheckbox
        testID="cb"
        text="ignored"
        textComponent={<Text>Custom label</Text>}
      />,
    );
    expect(screen.getByText("Custom label")).toBeTruthy();
    expect(screen.queryByText("ignored")).toBeNull();
  });

  it("renders a custom iconComponent", () => {
    render(
      <BouncyCheckbox
        testID="cb"
        iconComponent={<Text>★</Text>}
      />,
    );
    expect(screen.getByText("★")).toBeTruthy();
  });
});

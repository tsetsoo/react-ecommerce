import { shallow } from "enzyme";
import React from "react";
import FormInput from "./form-input.component";

const fakeValue = "";
const fakeHandleChange = jest.fn();
let wrapper;
beforeEach(() => {
  wrapper = shallow(
    <FormInput value={fakeValue} handleChange={fakeHandleChange} />
  );
});

it("expect to render FormInput component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("expect to call handleChange when form changes", () => {
  const fakeEvent = { target: { name: "email", value: "test@mail.com" } };
  wrapper.find(`.form-input`).simulate("change", fakeEvent);
  expect(fakeHandleChange).toHaveBeenCalledWith(fakeEvent);
});

it("expect label to not have class shrink when value is empty", () => {
  expect(wrapper.find(`.shrink`).exists()).toBeFalsy();
});

it("expect label to have class shrink when there is value", () => {
  const wrapperWithValue = shallow(
    <FormInput value={"fake-value"} handleChange={fakeHandleChange} />
  );
  expect(wrapperWithValue.find(`.shrink`).exists()).toBeTruthy();
});

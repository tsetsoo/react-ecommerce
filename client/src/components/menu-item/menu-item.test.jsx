import { shallow } from "enzyme";
import React from "react";
import { MenuItem } from "./menu-item.component";

const fakeMatch = {
  url: "/fake-url/",
};
const fakeLinkUrl = "item-url";
const fakeHistory = {
  push: jest.fn(),
};
const fakeTitle = "fake-item";

it("expect to render MenuItem component", () => {
  expect(shallow(<MenuItem title={fakeTitle} />)).toMatchSnapshot();
});

it("expect correctUrl when clicked", () => {
  const wrapper = shallow(
    <MenuItem
      title={fakeTitle}
      match={fakeMatch}
      linkUrl={fakeLinkUrl}
      history={fakeHistory}
    />
  );
  wrapper.find(`.menu-item`).simulate("click");

  expect(fakeHistory.push).toHaveBeenCalledWith(fakeMatch.url + fakeLinkUrl);
});

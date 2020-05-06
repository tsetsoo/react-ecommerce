import { shallow } from "enzyme";
import React from "react";
import { CollectionPreview } from "./collection-preview.component";

let wrapper;
const fakeTitle = "fake-title";
const fakeItems = [
  {
    id: "fake-id",
  },
];
const fakeRouteName = "fake-collection";
const fakeMatch = {
  path: "/fake-url",
};
const fakeHistory = {
  push: jest.fn(),
};
beforeEach(() => {
  wrapper = shallow(
    <CollectionPreview
      title={fakeTitle}
      items={fakeItems}
      routeName={fakeRouteName}
      match={fakeMatch}
      history={fakeHistory}
    />
  );
});

it("expect to render CollectionPreview component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("expect title to link to correct collections page", () => {
  wrapper.find(`.title`).simulate("click");

  expect(fakeHistory.push).toHaveBeenCalledWith(
    fakeMatch.path + "/" + fakeRouteName
  );
});

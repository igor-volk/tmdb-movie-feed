import React from 'react';
import { mount } from 'enzyme';
import withData from "./DataProvider";

describe("Data Provider", () => {
  it("should wrap the View passed to it", () => {
    const View = () => <div className="myView">View</div>;
    const Wrapped = withData(View);
    const wrapper = mount(<Wrapped/>);

    expect(wrapper.contains(View)).toEqual(true);
  });
})

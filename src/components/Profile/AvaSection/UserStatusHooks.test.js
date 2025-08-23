import React from "react";
import { create } from "react-test-renderer";
import UserStatusHooks from "./UserStatusHooks";
import TestRenderer, { act } from 'react-test-renderer';

describe('Profile status component', () => {
  test('Status from props should be in state', () => {
   
    const testRenderer = TestRenderer.create(<UserStatusHooks userStatus="testStatus" />);
    const testInstance = testRenderer.root;

    const span = testInstance.findByType('span');
    expect(span.props.children).toBe("testStatus"); // initial state
  })
})
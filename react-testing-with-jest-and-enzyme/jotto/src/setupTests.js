import 'jest-enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import checkPropTypes from 'check-prop-types';

Enzyme.configure({ adapter: new EnzymeAdapter() });

global.findByTestAttr = wrapper => value => {
  return wrapper.find(`[data-test="${value}"]`);
};

global.checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
  );
  expect(propError).toBeUndefined();
};

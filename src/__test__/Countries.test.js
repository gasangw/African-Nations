import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Countries from '../components/Countries/Countries';
import store from '../redux/ConfigureStore';

it('Countries renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Countries />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

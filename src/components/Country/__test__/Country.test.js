import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Country from '../Country';
import store from '../../../redux/configureStore';

const country = {
  common: 'KENYA',
};

const flags = {
  png: 'https://flagcdn.com/w320/ke.png',
};
test('it returns a countrydata component', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Country
            name={country}
            flags={flags}
            currencies="KES"
            population={12}
          />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Header from '../Header';

describe('Test header', () => {
  it('test if the heander is rendered correctly', () => {
    const header = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});

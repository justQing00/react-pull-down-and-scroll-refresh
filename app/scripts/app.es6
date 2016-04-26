
import Demo from 'demo/test01';
const { Router, Route, History, IndexRoute, browserHistory}  = ReactRouter;

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <IndexRoute component={Demo} />
      <Route path="/" component={Demo} />
    </Router>
  );
};

ReactDOM.render((
  <Demo/>
), document.getElementById('app'));

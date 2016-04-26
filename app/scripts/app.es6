
import Demo from 'demo/test01';
import TapEventMixinReact from "extras/tap_event_mixin_react";
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

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Sidebar from 'common/sidebar';

import Dash from 'components/dashboard/dashboard';

class Body extends React.Component {
  render() {
    return (
      <Container id='body'>
        <Dash />
      </Container>
    );
  }
}

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Body />
      </Container>
    );
  }
}

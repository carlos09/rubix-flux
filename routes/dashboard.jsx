import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Sidebar from 'common/sidebar';

import Dash from 'components/dashboard/app-dashboard';

class Body extends React.Component {
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody className='text-center'>
                    <p>BLANK PAGE</p>
                    <Dash />
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
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

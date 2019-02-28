import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/streams';

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    return <pre>// TODO Show stream {(this.props.stream || {}).id}</pre>;
  }
}

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams[match.params.id],
});

export default connect(
  mapStateToProps,
  {
    fetchStream,
  },
)(StreamShow);

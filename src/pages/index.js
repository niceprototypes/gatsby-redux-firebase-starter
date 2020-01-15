import {Link} from 'gatsby'
import React from 'react'
import {connect} from 'react-redux'
import {Layout} from '../components/Layout'
import {Firebase} from '../components/Firebase'

class IndexPage extends React.Component {
  componentDidMount() {
    this.firebase = new Firebase()
  }

  render() {
    return (
      <Layout>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default connect(state => ({
}), {
})(IndexPage)

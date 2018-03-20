import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Link from './Link'

class LinkList extends Component {
  render() {
    if (this.props.feedQuery && this.props.feedQuery.loading) {
      return <div>Loading..</div>
    }

    if (this.props.feedQuery && this.props.feedQuery.error) {      
      return <div>Error</div>
    }

    console.log('Links object', this.props.feedQuery)
    const linksToRender = this.props.feedQuery.feed

    return (
      <div>{linksToRender.map(link => <Link key={link.id} link={link} />)}</div>
    )
  }    
}

// 1
const FEED_QUERY = gql`
  # 2
  query FeedQuery {
    feed {      
      id        
      url
      description      
    }
  }
`

// 3
export default graphql(FEED_QUERY, { name: 'feedQuery' }) (LinkList)
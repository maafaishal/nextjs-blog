import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import htmr from 'htmr'

import {
  Typography
} from '@material-ui/core'

import Frame from 'components/frame'
import BlogData from 'components/blogData'
import Container from 'components/container'

const styles = theme => ({
  root: {
    paddingBottom: 30,

    '& .box': {
      backgroundColor: '#fff',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)',
      padding: '50px 50px 30px'
    },

    '& .title': {
      fontSize: 42,
      fontWeight: 600,
      lineHeight: '1.2'
    },

    '& .image': {
      margin: '40px -50px',

      '& img': {
        width: '100%'
      }
    },

    '& .content': {

      '& .contentBox': {
        maxWidth: 680,
        margin: '0 auto'
      },

      '& p': {
        fontSize: 18,
        fontFamily: 'Montserrat',
        lineHeight: 1.7,
        marginBottom: 50
      },

      '& p.from': {
        fontSize: 16,
        lineHeight: 1.7,
        marginBottom: 50
      },

      '& a': {
        color: theme.palette.primary.main
      }
    }
  }
})

class Detail extends React.Component {
  static async getInitialProps ({ query }) {
    return { query }
  }

  render () {
    const { classes, query } = this.props

    const detail = BlogData && BlogData.filter(data => data.slug === query.slug)[0]

    return (
      <Frame>
        <div className={classes.root}>
          <Container>
            <div className="box">
              <Typography className="title" variant="h1" gutterBottom>
                {detail.title}
              </Typography>
              <div className="image">
                <img src={detail.image} alt={detail.title} />
              </div>
              <div className="content">
                <div className="contentBox">
                  {htmr(detail.content)}
                  <Typography className="from" variant="body2" gutterBottom>
                    Source from: <a href={detail.from.link} target="_blank" rel="noopener noreferrer">
                      {detail.from.name}
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Frame>
    )
  }
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
  query: PropTypes.object
}

export default withStyles(styles)(Detail)

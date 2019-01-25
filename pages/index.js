import React, { Component } from 'react';
import Router from 'next/router';
import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

class Index extends Component {
  static async getInitialProps () {
    try {
      const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
      const data = await res.json()
      console.log(`Show data fetched. Count: ${data.length}`)

      return {
        shows: data
      }
    } catch (err) {
      return {
        shows: [],
        err: err
      }
    }
  }

  render() {
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
          {this.props.shows.map(({ show }) => (
            <li key={show.id}>
              <Link href={`/post?id=${show.id}`} passHref prefetch>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default Index;
import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Search from "../components/search"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>search engine in Gatsby</h1>
    
    <div>
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="type..."
       />
    </div>
    
    {/* <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => (
        <header>
          ... header stuff...
          <Search searchIndex={data.siteSearchIndex.index} />
        </header>
      )}
    /> */}

    {/* NEWS */}
    <section className="bg-white py-8 mx-8">
      <div className="container max-w-5xl mx-auto m-8">      
        <div className="flex flex-wrap">
          <div className="w-full py-6">
            {data.allMicrocmsHpNews.edges.map(({ node }) => (
                <div className="bg-white border-b" key={node.hpNewsId}>
                  <div className="container mx-auto flex flex-wrap">
                    <div className="w-full md:w-1/3 py-6 flex flex-col flex-grow flex-shrink">
                      <div className="flex-1 bg-white py-4">
                        <div className="flex flex-wrap no-underline hover:no-underline">
                          <Link to={`/news-detail/${node.hpNewsId}`} className="font-bold text-md px-6 underline hover:text-blue-400">
                            {node.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsHpNews {
      edges {
        node {
          title
          hpNewsId
        }
      }
    }
  }
`

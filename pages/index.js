import { Component, PureComponent } from "react";
import Head from "next/head";
import { getFeaturedCategories } from "../utils/api";
import CategoryCard from "../components/category-card/category-card";

export default class Page extends Component {
  DEFAULT_CATEGORY_COLUMN_SIZE = 4;
  SEARCH_PLACEHOLDER = "Filter startup name";

  state = {
    query: ""
  };

  static async getInitialProps() {
    const categories = await getFeaturedCategories();
    return { categories };
  }

  renderCategories() {
    return Object.values(this.props.categories).map(category => (
      <div className={`col-md-${this.DEFAULT_CATEGORY_COLUMN_SIZE}`}>
        <CategoryCard category={category} filterQuery={this.state.query} />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Head>
          <title>Founderwall - the starting point for tech projects</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/static/style.css" />
        </Head>
        <div>
          <header>
            <div className="navbar navbar-dark box-shadow">
              <div className="container d-flex justify-content-between">
                <a href="/" className="navbar-brand d-flex align-items-center">
                  <img src="/static/logo.svg" className="logo" alt="" />
                  <span>Founderwall</span>
                </a>
              </div>
            </div>
          </header>
          <main role="main">
            <section className="jumbotron text-center">
              <div className="container">
                <h1 className="jumbotron-heading">Resources for founders</h1>
                <p className="lead text-muted">
                  A no bullshit, curated and categorised list of products,
                  services, tools and resources to help you become a better
                  entrepreneur.
                </p>
              </div>
            </section>
            <form className="form-inline my-2 my-lg-0 bg-light">
              <div className="container">
                <input
                  className="form-control startup-search-input box-shadow"
                  type="search"
                  value={this.state.query}
                  onChange={e => {
                    this.setState({ query: e.target.value });
                  }}
                  placeholder={this.SEARCH_PLACEHOLDER}
                  aria-label={this.SEARCH_PLACEHOLDER}
                />
              </div>
            </form>
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">{this.renderCategories()}</div>
              </div>
            </div>
          </main>
          <footer className="text-muted">
            <div className="container">
              <p>
                First they ignore you, then they laugh at you, then they fight
                you, then you win. - Mahatma Gandhi
              </p>
              <p>
                <small>
                  Founderwall is a project by{" "}
                  <a href="https://twitter.com/kulor">@kulor</a>. Contribute at{" "}
                  <a href="https://github.com/founderwall/api">
                    github.com/founderwall
                  </a>.
                </small>
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

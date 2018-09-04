import { Component, PureComponent } from "react";
import Head from "next/head";
import { getFeaturedCategories } from "../utils/api";
import CategoryCard from "../components/category-card/category-card";
import ChartistGraph from "react-chartist";

var simpleLineChartData = {
  color: "blue",
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  series: [[12, 9, 7, 8, 5]]
};

const options = {
  low: 0,
  showArea: true,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 2 === 0 ? value : null;
    }
  }
};

export default class Page extends Component {
  DEFAULT_CATEGORY_COLUMN_SIZE = 4;
  SEARCH_PLACEHOLDER = "Filter startup name";

  state = {
    query: "",
    isLoaded: false
  };

  static async getInitialProps() {
    const categories = await getFeaturedCategories();
    return { categories };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
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
          <link rel="stylesheet" href="/static/charts.css" />
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
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="page-header">
                  <h1 className="display-4">Startupific</h1>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="card box-shadow">
                      <div className="card-header">
                        Twitter <small>@company</small>
                      </div>
                      <div className="card-body">
                        <div className="card-split-stats">
                          <div>
                            <span>Followers</span>
                            <strong>18</strong>
                          </div>
                          <div>
                            <span>Following</span>
                            <strong>24</strong>
                          </div>
                        </div>
                        <div>
                          {this.state.isLoaded && (
                            <ChartistGraph
                              data={{
                                labels: [
                                  "Monday",
                                  "Tuesday",
                                  "Wednesday",
                                  "Thursday",
                                  "Friday"
                                ],
                                series: [
                                  [19, 18, 18, 19, 20],
                                  [2, 1, 3.5, 7, 3]
                                ]
                              }}
                              options={options}
                              type={"Line"}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card box-shadow">
                      <div className="card-header">
                        Instagram <small>@company_</small>
                      </div>
                      <div className="card-body">
                        <div className="card-split-stats">
                          <div>
                            <span>Followers</span>
                            <strong>230</strong>
                          </div>
                          <div>
                            <span>Following</span>
                            <strong>229</strong>
                          </div>
                        </div>

                        <div>
                          {this.state.isLoaded && (
                            <ChartistGraph
                              data={{
                                labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                                series: [
                                  [200, 198, 205, 202, 210],
                                  [2, 1, 3.5, 7, 3]
                                ]
                              }}
                              options={options}
                              type={"Line"}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card box-shadow">
                      <div className="card-header">Github</div>
                      <div className="card-body">
                        <div className="card-split-stats">
                          <div>
                            <span>Followers</span>
                            <strong>18</strong>
                          </div>
                          <div>
                            <span>Following</span>
                            <strong>24</strong>
                          </div>
                        </div>
                        <div>
                          {this.state.isLoaded && (
                            <ChartistGraph
                              data={{
                                labels: [
                                  "Monday",
                                  "Tuesday",
                                  "Wednesday",
                                  "Thursday",
                                  "Friday"
                                ],
                                series: [
                                  [19, 18, 18, 19, 20],
                                  [2, 1, 3.5, 7, 3]
                                ]
                              }}
                              options={options}
                              type={"Line"}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card box-shadow">
                      <div className="card-header">Dribbble</div>
                      <div className="card-body">
                        <div className="card-split-stats">
                          <div>
                            <span>Followers</span>
                            <strong>230</strong>
                          </div>
                          <div>
                            <span>Following</span>
                            <strong>229</strong>
                          </div>
                        </div>

                        <div>
                          {this.state.isLoaded && (
                            <ChartistGraph
                              data={{
                                labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                                series: [
                                  [200, 198, 205, 202, 210],
                                  [2, 1, 3.5, 7, 3]
                                ]
                              }}
                              options={options}
                              type={"Line"}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card box-shadow">
                      <div className="card-header">Facebook</div>
                      <div className="card-body">
                        <div className="card-split-stats">
                          <div>
                            <span>Likes</span>
                            <strong>1,333</strong>
                          </div>
                          <div>
                            <span>Followers</span>
                            <strong>987</strong>
                          </div>
                        </div>

                        <div>
                          {this.state.isLoaded && (
                            <ChartistGraph
                              data={{
                                labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                                series: [
                                  [200, 198, 205, 202, 210],
                                  [2, 1, 3.5, 7, 3]
                                ]
                              }}
                              options={options}
                              type={"Line"}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card box-shadow">
                      <div className="card-header">LinkedIn</div>
                      <div className="card-body">
                        <div className="card-split-stats">
                          <div>
                            <span>Followers</span>
                            <strong>230</strong>
                          </div>
                        </div>
                        <div>
                          {this.state.isLoaded && (
                            <ChartistGraph
                              data={simpleLineChartData}
                              options={options}
                              type={"Line"}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card box-shadow">
                      <div className="card-header">Trustpilot</div>
                      <div className="card-body">
                        <div className="card-split-stats">
                          <div>
                            <span>Stars</span>
                            <strong>4.3</strong>
                          </div>
                        </div>
                        <div>
                          {this.state.isLoaded && (
                            <ChartistGraph
                              data={simpleLineChartData}
                              options={options}
                              type={"Line"}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card box-shadow">
                      <div className="card-header">Page response time</div>
                      <div className="card-body">
                        <div className="card-split-stats">
                          <div>
                            <span>Average response time</span>
                            <strong>2s</strong>
                          </div>
                        </div>
                        <div>
                          {this.state.isLoaded && (
                            <ChartistGraph
                              data={simpleLineChartData}
                              options={options}
                              type={"Line"}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card box-shadow">
                      <div className="card-header">SEO Rank</div>
                      <div className="card-body">
                        <div className="card-split-stats">
                          <div>
                            <span>"Golden Boots"</span>
                            <strong>31</strong>
                          </div>
                          <div>
                            <span>"Golden Shoes"</span>
                            <strong>39</strong>
                          </div>
                        </div>
                        <div>
                          {this.state.isLoaded && (
                            <ChartistGraph
                              data={simpleLineChartData}
                              options={options}
                              type={"Line"}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

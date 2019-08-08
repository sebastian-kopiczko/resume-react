import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { A4, Head, Header, Section, Footer } from '../components/';
class Resume extends Component {
  state = { data: {}, isLoaded: false };
  async componentDidMount() {
    const res = await axios.get('./data/config.json');
    this.setState({ data: res.data, isLoaded: true });
  }
  render() {
    const currentYear = new Date().getFullYear();
    // const language = this.state.data.siteMetadata.lang;
    // console.log(this.state.data.siteMetadata.lang);

    // const data = this.state.data.pl;
    const data = this.state.data.en;
    return (
      <div className="App">
        <A4>
          <Head title="Sebastian Kopiczko | Front-end developer CV" />
          {this.state && this.state.isLoaded && (
            <div className="container" id="container">
              {/* <GridLines lines={7} /> */}
              <Header
                firstName="Sebastian"
                lastName="Kopiczko"
                title="Front-end developer"
              />

              <Fragment>
                {data.sections.map((section, index) => (
                  <Section
                    number={index + 1}
                    key={index * 0.33}
                    data={section.items}
                    name={section.name}
                    heading={section.title}
                    isDetailed={section.isDetailed}
                  />
                ))}
                <Footer
                  year={currentYear}
                  author={this.state.data.siteMetadata.author}
                  clause={data.clause}
                />
              </Fragment>
            </div>
          )}
        </A4>
      </div>
    );
  }
}
export default Resume;

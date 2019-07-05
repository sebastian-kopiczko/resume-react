import React, { Component, Fragment } from "react";
import axios from "axios";
import A4 from "./A4";
import { Head, Header, Section, Footer } from "../components/";
class Resume extends Component {
  state = { data: {}, isLoaded: false };
  async componentDidMount() {
    const res = await axios.get("./data/config.json");
    this.setState({ data: res.data, isLoaded: true });
  }
  render() {
    const currentYear = new Date().getFullYear();
    setTimeout(() => {
      console.warn(this.state);
    }, 1500);
    const data = this.state.data.pl;
    return (
      <div className="App">
        <A4>
          <Head title="CV - Sebastian Kopiczko" />
          {this.state && this.state.isLoaded && (
            <div className="container" id="container">
              {/* <GridLines lines={7} /> */}
              <Header
                firstName="Sebastian"
                lastName="Kopiczko"
                title="Front-end developer"
              />

              {/* TODO: loop for render sections */}
              <Fragment>
                <Section
                  number={1}
                  heading="Experience"
                  data={data.experience}
                  isDetailed={true}
                />
                <Section
                  number={2}
                  heading="Skills"
                  data={data.skills}
                  isDetailed={false}
                />
                <Section
                  number={3}
                  heading="Education"
                  data={data.education}
                  isDetailed={true}
                />
                <Section
                  number={4}
                  heading="Interests"
                  data={data.interests}
                  isDetailed={false}
                />

                <Footer
                  year={currentYear}
                  author="Sebastian Kopiczko"
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

import React, { Component, Fragment } from "react";
import axios from "axios";
import {
  Head,
  // GridLines,
  Header,
  Contact,
  Section,
  Footer
} from "../components/";
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
    const data = this.state.data.en;
    return (
      <div className="App">
        <Head title="CV - Sebastian Kopiczko" />
        {this.state && this.state.isLoaded && (
          <div className="container" id="container">
            {/* <GridLines lines={7} /> */}
            <Header firstName="Sebastian" lastName="Kopiczko" />
            <Contact
              email="contact@sebastiankopiczko.pl"
              // phone="+48 739 069 669"
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
      </div>
    );
  }
}
export default Resume;

import React from 'react';
import axios from 'axios';
import CollapseBar from './CollapseBar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: [],
    };
    this.getCourseData = this.getCourseData.bind(this);
  }

  componentDidMount() {
    this.getCourseData();
  }

  getCourseData() {
    axios.get('http://localhost:3000/test1')
      .then((response) => {
        this.setState({
          course: response.data,
        });
      });
  }

  render() {
    const { course } = this.state;
    return (
      <div className="container">
        <CollapseBar title="Header" data1={course} />
      </div>
    );
  }
}

export default App;

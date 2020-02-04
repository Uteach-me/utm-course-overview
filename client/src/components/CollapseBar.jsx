import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CollapseButtons from './CollapseButtons.jsx';
// import CourseContent from './CourseContent.jsx';

// const Content = styled.div`
//   border: 1px solid gray;
//   border-top: none;
//   opacity: ${(props) => (props.open ? '1' : '0')};
//   max-height: ${(props) => (props.open ? '100%' : '0')};
//   overflow: hidden;
//   padding: ${(props) => (props.open ? '15px' : '0 15px')};
//   transition: all 0.3s;

//   p {
//     margin: 0;
//   } 
// `;

const ExpandButton = styled.button`
  font-family: open sans,helvetica neue,Helvetica,Arial,sans-serif;
  position: absolute;
  border: none;
  background-color: white;
  float: left;
  cursor: pointer;
`;

const CourseContentHeader = styled.h1`
  margin: 0;
  display: inline-block;
  width: 100%;
`;

class CollapseBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: '',
      isToggleAll: true,
    };
    this.handleClickAll = this.handleClickAll.bind(this);
    this.getCourseData = this.getCourseData.bind(this);
  }

  componentDidMount() {
    this.getCourseData();
    console.log(this.state.course);
  }

  getCourseData() {
    axios.get('http://localhost:3000/test1')
      .then((response) => {
        this.setState({
          course: response.data.course.sections,
        });
      });
  }

  handleClickAll() {
    this.setState((state) => ({
      isToggleAll: !state.isToggleAll,
    }));
  }


  render() {
    const {
      isToggleAll, course,
    } = this.state;

    const names = course;

    if (course === '') {
      return null;
    }
    console.log(course);
    return (
      <div>
        <CourseContentHeader>
          Course content
          <ExpandButton onClick={this.handleClickAll}>
            {isToggleAll ? 'Expand All' : 'Collapse All'}
          </ExpandButton>
        </CourseContentHeader>
        {names.map((name) => {
          return (
            <CollapseButtons name={name} />
          );
        })}
        {/* <CollapseButtons titles={course} isToggleOn={isToggleOn} handleClick={this.handleClick} /> */}
        {/* <CourseContent data1={this.state.course} /> */}
      </div>
    );
  }
}

export default CollapseBar;

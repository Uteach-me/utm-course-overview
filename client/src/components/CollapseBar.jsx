import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CollapseButtons from './CollapseButtons.jsx';

const Content = styled.div`
  border: 1px solid gray;
  border-top: none;
  opacity: ${(props) => (props.open ? '1' : '0')};
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
  padding: ${(props) => (props.open ? '15px' : '0 15px')};
  transition: all 0.3s;

  p {
    margin: 0;
  } 
`;

const Button = styled.button`
  width: 100%;
  background-color: whitesmoke;
  border: none;
  outline: none;
  text-align: left;
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;
  transition:background-color 0.3s linear;

  :hover {
    background-color: #ddd;
  }
`;

const ExpandButton = styled.button`
  font-family: open sans,helvetica neue,Helvetica,Arial,sans-serif;
  position: absolute;
  border: none;
  background-color: white;
  float: left;
  cursor: pointer;
`;

const CourseContent = styled.h1`
  margin: 0;
  display: inline-block;
  width: 100%;
`;

class CollapseBar extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      course: '',
      test2: '',
      // test1: 'string1',
      isToggleOn: false,
      isToggleOn1: false,
      isToggleOn2: false,
      isToggleAll: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClickAll = this.handleClickAll.bind(this);
    this.getCourseData = this.getCourseData.bind(this);
  }

  componentDidMount() {
    // $.ajax({
    //   type: 'GET',
    //   url: 'http://localhost:3000/test1',
    //   success: (data) => {
    //     this.setState({
    //       course: data,
    //     });
    //     console.log(this.state.course);
    //   },
    // });
    this.getCourseData();
  }

  getCourseData() {
    axios.get('http://localhost:3000/test1')
      .then((response) => {
        this.setState({
          course: response.data.course.sections,
        }, () => {
          console.log(this.state.course)
        });
      });
  }

  handleClick() {
    // console.log(this.props.data1.course.course_name);
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  handleClick1() {
    this.setState((state) => ({
      isToggleOn1: !state.isToggleOn1,
    }));
  }

  handleClick2() {
    this.setState((state) => ({
      isToggleOn2: !state.isToggleOn2,
    }));
  }

  handleClickAll() {
    this.setState((state) => ({
      isToggleOn: state.isToggleAll,
      isToggleOn1: state.isToggleAll,
      isToggleOn2: state.isToggleAll,
      isToggleAll: !state.isToggleAll,
    }));
  }


  render() {
    const {
      isToggleAll, isToggleOn, isToggleOn1, isToggleOn2, course,
    } = this.state;

    if (course === '') {
      return null;
    }
    return (
      // <div>
      //   <CourseContent>
      //     Course content
      //     <ExpandButton onClick={this.handleClickAll}>
      //       {isToggleAll ? 'Expand All' : 'Collapse All'}
      //     </ExpandButton>
      //   </CourseContent>
      //   {/* <p>Text goes here</p> */}
      //   <Button onClick={this.handleClick}>{this.state.course[0].section_name}</Button>
      //   <Content open={isToggleOn}>
      //     <div>
      //       {course[0].contents[0].content_title}
      //     </div>
      //     <div>
      //       {course[0].contents[1].content_title}
      //     </div>
      //   </Content>
      //   <Button onClick={this.handleClick1}>Button2</Button>
      //   <Content open={isToggleOn1}>
      //     <p>
      //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      //     </p>
      //   </Content>
      //   <Button onClick={this.handleClick2}>Button3</Button>
      //   <Content open={isToggleOn2}>
      //     <p>
      //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      //     </p>
      //   </Content>
      // </div>
      
      <div>
        <CollapseButtons titles={this.state.course} />
      </div>
    );
  }
}

export default CollapseBar;

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CollapseButtons from './CollapseButtons.jsx';


const ExpandButton = styled.button`
    font-family: open sans,helvetica neue,Helvetica,Arial,sans-serif;
    border: none;
    background-color: white;
    cursor: pointer;
    display: inline-block;
    margin-right: 20px;
  
  a {
    color: #007791;
    background-color: transparent;
    font-weight: 400;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  } 
`;

const CourseContentHeader = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 10px;
`;

const CurrContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const CourseLeft = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const CourseRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  padding-right: 30px;
  width: 50%;
`;

class CollapseBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: '',
      isToggleAll: false,
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
    return (
      <div>
        <CurrContainer>
          <CourseLeft>
            <CourseContentHeader>
              Course content
            </CourseContentHeader>
          </CourseLeft>
          <CourseRight>
            <ExpandButton onClick={this.handleClickAll}>
              {isToggleAll ? 'Collapse All' : 'Expand All'}
            </ExpandButton>
          </CourseRight>
        </CurrContainer>
        {names.map((name) => {
          return (
            <CollapseButtons name={name} clickAll={isToggleAll} handleClickAll={this.handleClickAll} />
          );
        })}
      </div>
    );
  }
}

export default CollapseBar;

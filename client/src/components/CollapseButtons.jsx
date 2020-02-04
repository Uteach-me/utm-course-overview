import React from 'react';
import styled from 'styled-components';


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

// const CollapseButtons = (props) => {
//   const names = props.titles;
//   const { isToggleOn, handleClick } = props;

//   return (
//     names.map((name, i) => {
//       return (
//         <div>
//           <Button key={i} onClick={handleClick}>{name.section_name}</Button>
//           <Content open={isToggleOn}>
//             {name.contents.map((content) => {
//               return (
//                 <p>{content.content_title}</p>
//               );
//             })}
//           </Content>
//         </div>
//       );
//     })
//   );
// };

//
class CollapseButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    const { isToggleOn } = this.state;
    const { name } = this.props;
    return (
      <div>
        <Button onClick={this.handleClick}>{name.section_name}</Button>
        <Content open={isToggleOn}>
          {name.contents.map((content) => {
            return (
              <p>{content.content_title}</p>
            );
          })}
        </Content>
      </div>
    );
  }
}

export default CollapseButtons;
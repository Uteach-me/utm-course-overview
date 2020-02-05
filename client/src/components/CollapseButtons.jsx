import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  width: 100%;
  background-color: whitesmoke;
  border: none;
  outline: none;
  text-align: left;
  padding: 15px 20px;
  font-size: 15px;
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
  padding: ${(props) => (props.open ? '0px' : '0 15px')};
  transition: all 0.3s;
  color: #686f7a;
  letter-spacing: .3px;

  p {
    background-color: transparent;
    font-weight: 400;
    flex-direction: column-reverse;
    display: flex;
    margin-left: 15px;
    width: 100%;
    cursor: pointer;
    font-size: 15px;
  } 
`;

const ContentDiv = styled.div`
  display: flex;
  padding: 12px 30px 12px 43px;
  background-color: #fff;
  border: 1px solid #e8e9eb;
  border-top: none;
  color: #686f7a;
  letter-spacing: .3px;
  line-height: 1.33;
  * {
    box-sizing: border-box;
  }
`;

const Spans = styled.span`
  display: inline-block;
  margin: 4px;
`;

const PlusMinus = styled.p`
  color:#007791;
`;

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
    const { name, clickAll } = this.props;
    return (
      <div>
        <Button onClick={this.handleClick}>
          <Spans>
            <PlusMinus>
              <strong>{isToggleOn ? '-' : '+'}</strong>
            </PlusMinus>
          </Spans>
          <Spans>
            <strong>
              {name.section_name}
            </strong>
          </Spans>
        </Button>
        <Content open={isToggleOn || clickAll}>
          {name.contents.map((content) => {
            return (
              <ContentDiv>
                <p>{content.content_title}</p>
              </ContentDiv>
            );
          })}
        </Content>
      </div>
    );
  }
}

export default CollapseButtons;
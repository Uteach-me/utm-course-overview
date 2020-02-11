import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

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
    display: inline-block;
    margin-left: 15px;
    width: 250px;
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

const TimeRight = styled.p`
  padding-left: 455px;
  `;

const TimeRightPreview = styled.p`
  color:#007791;
  padding-left: 350px;
  `;

const TimeSpan = styled.span`
  color:#007791;
  padding-left: 50px;
`;

const PlayCircle = styled.p`
    color:#007791;
`;

const DivContent = styled.div`
  width: 70%;
`;

const TotalTime = styled.span`
  padding-left: 58%;
  display: inline-table;
  position: flex;
`;

const DivRight = styled.div`
  width: 50%;
  display:inline-block;
`;

const DivLeft = styled.div`
  width: 50%;
  display:inline-block;
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
    let totalTime = 0;

    name.contents.map((content) => {
      totalTime = Math.floor(content.content_length) + totalTime;
    });

    return (
      <DivContent>
        <Button onClick={this.handleClick}>
          <DivRight>
          <Spans>
            <PlusMinus>
              <strong>{isToggleOn || clickAll ? '-' : '+'}</strong>
            </PlusMinus>
          </Spans>
          <Spans>
            <strong>
              {name.section_name}
            </strong>
          </Spans>
          </DivRight>
          <DivLeft>
          <TotalTime>
            {isToggleOn || clickAll ? '' : `${totalTime}:00`}
          </TotalTime>
          </DivLeft>
        </Button>
        <Content open={isToggleOn || clickAll}>
          {name.contents.map((content) => {
            if (content.is_vid && content.has_preview) {
              return (
                <ContentDiv>
                  <PlayCircle><FontAwesomeIcon icon={faPlayCircle} /> {content.content_title}</PlayCircle>
                  <TimeSpan>
                  Preview
                  <TimeRightPreview>
                    {`${Math.floor(content.content_length)}:00`}
                  </TimeRightPreview>
                  </TimeSpan>
                </ContentDiv>
              );
            }
            if ((content.is_vid) && (!content.has_preview)) {
              return (
                <ContentDiv>
                  <p><FontAwesomeIcon icon={faPlayCircle} /> {content.content_title}</p>
                  <TimeRight>
                    {`${Math.floor(content.content_length)}:00`}
                  </TimeRight>
                </ContentDiv>
              );
            }
            return (
              <ContentDiv>
                <p><FontAwesomeIcon icon={faFile} /> {content.content_title}</p>
                <TimeRight>
                  {`${Math.floor(content.content_length)}:00`}
                </TimeRight>
              </ContentDiv>
            );
          })}
        </Content>
      </DivContent>
    );
  }
}

export default CollapseButtons;

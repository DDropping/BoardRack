import React, { useState } from 'react';
import { Checkbox, Col, Row } from 'antd';

export const BoardType = () => {
  const [isAllBoards, setIsAllBoards] = useState(false);
  const [isShortboard, setIsShortboard] = useState(false);
  const [isLongboard, setIsLongboard] = useState(false);
  const [isFish, setIsFish] = useState(false);
  const [isFunboard, setIsFunboard] = useState(false);
  const [isGrovler, setIsGrovler] = useState(false);
  const [isGun, setIsGun] = useState(false);
  const [isSUP, setIsSUP] = useState(false);

  const onSelectAll = () => {
    setIsAllBoards(!isAllBoards);
    if (!isAllBoards) {
      setIsShortboard(true);
      setIsLongboard(true);
      setIsFish(true);
      setIsFunboard(true);
      setIsGrovler(true);
      setIsGun(true);
      setIsSUP(true);
    } else {
      setIsShortboard(false);
      setIsLongboard(false);
      setIsFish(false);
      setIsFunboard(false);
      setIsGrovler(false);
      setIsGun(false);
      setIsSUP(false);
    }
  };

  return (
    <div>
      <strong>Board Type:</strong>
      <div style={{ borderBottom: '1px solid #E9E9E9' }}>
        <Checkbox
          checked={isAllBoards}
          onChange={() => {
            onSelectAll();
          }}
        >
          All Boards
        </Checkbox>
      </div>
      <Row>
        <Col span={8}>
          <Checkbox
            checked={isShortboard}
            onChange={() => setIsShortboard(!isShortboard)}
          >
            Shortboard
          </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox
            checked={isLongboard}
            onChange={() => setIsLongboard(!isLongboard)}
          >
            Longboard
          </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox checked={isFish} onChange={() => setIsFish(!isFish)}>
            Fish
          </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox
            checked={isFunboard}
            onChange={() => setIsFunboard(!isFunboard)}
          >
            Funboard
          </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox
            checked={isGrovler}
            onChange={() => setIsGrovler(!isGrovler)}
          >
            Grovler
          </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox checked={isGun} onChange={() => setIsGun(!isGun)}>
            Gun
          </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox checked={isSUP} onChange={() => setIsSUP(!isSUP)}>
            SUP
          </Checkbox>
        </Col>
      </Row>
    </div>
  );
};

export default BoardType;

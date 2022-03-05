import React, { useState } from 'react';
import {
  Col,
  Container,
  Row,
  Button,
  Modal,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import { assignMove } from '../../lib/helpers';

function MoveList({ selectedPokemon, party, setParty }) {
  const [show, setShow] = useState(false);
  const [moveIndex, setMoveIndex] = useState();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (i) => {
    setShow(true);
    setMoveIndex(i);
  };

  return (
    <Col
      md={3}
      className="d-inline-block pb-3"
      style={{
        position: 'relative',
        borderBottomLeftRadius: '2%',
        borderBottomRightRadius: '2%',
        border: '5px solid #463d41',
        borderTop: 'none',
        boxShadow: 'inset -3px -3px 0px 3px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f35f56',
        height: '90%',
        zIndex: 2,
      }}
    >
      <Container
        className="px-0"
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          height: '80%',
          width: '90%',
          border: '5px solid #463d41',
          borderRadius: '10px',
          backgroundColor: '#697478',
          fontFamily: 'Pokemon',
        }}
      >
        {/* Move set*/}
        {party[selectedPokemon] &&
        party[selectedPokemon].moveSet &&
        party[selectedPokemon].moveSet.length > 0
          ? party[selectedPokemon].moveSet.map((move, i) => (
              <Row
                className="mx-0"
                key={'pokemon' + (selectedPokemon + 1) + 'move' + (i + 1)}
                style={{
                  height: '25%',
                  width: '100%',
                  borderRadius: '10px',
                  backgroundColor: '#e1e9e9',
                  border: '3px solid #697478',
                }}
              >
                <Col>
                  <Row
                    className="align-items-end"
                    style={{
                      height: '50%',
                      borderBottom: '2px solid #c9d1d2',
                    }}
                  >
                    {/* Type Logo*/}
                    <Col
                      md={3}
                      className="d-flex p-0 justify-content-center align-items-center"
                      style={{ height: '100%' }}
                    >
                      {Object.keys(move).length > 0 ? (
                        <img
                          src={
                            require(`../../assets/typeLogos/${move.type.name}.png`)
                              .default
                          }
                          style={{ width: '90%' }}
                          alt={move.type.name}
                        />
                      ) : (
                        ''
                      )}
                    </Col>
                    {/* Move Name */}
                    <Col
                      md={7}
                      className="my-auto px-1"
                      style={{ fontSize: '2vh' }}
                    >
                      {Object.keys(move).length > 0
                        ? move.names.map((moveName) =>
                            moveName.language.name === 'en'
                              ? moveName.name
                              : null
                          )
                        : ''}
                    </Col>
                    {/* Move Selector*/}
                    <Col md={2} style={{ height: '100%' }}>
                      <button
                        className="mt-2"
                        style={{
                          backgroundColor: 'lightgray',
                          border: '3px solid gray',
                          borderRadius: '5px',
                          fontFamily: 'Pokemon',
                        }}
                        onClick={() => handleShow(i)}
                      >
                        ^
                      </button>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      height: '100%',
                    }}
                  >
                    {/* Move Position*/}
                    <Col md={3}>
                      <Row
                        className="mt-1 justify-content-around"
                        style={{ height: '50%' }}
                      >
                        {party[selectedPokemon].moveSet.map((move, pos) =>
                          pos === i ? (
                            <Col md={5} key={'pos' + pos} className="px-0">
                              <Container
                                style={{
                                  height: '80%',
                                  borderRadius: '5px',
                                  border: '3px solid #3f403b',
                                  backgroundColor: '#c7574d',
                                }}
                              ></Container>
                            </Col>
                          ) : (
                            <Col md={5} key={'pos' + pos} className="px-0">
                              <Container
                                style={{
                                  height: '80%',
                                  borderRadius: '5px',
                                  border: '3px solid #3f403b',
                                  backgroundColor: '#c3d4de',
                                }}
                              ></Container>
                            </Col>
                          )
                        )}
                      </Row>
                    </Col>
                    {Object.keys(move).length > 0 ? (
                      <>
                        {/* PP */}
                        <Col
                          md={4}
                          className="text-center my-2"
                          style={{ fontSize: '3vh' }}
                        >
                          PP
                        </Col>
                        {/* PP Number */}
                        <Col
                          md={5}
                          className="px-0 my-2"
                          style={{ fontSize: '3vh' }}
                        >
                          {move.pp}/{move.pp}
                        </Col>
                      </>
                    ) : null}
                  </Row>
                </Col>
              </Row>
            ))
          : null}
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        scrollable={true}
        style={{
          fontFamily: 'Pokemon',
        }}
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: '#f35f56',
            border: '5px solid #463d41',
            borderBottom: 'none',
          }}
        >
          <Modal.Title>Move List</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: '#c3d4de',
            borderLeft: '5px solid #463d41',
            borderRight: '5px solid #463d41',
            borderTop: '5px solid',
            borderBottom: '5px solid',
          }}
        >
          <Row>
            {party[selectedPokemon] && party[selectedPokemon].moveList
              ? party[selectedPokemon].moveList.map((move, j) => (
                  <OverlayTrigger
                    placement="auto-end"
                    key={'modal' + move + j}
                    // delay={{hide: 30000}}
                    overlay={
                      <Popover
                        id="popover-basic"
                        className=""
                        style={{
                          backgroundColor: '#667887',
                          fontFamily: 'Pokemon',
                          border: '3px solid black',
                          borderRadius: '5px',
                        }}
                      >
                        <Popover.Title
                          as="h3"
                          className="p-0 mx-0"
                          style={{
                            border: '2px solid #667887',
                            fontFamily: 'Pokemon',
                          }}
                        >
                          <Row
                            className="mx-0 px-0"
                            style={{
                              width: '100%',
                              fontFamily: 'Pokemon',
                              borderRadius: '10px',
                            }}
                          >
                            <Col
                              md={7}
                              className="py-2 pl-2"
                              style={{
                                backgroundColor: '#798798',
                              }}
                            >
                              TYPE
                            </Col>
                            <Col
                              md={5}
                              className="py-2 px-0 text-center"
                              style={{
                                backgroundColor: '#c8d0db',
                              }}
                            >
                              <img
                                src={
                                  require(`../../assets/typeLogos/${move.type.name}.png`)
                                    .default
                                }
                                style={{ width: '50%' }}
                                alt={move.type.name}
                              />
                            </Col>
                          </Row>
                        </Popover.Title>
                        <Popover.Title
                          as="h3"
                          className="p-0 mx-0"
                          style={{
                            border: '2px solid #667887',
                            fontFamily: 'Pokemon',
                          }}
                        >
                          <Row
                            className="mx-0 px-0"
                            style={{
                              width: '100%',
                              fontFamily: 'Pokemon',
                            }}
                          >
                            <Col
                              md={7}
                              className="py-2 pl-2"
                              style={{
                                backgroundColor: '#798798',
                              }}
                            >
                              CATEGORY
                            </Col>
                            <Col
                              md={5}
                              className="py-2 px-0 text-center"
                              style={{
                                backgroundColor: '#c8d0db',
                              }}
                            >
                              <img
                                src={
                                  require(`../../assets/typeLogos/${move['damage_class'].name}.png`)
                                    .default
                                }
                                style={{ width: '50%' }}
                                alt={move.type.name}
                              />
                            </Col>
                          </Row>
                        </Popover.Title>
                        <Popover.Title
                          as="h3"
                          className="p-0 mx-0"
                          style={{
                            border: '2px solid #667887',
                            fontFamily: 'Pokemon',
                          }}
                        >
                          <Row
                            className="mx-0 px-0"
                            style={{
                              width: '100%',
                              fontFamily: 'Pokemon',
                            }}
                          >
                            <Col
                              md={7}
                              className="py-2 pl-2"
                              style={{
                                backgroundColor: '#798798',
                              }}
                            >
                              POWER
                            </Col>
                            <Col
                              md={5}
                              className="py-2 px-0 text-center"
                              style={{
                                backgroundColor: '#c8d0db',
                              }}
                            >
                              {move.power ? move.power : '-'}
                            </Col>
                          </Row>
                        </Popover.Title>
                        <Popover.Title
                          as="h3"
                          className="p-0 mx-0"
                          style={{
                            border: '2px solid #667887',
                            fontFamily: 'Pokemon',
                          }}
                        >
                          <Row
                            className="mx-0 px-0"
                            style={{
                              width: '100%',
                              fontFamily: 'Pokemon',
                            }}
                          >
                            <Col
                              md={7}
                              className="py-2 pl-2"
                              style={{
                                backgroundColor: '#798798',
                              }}
                            >
                              ACCURACY
                            </Col>
                            <Col
                              md={5}
                              className="py-2 px-0 text-center"
                              style={{
                                backgroundColor: '#c8d0db',
                              }}
                            >
                              {move.accuracy ? move.accuracy : '-'}
                            </Col>
                          </Row>
                        </Popover.Title>
                        <Popover.Content
                          style={{
                            backgroundColor: '#e0e8e8',
                            border: '2px solid #667887',
                          }}
                        >
                          {move['effect_entries'][0]['short_effect'].replace(
                            '$effect_chance',
                            move['effect_chance']
                          )}
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <button
                      className={`mx-1 my-1 ${move.type.name}1`}
                      key={j + ':' + move.name}
                      style={{
                        borderStyle: 'solid',
                        borderWidth: '3px',
                        borderRadius: '5px',
                        fontFamily: 'Pokemon',
                      }}
                      onClick={(e) => {
                        assignMove(
                          move,
                          moveIndex,
                          party,
                          setParty,
                          selectedPokemon
                        );
                        handleClose();
                      }}
                    >
                      {party[selectedPokemon].moveList
                        ? move.names.map((moveName) =>
                            moveName.language.name === 'en'
                              ? moveName.name
                              : null
                          )
                        : null}
                    </button>
                  </OverlayTrigger>
                ))
              : null}
          </Row>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: '#f35f56',
            border: '5px solid #463d41',
            borderTop: 'none',
          }}
        >
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              border: '3px solid #463d41',
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}

export default MoveList;

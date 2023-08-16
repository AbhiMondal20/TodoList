import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList() {
  const [activity, setAcctivity] = useState("");

  const [listData, setListData] = useState([]);
  function addActivity() {
    // setListData([...listData, activity]);
    // console.log(listData);

    setListData((listData) => {
      const updateList = [...listData, activity];
      console.log(updateList);
      setAcctivity("");
      return updateList;
    });
  }

  function removeActivity(i){
    const updatedlistdata = listData.filter((elem, id)=>{
        return i!=id;
    })
    setListData(updatedlistdata)
  }

  function removeAll() {
    setListData([])
  }

  return (
    <>
      <Container textAlign="center" className="mt-4 mb-4">
        <Row>
          <Col>
            <Card bg="info">
              <Card.Text className="" textAlign="center">
                <h1 style={{ color: "#fff" }}>Todo List</h1>
              </Card.Text>
              <Card.Body>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Add Activity"
                    value={activity}
                    onChange={(e) => setAcctivity(e.target.value)}
                    className="form-control shadow-none"
                  />
                  <button
                    className="btn btn-success"
                    type="button"
                    onClick={addActivity}
                  >
                    Add
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Card bg="info">
              <Card.Text className="" textAlign="center">
                <h5 style={{ color: "#fff" }}>
                  Here is your Todo List : {")"}
                </h5>
              </Card.Text>
              <Card.Body>
                {listData != [] &&
                  listData.map((data, i) => {
                    return (
                      <>
                        <p key={i}>
                          <div
                            className="input-group"
                            style={{
                              color: "#fff",
                              border: "1px solid #fff",
                              padding: "10px 10px",
                            }}
                          >
                            {data}
                            
                            <button
                              className="btn btn-sm  btn-success"
                              type="button"
                              onClick={() => removeActivity(i)}
                            >
                              Remove
                            </button>
                          </div>
                        </p>
                      </>
                    );
                  })}
                  {listData.length>=1 && <button className="btn btn-sm btn-primary" onClick={removeAll}>Remove All</button>}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TodoList;

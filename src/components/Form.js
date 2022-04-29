import React, { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';

export const NameForm = () => {
  const [ value, setValue ] = useState('')
  const [ postList, setPostList ] = useState([])

  const renderList = postList.map((item, index) => <li key={index}>{item}</li>)
  const addPost = () => {
    setPostList([ ...postList, value ])
  }
    return (<>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            onChange={event => setValue(event.target.value)}
            value={value}
            as="textarea"
            placeholder="Leave a comment here"
          />
        </FloatingLabel>
        <Button onClick={addPost}>SEND</Button>
        <ul>{renderList}</ul>
      </>
    );    
}
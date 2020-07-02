import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Fibonacci() {
  const [index, setIndex] = React.useState('');
  const [allValues, setAllValues] = React.useState([]);
  const [currentValues, setCurrentValues] = React.useState({});

  React.useEffect(() => {
    axios.get('/api/values/all').then(res => {
      setAllValues(res.data);
    });
    axios.get('/api/values/current').then(res => {
      setCurrentValues(res.data);
    });
  }, []);

  function handleChange(event) {
    setIndex(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await axios.post('/api/values', { index });
    setIndex('');
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          min={0}
          max={40}
          value={index}
          onChange={handleChange}
          placeholder="Enter an index"
        />
        <Button>Submit</Button>
      </Form>

      <Values>
        <Title>Indexes I have seen 👀</Title>
        {allValues.map((item, index) => (
          <Number key={item.number}>
            {item.number}
            {index === allValues.length - 1 ? null : ', '}
          </Number>
        ))}
      </Values>
      <Values>
        <Title>Calculated values 🔢</Title>
        {Object.keys(currentValues).map(key => (
          <Number key={key} style={{ display: 'block' }}>
           {key} <Arrow>&rarr;</Arrow> {currentValues[key]}
          </Number>
        ))}
      </Values>
  </div>
  )
}

const Form = styled.form`
  display: flex;
  height: 50px;
  flex-direction: row;
  width: 30vw;
  margin: 0 auto;
`;

const Input = styled.input`
  all: unset;
  padding: 5px 10px;
  font-size: 1.5rem;
  background: #fff;
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
  flex: 1;
`;

const Button = styled.button`
  padding: 5px 25px;
  font-weight: bold;
  box-sizing: border-box;
  border-radius: 0 4px 4px 0;
  background-color: #FFD400;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  font-size: 1rem;
  cursor: pointer;
`;

const Values = styled.div`
  text-align: center;
  max-width: 70%;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin-bottom: 5px;
`;

const Number = styled.span`
  color: #541388;
  font-size: 2rem;
  font-weight: bold;
`;

const Arrow = styled.span`
  font-size: 3rem;
  color: #D90368;
`;
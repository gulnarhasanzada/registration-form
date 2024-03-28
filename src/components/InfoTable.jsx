import React from 'react'
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/esm/Row';

const InfoTable = ({email, password,city, type, check}) => {
  return (
    <Row className='mt-3'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Email</th>
          <th>Password</th>
          <th>City</th>
          <th>Type</th>
          <th>Check</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{email}</td>
          <td>{password}</td>
          <td>{city}</td>
          <td>{type}</td>
          <td>{check? 'True': 'False'}</td>
        </tr>
      </tbody>
    </Table>
    </Row>
  )
}

export default InfoTable

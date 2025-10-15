import { useEffect, useState } from 'react'
import './App.css'
import type { Pizza } from './types/Pizza'
import apiClient, { BECKEND_URL } from './api/apiClient'
import { Link } from 'react-router'

function App() {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect (() => {
    apiClient
      .get('/pizzak')
      .then((response) => setPizzak(response.data))
      .catch((result) => console.error(result));
  }, []);
  

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Név</th>
          <th>Kép</th>
          <th>Leírás</th>
          <th>Ár</th>
        </tr>
      </thead>
      <tbody>
        {pizzak.map((p) => (
          <tr>
            <td>{p.id}</td>
            <td><Link to={`pizzak/${p.id}`}>{p.nev}</Link></td>
            <td>
              <img src={`${BECKEND_URL}/kepek/${p?.imageUrl}`} width={150} />
            </td>
            <td>{p.leiras}</td>
            <td>{p.ar}Ft</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default App

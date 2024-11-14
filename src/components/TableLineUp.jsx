import styled from 'styled-components';
import lineupimg from '../images/lineup.jpg'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1em;
  font-family: Arial, sans-serif;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;

const TableHeader = styled.th`
   color:white;
  background-color: #EE6018;
  text-align: center;
  border: 1px white solid;
  font-family: "Inria Sans", sans-serif;
  padding: 2rem;
`;

const TableCell = styled.td`
  color: white;
  border: 1px white solid;
  text-align: center;
  background-color: #1E1E1E;
  font-family: "Inria Sans", sans-serif;
  color: #ccc;  
  font-weight: 500;
  font-style:normal;
  padding: 2rem; 
`;

function TableLineUp() {
    return( 
        <div>
            <div className='conteiner-line-up-img'>
                <img src={lineupimg} alt='' className='img-line-up'/>
                <h1 className='data-line-up'>SEXTA-FEIRA (28 DE MARÇO)</h1>
            </div>

        <div className="conteiner-tabelas-line-up">
            <Table>  
            <TableHeader colSpan={2}>Palco A</TableHeader>
            <tbody>
                <tr>
                    <TableCell>14h/15h</TableCell>
                    <TableCell>The Offspring</TableCell>
                </tr>
                
                <tr>
                    <TableCell>16h/17h</TableCell>
                    <TableCell>Blink-182</TableCell>
                </tr>

                <tr>
                    <TableCell>18h/19h</TableCell>
                    <TableCell>Jungle</TableCell>
                </tr>
            </tbody>
            
        </Table>

        <Table>  
            <thead>
                <TableHeader colSpan={2}>Palco B</TableHeader>
            </thead>
            <tbody>
                <tr>
                    <TableCell>14h/15h</TableCell>
                    <TableCell>The Offspring</TableCell>
                </tr>
                
                <tr>
                    <TableCell>16h/17h</TableCell>
                    <TableCell>Blink-182</TableCell>
                </tr>

                <tr>
                    <TableCell>18h/19h</TableCell>
                    <TableCell>Jungle</TableCell>
                </tr>
            </tbody>
            
        </Table>

        <Table>  
            <thead>
                <TableHeader colSpan={2}>Palco C</TableHeader>
            </thead>
            <tbody>
                <tr>
                    <TableCell>14h/15h</TableCell>
                    <TableCell>The Offspring</TableCell>
                </tr>
                
                <tr>
                    <TableCell>16h/17h</TableCell>
                    <TableCell>Blink-182</TableCell>
                </tr>

                <tr>
                    <TableCell>18h/19h</TableCell>
                    <TableCell>Jungle</TableCell>
                </tr>
            </tbody>
            
        </Table>

        </div>
        </div>
          
    );
}

export default TableLineUp;
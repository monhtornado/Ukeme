import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Row, Col,Menu} from 'antd';

import LeftMenu from './components/LeftMenu';


function App() {
  return (
    <div className="App">
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <LeftMenu />
        </Col>
        <Col span={9}>
          hi
        </Col>

        <Col span={11}>
          hi
        </Col>
      </Row>
    </div>
  );
}

export default App;

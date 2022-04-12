import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
function App() {
  return (
    <div className="App">
      <DatePicker />
      <Row gutter={[16, 8]}>
        <Col span={8} />
        <Col span={8} />
        <Col span={8} />

        <Col span={8} />
        <Col span={8} />
        <Col span={8} />
      </Row>
    </div>
  );
}

export default App;

import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { DatePicker, ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
const { RangePicker } = DatePicker

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <RangePicker />
  </ConfigProvider>
  , document.getElementById('root'));


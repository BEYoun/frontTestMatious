import React from 'react'
import {
  Form,
  Button,
  Upload
} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};

const normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const Demo = () => {
  return (
    <Form
      name="validate_other"
      {...formItemLayout}>

      <Form.Item label="Import du fichier a Convertir">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle>
          <Upload.Dragger name="files" action="http://localhost:5000/">
            <p className="ant-upload-drag-icon">
              <InboxOutlined/>
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item wrapperCol={{
        span: 12,
        offset: 6
      }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Demo;
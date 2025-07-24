//form đăng nhập/đăng ký mới
// props type, onSubmit
//dùng chung
// components/AuthForm.jsx

// components/AuthForm.jsx
import { Form } from 'antd';

const AuthForm = ({ children, form, onSubmit }) => {
  return (
    <Form
      form={form}                // kết nối form instance
      onFinish={onSubmit}        // kích hoạt khi submit
      layout="vertical"          // kiểu layout form
      requiredMark={false}       // ẩn dấu * bắt buộc
    >
      {children}
    </Form>
  );
};

export default AuthForm;
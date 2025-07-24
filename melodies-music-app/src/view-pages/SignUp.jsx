// pages/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthHeader from '../components/LoginSignIn/AuthHeader';
import InputField from '../components/LoginSignIn/InputField';
import SubmitButton from '../components/LoginSignIn/SubmitButton';
import AuthForm from '../components/LoginSignIn/AuthForm';
import '../style/LoginSignIn/login.css';
import { Form } from 'antd';


const logoImage = "https://res.cloudinary.com/da4y5zf5k/image/upload/v1751044695/logo-no-background_1_z7njh8.png";
const backIcon = "https://res.cloudinary.com/da4y5zf5k/image/upload/v1751041190/ooui_next-ltr_np1svd.png";

// 🔗 API mock đăng ký
const API_URL = 'https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=686295aaaa4ddee877e5a9f8';

const SignUp = () => {
  const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   phone: ''
  // });

  // const [value, setValue] = useState('');

  // const handleChange = (e) => {
  //   const newValue = e.target.value;
  //   setValue(newValue);
  //   form?.setFieldsValue({ [name]: newValue });
  // };

  const validate = () => {
    const { username, email, password, phone } = formData;
    if (!username || !email || !password || !phone) {
      toast.error('Vui lòng điền đầy đủ thông tin!');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Email không hợp lệ!');
      return false;
    }
    if (password.length < 6) {
      toast.error('Mật khẩu phải có ít nhất 6 ký tự!');
      return false;
    }
    if (!/^\d{9,11}$/.test(phone)) {
      toast.error('Số điện thoại không hợp lệ!');
      return false;
    }
    return true;
  };

  const handleSubmit = async (values) => {
    console.log("⏩ handleSubmit được gọi:", values);
    // KHÔNG dùng e.preventDefault()
    // Vì Ant Design gọi handleSubmit với values trực tiếp

    setLoading(true);

    const { username, email, password, phone } = values;

    // Validate lại nếu cần (hoặc bỏ nếu đã khai báo trong Form.Item)
    if (!username || !email || !password || !phone) {
      toast.error('Vui lòng điền đầy đủ thông tin!');
      setLoading(false);
      return;
    }

    try {
      const checkRes = await fetch(`${API_URL}&email=${email}`);
      const existingUsers = await checkRes.json();

      if (existingUsers.length > 0) {
        toast.error('Email này đã được sử dụng!');
        setLoading(false);
        return;
      }

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error('Đăng ký thất bại');
      toast.success('Đăng ký thành công!');
      console.log("Navigating to login");
      navigate('/login');

    } catch (err) {
      toast.error(`Lỗi: ${err.message}`);
    }

    setLoading(false);
  };


  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  // <AuthForm form={form} onSubmit={handleSubmit}>

    return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-header">
          <img src={logoImage} alt="Melodies Logo" className="logo-image" />
          <h2 className="logo-text">Melodies</h2>
        </div>

        {/* Nút back + tiêu đề */}
        <div className="auth-header">
          <img
            src={backIcon}
            alt="Back"
            className="back-icon"
            onClick={() => navigate(-1)}

          />
          <h2 className="auth-title">Sign Up To Join</h2>
        </div>

        <AuthForm form={form} onSubmit={handleSubmit}>
          <InputField label="User name" name="username" type="text" form={form} />
          <InputField label="E-Mail" name="email" type="email" form={form} />
          <InputField label="Password" name="password" type="password" form={form} />
          <InputField label="Phone Number" name="phone" type="text" form={form} />
          <SubmitButton
            text={loading ? "Đang đăng ký..." : "Sign Up"}
            disabled={loading}
          />
        </AuthForm>
      </div>
    </div>
    );
};

    export default SignUp;

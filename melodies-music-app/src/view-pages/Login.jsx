import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form } from 'antd';

import AuthHeader from '../components/LoginSignIn/AuthHeader';
import InputField from '../components/LoginSignIn/InputField';
import SubmitButton from '../components/LoginSignIn/SubmitButton';
import AuthForm from '../components/LoginSignIn/AuthForm';
import '../style/LoginSignIn/login.css';

const logoImage = "https://res.cloudinary.com/da4y5zf5k/image/upload/v1751044695/logo-no-background_1_z7njh8.png";
const API_URL = 'https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=686295aaaa4ddee877e5a9f8';

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    const { email, password } = values;

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Email không hợp lệ!');
      return;
    }
    if (!password) {
      toast.error('Vui lòng nhập mật khẩu!');
      return;
    }

    try {
      const res = await fetch(`${API_URL}&email=${email}`);
      const users = await res.json();

      const matchedUser = users.find(user => user.password === password);

      if (matchedUser) {
        toast.success('Đăng nhập thành công!');
        localStorage.setItem('user', JSON.stringify(matchedUser));
        navigate('/home');
      } else {
        toast.error('Email hoặc mật khẩu không đúng!');
      }
    } catch (err) {
      toast.error('Lỗi kết nối đến server!');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-header">
          <img src={logoImage} alt="Melodies Logo" className="logo-image" />
          <h2 className="logo-text">Melodies</h2>
        </div>

        <AuthHeader title="Login To Continue" />

        <AuthForm form={form} onSubmit={handleSubmit}>
          <InputField label="E-Mail" name="email" type="email" form={form} />
          <InputField label="Password" name="password" type="password" form={form} />
          <div className="submit">
            <div className="forgot-password">Forgot password &gt;</div>
            <SubmitButton text="Login" />
          </div>
        </AuthForm>

        <div className="social-login">
          <button className="google-login">
            <img src="https://res.cloudinary.com/da4y5zf5k/image/upload/v1751041194/devicon_google_be5zib.png" alt="Google" />
            Google Login
          </button>
          <button className="facebook-login">
            <img src="https://res.cloudinary.com/da4y5zf5k/image/upload/v1751041193/logos_facebook_tyae02.png" alt="Facebook" />
            Facebook Login
          </button>
        </div>

        <div className="signup-row">
          <div className="signup-text">
            <p>Don't have an account?</p>
            <p className="signup-link" onClick={() => navigate('/signup')}>Sign Up Here</p>
          </div>
          <button className="signup-button" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
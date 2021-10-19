import React from 'react';
import { useAuth } from 'context/auth-context';
import { Form, Input, Button } from 'antd';
import { useAsync } from 'utils/use-async';
import styled from '@emotion/styled';

interface RegisterScreenProps {
  onError: (error: Error) => void;
}
export const RegisterScreen = ({ onError }: RegisterScreenProps) => {
  const { register } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });

  const handleSubmit = async ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    if (values.password !== cpassword) {
      onError(new Error('请输入两次相同的密码'));
      return;
    }
    try {
      await run(register(values));
    } catch (error: any) {
      onError(error);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password placeholder="密码" type="text" id="password" visibilityToggle={false} />
      </Form.Item>
      <Form.Item name="cpassword" rules={[{ required: true, message: '请输入确认密码' }]}>
        <Input.Password
          placeholder="确认密码"
          type="text"
          id="cpassword"
          visibilityToggle={false}
        />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} type="primary" htmlType="submit">
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
};
const LongButton = styled(Button)`
  width: 100%;
`;

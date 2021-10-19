import { Form, Input, Button } from 'antd';
import styled from '@emotion/styled';
import { useAuth } from 'context/auth-context';
import { useAsync } from 'utils/use-async';

interface LoginScreenProps {
  onError: (error: Error) => void;
}

export const LoginScreen = ({ onError }: LoginScreenProps) => {
  const { login } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });

  const handleSubmit = async (values: { username: string; password: string }) => {
    try {
      await run(login(values));
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
      <Form.Item>
        <LongButton loading={isLoading} type="primary" htmlType="submit">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};

const LongButton = styled(Button)`
  width: 100%;
`;

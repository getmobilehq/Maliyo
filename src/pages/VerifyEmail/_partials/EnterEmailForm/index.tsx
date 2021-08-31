import React, { FC, useState } from "react";
import { Form, Input, Button } from "antd";
import { DivWrapper } from "../../styled";
import api from "../../../../config/api";
import { useAppDispatch } from "../../../../redux/hooks";
import { SET_STUDENT_DATA } from "../../../../redux/constants";

interface IComponentProps {
  setHasEnteredEmail: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnterEmailForm: FC<IComponentProps> = ({ setHasEnteredEmail }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as { email: string };

      setIsLoading(true);

      const { status, data } = await api.student.emailVerification(values);

      console.log(data);

      if (status >= 200 && status < 300) {
        dispatch({
          type: SET_STUDENT_DATA,
          payload: data,
        });

        setIsLoading(false);
        setHasEnteredEmail(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <DivWrapper>
      <h1 className="title">Verify Email</h1>
      <p>Please enter the email you registered with below.</p>

      <Form
        name="verify-email-form"
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "The input is not a valid E-mail!",
            },
            {
              message: "Please input your Email!",
              required: true,
            },
          ]}
        >
          <Input placeholder="joe@maliyo.com" />
        </Form.Item>
        <Button
          type="primary"
          loading={isLoading}
          htmlType="submit"
          className="w-100"
        >
          Enter
        </Button>
      </Form>
    </DivWrapper>
  );
};

export default EnterEmailForm;

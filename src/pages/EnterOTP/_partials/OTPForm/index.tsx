import React, { FC, useState } from "react";
import { Form, Input, Button } from "antd";
import { DivWrapper } from "../../../VerifyEmail/styled";
import api from "../../../../config/api";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { SET_STUDENT_DATA } from "../../../../redux/constants";

interface IOTPProps {
  setIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUserDataProps {
  batch: string;
  email: string;
  id: number;
  is_active: boolean;
  is_paid: boolean;
  is_verified: boolean;
  name: string;
}

const OTPForm: FC<IOTPProps> = ({ setIsVerified }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();
  const studentData = useAppSelector((state) => state.student.studentData);

  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as { otp: string };
      setIsLoading(true);

      const { status, data } = await api.student.otpVerification(values);

      console.log("OTP Data", data);

      if (status >= 200 && status < 300) {
        // Save data in Redux Store
        // localStorage.setItem("userData", JSON.stringify(data.data));

        dispatch({
          type: SET_STUDENT_DATA,
          payload: data.data,
        });

        setIsLoading(false);
        setIsVerified(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <DivWrapper>
      <h1 className="title">Welcome {studentData.name}.</h1>
      <p>Please enter the OTP sent to your email.</p>

      <Form
        name="enter-otp-form"
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item name="otp">
          <Input type="number" />
        </Form.Item>
        <Button
          className="w-100"
          loading={isLoading}
          type="primary"
          htmlType="submit"
        >
          Verify
        </Button>
      </Form>
    </DivWrapper>
  );
};

export default OTPForm;

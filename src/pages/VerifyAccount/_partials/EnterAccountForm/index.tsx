import React, { FC, useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { DivWrapper } from "../../../VerifyEmail/styled";
import api from "../../../../config/api";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { SET_ACCOUNT_DATA } from "../../../../redux/constants";

const { Option } = Select;

interface IComponentProps {
  setHasEnteredAccount: React.Dispatch<React.SetStateAction<boolean>>;
  setAccountData: React.Dispatch<React.SetStateAction<{}>>;
}

interface IBankProps {
  id: number;
  bank_name: string;
  paystack_code: string;
}

const EnterAccountForm: FC<IComponentProps> = ({
  setHasEnteredAccount,
  setAccountData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [banks, setBanks] = useState<IBankProps[]>([]);
  const [form] = Form.useForm();

  const studentData = useAppSelector((state) => state.student.studentData);

  const fetchBanks = async () => {
    try {
      const { status, data } = await api.student.getBanks();

      if (status >= 200 && status < 300) {
        setBanks(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchBanks();
  }, []);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      setIsLoading(true);

      const { status, data } = await api.student.bankVerification({
        ...values,
        student_id: studentData.id,
      });

      console.log({ status, data });

      if (status >= 200 && status < 300) {
        setIsLoading(false);

        dispatch({
          type: SET_ACCOUNT_DATA,
          payload: data,
        });
        // setAccountData(data.data);
        setHasEnteredAccount(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <DivWrapper>
      <h1 className="title">Verify Account</h1>
      <p>Please enter your account details below.</p>

      <Form
        name="verify-email-form"
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item
          name="account_num"
          label="Enter NUBAN Account"
          rules={[
            {
              message: "please enter your accouunt number!",
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter your 10-digit NUBAN Account" />
        </Form.Item>

        <Form.Item name="bank_id" label="Select Bank">
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) => {
              return (
                option?.data.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            }}
          >
            {banks.map(({ bank_name, id, paystack_code }) => (
              <Option key={paystack_code} value={id} data={bank_name}>
                {bank_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Button
          className="w-100"
          loading={isLoading}
          type="primary"
          htmlType="submit"
        >
          Enter
        </Button>
      </Form>
    </DivWrapper>
  );
};

export default EnterAccountForm;

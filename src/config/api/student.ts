import { AxiosInstance, AxiosResponse } from "axios";

type IEmailVerificationResponse = {
  id: number;
  name: string;
  email: string;
  batch: string;
  time_added: string;
  is_active: boolean;
  is_padi: boolean;
  is_verified: boolean;
};

class Student {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  getBanks() {
    return this.client.get("/banks/");
  }

  bankVerification(data: {
    account_num: number;
    bank_id: number;
    student_id: number;
  }) {
    return this.client.post("/students/bank_verification/", data);
  }

  emailVerification(data: {
    email: string;
  }): Promise<AxiosResponse<IEmailVerificationResponse>> {
    return this.client.post("students/email_verification/", data);
  }

  otpVerification(data: { otp: string }) {
    return this.client.post("/students/otp_verification/", data);
  }

  saveBankDetails(data: {
    account_number?: string;
    account_name?: string;
    bank?: number;
    student?: number;
    // recipient_code: string;
    // id: number;
  }) {
    return this.client.post("/students/save_bank_details/", data);
  }

  upload(data: any) {
    return this.client.post("/students/upload/", data);
  }
}

export default Student;

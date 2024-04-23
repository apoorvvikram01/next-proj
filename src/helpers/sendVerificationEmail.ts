import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/apiResponse";
import { string } from "zod";

export async function sendVerificationEmail (
     email: string,
    username: string,
    verifyCode: string) : Promise <ApiResponse>  {
   try {
    const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'Next project message verification code ',
        react: VerificationEmail({username,otp:verifyCode}),
      });
  
    return  {success: true, message: "Verification email sent successfully"}
   } catch (emailError) {
    console.error("Error sending verification email", emailError);
    return {success: false, message:"Failed to send verification email"}
   }
}
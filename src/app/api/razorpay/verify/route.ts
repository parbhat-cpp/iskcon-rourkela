import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Razorpay from "razorpay";

export async function POST(request: Request) {
    try {
        const {
            razorpayOrderId,
            razorpaySignature,
            razorpayPaymentId,
        } = await request.json();

        const isValid = validatePaymentVerification({
            order_id: razorpayOrderId,
            payment_id: razorpayPaymentId,
        }, razorpaySignature, process.env.RAZORPAY_KEY_SECRET!);

        if (!isValid) {
            throw new Error("Invalid signature");
        }

        const payment = await Razorpay.payment.fetch(razorpayPaymentId);

        if (payment.status !== "captured") {
            throw new Error("Payment not captured");
        }

        return NextResponse.json({
            success: true,
            error: null,
        });
    } catch (e) {
        return NextResponse.json({
            success: null,
            error: e,
        });
    }
}

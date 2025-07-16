import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { v4 as uuid } from "uuid";

const razorPayInstance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const totalAmount = Number(searchParams.get("amount"));

        const amount = totalAmount * 100;
        const options = {
            amount: amount.toString(),
            currency: "INR",
            receipt: uuid(),
        };

        const order = await razorPayInstance.orders.create(options);
        if (order) {
            return NextResponse.json({ success: true, order, error: null });
        }
    } catch(e) {
        return NextResponse.json({ success: null, error: e });
    }
}

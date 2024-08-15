import express, { Request, Response } from "express";
import { globalErrorHandler } from "./common/middleware/globalErrorHandler";
import cookieParser from "cookie-parser";
import customerRouter from "./customer/customerRouter";
import couponRouter from "./coupon/couponRouter";
import orderRouter from "./order/orderRouter";
import paymentRouter from "./payment/paymentRouter";
import cors from "cors";

const app = express();

app.use(
    cors({
        // todo: move to .env file.
        origin: ["http://localhost:3000", "http://localhost:5173","http://127.0.0.1:3000", "http://127.0.0.1:5173"],
        credentials: true,
    }),
);
app.use(cookieParser());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from order service service!" });
});

app.use("/customer", customerRouter);
app.use("/coupons", couponRouter);
app.use("/orders", orderRouter);
app.use("/payments", paymentRouter);
app.use(globalErrorHandler);

export default app;

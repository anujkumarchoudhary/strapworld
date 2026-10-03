import { NextRequest, NextResponse } from "next/server";
import express from "express";
import helmet from "helmet";

import enquiryRoutes from "@/backend/routes/enquiry.routes";
import serviceRoutes from "@/backend/routes/service.routes";

const app = express();

app.use(helmet());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Strap World backend API is running",
  });
});

app.use("/api/enquiries", enquiryRoutes);
app.use("/api/services", serviceRoutes);

async function handler(
  request: NextRequest
) {
  return new Promise<Response>((resolve) => {
    const req = request as any;

    const res = {
      statusCode: 200,
      headers: new Headers(),

      status(code: number) {
        this.statusCode = code;
        return this;
      },

      json(data: unknown) {
        resolve(
          NextResponse.json(data, {
            status: this.statusCode,
          })
        );
      },

      send(data: unknown) {
        resolve(
          new NextResponse(
            typeof data === "string"
              ? data
              : JSON.stringify(data),
            {
              status: this.statusCode,
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
        );
      },

      setHeader(name: string, value: string) {
        this.headers.set(name, value);
      },
    };

    app(req, res as any, () => {
      resolve(
        NextResponse.json(
          {
            success: false,
            message: "API route not found",
          },
          { status: 404 }
        )
      );
    });
  });
}

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};
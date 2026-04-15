import { NextRequest, NextResponse } from "next/server";

// Simple in-memory store for contact submissions
const submissions: Array<{
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  practice: string;
  message: string;
  createdAt: string;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, practice, message } = body;

    // Validate required fields
    if (!name || !email || !practice || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, practice, message" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create submission
    const submission = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim(),
      company: company?.trim(),
      practice,
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    submissions.push(submission);

    console.log("New consultation request:", submission);

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request submitted successfully",
        id: submission.id,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    count: submissions.length,
  });
}

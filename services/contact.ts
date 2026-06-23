"use server";

import type { ContactFormState } from "@/types";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      status: "error",
      errorKey: "fieldsRequired",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      status: "error",
      errorKey: "invalidEmail",
    };
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Contact form submission:", { name, email, message });

    return {
      status: "success",
    };
  } catch {
    return {
      status: "error",
      errorKey: "genericError",
    };
  }
}

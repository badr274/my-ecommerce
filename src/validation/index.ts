import { z } from "zod";
export const addressSchema = z
  .object({
    country: z
      .string()
      .min(2, "Country must be at least 2 characters long")
      .max(50, "Country is too long"),
    city: z
      .string()
      .min(2, "City must be at least 2 characters long")
      .max(50, "City is too long"),
    street: z
      .string()
      .min(2, "Street must be at least 2 characters long")
      .max(50, "Street is too long"),
    postalCode: z.string().regex(/^\d{4,10}$/, "Invalid postal code format"),

    creditNumber: z
      .string()
      .min(16, "Credit card number must be at least 16 characters long")
      .max(16, "Credit card number is too long"),
    holderName: z
      .string()
      .min(2, "Credit card holder name must be at least 2 characters long")
      .max(50, "Credit card holder name is too long"),
    expiry: z
      .string()
      .min(4, "Credit card expiry must be at least 4 characters long")
      .max(4, "Credit card expiry is too long"),
    cvc: z
      .string()
      .min(3, "Credit card cvc must be at least 3 characters long")
      .max(3, "Credit card cvc is too long"),
  })
  .required();

// export const creditCartSchema = z
//   .object({
//     number: z
//       .string()
//       .min(16, "Credit card number must be at least 16 characters long")
//       .max(16, "Credit card number is too long"),
//     name: z
//       .string()
//       .min(2, "Credit card holder name must be at least 2 characters long")
//       .max(50, "Credit card holder name is too long"),
//     expiry: z
//       .string()
//       .min(4, "Credit card expiry must be at least 4 characters long")
//       .max(4, "Credit card expiry is too long"),
//     cvc: z
//       .string()
//       .min(3, "Credit card cvc must be at least 3 characters long")
//       .max(3, "Credit card cvc is too long"),
//   })
//   .required();

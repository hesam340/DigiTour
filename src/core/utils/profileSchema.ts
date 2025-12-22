import { z } from "zod";
import { zMelliCode, zSheba, zCardNumber } from "zod-ir";
import { validatePersianName } from "@/core/utils/helperValidation";

const persianRegex = /^[ \u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C]+$/;

export const profileSchema = z
  .object({
    email: z
      .string()
      .trim()
      .optional()
      .refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
        message: "ایمیل معتبر وارد کنید",
      }),

    firstName: z.string().trim().nullable().optional(),

    lastName: z.string().trim().nullable().optional(),

    nationalCode: z
      .string()
      .trim()
      .optional()
      .refine((val) => !val || zMelliCode().safeParse(val).success, {
        message: "کد ملی معتبر وارد کنید",
      }),

    gender: z
      .string()
      .trim()
      .nullable()
      .optional()
      .refine((val) => !val || ["female", "male"].includes(val), {
        message: "مقدار معتبر وارد کنید",
      }),

    birthDate: z.string().nullable().optional(),

    payment: z.object({
      shaba_code: z
        .string()
        .nullable()
        .optional()
        .transform((val) => {
          if (!val) return val;
          return `IR${val}`;
        })
        .refine((val) => !val || zSheba().safeParse(val).success, {
          message: "شماره شبا نامعتبر است!",
        })
        .transform((val) => {
          if (!val) return val;
          return val.replace(/^IR/, "");
        }),

      debitCard_code: z
        .string()
        .nullable()
        .optional()
        .refine((val) => !val || zCardNumber().safeParse(val).success, {
          message: "شماره کارت را بدون فاصله وارد کنید",
        }),

      accountIdentifier: z
        .string()
        .nullable()
        .optional()
        .refine((val) => !val || /^\d{6,20}$/.test(val), {
          message: "شماره حساب معتبر وارد کنید",
        }),
    }),
  })
  .superRefine((data, ctx) => {
    const { firstName, lastName } = data;

    if ((firstName || lastName) && firstName) {
      validatePersianName(firstName, "firstName", ctx);
    }

    if ((firstName || lastName) && lastName) {
      validatePersianName(lastName, "lastName", ctx);
    }

    if (lastName && !firstName) {
      ctx.addIssue({
        path: ["firstName"],
        message: "نام را وارد کنید",
        code: "custom",
      });
    }

    if (firstName && !lastName) {
      ctx.addIssue({
        path: ["lastName"],
        message: "نام خانوادگی را وارد کنید",
        code: "custom",
      });
    }
  });

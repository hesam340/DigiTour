import z from "zod";

const persianRegex = /^[ \u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C]+$/;

export const validatePersianName = (
  value: string,
  field: "firstName" | "lastName",
  ctx: z.RefinementCtx
) => {
  if (!persianRegex.test(value)) {
    ctx.addIssue({
      path: [field],
      message: "فقط حروف فارسی تایپ شود",
      code: "custom",
    });
  }

  if (value.length < 2) {
    ctx.addIssue({
      path: [field],
      message: "تعداد کاراکترها باید بیش از ۲ باشد",
      code: "custom",
    });
  }

  if (value.length > 15) {
    ctx.addIssue({
      path: [field],
      message: "تعداد کاراکترها باید کمتر از ۱۵ باشد",
      code: "custom",
    });
  }
};

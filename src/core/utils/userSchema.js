import { object, string } from "yup";

import { isValidIranianNationalCode } from "@/core/utils/validation";

const persianRegex = /^[ \u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C]+$/;

export const userSchema = object({
  fullName: string()
    .required("نام کامل خود را وارد کنید")
    .matches(persianRegex, "فقط حروف فارسی تایپ شود")
    .min(7, "تعداد کاراکترها باید بیش از 7 باشد")
    .max(40, "تعداد کاراکترها باید کمتر از 40 باشد")
    .trim(),
  nationalCode: string()
    .required("کد ملی را وارد کنید")
    .test("is-valid-national-code", "کد ملی معتبر وارد کنید", (value) =>
      isValidIranianNationalCode(value)
    )
    .trim(),
  gender: string().trim().required("جنسیت را وارد کنید"),
  birthDate: string().required("تاریخ تولد را وارد کنید"),
});

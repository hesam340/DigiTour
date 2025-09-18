import { object, string } from "yup";

import { isValidIranianNationalCode } from "@/utils/validation";

const persianRegex = /^[ \u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const shabaRegex = /^[0-9]{24}$/;
const debitRegex = /^\d{16}$/;
const accountRegex = /^\d{6,20}$/;

export const profileSchema = object({
  email: string()
    .test("email", "ایمیل معتبر وارد کنید", (val) => {
      if (!val || val.trim() === "") return true;
      return emailRegex.test(val);
    })
    .trim(),
  firstName: string()
    .nullable()
    .notRequired()
    .trim()
    .test("firstName-required-if-lastName", function (value) {
      const { lastName } = this.parent;

      if (!value && !lastName) return true;

      if (value && !persianRegex.test(value)) {
        return this.createError({ message: "فقط حروف فارسی تایپ شود" });
      }

      if (value && value.length < 2) {
        return this.createError({
          message: "تعداد کاراکترها باید بیش از ۲ باشد",
        });
      }

      if (value && value.length > 15) {
        return this.createError({
          message: "تعداد کاراکترها باید کمتر از ۱۵ باشد",
        });
      }

      if (lastName && !value) {
        return this.createError({ message: "نام را وارد کنید" });
      }

      return true;
    }),
  lastName: string()
    .nullable()
    .notRequired()
    .trim()
    .test("lastName-required-if-firstName", function (value) {
      const { firstName } = this.parent;

      if (!value && !firstName) return true;

      if (value && !persianRegex.test(value)) {
        return this.createError({ message: "فقط حروف فارسی تایپ شود" });
      }

      if (value && value.length < 2) {
        return this.createError({
          message: "تعداد کاراکترها باید بیش از ۲ باشد",
        });
      }

      if (value && value.length > 15) {
        return this.createError({
          message: "تعداد کاراکترها باید کمتر از ۱۵ باشد",
        });
      }

      if (firstName && !value) {
        return this.createError({ message: "نام خانوادگی را وارد کنید" });
      }

      return true;
    }),
  nationalCode: string()
    .notRequired()
    .test("is-valid-national-code", "کد ملی معتبر وارد کنید", (value) => {
      if (!value || value.trim() === "") return true;
      return isValidIranianNationalCode(value);
    })
    .trim(),
  gender: string()
    .nullable()
    .notRequired()
    .test("is-valid-gender", "مقدار معتبر وارد کنید", (value) => {
      if (!value) return true;
      return ["female", "male"].includes(value);
    })
    .trim(),
  birthDate: string().nullable().notRequired(),
  payment: object({
    shaba_code: string()
      .nullable()
      .notRequired()
      .test("is-valid-shaba", function (value) {
        if (!value) return true;
        if (!shabaRegex.test(value)) {
          return this.createError({ message: "شماره شبا نامعتبر است!" });
        }
        return true;
      }),
    debitCard_code: string()
      .nullable()
      .notRequired()
      .test("is-valid-debit", function (value) {
        if (!value) return true;
        if (!debitRegex.test(value)) {
          return this.createError({
            message: "شماره کارت را بدون فاصله وارد کنید",
          });
        }
        return true;
      }),
    accountIdentifier: string()
      .nullable()
      .notRequired()
      .test("is-valid-account", function (value) {
        if (!value) return true;
        if (!accountRegex.test(value)) {
          return this.createError({
            message: "شماره حساب معتبر وارد کنید",
          });
        }
        return true;
      }),
  }),
});

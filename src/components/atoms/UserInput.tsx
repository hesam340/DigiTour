import Image from "next/image";
import { Controller } from "react-hook-form";

import Icon from "@/core/utils/icon";
import { getBankInfo } from "zod-ir";
import { GENDER } from "@/core/enums/enums";
import { TUserInputs } from "@/core/types/props";
import { e2p, p2e } from "@/core/utils/replaceNumber";

function UserInput({ control, name, showGender, setShowGender }: TUserInputs) {
  const genderHandler = (
    e: React.MouseEvent<HTMLLIElement>,
    onChange: (value: string) => void
  ) => {
    e.preventDefault();
    if ((e.target as HTMLLIElement).tagName !== "LI") return;
    onChange((e.target as HTMLLIElement).dataset.gender!);
    setShowGender?.(false);
  };

  const genderOptions = {
    male: GENDER.MALE,
    female: GENDER.FEMALE,
  };

  const bankLogo = (value?: string): string | boolean | undefined => {
    if (!value) return undefined;
    const bank = getBankInfo(value);
    if (!bank) return false;
    return bank?.logo;
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => {
          return (
            <>
              <div
                className={`group flex items-center focus-within:outline-complementry rounded-[5px] outline outline-1 overflow-hidden ${
                  error?.message ? "outline-red-500" : "outline-[#00000080]"
                }`}
              >
                <input
                  type="text"
                  id={name}
                  placeholder=" "
                  value={
                    name === "nationalCode" ||
                    name === "payment.shaba_code" ||
                    name === "payment.debitCard_code" ||
                    name === "payment.accountIdentifier"
                      ? e2p(value || "")
                      : name === "gender"
                      ? genderOptions[value as keyof typeof genderOptions]
                      : value
                  }
                  readOnly={name === "gender" ? true : false}
                  inputMode={
                    name === "nationalCode" ||
                    name === "payment.shaba_code" ||
                    name === "payment.debitCard_code" ||
                    name === "payment.accountIdentifier"
                      ? "numeric"
                      : undefined
                  }
                  onFocus={
                    name === "gender" ? () => setShowGender?.(true) : undefined
                  }
                  onBlur={() => {
                    if (name === "gender") {
                      setShowGender?.(false);
                    }
                    onBlur();
                  }}
                  onChange={
                    name === "nationalCode" ||
                    name === "payment.shaba_code" ||
                    name === "payment.debitCard_code" ||
                    name === "payment.accountIdentifier"
                      ? (e) => {
                          onChange(
                            p2e(e.target.value.replace(/[^\d۰-۹]/g, ""))
                          );
                        }
                      : (e) => onChange(e)
                  }
                  className={`border-0 sm:px-3 text-right px-3 w-full h-[47px] text-sm font-light lg:text-base lg:font-normal text-[#282828] focus:outline-none`}
                />
                <label
                  htmlFor={name}
                  className={`absolute w-fit right-0 -translate-x-1 flex items-center gap-1 bg-white px-1 text-gray-400 text-base font-light lg:font-normal transition-all duration-[0.3s] pointer-events-none group-focus-within:-translate-y-[26px] ${
                    value && "-translate-y-[26px] text-base"
                  }`}
                >
                  {name === "fullName"
                    ? "نام و نام خانوادگی"
                    : name === "nationalCode"
                    ? "کد ملی"
                    : name === "gender"
                    ? "جنسیت"
                    : name === "firstName"
                    ? "نام"
                    : name === "lastName"
                    ? "نام خانوادگی"
                    : name === "email"
                    ? "آدرس ایمیل"
                    : name === "payment.shaba_code"
                    ? "شماره شبا"
                    : name === "payment.debitCard_code"
                    ? "شماره کارت"
                    : "شماره حساب"}
                </label>
                {name === "payment.debitCard_code" &&
                bankLogo(value) &&
                typeof bankLogo(value) === "string" ? (
                  <Image
                    src={bankLogo(value) as string}
                    alt="logo"
                    width={100}
                    height={100}
                    className="ml-1 size-8"
                  />
                ) : (
                  ""
                )}
                {name === "payment.shaba_code" && (
                  <span className="text-gray-500 ml-2">IR</span>
                )}
                {name === "gender" && (
                  <span>
                    <Icon
                      name="arrow-down"
                      className={`size-4 ml-2 fill-none stroke-slate-500 transition-all duration-300 ${
                        showGender ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                )}
              </div>
              <p className="h-2 mb-5 lg:mb-6 text-sm font-light text-red-500 md:text-base lg:font-normal">
                {error?.message}
              </p>
              {showGender && (
                <div className="absolute top-[54px] w-full z-10 bg-[#F8F8F8] border rounded-lg border-[#00000033]">
                  <ul className="divide-y divide-[#0000001F] bg-white">
                    <li
                      data-gender="male"
                      onMouseDown={(e) => genderHandler(e, onChange)}
                      className="py-2 px-2 cursor-pointer text-base"
                    >
                      مرد
                    </li>
                    <li
                      data-gender="female"
                      onMouseDown={(e) => genderHandler(e, onChange)}
                      className="py-2 px-2 cursor-pointer text-base"
                    >
                      زن
                    </li>
                  </ul>
                </div>
              )}
            </>
          );
        }}
      />
    </>
  );
}

export default UserInput;

"use client";

import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { MESSAGES } from "@/core/enums/enums";
import { e2p, sp } from "@/core/utils/replaceNumber";
import TableSkeleton from "@/skeletons/TableSkeleton";
import { TTransaction } from "@/core/types/fetchData";
import { useGetUserData, useUserTransactions } from "@/core/services/queries";

function TransactionsPage() {
  const [userTransactions, setUserTransactions] = useState<TTransaction[] | []>(
    []
  );
  const { data: myProfile } = useGetUserData();
  const { data: myTransactions, error, isPending } = useUserTransactions();

  useEffect(() => {
    const userData = myTransactions?.data?.filter(
      (i) => i?.userId === myProfile?.data.id
    );
    if (userData) setUserTransactions(userData);
  }, [myProfile?.data, myTransactions?.data]);

  if (error) return toast.error(MESSAGES.UNKNOWN_ERRORS);

  if (!userTransactions?.length && !isPending)
    return (
      <div className="w-full h-lvh">
        <p className="text-center align-middle w-full text-lg font-semibold border border-gray-200 rounded-xl shadow-md py-8 px-3 max-lg:mt-10">
          شما هنوز هیچ تراکنشی انجام نداده اید!
        </p>
      </div>
    );

  return (
    <>
      {isPending ? (
        <TableSkeleton />
      ) : (
        <div className="rounded-[10px] overflow-y-auto border max-h-[600px] border-[#00000040] my-5 lg:mt-0 w-full lg:w-[68%] xl:w-[72%] min-h-lvh">
          <table className="table-fixed w-full">
            <thead className="bg-[#DBDBDB] rounded-t-[10px] sticky top-0 z-10">
              <tr className="*:text-sm *:md:text-[16px] *:font-normal *:text-[#282828CC] *:text-center *:py-4">
                <th>تاریخ و ساعت</th>
                <th>مبلغ(تومان)</th>
                <th className="hidden md:block">نوع تراکنش</th>
                <th>شماره سفارش</th>
              </tr>
            </thead>
            <tbody className="*:font-vazir">
              {userTransactions?.map((transaction) => (
                <TableRow key={transaction.id} data={transaction} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default TransactionsPage;

export function TableRow({ data }: { data: TTransaction }) {
  const { id, amount, createdAt, type } = data;

  return (
    <tr className="*:py-3 *:md:text-sm *:lg:text-base">
      <td className="text-[10px] font-light text-center">
        {new Date(createdAt).toLocaleTimeString("fa-IR", {
          hour: "2-digit",
          minute: "2-digit",
        })}{" "}
        - {new Date(createdAt).toLocaleDateString("fa-IR")}
      </td>
      <td className="text-[14px] font-light text-center">{sp(amount)}</td>
      <td className="hidden md:block font-light text-center">
        {type === "Purchase" ? "ثبت نام در تور گردشگری" : "خرید تکمیل نشده"}
      </td>
      <td className="text-[14px] font-light text-center">
        سفارش {e2p(id.split("-")[4].slice(0, 7))}
      </td>
    </tr>
  );
}

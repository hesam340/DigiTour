const e2p = (s: number | string): string =>
  s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

const p2e = (s: number | string): string =>
  s.toString().replace(/[۰-۹]/g, (d): any => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const sp = (number: number) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber?.join(",") || "";
  return e2p(joinedNumber);
};

export { e2p, p2e, sp };

import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Donasi Rasyaad.tv" },
    { name: "description", content: "Dukung rasyaad.tv terus beroperasi dan tetap menyebarkan dakwah" },
  ];
};

export default function Index() {
  return (
    <div className={`max-w-[480px] m-auto`}>
      <div className={`m-auto pt-2 pb-3 w-full`}>
        <img className={`max-w-full m-auto text-center`} src="https://www.rasyaad.tv/wp-content/uploads/2020/07/logo-rasyaad.png" alt="" />
        <h3 className={`text-2xl text-center font-bold`}>Donasi Rasyaad TV</h3>
      </div>
      <div className={`bg-light min-h-[50vh] rounded-xl shadow-sm`}>
        <div className={`p-5`}>
          <div className={`pt-[40px] text-center`}>
            <Link to="/donatur-tetap" className={`bg-primary text-light px-5 p-3 rounded-xl`}>Registrasi Donatur Tetap</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

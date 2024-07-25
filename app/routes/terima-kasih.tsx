import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
      {
        property: "og:type",
        content: "Website",
      },
      {
        property: "og:title",
        content: "Donasi Rasyaad.tv",
    },
      {
        property: "og:description",
        content: "Dukung rasyaad.tv terus beroperasi dan tetap menyebarkan dakwah",
    },
      {
        property: "og:image",
        content: "https://www.rasyaad.tv/wp-content/uploads/2024/07/Investasi-Yang-Tidak-Akan-Rugi-Investasi-Akhirat.png",
      },
      { title: "Daftar Menjadi Donasi Tetap Rasyaad.tv" },
      { name: "description", content: "Dukung rasyaad.tv terus beroperasi dan tetap menyebarkan dakwah" },
    ];
};

export default function TerimaKasihPage() {
    return (<div className={`max-w-[480px] m-auto`}>
        <div className={`m-auto pt-2 pb-3 w-full`}>
          <img className={`max-w-full m-auto text-center`} src="https://www.rasyaad.tv/wp-content/uploads/2020/07/logo-rasyaad.png" alt="" />
        </div>
        <div className={`bg-light rounded-xl shadow-sm mb-5`}>
            <div className={`p-8`}>
                <h3 className={`text-lg text-center font-semibold`}>Jazakallah Khair</h3>
                <p className={`text-md text-center`}>Semoga komitmen donasi yang kamu lakukan dapat menambah berat timbangan amal di akhirat kelak.</p>
            </div>
        </div>
    </div>)
}
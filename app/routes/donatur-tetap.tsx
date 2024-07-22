import React, { useState, ChangeEvent, useEffect } from 'react'
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, useActionData, json } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Daftar Menjadi Donasi Tetap Rasyaad.tv" },
    { name: "description", content: "Barangsiapa menunjukkan kepada kebaikan, maka dia akan mendapatkan pahala seperti pahala orang yang mengerjakannya" },
  ];
};

// export async function action({ request }: ActionFunctionArgs ) {
//     const formData = await request.formData();
//     const submission = parseWithZod(formData, { schema });
  
//     if (submission.status !== 'success') {
//       return json(submission.reply());
//     }
  
//     // ...
// }
  

export default function DonaturTetapPage() {
    const banks = [
        {
            "name": "Bank Mandiri",
            "code": "mandiri"
        },
        {
            "name": "Bank Rakyat Indonesia",
            "code": "bri"
        },
        {
            "name": "BNI (Bank Negara Indonesia)",
            "code": "bni"
        },
        {
            "name": "Bank Central Asia",
            "code": "bca"
        },
        {
            "name": "BSI (Bank Syariah Indonesia)",
            "code": "bsi"
        },
        {
            "name": "CIMB Niaga & CIMB Niaga Syariah",
            "code": "cimb"
        },
        {
            "name": "Muamalat",
            "code": "muamalat"
        },
        {
            "name": "Bank Danamon & Danamon Syariah",
            "code": "danamon"
        },
        {
            "name": "Bank Permata & Permata Syariah",
            "code": "permata"
        },
        {
            "name": "Maybank Indonesia",
            "code": "bii"
        },
        {
            "name": "Panin Bank",
            "code": "panin"
        },
        {
            "name": "TMRW/UOB",
            "code": "uob"
        },
        {
            "name": "OCBC NISP",
            "code": "ocbc"
        },
        {
            "name": "Citibank",
            "code": "citibank"
        },
        {
            "name": "Bank Artha Graha Internasional",
            "code": "artha"
        },
        {
            "name": "Bank of Tokyo Mitsubishi UFJ",
            "code": "tokyo"
        },
        {
            "name": "DBS Indonesia",
            "code": "dbs"
        },
        {
            "name": "Standard Chartered Bank",
            "code": "standard_chartered"
        },
        {
            "name": "Bank Capital Indonesia",
            "code": "capital"
        },
        {
            "name": "ANZ Indonesia",
            "code": "anz"
        },
        {
            "name": "Bank of China (Hong Kong) Limited",
            "code": "boc"
        },
        {
            "name": "Bank Bumi Arta",
            "code": "bumi_arta"
        },
        {
            "name": "HSBC Indonesia",
            "code": "hsbc"
        },
        {
            "name": "Rabobank International Indonesia",
            "code": "rabobank"
        },
        {
            "name": "Bank Mayapada",
            "code": "mayapada"
        },
        {
            "name": "BJB",
            "code": "bjb"
        },
        {
            "name": "Bank DKI Jakarta",
            "code": "dki"
        },
        {
            "name": "BPD DIY",
            "code": "daerah_istimewa"
        },
        {
            "name": "Bank Jateng",
            "code": "jawa_tengah"
        },
        {
            "name": "Bank Jatim",
            "code": "jawa_timur"
        },
        {
            "name": "Bank Jambi",
            "code": "jambi"
        },
        {
            "name": "Bank Sumut",
            "code": "sumut"
        },
        {
            "name": "Bank Sumbar (Bank Nagari)",
            "code": "sumatera_barat"
        },
        {
            "name": "Bank Riau Kepri",
            "code": "riau_dan_kepri"
        },
        {
            "name": "Bank Sumsel Babel",
            "code": "sumsel_dan_babel"
        },
        {
            "name": "Bank Lampung",
            "code": "lampung"
        },
        {
            "name": "Bank Kalsel",
            "code": "kalimantan_selatan"
        },
        {
            "name": "Bank Kalbar",
            "code": "kalimantan_barat"
        },
        {
            "name": "Bank Kaltim",
            "code": "kalimantan_timur"
        },
        {
            "name": "Bank Kalteng",
            "code": "kalimantan_tengah"
        },
        {
            "name": "Bank Sulselbar",
            "code": "sulselbar"
        },
        {
            "name": "Bank SulutGo",
            "code": "sulut"
        },
        {
            "name": "Bank NTB Syariah",
            "code": "nusa_tenggara_barat"
        },
        {
            "name": "BPD Bali",
            "code": "bali"
        },
        {
            "name": "Bank NTT",
            "code": "nusa_tenggara_timur"
        },
        {
            "name": "Bank Maluku",
            "code": "maluku"
        },
        {
            "name": "Bank Papua",
            "code": "papua"
        },
        {
            "name": "Bank Bengkulu",
            "code": "bengkulu"
        },
        {
            "name": "Bank Sulteng",
            "code": "sulawesi"
        },
        {
            "name": "Bank Sultra",
            "code": "sulawesi_tenggara"
        },
        {
            "name": "Bank Nusantara Parahyangan",
            "code": "nusantara_parahyangan"
        },
        {
            "name": "Bank of India Indonesia",
            "code": "india"
        },
        {
            "name": "Bank Mestika Dharma",
            "code": "mestika_dharma"
        },
        {
            "name": "Bank Sinarmas",
            "code": "sinarmas"
        },
        {
            "name": "Bank Maspion Indonesia",
            "code": "maspion"
        },
        {
            "name": "Bank Ganesha",
            "code": "ganesha"
        },
        {
            "name": "ICBC Indonesia",
            "code": "icbc"
        },
        {
            "name": "QNB Indonesia",
            "code": "qnb_kesawan"
        },
        {
            "name": "BTN/BTN Syariah",
            "code": "btn"
        },
        {
            "name": "Bank Woori Saudara",
            "code": "woori"
        },
        {
            "name": "BTPN",
            "code": "tabungan_pensiunan_nasional"
        },
        {
            "name": "Bank BTPN Syariah",
            "code": "btpn_syr"
        },
        {
            "name": "BJB Syariah",
            "code": "bjb_syr"
        },
        {
            "name": "Bank Mega",
            "code": "mega"
        },
        {
            "name": "Wokee/Bukopin",
            "code": "bukopin"
        },
        {
            "name": "Bank Bukopin Syariah",
            "code": "bukopin_syr"
        },
        {
            "name": "Bank Jasa Jakarta",
            "code": "jasa_jakarta"
        },
        {
            "name": "LINE Bank/KEB Hana",
            "code": "hana"
        },
        {
            "name": "Motion/MNC Bank",
            "code": "mnc_internasional"
        },
        {
            "name": "BRI Agroniaga",
            "code": "agroniaga"
        },
        {
            "name": "SBI Indonesia",
            "code": "sbi_indonesia"
        },
        {
            "name": "Blu/BCA Digital",
            "code": "royal"
        },
        {
            "name": "Nobu (Nationalnobu) Bank",
            "code": "nationalnobu"
        },
        {
            "name": "Bank Mega Syariah",
            "code": "mega_syr"
        },
        {
            "name": "Bank Ina Perdana",
            "code": "ina_perdana"
        },
        {
            "name": "Bank Sahabat Sampoerna",
            "code": "sahabat_sampoerna"
        },
        {
            "name": "Seabank/Bank BKE",
            "code": "kesejahteraan_ekonomi"
        },
        {
            "name": "BCA (Bank Central Asia) Syariah",
            "code": "bca_syr"
        },
        {
            "name": "Jago/Artos",
            "code": "artos"
        },
        {
            "name": "Bank Mayora Indonesia",
            "code": "mayora"
        },
        {
            "name": "Bank Index Selindo",
            "code": "index_selindo"
        },
        {
            "name": "Bank Victoria International",
            "code": "victoria_internasional"
        },
        {
            "name": "Bank IBK Indonesia",
            "code": "agris"
        },
        {
            "name": "CTBC (Chinatrust) Indonesia",
            "code": "chinatrust"
        },
        {
            "name": "Commonwealth Bank",
            "code": "commonwealth"
        },
        {
            "name": "Bank Victoria Syariah",
            "code": "victoria_syr"
        },
        {
            "name": "BPD Banten",
            "code": "banten"
        },
        {
            "name": "Bank Mutiara",
            "code": "mutiara"
        },
        {
            "name": "Panin Dubai Syariah",
            "code": "panin_syr"
        },
        {
            "name": "Bank Aceh Syariah",
            "code": "aceh"
        },
        {
            "name": "Bank Antardaerah",
            "code": "antardaerah"
        },
        {
            "name": "Bank China Construction Bank Indonesia",
            "code": "ccb"
        },
        {
            "name": "Bank CNB (Centratama Nasional Bank)",
            "code": "cnb"
        },
        {
            "name": "Bank Dinar Indonesia",
            "code": "dinar"
        },
        {
            "name": "BPR EKA (Bank Eka)",
            "code": "eka"
        },
        {
            "name": "Allo Bank/Bank Harda Internasional",
            "code": "harda"
        },
        {
            "name": "BANK MANTAP (Mandiri Taspen)",
            "code": "mantap"
        },
        {
            "name": "Bank Multi Arta Sentosa (Bank MAS)",
            "code": "mas"
        },
        {
            "name": "Bank Prima Master",
            "code": "prima"
        },
        {
            "name": "Bank Shinhan Indonesia",
            "code": "shinhan"
        },
        {
            "name": "Neo Commerce/Yudha Bhakti",
            "code": "yudha_bakti"
        },
        {
            "name": "GoPay",
            "code": "gopay"
        },
        {
            "name": "OVO",
            "code": "ovo"
        },
        {
            "name": "ShopeePay",
            "code": "shopeepay"
        },
        {
            "name": "Dana",
            "code": "dana"
        },
        {
            "name": "LinkAja",
            "code": "linkaja"
        }
    ];
    // Last submission returned by the server
    // const lastResult = useActionData<typeof action>();

    const [formData, setFormData] = useState({
        period_commitment: ""
    });
    
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };    

    return (
      <div className={`max-w-[480px] m-auto`}>
        <div className={`m-auto pt-2 pb-3 w-full`}>
          <img className={`max-w-full m-auto text-center`} src="https://www.rasyaad.tv/wp-content/uploads/2020/07/logo-rasyaad.png" alt="" />
        </div>
        <div className={`bg-light min-h-[50vh] rounded-xl shadow-sm mb-5`}>
          <div className={`p-8`}>
            <h3 className={`text-xl text-left font-semibold`}>Registrasi Donatur Tetap</h3>
            <Form action="/donatur-tetap" className={`pt-4`}>
                <div>
                    <label htmlFor="fullname" className={`block mb-2 text-sm font-medium text-dark`}>Nama</label>
                    <input defaultValue={''} type="text" name="fullname" id="fullname" required className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5`}/>
                </div>
                <div className={`mt-3`}>
                    <label htmlFor="phone" className={`block mb-2 text-sm font-medium text-dark`}>No. WA</label>
                    <input defaultValue={''} type="tel" name="phone" id="phone" required className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5`}/>
                </div>
                <div className={`mt-3`}>
                    <label htmlFor="display_name" className={`block mb-2 text-sm font-medium text-dark`}>Donasi Atas Nama <small>(Opsional)</small></label>
                    <input defaultValue={''} type="text" placeholder="Misal: Hamba Allah, Nama Orang Tua, dsb." name="display_name" id="display_name" required className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5`}/>
                </div>
                <div className={`mt-4`}>
                    <p className={`mb-1 text-md opacity-60 text-black`}>Informasi bank untuk konfirmasi donasi</p>
                    <label htmlFor="bank_name" className={`block mb-2 text-sm font-medium text-dark`}>Nama Bank</label>
                    <select defaultValue={''} name="bank_name" id="bank_name" required className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5`}>
                        <option value={""}>Pilih salah satu</option>
                        {
                            banks.map(bank => (
                                <option value={bank.code} key={bank.code}>{bank.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={`mt-3`}>
                    <label htmlFor="bank_account_name" className={`block mb-2 text-sm font-medium text-dark`}>Atas Nama</label>
                    <input type="text" name="bank_account_name" id="bank_account_name" defaultValue={''} required className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5`}/>
                </div>
                <div className={`mt-4`}>
                    <p className={`mb-1 text-md opacity-60 text-black`}>Komitmen donasi</p>
                    <label htmlFor="period_commitment" className={`block mb-2 text-sm font-medium text-dark`}>Periode</label>
                    <select defaultValue={''} name="period_commitment" id="period_commitment" required className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5`} onChange={handleInputChange}>
                        <option value={""}>Pilih salah satu</option>
                        <option value={"daily"}>Harian</option>
                        <option value={"weekly"}>Mingguan</option>
                        <option value={"monthly"}>Bulanan</option>
                    </select>
                </div>
                { formData.period_commitment === 'weekly' ? (
                <div className={`mt-3`}>
                    <label htmlFor="reminder_at_dayname" className={`block mb-2 text-sm font-medium text-dark`}>Diingatkan Hari</label>
                    <select defaultValue={''} name="reminder_at_dayname" id="reminder_at_dayname" required className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5`}>
                        <option value={""}>Pilih salah satu</option>
                        <option value={"monday"}>Senin</option>
                        <option value={"tuesday"}>Selasa</option>
                        <option value={"wednesday"}>Rabu</option>
                        <option value={"thursday"}>Kamis</option>
                        <option value={"friday"}>Jumat</option>
                        <option value={"saturday"}>Sabtu</option>
                        <option value={"sunday"}>Ahad</option>
                    </select>
                </div>
                ) : '' }
                { formData.period_commitment === 'monthly' ? (
                <div className={`mt-3`}>
                    <label htmlFor="reminder_at_date" className={`block mb-2 text-sm font-medium text-dark`}>Diingatkan Tanggal</label>
                    <select defaultValue={''} name="reminder_at_date" id="reminder_at_date" required className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5`}>
                        <option value={""}>Pilih salah satu</option>
                        {
                            Array(29).fill(1).map((x, y) => 
                                <option value={x + y} key={x + y}>{x + y}</option>
                            )
                        }
                    </select>
                </div>
                ) : '' }


                <div className={`mt-3`}>
                    <label htmlFor="nominal_commitment" className={`block mb-2 text-sm font-medium text-dark`}>Nominal</label>
                    <input type="number" name="nominal_commitment" id="nominal_commitment" defaultValue={''} required className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5`}/>
                </div>
                <div className={`mt-5`}>
                    <button type="submit" className={`bg-primary w-full text-light p-2 rounded-xl`}>Submit</button>
                </div>

            </Form>
          </div>
        </div>
      </div>
    );
}
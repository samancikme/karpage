import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Form() {
    const [formData, setFormData] = useState({
        ism: "",
        familya: "",
        telefon: "",
        email: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        setLoading(false);
        if (response) {
            alert("Ma'lumotlar muvaffaqiyatli jo'natildi!");
            setFormData({ ism: "", familya: "", telefon: "", email: "" });
        }
    };
    const { t, i18n } = useTranslation();


    return (
        <div className="flex items-start justify-center bg-gradient-to-r p-20 h-max">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg w-full min-w-[350px] max-w-[1000px]">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="ism"
                        placeholder={t('form.name')}
                        value={formData.ism}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required />
                    <input
                        type="tel"
                        name="telefon"
                        placeholder={t('form.phone')}
                        value={formData.telefon}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={t('form.email')}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                    <div className="flex justify-end"> 
                        <motion.button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
                            whileTap={{ scale: 0.95 }}
                            disabled={loading}
                        >
                            {loading ? <span>{t('form.submiting')}</span> : <span>{t('form.submit')}</span>}
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

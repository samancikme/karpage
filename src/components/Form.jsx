import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Form() {
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "https://script.google.com/macros/s/AKfycbxzrqfraHfi03VnXkbv78Y1X1eE1nUfDQVSFeG2_IFvj8zi37ti_qXlXOtSYKvbuP2S_Q/exec"
        setLoading(true)
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: (`Name=${e.target.name.value}&Email=${e.target.email.value}&Phone=${e.target.phone.value}`)
        }).then(res => res.text()).then(data => {
            alert(t('form.success'))
            setLoading(false)
            e.target.name.value = ""
            e.target.email.value = ""
            e.target.phone.value = ""
        }).catch(error => {
            alert(t('form.error'))
            setLoading(false)
            e.target.name.value = ""
            e.target.email.value = ""
            e.target.phone.value = ""
            console.log(error)})
    }
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
                        name="name"
                        placeholder={t('form.name')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required />

                    <input
                        type="tel"
                        name="phone"
                        placeholder={t('form.phone')}
                        pattern="[+]{0,1}[0-9]{9,15}"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={t('form.email')}
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

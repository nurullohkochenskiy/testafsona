import React, { useState } from "react";
import "../styles/cta.scss";
import "../styles/notifications.scss"; // Add this line to import the notification styles
import { useTranslations } from "next-intl";

interface OrderModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const t = useTranslations("Layout")
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notification, setNotification] = useState<string | null>(null); // Add this line

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) {
      setNotification("Please fill out all required fields."); // Replace alert with notification
      return;
    }

    const message = `Name: ${name}\nNumber: ${phone}`;
    const token = "8068913561:AAErR3bVv7Dbn9aV9r4_4uWDbZBUEt1inG4";
    const chat_id = -1002425887974;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: message,
        }),
      });

      setNotification(t("notification.sentSuccessfully")); // Replace alert with notification
      setName("");
      setPhone("");
      setTimeout(() => {
        setNotification(null)
        setIsModalOpen(false)
      }, 2000); // Close modal after 2 seconds
    } catch (error) {
      // console.error("Error sending message:", error);
      setNotification(t("notification.sentFailed")); // Replace alert with notification
    }
  };

  if (isModalOpen === false) {
    return null;
  }

  return (
    <div className="fixed z-50 top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[300px] min-h-[300px] relative">
        <div className="relative pl-[30px] pr-[40px] py-[50px]">
          {notification && ( // Add this block for notification
            <div className="notification">
              {notification}
            </div>
          )}
          <form className="font-arsenal" onSubmit={handleSubmit}>
            <div className="text-black mb-[10px] text-[22px] font-bold">
             {t("ordercallmodal.heading")}
            </div>
            <div className="w-[50px] h-[2px] bg-black"></div>

            {/* Name Field */}
            <div className="mt-[30px] mb-[10px] text-[14px]">
              <div className="mb-[5px] text-[rgb(77,77,77)]">
                {t("ordercallmodal.yourname")}:<span className="text-[rgb(255,0,0)]">*</span>
              </div>
              <input
                className="w-full h-[45px] border border-[rgb(197,197,197)] px-[15px] py-[7px] rounded-[25px]"
                type="text"
                placeholder={t("ordercallmodal.yourname")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Phone Field */}
            <div className="mb-[10px] text-[14px]">
              <div className="mb-[5px] text-[rgb(77,77,77)]">
                {t("ordercallmodal.yournumber")}:
                <span className="text-[rgb(255,0,0)]">*</span>
              </div>
              <input
                className="w-full h-[45px] border border-[rgb(197,197,197)] px-[15px] py-[7px] rounded-[25px]"
                type="text"
                placeholder= {t("ordercallmodal.yournumber")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex">
              <button
                type="submit"
                className="order_call text-white mt-[20px] bg-[#23bfef] rounded-[250px] cursor-pointer px-[30px] py-[16px]"
              >
                {t("ordercallmodal.sendbtn")}
              </button>
            </div>
          </form>
        </div>

        {/* Close Button */}
        <div
          onClick={() => setIsModalOpen(false)}
          className="close_btn cursor-pointer absolute top-0 right-0 mr-[-20px] mt-[-20px] bg-black w-[40px] h-[40px] flex justify-center items-center rounded-[250px]"
        >
          <span id="iuj2qtq5v_0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              width="20"
              height="20"
              viewBox="0 0 31.344 31.344"
              fill="#fff"
            >
              <path
                d="M21.049 12.354l-1.715-1.715L29.639.334l1.715 1.714-10.305 10.306zm7.941 18.343l-29-29L1.697-.01l29 29-1.707 1.707zm-16.636-9.649L2.048 31.354.334 29.639l10.305-10.305 1.715 1.714z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
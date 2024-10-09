import React, { useState } from "react";
import "../../../styles/orderTour.scss";
import "../../../styles/notifications.scss"; // Add this line to import the notification styles
import { useTranslations } from "next-intl";

const OrderTour = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notification, setNotification] = useState<string | null>(null); // Add this line
  const t = useTranslations("Layout");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!name || !phone) {
    //   setNotification("Please fill out all required fields."); // Replace alert with notification
    //   return;
    // }

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
        setNotification(null);
      }, 2000); // Clear notification after 2 seconds
    } catch (error) {
      // console.error("Error sending message:", error);
      setNotification(t("notification.sentFailed")); // Replace alert with notification
    }
  };

  return (
    <div className="relative z-10 order_tour_wrapper bg-[#F6F6F6]">
      <div className="order_tour_bg p-[60px]">
        <div className="order_tour w-[80%] mx-[auto]">
          {notification && ( // Add this block for notification
            <div className="notification">{notification}</div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col items-center ">
            <div className="bg-[rgba(35,191,239,1)] flex justify-center items-center text-white rounded-[20px] px-[15px] py-[7px] ">
              <div className=" text-white w-[3px] h-[3px] bg-white [box-shadow:0px_0px_5px_3px_rgba(255,255,255,0.6)]"></div>
              <div className="pl-[15px] text-[16px] font-light uppercase text-left leading-[100%]">
                {t("ordercallsection.sectionName")}
              </div>
            </div>
            <div className="text_form font-arsenal mb-[40px]">
              {t("ordercallsection.heading")}
            </div>
            <div className="order_input font-arsenal w-full justify-between ">
              <div className="name w-full mx-[10px]">
                <input
                  className="w-full p-[20px] text-[rgba(85,85,85,1)] text-[16px] border rounded-[25px]"
                  type="text"
                  placeholder={t("ordercallsection.yourname")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="phone w-full mx-[10px]">
                <input
                  className="w-full p-[20px] text-[rgba(85,85,85,1)] text-[16px] border rounded-[25px]"
                  type="text"
                  placeholder={t("ordercallsection.yournumber")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="submit px-[35px] py-[20px] bg-[rgba(35,191,239,1)] cursor-pointer text-white rounded-[250px] "
              >
                {t("ordercallsection.sendbtn")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderTour;

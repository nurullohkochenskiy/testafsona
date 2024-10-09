import React, { useState } from "react";
import { TextField, MenuItem, Button, Typography } from "@mui/material";
import "../../styles/booktour/booktour.scss"; // Ensure the correct path for your styles
import { useTranslations } from "next-intl";

const BookTour = () => {
  const t = useTranslations("HomePage.booktourform")
  const notificationT = useTranslations("Layout.notification")
  const tourTypes1 = [
    t("category.options.classic"),
    t("category.options.cruise"),
    t("category.options.shopping"),
    t("category.options.excursion"),
    t("category.options.religious"),
    t("category.options.gastronomic"),
  ];
  const tourTypes2 = [
    t("type.options.family"),
    t("type.options.group"),
    t("type.options.individual"),
  ];
  // Add state variables
  const [tourCategory, setTourCategory] = useState("");
  const [tourType, setTourType] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [notification, setNotification] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !tourCategory ||
      !tourType ||
      !priceFrom ||
      !priceTo ||
      !dateFrom ||
      !dateTo ||
      !peopleCount ||
      !fullName ||
      !contact
    ) {
      // setNotification("Please fill out all required fields.");
      return;
    }

    const message = `Name: ${fullName}, Contact: ${contact}, Tour Category: ${tourCategory}, Tour Type: ${tourType}, Price From: ${priceFrom}, Price To: ${priceTo}, Date From: ${dateFrom}, Date To: ${dateTo}, People Count: ${peopleCount}`;
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

      setNotification(notificationT("sentSuccessfully"));
      // Reset form fields
      setTourCategory("");
      setTourType("");
      setPriceFrom("");
      setPriceTo("");
      setDateFrom("");
      setDateTo("");
      setPeopleCount("");
      setFullName("");
      setContact("");
    } catch (error) {
      // console.error("Error sending message:", error);
      setNotification(notificationT("sentFailed"));
    }
  };
  return (
    <div className="booktour_form relative z-10 bg-white px-[5%] py-[50px]">
      <form onSubmit={handleSubmit}>
        {/* Notification */}
        {notification && <div className="notification">{notification}</div>}
        <div className="section_name flex justify-center">
          <Typography
            variant="h6"
            gutterBottom
            className="bg-[#23bfef] px-[13px] py-[3px] rounded-[20px] text-white font-arsenal text-[16px]"
          >
            {t("sectionName")}
          </Typography>
        </div>

        <div className="upper_side flex justify-between mt-5">
          {/* Dropdown for Tour Type */}
          <TextField
            className=" typeof_tour w-[24%] "
            select
            label={t("category.label")}
            variant="outlined"
            fullWidth
            margin="normal"
            value={tourCategory}
            required
            onChange={(e) => setTourCategory(e.target.value)}
          >
            {tourTypes1.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {/* Dropdown for Tour Type 2 */}
          <TextField
            className="typeof_tour w-[23%]"
            select
            label={t("type.label")}
            variant="outlined"
            fullWidth
            margin="normal"
            value={tourType}
            required
            onChange={(e) => setTourType(e.target.value)}
          >
            {tourTypes2.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <div className="price_date flex justify-between w-[49%]">
            {/* Price Input Group */}
            <div className="price flex justify-between w-[48%]">
              <div className="w-[48%]">
                <TextField
                  label={t("price.pricefrom")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="number"
                  placeholder={t("price.from")}
                  value={priceFrom}
                  required
                  onChange={(e) => setPriceFrom(e.target.value)}
                />
              </div>
              <div className="w-[48%]">
                <TextField
                  label={t("price.priceupto")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="number"
                  placeholder={t("price.priceupto")}
                  value={priceTo}
                  required
                  onChange={(e) => setPriceTo(e.target.value)}
                />
              </div>
            </div>
            {/* Date Input Group */}
            <div className="date flex justify-between w-[48%] ">
              <div className="w-[48%]">
                <TextField
                  label={t("date.datefrom")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
              </div>
              <div className="w-[48%]">
                <TextField
                  label={t("date.dateuntil")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bottom_side flex justify-between items-center">
          <div className="people_contacts flex w-[75%] justify-between">
            {/* Amount of People Input */}
            <TextField
              className="people_contacts_item w-[32%]"
              label={t("amoutofpeople")}
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              value={peopleCount}
              required
              onChange={(e) => setPeopleCount(e.target.value)}
            />

            {/* Full Name Input */}
            <TextField
              className="people_contacts_item w-[32%]"
              label={t("yourfullname")}
              variant="outlined"
              fullWidth
              margin="normal"
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
            />

            {/* Contact Input */}
            <TextField
              className="people_contacts_item w-[32%]"
              label={t("contact")}
              variant="outlined"
              fullWidth
              margin="normal"
              value={contact}
              required
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <Button
            className="submit_btn w-[23%] h-[56px] rounded-[250px]"
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#23bfef",
              "&:hover": { backgroundColor: "#1a9ed8" },
            }}
          >
            {t("booktourbtn")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookTour;
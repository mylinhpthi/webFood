import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles} from "@material-ui/styles";
import { useEffect } from "react";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import { LinkTwoTone } from "@material-ui/icons";
const useStyle = makeStyles({
  root: {
    padding: "10px",
    borderRadius:'5px',    
    display: "flex",
    flexDirection: "column",
    width: "90%",
    margin: " 0 auto 1rem auto",
    background: "#fff",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  },
  input: {
    width: "90%",
    margin: " 10px auto ",
  },
  inputRow: {
    padding: "5px",
  },
  inputInput: {
    width: "100%",
  },
});
function CollectionCreateItem({ onNewData, item }) {
  const classes = useStyle();
  const [isError, setIsError] = useState(false);
  const [formDataLink, setFormDataLink] = useState({});
  const handleChange = (field) => (event) => {
    setFormDataLink((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };
  const testUrl = {
    Facebook:
      /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/i,
    Email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    Twitter: /\@([a-zA-Z0-9_]+)/i,
    Instagram: /\@([a-zA-Z0-9_]+)/i,
    Youtube:
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
    Soundcloud: /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/,
    LinkedIn: /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/gim,
    WhatsApp:
      /^(https?:\/\/)?chat\.whatsapp\.com\/(?:invite\/)?([a-zA-Z0-9_-]{22})$/,
    TikTok: /\@(?!.*\.\.)(?!.*\.$)[^\W][\w.]{2,24}/,
    Amazon: /^https:\/\/www\.amazon\.com\/gp\/mas\/get\/android\?story\=/,
  };
  const handleTestUrl = (type, link) => {
    const isValid = testUrl[type].test(link);
    if (!link) {
      onNewData(formDataLink);
      setIsError(false);
    } else if (isValid) {
      onNewData(formDataLink);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };
  useEffect(() => {
    if (item) {
      const { type, link, color } = item || {};
      setFormDataLink({ type, link, color });
    }
  }, [item]);
  return (
    <form className={classes.root}>
      <div className={classes.input}>
        <div className={classes.inputRow}>
          <TextField
            value={formDataLink["link"] || ""}
            error={isError}
            helperText={isError ? "Invalid entry." : ""}
            label={formDataLink["type"]}
            onChange={handleChange("link")}
            name="link"
            inputProps={{ style: { fontSize: ".8rem" } }} // font size of input text
            InputLabelProps={{ style: { fontSize: "1rem" } }} // font size of input label
            onBlur={() =>
              handleTestUrl(formDataLink["type"], formDataLink["link"])
            }
            className={classes.inputInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkTwoTone color="primary"/>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </form>
  );
}
export default CollectionCreateItem;

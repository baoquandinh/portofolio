import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Grid,
  Modal,
  Paper,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { ContactMeSvg } from "./img/ContactMeSvg";
import { useState } from "react";
import emailjs from "emailjs-com";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    paddingTop: 10,
  },
  buttonProgress: {
    position: "absolute",
    marginLeft: -67,
    marginTop: 7,
    color: "green",
  },
  buttonSuccess: {
    backgroundColor: "green",
  },
  disabled: {
    backgroundColor: "green",
    pointerEvents: "none",
  },
  gridContainer: {
    height: "100%",
    width: "100%",
  },
  gridItem: {
    height: "100%",
    width: "50%",
  },
  typography: {
    textAlign: "center",
  },
  contactFormGridContainer: {
    height: "100%",
    width: "100%",
    border: "1px red solid",
  },
  contactFormGridItem: {
    width: "100%",
    height: "25%",
    textAlign: "center",
  },
  textInputField: {
    width: "100%",
    padding: "15px 0px 0px 0px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    height: "80%",
    width: "100%",
  },
}));

export const ContactMe = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = () => {
    if (name == "" || email == "" || message == "") {
      console.error("missing information");
      return;
    }

    const emailParams = {
      name,
      email,
      message,
    };
    setLoading(true);
    setTimeout(() => {
      setEmailSent(true);
      setLoading(false);
    }, 3000);
    // emailjs
    //   .send(
    //     "service_86dgq1p",
    //     "template_7axkvtc",
    //     emailParams,
    //     "user_UfC3xQimf9UCPJKwL75dC"
    //   )
    //   .then(
    //     (response) => {
    //       if (response.status == 200) {
    //         setEmailSent(true);
    //         setLoading(false);
    //       }
    //     },
    //     (error) => {
    //       console.error(`There was an error sending the email`, error);
    //     }
    //   );
  };
  return (
    <Grid container justifyContent="center" className={classes.gridContainer}>
      <Grid item>
        <Box className={classes.boxContainer}>
          <Typography variant="h4" component="h4">
            Get In Touch
          </Typography>
          <Typography variant="subtitle1" component="h5">
            Feel free to message me with any questions!
          </Typography>
          <TextField
            variant="filled"
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={classes.textInputField}
          ></TextField>
          <TextField
            variant="filled"
            placeholder="Enter your email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={classes.textInputField}
          ></TextField>
          <TextField
            className={classes.textInputField}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            multiline
            variant="filled"
            minRows={6}
            placeholder="Go ahead, what are your questions..."
          />
          <Box className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={
                emailSent ? (
                  <CheckIcon className={classes.buttonSuccess} />
                ) : (
                  <SendIcon />
                )
              }
              onClick={sendEmail}
              className={"" + (emailSent && !loading ? classes.disabled : "")}
            >
              {emailSent && !loading ? "Email Sent" : "Send"}
            </Button>
            {loading && (
              <CircularProgress size={30} className={classes.buttonProgress} />
            )}
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box
          display={{ xs: "none", md: "block" }}
          className={classes.boxContainer}
        >
          <ContactMeSvg />
        </Box>
      </Grid>
    </Grid>
  );
};

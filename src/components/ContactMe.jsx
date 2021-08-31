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
  button: {
    marginBottom: 10,
    width: 250,
  },
  buttonProgress: {
    position: "absolute",
    marginLeft: -67,
    marginTop: 7,
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
    padding: 15,
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
    emailjs
      .send(
        "service_86dgq1p",
        "template_7axkvtc",
        emailParams,
        "user_UfC3xQimf9UCPJKwL75dC"
      )
      .then(
        (response) => {
          if (response.status == 200) {
            setEmailSent(true);
            setLoading(false);
          }
        },
        (error) => {
          console.error(`There was an error sending the email`, error);
        }
      );
  };
  return (
    <Grid container className={classes.gridContainer}>
      <Grid
        container
        item
        className={classes.gridItem}
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item style={{ width: "100%" }}>
          <Typography variant="h3" component="h3">
            Get In Touch
          </Typography>
          <Typography variant="h4" component="h4">
            Feel free to message me with any questions!
          </Typography>
          <Grid container direction="column">
            <form noValidate autoComplete="off">
              <Grid item>
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
              </Grid>
            </form>

            <Grid item style={{ textAlign: "center" }}>
              <Box>
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
                  className={loading || emailSent ? classes.disabled : ""}
                >
                  {emailSent ? "Email Sent" : "Send"}
                </Button>
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.buttonProgress}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        className={classes.gridItem}
        style={{ height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <ContactMeSvg />
        </Grid>
      </Grid>
    </Grid>
  );
};

import React, {useEffect, useState}from 'react';
import { CircularProgress, Grid } from '@mui/material';
import MKAlert from 'components/MKAlert';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKInput from 'components/MKInput';
import MKButton from 'components/MKButton';
import { analytics } from 'firebaseConfig';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  
  // handle form submit
  const handleSubmit = event => {
    event.preventDefault()
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.REACT_APP_SITE_KEY, { action: 'submit' })
        .then(token => {
          setLoading(true)
          sendEmail(token)
          setFormData({
            name: '',
            email: '',
            message: '',
          })
        })
    })
  }

  // call cloud function to send email
  const sendEmail = async (token) => {
    const url = process.env.REACT_APP_FIREBASE_CLOUD_FUNCTION_URL + '/sendEmail'
    const response = await fetch(url, {
      mode: 'cors',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
      },
      body: JSON.stringify({
        "name": formData.name,
        "email": formData.email,
        "message": formData.message,
        "g-recaptcha-response": token
      })
    }).then(res => {
        analytics.logEvent('contact_form_submitted')
        setLoading(false)
        setSuccess(true)
        return res
    }).catch(error => {
      setError(true)
      setLoading(false)
    })
    return response
  }
  
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);
 
      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }
 
      if (isScriptExist && callback) callback();
    }
    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_SITE_KEY}`);
  }, []);

  return (
    <Grid container spacing={3} alignItems="center" justifyContent={"center"}>
      <Grid
        item
        justifyContent="center"
        xs={12}
        lg={8}
        ml={{ xs: "auto", lg: 6 }}
        mr={{ xs: "auto", lg: 6 }}
      >
        <MKBox
          bgColor="white"
          borderRadius="xl"
          shadow="lg"
          display="flex"
          flexDirection="column"
          mt={{ xs: 20, sm: 18, md: 20 }}
          mb={{ xs: 20, sm: 18, md: 20 }}
          mx={3}
        >
          <MKBox
            variant="gradient"
            bgColor="info"
            coloredShadow="info"
            borderRadius="lg"
            p={2}
            mx={2}
            mt={-3}
          >
            <MKTypography variant="h3" color="white">
              Contact us
            </MKTypography>
          </MKBox>
          <MKBox p={3}>
            <MKTypography variant="body2" color="text" mb={3}>
              We are here to help you. Please fill out the form below and we will
              get back to you as soon as possible.
            </MKTypography>
            <MKBox 
              width="100%" 
              component="form" 
              // method="post" 
              autocomplete="off" 
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    name="name"
                    onChange={updateInput} 
                    value={formData.name}
                    variant="standard"
                    label="Full Name"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    name="email"
                    onChange={updateInput}
                    value={formData.email}
                    error={formData.email && !formData.email.includes('@') ? true : false}
                    type="email"
                    variant="standard"
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    name="message"
                    onChange={updateInput}
                    value={formData.message}
                    variant="standard"
                    label="How can we help you?"
                    placeholder="Describe your problem or question here..."
                    InputLabelProps={{ shrink: true }}
                    multiline
                    fullWidth
                    rows={6}
                  />
                </Grid>
              </Grid>
              <MKTypography
                variant="caption"
                color="text"
                mt={2}
                mb={2}
                textAlign="center"
              >
                This site is protected by reCAPTCHA and the Google 
                <a href="https://policies.google.com/privacy"> Privacy Policy</a> and 
                <a href="https://policies.google.com/terms"> Terms of Service</a> apply.
              </MKTypography>
              <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                <MKButton 
                  type="submit" 
                  variant="gradient" 
                  color="info" 
                  disabled={ !formData.name || !formData.email || !formData.message || !formData.email.includes('@') ? true : false }
                  onClick={(e) => { 
                    e.preventDefault()
                    handleSubmit(e)
                    analytics.logEvent('submit_form')
                  }}
                >
                  {loading ? 
                    <>Submitting <CircularProgress size={"1rem"} color={"white"} sx={{ marginLeft: "8px" }} /> </>
                    : 'Submit'
                  }
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
          {success && <MKAlert color="success" style={{margin: '1rem'}}>Message sent successfully!</MKAlert>}
          {error && <MKAlert color="danger" style={{margin: '1rem'}}>There was an error sending your message. Please try again later.</MKAlert>}
        </MKBox>
      </Grid>
    </Grid>
  )
}

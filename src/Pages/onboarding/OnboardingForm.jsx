// import React, { useState } from 'react';

// const initialFormState = {
//   full_name: '',
//   dob: '',
//   phone: '',
//   email: '',
//   gender: '',
//   adhar_number: '',
//   address: '',
//   qualification: '',
//   experience: '',
//   department: '',
//   designation: '',
//   avatar: null,
//   aadhaar: null,
//   pan_card: null,
//   voter_id: null,
//   tenth: null,
//   twelfth: null,
//   diploma: null,
//   degree: null,
//   experience_letters: null,
//   passport: null,
//   driving_license: null,
// };

// const requiredFields = [
//   'full_name', 'dob', 'phone', 'email', 'gender', 'adhar_number', 'address', 'qualification', 'experience', 'department', 'designation',
//   'avatar', 'aadhaar', 'pan_card', 'voter_id', 'tenth', 'twelfth', 'diploma', 'degree', 'experience_letters', 'passport', 'driving_license'
// ];

// function OnboardingForm() {
//   const [form, setForm] = useState(initialFormState);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === 'file' ? files[0] : value,
//     }));
//   };

//   const validate = () => {
//     for (let field of requiredFields) {
//       if (!form[field] || (typeof form[field] === 'string' && form[field].trim() === '')) {
//         return `Please fill out the ${field.replace('_', ' ')} field.`;
//       }
//     }
//     return '';
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     const validationError = validate();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }
//     setLoading(true);
//     const formData = new FormData();
//     Object.entries(form).forEach(([key, value]) => {
//       formData.append(key, value);
//     });
//     try {
//       const res = await fetch('https://rabs.alvision.in/submit_onboarding_form', {
//         method: 'POST',
//         body: formData,
//       });
//       if (!res.ok) throw new Error('Submission failed');
//       setSuccess('Form submitted successfully!');
//       setForm(initialFormState);
//     } catch (err) {
//       setError(err.message || 'An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: 32, maxWidth: 600, margin: '32px auto' }}>
//       <form onSubmit={handleSubmit}>
//         <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Onboarding Form</h2>
//         {error && <div style={{ color: 'red', marginBottom: 12, textAlign: 'center' }}>{error}</div>}
//         {success && <div style={{ color: 'green', marginBottom: 12, textAlign: 'center' }}>{success}</div>}
//         {loading && <div style={{ textAlign: 'center', marginBottom: 12 }}>Submitting...</div>}
//         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
//           <div>
//             <label style={{ display: 'block', marginBottom: 8 }}>Full Name
//               <input name="full_name" type="text" value={form.full_name} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Date of Birth
//               <input name="dob" type="date" value={form.dob} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Phone
//               <input name="phone" type="text" value={form.phone} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Email
//               <input name="email" type="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Gender
//               <input name="gender" type="text" value={form.gender} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Aadhaar Number
//               <input name="adhar_number" type="text" value={form.adhar_number} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Address
//               <input name="address" type="text" value={form.address} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Qualification
//               <input name="qualification" type="text" value={form.qualification} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Experience
//               <input name="experience" type="text" value={form.experience} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Department
//               <input name="department" type="text" value={form.department} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Designation
//               <input name="designation" type="text" value={form.designation} onChange={handleChange} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
//             </label>
//           </div>
//           <div>
//             <label style={{ display: 'block', marginBottom: 8 }}>Avatar
//               <input name="avatar" type="file" accept="image/*" onChange={handleChange} required style={{ width: '100%', marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Aadhaar
//               <input name="aadhaar" type="file" onChange={handleChange} required style={{ width: '100%', marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>PAN Card
//               <input name="pan_card" type="file" onChange={handleChange} required style={{ width: '100%', marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Voter ID
//               <input name="voter_id" type="file" onChange={handleChange} required style={{ width: '100%', marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>10th Marksheet
//               <input name="tenth" type="file" onChange={handleChange} required style={{ width: '100%', marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>12th Marksheet
//               <input name="twelfth" type="file" onChange={handleChange} required style={{ width: '100%', marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Diploma
//               <input name="diploma" type="file" onChange={handleChange} required style={{ width: '100%', marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Degree
//               <input name="degree" type="file" onChange={handleChange} required style={{ width: '100%', marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Experience Letters
//               <input name="experience_letters" type="file" onChange={handleChange} required style={{ width: '100%', marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Passport
//               <input name="passport" type="file" onChange={handleChange} required style={{ width: '100%', marginTop: 4 }} />
//             </label>
//             <label style={{ display: 'block', marginBottom: 8 }}>Driving License
//               <input name="driving_license" type="file" onChange={handleChange} required style={{ width: '100%', marginTop: 4 }} />
//             </label>
//           </div>
//         </div>
//         <button type="submit" disabled={loading} style={{ marginTop: 24, width: '100%', padding: '12px 0', fontSize: 16, borderRadius: 6, background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default OnboardingForm;

// Converted to JSX with Material UI styling
import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Alert,
  CircularProgress,
  Paper,
  Card,
  CardContent,
  Divider,
  Chip,
  Stack,
} from "@mui/material";
import {
  Upload,
  User,
  FileText,
  CheckCircle,
  AlertCircle,
  Users,
  Briefcase,
  FolderOpen,
  Phone,
  Mail,
  CreditCard,
  Home,
  GraduationCap,
} from "lucide-react";
import axios from "axios";
import { BusinessCenter, PersonOutline } from "@mui/icons-material";

const OnboardingForm = () => {
  const initialFormData = {
    full_name: "",
    dob: "",
    phone: "",
    email: "",
    gender: "",
    adhar_number: "",
    address: "",
    qualification: "",
    experience: "",
    department: "",
    designation: "",
    avatar: null,
    aadhaar: null,
    pan_card: null,
    voter_id: null,
    tenth: null,
    twelth: null,
    diploma: null,
    degree: null,
    experience_letters: null,
    passport: null,
    driving_license: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: Array.from(files) }));
    }
  };

  const validateForm = () => {
    const requiredFields = [
      "full_name",
      "dob",
      "phone",
      "email",
      "gender",
      "adhar_number",
      "address",
      "qualification",
      "department",
      "designation",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(`${field.replace("_", " ").toUpperCase()} is required`);
        return false;
      }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number");
      return false;
    }
    const aadhaarRegex = /^\d{12}$/;
    if (!aadhaarRegex.test(formData.adhar_number)) {
      setError("Please enter a valid 12-digit Aadhaar number");
      return false;
    }
    return true;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   setSuccess(false);
  //   if (!validateForm()) return;
  //   setLoading(true);

  //   try {
  //     const submitData = new FormData();
  //     Object.keys(formData).forEach((key) => {
  //       const value = formData[key];
  //       if (fileFields.includes(key)) {
  //         if (Array.isArray(value) && value.length > 0) {
  //           value.forEach((file) => {
  //             if (file) submitData.append(key, file);
  //           });
  //         } else {
  //           submitData.append(key, "");
  //         }
  //       } else if (value) {
  //         submitData.append(key, value);
  //       }
  //     });

  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     setSuccess(true);
  //     setFormData(initialFormData);
  //   } catch (err) {
  //     setError(
  //       "Failed to submit form. Please try again." +
  //         (err?.message ? ` (${err.message})` : "")
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess(false);
  if (!validateForm()) return;
  setLoading(true);
  try {
    const submitData = new FormData();
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      // For file fields, always append as array (even if empty)
      if (fileFields.includes(key)) {
        if (Array.isArray(value) && value.length > 0) {
          value.forEach((file) => {
            if (file) submitData.append(key, file);
          });
        } else {
          // Send empty value for empty file field
          submitData.append(key, "");
        }
      } else if (value) {
        submitData.append(key, value);
      }
    });

    const response = await axios.post(
      "https://rabs.alvision.in/submit_onboarding_form",
      submitData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      setSuccess(true);
      setFormData(initialFormData);
    } else throw new Error("Submission failed");
  } catch (err) {
    setError(
      "Failed to submit form. Please try again." +
        (err?.message ? ` (${err.message})` : "")
    );
  } finally {
    setLoading(false);
  }
};
  const personalFields = [
    {
      name: "full_name",
      label: "Full Name",
      type: "text",
      required: true,
      icon: <Users />,
    },
    { name: "dob", label: "Date of Birth", type: "date", required: true },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      icon: <Phone />,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      icon: <Mail />,
    },
    {
      name: "adhar_number",
      label: "Aadhaar Number",
      type: "text",
      required: true,
      icon: <CreditCard />,
    },
  ];

  const professionalFields = [
    {
      name: "qualification",
      label: "Qualification",
      type: "text",
      required: true,
      icon: <GraduationCap />,
    },
    {
      name: "experience",
      label: "Experience (Years)",
      type: "text",
      required: false,
      icon: <Briefcase />,
    },
    {
      name: "department",
      label: "Department",
      type: "text",
      required: true,
      icon: <Briefcase />,
    },
    {
      name: "designation",
      label: "Designation",
      type: "text",
      required: true,
      icon: <Briefcase />,
    },
  ];

  const fileFields = [
    "avatar",
    "aadhaar",
    "pan_card",
    "voter_id",
    "tenth",
    "twelth",
    "diploma",
    "degree",
    "experience_letters",
    "passport",
    "driving_license",
  ];

  const documentCategories = {
    identity: {
      title: "Identity Documents",
      fields: [
        "avatar",
        "aadhaar",
        "pan_card",
        "voter_id",
        "passport",
        "driving_license",
      ],
      color: "#1976d2",
    },
    education: {
      title: "Educational Documents",
      fields: ["tenth", "twelth", "diploma", "degree"],
      color: "#388e3c",
    },
    professional: {
      title: "Professional Documents",
      fields: ["experience_letters"],
      color: "#f57c00",
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Paper
        elevation={3}
        sx={{
          mb: 4,
          p: 4,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <User size={32} />
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Employee Onboarding
            </Typography>
            <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
              Complete your profile to get started
            </Typography>
          </Box>
        </Stack>
      </Paper>

      {/* Status Messages */}
      {success && (
        <Alert
          severity="success"
          icon={<CheckCircle />}
          sx={{ mb: 3, fontSize: "1rem" }}
        >
          Form submitted successfully! Welcome to the team.
        </Alert>
      )}
      {error && (
        <Alert
          severity="error"
          icon={<AlertCircle />}
          sx={{ mb: 3, fontSize: "1rem" }}
        >
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={4} >
          {/* Personal Information */}
          <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "48%" } }}>
            <Card elevation={2} sx={{ height: "fit-content" }}>
              <CardContent sx={{ p: 4 }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                  <PersonOutline color="primary" />
                  <Typography variant="h6" fontWeight="600">
                    Personal Information
                  </Typography>
                </Stack>
                <Divider sx={{ mb: 3 }} />

                <Stack spacing={3}>
                  {personalFields.map((field) => (
                    <TextField
                      key={field.name}
                      fullWidth
                      type={field.type}
                      label={field.label}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required={field.required}
                      InputLabelProps={
                        field.type === "date" ? { shrink: true } : {}
                      }
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                      }}
                    />
                  ))}

                  <FormControl fullWidth required>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      label="Gender"
                    >
                      <MenuItem value="">Select Gender</MenuItem>
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your complete address..."
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Professional Information */}
          <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "48%" } }}>
            <Card elevation={2} sx={{ height: "fit-content" }}>
              <CardContent sx={{ p: 4 }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                  <BusinessCenter color="primary" />
                  <Typography variant="h6" fontWeight="600">
                    Professional Information
                  </Typography>
                </Stack>
                <Divider sx={{ mb: 3 }} />

                <Stack spacing={3}>
                  {professionalFields.map((field) => (
                    <TextField
                      key={field.name}
                      fullWidth
                      type={field.type}
                      label={field.label}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required={field.required}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Document Uploads */}
          <Grid item xs={12}>
            <Card elevation={2}>
              <CardContent sx={{ p: 4 }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                  <FolderOpen color="primary" />
                  <Typography variant="h6" fontWeight="600">
                    Document Uploads
                  </Typography>
                </Stack>
                <Divider sx={{ mb: 4 }} />

                <Stack spacing={4}>
                  {Object.entries(documentCategories).map(([key, category]) => (
                    <Box key={key}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        mb={2}
                      >
                        <Chip
                          label={category.title}
                          sx={{
                            backgroundColor: category.color,
                            color: "white",
                            fontWeight: 600,
                          }}
                        />
                      </Stack>

                      <Grid container spacing={2}>
                        {category.fields.map((fieldName) => (
                          <Grid item xs={12} sm={6} md={4} key={fieldName}>
                            <Button
                              variant="outlined"
                              component="label"
                              fullWidth
                              startIcon={<Upload />}
                              sx={{
                                height: 56,
                                borderStyle: "dashed",
                                borderWidth: 2,
                                "&:hover": {
                                  borderStyle: "dashed",
                                  borderWidth: 2,
                                  backgroundColor: "rgba(25, 118, 210, 0.04)",
                                },
                              }}
                            >
                              <Box sx={{ textAlign: "center" }}>
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: 500 }}
                                >
                                  {Array.isArray(formData[fieldName]) &&
                                  formData[fieldName].length > 0
                                    ? `${formData[fieldName].length} file(s) selected`
                                    : fieldName
                                        .replace(/_/g, " ")
                                        .replace(/\b\w/g, (l) =>
                                          l.toUpperCase()
                                        )}
                                </Typography>
                                {Array.isArray(formData[fieldName]) &&
                                  formData[fieldName].length > 0 && (
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                    >
                                      {formData[fieldName]
                                        .map((f) => f.name)
                                        .join(", ")}
                                    </Typography>
                                  )}
                              </Box>
                              <input
                                type="file"
                                name={fieldName}
                                multiple
                                hidden
                                onChange={handleFileChange}
                                accept=".pdf,.jpg,.jpeg,.png"
                              />
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                size="large"
                startIcon={
                  loading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <FileText />
                  )
                }
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderRadius: 3,
                  background:
                    "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                  boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)",
                  },
                }}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default OnboardingForm;

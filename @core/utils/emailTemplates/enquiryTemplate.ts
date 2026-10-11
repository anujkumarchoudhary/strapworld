// ✅ Helper function for rows
const row = (label: string, value: any) => `
<tr>
  <td style="
    padding:12px 14px;
    width:180px;
    font-weight:600;
    color:#111827;
    background:#f5f7fa;
    border-bottom:1px solid #e5e7eb;
  ">
    ${label}
  </td>

  <td style="
    padding:12px 14px;
    color:#374151;
    border-bottom:1px solid #e5e7eb;
  ">
    ${value || "N/A"}
  </td>
</tr>
`;

export const enquiryTemplate = ({
  name,
  email,
  phone,
  message,
  service,
  smsConsent,
  whatsappConsent,
  uniqueId,
}: any) => {
  return `
<body style="
  margin:0;
  padding:0;
  background:#f3f4f6;
  font-family:Arial, sans-serif;
">

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  style="padding:20px"
>
<tr>
<td align="center">

<!-- MAIN CONTAINER -->
<table
  width="680"
  cellpadding="0"
  cellspacing="0"
  style="
    background:#ffffff;
    border-radius:8px;
    overflow:hidden;
    border:1px solid #e5e7eb;
  "
>

<!-- 🔷 HEADER -->
<tr>
<td style="
  background:#000000;
  padding:20px 25px;
">

  <table width="100%">
    <tr>

      <td align="left">
<!-- LOGO -->
<img
  src="https://Strap World.com/Strap World.svg"
  alt="Strap World"
  width="120"
  style="
    display:block;
    width:120px;
    height:auto;
    border:0;
    outline:none;
    text-decoration:none;
  "
/>
      </td>

      <td
        align="right"
        style="
          color:#cfe3ff;
          font-size:12px;
        "
      >
        ${new Date().toLocaleString()}
      </td>

    </tr>
  </table>

</td>
</tr>

<!-- 🔹 BODY -->
<tr>
<td style="padding:25px">

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  style="
    border-collapse:collapse;
    font-size:14px;
  "
>

${row("Name", name)}

${row("Email", email)}

${row("Phone", phone)}

${row("Service", service)}

${row("Message", message)}

${row("SMS Consent", smsConsent ? "Yes" : "No")}

${row(
    "WhatsApp Consent",
    whatsappConsent ? "Yes" : "No"
  )}

</table>

</td>
</tr>

<!-- 🔹 FOOTER -->
<tr>
<td style="
  background:#f9fafb;
  padding:15px;
  text-align:center;
  font-size:12px;
  color:#6b7280;
">
  © ${new Date().getFullYear()} Strap World • Internal Notification
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
`;
};
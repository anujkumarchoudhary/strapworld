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

export const contactTemplate = ({
  name,
  email,
  phone,
  service,
  website,
  description,
  uniqueId,
}: any) => {

  const safeRow = (label: string, value: any) => {
    if (!value || value.toString().trim() === "") return "";
    return row(label, value);
  };

  return `
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial, sans-serif">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:20px">
<tr>
<td align="center">

<table width="680" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">

<tr>
<td style="background:#000000;padding:20px 25px">
  <table width="100%">
    <tr>
      <td align="left">
       <img 
          src="/Strap World.svg"
          alt="Strap World"
          style="height:32px"
        />
      </td>
      <td align="right" style="color:#cfe3ff;font-size:12px">
        ${new Date().toLocaleString()}
      </td>
    </tr>
  </table>
</td>
</tr>

<tr>
<td style="padding:25px">

<table width="100%" cellpadding="0" cellspacing="0"
style="border-collapse:collapse;font-size:14px">

${safeRow("Name", name)}
${safeRow("Email", email)}
${safeRow("Phone", phone)}
${safeRow("Service", service)}
${safeRow("Website", website)}
${safeRow("Message", description)}

</table>

</td>
</tr>

<tr>
<td style="
  background:#f9fafb;
  padding:15px;
  text-align:center;
  font-size:12px;
  color:#6b7280;
">
  © ${new Date().getFullYear()} Strap World • Contact Notification
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
`;
};
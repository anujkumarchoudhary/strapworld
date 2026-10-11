

export const resetPasswordTemplate = ({
  name,
  link,
}: {
  name?: string;
  link: string;
}) => {
  const safeName = name || "User";

  return `
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial, sans-serif">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:20px">
<tr>
<td align="center">

<table width="680" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">

<!-- HEADER -->
<tr>
<td style="background:#1b5a96;padding:20px 25px">
  <table width="100%">
    <tr>
      <td align="left">
        <img 
          src="${"logo"}" 
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

<!-- BODY -->
<tr>
<td style="padding:30px;text-align:center">

  <h2 style="margin:0 0 10px;color:#111827">
    Reset Your Password 🔐
  </h2>

  <p style="color:#6b7280;font-size:14px;margin-bottom:20px">
    Hi ${safeName}, we received a request to reset your password.
  </p>

  <a href="${link}"
     style="
       display:inline-block;
       background:#fb9100;
       color:#ffffff;
       padding:12px 24px;
       border-radius:6px;
       text-decoration:none;
       font-weight:600;
     ">
     Reset Password
  </a>

  <p style="margin-top:20px;font-size:12px;color:#9ca3af">
    This link will expire in 1 hour.
  </p>

  <p style="margin-top:10px;font-size:12px;color:#9ca3af">
    If you didn’t request this, please ignore this email.
  </p>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="
  background:#f9fafb;
  padding:15px;
  text-align:center;
  font-size:12px;
  color:#6b7280;
">
  © ${new Date().getFullYear()} Strap World • Password Reset
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
`;
};

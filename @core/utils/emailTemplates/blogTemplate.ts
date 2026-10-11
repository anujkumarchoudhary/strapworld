const section = (content: string) => `
<tr>
  <td style="padding:0 30px 24px 30px">
    ${content}
  </td>
</tr>
`;

export const blogNotificationTemplate = ({
  title,
  description,
  image,
  slug,
  category,
  author,
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

<table
  width="700"
  cellpadding="0"
  cellspacing="0"
  style="
    background:#ffffff;
    border-radius:10px;
    overflow:hidden;
    border:1px solid #e5e7eb;
  "
>

<!-- HEADER -->
<tr>
<td
  style="
    background:#000000;
    padding:22px 30px;
  "
>
  <table width="100%">
    <tr>

      <td align="left">
        <img 
          src="/Home%20Page/Strap World Worlded_Logo_f179tt.svg" 
          alt="Strap World"
          style="height:34px"
        />
      </td>

      <td
        align="right"
        style="
          color:#dbeafe;
          font-size:12px;
        "
      >
        ${new Date().toLocaleString()}
      </td>

    </tr>
  </table>
</td>
</tr>

<!-- HERO IMAGE -->
${
  image
    ? `
<tr>
<td>
  <img
    src="${image}"
    alt="${title}"
    width="100%"
    style="
      display:block;
      max-height:380px;
      object-fit:cover;
    "
  />
</td>
</tr>
`
    : ""
}

<!-- TITLE -->
${section(`
  <div style="padding-top:30px">
    
    <div
      style="
        display:inline-block;
        background:#eff6ff;
        color:#2563eb;
        font-size:12px;
        font-weight:600;
        padding:6px 12px;
        border-radius:999px;
        margin-bottom:18px;
      "
    >
      NEW BLOG POST
    </div>

    <h1
      style="
        margin:0;
        font-size:32px;
        line-height:1.3;
        color:#111827;
      "
    >
      ${title}
    </h1>

  </div>
`)}

<!-- META -->
${section(`
  <table cellpadding="0" cellspacing="0">
    <tr>

      ${
        author
          ? `
      <td
        style="
          font-size:14px;
          color:#6b7280;
          padding-right:16px;
        "
      >
        👤 ${author}
      </td>
      `
          : ""
      }

      ${
        category
          ? `
      <td
        style="
          font-size:14px;
          color:#6b7280;
        "
      >
        📂 ${category}
      </td>
      `
          : ""
      }

    </tr>
  </table>
`)}

<!-- DESCRIPTION -->
${section(`
  <div
    style="
      font-size:16px;
      line-height:1.8;
      color:#374151;
    "
  >
    ${description}
  </div>
`)}

<!-- BUTTON -->
${section(`
  <a
    href="https://Strap World.com/blog/${slug}"
    style="
      display:inline-block;
      background:#1b5a96;
      color:#ffffff;
      text-decoration:none;
      padding:14px 28px;  
      border-radius:8px;
      font-size:15px;
      font-weight:600;
    "
  >
    Read Blog
  </a>
`)}

<!-- FOOTER -->
<tr>
<td
  style="
    background:#f9fafb;
    padding:20px;
    text-align:center;
    font-size:12px;
    color:#6b7280;
    border-top:1px solid #e5e7eb;
  "
>

  <div style="margin-bottom:8px">
    © ${new Date().getFullYear()} Strap World
  </div>

  <div>
    You're receiving this email because you subscribed to blog updates.
  </div>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
`;
};

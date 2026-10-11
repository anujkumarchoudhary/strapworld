export function formatBlogHTML(html: string = ""): string {
  if (!html) return "";

  const bulletIcon =
    "https://strap.com/_next/static/media/localKeyStatsIcon.c90e823e.svg";

  const bodyTextStyle =
    "font-family:var(--font-urbanist);font-size:18px;color:#171717;font-weight:500;line-height:1.7;text-align:justify;";

  const h2TextStyle =
    "font-family:var(--font-urbanist);font-size:35px;color:#171717;font-weight:300;line-height:50px; margin-block:20px";

  const h3TextStyle =
    "font-family:var(--font-urbanist);font-size:30px;color:#171717;font-weight:300;line-height:50px; margin-block:20px";

  const FaQTitleTextStyle =
    "font-family:var(--font-urbanist);font-size:21px;color:#171717;font-weight:300;line-height:40px;";

  // =====================================================
  // 0. CLEAN QUILL JUNK (VERY IMPORTANT)
  // =====================================================
  html = html.replace(/<p([^>]*)>/gi, `<p$1 style="${bodyTextStyle}">`);

  html = html.replace(
    /<li([^>]*)>/gi,
    `<li$1 style="display:list-item;${bodyTextStyle}margin-bottom:6px;">`,
  );

  // =====================================================
  // 2. ADD PADDING TO TAGS
  // =====================================================
  const addPadding = (tag: string, padding: string) => {
    const regex = new RegExp(`<${tag}(\\s[^>]*)?>`, "gi");

    html = html.replace(regex, (match) => {
      if (match.includes("class=")) {
        return match.replace(
          /class="([^"]*)"/,
          (_, cls) => `class="${cls} ${padding}"`,
        );
      }
      return match.replace(`<${tag}`, `<${tag} class="${padding}"`);
    });
  };

  html = html.replace(/<h2([^>]*)>/gi, (_, attrs) => {
    const hasStyle = /style=/i.test(attrs);

    if (hasStyle) {
      return `<h2${attrs.replace(
        /style="([^"]*)"/i,
        `style="$1;${h2TextStyle}"`,
      )} class="py-2.5">`;
    }

    return `<h2${attrs} class="my-20" style="${h2TextStyle}">`;
  });

  html = html.replace(/<h3([^>]*)>/gi, (_, attrs) => {
    const hasStyle = /style=/i.test(attrs);

    if (hasStyle) {
      return `<h2${attrs.replace(
        /style="([^"]*)"/i,
        `style="$1;${h3TextStyle}"`,
      )} class="py-2.5">`;
    }

    return `<h3${attrs} class="my-20" style="${h3TextStyle}">`;
  });

  addPadding("h4", "py-3");
  addPadding("p", "py-3");

  // =====================================================
  // 3. STYLE LINKS (BLUE)
  // =====================================================
  html = html.replace(/<a([^>]*)>/gi, (match, attrs) => {
    return `<a${attrs} style="color:#2F73F0; text-decoration:none;" class="blog-link">`;
  });

  // =====================================================
  // 4. FIX LIST STRUCTURE (REAL FIX)
  // =====================================================

  // Convert Quill lists properly
  html = html.replace(/<ol>([\s\S]*?)<\/ol>/gi, (match, inner) => {
    const items = inner.match(/<li[^>]*>.*?<\/li>/gi) || [];

    let ulItems: string[] = [];
    let olItems: string[] = [];

    items.forEach((item: any) => {
      if (/data-list="bullet"/i.test(item)) {
        ulItems.push(item);
      } else {
        olItems.push(item);
      }
    });

    let result = "";

    // Bullet list (A, B)
    if (ulItems.length) {
      result += `
      <ul style="list-style-type:disc; padding-left:20px;">
        ${ulItems.join("")}
      </ul>
    `;
    }

    // Ordered list (C, D)
    if (olItems.length) {
      result += `
      <ol style="list-style-type:decimal; padding-left:20px;">
        ${olItems.join("")}
      </ol>
    `;
    }

    return result;
  });

  // remove quill attributes AFTER conversion
  html = html.replace(/\sdata-list="[^"]*"/gi, "");

  html = html.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (match, content) => {
    const cleanContent = content
      .replace(/<\/?p[^>]*>/gi, "") // remove only wrapper p
      .trim();

    return `
      <li style="
        list-style:none;
        display:flex;
        align-items:flex-start;
        gap:10px;
        margin-bottom:8px;
        font-family:var(--font-urbanist);font-size:18px;color:#171717;font-weight:500;line-height:1.7;text-align:justify;
      ">
        <img 
          src="${bulletIcon}" 
          style="width:20px;height:20px;margin-top:6px;flex-shrink:0;"
        />
        <div>
          ${content}
        </div>
      </li>
    `;
  });

  // =====================================================
  // 5. FIX TABLE STYLE (UPDATED)
  // =====================================================

  // Wrap every table in a scrollable container
  html = html.replace(
    /<table[\s\S]*?<\/table>/gi,
    (table) => `
    <div class="blog-table-wrapper" style="width:100%;max-width:100%;overflow-x:auto;margin:20px 0;">
      ${table}
    </div>
  `,
  );

  // Remove Quill wrapper if present
  html = html.replace(
    /<div class="quill-better-table-wrapper"([^>]*)>/gi,
    `<div class="blog-table-wrapper" style="width:100%;max-width:100%;overflow-x:auto;margin:20px 0;">`,
  );

  // Clean table tag
  html = html.replace(/<table([^>]*)>/gi, (_, attrs) => {
    let cleanAttrs = attrs
      .replace(/\sstyle="[^"]*"/gi, "")
      .replace(/\swidth="[^"]*"/gi, "")
      .replace(/\sheight="[^"]*"/gi, "");

    return `<table${cleanAttrs} style="
      width:100%;
      min-width:700px;
      max-width:100%;
      border-collapse:collapse;
      table-layout:auto;
      background:#fff;
    ">`;
  });

  // Clean TH
  html = html.replace(/<th([^>]*)>/gi, (_, attrs) => {
    let cleanAttrs = attrs
      .replace(/\sstyle="[^"]*"/gi, "")
      .replace(/\swidth="[^"]*"/gi, "");

    return `<th${cleanAttrs} style="
      border:1px solid #d1d5db;
      padding:12px;
      background:#f9fafb;
      font-weight:600;
      white-space:normal;
      word-break:break-word;
    ">`;
  });

  // Clean TD
  html = html.replace(/<td([^>]*)>/gi, (_, attrs) => {
    let cleanAttrs = attrs
      .replace(/\sstyle="[^"]*"/gi, "")
      .replace(/\swidth="[^"]*"/gi, "");

    return `<td${cleanAttrs} style="
      border:1px solid #d1d5db;
      padding:12px;
      vertical-align:top;
      white-space:normal;
      word-break:break-word;
      overflow-wrap:anywhere;
    ">`;
  });

  // Remove Quill cell wrapper
  html = html.replace(/<p class="qlbt-cell-line"[^>]*>([\s\S]*?)<\/p>/gi, "$1");

  // Remove colgroup widths generated by Quill
  html = html.replace(/<colgroup[\s\S]*?<\/colgroup>/gi, "");

  // =====================================================
  // 6. FIND LAST H2 SECTION
  // =====================================================
  const h2Matches = [...html.matchAll(/<h2[\s\S]*?>[\s\S]*?<\/h2>/gi)];

  if (h2Matches.length === 0) return html;

  const lastH2 = h2Matches[h2Matches.length - 1];
  const splitIndex = lastH2.index! + lastH2[0].length;

  const before = html.slice(0, splitIndex);
  let after = html.slice(splitIndex);

  // =====================================================
  // 7. FAQ TRANSFORMATION (CLEAN STRUCTURE)
  // =====================================================

  if (/Frequently Asked Questions/i.test(lastH2[0])) {
    let faqCount = 0;

    after = after.replace(
      /<h3[\s\S]*?>([\s\S]*?)<\/h3>\s*([\s\S]*?)(?=<h3|$)/gi,
      (match, question, answer) => {
        faqCount++;

        return `
        <div class="faq-item">
          
          <div class="faq-header">
              <p style="${FaQTitleTextStyle}">${question}</p>
            <div class="faq-toggle"></div>
          </div>

          <div class="faq-answer">
            <div class="faq-answer-inner px-4">
              ${answer}
            </div>
          </div>

        </div>
      `;
      },
    );
  }

  return before + after;
}

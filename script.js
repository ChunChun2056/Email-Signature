// Helper function to validate email format using a regular expression
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}

// Function to generate the email signature
function generateSignature() {
    // 1. Get user input
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // 2. Basic input validation
    if (!name || !position || !email) {
        alert('Please fill in your Name, Position, and Email Address.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address format.');
        return;
    }

    // 3. Create the signature HTML
    //  **Important:** Replace the placeholder text below
    //  with your actual signature HTML structure from preview-and-install.html.
    //  Make sure to use template literals (backticks ``) and ${variable}
    //  to insert the user's name and position.
    const signatureHTML = `
    <table bgcolor="transparent" border="0" cellpadding="0" cellspacing="0" width="100%" style="background:transparent;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
        <tr>
            <td align="left" style="padding: 0;">
                <div class="emailify" style="mso-line-height-rule: exactly; mso-hyphenate: none; word-spacing: normal; ">
                    <div class="bg " lang="en" dir="auto">
                        <!--[if mso | IE]><table align="left" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><![endif]-->
                        <div class="r pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px;max-width:600px;">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                                <tbody>
                                    <tr>
                                        <td style="border:none;direction:ltr;font-size:0;padding:16px 0px 16px 0px;text-align:left;">
                                            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="gpc-outlook" style="width:600px;" ><![endif]-->
                                            <div class="mj-column-per-100 mj-outlook-group-fix gpc" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                                                <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:middle;width:244px;" ><![endif]-->
                                                <div class="mj-column-per-40-8333 mj-outlook-group-fix c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:40.8333%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td align="left" class="i m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td style="width:208px;">
                                                                                    <a href="https://thecodesquad.com.au/" target="_blank">
                                                                                        <img alt="The Code Squad Logo" src="images/logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="208" height="auto">
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="s m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;" aria-hidden="true">
                                                                    <div style="height:12px;line-height:12px;">&#8202;</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" class="x m" style="font-size:0;padding-bottom:4px;word-break:break-word;">
                                                                    <div style="text-align:left;"><p style="Margin:0;mso-line-height-alt:26px;"><span style="font-size:18px;font-family:'Inter', 'Arial', sans-serif;font-weight:700;color:#2f266b;line-height:144%;mso-line-height-alt:26px;">${name}</span></p></div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" class="x m" style="font-size:0;padding-bottom:4px;word-break:break-word;">
                                                                    <div style="text-align:left;"><p style="Margin:0;mso-line-height-alt:15px;"><span style="font-size:13px;font-family:'Inter', 'Arial', sans-serif;font-weight:400;color:#777777;line-height:115%;mso-line-height-alt:15px;">${position}</span></p></div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="s m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;" aria-hidden="true">
                                                                    <div style="height:12px;line-height:12px;">&#8202;</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" class="x m" style="font-size:0;padding-bottom:4px;word-break:break-word;">
                                                                    <div style="text-align:left;"><p style="Margin:0;mso-line-height-alt:18px;"><a href="mailto:${email}" style="text-decoration:none; color:#111111;"><span style="font-size:13px;font-family:'Inter', 'Arial', sans-serif;font-weight:400;color:#111111;line-height:138%;mso-line-height-alt:18px;">${email}</span></a></p></div>
                                                                </td>
                                                            </tr>
                                                            ${phone ? `<tr><td align="left" class="x m" style="font-size:0;padding-bottom:4px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;mso-line-height-alt:18px;"><a href="tel:${phone}" style="text-decoration:none; color:#111111;"><span style="font-size:13px;font-family:'Inter', 'Arial', sans-serif;font-weight:400;color:#111111;line-height:138%;mso-line-height-alt:18px;">${phone}</span></a></p></div></td></tr>` : ""}
                                                                <td align="left" class="x m" style="font-size:0;padding-bottom:4px;word-break:break-word;">
                                                                    <div style="text-align:left;"><p style="Margin:0;mso-line-height-alt:18px;"><a href="https://thecodesquad.com.au/" target="_blank" style="text-decoration:none;"><span style="font-size:13px;font-family:'Inter', 'Arial', sans-serif;font-weight:400;color:#111111;line-height:138%;mso-line-height-alt:18px;">www.thecodesquad.com.au</span></a></p></div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="s m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;" aria-hidden="true">
                                                                    <div style="height:12px;line-height:12px;">&#8202;</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" class="o" style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;">
                                                                    <!--[if mso | IE]><table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                                        <tbody>
                                                                            <tr class="e m">
                                                                                <td style="padding:0 8px 0 0;vertical-align:middle;">
                                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:24px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                                                                                    <a href="https://www.facebook.com/codesquad/" target="_blank">
                                                                                                        <img alt="facebook" height="24" src="https://e.hypermatic.com/s_e9df10eabbbdfd2451a587671433cffa.png" style="display:block;" width="24">
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if mso | IE]></td><td><![endif]-->
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                                        <tbody>
                                                                            <tr class="e m">
                                                                                <td style="padding:0 8px 0 0;vertical-align:middle;">
                                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:24px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                                                                                    <a href="https://www.instagram.com/the_code_squad_/" target="_blank">
                                                                                                        <img alt="Instagram" height="24" src="https://e.hypermatic.com/s_51711ac24c5745c9765a69b25b013e61.png" style="display:block;" width="24">
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if mso | IE]></td><td><![endif]-->
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                                        <tbody>
                                                                            <tr class="e ">
                                                                                <td style="padding:0;padding-right:0;vertical-align:middle;">
                                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:24px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                                                                                    <a href="http://linkedin.com/company/the-code-squad/" target="_blank">
                                                                                                        <img alt="LinkedIn" height="24" src="https://e.hypermatic.com/s_c851c9e8fdc2c2d98852ca2f9563e15b.png" style="display:block;" width="24">
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if mso | IE]></td></tr></table><![endif]-->
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!--[if mso | IE]></td><td style="vertical-align:top;width:355px;" ><![endif]-->
                                                <div class="mj-column-per-59-1667 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:59.1667%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td style="vertical-align:top;padding:0;">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                                                        <tbody>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!--[if mso | IE]></td></tr></table><![endif]-->
                                            </div>
                                            <!--[if mso | IE]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                    </div>
                </div>
            </td>
        </tr>
    </table>
    `;

    // 4. Display the generated signature
    document.getElementById('signature-output-desktop').innerHTML = signatureHTML;

    // 5. Show the preview section
    document.getElementById('preview-section').classList.remove('hidden');

}

// Function to copy the signature to the clipboard
function copySignature() {
    const signatureOutput = document.getElementById('signature-output-desktop');
    // Basic check to see if there is signature content to copy
    if (!signatureOutput.innerHTML) {
        alert('Please generate a signature first.');
        return;
    }

    // Create a temporary element to select the signature content
    const tempElement = document.createElement('div');
    tempElement.innerHTML = signatureOutput.innerHTML;
    document.body.appendChild(tempElement);

    // Select the content within the temporary element
    const selection = window.getSelection();
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(tempElement);
    selection.addRange(range);

    // Copy the selected content to the clipboard
    document.execCommand('copy');

    // Clean up: Remove the temporary element and clear selection
    document.body.removeChild(tempElement);
    selection.removeAllRanges();

    // Provide user feedback: Show "Copied!" message temporarily
    const copySuccess = document.getElementById('copy-success-desktop');
    copySuccess.classList.remove('hidden');
    setTimeout(() => {
        copySuccess.classList.add('hidden');
    }, 3000);  // Hide after 3 seconds
}

// Event listeners
document.getElementById('generate-btn').addEventListener('click', generateSignature);
document.getElementById('copy-btn').addEventListener('click', copySignature);
(async () => {
    const RESOURCE_NAME = 'qbx_chat_theme';

    const data = await fetchNui('config');

    const vars = [
        { property: '--main-color', value: data.mainColor ?? 'rgba(8, 10, 16, 0.88)' },
        { property: '--border-color', value: data.borderColor ?? 'rgba(0, 174, 255, 0.25)' },
        { property: '--text-color', value: data.textColor ?? 'rgba(255, 255, 255, 0.9)' },
        { property: '--faint-color', value: data.faintColor ?? 'rgba(255, 255, 255, 0.45)' },
        { property: '--font-family', value: data.fontFamily ?? "'Nunito', sans-serif" },
        { property: '--console-font-family', value: data.consoleFontFamily },
        { property: '--suggestion-font-family', value: data.suggestionFontFamily },
        { property: '--input-icon-url', value: `url(${data.inputIconUrl})` },
        { property: '--message-icon-url', value: `url(${data.messageIconUrl})` },
        { property: '--console-icon-url', value: `url(${data.consoleIconUrl})` },
        { property: '--join-icon-url', value: `url(${data.joinIconUrl})` },
        { property: '--quit-icon-url', value: `url(${data.quitIconUrl})` },
        { property: '--user-icon-url', value: `url(${data.userIconUrl})` },
    ];

    for (const { property, value } of vars) {
        document.documentElement.style.setProperty(property, value);
    }

    async function fetchNui(endpoint, data) {
        const body = typeof data === 'undefined' || data === null ? null : JSON.stringify(data);

        const response = await fetch(`https://${RESOURCE_NAME}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body,
        });

        return await response.json();
    }
})();
const starlightLoading = {
    init: (showPanelNow) => {
        const wrapper = document.createElement('div');
        const back = document.createElement('div');
        const banner = document.createElement('div');
        const panel = document.createElement('div');
        const ratio = document.createElement('div');

        const pace = document.createElement('div');
        pace.className = 'starlight-loading-pace';
        const progress = document.createElement('div');
        progress.className = 'starlight-loading-pace-progress';
        pace.appendChild(progress);


        wrapper.className = 'starlight-loading';
        back.className = 'starlight-back';
        banner.className = 'starlight-banner';
        panel.className = 'starlight-panel hide';
        ratio.className = 'starlight-ratio';

        // --------------------------------------------------
        // Setup starlight-panel

        const message_up = document.createElement('p');
        const message_dn = document.createElement('p');
        message_up.className = 'message-up';
        message_dn.className = 'message-down';
        message_up.appendChild(document.createTextNode('データダウンロード中'));
        message_dn.appendChild(document.createTextNode('※通信環境の良い所で実行してください'));
        panel.appendChild(message_up);
        panel.appendChild(message_dn);

        const progress_border = document.createElement('div');
        progress_border.className = 'progress-border';
        progress_border.appendChild(pace);
        panel.appendChild(progress_border);

        // --------------------------------------------------
        // Setup starlight-banner

        const nowLoading = document.createElement('p');
        nowLoading.appendChild(document.createTextNode('Now Loading...'));
        banner.appendChild(nowLoading);

        const heart = document.createElement('div');
        heart.className = 'heart';
        banner.appendChild(heart);

        // --------------------------------------------------
        // Setup starlight-ratio


        // --------------------------------------------------
        // Integrate

        wrapper.appendChild(back);
        wrapper.appendChild(banner);
        wrapper.appendChild(panel);
        panel.appendChild(ratio);
        document.body.appendChild(wrapper);
        starlightLoading.setProgress(0);
        if (showPanelNow) {
            starlightLoading.showPanel();
        }
    },

    hide: () => {
        const wrapper = document.getElementsByClassName("starlight-loading")[0];
        wrapper.classList.add("hide");
    },

    showPanel: () => {
        const panel = document.getElementsByClassName("starlight-panel")[0];
        panel.classList.remove("hide");
    },

    hidePanel: () => {
        const panel = document.getElementsByClassName("starlight-panel")[0];
        panel.classList.add("hide");
    },

    setProgress: progressRatio => {
        document.getElementsByClassName("starlight-ratio")[0].textContent = progressRatio + "%";
        const progress = document.getElementsByClassName("starlight-loading-pace-progress")[0];
        progress.style.right = (100 - progressRatio) + "%";
    }
}
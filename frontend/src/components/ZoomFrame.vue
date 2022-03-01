<template>
  <div class="iframe-container">
    <meta charset="utf-8">
    <link type="text/css" rel="stylesheet" href="https://dmogdx0jrul3u.cloudfront.net/1.3.7/css/bootstrap.css">
    <link
      type="text/css"
      rel="stylesheet"
      href="https://dmogdx0jrul3u.cloudfront.net/1.3.7/css/react-select.css"
    >

    <meta name="format-detection" content="telephone=no">
  </div>
</template>
<script>

import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

// CDN version default
ZoomMtg.setZoomJSLib('https://source.zoom.us/2.2.0/lib', '/av');
// ZoomMtg.setZoomJSLib('https://localhost:3000/node_modules/@zoomus/websdk/dist/lib', '/av');



var API_KEY = 'FwaatFMaR2yaDz9T-RQKhA';
var API_SECRET = 'jqnYGkZ0aESc3Vqf0zmZfaSRpz8MF8v8F8ww';

export default {
  name: "ZoomFrame",
  data: function() {
    return {
      src: "",
      meetConfig: {},
      signature: {}
    };
  },
  props: {
    id: String,
    nickname: String,
    meetingId: String
  },
  created: function() {
    // Meeting config object
    this.meetConfig = {
      apiKey: API_KEY,
      apiSecret: API_SECRET,
      meetingNumber: this.meetingId,
      userName: this.nickname,
      passWord: '8YtdNU',
      leaveUrl: "https://localhost:3000",
      role: 1
    };

    // Generate Signature function
    this.signature = ZoomMtg.generateSignature({
      meetingNumber: this.meetConfig.meetingNumber,
      apiKey: this.meetConfig.apiKey,
      apiSecret: this.meetConfig.apiSecret,
      role: this.meetConfig.role,
      success: function(res) {
        // eslint-disable-next-line
        console.log("success signature: " + res.result);
      }
    });

    // join function
    ZoomMtg.init({
      leaveUrl: "https://localhost:3000",
      isSupportAV: true,
      success: () => {
        try {
            ZoomMtg.join({
                
                meetingNumber: this.meetConfig.meetingNumber,
                userName: this.meetConfig.userName,
                signature: this.signature,
                apiKey: this.meetConfig.apiKey,
                userEmail: "bagusadhy182@student.ub.ac.id",
                passWord: this.meetConfig.passWord,
                success: function(res) {
                    // eslint-disable-next-line
                    console.log("join meeting success");
                    console.log(res);
                },
                error: function(res) {
                    // eslint-disable-next-line
                    console.log(res);
                }
            });
        } catch(e){
        
        }
      },
      error: function(res) {
        // eslint-disable-next-line
        console.log(res);
      }
    });
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
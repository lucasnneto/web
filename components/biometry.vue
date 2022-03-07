<template>
  <div class="biometry relative d-flex justify-center">
    <div v-if="isVideoMode" class="crop relative">
      <video id="video" height="100%" class="absolute"></video>
    </div>
    <canvas v-show="!isVideoMode" id="canvas" class="absolute"></canvas>
    <v-btn v-if="isVideoMode" fab class="absolute button" @click="capture">
      <v-icon>mdi-camera</v-icon>
    </v-btn>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      video: {} as HTMLVideoElement,
      videoStream: {} as MediaStream,
      isVideoMode: true,
    };
  },
  async mounted() {
    // https://stackoverflow.com/questions/36961228/how-to-keep-11-aspect-ratio-video-all-the-time-in-webrtc/36962250#36962250
    const constraints = {
      audio: false,
      video: {
        facingMode: "user",
        // width: 300,
        // height: 570,
        // advanced: [
        //   { width: 300, height: 570 },
        //   { width: 350, height: 600 },
        // ],
        // require: ["height"],
        aspectRatio: { ideal: 1 },
      },
    };
    try {
      this.videoStream = await navigator.mediaDevices.getUserMedia(constraints);
      this.video = document.querySelector("#video") as HTMLVideoElement;
      this.video.srcObject = this.videoStream;
      this.video.play();
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    capture() {
      const canvas: any = document.querySelector("#canvas");
      const div: any = document.querySelector(".crop");

      canvas.width = div.clientWidth; // this.video.videoHeight;
      canvas.height = this.video.videoHeight; // this.video.videoWidth;

      const context = canvas.getContext("2d");
      context.scale(-1, 1);
      context.translate(-div.clientWidth, 0);
      // context.drawImage(this.video, 0, 0);
      context.drawImage(
        this.video,
        canvas.width / 2 - this.video.videoWidth / 2,
        canvas.height / 2 - this.video.videoHeight / 2
      );

      this.isVideoMode = false;
      this.videoStream.getTracks().forEach(function (track) {
        track.stop();
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.crop {
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
}
#video {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
}
#canvas {
  max-height: 100%;
}
.biometry {
  height: 100%;
  width: 100%;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.button {
  bottom: 0;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 20px;
}
</style>

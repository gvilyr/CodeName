import React, {Component} from 'react'

class BoardGame extends Component{

    createObjects (width, height){
        const video = document.createElement('video');
        video.id = 'video';
        video.width = width;
        video.width = height;
        video.autoplay = true;
        document.body.appendChild(video);

        const canvas = document.createElement('canvas');
        canvas.id = 'canvas';
        canvas.width = width;
        canvas.width = height;
        document.body.appendChild(canvas);

        const audio = document.createElement('audio');
        audio.id = 'audio';
        audio.autoplay = true;
        audio.muted = true;
        document.body.appendChild(audio);
    }

    startCamera(){
        this.createObjects('680', '480')
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            this.video = document.getElementById('video');
            this.canvas = document.getElementById('canvas');
            this.audio = document.getElementById('audio');
            this.context = this.canvas.getContext('2d');
            (function (video, audio) {
                navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
                    video.srcObject = stream;
                    video.play();
                });
                navigator.mediaDevices.getUserMedia({audio: true}).then(function (stream) {
                    audio.srcObject = stream;
                    audio.play();
                });
            })(this.video, this.audio)

        }
    }


    render() {
        return <div>
            <button onClick={() => this.startCamera()}>start video</button>
        </div>

    }

}

export default BoardGame

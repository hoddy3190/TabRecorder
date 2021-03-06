var runtimePort;

chrome.runtime.onConnect.addListener(function (port) {
    runtimePort = port;

    runtimePort.onMessage.addListener(function (message) {
        console.log(message);
        if (!message || !message.messageFromContentScript1234) {
            return;
        }

        // if (message.startRecording) {
        //     if (message.onlyMicrophone && enableCamera) {
        //         message.startRecording = false;
        //         message.stopRecording = true;
        //         alert('Unable to access camera device.');
        //         setDefaults();
        //         return;
        //     }
        // }

        if (message.startRecording) {
            if (message.dropdown) {
                openPreviewOnStopRecording = true;
                openCameraPreviewDuringRecording = true;
            }

            if (isRecording && message.dropdown) {
                stopScreenRecording();
                return;
            }

            // webpageからextensionを呼び出したとき用？
            if (message.RecordRTC_Extension) {
                openPreviewOnStopRecording = false;
                openCameraPreviewDuringRecording = false;

                enableTabCaptureAPI = message['enableTabCaptureAPI'] === true;
                enableTabCaptureAPIAudioOnly = message['enableTabCaptureAPIAudioOnly'] === true;
                enableScreen = message['enableScreen'] === true;
                enableMicrophone = message['enableMicrophone'] === true;
                enableCamera = message['enableCamera'] === true;
                enableSpeakers = message['enableSpeakers'] === true;

                startRecordingCallback = function (file) {
                    port.postMessage({
                        messageFromContentScript1234: true,
                        startedRecording: true
                    });
                };

                chrome.storage.sync.set({
                    enableTabCaptureAPI: enableTabCaptureAPI ? 'true' : 'false',
                    enableTabCaptureAPIAudioOnly: enableTabCaptureAPIAudioOnly ? 'true' : 'false',
                    enableMicrophone: enableMicrophone ? 'true' : 'false',
                    enableCamera: enableCamera ? 'true' : 'false',
                    enableScreen: enableScreen ? 'true' : 'false',
                    enableSpeakers: enableSpeakers ? 'true' : 'false',
                    isRecording: 'true'
                }, function () {
                    getUserConfigs();
                });
                return;
            }

            getUserConfigs();
            return;
        }

        if (message.stopRecording) {
            if (message.RecordRTC_Extension) {
                stopRecordingCallback = function (file) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        port.postMessage({
                            messageFromContentScript1234: true,
                            stoppedRecording: true,
                            file: e.target.result
                        });
                    };
                    reader.readAsDataURL(file);
                };
            }

            stopScreenRecording();
            return;
        }
    });


























});




/*
chrome.commands.onCommand.addListener(function (message) {

    if (message == 'start_record') {
        message = { messageFromContentScript1234: true, startRecording: true, dropdown: true };
    } else {
        message = { messageFromContentScript1234: true, stopRecording: true, dropdown: true };
    }

    if (!message || !message.messageFromContentScript1234) {
        return;
    }

    // if (message.startRecording) {
    //     if (message.onlyMicrophone && enableCamera) {
    //         message.startRecording = false;
    //         message.stopRecording = true;
    //         alert('Unable to access camera device.');
    //         setDefaults();
    //         return;
    //     }
    // }

    if (message.startRecording) {
        if (message.dropdown) {
            openPreviewOnStopRecording = true;
            openCameraPreviewDuringRecording = true;
        }

        if (isRecording && message.dropdown) {
            stopScreenRecording();
            return;
        }

        // webpageからextensionを呼び出したとき用？
        if (message.RecordRTC_Extension) {
            openPreviewOnStopRecording = false;
            openCameraPreviewDuringRecording = false;

            enableTabCaptureAPI = message['enableTabCaptureAPI'] === true;
            enableTabCaptureAPIAudioOnly = message['enableTabCaptureAPIAudioOnly'] === true;
            enableScreen = message['enableScreen'] === true;
            enableMicrophone = message['enableMicrophone'] === true;
            enableCamera = message['enableCamera'] === true;
            enableSpeakers = message['enableSpeakers'] === true;

            startRecordingCallback = function (file) {
                port.postMessage({
                    messageFromContentScript1234: true,
                    startedRecording: true
                });
            };

            chrome.storage.sync.set({
                enableTabCaptureAPI: enableTabCaptureAPI ? 'true' : 'false',
                enableTabCaptureAPIAudioOnly: enableTabCaptureAPIAudioOnly ? 'true' : 'false',
                enableMicrophone: enableMicrophone ? 'true' : 'false',
                enableCamera: enableCamera ? 'true' : 'false',
                enableScreen: enableScreen ? 'true' : 'false',
                enableSpeakers: enableSpeakers ? 'true' : 'false',
                isRecording: 'true'
            }, function () {
                getUserConfigs();
            });
            return;
        }

        getUserConfigs();
        return;
    }

    if (message.stopRecording) {
        if (message.RecordRTC_Extension) {
            stopRecordingCallback = function (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    port.postMessage({
                        messageFromContentScript1234: true,
                        stoppedRecording: true,
                        file: e.target.result
                    });
                };
                reader.readAsDataURL(file);
            };
        }

        stopScreenRecording();
        return;
    }
});
*/
import React, { useState, useRef, useEffect } from "react";
import {StyleSheet,View,Text,SafeAreaView,Image,Platform,TouchableOpacity} from "react-native";

import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

import SelectTime from "../snap/SelectTime";
import SendSnapBar from "../snap/SendSnapBar";
import CancelPreviewButton from "../snap/CancelPreviewButton";
import VideoPlayer from "../snap/VideoPlayer";
import VideoRecordIndicator from "../snap/VideoRecordIndicator";
import CaptureControl from "../snap/CaptureControl";
import { getToken,removeToken } from "../storage/token";
import Logout from "./Logout";

export default function HomePage({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const cameraRef = useRef();
  const [path, setPath] = useState(null);
  const [time, setTime] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();

   (async () => {
     const token = await getToken();
     setToken(token);
   })();
  }, []);

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture source", source);
        // console.log("data", data.base64);
        setPath(data.uri);
      }
    }
  };

  const chooseImg = async () => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Sorry, Camera roll permissions are required to make this work!"
          );
        }
      }
    })();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
      setPath(result.uri);
      setIsPreview(true);
    }
  };

  const recordVideo = async () => {
    if (cameraRef.current) {
      try {
        const videoRecordPromise = cameraRef.current.recordAsync();

        if (videoRecordPromise) {
          setIsVideoRecording(true);
          const data = await videoRecordPromise;
          const source = data.uri;
          if (source) {
            setIsPreview(true);
            console.log("video source", source);
            setVideoSource(source);
          }
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const stopVideoRecording = () => {
    if (cameraRef.current) {
      setIsPreview(false);
      setIsVideoRecording(false);
      cameraRef.current.stopRecording();
    }
  };

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setVideoSource(null);
  };

  
  

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }

  const pathImg =
    path == null
      ? "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"
      : path;

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.container}
        type={cameraType}
        flashMode={Camera.Constants.FlashMode.on}
        onCameraReady={onCameraReady}
        onMountError={(error) => {
          console.log("cammera error", error);
        }}
      />
      <View style={styles.container}>
        {isVideoRecording && <VideoRecordIndicator />}
        {videoSource && <VideoPlayer videoSource={videoSource} />}
        {isPreview && <CancelPreviewButton cancelPreview={cancelPreview} />}
        {isPreview && (
          <SendSnapBar cancelPreview={cancelPreview} path={path} time={time} navigation={navigation} />
        )}
        {!videoSource && !isPreview && (
          <CaptureControl
            isCameraReady={isCameraReady}
            switchCamera={switchCamera}
            chooseImg={chooseImg}
            recordVideo={recordVideo}
            stopVideoRecording={stopVideoRecording}
            takePicture={takePicture}
          />
        )}
        {isPreview && (
          <Image
            source={{ uri: pathImg }}
            style={{ width: "100%", height: "100%" }}
          />
        )}
        {isPreview && time == null && <SelectTime setTime={setTime} />}
        {token && <Logout navigation={navigation} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  
  sendContainer: {
    backgroundColor: "yellow",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
  }, 
  text: {
    color: "#fff",
  },
});

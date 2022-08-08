/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetModule
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
const endCall = JitsiMeetModule.endCall;
const setUnMute = JitsiMeetModule.setUnMute;
JitsiMeetModule.call = (url, userInfo, meetOptions, meetFeatureFlags) => {
  userInfo = userInfo || {};
  meetOptions = meetOptions || {};
  meetFeatureFlags = meetFeatureFlags || {};
  call(url, userInfo, meetOptions, meetFeatureFlags);
}
JitsiMeetModule.audioCall = (url, userInfo, meetOptions) => {
  userInfo = userInfo || {};
  audioCall(url, userInfo, meetOptions);
}

JitsiMeetModule.setUnMute = (url, userInfo) => {
  userInfo = userInfo || {};
  setUnMute(url, userInfo)
}

JitsiMeetModule.endCall = () => {
  endCall();
}
export default JitsiMeetModule;



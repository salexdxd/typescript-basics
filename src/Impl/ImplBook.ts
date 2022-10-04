type isAudioType = boolean;

interface ImplBook {
  title: string;
  isAudio?: isAudioType;
}

export { ImplBook, isAudioType };

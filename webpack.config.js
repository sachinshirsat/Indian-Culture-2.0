module.exports = {
  // ... existing config ...
  ignoreWarnings: [
    {
      module: /@mediapipe\/tasks-vision/,
      message: /Failed to parse source map/,
    },
  ],
  // ... existing code ...
}; 
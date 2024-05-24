# Scroll Animations

## Encoding

```bash
# The encoding is super important here to enable frame-by-frame scrubbing.*/

ffmpeg -i original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4

# or

ffmpeg -i original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

# ffmpeg docs: http://ffmpeg.org/ffmpeg.html
```

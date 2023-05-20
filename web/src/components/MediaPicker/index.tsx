import { ChangeEvent, useState } from 'react';


export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>('')
  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewUrl = URL.createObjectURL(files[0])
    setPreview(previewUrl)
  }
  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file" id="media" className="invisible" />

      {preview && <img src={preview} alt="Preview" className="h-[280px] w-full aspect-video rounded-lg object-cover" />}
    </>
  );
}

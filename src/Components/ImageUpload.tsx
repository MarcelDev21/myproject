import { useState } from "react"

type ImageUploadProps = {
  onUploadComplete: (url: string) => void // callback pour renvoyer l'URL au parent
}

export default function ImageUpload({ onUploadComplete }: ImageUploadProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "teztjodh") // ton preset Cloudinary

    try {
      setUploading(true)
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfaz1ez3h/image/upload",
        { method: "POST", body: formData }
      )
      const data = await res.json()
      setImageUrl(data.secure_url)
      onUploadComplete(data.secure_url) // on renvoie l'URL au formulaire
    } catch (err) {
      console.error("Erreur upload :", err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <input type="file" accept="image/*" onChange={handleUpload} />
      {uploading && <p>⏳ Upload en cours...</p>}

      {imageUrl && (
        <img
          src={imageUrl}
          alt="upload"
          className="w-40 h-40 object-cover rounded-md mt-2"
        />
      )}
    </div>
  )
}

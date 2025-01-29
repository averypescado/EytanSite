'use client'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
)

export default function Gallery() {
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // Get direct public URL for im1.png
    const { data } = supabase.storage
      .from('images')
      .getPublicUrl('im1.png')
    
    console.log('Generated URL:', data?.publicUrl)
    if (data?.publicUrl) {
      setImageUrl(data.publicUrl)
    }
  }, [])

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}
      {imageUrl && (
        <div>
          <img 
            src={imageUrl} 
            alt="Test image"
            width={300}
            height={400}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  )
}
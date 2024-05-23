'use server'

export async function getVideoSrc() {
  // Here you can fetch the video source URL from an API or database
  // For this example, we're returning a hardcoded YouTube video ID
  return 'https://www.youtube.com/embed/nqBY5WOif68';
}

export default async function VideoComponent() {
  const src = await getVideoSrc();

  return (
    <div className="relative overflow-hidden pb-[50%] h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        src={src}
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
    </div>
  );
}
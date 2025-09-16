import ObjectDetection from "@/components/ObjectDetection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg:text-7xl tracking-tighter drop-shadow-lg mb-3 md:px-6 text-center">
        Object Detection System</h1>
      <ObjectDetection />
    </main>
  );
}

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { UploadCloud, Sparkles, VideoIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Upload News Screenshot or PDF */}
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="space-y-4 p-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <UploadCloud className="w-5 h-5" /> Upload News
          </h2>
          <Input type="file" accept="image/*,.pdf" />
          <Button className="w-full">Extract Headlines</Button>
        </CardContent>
      </Card>

      {/* AI Generated Script and Image */}
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="space-y-4 p-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> AI Script + Image
          </h2>
          <Textarea
            placeholder="Generated UPSC-style script will appear here..."
            rows={6}
          />
          <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">[AI Image Placeholder]</span>
          </div>
          <Button className="w-full">Approve & Generate Reel</Button>
        </CardContent>
      </Card>

      {/* Reel Output Section */}
      <Card className="rounded-2xl shadow-lg md:col-span-2">
        <CardContent className="space-y-4 p-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <VideoIcon className="w-5 h-5" /> Reel Output
          </h2>
          <div className="aspect-[9/16] bg-black rounded-xl flex items-center justify-center text-white">
            [Reel Preview Placeholder]
          </div>
          <div className="flex gap-4">
            <Button variant="outline">Post to Telegram</Button>
            <Button variant="outline">Post to YouTube</Button>
            <Button variant="default">Download Reel</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
